# HR Professional Services — Web Platform & CRM Engine

Production web platform and integrated business systems engine for **HR Professional Services** (overseen by Hemanth Ranam). Built with Next.js App Router, Tailwind CSS, TypeScript, and powered by an automated Google Sheets CRM backend inspired by the **ScaleNova** systems reference architecture.

---

## 1. Core Brand Positioning

> **"Small Price. Big Work."**  
> *"Do more business with smarter systems."*

HR Professional Services operates as a practical business technology partner helping growing companies, founders, and active traders:
- **Simplify operations** and eliminate manual spreadsheet copying
- **Automate repetitive work** with serverless webhooks & Google Apps Script
- **Build high-converting websites** with sub-second load times
- **Capture leads reliably** with honeypot spam filtering
- **Implement Frappe & ERPNext systems** with zero recurring seat licensing fees
- **Deploy HR management solutions** with attendance and automated payroll
- **Create executive dashboards** for real-time financial visibility
- **Build rule-based trading technology** (TradingView Pine Script v5, MT5 EAs, Telegram alerts)
- **Provide ongoing monthly support and staff training** ("More Than a Handover")

---

## 2. Commercial Architecture

### Three Core Commercial Categories
1. **Business & Consulting**:
   - Business Consultation (From $35 USD)
   - Process / Tech Audit (From $59 USD)
   - Business Systems Consulting (From $75 USD)
   - Frappe / ERPNext Systems Implementation (From $369 USD)
   - Website + Lead Capture + Basic CRM
   - Business Apps Script Automations (From $109 USD)
   - Documentation & Digital SOPs
2. **Software & Web**:
   - Website Basic & Website Premium
   - Fully Automated & Secured Websites
   - Custom CRM Systems & Client Portals
   - Finance & Accounts Systems
   - HR & People Systems
   - ERP Systems & Booking Engines
   - Custom Full-Stack Web Applications (TypeScript / Next.js / PostgreSQL)
3. **Trading Technology**:
   - Standard & Custom TradingView Indicators (Pine Script v5)
   - Standard & Custom TradingView Strategies
   - MT5 Custom Scanner & Multi-Symbol Alert Systems
   - MT5 Custom Auto-Trading Systems (MQL5 Expert Advisors)
   - Sub-second Telegram Signal Broadcast Routers
   - TradingView-to-MT5 Automated Execution Bridges

### Standard vs Custom Systems
- **Standard**: Fast, affordable, battle-tested blueprints deployed in days with zero bloat.
- **Custom**: Tailored, flexible, integrated architectures engineered specifically around your company's proprietary operational rules.

### Ongoing Reliability ("More Than a Handover")
- **Starter Support** ($99/mo): Weekly uptime sweeps, form monitoring, minor tweaks.
- **Growth Support** ($199/mo): Active improvements, webhook maintenance, workflow automations.
- **Business Systems Support** ($349/mo): Priority SLA, ERPNext/Frappe server backups, trading bridge monitoring.

### 7-Stage System Lifecycle
`PLAN` → `BUILD` → `LAUNCH` → `TRAIN` → `SUPPORT` → `IMPROVE` → `AUTOMATE`

---

## 3. Dedicated Service Subpages

Full commercial landing pages replacing popup modals:
- [`/services/business-systems-consulting`](/services/business-systems-consulting)
- [`/services/process-optimisation`](/services/process-optimisation)
- [`/services/crm-erp-implementation`](/services/crm-erp-implementation)
- [`/services/hr-management-systems`](/services/hr-management-systems)
- [`/services/business-operations-sop`](/services/business-operations-sop)
- [`/services/data-business-analytics`](/services/data-business-analytics)
- [`/services/website-lead-capture-crm`](/services/website-lead-capture-crm)
- [`/services/trading-technology`](/services/trading-technology)
- [`/services/workflow-automation`](/services/workflow-automation)
- [`/services/custom-software`](/services/custom-software)

---

## 4. Google Sheets CRM Integration

Form submissions route directly into a formatted Google Sheet via a lightweight serverless Google Apps Script engine ([`backend/Code.gs`](./backend/Code.gs)).

### Canonical 13-Column Schema
1. **Timestamp** (`yyyy-MM-dd HH:mm:ss`)
2. **Lead ID** (`HRPS-YYYYMMDD-XXXX`)
3. **Name** (Full client name)
4. **Email** (Validated customer email)
5. **Phone** (International phone / WhatsApp)
6. **Company** (Organization name or N/A)
7. **Service** (Selected service offering)
8. **Category** (Core commercial category)
9. **Message** (Sanitized enquiry requirements)
10. **Source** (Submission channel)
11. **Page** (Source URL pathname)
12. **Status** (`New`, `Contacted`, `Qualified`, `In Progress`, `Converted`, `Closed`, `Not Interested`)
13. **Notes** (Internal team notes)

### Automated Dual-Email Dispatch
- **Management Notification**: Dispatched instantly to `hemanth.ranam@gmail.com` with lead parameters.
- **Customer Acknowledgement**: Branded receipt sent to customer with unique Lead ID reference and <24h SLA.

---

## 5. Local Development & Production Build

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run strict linter (0 errors, 0 warnings)
npm run lint

# Compile static production export (pre-renders all 30 HTML pages to out/)
npm run build
```
