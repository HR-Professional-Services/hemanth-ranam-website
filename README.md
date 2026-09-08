# HR Professional Services — Web Platform & CRM Engine

Production web platform and integrated business systems engine for **HR Professional Services** (overseen by Hemanth Ranam). Built with Next.js App Router, Tailwind CSS, TypeScript, and powered by an automated Google Sheets CRM backend inspired by the **ScaleNova** systems reference architecture.

---

## 1. Core Business Positioning

> **"SMALL PRICE. BIG WORK."**  
> *"DO MORE BUSINESS. LET YOUR SYSTEMS DO MORE WORK."*

HR Professional Services operates as an affordable, high-ROI technology partner helping businesses:
- Understand operational problems and eliminate manual drag
- Fix processes, document SOPs, and build repeatable execution
- Deploy fast, responsive, conversion-focused websites
- Capture leads with automated validation and zero data leakage
- Implement open-source CRM / ERP systems (Frappe & ERPNext)
- Automate repetitive tasks using Google Apps Script and webhooks
- Build custom business software modules (HR, Finance, Inventory, Portals)
- Engineer institutional-grade trading technology (TradingView indicators/strategies, MT5 scanners, Telegram alert channels)
- Train internal teams on digital SOPs and workflows
- Provide ongoing monthly support and continuous system improvements

---

## 2. Commercial Architecture

### The Three Core Categories
The service architecture revolves around three distinct commercial pillars:

1. **Business & Consulting**:
   - Business Consultation (`/services/business-consultation`) — *From $35 USD (Was $49)*
   - Process / Tech Audit (`/services/process-tech-audit`) — *From $59 USD (Was $79)*
   - Business Systems Consulting (`/services/business-systems-consulting`) — *From $75 USD (Was $99)*
   - Frappe / ERPNext Systems Implementation (`/services/frappe-erpnext`) — *From $369 USD (Was $499)*
   - Website + Lead Capture + Basic CRM (`/services/website-lead-capture-crm`)
   - Business Apps Script Automations (`/services/apps-script-automation`) — *From $109 USD (Was $149)*
   - Documentation & SOPs (`/services/documentation-sops`)

2. **Software & Web**:
   - Websites (Basic → Premium) (`/services/websites`)
   - Fully Automated & Secured Websites (`/services/websites`)
   - Custom Business Systems (`/services/custom-business-systems`) — CRM, Finance & Accounts, HR & People, ERP, Booking, Operations, Projects, Customer Management, Reports

3. **Trading Technology**:
   - Standard TradingView Indicators (`/services/tradingview-indicators`)
   - Custom TradingView Indicators (`/services/tradingview-indicators`)
   - Standard TradingView Strategies (`/services/tradingview-strategies`)
   - Custom TradingView Strategies (`/services/tradingview-strategies`)
   - MT5 Custom Scanner & Alert System (`/services/mt5-scanner-alerts`)
   - MT5 Custom Auto-Trading System with Alerts (`/services/mt5-auto-trading`)
   - Custom Trading Alerts to Telegram Channel (`/services/telegram-trading-alerts`)

---

## 3. Approved Project Pricing (Locked USD Rates)

All rates are fixed milestone pricing in **USD ($)** with zero hourly billing:

| Service Plan | Category | Original Price | Approved Fixed Price | Deliverable Scope |
| :--- | :--- | :--- | :--- | :--- |
| **Business Consultation** | Business & Consulting | ~~$49 USD~~ | **$35 USD** | 60-min 1-on-1 strategy session, audit, and action roadmap |
| **Process / Tech Audit** | Business & Consulting | ~~$79 USD~~ | **$59 USD** | Software stack review, duplication check, optimization blueprint |
| **Business Systems Consulting** | Business & Consulting | ~~$99 USD~~ | **$75 USD** | Connected operational architecture, data flows, and schema design |
| **Workflow Automation** | Software & Web | ~~$149 USD~~ | **$109 USD** | Webhooks, Google Apps Script, Sheets, and email automation |
| **CRM / ERP Implementation** | Software & Web | ~~$499 USD~~ | **$369 USD** | Frappe / ERPNext configuration, data migration, roles, and training |

---

## 4. Monthly Support & Improvement Architecture

Monthly support is a separate operational tier providing post-launch reliability without replacing project rates. Configured with extensible properties for easy tier management:

- **Starter Tier**: For small businesses that need reliable basic maintenance, form verification, and minor monthly tweaks.
- **Growth Tier**: For businesses requiring continuous monthly automation additions, workflow updates, and system monitoring.
- **Systems Tier**: For companies operating integrated ERP, CRM, or automated trading bridges requiring priority SLA and hands-on maintenance.

---

## 5. More Than a Handover (Support & Training Lifecycle)

We do not abandon systems post-launch. Every system follows a 7-stage lifecycle:
`DISCOVER` → `BUILD` → `LAUNCH` → `TRAIN` → `SUPPORT` → `IMPROVE` → `AUTOMATE`

---

## 6. Google Sheets CRM Integration (15-Column Canonical Schema)

All website lead forms forward submissions to a serverless Google Apps Script Web App ([`backend/Code.gs`](./backend/Code.gs)) storing enquiries in Google Sheets:

### 15 Canonical Worksheet Columns:
1. **Timestamp** (`yyyy-MM-dd HH:mm:ss`)
2. **Lead ID** (`HRPS-YYYYMMDD-XXXX`)
3. **Name**
4. **Email**
5. **Phone**
6. **Company**
7. **Category**
8. **Service**
9. **Selected Plan**
10. **Price**
11. **Message**
12. **Source**
13. **Page**
14. **Status** (`New`, `Contacted`, `Qualified`, `In Progress`, `Converted`, `Closed`, `Not Interested`)
15. **Notes**

### Automated Notifications:
- **Manager Alert**: Instant HTML email to management containing Lead ID, contact details, selected plan, pricing context, and message.
- **Customer Receipt**: Professional acknowledgement email with reference Lead ID and SLA confirmation.

---

## 7. Build & Verification

```bash
# Run strict TypeScript check (0 errors)
npx tsc --noEmit

# Compile static production export (pre-renders 34 static HTML routes to out/)
npm run build
```
