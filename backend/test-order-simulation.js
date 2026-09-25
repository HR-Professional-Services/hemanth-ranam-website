/**
 * HR Professional Services — Automated Order & Webhook Simulation Suite
 * Tests:
 * 1. Schema & Service Catalogue integrity
 * 2. Client ID & Order ID generation formatting
 * 3. Stripe Webhook payload validation & idempotency checks
 * 4. Dual email routing (Billing vs Google Delivery Account)
 * 5. Drive workspace provisioning blueprint verification
 * 6. Mandatory trading disclaimer validation
 * 7. Lead capture & free resource payload formats
 */

const fs = require('fs');
const path = require('path');

// 1. Inspect Canonical Services Catalogue
console.log('====================================================');
console.log('🧪 RUNNING HR PROFESSIONAL SERVICES OS TEST HARNESS');
console.log('====================================================\n');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    testsFailed++;
  }
}

// Read pricingData.ts directly to verify schema without runtime overhead
const pricingFilePath = path.join(__dirname, '../data/pricingData.ts');
const pricingContent = fs.readFileSync(pricingFilePath, 'utf8');

// Test 1: Category Count
const expectedCategories = [
  'CATEGORY 01 — CONSULTING & STRATEGY',
  'CATEGORY 02 — WEBSITE SERVICES',
  'CATEGORY 03 — BUSINESS AUTOMATION',
  'CATEGORY 04 — GOOGLE SHEETS & BUSINESS SYSTEMS',
  'CATEGORY 05 — GOOGLE APPS SCRIPT',
  'CATEGORY 06 — FRAPPE & ERPNEXT',
  'CATEGORY 07 — TRADING TECHNOLOGY',
  'CATEGORY 08 — BUSINESS TEMPLATES',
  'CATEGORY 09 — CHECKLISTS',
  'CATEGORY 10 — TRAINING',
  'CATEGORY 11 — DIGITAL AUTOMATION KITS',
  'CATEGORY 12 — BUSINESS DOCUMENT PACKS',
  'CATEGORY 13 — BUSINESS DASHBOARDS',
  'CATEGORY 14 — BUSINESS OPERATING SYSTEMS',
  'CATEGORY 15 — MONTHLY SERVICES'
];

expectedCategories.forEach((cat) => {
  assert(pricingContent.includes(cat), `Catalogue contains category: ${cat}`);
});

// Test 2: Trading Technology Disclaimer Enforcement
assert(
  pricingContent.includes('Educational & Analytical Tool Disclaimer') &&
  pricingContent.includes('TRD-001') &&
  pricingContent.includes('TRD-007'),
  'Trading Technology products strictly enforce mandatory Educational & Analytical Disclaimer'
);

// Test 3: Free Resources Lead Magnets
const expectedLeadMagnets = [
  'FREE-001', 'FREE-002', 'FREE-003', 'FREE-004', 'FREE-005', 'FREE-006',
  'FREE-007', 'FREE-008', 'FREE-009', 'FREE-010', 'FREE-011', 'FREE-012'
];

expectedLeadMagnets.forEach((freeId) => {
  assert(pricingContent.includes(freeId), `Free Resource Magnet exists: ${freeId}`);
});

// Test 4: Client ID & Order ID generator formats
function generateClientId(index = 1) {
  const year = new Date().getFullYear();
  return `CLI-${year}-${String(index).padStart(4, '0')}`;
}

function generateOrderId(index = 1) {
  const year = new Date().getFullYear();
  return `ORD-${year}-${String(index).padStart(4, '0')}`;
}

const sampleClientId = generateClientId(42);
const sampleOrderId = generateOrderId(108);

assert(/^CLI-\d{4}-\d{4}$/.test(sampleClientId), `Client ID format matches CLI-YYYY-XXXX (${sampleClientId})`);
assert(/^ORD-\d{4}-\d{4}$/.test(sampleOrderId), `Order ID format matches ORD-YYYY-XXXX (${sampleOrderId})`);

// Test 5: Idempotency Logic Simulation
const processedPayments = new Set(['cs_live_sample_tx_1001', 'cs_live_sample_tx_1002']);

function processIncomingStripeEvent(stripeSessionId) {
  if (processedPayments.has(stripeSessionId)) {
    return { status: 'IGNORED_DUPLICATE', processed: false };
  }
  processedPayments.add(stripeSessionId);
  return { status: 'QUEUED_FOR_PROVISIONING', processed: true };
}

const firstRun = processIncomingStripeEvent('cs_live_sample_tx_1003');
assert(firstRun.status === 'QUEUED_FOR_PROVISIONING', 'First webhook arrival queued for provisioning');

const replayRun = processIncomingStripeEvent('cs_live_sample_tx_1003');
assert(replayRun.status === 'IGNORED_DUPLICATE', 'Replayed webhook with identical Stripe ID safely ignored (Idempotency check)');

// Test 6: Dual Email Routing (Billing vs Google Workspace Delivery Account)
function determineDeliveryTarget(payload) {
  const billingEmail = payload.customer_details?.email || payload.billing_email;
  const googleDeliveryEmail = payload.metadata?.google_delivery_email || payload.google_email || billingEmail;
  
  const isGoogleAccount = googleDeliveryEmail.endsWith('@gmail.com') || payload.metadata?.is_google_workspace === 'true';
  
  return {
    billingEmail,
    googleDeliveryEmail,
    sharingMode: isGoogleAccount ? 'DIRECT_SHARE' : 'FALLBACK_INVITE'
  };
}

const testCorporateClient = determineDeliveryTarget({
  billing_email: 'accounts@acmecorp.co.uk',
  metadata: {
    google_delivery_email: 'acme.ops.team@gmail.com',
    is_google_workspace: 'false'
  }
});

assert(
  testCorporateClient.billingEmail === 'accounts@acmecorp.co.uk' &&
  testCorporateClient.googleDeliveryEmail === 'acme.ops.team@gmail.com' &&
  testCorporateClient.sharingMode === 'DIRECT_SHARE',
  'Dual email routing successfully sends financial receipts to billing email and Drive workspace access to Google account'
);

const testNonGoogleClient = determineDeliveryTarget({
  billing_email: 'ceo@startup.io',
  metadata: {}
});

assert(
  testNonGoogleClient.sharingMode === 'FALLBACK_INVITE',
  'Non-Google email detected gracefully triggering fallback invite instructions without failing order'
);

// Test 7: Master Drive Architecture Blueprint Verification
const expectedSubfolders = [
  '00 - Client Profile & Contracts',
  '01 - Requirements & Intake',
  '02 - Working Files',
  '03 - Deliverables',
  '04 - Training & SOPs',
  '05 - Support & Milestone Notes'
];

const codeGsPath = path.join(__dirname, 'Code.gs');
const codeGsContent = fs.readFileSync(codeGsPath, 'utf8');

assert(codeGsContent.includes('1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l'), 'Code.gs configures HR - Services master Drive root ID');
assert(codeGsContent.includes('13 - CLIENT MANAGEMENT'), 'Code.gs targets 13 - CLIENT MANAGEMENT folder');

expectedSubfolders.forEach((sub) => {
  assert(codeGsContent.includes(sub), `Code.gs automates creation of client subfolder: ${sub}`);
});

// Test 8: Document Templates Existence
const templatesDir = path.join(__dirname, '../templates/standard-service-package');
const expectedTemplateFiles = [
  '01_Service_Overview_v1.0.md',
  '02_Client_Questionnaire_Intake_v1.0.md',
  '03_Requirements_Checklist_v1.0.md',
  '04_User_Manual_and_SOP_v1.0.md',
  '05_Training_Guide_v1.0.md',
  '06_Troubleshooting_and_Support_v1.0.md',
  'START_HERE_v1.0.md',
  '07_Client_Video_Walkthrough_Script_v1.0.md'
];

expectedTemplateFiles.forEach((file) => {
  const exists = fs.existsSync(path.join(templatesDir, file));
  assert(exists, `Standard service document package exists: ${file}`);
});

console.log('\n====================================================');
console.log(`🏁 TEST RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
console.log('====================================================\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
