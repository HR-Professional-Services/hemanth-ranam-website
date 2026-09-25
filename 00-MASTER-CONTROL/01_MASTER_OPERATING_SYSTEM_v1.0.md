# Hemanth Ranam — Professional Services OS
## 00-MASTER-CONTROL / 01_MASTER_OPERATING_SYSTEM_v1.0

| Metadata | Details |
|---|---|
| **Document Title** | Master Professional Services Operating System Architecture |
| **Document ID** | `HR-OS-MASTER-001` |
| **Version** | `v1.0` |
| **Status** | `APPROVED / PRODUCTION ACTIVE` |
| **Owner** | Hemanth Ranam (Founder & Principal Systems Architect) |
| **Created** | September 26, 2026 |
| **Updated** | September 26, 2026 |
| **Drive Master Root ID** | `1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l` (`HR - Services`) |
| **Client Management Folder**| `13 - CLIENT MANAGEMENT` |
| **Primary Production Domain**| `hemanth.ranam.dev` / `scalenovasys.com` |

---

### 1. Purpose & Scope
This document defines the unified operational, technical, and commercial architecture for Hemanth Ranam Professional Services. It establishes the bidirectional synchronization loop across:
1. **Local Master Operating Tree** (`00-MASTER-CONTROL` through `99-ARCHIVE`)
2. **Google Drive Master Ecosystem** (`HR - Services` root ID `1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l`)
3. **Canonical Web Storefront** (Next.js 16.3.3 Turbopack on Cloudflare Pages)
4. **Stripe Billing Engine** (One-time checkouts + Recurring retainers)
5. **Serverless Fulfillment Engine** (Google Apps Script v2.6.0 + Asynchronous Queue Worker)
6. **Client Workspaces** (Private `CLI-YYYY-XXXX` Drive environments with 6 standard subfolders)

---

### 2. Synchronization Flow Architecture

```
LOCAL MASTER REPOSITORY
  │ (Git Source of Truth, Code, Templates, Documentation)
  ▼
CANONICAL DATA STORE (data/pricingData.ts)
  │ (50+ Services, 15 Categories, 12 Lead Magnets, Pricing, Scope)
  ▼
NEXT.JS STOREFRONT (Cloudflare Pages)
  │
  ├── /products        (Interactive Storefront + Scope Drawers + Filters)
  ├── /resources       (12 Free Lead Magnets + Instant Download Modal)
  ├── /monthly         (Managed Care Retainers + 6 Value Pillars)
  ├── /services        (High-Touch Strategy, Architecture & ERP Systems)
  └── /trading-technology (Algorithmic Trading Tools + Mandatory Disclaimer)
         │
         ▼
STRIPE SECURE CHECKOUT (Idempotent Payment Event)
         │
         ▼
GOOGLE APPS SCRIPT WEB APP (backend/Code.gs v2.6.0)
  │
  ├── 1. Instant Webhook Acknowledgment (<500ms)
  ├── 2. Row Recorded in 'Payments' (Status: PENDING_PROVISIONING)
  └── 3. Queue Processor: processProvisioningQueue()
         │
         ├── Checks Idempotency (Prevents duplicate folder creation on replay)
         ├── Generates Client ID (CLI-YYYY-XXXX) and Order ID (ORD-YYYY-XXXX)
         ├── Creates Drive Folder: 13 - CLIENT MANAGEMENT / [CLI-ID] - [Client Name]
         ├── Generates 6 Standard Subfolders (00 to 05)
         ├── Grants Access to Google Delivery Email (Fallback if non-Google)
         ├── Appends to 'CRM_Clients' Sheet
         ├── Dispatches Branded HTML Confirmation & Workspace Delivery Emails
         └── Updates Order Status: COMPLETED
```

---

### 3. Core Directory Layout (ScaleNova-Aligned)

| Folder | Name | Purpose |
|---|---|---|
| `00-MASTER-CONTROL` | Master Control | Architecture blueprints, catalogue manifests, and deployment rules |
| `01-BUSINESS-STRATEGY` | Business Strategy | Value proposition, target audience, pricing models, and positioning |
| `02-SERVICES` | Services | Comprehensive service catalogues, scopes, and deliverable specs |
| `03-WEBSITE` | Website | Website architecture, UI design tokens, components, and route maps |
| `04-DIGITAL-PRODUCTS` | Digital Products | Turnkey templates, checklists, dashboards, and digital kits |
| `05-FREE-RESOURCES` | Free Resources | 12 lead magnets, workbooks, calculators, and free sheets |
| `06-BUSINESS-SYSTEMS` | Business Systems | CRM, Leads, Sales, Cash Flow, Project OS, and ERP models |
| `07-AUTOMATION` | Automation | Apps Script engines, webhooks, triggers, and error recovery playbooks |
| `08-GOOGLE-WORKSPACE`| Google Workspace | Drive blueprints, folder IDs, and Google Sheets command centers |
| `09-STRIPE-COMMERCE` | Stripe Commerce | Product IDs, Price IDs, payment links, and webhook handlers |
| `10-CLIENT-OPERATIONS`| Client Operations | Client onboarding, SLA rules, support tickets, and offboarding |
| `11-TRADING-TECHNOLOGY`| Trading Technology | Pine Script, MQL5 EA/Scanners, Telegram bots, and disclaimers |
| `12-MARKETING` | Marketing | Content calendars, social briefs, email promotions, and copies |
| `13-SEO` | SEO | Technical SEO, metadata, sitemaps, JSON-LD schemas, and keyword targets |
| `14-DOCUMENTATION` | Documentation | Standard operating procedures, architecture manuals, and APIs |
| `15-TRAINING` | Training | Video walkthrough scripts, employee manuals, and training kits |
| `16-TEMPLATES` | Templates | Standard service package templates (01 through 07 + START_HERE) |
| `17-WORKING-FILES` | Working Files | Development scratch, test payloads, simulation scripts, and builds |
| `18-ANALYTICS` | Analytics | Traffic tracking, conversion funnels, and KPI metrics |
| `19-LEGAL-POLICIES` | Legal Policies | Terms of service, privacy, digital refund policies, and disclaimers |
| `99-ARCHIVE` | Archive | Deprecated versions, retired services, and historical records |

---

### 4. Operational Guardrails
1. **Zero Secret Exposure**: Never commit API keys, service credentials, or Stripe live secrets to git.
2. **Mandatory Educational Disclaimer**: Category 07 Trading Technology must always present the disclaimer prominently.
3. **Dual Email Rule**: Billing email receives financial receipts; Google delivery email receives Drive sharing.
4. **Idempotent Webhooks**: Repeated receipt of the same Stripe checkout event will never create duplicate folders or clients.
