# Hemanth Ranam — Professional Services Operating System
## Master Administrator & Operating Guide v1.0
**Document ID:** `HR-OPS-GUIDE-2026-v1.0`  
**Target Environment:** Production Storefront (`hemanth.ranam.dev`) + Stripe + Google Workspace  
**Master Drive Root ID:** `1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l` (`HR - Services`)  
**Client Management Folder:** `13 - CLIENT MANAGEMENT`  
**Lead & Operational Hub:** Google Sheets Command Center (`Enquiries`, `Payments`, `CRM_Clients`)  
**Backend Automation:** Google Apps Script (`backend/Code.gs` v2.6.0)

---

## 1. System Architecture Overview

The **Hemanth Ranam Professional Services OS** is a serverless, high-reliability service-commerce system designed for zero monthly software overhead while delivering an enterprise-grade client experience:

```
WEBSITE STOREFRONT (Next.js / Cloudflare)
  │
  ├── /products  ──────────► Canonical Services & Digital Kits (15 Categories)
  ├── /resources ──────────► 12 Free Lead Magnets (Instant Lead Capture)
  ├── /monthly   ──────────► Managed Care Retainers ($29–$299/mo)
  └── /services  ──────────► High-Touch Consulting & System Pillars
         │
         ▼
STRIPE CHECKOUT / PAYMENT LINK (Idempotent Webhook)
         │
         ▼
GOOGLE APPS SCRIPT WEB APP (backend/Code.gs)
  │
  ├── 1. Records Payment in 'Payments' Sheet (Status: PENDING_PROVISIONING)
  ├── 2. Acknowledges Stripe Webhook immediately (<500ms)
  └── 3. Invokes Asynchronous Queue: processProvisioningQueue()
         │
         ├── Generates Client ID (CLI-YYYY-XXXX) & Order ID (ORD-YYYY-XXXX)
         ├── Creates Drive Folder: 13 - CLIENT MANAGEMENT / [CLI-ID] - [Client Name]
         ├── Creates 6 Standard Client Subfolders (00 to 05)
         ├── Grants Access to Google Delivery Email (Fallback if non-Google)
         ├── Logs into 'CRM_Clients' sheet
         ├── Sends Branded Dual-Email Notifications via Gmail
         └── Updates Order Status: COMPLETED
```

---

## 2. Master Service Catalogue Structure

All services, digital kits, checklists, templates, and monthly plans are declared in a single canonical source of truth:
👉 `data/pricingData.ts` ➔ `CANONICAL_SERVICES_CATALOGUE`

### 15 Core Commercial Categories:
1. `CATEGORY 01 — CONSULTING & STRATEGY` ($25–$199)
2. `CATEGORY 02 — WEBSITE SERVICES` ($149–$999)
3. `CATEGORY 03 — BUSINESS AUTOMATION` ($149–$799)
4. `CATEGORY 04 — GOOGLE SHEETS & BUSINESS SYSTEMS` ($49–$299)
5. `CATEGORY 05 — GOOGLE APPS SCRIPT` ($19–$199)
6. `CATEGORY 06 — FRAPPE & ERPNEXT` ($49–$1,499)
7. `CATEGORY 07 — TRADING TECHNOLOGY` ($49–$799) *(Enforces Mandatory Educational Disclaimer)*
8. `CATEGORY 08 — BUSINESS TEMPLATES` ($5–$25)
9. `CATEGORY 09 — CHECKLISTS` ($5–$29)
10. `CATEGORY 10 — TRAINING` ($19–$79)
11. `CATEGORY 11 — DIGITAL AUTOMATION KITS` ($19–$99)
12. `CATEGORY 12 — BUSINESS DOCUMENT PACKS` ($29–$49)
13. `CATEGORY 13 — BUSINESS DASHBOARDS` ($29–$99)
14. `CATEGORY 14 — BUSINESS OPERATING SYSTEMS` ($149–$999)
15. `CATEGORY 15 — MONTHLY SERVICES` ($29–$299/mo)

---

## 3. How to Add a New Service or Product

1. Open `data/pricingData.ts`.
2. Append a new `CanonicalService` object into `CANONICAL_SERVICES_CATALOGUE`:
```typescript
{
  serviceId: "AUTO-004",
  serviceName: "Lead Routing Automation",
  category: "Business Automation",
  subcategory: "CRM & Notifications",
  shortDescription: "Automated routing of inbound leads directly to sales reps with instant WhatsApp notifications.",
  description: "Eliminates lead decay. Form submissions instantly ping your sales team with lead summary and calendar booking link.",
  price: "$199",
  originalPrice: "$299",
  currency: "USD",
  billingType: "ONE_TIME", // or "MONTHLY"
  stripePriceId: "price_1xxxxxxxxx", // created in Stripe
  stripePaymentLink: "https://buy.stripe.com/xxxxxx",
  websiteUrl: "/products#automation",
  deliveryType: "workspace_provisioning", // or "instant_download"
  deliveryTime: "3–5 business days",
  supportLevel: "Architecture deployment + 14 days warranty",
  included: ["Webhook routing engine", "WhatsApp alert trigger", "14 days warranty"],
  excluded: ["WhatsApp Business API usage charges"],
  clientRequirements: ["Google account and Meta Business API access"],
  deliverables: ["AUTO-004_Manual_v1.0.pdf", "Configured Apps Script"],
  trainingIncluded: ["Video tutorial on webhook maintenance"],
  supportIncluded: ["14 days priority email support"],
  refundPolicy: "Milestone-based.",
  folderTemplate: "03 - BUSINESS AUTOMATION/SRV-AUTO-004",
  documentTemplate: "01_Service_Overview_v1.0",
  clientWorkspaceTemplate: "STANDARD_CLIENT_WORKSPACE",
  status: "DRAFT", // see Readiness Lifecycle below
  version: "1.0",
}
```
3. Run `npm run test:order-sim` to verify catalogue schema integrity.
4. Run `npm run build` to verify static page generation.

---

## 4. How to Change a Price

1. In `data/pricingData.ts`, find the target `serviceId` (e.g., `SHEET-001`).
2. Update the `price` and optional `originalPrice` fields:
   ```typescript
   price: "$59",
   originalPrice: "$99",
   ```
3. **In Stripe Dashboard**:
   - Go to **Products** ➔ Select the product ➔ **Add another price**.
   - Copy the new `price_...` ID and paste it into `stripePriceId`.
   - Update or recreate the **Payment Link** and paste into `stripePaymentLink`.
4. Deploy the website.

---

## 5. How to Connect Stripe Products & Payment Links

1. **Create Product in Stripe**:
   - Navigate to [Stripe Dashboard](https://dashboard.stripe.com) ➔ **Product catalog** ➔ **+ Add product**.
   - **Name**: Use exact service name (e.g. `Trading Automation System`).
   - **Description**: Copy `shortDescription` from `data/pricingData.ts`.
   - **Price**: Set amount (e.g. `$499.00 USD`).
   - **Billing type**: One-off or Recurring (Monthly).
2. **Configure Custom Metadata in Stripe**:
   - Add Metadata:
     - `service_id`: e.g. `TRD-007`
     - `delivery_type`: `workspace_provisioning`
3. **Configure Custom Fields at Checkout**:
   - In Stripe Checkout settings or Payment Link editor, enable **Custom Fields**:
     - Label: `Google / Delivery Email`
     - Type: Text / Email
     - Requirement: Mandatory for Drive workspace delivery
4. **Copy Price ID & Payment Link**:
   - Copy `price_1xxxx...` into `stripePriceId`.
   - Generate a **Payment Link** and paste the URL into `stripePaymentLink`.

---

## 6. Service Readiness Lifecycle System

A service must never be set to `"LIVE"` until all fulfillment prerequisites exist.

```
DRAFT ──► INTERNAL_REVIEW ──► READY_FOR_TEST ──► PAYMENT_TESTED
                                                       │
LIVE ◄── READY_TO_PUBLISH ◄── DELIVERY_TESTED ◄────────┘
 │
 ├──► PAUSED   (Temporarily disabled)
 └──► ARCHIVED (Permanently retired)
```

### Readiness Checklist:
- [x] Product page description & pricing defined
- [x] Stripe Product & Price ID connected
- [x] Google Drive template folder exists
- [x] Scope boundaries defined (`included` and `excluded`)
- [x] Refund policy specified
- [x] Mandatory disclaimer included (if Category 07 Trading Technology)
- [x] Confirmation & delivery email copy verified
- [x] Test purchase processed in Stripe Test Mode

---

## 7. Google Drive Master Architecture

Master Root: `HR - Services` (ID: `1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l`)

```
HR - Services
│
├── 00 - MASTER CONTROL           (Operational guidelines & keys)
├── 01 - CONSULTING               (Consultation notes & blueprints)
├── 02 - WEBSITE SERVICES         (Design systems & code repos)
├── 03 - BUSINESS AUTOMATION      (Apps Script & webhook engines)
├── 04 - GOOGLE SHEETS & SYSTEMS  (Master spreadsheet templates)
├── 05 - FRAPPE & ERPNEXT         (DocType JSONs & custom scripts)
├── 06 - TRADING TECHNOLOGY       (Pine Script & MQL5 indicators)
├── 07 - TEMPLATES                (Business plan, SOP & CRM templates)
├── 08 - CHECKLISTS               (Launch, SEO, & QA checklists)
├── 09 - TRAINING                 (Video course files & guides)
├── 10 - CODE & AUTOMATION KITS   (Turnkey code packages)
├── 11 - MONTHLY SERVICES         (Retainer health logs)
├── 12 - FREE RESOURCES           (12 Public lead magnet files)
├── 13 - CLIENT MANAGEMENT        (PRIVATE CLIENT WORKSPACES)
├── 14 - SALES & LEADS            (Lead dumps & analytics)
├── 15 - FINANCE & ACCOUNTING     (Stripe fee reconciliation & P&L)
├── 16 - MARKETING                (Social banners, graphics, copies)
└── 99 - ARCHIVE                  (Retired versions)
```

---

## 8. Client Workspace Provisioning & Structure

When a payment succeeds, `backend/Code.gs` creates a private folder inside `13 - CLIENT MANAGEMENT`:

```
13 - CLIENT MANAGEMENT/
  └── CLI-2026-0042 - Acme Logistics/
      ├── 00 - Client Profile & Contracts
      ├── 01 - Requirements & Intake
      ├── 02 - Working Files
      ├── 03 - Deliverables
      ├── 04 - Training & SOPs
      └── 05 - Support & Milestone Notes
```

### Standard Document Template Package:
Pre-built in `templates/standard-service-package/`:
1. `01_Service_Overview_v1.0.md` — Scope, timeline, contact info
2. `02_Client_Questionnaire_Intake_v1.0.md` — Detailed requirements gathering
3. `03_Requirements_Checklist_v1.0.md` — Milestone verification gate
4. `04_User_Manual_and_SOP_v1.0.md` — Operational instructions
5. `05_Training_Guide_v1.0.md` — Staff onboarding handbook
6. `06_Troubleshooting_and_Support_v1.0.md` — Known issues & SLAs
7. `START_HERE_v1.0.md` — 3-minute quickstart guide
8. `07_Client_Video_Walkthrough_Script_v1.0.md` — Loom video script

---

## 9. Client Email Handling & Access Troubleshooting

### The Dual-Email Rule:
1. **Billing Email (`customerEmail`)**: Used for Stripe receipts, invoices, and accounting notices.
2. **Google / Delivery Email (`googleEmail`)**: Used strictly for private Google Drive folder sharing.

### Handling Non-Google Email Failures:
If a client provides an address not associated with Google Workspace/Gmail:
1. `Code.gs` catches the permission exception without crashing the order.
2. The order status in the `Payments` sheet logs:  
   `"Non-Google Email Alert: Direct Grant Failed"`.
3. The automated delivery email sends fallback instructions:  
   *"To access your private workspace, please reply to this email with your Google-associated email address."*
4. **Manual Fix by Admin**:
   - Open Google Drive ➔ Navigate to `13 - CLIENT MANAGEMENT / CLI-YYYY-XXXX - [Client]`.
   - Click **Share** ➔ Enter the client's verified Google account ➔ Grant **Viewer** access.
   - In Google Sheet `CRM_Clients`, update column 11 to `"Granted ([email])"`.

---

## 10. How to Retry Failed Provisioning

If Google Drive encounters an API quota limit during automated provisioning:
1. Open the Google Sheet ➔ Click **Extensions** ➔ **Apps Script**.
2. Select the function `processProvisioningQueue` from the dropdown.
3. Click **Run**.
4. The queue worker scans all rows in `Payments` where `Delivery Status == "PENDING_PROVISIONING"`, creates the folders, dispatches emails, and marks them `COMPLETED`.

---

## 11. How to Handle Refunds

1. Process the refund inside the **Stripe Dashboard**.
2. Open the Google Sheet ➔ **`Payments`** tab:
   - Change `Status` from `Completed` to `Refunded`.
   - Add notes with the refund reason and date.
3. Open **`CRM_Clients`** tab:
   - Change `Status` to `Cancelled` or `Refunded`.
4. Open the client's Google Drive workspace ➔ Remove Viewer permissions from the client's email.

---

## 12. Production Deployment & Cloudflare Setup

### Prerequisite Checks Before Pushing to Production:
```bash
# 1. Run automated test harness
npm run test:order-sim

# 2. Run TypeScript compilation
npx tsc --noEmit

# 3. Run production static build
npm run build
```

### Deploying to GitHub / Cloudflare Pages:
```bash
git add .
git commit -m "feat(phase-2): production-ready professional services OS with 15 categories, Drive provisioning, and automated testing"
git push origin main
```
*Cloudflare Pages automatically triggers a new deployment upon receiving the push to `main`.*

---

## 13. Emergency Rollback Procedure

If a breaking issue occurs on Cloudflare Pages:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) ➔ **Workers & Pages** ➔ `hemanth-ranam-website`.
2. Go to **Deployments** ➔ Find the previous successful deployment.
3. Click the three dots (⋯) ➔ **Rollback to this deployment**.
4. To roll back locally:
   ```bash
   git revert HEAD
   git push origin main
   ```
