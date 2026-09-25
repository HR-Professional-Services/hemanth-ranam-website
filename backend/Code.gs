/**
 * ============================================================================
 * HR PROFESSIONAL SERVICES — PRODUCTION LEAD CAPTURE, CRM & DELIVERY ENGINE
 * ============================================================================
 * Version: 2.6.0 (Automated Drive Workspace Engine & Stripe Integration)
 * Environment: Google Apps Script Web App
 * Target Flow:
 *   Website Lead Form -> Next.js API / Direct Post -> Apps Script Web App
 *   Stripe Webhook -> Apps Script Web App -> Payment Logged ->
 *   Automated Google Drive Workspace Provisioning -> Gmail Delivery with Private Link
 *
 * GOOGLE DRIVE ARCHITECTURE:
 *   Master Root Folder ID: 1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l (HR - Services)
 *   Target Client Provisioning: 13 - CLIENT MANAGEMENT / CLI-YYYY-XXXX - [Client Name]
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. GLOBAL CONFIGURATION & METADATA
// ----------------------------------------------------------------------------
var CONFIG = {
  VERSION: "2.6.0",
  SERVICE_NAME: "HR Professional Services CRM & Delivery Engine",
  COMPANY_NAME: "HR Professional Services",
  MANAGER_EMAIL: "hemanth.ranam@gmail.com",
  MANAGER_NAME: "Hemanth Ranam",
  WEBSITE_URL: "https://hemanth.ranam.dev",
  TIMEZONE: "GMT", // or Europe/London / GMT
  
  // Sheet Settings (Optional: Leave SPREADSHEET_ID empty if bound to active sheet)
  SPREADSHEET_ID: "", 
  SHEET_NAME: "Enquiries",
  PAYMENTS_SHEET_NAME: "Payments",
  CRM_SHEET_NAME: "Clients",
  
  // Master Google Drive Root (HR - Services)
  MASTER_ROOT_FOLDER_ID: "1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l",
  CLIENT_MANAGEMENT_FOLDER_NAME: "13 - CLIENT MANAGEMENT",

  // Master Operating Google Drive Folders (HR - Services)
  MASTER_FOLDERS: [
    "00 - MASTER CONTROL",
    "01 - CONSULTING",
    "02 - WEBSITE SERVICES",
    "03 - BUSINESS AUTOMATION",
    "04 - GOOGLE SHEETS & APPS SCRIPT",
    "05 - FRAPPE & ERPNEXT",
    "06 - TRADING TECHNOLOGY",
    "07 - TEMPLATES",
    "08 - CHECKLISTS",
    "09 - TRAINING",
    "10 - CODE & AUTOMATION KITS",
    "11 - MONTHLY SERVICES",
    "12 - FREE RESOURCES",
    "13 - CLIENT MANAGEMENT",
    "14 - SALES & LEADS",
    "15 - FINANCE & ACCOUNTING",
    "16 - MARKETING",
    "17 - WEBSITE & SEO",
    "18 - BUSINESS OPERATIONS",
    "19 - TRADING & RESEARCH",
    "99 - ARCHIVE"
  ],

  // 12 Core Free Resources
  FREE_RESOURCES_LIST: [
    "FREE-001 - Business Audit Workbook",
    "FREE-002 - Free CRM Sheet",
    "FREE-003 - Free Lead Tracker",
    "FREE-004 - Free Sales Tracker",
    "FREE-005 - Free Cash Flow Sheet",
    "FREE-006 - Free Website Launch Checklist",
    "FREE-007 - Free Automation Checklist",
    "FREE-008 - Free SEO Checklist",
    "FREE-009 - Free AI Business Guide",
    "FREE-010 - Free Business Operations Template",
    "FREE-011 - Free Business Systems Assessment",
    "FREE-012 - Free Google Sheets Master Guide"
  ],

  // Free Resource Standard Subfolders
  FREE_RESOURCE_SUBFOLDERS: [
    "01 - Resource",
    "02 - Preview",
    "03 - Download",
    "04 - Marketing",
    "05 - Email",
    "06 - SEO",
    "99 - Archive"
  ],
  
  // Standard Client Workspace Subfolders
  CLIENT_SUBFOLDERS: [
    "00 - Client Profile & Contracts",
    "01 - Requirements & Intake",
    "02 - Working Files",
    "03 - Deliverables",
    "04 - Training & SOPs",
    "05 - Support & Milestone Notes"
  ],

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
    "Workspace Link",
    "Source",
    "Notes"
  ],

  // Canonical Column Schema for Clients
  CRM_COLUMNS: [
    "Timestamp",
    "Client ID",
    "Company Name",
    "Contact Name",
    "Email",
    "Phone",
    "Active Services",
    "Drive Folder URL",
    "Status",
    "Payment Reference",
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
        driveRootConfigured: !!CONFIG.MASTER_ROOT_FOLDER_ID,
        timestamp: new Date().toISOString()
      });
    }

    if (!verifyAuth(params)) {
      return jsonResponse({ success: false, error: "Unauthorized access." }, 401);
    }

    if (action === "listEnquiries") {
      return jsonResponse({ success: true, data: listEnquiries() });
    }

    if (action === "processQueue") {
      var queueResult = processProvisioningQueue();
      return jsonResponse({ success: true, result: queueResult });
    }

    if (action === "setupMasterDrive") {
      var setupResult = setupMasterDriveFolders();
      return jsonResponse({ success: true, result: setupResult });
    }

    if (action === "getDriveTree") {
      var treeResult = getDriveTree(params.folderId);
      return jsonResponse({ success: true, result: treeResult });
    }

    return jsonResponse({ success: false, error: "Invalid action requested." }, 400);
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() }, 500);
  }
}

// ----------------------------------------------------------------------------
// 3. HTTP POST HANDLER (Lead Capture, Payments & Webhooks)
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

    // Bot / Honeypot rejection
    if (data.website_hp || data.honeypot) {
      return jsonResponse({ success: true, message: "Request received." });
    }

    // Direct Stripe Webhook event detection
    if (data.object === "event" || (data.type && data.type.indexOf("checkout.session") !== -1)) {
      return handleStripeWebhook(data);
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
        
      case "stripeWebhook":
        return handleStripeWebhook(data);
        
      case "provisionWorkspace":
        if (!verifyAuth(data)) {
          return jsonResponse({ success: false, error: "Unauthorized operation." }, 401);
        }
        var provResult = provisionClientWorkspace(data);
        return jsonResponse(provResult);
        
      case "processQueue":
        if (!verifyAuth(data)) {
          return jsonResponse({ success: false, error: "Unauthorized operation." }, 401);
        }
        var qResult = processProvisioningQueue();
        return jsonResponse({ success: true, result: qResult });
        
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

function initializeSheet() {
  var ss = getSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet.getRange(1, 1, 1, CONFIG.COLUMNS.length).setValues([CONFIG.COLUMNS]);
    
    var headerRange = sheet.getRange(1, 1, 1, CONFIG.COLUMNS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1E293B"); // Slate-800
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    for (var i = 1; i <= CONFIG.COLUMNS.length; i++) {
      sheet.setColumnWidth(i, 160);
    }
    sheet.setColumnWidth(1, 175); // Timestamp
    sheet.setColumnWidth(2, 160); // Lead ID
    sheet.setColumnWidth(8, 280); // Message
  }

  return sheet;
}

function handleCreateLead(data) {
  var sheet = initializeSheet();

  var name = sanitize(data.name || "");
  if (!name || name.length < 2) {
    return jsonResponse({ success: false, error: "Full Name is required (minimum 2 characters)." }, 400);
  }

  var email = (data.email || "").toString().trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ success: false, error: "A valid email address is required." }, 400);
  }

  var phone = sanitize(data.phone || data.normalizedPhone || "");
  var company = sanitize(data.company || "");
  var category = sanitize(data.category || "Business & Consulting");
  var service = sanitize(data.service || "Business Systems Consulting");
  var selectedPlan = sanitize(data.selectedPlan || "");
  var price = sanitize(data.price || "");
  var message = sanitize(data.message || "");
  var source = sanitize(data.source || "Website Form");
  var page = sanitize(data.page || "/#contact");

  var leadId = data.leadId || generateLeadId();
  var now = new Date();
  var timestamp = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");
  var status = "New";
  var notes = sanitize(data.notes || "");

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
      sheet.getRange(i + 1, 14).setValue(status);
      if (data.notes) {
        sheet.getRange(i + 1, 15).setValue(sanitize(data.notes));
      }
      return jsonResponse({ success: true, leadId: leadId, status: status });
    }
  }

  return jsonResponse({ success: false, error: "Lead not found." }, 404);
}

// ----------------------------------------------------------------------------
// 5. PAYMENTS & STRIPE WEBHOOK HANDLER
// ----------------------------------------------------------------------------

function initializePaymentsSheet() {
  var ss = getSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.PAYMENTS_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.PAYMENTS_SHEET_NAME);
    sheet.getRange(1, 1, 1, CONFIG.PAYMENT_COLUMNS.length).setValues([CONFIG.PAYMENT_COLUMNS]);
    
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
    sheet.setColumnWidth(14, 250); // Workspace Link
  }

  return sheet;
}

function initializeCrmSheet() {
  var ss = getSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.CRM_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.CRM_SHEET_NAME);
    sheet.getRange(1, 1, 1, CONFIG.CRM_COLUMNS.length).setValues([CONFIG.CRM_COLUMNS]);
    
    var headerRange = sheet.getRange(1, 1, 1, CONFIG.CRM_COLUMNS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1E40AF"); // Blue-800
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    for (var i = 1; i <= CONFIG.CRM_COLUMNS.length; i++) {
      sheet.setColumnWidth(i, 150);
    }
    sheet.setColumnWidth(1, 175);
    sheet.setColumnWidth(2, 160);
    sheet.setColumnWidth(8, 250); // Drive Folder Link
  }

  return sheet;
}

/**
 * Handles incoming Stripe Webhook payloads (checkout.session.completed, etc.)
 */
function handleStripeWebhook(event) {
  var session = (event.data && event.data.object) ? event.data.object : event;

  var customerEmail = session.customer_email || (session.customer_details ? session.customer_details.email : "");
  var customerName = (session.customer_details ? session.customer_details.name : "") || "Valued Client";
  var amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : (session.amount || "0");
  var currency = (session.currency || "USD").toUpperCase();
  var stripeRef = session.id || session.payment_intent || ("STRIPE-" + Date.now());
  var metadata = session.metadata || {};

  var service = metadata.service || metadata.serviceName || metadata.plan || "HR Professional Service";
  var category = metadata.category || "Consulting & Services";
  var billingType = session.mode === "subscription" ? "monthly" : "one-time";
  var googleEmail = metadata.googleEmail || customerEmail;

  var sheet = initializePaymentsSheet();

  // IDEMPOTENCY CHECK: Guard against duplicate Stripe webhooks
  var values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (values[i][11] === stripeRef) { // Column 12 = Stripe Reference
      return jsonResponse({
        success: true,
        message: "Webhook already processed (Idempotent replay).",
        transactionId: values[i][1],
        workspace: values[i][13] || null,
        alreadyProcessed: true
      });
    }
  }

  // Standard Order ID format: ORD-YYYY-XXXX
  var year = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy");
  var orderSuffix = ("0000" + Math.floor(Math.random() * 10000)).slice(-4);
  var orderId = "ORD-" + year + "-" + orderSuffix;
  var timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");

  // Record initial payment record
  var newRow = [
    timestamp,
    orderId,
    customerName,
    customerEmail,
    session.customer_details ? (session.customer_details.phone || "") : "",
    category,
    service,
    service,
    billingType,
    amount,
    currency,
    stripeRef,
    "PENDING_PROVISIONING",
    "",
    "Stripe Webhook",
    "Google Account: " + googleEmail
  ];
  sheet.appendRow(newRow);

  // Synchronously provision or let queue handle it safely
  var prov = provisionClientWorkspace({
    txId: orderId,
    orderId: orderId,
    customerName: customerName,
    customerEmail: customerEmail,
    googleEmail: googleEmail,
    company: metadata.company || customerName,
    service: service,
    category: category,
    billingType: billingType,
    amount: amount,
    currency: currency,
    stripeRef: stripeRef
  });

  // Update payment row with workspace link & status
  var lastRow = sheet.getLastRow();
  if (prov.success) {
    sheet.getRange(lastRow, 13).setValue("COMPLETED");
    sheet.getRange(lastRow, 14).setValue(prov.folderUrl);
  } else {
    sheet.getRange(lastRow, 13).setValue("PAYMENT_SUCCESS_PROVISIONING_FAILED");
    sheet.getRange(lastRow, 16).setValue("Provisioning error: " + (prov.error || "Check Drive permissions"));
  }

  return jsonResponse({
    success: true,
    message: "Stripe event processed successfully.",
    transactionId: orderId,
    orderId: orderId,
    workspace: prov.folderUrl || null,
    provisioningStatus: prov.success ? "COMPLETED" : "FAILED"
  });
}

function handleCreatePayment(data) {
  var sheet = initializePaymentsSheet();

  var txId = data.txId || data.transactionId || ("TX-" + Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyyMMdd") + "-" + Math.floor(1000 + Math.random() * 9000));
  var timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");
  var customerName = sanitize(data.customerName || data.name || "Customer");
  var customerEmail = sanitize(data.customerEmail || data.email || "");
  var googleEmail = sanitize(data.googleEmail || customerEmail);
  var phone = sanitize(data.phone || "");
  var category = sanitize(data.category || "");
  var service = sanitize(data.service || "");
  var plan = sanitize(data.plan || data.selectedPlan || "");
  var billingType = sanitize(data.billingType || data.billing || "one-time");
  var amount = sanitize(data.amount || data.price || "");
  var currency = sanitize(data.currency || "USD");
  var stripeRef = sanitize(data.stripeReference || data.ref || data.sessionId || "");
  var source = sanitize(data.source || "Website Stripe Checkout");
  var notes = sanitize(data.notes || "");

  var prov = provisionClientWorkspace({
    txId: txId,
    customerName: customerName,
    customerEmail: customerEmail,
    googleEmail: googleEmail,
    company: customerName,
    service: service || plan,
    category: category,
    billingType: billingType,
    amount: amount,
    currency: currency,
    stripeRef: stripeRef
  });

  var status = prov.success ? "Paid & Provisioned" : "Paid";
  var workspaceUrl = prov.success ? prov.folderUrl : "";

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
    workspaceUrl,
    source,
    notes
  ];

  sheet.appendRow(newRow);

  return jsonResponse({
    success: true,
    message: "Payment transaction recorded and workspace initialized.",
    data: {
      transactionId: txId,
      status: status,
      workspaceUrl: workspaceUrl,
      timestamp: timestamp
    }
  });
}

// ----------------------------------------------------------------------------
// 6. AUTOMATED GOOGLE DRIVE WORKSPACE PROVISIONING
// ----------------------------------------------------------------------------

/**
 * Creates private dedicated client folder structure in Google Drive and shares permissions
 */
function provisionClientWorkspace(params) {
  try {
    var rootFolderId = PropertiesService.getScriptProperties().getProperty("MASTER_ROOT_FOLDER_ID") || CONFIG.MASTER_ROOT_FOLDER_ID;
    if (!rootFolderId) {
      return { success: false, error: "Master Drive root folder ID is not configured." };
    }

    var rootFolder = DriveApp.getFolderById(rootFolderId);
    
    // Find or create "13 - CLIENT MANAGEMENT"
    var clientMgmtFolder = null;
    var subFolders = rootFolder.getFoldersByName(CONFIG.CLIENT_MANAGEMENT_FOLDER_NAME);
    if (subFolders.hasNext()) {
      clientMgmtFolder = subFolders.next();
    } else {
      clientMgmtFolder = rootFolder.createFolder(CONFIG.CLIENT_MANAGEMENT_FOLDER_NAME);
    }

    // Generate unique Client ID: CLI-YYYY-XXXX
    var year = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy");
    var clientSuffix = ("0000" + Math.floor(Math.random() * 10000)).slice(-4);
    var clientId = "CLI-" + year + "-" + clientSuffix;

    var sanitizedCompanyName = (params.company || params.customerName || "Client").replace(/[\/\\:*?"<>|]/g, "").trim();
    var clientFolderName = clientId + " - " + sanitizedCompanyName;

    // Create primary client workspace folder
    var clientFolder = clientMgmtFolder.createFolder(clientFolderName);
    var folderUrl = clientFolder.getUrl();

    // Create the 6 standard subfolders
    for (var i = 0; i < CONFIG.CLIENT_SUBFOLDERS.length; i++) {
      clientFolder.createFolder(CONFIG.CLIENT_SUBFOLDERS[i]);
    }

    // Safe permission granting (Viewer by default for security, with fallback handling)
    var targetEmail = (params.googleEmail || params.customerEmail || "").trim();
    var permissionStatus = "Pending Verification";

    if (targetEmail && targetEmail.indexOf("@") !== -1) {
      try {
        clientFolder.addViewer(targetEmail);
        permissionStatus = "Granted (" + targetEmail + ")";
      } catch (permErr) {
        console.warn("Could not grant Drive permission directly to " + targetEmail + ":", permErr);
        permissionStatus = "Non-Google Email Alert: Direct Grant Failed (" + permErr.toString() + ")";
      }
    }

    // Append to CRM Clients Sheet
    try {
      var crmSheet = initializeCrmSheet();
      var nowStr = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");
      crmSheet.appendRow([
        nowStr,
        clientId,
        sanitizedCompanyName,
        params.customerName,
        targetEmail,
        params.phone || "",
        params.service || "Purchased Service",
        folderUrl,
        "Active",
        params.stripeRef || params.txId || "",
        "Workspace: " + permissionStatus
      ]);
    } catch (crmErr) {
      console.error("CRM logging error:", crmErr);
    }

    // Dispatch branded delivery email with private Drive workspace link
    try {
      sendWorkspaceWelcomeEmail({
        clientId: clientId,
        customerName: params.customerName,
        customerEmail: params.customerEmail,
        service: params.service,
        amount: params.amount,
        currency: params.currency,
        folderUrl: folderUrl,
        targetEmail: targetEmail,
        permissionStatus: permissionStatus,
        category: params.category || "Consulting & Services"
      });
    } catch (welcomeMailErr) {
      console.error("Workspace welcome email error:", welcomeMailErr);
    }

    return {
      success: true,
      clientId: clientId,
      folderId: clientFolder.getId(),
      folderUrl: folderUrl,
      permissionStatus: permissionStatus
    };
  } catch (err) {
    console.error("provisionClientWorkspace exception:", err);
    return { success: false, error: err.toString() };
  }
}

/**
 * Provisions the complete 20-folder Master Operating Hierarchy
 * inside Google Drive Root (HR - Services: 1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l).
 * Idempotent: checks for existing folders and never creates duplicates.
 */
function setupMasterDriveFolders() {
  var rootFolderId = PropertiesService.getScriptProperties().getProperty("MASTER_ROOT_FOLDER_ID") || CONFIG.MASTER_ROOT_FOLDER_ID;
  if (!rootFolderId) {
    throw new Error("Master Drive root folder ID is not configured.");
  }

  var rootFolder;
  try {
    rootFolder = DriveApp.getFolderById(rootFolderId);
  } catch (err) {
    throw new Error("Unable to access Master Root Folder ID (" + rootFolderId + "): " + err.toString());
  }

  var existingFolders = {};
  var folderIter = rootFolder.getFolders();
  while (folderIter.hasNext()) {
    var f = folderIter.next();
    existingFolders[f.getName().trim().toLowerCase()] = f;
  }

  var created = [];
  var existing = [];

  CONFIG.MASTER_FOLDERS.forEach(function(folderName) {
    var key = folderName.trim().toLowerCase();
    var targetFolder;
    if (existingFolders[key]) {
      targetFolder = existingFolders[key];
      existing.push(folderName);
    } else {
      targetFolder = rootFolder.createFolder(folderName);
      existingFolders[key] = targetFolder;
      created.push(folderName);
    }

    // Provision subfolders for 12 - FREE RESOURCES
    if (folderName.indexOf("12 - FREE RESOURCES") !== -1) {
      var freeExisting = {};
      var subIter = targetFolder.getFolders();
      while (subIter.hasNext()) {
        var sf = subIter.next();
        freeExisting[sf.getName().trim().toLowerCase()] = sf;
      }

      CONFIG.FREE_RESOURCES_LIST.forEach(function(resName) {
        var resKey = resName.trim().toLowerCase();
        var resFolder;
        if (freeExisting[resKey]) {
          resFolder = freeExisting[resKey];
        } else {
          resFolder = targetFolder.createFolder(resName);
        }

        // Subfolders for each free resource
        var itemExisting = {};
        var itemIter = resFolder.getFolders();
        while (itemIter.hasNext()) {
          var itemF = itemIter.next();
          itemExisting[itemF.getName().trim().toLowerCase()] = itemF;
        }
        CONFIG.FREE_RESOURCE_SUBFOLDERS.forEach(function(subName) {
          if (!itemExisting[subName.trim().toLowerCase()]) {
            resFolder.createFolder(subName);
          }
        });
      });
    }
  });

  return {
    success: true,
    rootFolderId: rootFolderId,
    rootFolderName: rootFolder.getName(),
    createdCount: created.length,
    reusedCount: existing.length,
    createdFolders: created,
    reusedFolders: existing,
    timestamp: new Date().toISOString()
  };
}

/**
 * Returns a complete JSON tree of folders and files inside HR - Services.
 * Allows Antigravity / external tools to inspect Drive state securely via the Web App.
 */
function getDriveTree(targetFolderId) {
  var folderId = targetFolderId || PropertiesService.getScriptProperties().getProperty("MASTER_ROOT_FOLDER_ID") || CONFIG.MASTER_ROOT_FOLDER_ID;
  var root = DriveApp.getFolderById(folderId);

  function scanFolder(folder, depth) {
    if (depth > 3) return null; // Protect execution limits
    var node = {
      id: folder.getId(),
      name: folder.getName(),
      url: folder.getUrl(),
      folders: [],
      files: []
    };

    var subFolders = folder.getFolders();
    while (subFolders.hasNext()) {
      var sf = subFolders.next();
      node.folders.push(scanFolder(sf, depth + 1));
    }

    var files = folder.getFiles();
    while (files.hasNext()) {
      var f = files.next();
      node.files.push({
        id: f.getId(),
        name: f.getName(),
        mimeType: f.getMimeType(),
        size: f.getSize(),
        lastUpdated: f.getLastUpdated().toISOString()
      });
    }

    return node;
  }

  return {
    success: true,
    scannedAt: new Date().toISOString(),
    tree: scanFolder(root, 1)
  };
}

/**
 * Queue processor: processes any pending orders without timing out
 */
function processProvisioningQueue() {
  var sheet = initializePaymentsSheet();
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return "No orders found.";

  var processedCount = 0;
  for (var i = 1; i < data.length; i++) {
    var status = data[i][12]; // Column 13: Payment Status
    if (status === "Pending Provisioning") {
      var txId = data[i][1];
      var customerName = data[i][2];
      var customerEmail = data[i][3];
      var category = data[i][5];
      var service = data[i][6];
      var amount = data[i][9];
      var currency = data[i][10];
      var stripeRef = data[i][11];

      var prov = provisionClientWorkspace({
        txId: txId,
        customerName: customerName,
        customerEmail: customerEmail,
        service: service,
        category: category,
        amount: amount,
        currency: currency,
        stripeRef: stripeRef
      });

      if (prov.success) {
        sheet.getRange(i + 1, 13).setValue("Paid & Provisioned");
        sheet.getRange(i + 1, 14).setValue(prov.folderUrl);
        processedCount++;
      }
    }
  }

  return "Processed " + processedCount + " queued orders.";
}

// ----------------------------------------------------------------------------
// 7. EMAIL NOTIFICATION DISPATCHERS
// ----------------------------------------------------------------------------

function sendWorkspaceWelcomeEmail(params) {
  var subject = "Your Private Client Workspace Is Ready: " + params.service + " [" + params.clientId + "]";

  var tradingDisclaimer = "";
  if (params.category && params.category.toLowerCase().indexOf("trading") !== -1) {
    tradingDisclaimer = `
      <div style="margin: 20px 0; padding: 14px; background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 8px; font-size: 11px; line-height: 1.5; color: #92400E;">
        <strong>Educational & Analytical Tool Disclaimer:</strong> All indicators, scripts, and software provided are strictly for educational and analytical purposes. They do not constitute financial, investment, or trading advice. Past market performance does not guarantee future results.
      </div>
    `;
  }

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; color: #1E293B;">
      <div style="background: #0F172A; padding: 28px 24px; color: #FFFFFF; text-align: center;">
        <div style="display: inline-block; background: #2563EB; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
          HR Professional Services
        </div>
        <h1 style="margin: 14px 0 0 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
          Your Private Workspace Is Active
        </h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: #94A3B8;">
          Client ID: <span style="font-family: monospace; color: #60A5FA; font-weight: 700;">${params.clientId}</span>
        </p>
      </div>

      <div style="padding: 32px 28px;">
        <h2 style="font-size: 18px; color: #0F172A; margin-top: 0; font-weight: 700;">
          Welcome, ${params.customerName}.
        </h2>
        
        <p style="font-size: 14px; line-height: 1.6; color: #475569;">
          Thank you for securing <strong>${params.service}</strong>. Your dedicated, private Google Drive workspace has been created and structured for your project.
        </p>

        <div style="background: #EFF6FF; border: 2px solid #BFDBFE; border-radius: 12px; padding: 22px; text-align: center; margin: 26px 0;">
          <p style="font-size: 12px; font-weight: 700; color: #1E40AF; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">
            Secure Google Drive Access
          </p>
          <a href="${params.folderUrl}" style="display: inline-block; background: #2563EB; color: #FFFFFF; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 28px; border-radius: 8px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);">
            Open Your Private Workspace →
          </a>
          <p style="font-size: 11px; color: #64748B; margin: 10px 0 0 0;">
            Shared with: <strong style="color: #0F172A;">${params.targetEmail}</strong>
          </p>
        </div>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px; font-size: 13px; line-height: 1.6;">
          <strong style="color: #0F172A; font-size: 13px;">What is waiting inside your workspace:</strong>
          <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #475569;">
            <li><strong>00 - Client Profile & Scope:</strong> Your verified deliverables list and project timeline.</li>
            <li><strong>01 - Requirements & Intake:</strong> Briefing questionnaire to kick off your implementation.</li>
            <li><strong>02 - Working Files:</strong> Active spreadsheets, diagrams, and review drafts.</li>
            <li><strong>03 - Deliverables:</strong> Master documents, sign-off files, and source code.</li>
            <li><strong>04 - Training & SOPs:</strong> Video walkthrough links, user manuals, and troubleshooting guides.</li>
          </ul>
        </div>

        ${tradingDisclaimer}

        <div style="margin-top: 24px; padding: 14px; background: #F1F5F9; border-radius: 8px; font-size: 12px; color: #64748B;">
          <strong>Cannot access the folder?</strong> If you checked out with an email not linked to Google, reply directly to this email with your preferred Google account and we will grant access within 60 minutes.
        </div>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #F1F5F9;">
          <p style="font-size: 13px; color: #334155; margin: 0; font-weight: 600;">Dedicated Systems Architect,</p>
          <p style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 2px 0 0 0;">${CONFIG.MANAGER_NAME}</p>
          <p style="font-size: 12px; color: #64748B; margin: 0;">${CONFIG.COMPANY_NAME}</p>
        </div>
      </div>

      <div style="background: #F8FAFC; padding: 18px 28px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 11px; color: #94A3B8;">
        ${CONFIG.COMPANY_NAME} • United Kingdom • <a href="${CONFIG.WEBSITE_URL}" style="color: #64748B; text-decoration: none;">hemanth.ranam.dev</a>
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
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Service Required:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #0F172A;">${params.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Submitted At:</td>
            <td style="padding: 8px 0; color: #64748B;">${params.timestamp}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; border-left: 4px solid #2563EB;">
          <strong style="font-size: 12px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</strong>
          <p style="font-size: 13px; color: #1E293B; margin: 8px 0 0 0; line-height: 1.6; white-space: pre-wrap;">${params.message || "No additional message provided."}</p>
        </div>
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

function sendCustomerAcknowledgement(params) {
  var subject = "Thank you for contacting " + CONFIG.COMPANY_NAME + " [" + params.leadId + "]";

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; color: #1E293B;">
      <div style="background: #2563EB; padding: 28px; text-align: center; color: #FFFFFF;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">${CONFIG.COMPANY_NAME}</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Consulting • Systems Architecture • Automation</p>
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
          Our team is reviewing your requirements and will respond within <strong>24 business hours</strong> with clear next steps.
        </p>

        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #F1F5F9;">
          <p style="font-size: 13px; color: #334155; margin: 0; font-weight: 600;">Kind regards,</p>
          <p style="font-size: 14px; font-weight: 700; color: #0F172A; margin: 2px 0 0 0;">${CONFIG.MANAGER_NAME}</p>
          <p style="font-size: 12px; color: #64748B; margin: 0;">${CONFIG.COMPANY_NAME}</p>
        </div>
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

// ----------------------------------------------------------------------------
// 8. UTILITY FUNCTIONS & SANITIZATION
// ----------------------------------------------------------------------------

function generateLeadId() {
  var now = new Date();
  var datePart = Utilities.formatDate(now, CONFIG.TIMEZONE, "yyyyMMdd");
  var randomSuffix = ("0000" + Math.floor(Math.random() * 10000)).slice(-4);
  return "HRPS-" + datePart + "-" + randomSuffix;
}

function sanitize(val) {
  if (val === null || val === undefined) return "";
  var str = val.toString().trim();
  if (/^[=+@-]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function getSpreadsheet() {
  var propId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  var targetId = propId || CONFIG.SPREADSHEET_ID;

  if (targetId && targetId.trim().length > 0) {
    return SpreadsheetApp.openById(targetId.trim());
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

function verifyAuth(params) {
  var configuredKey = PropertiesService.getScriptProperties().getProperty("API_SECRET_KEY") || CONFIG.API_SECRET_KEY;
  var providedKey = params.apiKey || params.token || params.key;
  return providedKey === configuredKey;
}

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

function jsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
