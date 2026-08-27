export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; badge: string; icon: string }[];
}

export interface ServiceCard {
  name: string;
  description: string;
  icon: string;
  tag: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  items: ServiceCard[];
}

export interface PricingPlan {
  title: string;
  category: "Business" | "Software" | "Trading Tech";
  price: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export interface VisualFlow {
  title: string;
  category: string;
  steps: { num: string; label: string; desc: string; icon: string }[];
}

export const SITE_CONFIG = {
  name: "Hemanth Ranam",
  title: "Hemanth Ranam | Technology, Business Systems & Automation",
  description:
    "Hemanth Ranam designs and builds business systems, automation, custom software and trading technology for businesses, entrepreneurs and traders.",
  tagline: "Building Digital Systems That Work Smarter.",
  mainPositioning: "Technology Entrepreneur • Business Systems • Automation • Software • Trading Technology",
  shortDescription: "I design and build practical digital systems, automation, software and trading technology.",
  email: "hemanth.ranam@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemanth-ranam-41b542253",
  location: "United Kingdom",
  scalenovaUrl: "https://www.scalenovasys.com",
  education: [
    {
      degree: "MBA",
      institution: "University of South Wales",
      badge: "Postgraduate",
    },
    {
      degree: "CMI Level 7",
      institution: "Strategic Management & Leadership",
      badge: "Chartered Executive",
    },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Trading Tech", href: "#trading-tech" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_NUMBERS = [
  { value: "~10 Years", label: "Business & Technology Experience", sub: "Active since 2017" },
  { value: "5+ Years", label: "Trading & Financial Systems", sub: "Algo & Pine Script/MT5" },
  { value: "2X Founder", label: "Technology Entrepreneur", sub: "CEO @ ScaleNova" },
  { value: "MBA & CMI", label: "Strategic Leadership", sub: "Executive Qualified" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", badge: "Core", icon: "FileCode2" },
      { name: "TypeScript", badge: "Type-Safe", icon: "Code2" },
      { name: "JavaScript", badge: "Web", icon: "Braces" },
      { name: "SQL", badge: "Data", icon: "Database" },
      { name: "HTML / CSS", badge: "Design", icon: "Layout" },
    ],
  },
  {
    title: "Frameworks & Platforms",
    skills: [
      { name: "React", badge: "UI", icon: "Atom" },
      { name: "Next.js", badge: "Full-Stack", icon: "Cpu" },
      { name: "Frappe Framework", badge: "ERP Architecture", icon: "Layers" },
      { name: "ERPNext", badge: "Business Engine", icon: "Boxes" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "REST APIs & Webhooks", badge: "Integration", icon: "Network" },
      { name: "MariaDB & PostgreSQL", badge: "Databases", icon: "Server" },
      { name: "Redis", badge: "Cache / Queues", icon: "Zap" },
      { name: "Git & GitHub", badge: "DevOps", icon: "GitBranch" },
    ],
  },
  {
    title: "Trading Technology",
    skills: [
      { name: "Pine Script v5", badge: "TradingView", icon: "TrendingUp" },
      { name: "MetaTrader 5 (MT5)", badge: "Platform", icon: "Activity" },
      { name: "MQL5 Development", badge: "Expert Advisors", icon: "Binary" },
      { name: "Telegram Bot API", badge: "Alert Dispatch", icon: "Send" },
      { name: "Trading Automation", badge: "Workflow", icon: "Workflow" },
    ],
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "business-systems",
    title: "Business Systems",
    tagline: "Connecting disjointed operations into unified digital systems.",
    icon: "Workflow",
    items: [
      { name: "Business Systems Architecture", description: "Design end-to-end operational software blueprints that connect disconnected tools.", icon: "Workflow", tag: "Architecture" },
      { name: "Process Optimisation", description: "Map operational bottlenecks, eliminate redundant steps, and speed up turnaround.", icon: "Sparkles", tag: "Efficiency" },
      { name: "Business Consulting", description: "Review existing technology and formulate practical digital transformation roadmaps.", icon: "Briefcase", tag: "Strategy" },
      { name: "Digital Transformation", description: "Modernize legacy manual workflows with automated cloud-native systems.", icon: "RefreshCw", tag: "Modernization" },
      { name: "CRM / ERP Implementation", description: "Deploy and customize Frappe/ERPNext systems tailored to your workflows.", icon: "Layers", tag: "ERP / CRM" },
      { name: "HR Management Systems", description: "Streamline employee onboarding, role-based access, and internal administration.", icon: "Users", tag: "HR / Teams" },
      { name: "Business Operations", description: "Unify project tracking, task queues, and team execution pipelines.", icon: "Sliders", tag: "Operations" },
      { name: "SOP & Documentation", description: "Structured operating procedures and technical documentation for teams.", icon: "FileText", tag: "Governance" },
      { name: "Data Management", description: "Clean, model, and store business data in high-performance relational databases.", icon: "Database", tag: "Data" },
      { name: "Business Analytics", description: "Executive KPI dashboards providing real-time financial and operational visibility.", icon: "BarChart3", tag: "Reporting" },
    ],
  },
  {
    id: "software",
    title: "Software",
    tagline: "High-performance custom web applications, SaaS tools, and portals.",
    icon: "Code2",
    items: [
      { name: "Custom Software", description: "Engineered bespoke software solutions solving unique business challenges.", icon: "Code2", tag: "Custom" },
      { name: "Web Development", description: "Clean, responsive, high-converting digital products built on modern web standards.", icon: "Globe", tag: "Web" },
      { name: "Web Applications", description: "Full-stack cloud applications with authentication, databases, and microservices.", icon: "Layout", tag: "Apps" },
      { name: "Mobile Applications", description: "Cross-platform responsive web applications optimized for touch devices.", icon: "Smartphone", tag: "Mobile" },
      { name: "SaaS Products", description: "Multi-tenant cloud architectures engineered for rapid scaling and recurring billing.", icon: "Cloud", tag: "SaaS" },
      { name: "Business Websites", description: "Fast, minimal, executive business websites with top-tier Lighthouse scores.", icon: "Laptop", tag: "Websites" },
      { name: "Booking Systems", description: "Automated customer appointment scheduling with payment gateway integration.", icon: "Calendar", tag: "Booking" },
      { name: "Dashboards", description: "Interactive telemetry portals providing clear data visualizations and metrics.", icon: "PieChart", tag: "Dashboards" },
      { name: "Client Portals", description: "Secure, branded hubs for customer self-service, document sharing, and status tracking.", icon: "ShieldCheck", tag: "Portals" },
      { name: "API Integrations", description: "Seamless REST and webhook communication between third-party services.", icon: "Network", tag: "APIs" },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    tagline: "Eliminating manual data entry and speeding up business workflows.",
    icon: "Bot",
    items: [
      { name: "Workflow Automation", description: "Trigger multi-step actions across tools whenever key business events occur.", icon: "Workflow", tag: "Workflows" },
      { name: "AI Automation", description: "Structured data extraction from documents, emails, and invoices using AI models.", icon: "Sparkles", tag: "AI Engine" },
      { name: "CRM Automation", description: "Automate lead capture, qualification status changes, and deal pipeline updates.", icon: "Users", tag: "CRM" },
      { name: "ERP Automation", description: "Automated invoice creation, payment status reconciliation, and stock updates.", icon: "Layers", tag: "ERP" },
      { name: "Business Automation", description: "End-to-end operational automation eliminating manual human friction.", icon: "Bot", tag: "Automation" },
      { name: "Email Automation", description: "Transactional email delivery, automated sequences, and delivery tracking.", icon: "Mail", tag: "Email" },
      { name: "Telegram Automation", description: "Real-time interactive bots, status updates, and broadcast channels.", icon: "Send", tag: "Telegram" },
      { name: "Notification Systems", description: "Multi-channel critical alerts pushed instantly to staff and stakeholders.", icon: "Bell", tag: "Alerts" },
      { name: "Data Automation", description: "Scheduled data synchronization, scheduled backups, and automated ETL pipelines.", icon: "Database", tag: "Data Sync" },
      { name: "System Integrations", description: "Bi-directional sync keeping disparate platforms in perfect continuous harmony.", icon: "Link2", tag: "Integrations" },
    ],
  },
  {
    id: "trading-tech",
    title: "Trading Technology",
    tagline: "Rule-based custom indicators, Expert Advisors, and alert automation.",
    icon: "TrendingUp",
    items: [
      { name: "TradingView Indicators", description: "Multi-timeframe Pine Script v5 indicators designed around your exact chart rules.", icon: "TrendingUp", tag: "Pine Script" },
      { name: "Pine Script Development", description: "Bespoke mathematical modeling, signal validation, and visual overlays on TradingView.", icon: "Binary", tag: "Pine v5" },
      { name: "Custom Strategies", description: "Translating discretionary trading rules into systematic, testable frameworks.", icon: "Target", tag: "Strategy" },
      { name: "MT5 Indicators", description: "Native MQL5 custom indicators for MetaTrader 5 with low chart latency.", icon: "Activity", tag: "MT5" },
      { name: "MT5 Expert Advisors", description: "Automated execution robots (EAs) with strict risk management & lot calculations.", icon: "Bot", tag: "MQL5 EA" },
      { name: "MQL5 Development", description: "High-performance MQL5 code with C++ interop and WebRequest connectivity.", icon: "Code2", tag: "MQL5" },
      { name: "Custom MT5 Alerts", description: "Instant audio, visual, and webhook triggers when defined market conditions align.", icon: "BellRing", tag: "Alerts" },
      { name: "Telegram Alerts", description: "Signal routing from TradingView or MT5 directly to private Telegram VIP channels.", icon: "Send", tag: "Telegram" },
      { name: "Trading Automation", description: "Webhook bridges linking market analysis triggers to automated execution handlers.", icon: "Zap", tag: "Automation" },
      { name: "Market Scanners", description: "Custom scanners tracking multiple assets for specific structural setups simultaneously.", icon: "Sliders", tag: "Scanners" },
      { name: "Trading Dashboards", description: "Real-time web dashboards monitoring exposure, live positions, and volatility.", icon: "PieChart", tag: "Dashboards" },
      { name: "Trading Journaling", description: "Automated trade logging to database for performance verification and analytics.", icon: "FileText", tag: "Journal" },
      { name: "Strategy Implementation", description: "Engineering rule-based execution parameters without emotional hesitation.", icon: "ShieldCheck", tag: "Rules" },
    ],
  },
];

export const VISUAL_FLOWS: VisualFlow[] = [
  {
    title: "Business Systems Architecture",
    category: "Business Flow",
    steps: [
      { num: "01", label: "Problem", desc: "Identify friction & data silos", icon: "AlertCircle" },
      { num: "02", label: "Process", desc: "Map optimized SOP workflows", icon: "Sliders" },
      { num: "03", label: "System", desc: "Architect ERP / CRM software", icon: "Layers" },
      { num: "04", label: "Automation", desc: "Deploy background sync workers", icon: "Zap" },
      { num: "05", label: "Reporting", desc: "Real-time executive KPI insights", icon: "BarChart3" },
    ],
  },
  {
    title: "Trading Technology Pipeline",
    category: "Trading Flow",
    steps: [
      { num: "01", label: "Strategy", desc: "Define rules & invalidation", icon: "Target" },
      { num: "02", label: "Rules", desc: "Deterministic mathematical logic", icon: "Binary" },
      { num: "03", label: "Indicator", desc: "Pine Script v5 / MQL5 build", icon: "TrendingUp" },
      { num: "04", label: "Alert", desc: "Sub-second webhook trigger", icon: "BellRing" },
      { num: "05", label: "Automation", desc: "Telegram dispatch & MT5 EA", icon: "Send" },
    ],
  },
  {
    title: "Custom Software Engineering",
    category: "Software Flow",
    steps: [
      { num: "01", label: "Idea", desc: "Core requirements & scope", icon: "Lightbulb" },
      { num: "02", label: "Design", desc: "Clean UI & schema architecture", icon: "Layout" },
      { num: "03", label: "Build", desc: "Type-safe Next.js & APIs", icon: "Code2" },
      { num: "04", label: "Integrate", desc: "Database, auth & webhooks", icon: "Network" },
      { num: "05", label: "Launch", desc: "Deploy, monitor & scale", icon: "Rocket" },
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  // Business
  {
    title: "Business Systems Consulting",
    category: "Business",
    price: "$199",
    description: "System & process review with practical architecture recommendations.",
    deliverables: ["Systems Audit Blueprint", "Bottleneck Identification", "Actionable Roadmap"],
  },
  {
    title: "Business Automation",
    category: "Business",
    price: "$399",
    description: "Multi-step workflow and business process automation across your tools.",
    deliverables: ["Trigger-Action Pipelines", "Error Handlers & Logging", "Telegram/Email Alerts"],
    popular: true,
  },
  {
    title: "CRM / ERP Implementation",
    category: "Business",
    price: "$699",
    description: "Custom CRM/ERP deployment tailored to your business operations.",
    deliverables: ["Custom DocTypes & Modules", "Role-Based Access Control", "Data Schema Setup"],
  },
  // Software
  {
    title: "Business Website",
    category: "Software",
    price: "$299",
    description: "Premium responsive business website with modern design and fast loading.",
    deliverables: ["Responsive Architecture", "SEO & OpenGraph Setup", "Lighthouse 95+ Score"],
  },
  {
    title: "Web Application",
    category: "Software",
    price: "$599",
    description: "Custom web application built around your specific product requirements.",
    deliverables: ["Authentication & DB", "REST API & Webhooks", "Interactive UI Components"],
    popular: true,
  },
  // Trading Tech
  {
    title: "TradingView Indicator",
    category: "Trading Tech",
    price: "$149",
    description: "Custom Pine Script v5 indicator based strictly on your defined chart rules.",
    deliverables: ["Pine Script v5 Source Code", "Multi-Timeframe Logic", "Visual Overlay & Alerts"],
  },
  {
    title: "MT5 Indicator",
    category: "Trading Tech",
    price: "$199",
    description: "Custom MetaTrader 5 indicator engineered for clean execution and zero lag.",
    deliverables: ["Compiled .ex5 & Source", "Custom Visual Settings", "Chart Alert Triggers"],
  },
  {
    title: "Trading Alerts / Telegram",
    category: "Trading Tech",
    price: "$149",
    description: "Instant signal routing from TradingView or MT5 directly to Telegram.",
    deliverables: ["Webhook Bridge Setup", "Formatted Message Dispatch", "Channel/Group Integration"],
  },
  {
    title: "MT5 Expert Advisor (EA)",
    category: "Trading Tech",
    price: "$399",
    description: "Custom automated trading robot built around strict risk parameters.",
    deliverables: ["Risk Lot Calculation", "Stop-Loss & Take-Profit Rules", "Complete MQL5 Code"],
    popular: true,
  },
  {
    title: "Custom Trading Automation",
    category: "Trading Tech",
    price: "$499",
    description: "End-to-end trading technology setup connecting scanners, alerts, and bots.",
    deliverables: ["Custom Webhook Pipeline", "Multi-Asset Monitoring", "Execution Bridge"],
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    year: "2017",
    label: "Business & Technology",
    desc: "Started working across business management, operations, and foundational technology systems.",
  },
  {
    year: "2019+",
    label: "Systems & Software",
    desc: "Architecting custom software, database schemas, and digital business tools.",
  },
  {
    year: "2021+",
    label: "Automation & SaaS",
    desc: "Building multi-tenant applications, API integrations, and enterprise workflow automation.",
  },
  {
    year: "2022+",
    label: "Trading & Financial Markets",
    desc: "Developing Pine Script indicators, MT5 Expert Advisors, and low-latency alert routers.",
  },
  {
    year: "2026",
    label: "Technology Entrepreneur",
    desc: "2X Founder, ScaleNova CEO, and independent systems & trading technology architect.",
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Business Understanding",
    desc: "I understand the operational process and commercial logic behind the technology.",
    icon: "Briefcase",
  },
  {
    title: "Technical Execution",
    desc: "From initial concept to production-ready, fully tested working software.",
    icon: "Code2",
  },
  {
    title: "Practical Solutions",
    desc: "Engineered around real-world constraints—not unnecessary complexity.",
    icon: "Target",
  },
  {
    title: "Long-Term Thinking",
    desc: "Clean, scalable, maintainable architectures built to grow with your needs.",
    icon: "ShieldCheck",
  },
];
