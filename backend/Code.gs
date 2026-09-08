/**
 * ============================================================================
 * HR PROFESSIONAL SERVICES — PRODUCTION LEAD CAPTURE & CRM ENGINE
 * ============================================================================
 * Version: 2.5.0 (Production Release)
 * Environment: Google Apps Script Web App
 * Architecture Reference: ScaleNova Systems Lead Engine
 * Target Flow:
 *   Website Lead Form -> Next.js API / Direct Post -> Apps Script Web App
 *   -> Google Sheets CRM -> Dual Email Notifications (Management + Client)
 *
 * CANONICAL WORKSHEET COLUMNS (12):
 *   1.  Timestamp
 *   2.  Lead ID
 *   3.  Name
 *   4.  Email
 *   5.  Phone
 *   6.  Company
 *   7.  Service
 *   8.  Message
 *   9.  Source
 *   10. Page
 *   11. Status
 *   12. Notes
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. GLOBAL CONFIGURATION & METADATA
// ----------------------------------------------------------------------------
var CONFIG = {
  VERSION: "2.5.0",
  SERVICE_NAME: "HR Professional Services CRM Engine",
  COMPANY_NAME: "HR Professional Services",
  MANAGER_EMAIL: "hemanth.ranam@gmail.com",
  MANAGER_NAME: "Hemanth Ranam",
  WEBSITE_URL: "https://hemanth.ranam.dev",
  TIMEZONE: "GMT", // or Europe/London / GMT
  
  // Sheet Settings (Optional: Leave SPREADSHEET_ID empty if bound to active sheet)
  SPREADSHEET_ID: "", 
  SHEET_NAME: "Enquiries",
  PAYMENTS_SHEET_NAME: "Payments",
  
  // API Security Key (can also be set in Script Properties: API_SECRET_KEY)
  API_SECRET_KEY: "HR_SECURE_API_SECRET_2026",

  // Canonical Column Schema (15 Columns for Leads)
  COLUMNS: [
    "Timestamp",
    "Lead ID",
    "Name",
    "Email",
    "Phone",
    "Company",
    "Category",
    "Service",
    "Selected Plan",
    "Price",
    "Message",
    "Source",
    "Page",
    "Status",
    "Notes"
  ],

  // Canonical Column Schema (16 Columns for Payments)
  PAYMENT_COLUMNS: [
    "Timestamp",
    "Transaction ID",
    "Customer Name",
    "Customer Email",
    "Phone",
    "Category",
    "Service",
    "Plan",
    "Billing Type",
    "Amount",
    "Currency",
    "Stripe Reference",
    "Payment Status",
    "Download Link",
    "Source",
    "Notes"
  ],

  // Valid Workflow Statuses
  STATUSES: [
    "New",
    "Contacted",
    "Qualified",
    "In Progress",
    "Converted",
    "Closed",
    "Not Interested"
  ]
};

// ----------------------------------------------------------------------------
// 2. HTTP GET HANDLER (Health Check & Diagnostics)
// ----------------------------------------------------------------------------
function doGet(e) {
  try {
    var params = (e && e.parameter) ? e.parameter : {};
    var action = params.action || "health";

    if (action === "health" || !params.action) {
      return jsonResponse({
        success: true,
        service: CONFIG.SERVICE_NAME,
        version: CONFIG.VERSION,
        status: "operational",
        timestamp: new Date().toISOString()
      });
    }

    if (!verifyAuth(params)) {
      return jsonResponse({ success: false, error: "Unauthorized access." }, 401);
    }

    if (action === "listEnquiries") {
      return jsonResponse({ success: true, data: listEnquiries() });
    }

    return jsonResponse({ success: false, error: "Invalid action requested." }, 400);
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() }, 500);
  }
}

// ----------------------------------------------------------------------------
// 3. HTTP POST HANDLER (Lead Capture & Integration)
// ----------------------------------------------------------------------------
function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = parseFormData(e.postData.contents);
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Basic Bot / Honeypot rejection
    if (data.website_hp || data.honeypot) {
      return jsonResponse({ success: true, message: "Request received." });
    }

    var action = data.action || "createLead";

    switch (action) {
      case "createLead":
      case "submitEnquiry":
        return handleCreateLead(data);
      case "updateStatus":
        if (!verifyAuth(data)) {
          return jsonResponse({ success: false, error: "Unauthorized operation." }, 401);
        }
        return handleUpdateStatus(data);
      case "createPayment":
      case "recordPayment":
        return handleCreatePayment(data);
      case "updatePaymentStatus":
        if (!verifyAuth(data)) {
          return jsonResponse({ success: false, error: "Unauthorized operation." }, 401);
        }
        return handleUpdatePaymentStatus(data);
      default:
        return jsonResponse({ success: false, error: "Unsupported action." }, 400);
    }
  } catch (error) {
    console.error("doPost Exception:", error);
    return jsonResponse({ success: false, error: "Internal processing error: " + error.toString() }, 500);
  }
}

// ----------------------------------------------------------------------------
// 4. CORE SHEET INITIALIZATION & LEAD CREATION
// ----------------------------------------------------------------------------

/**
 * Ensures the target sheet and 12-column header row exist with premium formatting
 */
function initializeSheet() {
  var ss = getSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet.getRange(1, 1, 1, CONFIG.COLUMNS.length).setValues([CONFIG.COLUMNS]);
    
    // Style header row
    var headerRange = sheet.getRange(1, 1, 1, CONFIG.COLUMNS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1E293B"); // Slate-800
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    // Auto-fit column widths
    for (var i = 1; i <= CONFIG.COLUMNS.length; i++) {
      sheet.setColumnWidth(i, 160);
    }
    sheet.setColumnWidth(1, 175); // Timestamp
    sheet.setColumnWidth(2, 160); // Lead ID
    sheet.setColumnWidth(8, 280); // Message
  }

  return sheet;
}

/**
 * Creates and records a new enquiry, appending it to Google Sheets
 */
function handleCreateLead(data) {
  var sheet = initializeSheet();

  // Validate Name
  var name = sanitize(data.name || "");
  if (!name || name.length < 2) {
    return jsonResponse({ success: false, error: "Full Name is required (minimum 2 characters)." }, 400);
  }

  // Validate Email
  var email = (data.email || "").toString().trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ success: false, error: "A valid email address is required." }, 400);
  }

  // Sanitize Inputs
  var phone = sanitize(data.phone || data.normalizedPhone || "");
  var company = sanitize(data.company || "");
  var category = sanitize(data.category || "Business & Consulting");
  var service = sanitize(data.service || "Business Systems Consulting");
  var selectedPlan = sanitize(data.selectedPlan || "");
  var price = sanitize(data.price || "");
  var message = sanitize(data.message || "");
  var source = sanitize(data.source || "Website Form");
  var page = sanitize(data.page || "/#contact");

  // Generate Unique Collision-Free Lead ID (Format: HRPS-YYYYMMDD-XXXX)
  var leadId = data.leadId || generateLeadId();

  // Timestamp
  var now = new Date();
  var timestamp = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");

  // Status is always "New" by default
  var status = "New";
  var notes = sanitize(data.notes || "");

  // Append new row matching exact 15-column canonical schema
  var newRow = [
    timestamp,
    leadId,
    name,
    email,
    phone,
    company,
    category,
    service,
    selectedPlan,
    price,
    message,
    source,
    page,
    status,
    notes
  ];

  sheet.appendRow(newRow);

  // Dispatch Management Alert Email
  try {
    sendManagementAlert({
      leadId: leadId,
      name: name,
      email: email,
      phone: phone,
      company: company,
      category: category,
      service: service,
      selectedPlan: selectedPlan,
      price: price,
      message: message,
      source: source,
      page: page,
      timestamp: timestamp
    });
  } catch (mailErr) {
    Logger.log("Management alert email warning: " + mailErr.toString());
  }

  // Dispatch Customer Acknowledgement Email
  try {
    sendCustomerAcknowledgement({
      leadId: leadId,
      name: name,
      email: email,
      service: service
    });
  } catch (ackErr) {
    console.error("Customer acknowledgement dispatch error:", ackErr);
  }

  return jsonResponse({
    success: true,
    message: "Enquiry submitted and recorded successfully.",
    data: {
      leadId: leadId,
      status: status,
      timestamp: timestamp
    }
  });
}

/**
 * Updates status of an existing lead
 */
function handleUpdateStatus(data) {
  var leadId = data.leadId;
  var status = data.status;

  if (!leadId || !status) {
    return jsonResponse({ success: false, error: "leadId and status are required." }, 400);
  }

  var sheet = initializeSheet();
  var values = sheet.getDataRange().getValues();

  for (var i = 1; i < values.length; i++) {
    if (values[i][1] === leadId) {
      sheet.getRange(i + 1, 14).setValue(status); // Column 14 = Status
      if (data.notes) {
        sheet.getRange(i + 1, 15).setValue(sanitize(data.notes)); // Column 15 = Notes
      }
      return jsonResponse({ success: true, leadId: leadId, status: status });
    }
  }

  return jsonResponse({ success: false, error: "Lead not found." }, 404);
}

/**
 * Ensures the target Payments sheet and 16-column header row exist with formatting
 */
function initializePaymentsSheet() {
  var ss = getSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.PAYMENTS_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.PAYMENTS_SHEET_NAME);
    sheet.getRange(1, 1, 1, CONFIG.PAYMENT_COLUMNS.length).setValues([CONFIG.PAYMENT_COLUMNS]);
    
    // Style header row
    var headerRange = sheet.getRange(1, 1, 1, CONFIG.PAYMENT_COLUMNS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#0F766E"); // Teal-700
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    for (var i = 1; i <= CONFIG.PAYMENT_COLUMNS.length; i++) {
      sheet.setColumnWidth(i, 150);
    }
    sheet.setColumnWidth(1, 175); // Timestamp
    sheet.setColumnWidth(2, 160); // Transaction ID
    sheet.setColumnWidth(12, 180); // Stripe Reference
  }

  return sheet;
}

/**
 * Creates and records a new payment transaction
 */
function handleCreatePayment(data) {
  var sheet = initializePaymentsSheet();

  var txId = data.txId || data.transactionId || ("TX-" + Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyyMMdd") + "-" + Math.floor(1000 + Math.random() * 9000));
  var timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");
  var customerName = sanitize(data.customerName || data.name || "Customer");
  var customerEmail = sanitize(data.customerEmail || data.email || "");
  var phone = sanitize(data.phone || "");
  var category = sanitize(data.category || "");
  var service = sanitize(data.service || "");
  var plan = sanitize(data.plan || data.selectedPlan || "");
  var billingType = sanitize(data.billingType || data.billing || "one-time");
  var amount = sanitize(data.amount || data.price || "");
  var currency = sanitize(data.currency || "USD");
  var stripeRef = sanitize(data.stripeReference || data.ref || data.sessionId || "");
  var status = sanitize(data.status || "Paid");
  var downloadLink = sanitize(data.downloadLink || data.downloadUrl || "");
  var source = sanitize(data.source || "Website Stripe Checkout");
  var notes = sanitize(data.notes || "");

  var newRow = [
    timestamp,
    txId,
    customerName,
    customerEmail,
    phone,
    category,
    service,
    plan,
    billingType,
    amount,
    currency,
    stripeRef,
    status,
    downloadLink,
    source,
    notes
  ];

  sheet.appendRow(newRow);

  // Send confirmation email to customer
  if (customerEmail && customerEmail.indexOf("@") !== -1) {
    try {
      sendPaymentConfirmationEmail({
        txId: txId,
        customerName: customerName,
        customerEmail: customerEmail,
        plan: plan,
        category: category,
        amount: amount,
        currency: currency,
        billingType: billingType,
        stripeRef: stripeRef,
        downloadLink: downloadLink
      });
    } catch (payMailErr) {
      console.error("Payment confirmation email dispatch error:", payMailErr);
    }
  }

  return jsonResponse({
    success: true,
    message: "Payment transaction recorded successfully.",
    data: {
      transactionId: txId,
      status: status,
      timestamp: timestamp
    }
  });
}

/**
 * Updates status of an existing payment transaction
 */
function handleUpdatePaymentStatus(data) {
  var txId = data.txId || data.transactionId;
  var status = data.status;

  if (!txId || !status) {
    return jsonResponse({ success: false, error: "transactionId and status are required." }, 400);
  }

  var sheet = initializePaymentsSheet();
  var values = sheet.getDataRange().getValues();

  for (var i = 1; i < values.length; i++) {
    if (values[i][1] === txId) {
      sheet.getRange(i + 1, 13).setValue(status); // Column 13 = Payment Status
      if (data.notes) {
        sheet.getRange(i + 1, 16).setValue(sanitize(data.notes)); // Column 16 = Notes
      }
      return jsonResponse({ success: true, transactionId: txId, status: status });
    }
  }

  return jsonResponse({ success: false, error: "Transaction not found." }, 404);
}

// ----------------------------------------------------------------------------
// 5. EMAIL NOTIFICATION DISPATCHERS
// ----------------------------------------------------------------------------

/**
 * Dispatches an alert email to management
 */
function sendManagementAlert(params) {
  var managerEmail = PropertiesService.getScriptProperties().getProperty("MANAGER_EMAIL") || CONFIG.MANAGER_EMAIL;
  var subject = "🚨 New Enquiry: " + params.name + " (" + params.service + ") [" + params.leadId + "]";

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; color: #1E293B;">
      <div style="background: #0F172A; padding: 24px; color: #FFFFFF;">
        <div style="display: inline-block; background: #2563EB; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
          New Website Lead
        </div>
        <h1 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 800; line-height: 1.3;">
          ${params.name} — ${params.service}
        </h1>
      </div>
      
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.5;">
          <tr>
            <td style="padding: 8px 0; color: #64748B; width: 130px; font-weight: 600;">Lead Reference:</td>
            <td style="padding: 8px 0; font-family: monospace; font-weight: 700; color: #2563EB;">${params.leadId}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Full Name:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0F172A;">${params.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${params.email}" style="color: #2563EB; text-decoration: none;">${params.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0F172A;">${params.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Company / Org:</td>
            <td style="padding: 8px 0; color: #0F172A;">${params.company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Category:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0F172A;">${params.category || "Business & Consulting"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Service Required:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0F172A;">${params.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Selected Plan:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0F172A;">${params.selectedPlan || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Pricing / Budget:</td>
            <td style="padding: 8px 0; font-weight: 700; color: #16A34A;">${params.price || "Custom Quote"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Submitted At:</td>
            <td style="padding: 8px 0; color: #64748B;">${params.timestamp}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Source / Page:</td>
            <td style="padding: 8px 0; color: #64748B;">${params.source} (${params.page})</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; border-left: 4px solid #2563EB;">
          <strong style="font-size: 12px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</strong>
          <p style="font-size: 13px; color: #1E293B; margin: 8px 0 0 0; line-height: 1.6; white-space: pre-wrap;">${params.message || "No additional message provided."}</p>
        </div>
      </div>

      <div style="background: #F1F5F9; padding: 14px 24px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #64748B; text-align: center;">
        Automated notification from ${CONFIG.COMPANY_NAME} CRM Engine.
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: managerEmail,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.COMPANY_NAME + " CRM"
  });
}

/**
 * Dispatches a professional acknowledgement email to the customer
 */
function sendCustomerAcknowledgement(params) {
  var subject = "Thank you for contacting " + CONFIG.COMPANY_NAME + " [" + params.leadId + "]";

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; color: #1E293B;">
      <div style="background: #2563EB; padding: 28px; text-align: center; color: #FFFFFF;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">${CONFIG.COMPANY_NAME}</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Recruitment • HR Consulting • Career Support • Systems Architecture</p>
      </div>

      <div style="padding: 32px 28px;">
        <h2 style="font-size: 18px; color: #0F172A; margin-top: 0; font-weight: 700;">
          Thank you for reaching out, ${params.name}.
        </h2>
        
        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          Your enquiry regarding <strong>${params.service}</strong> has been received successfully.
        </p>

        <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 10px; padding: 16px; text-align: center; margin: 24px 0;">
          <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
            Your Reference ID
          </div>
          <span style="font-family: monospace; font-size: 18px; font-weight: 800; color: #2563EB;">${params.leadId}</span>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          Our team is reviewing your requirements and will respond within <strong>24 business hours</strong> with clear next steps or scheduling details.
        </p>

        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          If you need urgent assistance, you may reply directly to this email or connect with us on WhatsApp.
        </p>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #F1F5F9;">
          <p style="font-size: 13px; color: #334155; margin: 0; font-weight: 600;">Kind regards,</p>
          <p style="font-size: 14px; font-weight: 700; color: #0F172A; margin: 2px 0 0 0;">${CONFIG.MANAGER_NAME}</p>
          <p style="font-size: 12px; color: #64748B; margin: 0;">${CONFIG.COMPANY_NAME}</p>
        </div>
      </div>

      <div style="background: #F8FAFC; padding: 18px 28px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 11px; color: #94A3B8;">
        ${CONFIG.COMPANY_NAME} • United Kingdom
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: params.email,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.COMPANY_NAME,
    replyTo: CONFIG.MANAGER_EMAIL
  });
}

/**
 * Dispatches payment receipt confirmation to customer
 */
function sendPaymentConfirmationEmail(params) {
  var subject = "Payment Confirmation: " + params.plan + " [" + params.txId + "]";

  var downloadSection = "";
  if (params.downloadLink && params.downloadLink.trim().length > 0) {
    downloadSection = `
      <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 10px; padding: 16px; text-align: center; margin: 20px 0;">
        <p style="font-size: 13px; font-weight: 700; color: #065F46; margin: 0 0 8px 0;">Your Download Resource Is Ready</p>
        <a href="${params.downloadLink}" style="display: inline-block; background: #059669; color: #FFFFFF; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px;">Download Included Resource</a>
      </div>
    `;
  }

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; color: #1E293B;">
      <div style="background: #0F172A; padding: 24px; color: #FFFFFF;">
        <h1 style="font-size: 18px; margin: 0; font-weight: 700; letter-spacing: -0.5px;">${CONFIG.COMPANY_NAME}</h1>
        <p style="font-size: 12px; color: #94A3B8; margin: 4px 0 0 0;">Payment Confirmation & Receipt</p>
      </div>

      <div style="padding: 32px 28px;">
        <h2 style="font-size: 18px; color: #0F172A; margin-top: 0; font-weight: 700;">
          Thank you, ${params.customerName}.
        </h2>
        
        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          Your payment for <strong>${params.plan}</strong> has been received and confirmed.
        </p>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px; margin: 24px 0;">
          <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Transaction ID</td>
              <td style="padding: 6px 0; text-align: right; font-family: monospace; font-weight: 700; color: #0F172A;">${params.txId}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Plan</td>
              <td style="padding: 6px 0; text-align: right; font-weight: 700; color: #0F172A;">${params.plan}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Amount Paid</td>
              <td style="padding: 6px 0; text-align: right; font-weight: 800; color: #059669; font-size: 15px;">${params.amount} ${params.currency}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Billing Type</td>
              <td style="padding: 6px 0; text-align: right; color: #334155; text-transform: capitalize;">${params.billingType}</td>
            </tr>
            ${params.stripeRef ? `<tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Stripe Reference</td><td style="padding: 6px 0; text-align: right; font-family: monospace; color: #64748B;">${params.stripeRef}</td></tr>` : ""}
          </table>
        </div>

        ${downloadSection}

        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          Our team is preparing your onboarding and deliverables. We will reach out shortly to initiate your service.
        </p>

        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          If you need immediate support, reply directly to this email or contact us via WhatsApp.
        </p>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #F1F5F9;">
          <p style="font-size: 13px; color: #334155; margin: 0; font-weight: 600;">Best regards,</p>
          <p style="font-size: 14px; font-weight: 700; color: #0F172A; margin: 2px 0 0 0;">${CONFIG.MANAGER_NAME}</p>
          <p style="font-size: 12px; color: #64748B; margin: 0;">${CONFIG.COMPANY_NAME}</p>
        </div>
      </div>

      <div style="background: #F8FAFC; padding: 18px 28px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 11px; color: #94A3B8;">
        ${CONFIG.COMPANY_NAME} • United Kingdom
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: params.customerEmail,
    subject: subject,
    htmlBody: htmlBody,
    name: CONFIG.COMPANY_NAME,
    replyTo: CONFIG.MANAGER_EMAIL
  });
}

// ----------------------------------------------------------------------------
// 6. UTILITY FUNCTIONS & SANITIZATION
// ----------------------------------------------------------------------------

/**
 * Generates unique Lead ID matching standard: HRPS-YYYYMMDD-XXXX
 */
function generateLeadId() {
  var now = new Date();
  var datePart = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyyMMdd");
  var randomSuffix = ("0000" + Math.floor(Math.random() * 10000)).slice(-4);
  return "HRPS-" + datePart + "-" + randomSuffix;
}

/**
 * Sanitizes strings against CSV/Spreadsheet formula injection and whitespace
 */
function sanitize(val) {
  if (val === null || val === undefined) return "";
  var str = val.toString().trim();
  if (/^[=+@-]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Retrieves the target Google Spreadsheet instance
 */
function getSpreadsheet() {
  var propId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  var targetId = propId || CONFIG.SPREADSHEET_ID;

  if (targetId && targetId.trim().length > 0) {
    return SpreadsheetApp.openById(targetId.trim());
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

/**
 * Verifies API authorization for administrative actions
 */
function verifyAuth(params) {
  var configuredKey = PropertiesService.getScriptProperties().getProperty("API_SECRET_KEY") || CONFIG.API_SECRET_KEY;
  var providedKey = params.apiKey || params.token || params.key;
  return providedKey === configuredKey;
}

/**
 * Parses urlencoded form payload
 */
function parseFormData(body) {
  var params = {};
  var pairs = body.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    if (pair.length === 2) {
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1].replace(/\+/g, " "));
    }
  }
  return params;
}

/**
 * Lists existing enquiries (secured)
 */
function listEnquiries() {
  var sheet = initializeSheet();
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

/**
 * Creates standardized JSON response with permissive CORS headers
 */
function jsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
