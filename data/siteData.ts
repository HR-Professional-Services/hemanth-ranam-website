export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  icon: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  icon: string;
  flow: string;
  items: ServiceItem[];
}

export interface PricingItem {
  service: string;
  price: string;
  description: string;
}

export interface PricingGroup {
  category: string;
  title: string;
  badge: string;
  items: PricingItem[];
}

export const SITE_CONFIG = {
  name: "Hemanth Ranam",
  title: "Hemanth Ranam | Business Systems, Automation & Trading Technology",
  description:
    "Hemanth Ranam builds business systems, automation, custom software, CRM/ERP solutions and trading technology including TradingView and MetaTrader 5 tools.",
  tagline: "Building Digital Systems That Work Smarter.",
  positioning: "Business Systems • Automation • Software • Trading Technology",
  shortAbout:
    "Technology entrepreneur and systems architect. I design and build practical digital systems, workflow automation, custom software and rule-based trading technology.",
  email: "hemanth.ranam@gmail.com",
  whatsappNumber: "+917675815245",
  whatsappMessage: "Hi, I wanted to connect about your services, thanks.",
  whatsappUrl:
    "https://wa.me/917675815245?text=Hi%2C%20I%20wanted%20to%20connect%20about%20your%20services%2C%20thanks.",
  linkedin: "https://www.linkedin.com/in/hemanth-ranam-41b542253",
  location: "United Kingdom",
  scalenovaUrl: "https://www.scalenovasys.com",
  profileImage: "/images/hemanth-ranam-profile.jpg",
  profileAlt: "Hemanth Ranam — Technology Entrepreneur and Business Systems Specialist",
  stats: [
    { value: "2017 → 2026", label: "Nearly 10 Years", sub: "Business • Tech • Management" },
    { value: "5+ Years", label: "Financial Markets", sub: "Trading • Algo • Pine/MT5" },
    { value: "2X", label: "Founder", sub: "CEO @ ScaleNova" },
    { value: "MBA", label: "Univ of South Wales", sub: "CMI Level 7 Executive" },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Trading Tech", href: "#trading-tech" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const CONSOLIDATED_SERVICES: ServiceGroup[] = [
  {
    id: "business-systems",
    title: "Business Systems",
    icon: "Workflow",
    flow: "Process → System → Automation → Reporting",
    items: [
      { name: "Business Systems Consulting", description: "End-to-end architecture connecting disconnected software and tools.", icon: "Workflow" },
      { name: "Process Optimisation", description: "Eliminate operational bottlenecks and streamline manual team handoffs.", icon: "Sparkles" },
      { name: "CRM / ERP Implementation", description: "Frappe & ERPNext deployment customized to your exact business rules.", icon: "Layers" },
      { name: "HR Management Systems", description: "Role permissions, team administration, and structured employee workflows.", icon: "Users" },
      { name: "Business Operations & SOP", description: "Standard operating procedures and connected task execution pipelines.", icon: "Sliders" },
      { name: "Data & Business Analytics", description: "Real-time executive KPI dashboards with actionable financial visibility.", icon: "BarChart3" },
    ],
  },
  {
    id: "software",
    title: "Software & Web Products",
    icon: "Code2",
    flow: "Idea → Design → Build → Launch",
    items: [
      { name: "Custom Software", description: "Tailored digital systems engineered around unique operational requirements.", icon: "Code2" },
      { name: "Business Websites", description: "Fast, minimal, conversion-focused websites with modern SEO architecture.", icon: "Globe" },
      { name: "Web Applications", description: "Scalable full-stack cloud applications with clean, responsive user interfaces.", icon: "Layout" },
      { name: "Mobile Applications", description: "Touch-optimized responsive web apps engineered for all devices.", icon: "Smartphone" },
      { name: "SaaS Products", description: "Multi-tenant platforms with subscription billing and role-based access.", icon: "Cloud" },
      { name: "Dashboards & Client Portals", description: "Secure customer self-service portals and internal metrics hubs.", icon: "ShieldCheck" },
    ],
  },
  {
    id: "automation",
    title: "Automation & AI Workflows",
    icon: "Bot",
    flow: "Trigger → Filter → Sync → Notify",
    items: [
      { name: "Workflow Automation", description: "Automate repetitive data transfers and event triggers across platforms.", icon: "Workflow" },
      { name: "AI Automation", description: "Extract structured data from unstructured invoices, emails, and PDFs.", icon: "Sparkles" },
      { name: "Business & CRM Automation", description: "Automated deal pipeline updates, lead alerts, and invoice generation.", icon: "Zap" },
      { name: "API Integrations", description: "Seamless REST and webhook communication between third-party services.", icon: "Network" },
      { name: "Email & Notification Systems", description: "Instant transactional alerts dispatched to staff and customers.", icon: "Mail" },
      { name: "Telegram Bot Automation", description: "Interactive custom bots and real-time broadcast channel alerts.", icon: "Send" },
    ],
  },
  {
    id: "trading-tech",
    title: "Trading Technology",
    icon: "TrendingUp",
    flow: "Strategy → Indicator → Alert → Automation",
    items: [
      { name: "TradingView Indicators", description: "Custom Pine Script v5 indicators designed around your chart rules.", icon: "TrendingUp" },
      { name: "Pine Script Strategies", description: "Deterministic strategy models for systematic rule-based execution.", icon: "Binary" },
      { name: "MT5 Indicators & EAs", description: "Custom MetaTrader 5 Expert Advisors with strict risk lot parameters.", icon: "Bot" },
      { name: "Trading & Telegram Alerts", description: "Sub-second webhook signal routing from charts to Telegram channels.", icon: "Send" },
      { name: "Trading Automation", description: "Automated webhook bridges connecting market signals directly to MT5.", icon: "Zap" },
      { name: "Market Analysis Tools", description: "Multi-asset scanners monitoring market structure setups simultaneously.", icon: "Sliders" },
    ],
  },
];

export const TECH_ICONS = [
  { name: "Python", icon: "FileCode" },
  { name: "TypeScript", icon: "Code2" },
  { name: "JavaScript", icon: "Braces" },
  { name: "React", icon: "Atom" },
  { name: "Next.js", icon: "Cpu" },
  { name: "Frappe", icon: "Layers" },
  { name: "ERPNext", icon: "Boxes" },
  { name: "SQL", icon: "Database" },
  { name: "Git / GitHub", icon: "GitBranch" },
  { name: "Pine Script v5", icon: "Code2" },
  { name: "MQL5", icon: "FileCode" },
  { name: "TradingView", icon: "TrendingUp" },
  { name: "MetaTrader 5", icon: "Activity" },
  { name: "Telegram Bot API", icon: "Send" },
  { name: "AI Automation", icon: "Sparkles" },
];

export const REVISED_PRICING_GROUPS: PricingGroup[] = [
  {
    category: "business",
    title: "Business & Consulting",
    badge: "Affordable Entry",
    items: [
      { service: "Business Consultation", price: "$49", description: "1-on-1 strategy session to audit operational challenges." },
      { service: "Process / Tech Audit", price: "$79", description: "Review existing software and identify workflow friction." },
      { service: "Business Systems Consulting", price: "$99", description: "Architecture blueprint and practical improvement roadmap." },
      { service: "Workflow Automation", price: "$149", description: "Multi-step automated trigger-action pipeline setup." },
      { service: "CRM / ERP Implementation", price: "$499", description: "Customized Frappe / ERPNext business system deployment." },
    ],
  },
  {
    category: "software",
    title: "Software & Web",
    badge: "Production Ready",
    items: [
      { service: "Business Website", price: "$199", description: "Fast, responsive executive website with SEO setup." },
      { service: "Custom Web Application", price: "$399", description: "Tailored full-stack web application with database & auth." },
      { service: "Client Portal / Dashboard", price: "$349", description: "Branded customer self-service hub with secure logins." },
      { service: "API & Webhook Integration", price: "$149", description: "Secure real-time bridge connecting third-party tools." },
    ],
  },
  {
    category: "trading",
    title: "Trading Technology",
    badge: "Specialized Algo",
    items: [
      { service: "TradingView Indicator", price: "$99", description: "Custom Pine Script v5 indicator built to your chart rules." },
      { service: "Pine Script Strategy", price: "$149", description: "Rule-based systematic strategy script with alert outputs." },
      { service: "MT5 Custom Indicator", price: "$149", description: "Native MetaTrader 5 indicator with custom visual buffers." },
      { service: "MT5 Expert Advisor (EA)", price: "$299", description: "Automated trading robot with strict equity risk controls." },
      { service: "Trading Alerts / Telegram", price: "$99", description: "Low-latency webhook delivery directly to Telegram groups." },
      { service: "Trading Automation Setup", price: "$399", description: "End-to-end webhook bridge from TradingView to MT5." },
      { service: "Custom Trading System", price: "$499", description: "Complete custom architecture with scanner, alerts & bot." },
    ],
  },
];
