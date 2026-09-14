export interface OneTimeService {
  id: string;
  name: string;
  category: "Consulting" | "Implementation" | "Development";
  badge?: string;
  originalPrice?: string;
  price: string;
  currency: string;
  deliverableScope: string;
  timeline: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface MonthlyOsPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  price: string;
  period: string;
  currency: string;
  idealFor: string;
  includedModules: string[];
  features: string[];
  sla: string;
  ctaLabel: string;
  popular?: boolean;
  stripePriceId?: string;
}

export const ONE_TIME_SERVICES: OneTimeService[] = [
  {
    id: "business-consultation",
    name: "Business Systems Consultation",
    category: "Consulting",
    badge: "Recommended Starting Point",
    originalPrice: "$49",
    price: "$35",
    currency: "USD",
    deliverableScope: "60-minute intensive 1-on-1 strategy & bottleneck audit session with Hemanth Ranam.",
    timeline: "Completed in 24–48 hours",
    features: [
      "Current technology stack & tool sprawl audit",
      "Process bottleneck identification & root cause analysis",
      "Actionable high-ROI systems recommendation roadmap",
      "Written audit summary and recording delivered post-call",
      "Fee 100% credited toward any subsequent implementation",
    ],
    ctaLabel: "Book Consultation",
    popular: true,
  },
  {
    id: "process-tech-audit",
    name: "Comprehensive Systems & Tech Audit",
    category: "Consulting",
    originalPrice: "$79",
    price: "$59",
    currency: "USD",
    deliverableScope: "Deep-dive diagnostic of company workflows, software duplication, and data leaks.",
    timeline: "3–5 Business Days",
    features: [
      "In-depth analysis of existing software subscriptions & cost waste",
      "Data flow mapping between existing tools and spreadsheets",
      "Security, permission hierarchy, and compliance review",
      "Formal Optimization Blueprint document with prioritized fixes",
      "Executive presentation of findings",
    ],
    ctaLabel: "Request Systems Audit",
  },
  {
    id: "digital-transformation-roadmap",
    name: "Digital Transformation Roadmap",
    category: "Consulting",
    originalPrice: "$99",
    price: "$75",
    currency: "USD",
    deliverableScope: "End-to-end architectural plan for transitioning into a unified Business OS.",
    timeline: "5–7 Business Days",
    features: [
      "Target Business OS architecture specification",
      "DocType & schema definition tailored to company structure",
      "Step-by-step phased migration & milestone schedule",
      "Hardware, cloud hosting, and domain prerequisites checklist",
      "Cost-benefit projections & ROI timeline",
    ],
    ctaLabel: "Get Systems Roadmap",
  },
  {
    id: "website-growth-os-setup",
    name: "Website Growth OS Implementation",
    category: "Implementation",
    badge: "Digital Growth Entry",
    price: "Custom Scope",
    currency: "USD",
    deliverableScope: "Complete high-speed business website connected directly to Google Sheets CRM & instant email notifications.",
    timeline: "7–14 Business Days",
    features: [
      "Next.js App Router high-performance responsive web application",
      "Clean modern UI design system optimized for mobile and desktop",
      "Direct Google Sheets CRM lead ingestion with unique Lead IDs",
      "Instant email notifications whenever a new lead submits the form",
      "SEO foundations, schema markup, and speed optimization",
      "Custom domain connection, SSL certificate, and Cloudflare CDN deployment",
    ],
    ctaLabel: "Build Website Growth OS",
  },
  {
    id: "single-division-os-setup",
    name: "Single Division OS (CRM, HRMS, or Finance)",
    category: "Implementation",
    badge: "Core OS Setup",
    originalPrice: "$499",
    price: "$369",
    currency: "USD",
    deliverableScope: "Configuration and deployment of one core Business OS application in Frappe / ERPNext.",
    timeline: "2–3 Weeks",
    features: [
      "Dedicated Frappe / ERPNext application setup (CRM, HRMS, or Invoicing)",
      "Role-based permission architecture and custom field modeling",
      "Clean legacy data import from existing CSVs or spreadsheets",
      "Custom proposal or invoice templates matching your brand",
      "Staff walkthrough session and step-by-step setup guides",
    ],
    ctaLabel: "Deploy Division OS",
    popular: true,
  },
  {
    id: "connected-business-os-setup",
    name: "Complete Connected Business OS",
    category: "Implementation",
    badge: "Operations Suite",
    price: "Custom Scope",
    currency: "USD",
    deliverableScope: "Multi-module business operating system connecting CRM, Invoicing, HR, and Operations.",
    timeline: "3–5 Weeks",
    features: [
      "Unified Frappe / ERPNext multi-department configuration",
      "Connected data flow from Lead to Quotation, Invoice, and Project Tasks",
      "Role-based user permissions and access control",
      "Historical customer and inventory data migration from spreadsheets",
      "Executive summary reports and pipeline visibility",
      "Full team training walkthrough and recorded video guides",
    ],
    ctaLabel: "Scope Business OS",
  },
  {
    id: "custom-automation-migration",
    name: "Spreadsheet & Webhook Automation",
    category: "Development",
    price: "Custom Scope",
    currency: "USD",
    deliverableScope: "Google Apps Script routines, webhook data sync, and spreadsheet cleaning.",
    timeline: "Scoped per deliverable",
    features: [
      "Google Sheets custom formulas, Apps Script automations, and PDF generation",
      "Simple webhook connections between web forms and spreadsheets",
      "Clean CSV data extraction, formatting, and import routines",
      "Automated email notification triggers upon row updates",
      "Thorough testing and verification before handoff",
    ],
    ctaLabel: "Discuss Automation Scope",
  },
];

export const MONTHLY_OS_PLANS: MonthlyOsPlan[] = [
  {
    id: "launch-os",
    name: "LAUNCH OS",
    tagline: "Essential system setup for small businesses and solo founders.",
    price: "$79",
    period: "/month",
    currency: "USD",
    idealFor: "Solo founders, consultancies, and micro-teams (up to 5 users).",
    includedModules: [
      "Modern Business Website & Contact Forms",
      "Lead Capture into Google Sheets CRM",
      "Automated Email Lead Notifications",
      "Basic Sales Pipeline Tracking",
    ],
    features: [
      "Managed cloud hosting environment with domain SSL setup",
      "Daily automated database backups with 7-day retention",
      "Continuous form submission and uptime monitoring",
      "Direct email technical support with 48-hour response",
      "Up to 2 minor field or layout adjustments per month",
      "Monthly system health and uptime summary",
    ],
    sla: "48-Hour Response SLA",
    ctaLabel: "Select Launch OS",
  },
  {
    id: "growth-os",
    name: "GROWTH OS",
    tagline: "Structured CRM and sales pipeline management for expanding teams.",
    badge: "Most Popular",
    price: "$149",
    period: "/month",
    currency: "USD",
    idealFor: "Growing service firms, agencies, and teams (5 to 20 users).",
    includedModules: [
      "Dedicated Frappe CRM or HRMS Setup",
      "Lead to Quotation Pipeline Tracking",
      "Automated Email Alerts & Follow-up Reminders",
      "Client Quotation & Invoice Generation",
    ],
    features: [
      "Managed cloud server setup and security patch maintenance",
      "Daily automated backups with 30-day retention",
      "Form webhook verification and data flow checks",
      "Priority technical support directly with Hemanth Ranam",
      "Up to 5 workflow, field, or report adjustments per month",
      "Personalized walkthrough guide and configuration support",
    ],
    sla: "24-Hour Response SLA",
    ctaLabel: "Select Growth OS",
    popular: true,
  },
  {
    id: "business-os",
    name: "BUSINESS OS",
    tagline: "Complete connected operations across CRM, accounts, HR, and projects.",
    badge: "Complete Operations",
    price: "$299",
    period: "/month",
    currency: "USD",
    idealFor: "Established companies and multi-department teams (15 to 50+ users).",
    includedModules: [
      "Full ERPNext Business OS Configuration",
      "Connected CRM, Sales & Invoicing",
      "HR Records, Leaves & Attendance",
      "Project Task Tracking & Support Tickets",
    ],
    features: [
      "Dedicated configured cloud server instance with performance tuning",
      "Automated daily off-site database backups",
      "Role-based user permissions and security access control",
      "Direct WhatsApp and priority email access to Hemanth Ranam",
      "Regular minor configuration tweaks and user administration",
      "Team walkthrough refreshers and updated video SOPs",
    ],
    sla: "12-Hour Priority SLA",
    ctaLabel: "Select Business OS",
  },
  {
    id: "custom-os",
    name: "CUSTOM OS",
    tagline: "Bespoke system setup, tailored data migrations, or custom trading tools.",
    badge: "Custom Scope",
    price: "Custom",
    period: "Milestone or retainer",
    currency: "USD",
    idealFor: "Businesses with specific requirements, custom integrations, or Pine Script / MT5 needs.",
    includedModules: [
      "Tailored ERPNext & CRM Customization",
      "Custom Google Sheets & Webhook Integrations",
      "Clean CSV / Spreadsheet Data Migration",
      "TradingView Pine Script & MT5 Alert Setup",
    ],
    features: [
      "Custom architecture tailored to your specific workflow",
      "Hands-on data cleaning and import from existing spreadsheets",
      "Direct communication and milestone delivery",
      "Priority troubleshooting support directly from Hemanth",
      "Comprehensive step-by-step handover and documentation",
      "Configured alert notifications matching your exact rules",
    ],
    sla: "Priority Direct Access",
    ctaLabel: "Discuss Custom Scope",
  },
];

export const RECURRING_VALUE_EXPLANATION = {
  title: "Why Managed Business OS (Not Just Hosting)?",
  subtitle:
    "Installing software is only step one. A business system requires continuous operational reliability, security governance, and technical stewardship to deliver consistent ROI.",
  pillars: [
    {
      title: "Environment & Cloud Management",
      description: "Hardened server configurations, SSL management, Linux OS patches, and edge caching for sub-second performance.",
      icon: "Server",
    },
    {
      title: "Proactive Security & Hourly Backups",
      description: "Automated off-site snapshots, firewall rules, penetration protection, and instant disaster recovery protocols.",
      icon: "Shield",
    },
    {
      title: "Continuous System Updates",
      description: "Safe staging regression testing and controlled application updates without breaking customized business logic.",
      icon: "RefreshCw",
    },
    {
      title: "Direct Architect Technical Support",
      description: "No junior call centers. Direct access to Hemanth Ranam for rapid troubleshooting, user administration, and system advice.",
      icon: "Headphones",
    },
    {
      title: "Workflow & Field Evolution",
      description: "As your company changes, we update your fields, approval trees, print formats, and reports without charging new project fees.",
      icon: "Sliders",
    },
    {
      title: "Team Training & Documentation Maintenance",
      description: "Continuous update of internal video SOPs and onboarding guides as new features and staff members arrive.",
      icon: "BookOpen",
    },
  ],
};
