export interface NavItem {
  label: string;
  href: string;
}

export interface CredentialItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  badge: string;
  services: {
    title: string;
    description: string;
    deliverables: string[];
    tech: string[];
  }[];
}

export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface TechItem {
  name: string;
  category: "Business & ERP" | "Frontend & Web" | "Backend & Data" | "Trading Tech" | "Automation & AI";
  description: string;
  badge: string;
}

export const SITE_CONFIG = {
  name: "Hemanth Ranam",
  title: "Hemanth Ranam | Business Systems, Technology & Automation",
  description:
    "Hemanth Ranam helps businesses design, build and optimise digital systems, automation, custom software, CRM/ERP solutions and trading technology.",
  tagline: "Building Smarter Business Systems & Technology.",
  supportingStatement:
    "I help businesses design, build and optimise digital systems that reduce manual work, improve workflows and increase operational efficiency.",
  secondaryStatement:
    "From business systems and automation to custom software and trading technology, I design practical, scalable solutions around real-world requirements.",
  shortPositioning: "Business Systems • Technology • Automation • Trading Technology",
  email: "hemanth.ranam@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemanth-ranam-41b542253",
  location: "United Kingdom",
  scalenovaUrl: "https://www.scalenovasys.com",
  currentRole: "2X Founder | CEO @ ScaleNova Pvt Ltd | MBA | CMI Level 7",
  education: [
    {
      degree: "MBA (Master of Business Administration)",
      institution: "University of South Wales",
      year: "Postgraduate",
    },
    {
      degree: "CMI Level 7",
      institution: "Strategic Management & Leadership",
      year: "Chartered Management Institute",
    },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Business Systems", href: "#business-systems" },
  { label: "Trading Tech", href: "#trading-tech" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "ScaleNova", href: "#scalenova" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_METRICS: CredentialItem[] = [
  {
    value: "2X Founder",
    label: "Technology Entrepreneur",
    sublabel: "CEO @ ScaleNova",
    icon: "Building2",
  },
  {
    value: "~10 Years",
    label: "Business & Tech Systems",
    sublabel: "Active Since 2017",
    icon: "Layers",
  },
  {
    value: "5+ Years",
    label: "Trading & Financial Markets",
    sublabel: "Algo & Tech Automation",
    icon: "TrendingUp",
  },
  {
    value: "MBA",
    label: "Univ of South Wales",
    sublabel: "Business Administration",
    icon: "GraduationCap",
  },
  {
    value: "CMI Level 7",
    label: "Strategic Management",
    sublabel: "Executive Leadership",
    icon: "Award",
  },
  {
    value: "Architecture",
    label: "Custom Software & ERP",
    sublabel: "End-to-End Systems",
    icon: "Cpu",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "business-systems",
    title: "Business Systems & Consulting",
    tagline: "Connecting disconnected business departments into cohesive operating engines.",
    icon: "Workflow",
    badge: "Operations & Architecture",
    services: [
      {
        title: "Business Systems Architecture",
        description: "Designing end-to-end operational software architecture that bridges fragmented tools, data silos, and departmental handoffs.",
        deliverables: ["Systems Architecture Blueprint", "Data Flow Diagrams", "Application Ecosystem Roadmap"],
        tech: ["Frappe", "ERPNext", "Cloud SQL", "System Diagrams"],
      },
      {
        title: "Business Process Optimisation",
        description: "Mapping operational bottlenecks, eliminating manual duplicate entries, and streamlining workflow throughput.",
        deliverables: ["Process Audit Report", "Bottleneck Elimination Plan", "Standard Operating Procedures (SOP)"],
        tech: ["BPMN", "Workflow Analysis", "Operational Audit"],
      },
      {
        title: "ERP & CRM Implementation",
        description: "Scoping, customizing, and deploying business-critical ERP and CRM systems tailored to real-world corporate workflows.",
        deliverables: ["DocType/Module Architecture", "Custom Field Workflows", "Multi-tenant Permissions"],
        tech: ["Frappe Framework", "ERPNext", "PostgreSQL", "MariaDB"],
      },
      {
        title: "Data Management & Analytics",
        description: "Consolidating business data into real-time executive dashboards, reporting pipelines, and structured operational databases.",
        deliverables: ["Executive KPI Dashboards", "Automated Financial & Sales Reports", "Data Pipelines"],
        tech: ["SQL Analytics", "BI Dashboards", "Reporting Engine"],
      },
    ],
  },
  {
    id: "software-products",
    title: "Software & Digital Products",
    tagline: "Building high-performance custom applications, client portals, and SaaS platforms.",
    icon: "Code2",
    badge: "Engineering & SaaS",
    services: [
      {
        title: "Custom SaaS & Web Applications",
        description: "Full-stack cloud applications engineered for scalability, multi-tenancy, and seamless user experiences.",
        deliverables: ["Multi-tenant SaaS Architecture", "Role-based Access Control", "Clean Responsive UI"],
        tech: ["Next.js", "TypeScript", "React", "Node.js / Python"],
      },
      {
        title: "Business Portals & Booking Engines",
        description: "Secure, branded client portals, customer self-service hubs, internal management platforms, and booking solutions.",
        deliverables: ["Customer Dashboard", "Self-service Workflows", "Stripe / Payment Integration"],
        tech: ["TypeScript", "Tailwind CSS", "REST APIs", "Webhooks"],
      },
      {
        title: "Premium Corporate Websites",
        description: "Ultra-fast, conversion-focused digital platforms with modern typography, micro-interactions, and SEO architecture.",
        deliverables: ["Lighthouse 95+ Performance", "Interactive Components", "SEO & OpenGraph Setup"],
        tech: ["Next.js", "Modern CSS", "Accessibility (a11y)", "Vercel"],
      },
      {
        title: "API Integrations & Custom Microservices",
        description: "Bridging third-party services, banking/payment gateways, communications APIs, and cloud microservices.",
        deliverables: ["Secure REST / Webhook Endpoints", "Rate-limiting & Logging", "Data Sync Workers"],
        tech: ["REST", "WebSockets", "Redis", "Python / Node"],
      },
    ],
  },
  {
    id: "automation-ai",
    title: "Automation & AI Workflows",
    tagline: "Eliminating repetitive human tasks and accelerating business execution speed.",
    icon: "Bot",
    badge: "Efficiency & AI",
    services: [
      {
        title: "Internal Workflow Automation",
        description: "Automating repetitive business workflows across lead capture, CRM pipeline transitions, invoice generation, and customer onboarding.",
        deliverables: ["Multi-step Trigger Pipelines", "Automated Document Generation", "Error Handlers"],
        tech: ["Webhooks", "Custom Scripts", "Queue Workers", "Redis"],
      },
      {
        title: "Communication & Notification Systems",
        description: "Automated instant transactional alerts, approval requests, and business telemetry pushed directly to Telegram, Email, and SMS.",
        deliverables: ["Telegram Bot Control Plane", "Transactional Email Pipelines", "Real-time Alerts"],
        tech: ["Telegram Bot API", "SMTP / Resend", "Background Queues"],
      },
      {
        title: "AI Automation & Document Processing",
        description: "Applying AI models to automate structured data extraction from invoices, unstructured contracts, customer requests, and emails.",
        deliverables: ["Automated Document Parser", "LLM-assisted Triaging", "Structured Data Output"],
        tech: ["Gemini API", "Python", "JSON Schema", "REST"],
      },
      {
        title: "Cross-System Synchronization",
        description: "Bi-directional data sync keeping inventory, orders, CRM contacts, and accounting records in perpetual real-time harmony.",
        deliverables: ["Fault-tolerant Sync Engine", "Conflict Resolution Rules", "Audit Log Trail"],
        tech: ["Database Triggers", "Cron Workers", "Event Sourcing"],
      },
    ],
  },
  {
    id: "trading-tech",
    title: "Trading Technology & Algo Systems",
    tagline: "Custom indicators, automated execution workflows, and alert engines engineered to precise rules.",
    icon: "CandlestickChart",
    badge: "Markets & Automation",
    services: [
      {
        title: "TradingView Indicators & Pine Script",
        description: "Developing robust, multi-timeframe custom indicators, signal validation engines, and visual market structure tools in Pine Script v5.",
        deliverables: ["Pine Script v5 Source Code", "Multi-timeframe Logic", "Dynamic Visual Overlay"],
        tech: ["Pine Script v5", "TradingView", "Custom Visuals"],
      },
      {
        title: "MetaTrader 5 (MT5) EAs & Custom Indicators",
        description: "High-performance MQL5 Expert Advisors (EAs) and indicators built strictly around client-defined execution rules and risk parameters.",
        deliverables: ["Compiled .ex5 & Source Code", "Risk Management Engine", "Execution Logging"],
        tech: ["MQL5", "MetaTrader 5", "WinAPI / C++ Interop"],
      },
      {
        title: "Telegram Alert Automation & Webhooks",
        description: "Instantaneous signal routing from TradingView webhooks or MT5 bridges directly to private Telegram channels and VIP communities.",
        deliverables: ["Low-latency Webhook Receiver", "Rich Telegram Message Formats", "Chart Screenshot Dispatch"],
        tech: ["Telegram Bot API", "FastAPI / Python", "Webhooks"],
      },
      {
        title: "Trading Dashboards & Scanners",
        description: "Custom market scanners, journaling systems, and multi-asset overview dashboards for systematic market analysis.",
        deliverables: ["Multi-asset Scanner UI", "Trade Logging & Analytics", "Risk Exposure Monitor"],
        tech: ["Next.js", "WebSockets", "Financial Market APIs"],
      },
    ],
  },
];

export const TRADING_PIPELINE = [
  {
    step: "01",
    title: "Strategy Definition",
    description: "Clear client-specified rules: market structure, session filters, entry conditions, and invalidation criteria.",
    badge: "Rules",
    icon: "Target",
  },
  {
    step: "02",
    title: "Indicator & Logic",
    description: "Translating price action and mathematical formulas into Pine Script v5 or MQL5 algorithms.",
    badge: "Code",
    icon: "Binary",
  },
  {
    step: "03",
    title: "Confirmation Filters",
    description: "Multi-timeframe confirmation, spread checks, volatility validation, and risk parameters.",
    badge: "Filters",
    icon: "ShieldCheck",
  },
  {
    step: "04",
    title: "Instant Webhook Alert",
    description: "Low-latency triggering dispatching signal payloads with asset, direction, entry, stop loss, and targets.",
    badge: "Alerts",
    icon: "BellRing",
  },
  {
    step: "05",
    title: "Telegram & MT5 Routing",
    description: "Instant delivery to Telegram groups or direct automated execution via MT5 Expert Advisor.",
    badge: "Execution",
    icon: "Zap",
  },
  {
    step: "06",
    title: "Journal & Analytics",
    description: "Automated logging into database for continuous rule verification and post-trade performance analytics.",
    badge: "Telemetry",
    icon: "BookOpenCheck",
  },
];

export const BUSINESS_ECOSYSTEM = [
  { name: "Leads & Marketing", icon: "Users", desc: "Inbound channels & capture" },
  { name: "Sales Pipeline", icon: "TrendingUp", desc: "Deals, quotes & proposals" },
  { name: "Customer CRM", icon: "HeartHandshake", desc: "Accounts & communication" },
  { name: "Projects & Tasks", icon: "CheckSquare", desc: "Execution & deliverables" },
  { name: "Finance & Invoicing", icon: "CreditCard", desc: "Billing & accounting" },
  { name: "People & HR", icon: "UserCheck", desc: "Teams, roles & access" },
  { name: "Operations & SOP", icon: "Cpu", desc: "Core business workflows" },
  { name: "Real-time Reports", icon: "BarChart3", desc: "Executive KPI telemetry" },
  { name: "AI & Automation", icon: "Sparkles", desc: "Cross-system synchronization" },
];

export const TECH_STACK: TechItem[] = [
  { name: "Frappe Framework", category: "Business & ERP", description: "Full-stack Python & JS metadata-driven architecture for rapid business apps.", badge: "Enterprise" },
  { name: "ERPNext", category: "Business & ERP", description: "Comprehensive open-source ERP customization covering CRM, Accounts, Stock & HR.", badge: "Core Engine" },
  { name: "Next.js 15 & React", category: "Frontend & Web", description: "Modern React framework with App Router, server components, and dynamic caching.", badge: "Modern Web" },
  { name: "TypeScript", category: "Frontend & Web", description: "Strict static type system ensuring bulletproof enterprise frontends and APIs.", badge: "Type Safety" },
  { name: "Tailwind CSS", category: "Frontend & Web", description: "Utility-first design system with semantic design tokens and micro-interactions.", badge: "Design System" },
  { name: "Python", category: "Backend & Data", description: "Primary backend language for automation, API bridges, data parsing, and microservices.", badge: "Core Lang" },
  { name: "REST APIs & Webhooks", category: "Backend & Data", description: "High-throughput asynchronous communication between disparate software tools.", badge: "Integration" },
  { name: "MariaDB & PostgreSQL", category: "Backend & Data", description: "Relational database modeling, indexing strategies, and query performance tuning.", badge: "Databases" },
  { name: "Redis", category: "Backend & Data", description: "In-memory cache, pub/sub queues, and rate-limiting infrastructure.", badge: "Performance" },
  { name: "TradingView & Pine Script", category: "Trading Tech", description: "Pine Script v5 multi-timeframe indicators, strategy scripting, and webhook alerts.", badge: "Trading" },
  { name: "MetaTrader 5 & MQL5", category: "Trading Tech", description: "Custom Expert Advisors (EAs), custom indicators, and automated execution bots.", badge: "Trading" },
  { name: "Telegram Bot API", category: "Automation & AI", description: "Real-time operational alerts, trading signals, and interactive bot commands.", badge: "Messaging" },
  { name: "AI Automation / Gemini", category: "Automation & AI", description: "Structured data extraction, multimodal processing, and AI workflow integration.", badge: "AI Engine" },
  { name: "Git & GitHub", category: "Backend & Data", description: "Version control, CI/CD automated deployment pipelines, and release workflows.", badge: "DevOps" },
];

export const WORK_PROCESS = [
  {
    step: "01",
    name: "Understand",
    heading: "Understand the Core Problem",
    description: "Deep dive into your business operations, trading strategy rules, or operational friction points. We clarify requirements, define constraints, and outline measurable success criteria.",
    deliverables: ["Requirements Specification", "Scope Definition", "Constraint Analysis"],
  },
  {
    step: "02",
    name: "Analyse",
    heading: "Identify Inefficiencies & Risks",
    description: "Audit current workflows, data flow gaps, manual overhead, and failure points. We eliminate unnecessary complexity before writing a single line of code.",
    deliverables: ["Systems Audit Report", "Risk Assessment", "Optimization Roadmap"],
  },
  {
    step: "03",
    name: "Design",
    heading: "Architect Practical Systems",
    description: "Create the technical architecture, database schemas, UI wireframes, alert pipelines, or algorithmic logic diagrams designed for real-world reliability.",
    deliverables: ["Architecture Blueprint", "Data Schema Model", "Workflow Diagrams"],
  },
  {
    step: "04",
    name: "Build",
    heading: "Engineer, Test & Integrate",
    description: "Develop the custom software, ERP modules, automation scripts, Pine Script indicators, or MT5 EAs. Rigorously tested under edge conditions.",
    deliverables: ["Production Codebase", "Integration Testing", "Deployment Configuration"],
  },
  {
    step: "05",
    name: "Improve",
    heading: "Monitor, Refine & Scale",
    description: "Deploy to production, configure monitoring and error logs, gather real-world usage telemetry, and continuously refine performance.",
    deliverables: ["Documentation & SOP", "Telemetry Monitoring", "Scalability Optimization"],
  },
];

export const EXPERIENCE_TIMELINE: TimelineMilestone[] = [
  {
    year: "2017 – Present",
    period: "Nearly 10 Years Continuous Journey",
    title: "Technology Entrepreneur & Systems Architect",
    role: "Founder & Technology Specialist",
    description:
      "Nearly a decade of dedicated experience across business management, technology architecture, custom software development, enterprise systems, and entrepreneurship.",
    highlights: [
      "2X Founder building digital products and business management systems.",
      "Architecting end-to-end ERP, CRM, and internal automation for modern organizations.",
      "Executive education: MBA from University of South Wales & CMI Level 7 in Strategic Management & Leadership.",
      "Designing resilient software bridges connecting business operations, data, and reporting.",
    ],
    tags: ["Entrepreneurship", "Systems Architecture", "SaaS & ERP", "Executive Leadership"],
  },
  {
    year: "2021 – Present",
    period: "5+ Years Active Market Focus",
    title: "Trading Technology & Financial Systems",
    role: "Systems Developer & Strategy Technologist",
    description:
      "Over 5 years of rigorous study and practical development in financial markets, market structure, algorithmic strategy translation, and low-latency alert systems.",
    highlights: [
      "Specialized in Gold (XAUUSD), Silver (XAGUSD), US500, USTEC/US100, and Forex instruments.",
      "Engineered bespoke Pine Script v5 indicators and MetaTrader 5 Expert Advisors.",
      "Built automated webhook-to-Telegram signal routers and trade journaling systems.",
      "Focused strictly on rule-based algorithmic automation, risk management controls, and technology.",
    ],
    tags: ["Financial Markets", "Pine Script", "MetaTrader 5", "Algo Automation", "Risk Controls"],
  },
];
