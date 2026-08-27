/**
 * ============================================================================
 * HEMANTH RANAM CRM & AUTOMATION ENGINE (Single .gs Backend)
 * ============================================================================
 * Version: 2.0.0
 * Environment: Google Apps Script Web App
 * Integrations: Website Webhook -> Google Sheets -> AppSheet CRM -> Email Dispatcher
 *
 * SPREADSHEET TABS:
 *   1. Leads
 *   2. Clients
 *   3. Newsletter Subscribers
 *   4. Activities
 * ============================================================================
 */

// Global Configuration
var CONFIG = {
  API_SECRET_KEY: "HR_SECURE_API_SECRET_2026", // Set via Script Properties in production
  ADMIN_EMAIL: "hemanth.ranam@gmail.com",
  ADMIN_NAME: "Hemanth Ranam",
  WEBSITE_URL: "https://hemanth.ranam.dev",
  COMPANY_NAME: "Hemanth Ranam Systems & Tech",
  SHEET_NAMES: {
    LEADS: "Leads",
    CLIENTS: "Clients",
    SUBSCRIBERS: "Newsletter Subscribers",
    ACTIVITIES: "Activities",
  },
};

/**
 * Handle incoming GET requests (Health check and read API)
 */
function doGet(e) {
  try {
    var action = e.parameter.action || "health";

    if (action === "health") {
      return jsonResponse({
        success: true,
        message: "Hemanth Ranam CRM API is healthy & running.",
        timestamp: new Date().toISOString(),
      });
    }

    // Authenticate for read actions
    if (!verifyAuth(e)) {
      return jsonResponse({ success: false, error: "Unauthorized access." }, 401);
    }

    switch (action) {
      case "listLeads":
        return jsonResponse({ success: true, data: listRecords(CONFIG.SHEET_NAMES.LEADS) });
      case "listClients":
        return jsonResponse({ success: true, data: listRecords(CONFIG.SHEET_NAMES.CLIENTS) });
      case "listSubscribers":
        return jsonResponse({ success: true, data: listRecords(CONFIG.SHEET_NAMES.SUBSCRIBERS) });
      case "getLead":
        return jsonResponse({ success: true, data: getRecordById(CONFIG.SHEET_NAMES.LEADS, "Lead ID", e.parameter.id) });
      default:
        return jsonResponse({ success: false, error: "Invalid action requested." }, 400);
    }
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() }, 500);
  }
}

/**
 * Handle incoming POST requests (Lead creation, Subscription, Conversion)
 */
function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }

    var action = data.action || "createLead";

    // Authenticate token/secret
    var providedKey = data.apiKey || data.token || (e.parameter && e.parameter.apiKey);
    var configuredKey = PropertiesService.getScriptProperties().getProperty("API_SECRET_KEY") || CONFIG.API_SECRET_KEY;

    if (providedKey !== configuredKey && action !== "createLead" && action !== "createSubscriber") {
      return jsonResponse({ success: false, error: "Unauthorized operation." }, 401);
    }

    switch (action) {
      case "createLead":
        return handleCreateLead(data);
      case "createSubscriber":
        return handleCreateSubscriber(data);
      case "convertLeadToClient":
        return handleConvertLeadToClient(data);
      case "updateLeadStatus":
        return handleUpdateLeadStatus(data);
      case "runFollowUpTrigger":
        return handleFollowUpSweep();
      default:
        return jsonResponse({ success: false, error: "Unsupported action." }, 400);
    }
  } catch (error) {
    logActivity("SYSTEM", "ERROR", "doPost Exception: " + error.toString());
    return jsonResponse({ success: false, error: "Internal processing error." }, 500);
  }
}

/**
 * Ensure all sheets and header columns exist with AppSheet compatibility
 */
function initializeSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var schemas = [
    {
      name: CONFIG.SHEET_NAMES.LEADS,
      headers: [
        "Lead ID", "Created At", "Updated At", "Full Name", "Email",
        "WhatsApp Country Code", "WhatsApp Number", "Normalized WhatsApp Number",
        "Company", "Service Interested", "Message", "Source",
        "Status", "Assigned To", "Follow-up Date", "Last Contact Date", "Notes"
      ]
    },
    {
      name: CONFIG.SHEET_NAMES.CLIENTS,
      headers: [
        "Client ID", "Linked Lead ID", "Client Name", "Email",
        "WhatsApp", "Company", "Services", "Status",
        "Created At", "Updated At", "Notes"
      ]
    },
    {
      name: CONFIG.SHEET_NAMES.SUBSCRIBERS,
      headers: [
        "Subscriber ID", "Email", "Name", "Source",
        "Subscription Date", "Status", "Unsubscribe Date", "Notes"
      ]
    },
    {
      name: CONFIG.SHEET_NAMES.ACTIVITIES,
      headers: [
        "Activity ID", "Entity Type", "Entity ID",
        "Action", "Timestamp", "Details"
      ]
    }
  ];

  schemas.forEach(function(schema) {
    var sheet = ss.getSheetByName(schema.name);
    if (!sheet) {
      sheet = ss.insertSheet(schema.name);
      sheet.getRange(1, 1, 1, schema.headers.length).setValues([schema.headers]);
      sheet.getRange(1, 1, 1, schema.headers.length).setFontWeight("bold").setBackground("#F1F5F9");
      sheet.setFrozenRows(1);
    }
  });
}

/**
 * Action: Create a new Lead
 */
function handleCreateLead(data) {
  initializeSpreadsheet();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAMES.LEADS);

  var now = new Date();
  var timestamp = now.toISOString();
  var leadId = data.leadId || generateUniqueId("LEAD");

  var name = sanitize(data.name);
  var email = (data.email || "").trim().toLowerCase();
  var countryCode = sanitize(data.countryCode || "+44");
  var phone = sanitize(data.phone || "");
  var normalizedPhone = sanitize(data.normalizedPhone || phone);
  var company = sanitize(data.company || "");
  var service = sanitize(data.service || "Business Systems Consulting");
  var message = sanitize(data.message || "");
  var source = sanitize(data.source || "Website Form");

  var newRow = [
    leadId,
    timestamp,
    timestamp,
    name,
    email,
    countryCode,
    phone,
    normalizedPhone,
    company,
    service,
    message,
    source,
    "New", // Initial Lead Status
    CONFIG.ADMIN_NAME,
    calculateFutureDate(2), // Default follow up in 2 days
    timestamp,
    ""
  ];

  sheet.appendRow(newRow);

  // 1. Log Activity
  logActivity("LEAD", leadId, "Lead Created from " + source);

  // 2. Send User Confirmation HTML Email
  if (email) {
    sendUserConfirmationEmail({
      to: email,
      name: name,
      leadId: leadId,
      service: service,
    });
  }

  // 3. Send Admin Alert Email to Hemanth
  sendAdminAlertEmail({
    leadId: leadId,
    name: name,
    email: email,
    phone: normalizedPhone,
    company: company,
    service: service,
    message: message,
    timestamp: timestamp,
  });

  return jsonResponse({
    success: true,
    action: "createLead",
    data: {
      leadId: leadId,
      status: "New",
      message: "Lead recorded and automated emails dispatched.",
    },
  });
}

/**
 * Action: Create Newsletter Subscriber
 */
function handleCreateSubscriber(data) {
  initializeSpreadsheet();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAMES.SUBSCRIBERS);

  var email = (data.email || "").trim().toLowerCase();
  if (!email) {
    return jsonResponse({ success: false, error: "Email is required." }, 400);
  }

  // Check for duplicates
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (values[i][1] === email && values[i][5] === "Active") {
      return jsonResponse({
        success: true,
        action: "createSubscriber",
        data: { message: "Already subscribed." }
      });
    }
  }

  var subscriberId = data.subscriberId || generateUniqueId("SUB");
  var now = new Date().toISOString();
  var name = sanitize(data.name || "");
  var source = sanitize(data.source || "Website Newsletter");

  sheet.appendRow([
    subscriberId,
    email,
    name,
    source,
    now,
    "Active",
    "",
    ""
  ]);

  logActivity("SUBSCRIBER", subscriberId, "Newsletter Subscribed: " + email);

  // Send Welcome Email
  sendNewsletterWelcomeEmail({ to: email, name: name });

  return jsonResponse({
    success: true,
    action: "createSubscriber",
    data: { subscriberId: subscriberId, message: "Subscription active." }
  });
}

/**
 * Action: Convert Lead to Client (Idempotent)
 */
function handleConvertLeadToClient(data) {
  var leadId = data.leadId;
  if (!leadId) return jsonResponse({ success: false, error: "leadId is required." }, 400);

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var leadsSheet = ss.getSheetByName(CONFIG.SHEET_NAMES.LEADS);
  var clientsSheet = ss.getSheetByName(CONFIG.SHEET_NAMES.CLIENTS);

  var leadData = leadsSheet.getDataRange().getValues();
  var leadRowIdx = -1;
  var leadRecord = null;

  for (var i = 1; i < leadData.length; i++) {
    if (leadData[i][0] === leadId) {
      leadRowIdx = i + 1;
      leadRecord = leadData[i];
      break;
    }
  }

  if (!leadRecord) {
    return jsonResponse({ success: false, error: "Lead ID not found." }, 404);
  }

  // Prevent duplicate conversion
  if (leadRecord[12] === "Converted") {
    return jsonResponse({ success: true, message: "Lead already converted.", leadId: leadId });
  }

  var clientId = generateUniqueId("CLT");
  var now = new Date().toISOString();

  // Create Client Record
  clientsSheet.appendRow([
    clientId,
    leadId,
    leadRecord[3], // Name
    leadRecord[4], // Email
    leadRecord[7], // Normalized WhatsApp
    leadRecord[8], // Company
    leadRecord[9], // Services
    "Active",
    now,
    now,
    "Converted from Lead " + leadId
  ]);

  // Update Lead Status to 'Converted'
  leadsSheet.getRange(leadRowIdx, 13).setValue("Converted");
  leadsSheet.getRange(leadRowIdx, 3).setValue(now); // Updated At

  logActivity("CLIENT", clientId, "Lead " + leadId + " successfully converted to Client " + clientId);

  return jsonResponse({
    success: true,
    action: "convertLeadToClient",
    data: { clientId: clientId, leadId: leadId, status: "Converted" }
  });
}

/**
 * Action: Update Lead Status
 */
function handleUpdateLeadStatus(data) {
  var leadId = data.leadId;
  var status = data.status;
  if (!leadId || !status) return jsonResponse({ success: false, error: "leadId and status required." }, 400);

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAMES.LEADS);
  var values = sheet.getDataRange().getValues();

  for (var i = 1; i < values.length; i++) {
    if (values[i][0] === leadId) {
      var row = i + 1;
      sheet.getRange(row, 13).setValue(status);
      sheet.getRange(row, 3).setValue(new Date().toISOString());
      logActivity("LEAD", leadId, "Status updated to " + status);
      return jsonResponse({ success: true, leadId: leadId, newStatus: status });
    }
  }

  return jsonResponse({ success: false, error: "Lead not found." }, 404);
}

/**
 * Automated Follow-up Trigger Sweep (Scheduled via Daily Time-Trigger)
 */
function handleFollowUpSweep() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAMES.LEADS);
  var values = sheet.getDataRange().getValues();
  var today = new Date().toISOString().slice(0, 10);
  var emailsSent = 0;

  for (var i = 1; i < values.length; i++) {
    var leadId = values[i][0];
    var name = values[i][3];
    var email = values[i][4];
    var service = values[i][9];
    var status = values[i][12];
    var followUpDate = values[i][14];

    // Check if status is still 'New' or 'Follow-up' and date matches today
    if ((status === "New" || status === "Follow-up") && followUpDate === today && email) {
      sendFollowUpEmail({ to: email, name: name, service: service, leadId: leadId });
      sheet.getRange(i + 1, 13).setValue("Follow-up Sent");
      sheet.getRange(i + 1, 16).setValue(new Date().toISOString());
      logActivity("EMAIL", leadId, "Automated Follow-up email dispatched to " + email);
      emailsSent++;
    }
  }

  return jsonResponse({ success: true, emailsSent: emailsSent });
}

/**
 * ============================================================================
 * EMAIL TEMPLATES & DISPATCHERS
 * ============================================================================
 */

function sendUserConfirmationEmail(params) {
  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; color: #1E293B;">
      <div style="background: #2563EB; padding: 28px; text-align: center; color: #FFFFFF;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">Hemanth Ranam</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Business Systems, Automation & Trading Technology</p>
      </div>
      <div style="padding: 32px 28px;">
        <h2 style="font-size: 18px; color: #0F172A; margin-top: 0;">Thank You for Reaching Out, ${params.name}</h2>
        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          We have successfully received your enquiry regarding <strong>${params.service}</strong>. Your reference ID is:
        </p>
        <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 12px; padding: 14px; text-align: center; margin: 20px 0;">
          <span style="font-family: monospace; font-size: 16px; font-weight: 700; color: #2563EB;">${params.leadId}</span>
        </div>
        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          I am reviewing your project requirements and will respond within 24 hours with an architecture proposal or consultation schedule.
        </p>
        <div style="margin-top: 28px; text-align: center;">
          <a href="${CONFIG.WEBSITE_URL}" style="display: inline-block; background: #2563EB; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 700;">
            Visit Website & Insights
          </a>
        </div>
      </div>
      <div style="background: #F8FAFC; padding: 20px 28px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 11px; color: #94A3B8;">
        © 2026 Hemanth Ranam. All rights reserved. • United Kingdom
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: params.to,
    subject: `Enquiry Received: ${params.service} [${params.leadId}]`,
    htmlBody: htmlBody,
    name: CONFIG.ADMIN_NAME,
  });
}

function sendAdminAlertEmail(params) {
  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; color: #1E293B;">
      <div style="background: #0F172A; padding: 20px; color: #FFFFFF;">
        <span style="background: #2563EB; font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 6px; text-transform: uppercase;">New Project Lead</span>
        <h2 style="margin: 10px 0 0 0; font-size: 20px;">${params.name} — ${params.service}</h2>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr><td style="padding: 8px 0; color: #64748B; width: 120px;">Lead ID:</td><td style="font-weight: 700; color: #2563EB;">${params.leadId}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748B;">Client Name:</td><td style="font-weight: 600;">${params.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748B;">Email:</td><td><a href="mailto:${params.email}">${params.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #64748B;">WhatsApp:</td><td style="font-weight: 700; color: #059669;">${params.phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748B;">Company:</td><td>${params.company || "N/A"}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748B;">Service:</td><td style="font-weight: 600;">${params.service}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 14px; background: #F8FAFC; border-radius: 10px; border-left: 4px solid #2563EB;">
          <strong style="font-size: 12px; color: #334155;">Project Message:</strong>
          <p style="font-size: 13px; color: #1E293B; margin: 6px 0 0 0; line-height: 1.5;">${params.message}</p>
        </div>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: `🚨 New Lead: ${params.name} (${params.service}) [${params.leadId}]`,
    htmlBody: htmlBody,
    name: "CRM Notification Hub",
  });
}

function sendFollowUpEmail(params) {
  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 32px 28px; color: #1E293B;">
      <h2 style="font-size: 18px; color: #0F172A; margin-top: 0;">Hi ${params.name}, Following Up on Your ${params.service} Project</h2>
      <p style="font-size: 14px; line-height: 1.6; color: #475569;">
        I wanted to check in regarding your enquiry (Ref: <strong>${params.leadId}</strong>).
      </p>
      <p style="font-size: 14px; line-height: 1.6; color: #475569;">
        Whether you are ready to finalize scope, have additional technical questions, or want to schedule a brief 1-on-1 strategy call, feel free to reply directly to this email or reach out on WhatsApp.
      </p>
      <div style="margin-top: 24px;">
        <p style="font-size: 13px; color: #334155; margin: 0;">Best regards,</p>
        <p style="font-size: 14px; font-weight: 700; color: #0F172A; margin: 2px 0 0 0;">Hemanth Ranam</p>
        <p style="font-size: 12px; color: #64748B; margin: 0;">Business Systems & Trading Tech Architect</p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: params.to,
    subject: `Following up on your ${params.service} project [${params.leadId}]`,
    htmlBody: htmlBody,
    name: CONFIG.ADMIN_NAME,
  });
}

function sendNewsletterWelcomeEmail(params) {
  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; color: #1E293B;">
      <div style="background: #0F172A; padding: 24px; text-align: center; color: #FFFFFF;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 800;">Welcome to Tech & Systems Dispatch</h1>
      </div>
      <div style="padding: 28px;">
        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          Thank you for subscribing! You’ll receive practical breakdowns on building unified ERPs, serverless AI workflows, non-repainting TradingView indicators, and MetaTrader 5 Expert Advisors.
        </p>
        <div style="margin-top: 20px; text-align: center;">
          <a href="${CONFIG.WEBSITE_URL}/blogs" style="display: inline-block; background: #2563EB; color: #FFFFFF; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: 700;">
            Explore All Insights
          </a>
        </div>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: params.to,
    subject: "Welcome to Hemanth Ranam Tech & Systems Dispatch",
    htmlBody: htmlBody,
    name: CONFIG.ADMIN_NAME,
  });
}

/**
 * ============================================================================
 * UTILITY HELPERS
 * ============================================================================
 */

function generateUniqueId(prefix) {
  var today = Utilities.formatDate(new Date(), "GMT", "yyyyMMdd");
  var random = Math.floor(1000 + Math.random() * 9000);
  return prefix + "-" + today + "-" + random;
}

function sanitize(val) {
  if (!val) return "";
  var str = val.toString().trim();
  // Prevent spreadsheet formula injection
  if (/^[=+@-]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function calculateFutureDate(days) {
  var d = new Date();
  d.setDate(d.getDate() + days);
  return Utilities.formatDate(d, "GMT", "yyyy-MM-dd");
}

function logActivity(entityType, entityId, actionText) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(CONFIG.SHEET_NAMES.ACTIVITIES);
    if (!sheet) return;

    var actId = generateUniqueId("ACT");
    sheet.appendRow([
      actId,
      entityType,
      entityId,
      actionText,
      new Date().toISOString(),
      ""
    ]);
  } catch (e) {
    console.error("Failed to log activity:", e);
  }
}

function listRecords(sheetName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return [];
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  var headers = data[0];
  var records = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = row[j];
    }
    records.push(obj);
  }

  return records;
}

function getRecordById(sheetName, idColumnName, idValue) {
  var records = listRecords(sheetName);
  for (var i = 0; i < records.length; i++) {
    if (records[i][idColumnName] === idValue) {
      return records[i];
    }
  }
  return null;
}

function verifyAuth(e) {
  var configuredKey = PropertiesService.getScriptProperties().getProperty("API_SECRET_KEY") || CONFIG.API_SECRET_KEY;
  var key = e.parameter.apiKey || e.parameter.token;
  return key === configuredKey;
}

function jsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
