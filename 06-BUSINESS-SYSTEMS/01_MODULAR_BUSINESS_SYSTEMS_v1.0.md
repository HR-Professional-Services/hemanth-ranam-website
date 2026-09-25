# MODULAR BUSINESS SYSTEMS ARCHITECTURE
**Document ID:** SYS-MOD-001  
**Version:** v1.0  
**Status:** ACTIVE  
**Owner:** Hemanth Ranam  
**Created:** 2026-09-26  
**Updated:** 2026-09-26  

---

## 1. System Philosophy
Hemanth Ranam Business Systems replace fragile, bloated SaaS stacks with clean, connected, zero-subscription architectures built directly inside Google Workspace, Frappe, or PostgreSQL. Every system is built on 4 foundational pillars:
1. **Single Source of Truth:** Zero manual double-entry.
2. **Automated Status Machines:** Clear lifecycle states (`Lead` → `Qualified` → `Won` → `Delivering` → `Closed`).
3. **Auditability & Backups:** Automatic version history and scheduled backups.
4. **Instant Scalability:** Seamless migration path from Google Sheets to Frappe/ERPNext as volume scales past 50,000 records.

---

## 2. The 7 Core Modular Business Systems

### 1. CRM & Relationship Pipeline
- **Purpose:** Centralized contact ledger, deal pipeline, interaction history, and meeting logs.
- **Key Tables:** `Contacts`, `Organizations`, `Deals`, `Activities`.
- **Primary Automations:** Auto-calculate deal velocity, next follow-up alerts, stale lead warnings (14+ days inactive).

### 2. Lead Intake & Scoring Engine
- **Purpose:** Multi-channel lead aggregation (Web, Email, Forms, Social) with instant routing and qualification.
- **Key Tables:** `Inbound_Queue`, `Lead_Scores`, `Routing_Rules`.
- **Primary Automations:** Webhook ingestion, instant notification to Slack/WhatsApp/Email, auto-tagging by interest.

### 3. Sales & Quotation Management
- **Purpose:** Commercial proposal tracking, dynamic quote generation, and win/loss analytics.
- **Key Tables:** `Quotes`, `Quote_Items`, `Discounts`, `Contracts`.
- **Primary Automations:** 1-click quote-to-invoice conversion, expiring proposal reminders.

### 4. Client Onboarding & Project OS
- **Purpose:** Frictionless client onboarding, milestone tracking, and task delegation.
- **Key Tables:** `Clients`, `Projects`, `Milestones`, `Tasks`, `Time_Logs`.
- **Primary Automations:** Stripe webhook generates `CLI-YYYY-XXXX` folder in Google Drive, shares permissions, and emails intake questionnaire.

### 5. Financial Operations & Cash Flow Engine
- **Purpose:** Real-time visibility into income, expenses, accounts receivable, and 13-week rolling cash flow forecasts.
- **Key Tables:** `Invoices`, `Payments`, `Expenses`, `Categories`, `Cash_Forecast`.
- **Primary Automations:** Overdue payment chasing emails, weekly automated P&L snapshot to founder.

### 6. Team & Operations Management
- **Purpose:** Internal operational rhythm, SOP library access, employee time tracking, and leave management.
- **Key Tables:** `Team_Members`, `SOP_Index`, `Time_Off_Requests`.
- **Primary Automations:** SOP acknowledgement logging, calendar sync for approved time-off.

### 7. The Master Business OS
- **Purpose:** Unified executive dashboard synthesizing all 6 sub-systems into a single command view.
- **KPI Metrics:** Monthly Recurring Revenue (MRR), Lead Conversion Rate, Project Margin %, Client NPS, Cash Runway (Months).
