export interface BusinessOsProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  icon: string;
  whatItSolves: string;
  whoItIsFor: string;
  coreModules: string[];
  exampleWorkflow: string[];
  setupFeeNote: string;
  monthlyPlanNote: string;
  whatsIncluded: string[];
  supportLevel: string;
  technologyStack: string[];
}

export const BUSINESS_OS_PRODUCTS: BusinessOsProduct[] = [
  {
    id: "business-os",
    slug: "business-os",
    name: "Business OS",
    tagline: "The connected operating system for your company.",
    badge: "Flagship Platform",
    icon: "Layers",
    whatItSolves:
      "Eliminates disconnected SaaS tools, data fragmentation, duplicate data entry, and lack of company-wide visibility by consolidating core operations into a unified system.",
    whoItIsFor:
      "Growing companies, SMEs, and multi-department teams requiring a single reliable source of truth across CRM, sales, finance, projects, and people.",
    coreModules: [
      "Company Control Plane & Executive Dashboard",
      "Integrated CRM & Customer Pipeline",
      "Finance & Invoicing Engine",
      "HR & Workforce Management",
      "Project & Milestone Tracking",
      "Helpdesk & Service Desk",
      "Role-Based Access Control (RBAC)",
      "Automated Audit Trail & Document Versioning",
    ],
    exampleWorkflow: [
      "New Enquiry enters via Website or Lead Form",
      "Lead automatically assigned to Account Rep in CRM",
      "Quotation generated and accepted by client with digital sign-off",
      "Project & Milestones auto-created with allocated team tasks",
      "Finance auto-generates milestone invoice with payment gateway link",
      "Completed deliverables trigger customer satisfaction ticket in Helpdesk",
    ],
    setupFeeNote: "Structured one-time deployment based on department count and data migration scope.",
    monthlyPlanNote: "Managed Business OS subscription covering hosting, security updates, monitoring, and direct SLA support.",
    whatsIncluded: [
      "Full Frappe/ERPNext configuration & customization",
      "Custom domain, SSL, and hardened cloud infrastructure",
      "Legacy data migration & field mapping",
      "Role-based security & tenant permissions",
      "Executive reporting dashboards",
      "Team training sessions & video SOP documentation",
    ],
    supportLevel: "Priority SLA with direct Systems Architect access, daily automated backups, and proactive uptime monitoring.",
    technologyStack: ["Frappe Framework", "ERPNext", "MariaDB / PostgreSQL", "Python", "Redis", "Cloudflare"],
  },
  {
    id: "crm-os",
    slug: "crm-os",
    name: "CRM OS",
    tagline: "Capture, manage and convert every customer opportunity.",
    badge: "Revenue Engine",
    icon: "Users",
    whatItSolves:
      "Stops leads from slipping through cracks, unifies fragmented conversation channels, and provides predictable visibility over deal stages and sales velocity.",
    whoItIsFor:
      "B2B service firms, consultancies, agencies, and high-touch sales teams needing a structured, automated pipeline.",
    coreModules: [
      "Omnichannel Lead Ingestion (Web, WhatsApp, Email, Phone)",
      "Visual Kanban Deal Pipeline & Stage Governance",
      "Contact & Organisation Relationship Graph",
      "Activity Timeline (Calls, Notes, Tasks, Meetings)",
      "Automated Email Sequences & Follow-up Triggers",
      "Quotation & Proposal Generation",
    ],
    exampleWorkflow: [
      "Inbound lead submitted via web form",
      "Auto-enrichment adds company domain & location",
      "Lead scoring prioritises high-intent opportunities",
      "Sales rep receives instant WhatsApp/email notification",
      "Stage transition automatically logs meeting notes & generates proposal",
    ],
    setupFeeNote: "One-time configuration of pipeline stages, custom fields, and lead capture routing.",
    monthlyPlanNote: "Monthly managed CRM maintenance, webhook health checks, and minor workflow tweaks.",
    whatsIncluded: [
      "Complete lead-to-opportunity pipeline architecture",
      "Website contact form to CRM lead integration",
      "Custom quotation templates with brand styling",
      "Instant email notifications and automated follow-up reminders",
      "Team onboarding & CRM usage manual",
    ],
    supportLevel: "Continuous pipeline uptime monitoring, webhook verification, and quarterly workflow audits.",
    technologyStack: ["Frappe CRM", "Next.js Webhooks", "REST APIs", "Google Sheets Bridge", "Email Alerts"],
  },
  {
    id: "hrms-os",
    slug: "hrms-os",
    name: "HRMS OS",
    tagline: "Manage your people, attendance, leave, recruitment and HR operations.",
    badge: "People & Culture",
    icon: "UserCheck",
    whatItSolves:
      "Replaces messy spreadsheets, manual leave requests, and ad-hoc employee onboarding with compliant, self-service workforce infrastructure.",
    whoItIsFor:
      "Companies with 5 to 250+ employees, distributed teams, or hybrid operations seeking structured people management.",
    coreModules: [
      "Employee Master Record & Digital Profile",
      "Self-Service Leave Application & Multi-tier Approvals",
      "Attendance & Shift Scheduling",
      "Recruitment Pipeline & Candidate Tracking (ATS)",
      "Payroll & Salary Slip Distribution",
      "Document Storage & Expiry Reminders (Visas, Certs)",
    ],
    exampleWorkflow: [
      "Job requisition approved by department manager",
      "Applicant applies → candidate auto-populated in ATS pipeline",
      "Offer letter accepted → system auto-creates Employee Profile",
      "Automated checklist assigns hardware, credentials, and digital SOPs",
      "Employee logs attendance & submits leave from mobile self-service portal",
    ],
    setupFeeNote: "One-time HR policy translation, shift setup, and legacy employee data import.",
    monthlyPlanNote: "Monthly HRMS hosting, payroll cycle support, and policy permission updates.",
    whatsIncluded: [
      "Custom leave & attendance rules matching company handbook",
      "Employee self-service portal configuration",
      "Recruitment portal with public career page feed",
      "Salary structures, tax rules, and slip automation",
      "Admin & staff training documentation",
    ],
    supportLevel: "Business-hours technical assistance, monthly payroll pre-check, and data backup verification.",
    technologyStack: ["Frappe HRMS", "Python", "MariaDB", "Automated Email Engine"],
  },
  {
    id: "finance-os",
    slug: "finance-os",
    name: "Finance OS",
    tagline: "Bring invoicing, expenses, payments and financial operations into one system.",
    badge: "Financial Control",
    icon: "Receipt",
    whatItSolves:
      "Eliminates delayed billing, lost expense receipts, manual reconciliation, and financial blind spots with real-time ledger accounting.",
    whoItIsFor:
      "Founders, managing directors, and finance managers wanting real-time cash flow visibility and automated billing workflows.",
    coreModules: [
      "General Ledger & Chart of Accounts",
      "Accounts Receivable & Invoicing with Payment Links",
      "Accounts Payable, Purchase Orders & Supplier Records",
      "Expense Claims & Employee Reimbursement",
      "Bank Reconciliation & Statement Import",
      "Real-Time P&L, Balance Sheet, and Cash Flow Reports",
    ],
    exampleWorkflow: [
      "Sales milestone achieved → draft invoice auto-generated",
      "Invoice emailed to client with Stripe / bank transfer button",
      "Client pays → webhook records receipt and clears Accounts Receivable",
      "Supplier bills matched against Purchase Orders via 3-way check",
      "Executive receives weekly automated cash-position digest",
    ],
    setupFeeNote: "One-time Chart of Accounts configuration, invoice design, and tax rule setup.",
    monthlyPlanNote: "Monthly accounting ledger integrity checks, bank integration maintenance, and system updates.",
    whatsIncluded: [
      "Tailored Chart of Accounts suited to jurisdiction (UK / Global)",
      "Professional PDF invoice templates with payment gateways",
      "Multi-currency support and automated exchange rates",
      "Automated payment reminder workflows for overdue accounts",
      "CFO / Director financial dashboard setup",
    ],
    supportLevel: "Priority financial systems support, tax year transition assistance, and automated database backups.",
    technologyStack: ["ERPNext Accounts", "Stripe API", "Bank Feed Webhooks", "Report Builder"],
  },
  {
    id: "sales-os",
    slug: "sales-os",
    name: "Sales OS",
    tagline: "Turn leads and opportunities into an organised sales pipeline.",
    badge: "Deal Velocity",
    icon: "TrendingUp",
    whatItSolves:
      "Prevents slow quotation turnaround, unassigned inbound leads, and lack of deal closing velocity across sales representatives.",
    whoItIsFor:
      "Product and service companies managing recurring proposals, multi-tier pricing, and target-driven sales teams.",
    coreModules: [
      "Deal Velocity Analytics & Forecasting",
      "Quotation CPQ (Configure, Price, Quote)",
      "Automated Sales Order Generation",
      "Territory & Representative Quota Tracking",
      "Customer Contract & Renewal Management",
      "Margin & Profitability Calculation per Deal",
    ],
    exampleWorkflow: [
      "Sales rep configures line items with locked discounts",
      "One-click quote dispatched to client with tracking link",
      "Client accepts online → Sales Order automatically generated",
      "Inventory or project delivery team notified instantly",
      "Commission & quota metrics updated on team dashboard",
    ],
    setupFeeNote: "One-time catalog setup, discount logic implementation, and proposal template design.",
    monthlyPlanNote: "Monthly pipeline tuning, price list adjustments, and sales team user management.",
    whatsIncluded: [
      "Custom product & service catalog with pricing matrices",
      "Dynamic proposal generator with electronic sign-off",
      "Rep performance and conversion rate reporting",
      "Automated quotation expiry alerts",
      "Sales playbook & tool training for reps",
    ],
    supportLevel: "Standard SLA support, catalog maintenance, and monthly sales funnel health checks.",
    technologyStack: ["ERPNext Selling", "PDF Generator", "Webhook Triggers", "Analytics Engine"],
  },
  {
    id: "project-os",
    slug: "project-os",
    name: "Project OS",
    tagline: "Manage projects, tasks, milestones and team delivery.",
    badge: "Execution Precision",
    icon: "CheckSquare",
    whatItSolves:
      "Solves project delivery delays, scope creep, unbilled billable hours, and fragmented team communication across external client engagements.",
    whoItIsFor:
      "Consultancies, engineering firms, software studios, creative agencies, and professional services practices.",
    coreModules: [
      "Project Gantt & Milestone Timelines",
      "Kanban Task Boards with Dependency Mapping",
      "Timesheet Tracking & Billable Hour Logging",
      "Project Budget vs. Actual Cost Monitoring",
      "Client Portal for Progress Transparency",
      "Task Issue & Deliverable Approval Workflows",
    ],
    exampleWorkflow: [
      "Signed Sales Order automatically creates new Project workspace",
      "Pre-configured template generates milestone tasks & deadlines",
      "Engineers log time against specific deliverables",
      "Timesheets roll up into customer invoice automatically",
      "Client reviews and approves milestone completions in real time",
    ],
    setupFeeNote: "One-time project template architecture, timesheet billing rates setup, and client portal layout.",
    monthlyPlanNote: "Monthly project archive management, storage maintenance, and user permissions tuning.",
    whatsIncluded: [
      "Bespoke project template creation matching internal methodologies",
      "Timesheet to billing automation",
      "Budget overrun warning alerts",
      "Secure external client review portal",
      "Team delivery SOPs and time tracking onboarding",
    ],
    supportLevel: "Business-day technical assistance, system backups, and continuous uptime monitoring.",
    technologyStack: ["ERPNext Projects", "Frappe Gantt", "Timesheet Engine", "Client Portal"],
  },
  {
    id: "helpdesk-os",
    slug: "helpdesk-os",
    name: "Helpdesk OS",
    tagline: "Give your customers and support team a structured support system.",
    badge: "Service Excellence",
    icon: "Headphones",
    whatItSolves:
      "Stops client support emails from being forgotten in personal inboxes and provides transparent SLA tracking with satisfaction benchmarks.",
    whoItIsFor:
      "SaaS companies, managed service providers, product sellers, and service firms handling post-sale client requests.",
    coreModules: [
      "Shared Support Inbox with Ticket Auto-Assignment",
      "Multi-Channel Ingestion (Email-to-Ticket, Web Portal, WhatsApp)",
      "SLA Policy Engine (First Response & Resolution Timers)",
      "Knowledge Base & Frequently Asked Solutions",
      "Canned Responses & Automation Macros",
      "Customer Satisfaction (CSAT) Scoring",
    ],
    exampleWorkflow: [
      "Customer emails support@company.com or files a ticket online",
      "Ticket created with unique reference ID and SLA countdown",
      "Auto-routed to available specialist based on issue category",
      "Agent resolves using verified Knowledge Base macro",
      "Customer receives resolution notification with 1-click CSAT rating",
    ],
    setupFeeNote: "One-time email routing setup, SLA matrix definition, and knowledge base structuring.",
    monthlyPlanNote: "Monthly helpdesk performance audits, spam filtering tuning, and ticket archive management.",
    whatsIncluded: [
      "Email-to-ticket domain integration (support@...)",
      "Custom ticket priority and resolution SLA rules",
      "Pre-built canned responses and standard replies",
      "Customer self-service knowledge base framework",
      "Support team operating guidelines and training",
    ],
    supportLevel: "High-priority support, mailbox monitoring, and continuous queue health inspection.",
    technologyStack: ["Frappe Helpdesk", "IMAP/SMTP Mail Routers", "Knowledge Base Engine", "CSAT Tracker"],
  },
  {
    id: "operations-os",
    slug: "operations-os",
    name: "Operations OS",
    tagline: "Standardise internal workflows, approvals, SOPs and daily operations.",
    badge: "Operational Rigor",
    icon: "Sliders",
    whatItSolves:
      "Eliminates operational chaos, bottlenecked approvals, undocumented tribal knowledge, and compliance risks through codified execution.",
    whoItIsFor:
      "Multi-location businesses, scaling companies, and operational leaders seeking consistent, audit-ready daily execution.",
    coreModules: [
      "Multi-Level Approval Matrix (Expenses, Contracts, POs)",
      "Digital Standard Operating Procedures (SOPs) with Verification Checklists",
      "Asset & Equipment Tracking",
      "Operational KPI Dashboard & Real-Time Bottleneck Alerts",
      "Vendor & Contractor Compliance Verification",
      "Incident Logging & Corrective Action Tracking",
    ],
    exampleWorkflow: [
      "Team member submits purchase requisition exceeding $1,000",
      "System automatically triggers two-tier approval (Manager → Director)",
      "Approved request auto-generates purchase order with audit log",
      "Daily shift opening checklist completed via mobile device",
      "Exception alerts dispatched immediately to Operations Director",
    ],
    setupFeeNote: "One-time workflow codification, approval hierarchy build, and digital checklist migration.",
    monthlyPlanNote: "Monthly workflow optimization, rule adjustments, and operational audit reports.",
    whatsIncluded: [
      "Custom approval workflow trees with email & WhatsApp sign-offs",
      "Interactive digital checklists with timestamped completions",
      "Asset register with maintenance schedules",
      "Executive operational risk & delay dashboards",
      "Operations manual and management team training",
    ],
    supportLevel: "Priority SLA, workflow debugging, and continuous infrastructure health assurance.",
    technologyStack: ["Frappe Workflow Engine", "DocType Modeler", "Custom Server Scripts", "Notification Webhooks"],
  },
  {
    id: "inventory-os",
    slug: "inventory-os",
    name: "Inventory OS",
    tagline: "Track stock, purchasing, suppliers and inventory movement.",
    badge: "Supply Chain",
    icon: "Boxes",
    whatItSolves:
      "Stops stockouts, overstocking, dead inventory, and supplier delays with serialized tracking and automated replenishment triggers.",
    whoItIsFor:
      "Wholesalers, distributors, manufacturers, hardware providers, and eCommerce operations managing physical inventory.",
    coreModules: [
      "Multi-Warehouse Stock Ledger & Real-Time Balances",
      "Batch & Serial Number Tracking with Barcode Scanning",
      "Automated Reorder Level Calculations & Purchase Requisitions",
      "Supplier Price Comparison & Purchasing Management",
      "Stock Transfer, Delivery Notes & Landed Cost Valuation",
      "Discrepancy & Physical Stock Reconciliation",
    ],
    exampleWorkflow: [
      "Warehouse stock reaches minimum threshold",
      "Automated Material Request generated for purchasing officer",
      "Purchase Order sent to approved supplier with contracted terms",
      "Goods arrive → scanned and validated against original PO",
      "Landed cost calculated automatically and updated in stock ledger",
    ],
    setupFeeNote: "One-time warehouse hierarchy setup, barcode configuration, and opening stock balance audit.",
    monthlyPlanNote: "Monthly stock valuation integrity checks, SKU catalog maintenance, and cloud performance monitoring.",
    whatsIncluded: [
      "Warehouse and bin location setup",
      "Supplier catalog and contracted price lists",
      "Stock alert triggers and reorder thresholds",
      "Delivery note and pick list templates",
      "Warehouse staff mobile scanner training",
    ],
    supportLevel: "Standard SLA, monthly reconciliation check, and daily stock ledger data backups.",
    technologyStack: ["ERPNext Stock", "Barcode Integration", "Inventory Valuation Engine", "Warehouse Management"],
  },
  {
    id: "custom-os",
    slug: "custom-os",
    name: "Custom OS",
    tagline: "Build the operating system around your exact business process.",
    badge: "Bespoke Engineering",
    icon: "Cpu",
    whatItSolves:
      "Solves the limitation of off-the-shelf software when your competitive advantage relies on a unique, proprietary operational model.",
    whoItIsFor:
      "Specialized enterprises, industry disruptors, and complex operations whose workflows cannot fit into rigid legacy software.",
    coreModules: [
      "Custom Data Models & Bespoke DocTypes",
      "Proprietary Calculation Engines & Business Logic",
      "Third-Party Software & Hardware API Bridges",
      "Tailored Client & Partner Portals",
      "Custom Reporting & Specialized Visualizations",
      "Dedicated High-Availability Cloud Architecture",
    ],
    exampleWorkflow: [
      "Deep Discovery & Process Architecture Audit",
      "Technical Specification & Data Flow Schemas finalized",
      "Agile milestone development with interactive staging reviews",
      "Rigorous unit testing, security auditing, and user acceptance",
      "Production deployment with zero downtime and ongoing managed engineering",
    ],
    setupFeeNote: "Milestone-based engineering scope with fixed deliverables and transparent project architecture.",
    monthlyPlanNote: "Dedicated Managed OS tier including priority developer hours, continuous CI/CD, and system evolution.",
    whatsIncluded: [
      "Complete systems architecture blueprint",
      "Custom backend & frontend interface engineering",
      "End-to-end API integrations and webhook bridges",
      "Dedicated staging and production environments",
      "Custom documentation, admin guides, and video SOPs",
    ],
    supportLevel: "Direct Systems Architect access, 4-hour critical SLA, and dedicated engineering support.",
    technologyStack: ["Frappe Framework", "Python", "Next.js", "PostgreSQL / MariaDB", "Tailwind CSS", "Docker"],
  },
];

export const DIGITAL_GROWTH_PRODUCTS = [
  {
    id: "website-growth-os",
    name: "Website Growth OS",
    tagline: "A premium website connected directly to your lead and customer workflow.",
    badge: "Conversion Engine",
    icon: "Globe",
    description:
      "Most business websites exist as static brochures disconnected from sales operations. Website Growth OS transforms your digital presence into an automated pipeline that validates, scores, and injects enquiries directly into your CRM.",
    workflow: [
      "VISITOR arrives at fast, high-converting digital storefront",
      "WEBSITE delivers clear value proposition and interactive proof",
      "LEAD FORM validates email and international phone format in real-time",
      "LEAD ID generated automatically (canonical audit standard)",
      "CRM records enquiry and assigns ownership instantaneously",
      "INSTANT ALERT triggers via email and WhatsApp to sales team",
      "FOLLOW-UP executes within minutes while customer intent is high",
      "CUSTOMER converted with zero data leakage or lost opportunities",
    ],
    features: [
      "Next.js App Router with ultra-fast page loads",
      "Tailwind CSS modern glassmorphic design system",
      "Integrated honeypot and anti-spam verification",
      "Automated Google Sheets & CRM webhook dispatch",
      "International phone number validation and formatting",
      "Fully responsive on Mobile, Tablet, and Desktop",
      "SEO architecture with schema markup and open-graph cards",
      "WhatsApp direct floating button with pre-filled context",
    ],
  },
  {
    id: "crm-integration",
    name: "Website-to-CRM Integration",
    tagline: "Bridge your digital storefront with backend sales operations seamlessly.",
    badge: "Data Sync",
    icon: "Network",
    description:
      "Connect your existing website, landing pages, and lead channels directly into your CRM or Google Sheets with zero manual data entry.",
    features: [
      "Custom webhook middleware for lead ingestion",
      "Duplicate lead detection and merge algorithms",
      "Instant team notifications on Slack, WhatsApp, and Email",
      "Field mapping for custom qualification questions",
      "Utm parameter and marketing source attribution",
    ],
  },
  {
    id: "booking-systems",
    name: "Automated Booking Systems",
    tagline: "Eliminate scheduling ping-pong and automate calendar bookings.",
    badge: "Scheduling",
    icon: "Calendar",
    description:
      "Interactive consultation booking systems that sync with your calendar, send automatic reminders, and collect client intake data before the call.",
    features: [
      "Timezone-intelligent calendar scheduling",
      "Custom intake questions prior to confirmation",
      "Automated SMS & WhatsApp meeting reminders",
      "Calendar sync with Google Calendar / Outlook",
      "Rescheduling & cancellation self-service policies",
    ],
  },
  {
    id: "workflow-automation",
    name: "Intelligent Workflow Automation",
    tagline: "Eliminate repetitive tasks using Google Apps Script, webhooks, and AI agents.",
    badge: "Automation",
    icon: "Zap",
    description:
      "Automate manual business tasks such as PDF invoice generation, multi-spreadsheet synchronization, email notifications, and cross-platform data transfers.",
    features: [
      "Google Apps Script custom business automation",
      "Automated PDF generation from spreadsheet templates",
      "Multi-system webhook orchestration",
      "Email parsing and data extraction into database",
      "Scheduled reporting and anomaly detection digests",
    ],
  },
];

export const TRADING_TECH_PRODUCTS = [
  {
    id: "tradingview-indicators",
    name: "TradingView Indicators",
    tagline: "Rule-based visual analytical tools coded in Pine Script v5.",
    badge: "Pine Script v5",
    icon: "TrendingUp",
    description:
      "Custom, non-repainting technical indicators reflecting precise market logic, sessions, liquidity sweeps, multi-timeframe moving averages, and order blocks.",
    features: [
      "100% non-repainting mathematical logic",
      "Multi-timeframe analysis (MTF) engine",
      "Configurable visual themes and clean styling",
      "Integrated alert triggers for webhooks and mobile notifications",
      "Source code delivery with clear parameter documentation",
    ],
  },
  {
    id: "tradingview-strategies",
    name: "TradingView Strategies",
    tagline: "Backtestable systematic trading models with realistic execution parameters.",
    badge: "Systematic Backtest",
    icon: "Binary",
    description:
      "Quantitative trading strategies engineered for rigorous historical backtesting, realistic commissions, slippage modeling, and session-filtered entries.",
    features: [
      "Comprehensive performance analytics and drawdown metrics",
      "Built-in commission and realistic slippage simulation",
      "Time and session filters (London, NY, Asian sessions)",
      "Dynamic risk-reward and ATR-based stop mechanisms",
      "Clean alert conditions formatted for easy manual or webhook execution",
    ],
  },
  {
    id: "mt5-scanners",
    name: "MT5 Multi-Symbol Scanners",
    tagline: "Scan 28+ currency pairs, indices, and metals from a single chart in real time.",
    badge: "MetaTrader 5",
    icon: "Sliders",
    description:
      "High-performance native MQL5 dashboard scanners that monitor entire market watchlists for multi-timeframe trend alignment, breakouts, and confluence setups.",
    features: [
      "Scans up to 30+ symbols across 9 timeframes simultaneously",
      "Zero terminal lag with optimized memory management",
      "One-click chart switching directly from the dashboard",
      "Customizable alerts (Audio, Push Notification, Telegram)",
      "Tested for Gold (XAUUSD), Silver, US500, USTEC, and FX majors",
    ],
  },
  {
    id: "mt5-expert-advisors",
    name: "MT5 Expert Advisors (EAs)",
    tagline: "Rule-based execution scripts with position sizing & risk controls.",
    badge: "Automated Scripts",
    icon: "Zap",
    description:
      "Native MQL5 scripts engineered to execute standard trade rules with fixed position sizing, stop-loss, and take-profit targets.",
    features: [
      "Dynamic lot sizing based on strict account risk percentage",
      "Max daily drawdown circuit breakers",
      "Break-even and trailing stop management algorithms",
      "Built-in spread and slippage execution checks",
      "Compatible with standard VPS hosting for continuous runtime",
    ],
  },
  {
    id: "telegram-alerts",
    name: "Telegram Alert Systems",
    tagline: "Webhook delivery of trade signals directly to your Telegram channel.",
    badge: "Real-Time Alerts",
    icon: "Send",
    description:
      "Connect your TradingView alerts or MT5 scanners to automated Telegram channels or private groups with formatted market cards and charts.",
    features: [
      "Reliable signal notifications to your private Telegram channel",
      "Clean visual markdown format with entry, SL, and TP targets",
      "Automated trade management update broadcasts",
      "VIP subscriber channel access automation",
      "Serverless architecture with 99.9% uptime reliability",
    ],
  },
  {
    id: "custom-trading-automation",
    name: "Custom Trading Automation",
    tagline: "Bespoke bridge software connecting charts, brokers, and risk engines.",
    badge: "Bespoke FinTech",
    icon: "Cpu",
    description:
      "End-to-end algorithmic trading infrastructure connecting analytical models, Python quantitative libraries, broker APIs, and proprietary execution frameworks.",
    features: [
      "Python MetaTrader 5 library integration",
      "Real-time market tick ingestion pipelines",
      "Automated trade journaling and performance dashboards",
      "Prop-firm challenge risk parameters and compliance rules",
      "Strict security with localized credential management",
    ],
  },
];

export const BUSINESS_OS_PROCESS = [
  {
    step: "01",
    name: "DISCOVER",
    title: "Discovery & Operational Diagnosis",
    description:
      "We unpack your current operational bottlenecks, team responsibilities, software stack, and growth hurdles through an intensive systems consultation.",
    deliverable: "Operational Gap Analysis & Objectives Matrix",
  },
  {
    step: "02",
    name: "AUDIT",
    title: "Systems & Data Audit",
    description:
      "We audit your existing tools, data sources, spreadsheets, and processes to identify redundancies, data leakage, and subscription waste.",
    deliverable: "Tech Stack Audit & Optimization Blueprint",
  },
  {
    step: "03",
    name: "DESIGN",
    title: "Architecture & Schema Design",
    description:
      "We design the complete data model, user roles, permission trees, approval chains, and interconnected module workflows before touching code.",
    deliverable: "Business OS Architecture & Data Flow Specification",
  },
  {
    step: "04",
    name: "CONFIGURE",
    title: "Application Configuration & Build",
    description:
      "We configure the appropriate Frappe/ERPNext applications, customize DocTypes, establish business rules, and connect your essential external tools.",
    deliverable: "Staging System Environment Ready for Review",
  },
  {
    step: "05",
    name: "DEPLOY",
    title: "Hardened Production Deployment",
    description:
      "We deploy to secure, high-availability cloud infrastructure with custom domain routing, SSL certificates, automated backups, and monitoring.",
    deliverable: "Live Production Business OS Environment",
  },
  {
    step: "06",
    name: "TRAIN",
    title: "Team Training & Documentation",
    description:
      "We train your team through interactive sessions and produce customized video standard operating procedures (SOPs) so everyone adopts the system.",
    deliverable: "Video SOP Library & Role-Specific User Guides",
  },
  {
    step: "07",
    name: "SUPPORT",
    title: "Managed Business OS & SLA",
    description:
      "We provide ongoing hosting management, daily backups, security updates, user administration, and fast technical support directly from the architect.",
    deliverable: "Guaranteed SLA & Ongoing Operational Peace of Mind",
  },
  {
    step: "08",
    name: "IMPROVE",
    title: "Continuous Optimization & Evolution",
    description:
      "As your business expands, we continuously refine workflows, add new modules, integrate emerging AI tools, and optimize system performance.",
    deliverable: "Quarterly Systems Review & Roadmap Updates",
  },
];

export const INTERACTIVE_DIAGRAM_STAGES = [
  {
    id: "website",
    title: "01. Website & Storefront",
    category: "Inbound",
    description: "High-speed modern digital storefront designed to convert qualified traffic and present clear value.",
    inputs: "Search, Social, Direct Traffic",
    outputs: "Engaged Visitor Intent",
    icon: "Globe",
  },
  {
    id: "lead-capture",
    title: "02. Lead Capture & Validation",
    category: "Ingestion",
    description: "Automated forms validate contact details, apply anti-spam checks, and assign a canonical Lead ID.",
    inputs: "Visitor Form Submission",
    outputs: "Validated Lead ID & Context",
    icon: "Mail",
  },
  {
    id: "crm",
    title: "03. CRM Pipeline",
    category: "Sales Velocity",
    description: "Lead routed instantly to the right team member with scoring, company details, and automated follow-up.",
    inputs: "Validated Lead ID",
    outputs: "Qualified Deal & Interaction History",
    icon: "Users",
  },
  {
    id: "sales",
    title: "04. Sales & Quotation CPQ",
    category: "Conversion",
    description: "Configure pricing, terms, and digital proposals. Client accepts online with immediate notification.",
    inputs: "Qualified Deal",
    outputs: "Signed Contract & Sales Order",
    icon: "TrendingUp",
  },
  {
    id: "finance",
    title: "05. Finance & Invoicing",
    category: "Cash Flow",
    description: "Sales order auto-generates invoice with payment links. Payment clears receivable in real time.",
    inputs: "Signed Sales Order",
    outputs: "Payment Receipt & General Ledger Entry",
    icon: "Receipt",
  },
  {
    id: "operations",
    title: "06. Operations & Workflow",
    category: "Execution",
    description: "Standard operating procedures, approval chains, and resource allocations trigger automatically.",
    inputs: "Cleared Payment",
    outputs: "Active Fulfillment & SOP Verification",
    icon: "Sliders",
  },
  {
    id: "hr",
    title: "07. People & HRMS",
    category: "Capacity",
    description: "Staff capacity, project role assignments, time logs, and leave calendars coordinate smoothly.",
    inputs: "Resource Demands",
    outputs: "Balanced Workload & Timesheet Logs",
    icon: "UserCheck",
  },
  {
    id: "helpdesk",
    title: "08. Helpdesk & Support",
    category: "Retention",
    description: "Clients receive dedicated ticketing, SLA tracking, and resolution knowledge bases post-launch.",
    inputs: "Client Requests / Inquiries",
    outputs: "Resolved Ticket & High CSAT Score",
    icon: "Headphones",
  },
  {
    id: "dashboard",
    title: "09. Management Dashboard",
    category: "Intelligence",
    description: "Real-time visibility over cash position, sales pipeline, open tickets, and operational health.",
    inputs: "All Connected System Data",
    outputs: "Executive Decision Clarity",
    icon: "Layers",
  },
];

export const WHY_HEMANTH_POINTS = [
  {
    title: "Founder-Led & Direct Access",
    tagline: "No Account Managers or Bureaucracy",
    description:
      "You work directly with Hemanth Ranam—a systems architect and MBA/CMI Level 7 strategic leader. Every design decision, technical architecture, and implementation strategy is handled with high-level accountability.",
    icon: "UserCheck",
  },
  {
    title: "Systems Over Patchwork Tools",
    tagline: "Unified Architecture vs. SaaS Sprawl",
    description:
      "We don't sell 10 disconnected tools with separate logins. We design connected operating systems that bring your customer data, accounting, staff, and operations into one coherent database.",
    icon: "Network",
  },
  {
    title: "Battle-Tested Open Architecture",
    tagline: "Frappe & ERPNext Underlying Foundations",
    description:
      "Built upon enterprise-grade, open-source technology trusted by hundreds of thousands of companies globally. No proprietary lock-in, zero punitive per-seat licensing fees, and 100% data ownership.",
    icon: "ShieldCheck",
  },
  {
    title: "Practical, Transparent Milestone Scopes",
    tagline: "Clear Deliverables & Fixed Milestone Pricing",
    description:
      "No open-ended hourly billing surprises. Every project is scoped with tangible milestones, defined deliverables, and clear timelines before implementation begins.",
    icon: "CheckCircle2",
  },
  {
    title: "More Than a Handover",
    tagline: "Training, SOPs & Continuous Monthly Management",
    description:
      "A system is only as good as team adoption. We deliver customized video SOPs, train your team, and provide ongoing managed Business OS subscriptions to keep your systems running at peak performance.",
    icon: "RefreshCw",
  },
  {
    title: "Quantitative Rigor & Real-World Execution",
    tagline: "FinTech Precision Applied to Business Systems",
    description:
      "With deep expertise in algorithmic trading systems and real-time execution engines, we apply the same zero-tolerance standards for downtime and data precision to enterprise business operations.",
    icon: "Cpu",
  },
];

export const BUSINESS_OS_FAQS = [
  {
    question: "What is a Business OS?",
    answer:
      "A Business OS (Business Operating System) is a centralized software platform that consolidates your company's core operations—including customer relationship management (CRM), finance and invoicing, human resources (HRMS), project delivery, helpdesk, and daily operations—into one connected environment. Instead of paying for 8 different software subscriptions and manually copying data between them, your entire team operates from a single, unified source of truth.",
  },
  {
    question: "What technology platform do you build on?",
    answer:
      "We primarily configure and customize the enterprise-grade Frappe Framework and ERPNext ecosystem, combined with modern Next.js frontends, Python automations, and secure cloud infrastructure. This gives you enterprise-tier capabilities, complete data ownership, and zero expensive per-user per-month licensing fees.",
  },
  {
    question: "How does the pricing work between One-Time Setup and Monthly Subscription?",
    answer:
      "We separate technical setup from ongoing operational management: The one-time implementation fee covers architecture design, application configuration, data migration, customized workflows, and staff training. The monthly Managed Business OS subscription covers secure cloud hosting, daily automated backups, security patches, proactive monitoring, user management, minor workflow tweaks, and direct technical SLA support.",
  },
  {
    question: "Can I start with just one system (e.g., CRM or HRMS) and add more later?",
    answer:
      "Yes, absolutely. That is one of the greatest benefits of the Business OS architecture. You can start with CRM OS or Website Growth OS to fix your inbound lead workflow, and later seamlessly activate Finance OS, HRMS OS, or Operations OS inside the same platform without needing to migrate data or learn a new interface.",
  },
  {
    question: "Do I have to expose my team to complicated technical settings?",
    answer:
      "Not at all. We configure role-based user permissions and clean, tailored interfaces. Your sales reps see only their leads, your project managers see their tasks, and your HR team sees workforce tools. Complex system settings, server parameters, and backend configurations remain completely managed behind the scenes by us.",
  },
  {
    question: "How long does a typical Business OS implementation take?",
    answer:
      "A focused single-division system (such as CRM OS or Website Growth OS) typically deploys within 1 to 2 weeks. A comprehensive multi-department Business OS deployment spanning CRM, Finance, HR, and Operations typically takes 3 to 6 weeks, structured across clear milestone stages.",
  },
  {
    question: "Is Trading Technology connected to Business OS?",
    answer:
      "Trading Technology is a distinct, specialized division. We build systematic indicators, backtestable strategies, multi-symbol scanners, and automated alert systems for TradingView and MetaTrader 5 (MT5). It is completely separate from corporate Business OS implementations.",
  },
  {
    question: "How do we get started?",
    answer:
      "The recommended starting point is a 60-minute Systems Consultation. We audit your existing tools, diagnose your operational bottlenecks, and produce a clear Digital Transformation Roadmap with exact deliverables and fixed pricing.",
  },
];
