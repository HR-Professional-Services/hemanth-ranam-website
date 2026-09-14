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
    deliverableScope: "Complete high-speed website connected directly to Google Sheets CRM & automated alerts.",
    timeline: "7–14 Business Days",
    features: [
      "Next.js App Router high-performance responsive web application",
      "Tailwind CSS modern glassmorphic UI design system",
      "Canonical 15-column Google Sheets CRM integration with Lead IDs",
      "Real-time email and WhatsApp manager alert notifications",
      "SEO foundations, schema markup, and speed optimization",
      "Domain connection, SSL setup, and global Cloudflare CDN deployment",
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
    deliverableScope: "Full configuration and deployment of one core Business OS application.",
    timeline: "2–3 Weeks",
    features: [
      "Dedicated Frappe/ERPNext application setup (CRM, HR, or Accounts)",
      "Role-based permission architecture and custom field modeling",
      "Legacy data import from existing CSVs or spreadsheets",
      "Custom proposal / invoice templates or employee portals",
      "Staff training sessions and digital SOP manual",
    ],
    ctaLabel: "Deploy Division OS",
    popular: true,
  },
  {
    id: "connected-business-os-setup",
    name: "Complete Connected Business OS",
    category: "Implementation",
    badge: "Enterprise Suite",
    price: "Custom Scope",
    currency: "USD",
    deliverableScope: "Multi-department operating system unifying CRM, Finance, HR, Operations & Helpdesk.",
    timeline: "4–6 Weeks",
    features: [
      "Unified Frappe / ERPNext multi-department enterprise architecture",
      "Cross-department data flows (Lead → Deal → Order → Invoice → Project → Support)",
      "Multi-user roles, approval matrices, and department permissions",
      "Comprehensive historical data migration and reconciliation",
      "Executive KPI dashboards and automated management reports",
      "Full team training, video library, and administrative handover",
    ],
    ctaLabel: "Scope Business OS",
  },
  {
    id: "custom-automation-migration",
    name: "Custom Automation & Data Migration",
    category: "Development",
    price: "Custom Scope",
    currency: "USD",
    deliverableScope: "Bespoke Google Apps Script, REST API bridges, and legacy database migration.",
    timeline: "Scoped per deliverable",
    features: [
      "Google Apps Script custom automation and PDF generation",
      "Custom webhook middleware connecting external platforms",
      "Complex relational database extraction, cleaning, and import",
      "Scheduled synchronization routines with error-handling logging",
      "Rigorous testing and verification scripts",
    ],
    ctaLabel: "Discuss Automation Scope",
  },
];

export const MONTHLY_OS_PLANS: MonthlyOsPlan[] = [
  {
    id: "launch-os",
    name: "LAUNCH OS",
    tagline: "For small businesses beginning their structured digital journey.",
    price: "$79",
    period: "/month",
    currency: "USD",
    idealFor: "Solo founders, boutique consultancies, and micro-teams up to 5 users.",
    includedModules: [
      "Website & Lead Form Ingestion",
      "Basic CRM Pipeline",
      "Google Sheets CRM Bridge",
      "Automated Email Alerts",
    ],
    features: [
      "Cloud environment management & security updates",
      "Daily automated database backups (7-day retention)",
      "Continuous uptime & form delivery monitoring",
      "Standard email technical support (48-hour SLA)",
      "Up to 2 minor configuration adjustments per month",
      "Monthly health check digest",
    ],
    sla: "48-Hour Response SLA",
    ctaLabel: "Select Launch OS",
  },
  {
    id: "growth-os",
    name: "GROWTH OS",
    tagline: "For growing businesses that need structured CRM, sales pipeline, and automation.",
    badge: "Most Popular",
    price: "$149",
    period: "/month",
    currency: "USD",
    idealFor: "Scaling service firms, agencies, and teams of 5 to 20 users.",
    includedModules: [
      "Dedicated Frappe CRM or HRMS",
      "Automated Sales Quotation CPQ",
      "WhatsApp & Email Alert Bots",
      "Customer Portal Access",
    ],
    features: [
      "High-availability managed cloud hosting environment",
      "Daily off-site automated backups (30-day retention)",
      "Proactive error logging and webhook verification",
      "Priority technical support directly with Systems Architect",
      "Up to 5 workflow, field, or report adjustments per month",
      "Quarterly operational review & optimization recommendations",
    ],
    sla: "24-Hour Response SLA",
    ctaLabel: "Select Growth OS",
    popular: true,
  },
  {
    id: "business-os",
    name: "BUSINESS OS",
    tagline: "For companies requiring connected ERP, HR, finance, projects and helpdesk.",
    badge: "Complete Operations",
    price: "$299",
    period: "/month",
    currency: "USD",
    idealFor: "Established companies, multi-department businesses of 15 to 75+ users.",
    includedModules: [
      "Full Connected ERPNext & Business OS",
      "CRM, Sales, Accounts & Finance",
      "HRMS, Attendance & Payroll Support",
      "Projects, Operations & Helpdesk",
    ],
    features: [
      "Dedicated hardened cloud server instance with performance tuning",
      "Automated hourly snapshots and real-time disaster recovery",
      "Role-based user provisioning and security compliance maintenance",
      "Direct WhatsApp & Priority Email access to Hemanth Ranam",
      "Unlimited minor configuration tweaks, user administration & bug fixes",
      "Monthly team training refreshers and updated video SOPs",
    ],
    sla: "12-Hour Priority SLA",
    ctaLabel: "Select Business OS",
  },
  {
    id: "scale-os",
    name: "SCALE OS",
    tagline: "For enterprises requiring advanced custom logic, multi-entity operations, and dedicated engineering.",
    badge: "Enterprise SLA",
    price: "Custom",
    period: "Monthly retainer",
    currency: "USD",
    idealFor: "Multi-entity enterprises, international operations, and mission-critical systems.",
    includedModules: [
      "Multi-Company / Multi-Tenant Architecture",
      "Custom DocTypes & Proprietary API Bridges",
      "Real-Time Data Pipelines & Microservices",
      "FinTech / Trading System Integrations",
    ],
    features: [
      "Custom multi-server cloud infrastructure with automated load balancing",
      "Continuous integration & deployment (CI/CD) pipelines for bespoke features",
      "Dedicated monthly development hours for new software capabilities",
      "Immediate emergency escalation hotline with 4-hour critical SLA",
      "Bi-weekly strategic systems architecture consulting meetings",
      "Enterprise audit compliance, GDPR, and data governance reports",
    ],
    sla: "4-Hour Critical Emergency SLA",
    ctaLabel: "Inquire for Scale OS",
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
