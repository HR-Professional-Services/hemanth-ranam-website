# Hemanth Ranam — Professional Services OS
## 08-GOOGLE-WORKSPACE / 01_DRIVE_MASTER_BLUEPRINT_v1.0

| Metadata | Details |
|---|---|
| **Document Title** | Google Drive Master Architecture & Folder Hierarchy |
| **Document ID** | `HR-DRV-BLUEPRINT-001` |
| **Version** | `v1.0` |
| **Status** | `APPROVED / PRODUCTION ACTIVE` |
| **Owner** | Hemanth Ranam |
| **Master Root Name** | `HR - Services` |
| **Master Root ID** | `1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l` |
| **Client Provisioning Root**| `13 - CLIENT MANAGEMENT` |

---

### 1. Canonical Google Drive Architecture

All company operations, templates, code kits, and confidential client folders reside under the single master root:

```
HR - Services (ID: 1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l)
│
├── 00 - MASTER CONTROL
│     ├── 01_Master_Credentials_Manifest (Secure)
│     ├── 02_Architecture_Blueprints
│     └── 03_Standard_Operating_Procedures
│
├── 01 - CONSULTING
│     ├── SRV-CONS-001 - 30-Min Business Consultation
│     ├── SRV-CONS-002 - 60-Min Business Strategy Session
│     ├── SRV-CONS-003 - 90-Min Business & Technology Consultation
│     ├── SRV-CONS-004 - Business Audit
│     └── SRV-CONS-005 - Business Systems Blueprint
│
├── 02 - WEBSITE SERVICES
│     ├── SRV-WEB-001 - High-Converting Landing Page
│     ├── SRV-WEB-002 - Business Website Starter
│     ├── SRV-WEB-003 - Business Website + Sheets CRM
│     └── SRV-WEB-004 - Website + Complete Automation
│
├── 03 - BUSINESS AUTOMATION
│     ├── SRV-AUTO-001 - Automation Starter
│     ├── SRV-AUTO-002 - Business Workflow Automation
│     ├── SRV-AUTO-003 - Full Operational Automation System
│     ├── SRV-BOS-001 - Lead & CRM Operating System
│     ├── SRV-BOS-002 - Business Operations System
│     └── SRV-BOS-003 - Complete Business OS
│
├── 04 - GOOGLE SHEETS & APPS SCRIPT
│     ├── SRV-SHT-001 - Smart Business Sheet
│     ├── SRV-SHT-002 - Automated Google Sheet
│     ├── SRV-SHT-003 - Business Operations Spreadsheet
│     ├── SRV-COD-001 - Simple Apps Script Utility
│     ├── SRV-COD-002 - Script Customisation & Webhooks
│     ├── SRV-COD-003 - Custom Apps Script System
│     ├── SRV-DSH-001 - Sales & CRM Dashboard
│     ├── SRV-DSH-002 - Operations & Management Dashboard
│     └── SRV-DSH-003 - Complete Business Executive Dashboard
│
├── 05 - FRAPPE & ERPNEXT
│     ├── SRV-FRP-001 - Frappe / ERPNext Discovery Consultation
│     ├── SRV-FRP-002 - Frappe Setup & Site Provisioning
│     └── SRV-FRP-003 - ERPNext Production Setup
│
├── 06 - TRADING TECHNOLOGY
│     ├── SRV-TRD-001 - TradingView Indicator (Pine Script v5)
│     ├── SRV-TRD-002 - Pine Script Strategy
│     ├── SRV-TRD-003 - MT5 Custom Indicator (MQL5)
│     ├── SRV-TRD-004 - MT5 Multi-Symbol Scanner & Dashboard
│     ├── SRV-TRD-005 - MT5 Alert System to Telegram
│     ├── SRV-TRD-006 - MT5 Expert Advisor (EA)
│     ├── SRV-TRD-007 - Trading Automation System
│     └── SRV-TRD-008 - Custom Trading Technology
│
├── 07 - TEMPLATES
│     └── SRV-TPL-001 - Small Business Operations Template Pack
│
├── 08 - CHECKLISTS
│     ├── SRV-CHK-001 - Website Launch Checklist
│     └── SRV-CHK-002 - Complete Business Checklist Bundle
│
├── 09 - TRAINING
│     ├── SRV-TRN-001 - Practical Training Guide
│     ├── SRV-TRN-002 - Complete Training Kit
│     └── SRV-TRN-003 - Advanced Training Bundle
│
├── 10 - CODE & AUTOMATION KITS
│     ├── SRV-KIT-001 - Lead Management Automation Kit
│     ├── SRV-DOC-001 - Business Proposal & Contract Pack
│     └── SRV-DOC-002 - Operations & SOP Document Pack
│
├── 11 - MONTHLY SERVICES
│     ├── SUB-001 - Starter Care
│     ├── SUB-002 - Business Care
│     ├── SUB-003 - Systems Partner
│     └── SUB-004 - Growth Partner
│
├── 12 - FREE RESOURCES
│     ├── FREE-001 - Business Audit Workbook
│     ├── FREE-002 - Free CRM Sheet
│     ├── FREE-003 - Free Lead Tracker
│     ├── FREE-004 - Free Sales Tracker
│     ├── FREE-005 - Free Cash Flow Sheet
│     ├── FREE-006 - Free Business Plan Template
│     ├── FREE-007 - Website Launch Checklist
│     ├── FREE-008 - Automation Checklist
│     ├── FREE-009 - SEO Checklist
│     ├── FREE-010 - Client Onboarding Checklist
│     ├── FREE-011 - Business Operations Workbook
│     └── FREE-012 - Free AI Business Guide
│
├── 13 - CLIENT MANAGEMENT (PRIVATE CLIENT WORKSPACES)
│     └── CLI-YYYY-XXXX - [Client Name]/
│           ├── 00 - Client Profile & Contracts
│           ├── 01 - Requirements & Intake
│           ├── 02 - Working Files
│           ├── 03 - Deliverables
│           ├── 04 - Training & SOPs
│           └── 05 - Support & Milestone Notes
│
├── 14 - SALES & LEADS
├── 15 - FINANCE & ACCOUNTING
├── 16 - MARKETING
├── 17 - WEBSITE & SEO
├── 18 - BUSINESS OPERATIONS
├── 19 - TRADING & RESEARCH
└── 99 - ARCHIVE
```

---

### 2. Standard Service Master Folder Anatomy
Every commercial service master folder contains exactly 13 standard subfolders:
1. `01 - Service Overview`
2. `02 - Sales Material`
3. `03 - Client Requirements`
4. `04 - Working Files`
5. `05 - Deliverables`
6. `06 - Training`
7. `07 - SOP`
8. `08 - Troubleshooting`
9. `09 - Support`
10. `10 - Templates`
11. `11 - Images & Graphics`
12. `12 - Marketing`
13. `99 - Archive`
