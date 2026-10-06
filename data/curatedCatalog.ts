export interface CuratedOffer {
  id: string;
  name: string;
  slug: string;
  category: "Business Systems" | "Automation" | "Websites" | "ERPNext" | "Trading Technology";
  categorySlug: "business-systems" | "automation" | "websites" | "erpnext" | "trading-technology";
  description: string;
  shortDescription: string;
  price: number; // Canonical numeric USD price
  priceDisplay: string;
  priceType: "fixed" | "starting" | "custom";
  billingType: "ONE_TIME" | "MONTHLY" | "CUSTOM" | "FREE";
  deliveryTime: string;
  deliveryType: "consultation_booking" | "instant_download" | "workspace_provisioning" | "project_milestone";
  whoItIsFor: string;
  deliverables: string[];
  features: string[];
  stripePaymentLink?: string;
  bookingUrl?: string;
  featured?: boolean;
  popular?: boolean;
  badge?: string;
}

export interface MonthlyPlan {
  id: string;
  name: string;
  slug: string;
  price: number;
  priceDisplay: string;
  period: string;
  badge?: string;
  tagline: string;
  idealFor: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
  stripePaymentLink?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: "Business Systems" | "Automation" | "ERPNext" | "Websites" | "Trading Technology";
  classification: "Real Client Project" | "Internal Project" | "Demonstration" | "Concept";
  classificationBadge: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  badge: string;
  metricsDisclaimer?: string;
  image?: string;
}

export const CURATED_OFFERS: CuratedOffer[] = [
  // --------------------------------------------------------------------------
  // BUSINESS SYSTEMS
  // --------------------------------------------------------------------------
  {
    id: "biz-sys-consultation",
    name: "Business Systems Consultation",
    slug: "business-systems-consultation",
    category: "Business Systems",
    categorySlug: "business-systems",
    shortDescription: "60-minute focused consultation reviewing your current software and operational bottlenecks.",
    description: "In-depth 1-on-1 systems architecture consultation with Hemanth Ranam. We diagnose software sprawl, fragmented spreadsheets, and design a practical roadmap.",
    price: 49,
    priceDisplay: "$49",
    priceType: "fixed",
    billingType: "ONE_TIME",
    deliveryTime: "60 Minutes",
    deliveryType: "consultation_booking",
    whoItIsFor: "Business owners needing clarity on software consolidation and workflow architecture.",
    deliverables: [
      "60-minute private video session",
      "Executive action summary notes (PDF)",
      "Tool redundancy analysis",
      "100% of fee credited toward future implementation",
    ],
    features: [
      "Direct 1-on-1 with Founder & Systems Architect",
      "Tool consolidation recommendations",
      "Workflow bottleneck diagnosis",
      "Actionable next-steps roadmap",
    ],
    bookingUrl: "https://calendar.google.com",
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_biz_consult",
    featured: true,
    popular: true,
    badge: "Most Popular Entry",
  },
  {
    id: "biz-sys-audit",
    name: "Business Systems Audit",
    slug: "business-systems-audit",
    category: "Business Systems",
    categorySlug: "business-systems",
    shortDescription: "Complete review of your current tools, team workflows, handoffs, and operational bottlenecks.",
    description: "Thorough inspection of your company's operational toolchain. We map where leads get lost, identify repetitive manual data entry, and pinpoint cost waste.",
    price: 99,
    priceDisplay: "$99",
    priceType: "fixed",
    billingType: "ONE_TIME",
    deliveryTime: "3–5 Business Days",
    deliveryType: "workspace_provisioning",
    whoItIsFor: "Teams running multiple software tools with manual data transfer and dropped tasks.",
    deliverables: [
      "Complete Systems & Workflow Audit Report",
      "Data flow & tool integration map",
      "Cost-efficiency & software rationalization guide",
      "Prioritized fix checklist",
    ],
    features: [
      "Full stack inventory and usage audit",
      "Team handoff friction analysis",
      "Spreadsheet dependency evaluation",
      "45-minute findings review call",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_biz_audit",
    badge: "High Value",
  },
  {
    id: "biz-sys-blueprint",
    name: "Business Systems Blueprint",
    slug: "business-systems-blueprint",
    category: "Business Systems",
    categorySlug: "business-systems",
    shortDescription: "Detailed system architecture, data models, workflow diagrams, and automation roadmap.",
    description: "The complete technical and operational architectural blueprint for your unified Business OS. Detailed specifications ready for rapid implementation.",
    price: 199,
    priceDisplay: "$199",
    priceType: "fixed",
    billingType: "ONE_TIME",
    deliveryTime: "5–7 Business Days",
    deliveryType: "workspace_provisioning",
    whoItIsFor: "Businesses ready to build or migrate to a unified Business Operating System without costly mistakes.",
    deliverables: [
      "Architectural Blueprint Document (PDF)",
      "Entity relationship and data models",
      "Workflow & approval routing specifications",
      "Implementation milestone timeline",
    ],
    features: [
      "Custom system architecture",
      "Integration specifications & API schema",
      "Role-based permission matrix",
      "60-minute architecture walkthrough call",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_biz_blueprint",
    featured: true,
  },

  // --------------------------------------------------------------------------
  // AUTOMATION
  // --------------------------------------------------------------------------
  {
    id: "auto-starter",
    name: "Automation Starter",
    slug: "automation-starter",
    category: "Automation",
    categorySlug: "automation",
    shortDescription: "One practical business workflow automated between your essential tools.",
    description: "Automate a high-friction repetitive process, such as web enquiry to CRM creation, automated contract dispatch, or customer onboarding notification.",
    price: 149,
    priceDisplay: "From $149",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "2–3 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Small businesses spending hours copying data between web forms, emails, and spreadsheets.",
    deliverables: [
      "1 fully automated production workflow",
      "Error notification & retry handling",
      "Testing & verification in live environment",
      "Video walkthrough & handover documentation",
    ],
    features: [
      "Zero manual data re-entry",
      "Instant real-time trigger execution",
      "Secure webhook/API authentication",
      "14 days post-launch support",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_auto_starter",
  },
  {
    id: "auto-system",
    name: "Business Automation System",
    slug: "business-automation-system",
    category: "Automation",
    categorySlug: "automation",
    shortDescription: "Multi-step automated workflows connecting sales, customer operations, and invoicing.",
    description: "Comprehensive workflow automation suite connecting customer enquiry through quotation, invoice generation, customer notification, and internal dispatch.",
    price: 299,
    priceDisplay: "From $299",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "5–7 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Growing companies handling dozens of customer orders, invoices, and handoffs every week.",
    deliverables: [
      "3–5 interconnected production workflows",
      "Automated document & invoice generation",
      "CRM & notifications synchronization",
      "Operations manual and training video",
    ],
    features: [
      "Multi-stage conditional logic",
      "Automated PDF document creation",
      "Team notifications (Email / Slack / WhatsApp)",
      "30 days post-launch warranty",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_auto_system",
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "auto-google",
    name: "Google Workspace Automation",
    slug: "google-workspace-automation",
    category: "Automation",
    categorySlug: "automation",
    shortDescription: "Google Sheets, Gmail, Drive, and Apps Script automation for clean daily operations.",
    description: "Custom Google Apps Script automation turning standard Google Sheets into automated internal applications with automated email dispatch and Drive folder creation.",
    price: 99,
    priceDisplay: "From $99",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "2–4 Business Days",
    deliveryType: "workspace_provisioning",
    whoItIsFor: "Businesses running operations on Google Workspace who want powerful automation without extra software costs.",
    deliverables: [
      "Custom Apps Script engine (Code.gs)",
      "Structured Google Sheet master template",
      "Automated email dispatch triggers",
      "Clean user guide and video instructions",
    ],
    features: [
      "No additional recurring software fees",
      "Automated timestamping and ID generation",
      "Drive folder provisioning on demand",
      "Clean formula and data validation structure",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_auto_google",
  },

  // --------------------------------------------------------------------------
  // WEBSITES
  // --------------------------------------------------------------------------
  {
    id: "web-landing",
    name: "Business Landing Page",
    slug: "business-landing-page",
    category: "Websites",
    categorySlug: "websites",
    shortDescription: "High-converting, fast modern landing page designed to turn visitors into enquiries.",
    description: "A focused, responsive, high-speed landing page engineered with modern typography, clear value proposition, and built-in lead capture.",
    price: 199,
    priceDisplay: "From $199",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "3–5 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Founders launching a new offer, product, or service needing a credible online presence quickly.",
    deliverables: [
      "Single-page responsive modern website",
      "Lead capture form with instant notifications",
      "SEO meta tags and OpenGraph setup",
      "Fast static edge deployment",
    ],
    features: [
      "Sub-second load speed",
      "Mobile-first responsive design",
      "Direct lead delivery to your inbox / sheet",
      "Domain and SSL setup included",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_web_landing",
  },
  {
    id: "web-business",
    name: "Business Website",
    slug: "business-website",
    category: "Websites",
    categorySlug: "websites",
    shortDescription: "Complete professional multi-page business website presenting your services with authority.",
    description: "Clean, bespoke business website (Home, Services, About, Work, Pricing, Contact) tailored to your brand, built with accessible semantic code and zero bloat.",
    price: 399,
    priceDisplay: "From $399",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "7–10 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Established companies looking to replace an outdated or slow website with a fast, modern platform.",
    deliverables: [
      "Multi-page responsive website (up to 6 core pages)",
      "Integrated contact and consultation scheduling",
      "Complete technical SEO and structured data",
      "Content publishing system / blog if required",
    ],
    features: [
      "Fast, lightweight modern tech stack",
      "Brand-aligned bespoke design system",
      "Google Analytics & Search Console setup",
      "30 days post-launch support",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_web_business",
    badge: "Flagship",
  },
  {
    id: "web-lead-auto",
    name: "Website + Lead Automation",
    slug: "website-lead-automation",
    category: "Websites",
    categorySlug: "websites",
    shortDescription: "Professional business website connected directly to CRM pipelines and lead automation.",
    description: "Your website connected directly to your operational backend. Enquiries automatically create CRM deals, send customer confirmations, and notify team members.",
    price: 599,
    priceDisplay: "From $599",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "10–14 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Businesses that want their marketing website to act as an automated front-desk for sales.",
    deliverables: [
      "Complete professional business website",
      "Live CRM integration & lead capture pipeline",
      "Automated dual customer/management email dispatch",
      "Custom enquiry intake questionnaire",
    ],
    features: [
      "Zero dropped leads",
      "Instant customer response within seconds",
      "Automated lead tagging and status tracking",
      "Full end-to-end testing and handover",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_web_lead_auto",
    popular: true,
  },

  // --------------------------------------------------------------------------
  // ERPNEXT
  // --------------------------------------------------------------------------
  {
    id: "erp-consultation",
    name: "ERPNext Consultation",
    slug: "erpnext-consultation",
    category: "ERPNext",
    categorySlug: "erpnext",
    shortDescription: "60-minute expert scoping and architecture session for Frappe & ERPNext implementations.",
    description: "Direct consultation with a Frappe Framework & ERPNext specialist. We review your requirements across Accounts, CRM, Stock, Buying, Selling, and HRMS.",
    price: 49,
    priceDisplay: "$49",
    priceType: "fixed",
    billingType: "ONE_TIME",
    deliveryTime: "60 Minutes",
    deliveryType: "consultation_booking",
    whoItIsFor: "Companies evaluating ERPNext or needing guidance on custom doctypes and modules.",
    deliverables: [
      "60-minute video architecture review",
      "ERPNext module feasibility breakdown",
      "Hosting & deployment recommendations",
      "Scope and budget estimate",
    ],
    features: [
      "Direct consultation with Frappe developer",
      "Module-by-module fit-gap analysis",
      "Customization vs standard best practices",
      "100% credited toward configuration",
    ],
    bookingUrl: "https://calendar.google.com",
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_erp_consult",
  },
  {
    id: "erp-setup",
    name: "ERPNext Setup & Configuration",
    slug: "erpnext-setup-configuration",
    category: "ERPNext",
    categorySlug: "erpnext",
    shortDescription: "Professional configuration of standard ERPNext modules tailored to your business.",
    description: "End-to-end setup of your core ERPNext environment. Includes company chart of accounts, sales taxes, customer groups, item masters, and user roles.",
    price: 499,
    priceDisplay: "From $499",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "7–14 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Businesses ready to implement ERPNext cleanly without getting lost in complex settings.",
    deliverables: [
      "Configured Frappe/ERPNext production instance",
      "Company settings, Chart of Accounts, & tax rules",
      "Item masters, customer and supplier imports",
      "Role-based permissions & security audit",
    ],
    features: [
      "Production-ready MariaDB & Redis setup",
      "Daily automated off-site backups",
      "User permission matrix configuration",
      "Team walkthrough & admin documentation",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_erp_setup",
    badge: "Core Enterprise",
  },
  {
    id: "erp-custom",
    name: "Custom ERPNext Business System",
    slug: "custom-erpnext-business-system",
    category: "ERPNext",
    categorySlug: "erpnext",
    shortDescription: "Custom DocTypes, server scripts, workflow state machines, and third-party integrations.",
    description: "Bespoke Frappe application development: custom doctypes, print formats, automated server-side validation, webhooks, and external software synchronization.",
    price: 999,
    priceDisplay: "Custom Quote",
    priceType: "custom",
    billingType: "CUSTOM",
    deliveryTime: "Milestone-based",
    deliveryType: "project_milestone",
    whoItIsFor: "Enterprises with unique operational workflows that cannot be served by off-the-shelf software.",
    deliverables: [
      "Custom Frappe application & Git repository",
      "Custom DocTypes, controllers & lifecycle hooks",
      "API integrations & bidirectional webhooks",
      "Automated test coverage and documentation",
    ],
    features: [
      "Clean Frappe v14/v15 conventions",
      "Idempotent migration patches",
      "Zero vendor lock-in with open-source code",
      "Full source code ownership",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_erp_custom",
  },

  // --------------------------------------------------------------------------
  // TRADING TECHNOLOGY
  // --------------------------------------------------------------------------
  {
    id: "trade-indicator",
    name: "TradingView Indicator",
    slug: "tradingview-indicator",
    category: "Trading Technology",
    categorySlug: "trading-technology",
    shortDescription: "Custom Pine Script v6 indicator tailored to your exact technical analysis strategy.",
    description: "Professional Pine Script v6 software development for TradingView. We convert your trading rules into clean, confirmed-bar visual indicators with custom alert hooks.",
    price: 49,
    priceDisplay: "From $49",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "2–3 Business Days",
    deliveryType: "workspace_provisioning",
    whoItIsFor: "Traders seeking clean code for custom indicators without repainting issues.",
    deliverables: [
      "Pine Script v6 clean source code",
      "Confirmed-bar alert integration",
      "TradingView invitation / script deployment",
      "User settings manual & test results",
    ],
    features: [
      "Confirmed-bar logic to reduce repainting",
      "Fully parameterized inputs & styling",
      "Built-in alerts for price & indicator triggers",
      "100% proprietary code ownership",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_trade_tv",
  },
  {
    id: "trade-mt5",
    name: "MT5 Indicator / Scanner",
    slug: "mt5-indicator-scanner",
    category: "Trading Technology",
    categorySlug: "trading-technology",
    shortDescription: "Custom MetaTrader 5 (MQL5) indicator or multi-asset dashboard scanner.",
    description: "Engineered MQL5 custom indicators and multi-currency dashboard scanners for MetaTrader 5. Fast execution, low CPU consumption, and instant desktop alerts.",
    price: 99,
    priceDisplay: "From $99",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "3–5 Business Days",
    deliveryType: "workspace_provisioning",
    whoItIsFor: "Forex, CFD, and futures traders needing reliable MT5 technical tools and market scanners.",
    deliverables: [
      "Compiled .ex5 executable & .mq5 source code",
      "Multi-timeframe and multi-symbol scanner",
      "On-screen dashboard with custom metrics",
      "Installation and setup guide",
    ],
    features: [
      "Optimized memory and zero terminal lag",
      "Push notification, email, & sound alerts",
      "Strict parameter validation",
      "Compatible with major MT5 brokers",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_trade_mt5",
  },
  {
    id: "trade-automation",
    name: "Trading Automation",
    slug: "trading-automation",
    category: "Trading Technology",
    categorySlug: "trading-technology",
    shortDescription: "Automated alert-to-execution bridge connecting TradingView or webhooks to MT5 / Telegram.",
    description: "Robust automated execution bridge. Translates TradingView alerts or custom API signals into automated MetaTrader 5 orders or real-time Telegram channel broadcasts.",
    price: 299,
    priceDisplay: "From $299",
    priceType: "starting",
    billingType: "ONE_TIME",
    deliveryTime: "5–7 Business Days",
    deliveryType: "project_milestone",
    whoItIsFor: "Quantitative traders and strategy creators wanting hands-free execution and reliable notification bridges.",
    deliverables: [
      "TradingView to MT5 webhook bridge application",
      "Telegram bot alert notification system",
      "VPS deployment and auto-restart configuration",
      "Risk limits & lot sizing safeguards",
    ],
    features: [
      "Sub-second signal processing latency",
      "Strict lot size & maximum drawdown caps",
      "Heartbeat monitoring & reconnection logic",
      "30 days technical support",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_trade_auto",
    badge: "Advanced Tech",
  },
  {
    id: "trade-custom",
    name: "Custom Trading Technology",
    slug: "custom-trading-technology",
    category: "Trading Technology",
    categorySlug: "trading-technology",
    shortDescription: "Institutional algorithmic suites, custom Expert Advisors (EAs), and Python backtesting tools.",
    description: "Bespoke quantitative trading engineering: automated Expert Advisors, multi-asset portfolio rebalancers, and Python-driven backtesting pipelines.",
    price: 599,
    priceDisplay: "Custom Quote",
    priceType: "custom",
    billingType: "CUSTOM",
    deliveryTime: "Milestone-based",
    deliveryType: "project_milestone",
    whoItIsFor: "Fund managers, family offices, and experienced traders requiring institutional software reliability.",
    deliverables: [
      "Custom MT5 Expert Advisor with full source code",
      "Backtesting & Monte Carlo robustness report",
      "VPS setup & failover safeguards",
      "Comprehensive developer documentation",
    ],
    features: [
      "Defensive slippage & spread protections",
      "Strict risk management state machine",
      "Zero third-party library dependencies",
      "Full intellectual property transfer",
    ],
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_trade_custom",
  },
];

export const MONTHLY_PLANS: MonthlyPlan[] = [
  {
    id: "plan-maintenance",
    name: "Maintenance",
    slug: "maintenance",
    price: 49,
    priceDisplay: "$49",
    period: "/month",
    badge: "Essential",
    tagline: "Basic website and digital system maintenance.",
    idealFor: "Businesses wanting peace of mind that their website is secure, fast, and constantly up to date.",
    features: [
      "24/7 uptime monitoring & rapid recovery",
      "Security patches & dependency updates",
      "Daily off-site cloud backups",
      "Monthly performance and speed audit",
      "Email support (48h turnaround)",
    ],
    ctaLabel: "Start Maintenance",
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_plan_maint",
  },
  {
    id: "plan-care",
    name: "Systems Care",
    slug: "systems-care",
    price: 149,
    priceDisplay: "$149",
    period: "/month",
    badge: "Most Popular",
    popular: true,
    tagline: "Automation, CRM, ERPNext, and workflow maintenance.",
    idealFor: "Companies relying on connected workflows and CRM tools that need active management and fast troubleshooting.",
    features: [
      "All Maintenance features included",
      "Workflow & webhook health monitoring",
      "CRM & Google Sheet sync maintenance",
      "Up to 2 hours of monthly workflow changes",
      "Priority WhatsApp & Email support (24h turnaround)",
    ],
    ctaLabel: "Subscribe to Systems Care",
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_plan_care",
  },
  {
    id: "plan-partner",
    name: "Systems Partner",
    slug: "systems-partner",
    price: 299,
    priceDisplay: "$299",
    period: "/month",
    badge: "Pro",
    tagline: "Priority support and continuous system improvements.",
    idealFor: "Growing businesses actively enhancing their operations with new automations and custom features every month.",
    features: [
      "All Systems Care features included",
      "Up to 5 hours of dedicated monthly development",
      "Monthly 45-min systems strategy consultation",
      "ERPNext user administration & report adjustments",
      "Direct founder access via dedicated WhatsApp channel",
      "Same-day emergency response (under 4h)",
    ],
    ctaLabel: "Join as Systems Partner",
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_plan_partner",
  },
  {
    id: "plan-fractional",
    name: "Fractional Systems",
    slug: "fractional-systems",
    price: 499,
    priceDisplay: "From $499",
    period: "/month",
    badge: "Enterprise",
    tagline: "For businesses requiring ongoing architecture and development.",
    idealFor: "Scale-ups needing an experienced Systems Architect embedded with their team without hiring a full-time executive.",
    features: [
      "Dedicated weekly development sprint allocation",
      "Continuous system architecture & custom software",
      "Bi-weekly executive strategy calls",
      "Custom API & integration engineering",
      "Priority SLA with instant phone/chat escalation",
    ],
    ctaLabel: "Enquire for Fractional",
    stripePaymentLink: "https://buy.stripe.com/test_placeholder_plan_frac",
  },
];

export const PORTFOLIO_CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-01",
    title: "Bespoke Multi-Department Business OS",
    category: "Business Systems",
    classification: "Internal Project",
    classificationBadge: "Internal Project",
    summary: "Unified operating system connecting sales enquiries, automated quotation drafting, operations tracking, and executive overview.",
    problem: "Operational teams operated across 6 disparate subscription platforms and uncontrolled Excel sheets, leading to lost customer leads, repetitive re-typing, and zero live reporting.",
    solution: "Engineered a single unified Business OS with standardized customer records, automated lead progression stages, and centralized order accounting.",
    result: "All operational tasks centralized into 1 browser interface with zero manual data duplication.",
    technologies: ["Frappe Framework", "ERPNext", "MariaDB", "Tailwind CSS", "Next.js"],
    badge: "Enterprise Architecture",
    metricsDisclaimer: "Internal architecture blueprint developed for ScaleNova Business OS ecosystem.",
  },
  {
    id: "cs-02",
    title: "Google Workspace & CRM Lead Capture Bridge",
    category: "Automation",
    classification: "Real Client Project",
    classificationBadge: "Real Client Project",
    summary: "Zero-latency automated pipeline capturing website visitor enquiries, logging into Google Sheets CRM, and firing dual personalized customer/staff alerts.",
    problem: "Staff spent 15-20 minutes manually transcribing every customer consultation enquiry from form emails into spreadsheets, with average initial response lag exceeding 12 hours.",
    solution: "Built a lightweight Google Apps Script engine with formula-injection sanitization, instant UUID tracking, dual HTML email delivery, and customer intake confirmation.",
    result: "Enquiries recorded in 1.2 seconds with immediate customer acknowledgement. Reduced team administrative triage time by 90%.",
    technologies: ["Google Apps Script", "Google Sheets", "HTML5", "REST Webhooks"],
    badge: "High Efficiency",
  },
  {
    id: "cs-03",
    title: "Wholesale Distribution ERPNext Deployment",
    category: "ERPNext",
    classification: "Real Client Project",
    classificationBadge: "Real Client Project",
    summary: "Clean configuration of ERPNext v15 for stock management, multi-currency invoicing, purchase orders, and supplier reconciliation.",
    problem: "The client used manual paper delivery notes and disconnected accounting software, leading to recurring stock count mismatches and delayed supplier payments.",
    solution: "Configured ERPNext Accounts, Stock, Selling, and Buying modules with custom print formats, barcode validation, and automated low-stock re-order alerts.",
    result: "Accurate real-time inventory visibility across 2 warehouse locations and automated weekly supplier statements.",
    technologies: ["ERPNext v15", "Python", "MariaDB", "Linux Ubuntu", "Nginx"],
    badge: "Core Operations",
  },
  {
    id: "cs-04",
    title: "Modern Founder Services Platform",
    category: "Websites",
    classification: "Real Client Project",
    classificationBadge: "Real Client Project",
    summary: "Ultra-fast static web platform with embedded consultation booking, e-commerce checkout, and Google Workspace CRM integration.",
    problem: "Previous WordPress website was slow (4.8s mobile load), bloated with 30+ plugins, and frequently experienced checkout crashes.",
    solution: "Rebuilt from ground up using Next.js 16 and Tailwind CSS v4 deployed on Cloudflare Workers edge network with client-side cart and Stripe integration.",
    result: "LCP under 0.8 seconds, zero security plugin vulnerabilities, and reliable mobile checkout.",
    technologies: ["Next.js 16", "React 19", "Tailwind CSS v4", "Cloudflare Workers", "Stripe"],
    badge: "Performance First",
  },
  {
    id: "cs-05",
    title: "Confirmed-Bar Multi-Asset Trend Engine",
    category: "Trading Technology",
    classification: "Internal Project",
    classificationBadge: "Internal Project",
    summary: "Systematic Pine Script v6 trend following indicator with confirmed-bar execution logic to prevent historical signal repainting.",
    problem: "Off-the-shelf indicators frequently repainted historical signals upon bar completion, creating deceptive backtesting records and erratic trade entries.",
    solution: "Programmed an adaptive EMA cloud volatility system in Pine Script v6 with strict close-of-bar trigger mechanics and webhook alert formatting.",
    result: "100% reproducible historical signals across Forex and Index charts with zero repainting on closed bars.",
    technologies: ["Pine Script v6", "TradingView", "Technical Analysis"],
    badge: "Algo Engineering",
    metricsDisclaimer: "Trading software engineering demonstration. Does not constitute investment advice or guarantee financial returns.",
  },
  {
    id: "cs-06",
    title: "Automated Multi-Timeframe MT5 Alert Scanner",
    category: "Trading Technology",
    classification: "Demonstration",
    classificationBadge: "Demonstration",
    summary: "Interactive on-chart dashboard scanning 28 currency pairs across 4 timeframes with instant push notifications.",
    problem: "Discretionary traders missed confluence setups due to manual chart cycling across dozens of currency pairs.",
    solution: "Engineered an asynchronous MQL5 indicator monitoring RSI and EMA confluence in real time with background timer ticks and low CPU footprint.",
    result: "Instant notification delivery to mobile MT5 app whenever multi-pair conditions align.",
    technologies: ["MQL5", "MetaTrader 5", "WinAPI"],
    badge: "Market Tool",
    metricsDisclaimer: "Illustrative software environment. Performance reflects algorithmic execution speed, not trading profits.",
  },
];

import { CANONICAL_SERVICES_CATALOGUE } from "./pricingData";

// Helper to lookup canonical price safely (Never trust client prices)
export function getCanonicalPrice(productId: string): number | null {
  const match = CURATED_OFFERS.find((o) => o.id === productId);
  if (match) return match.price;

  const planMatch = MONTHLY_PLANS.find((p) => p.id === productId);
  if (planMatch) return planMatch.price;

  const canonMatch = CANONICAL_SERVICES_CATALOGUE.find((s) => s.serviceId === productId);
  if (canonMatch) {
    const parsed = parseFloat(canonMatch.price.replace(/[^0-9.]/g, ""));
    return isNaN(parsed) ? 0 : parsed;
  }

  return null;
}
