export interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

export interface ServiceDetail {
  capabilities: string[];
  suitableFor: string[];
  useCases: string[];
  technologies: string[];
  process: string[];
  bullets: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  details: ServiceDetail;
}

export interface ServiceGroup {
  id: string;
  title: string;
  icon: string;
  flow: string;
  items: ServiceItem[];
}

export interface PricingItem {
  id: string;
  service: string;
  originalPrice?: string;
  price: string;
  currency?: string;
  description: string;
  bullets: string[];
  serviceId?: string;
  slug?: string;
  categoryLabel?: string;
  isCustomScope?: boolean;
}

export interface LockedPricingPlan {
  id: string;
  slug: string;
  service: string;
  originalPrice: string;
  price: string;
  currency: string;
  description: string;
  bullets: string[];
  serviceId: string;
  badge: string;
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
  { label: "About", href: "/#about" },
  { label: "Categories", href: "/#categories" },
  { label: "Services", href: "/#services" },
  { label: "Standard vs Custom", href: "/#standard-vs-custom" },
  { label: "How We Work", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Monthly Support", href: "/#monthly-support" },
  { label: "Trust", href: "/#trust" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blogs", href: "/blogs", isRoute: true },
  { label: "Contact", href: "/#contact" },
];

export const CONSOLIDATED_SERVICES: ServiceGroup[] = [
  {
    id: "business-systems",
    title: "Business Systems",
    icon: "Workflow",
    flow: "Process → System → Automation → Reporting",
    items: [
      {
        id: "biz-consulting",
        name: "Business Systems Consulting",
        shortDescription: "End-to-end architecture connecting disconnected software and tools.",
        description: "Comprehensive review and re-architecture of fragmented operations into a unified, reliable software ecosystem.",
        icon: "Workflow",
        details: {
          bullets: [
            "Unified systems architecture blueprint",
            "Elimination of manual spreadsheets & data silos",
            "Scalable tech stack selection & audit",
          ],
          capabilities: [
            "Operational bottleneck diagnosis and technical workflow mapping",
            "Software stack consolidation and tool migration planning",
            "Executive technical roadmapping with clear ROI milestones",
          ],
          suitableFor: [
            "Growing businesses struggling with fragmented tools",
            "Founders spending hours on manual operations",
            "Teams seeking unified cloud-based operations",
          ],
          useCases: [
            "Replacing 5 disconnected subscription tools with 1 integrated system",
            "Designing standard operating procedure (SOP) digital workflows",
            "Automating cross-department approval hierarchies",
          ],
          technologies: ["Frappe Framework", "ERPNext", "PostgreSQL", "Cloudflare", "Next.js"],
          process: [
            "1. Discovery Audit — Deep-dive into existing tools and workflows",
            "2. Architecture Blueprint — Comprehensive system specification",
            "3. Implementation Roadmap — Phased deployment with zero downtime",
            "4. Team Handover — Full documentation and video training",
          ],
        },
      },
      {
        id: "process-opt",
        name: "Process Optimisation",
        shortDescription: "Eliminate operational bottlenecks and streamline manual team handoffs.",
        description: "Identify operational lag, reduce communication overhead, and implement clear digital tracking across all company touchpoints.",
        icon: "Sparkles",
        details: {
          bullets: [
            "Root-cause operational friction analysis",
            "Standardized digital handoffs between departments",
            "Over 60% reduction in turnaround time",
          ],
          capabilities: [
            "End-to-end process mapping and waste elimination",
            "Automated task escalation rules and SLA tracking",
            "Real-time operational dashboards for team leads",
          ],
          suitableFor: [
            "Service companies with multi-stage client fulfillment",
            "Agencies managing concurrent deliverables",
            "Operational managers seeking process visibility",
          ],
          useCases: [
            "Streamlining client onboarding from 5 days to 2 hours",
            "Automated quality assurance checkpoints before invoicing",
            "Multi-stage project tracking with client notifications",
          ],
          technologies: ["REST Webhooks", "Python", "Node.js", "Redis", "TypeScript"],
          process: [
            "1. Process Mapping — Document current step-by-step workflow",
            "2. Bottleneck Isolation — Identify delay points and manual friction",
            "3. Automation Layer — Connect triggers, conditions, and actions",
            "4. Monitoring Setup — Real-time performance tracking",
          ],
        },
      },
      {
        id: "crm-erp",
        name: "CRM / ERP Implementation",
        shortDescription: "Frappe & ERPNext deployment customized to exact business rules.",
        description: "Enterprise-grade open source ERP and CRM solutions engineered for manufacturing, trading, services, and distribution companies.",
        icon: "Layers",
        details: {
          bullets: [
            "Custom DocTypes, workflows, and role permissions",
            "Automated billing, inventory, and ledger sync",
            "Zero per-user licensing fees with complete data ownership",
          ],
          capabilities: [
            "Tailored ERPNext/Frappe installation and cloud setup",
            "Custom server scripts, hooks, and REST API endpoints",
            "Full historical data migration from legacy accounting software",
          ],
          suitableFor: [
            "Growing SMBs ready to outgrow spreadsheets and generic SaaS",
            "Enterprises seeking complete private cloud data sovereignty",
            "Businesses needing complex, bespoke transactional logic",
          ],
          useCases: [
            "Full business lifecycle management: Lead → Order → Invoice → Delivery",
            "Multi-currency financial accounting with automated tax filing",
            "Warehouse stock level alerts with purchase order auto-generation",
          ],
          technologies: ["ERPNext v15", "Frappe Framework", "MariaDB", "Python", "Redis"],
          process: [
            "1. Scope Definition — Map exact DocTypes and business rules",
            "2. Environment Setup — Secure cloud instance with automated backups",
            "3. Customization — Build custom controllers, hooks, and prints",
            "4. Live Migration — Staging testing, data import, and production go-live",
          ],
        },
      },
      {
        id: "hr-systems",
        name: "HR Management Systems",
        shortDescription: "Role permissions, team administration, and structured employee workflows.",
        description: "Digital employee lifecycle management covering leave approvals, payroll generation, performance reviews, and document storage.",
        icon: "Users",
        details: {
          bullets: [
            "Self-service employee portals and mobile access",
            "Automated leave balance and attendance calculations",
            "Compliant payroll slips with tax deduction logic",
          ],
          capabilities: [
            "Multi-tier approval hierarchies for expenses and time off",
            "Biometric device integration and shift scheduling",
            "Secure employee document repository with expiry reminders",
          ],
          suitableFor: [
            "Companies managing remote or distributed teams",
            "HR departments spending hours on payroll calculation",
            "Organizations scaling from 10 to 100+ team members",
          ],
          useCases: [
            "Automated monthly payroll generation with PDF slip dispatch",
            "Geofenced mobile attendance check-in for field staff",
            "Employee onboarding checklist with automated task assignments",
          ],
          technologies: ["Frappe HR", "Python", "MariaDB", "Tailwind CSS"],
          process: [
            "1. Policy Configuration — Set leave, holiday, and salary structures",
            "2. Role Setup — Assign permission levels and approval managers",
            "3. Integration — Connect attendance devices and payment gateways",
            "4. Rollout — Onboard employees with self-service mobile app",
          ],
        },
      },
      {
        id: "biz-operations",
        name: "Business Operations & SOP",
        shortDescription: "Standard operating procedures and connected task execution pipelines.",
        description: "Turn organizational knowledge into executable digital checklists and automated tracking systems that guarantee consistent execution.",
        icon: "Sliders",
        details: {
          bullets: [
            "Interactive digital SOPs embedded in daily workflows",
            "Accountability logs with timestamped compliance records",
            "Accelerated training timeline for new hires",
          ],
          capabilities: [
            "Converting static PDF manuals into interactive software checklists",
            "Automated recurrence schedules for compliance audits",
            "Real-time exception reporting sent to leadership",
          ],
          suitableFor: [
            "Franchises, agencies, and regulated service providers",
            "Founders delegating daily operations to department leads",
            "Businesses preparing for ISO or compliance certifications",
          ],
          useCases: [
            "Daily opening and closing checklists for multi-branch operations",
            "Client project kickoff checklist with automated team notifications",
            "Vendor compliance verification pipeline",
          ],
          technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
          process: [
            "1. Audit SOPs — Review all operational procedures",
            "2. Digitalization — Build interactive web/mobile checklists",
            "3. Automation — Trigger notifications upon task completion or delay",
            "4. Reporting — Weekly compliance scorecards for management",
          ],
        },
      },
      {
        id: "data-analytics",
        name: "Data & Business Analytics",
        shortDescription: "Real-time executive KPI dashboards with actionable financial visibility.",
        description: "Transform scattered transactional data into clean, visual executive dashboards that answer strategic revenue and operational questions.",
        icon: "BarChart3",
        details: {
          bullets: [
            "Live revenue, margin, and cash flow visualization",
            "Automated weekly PDF summaries emailed to stakeholders",
            "Real-time alerts on unexpected margin drops or KPI anomalies",
          ],
          capabilities: [
            "Data pipeline orchestration and automated ETL synchronization",
            "Interactive charts with multi-dimensional filtering",
            "Predictive trend analysis and runway forecasting",
          ],
          suitableFor: [
            "CEOs and CFOs needing real-time business health metrics",
            "E-commerce & SaaS operators tracking customer cohort retention",
            "Multi-location businesses aggregating sales performance",
          ],
          useCases: [
            "Executive dashboard aggregating CRM, banking, and ad spend",
            "Customer lifetime value (LTV) vs acquisition cost (CAC) tracking",
            "Inventory turnover and aging stock visualization",
          ],
          technologies: ["Chart.js", "Three.js", "SQL", "Python", "Next.js"],
          process: [
            "1. Source Audit — Identify all database, API, and bank data streams",
            "2. Data Pipeline — Build secure synchronization pipeline",
            "3. UI Design — Develop responsive executive dashboard",
            "4. Delivery — Schedule automated digests and anomaly alerts",
          ],
        },
      },
    ],
  },
  {
    id: "software",
    title: "Software & Web Products",
    icon: "Code2",
    flow: "Idea → Design → Build → Launch",
    items: [
      {
        id: "custom-software",
        name: "Custom Software",
        shortDescription: "Tailored digital systems engineered around unique operational requirements.",
        description: "Bespoke web and cloud applications built with high-performance architectures, intuitive interfaces, and bulletproof security.",
        icon: "Code2",
        details: {
          bullets: [
            "TypeScript & Next.js modern full-stack architecture",
            "Rock-solid database models with role-based access control",
            "High test coverage, zero bloat, and blazingly fast load times",
          ],
          capabilities: [
            "Custom web portal and workflow engine development",
            "Scalable REST and GraphQL API design",
            "High-concurrency cloud architecture on Cloudflare and AWS",
          ],
          suitableFor: [
            "Startups building their MVP or proprietary core platform",
            "Enterprises replacing legacy desktop software with modern web",
            "Founders with unique product ideas needing technical execution",
          ],
          useCases: [
            "Custom booking and resource scheduling engine",
            "Proprietary customer verification and KYC system",
            "Internal operations console for distributed field staff",
          ],
          technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cloudflare"],
          process: [
            "1. Specs & Wireframes — Validate user flows and interactive prototypes",
            "2. Architecture — Schema design, API contracts, and security boundaries",
            "3. Agile Development — Two-week sprints with staging demo builds",
            "4. Launch & SLA — Production deployment, monitoring, and ongoing support",
          ],
        },
      },
      {
        id: "biz-websites",
        name: "Business Websites",
        shortDescription: "Fast, minimal, conversion-focused websites with modern SEO architecture.",
        description: "Executive websites engineered with sub-second page speeds, high-converting copy hierarchy, and built-in lead generation pipelines.",
        icon: "Globe",
        details: {
          bullets: [
            "100/100 Lighthouse performance scores & Core Web Vitals",
            "Built-in structured SEO (Schema.org, OpenGraph, sitemaps)",
            "Integrated international WhatsApp lead capture & CRM connection",
          ],
          capabilities: [
            "Responsive custom UI with smooth modern micro-animations",
            "Dynamic blog engine and case study management",
            "Direct webhook integration to WhatsApp, Telegram, and Google Sheets",
          ],
          suitableFor: [
            "Entrepreneurs, consultants, and premium service firms",
            "Technology studios seeking an Apple/Stripe-level aesthetic",
            "Companies upgrading from slow WordPress templates",
          ],
          useCases: [
            "Executive personal brand & advisory portfolio",
            "High-converting B2B SaaS landing pages",
            "Corporate agency website with interactive pricing calculator",
          ],
          technologies: ["Next.js", "React 19", "Tailwind CSS v4", "Lucide", "Three.js"],
          process: [
            "1. Positioning & Copy — Structure messaging for maximum trust",
            "2. Visual Design — Clean aesthetic with curated typography and color tokens",
            "3. Engineering — Next.js App Router static prerendering",
            "4. SEO Launch — Search Console submission, analytics, and speed audit",
          ],
        },
      },
      {
        id: "web-apps",
        name: "Web Applications",
        shortDescription: "Scalable full-stack cloud applications with clean, responsive user interfaces.",
        description: "Interactive single-page and multi-tenant web applications with secure user authentication, payment processing, and real-time state sync.",
        icon: "Layout",
        details: {
          bullets: [
            "JWT & OAuth secure multi-role authentication",
            "Stripe & payment gateway subscription billing integration",
            "Optimistic UI updates with instant responsive feedback",
          ],
          capabilities: [
            "Real-time WebSocket data updates and collaborative interfaces",
            "Complex form wizards with auto-save and draft recovery",
            "Comprehensive audit trails and role permission management",
          ],
          suitableFor: [
            "Digital product founders building interactive tools",
            "Companies building client-facing operational portals",
            "Teams needing custom internal business utilities",
          ],
          useCases: [
            "Interactive financial calculator and report generator",
            "Online document signing and certificate issuance portal",
            "Dynamic project management and milestone tracking app",
          ],
          technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe API"],
          process: [
            "1. Data Modeling — Relational schemas and authentication flows",
            "2. Frontend UX — Component state architecture and form validation",
            "3. Backend APIs — Secure endpoints with rate limiting",
            "4. Production Deploy — Global CDN edge caching and SSL",
          ],
        },
      },
      {
        id: "mobile-apps",
        name: "Mobile Applications",
        shortDescription: "Touch-optimized responsive web apps engineered for all devices.",
        description: "Progressive Web Apps (PWA) and cross-platform mobile experiences offering native feel, offline capability, and instant load times.",
        icon: "Smartphone",
        details: {
          bullets: [
            "App-like touch gestures, drawer navigation, and smooth sheets",
            "Offline caching with background data synchronization",
            "Installable directly to iOS and Android home screens without app store fees",
          ],
          capabilities: [
            "PWA service worker caching for offline access",
            "Push notification integration for real-time customer alerts",
            "Optimized asset loading with minimal mobile data consumption",
          ],
          suitableFor: [
            "Field service teams requiring reliable mobile access",
            "Customer loyalty and order tracking systems",
            "Startups testing mobile product-market fit fast",
          ],
          useCases: [
            "Field technician job logging and photo upload app",
            "Customer self-service appointment scheduler",
            "Trading alert mobile viewer with real-time push notifications",
          ],
          technologies: ["PWA", "TypeScript", "Tailwind CSS", "Web Workers"],
          process: [
            "1. Mobile Wireframing — Design for one-handed thumb interaction",
            "2. Touch Engineering — Fast tap targets, swipeable modals, and bottom sheets",
            "3. Offline Sync — IndexedDB local storage and background sync",
            "4. Multi-Device QA — Tested across iOS Safari and Android Chrome",
          ],
        },
      },
      {
        id: "saas-products",
        name: "SaaS Products",
        shortDescription: "Multi-tenant platforms with subscription billing and role-based access.",
        description: "Complete software-as-a-service architecture covering tenant isolation, usage-based metering, tier limits, and automated recurring billing.",
        icon: "Cloud",
        details: {
          bullets: [
            "Multi-tenant database isolation and custom subdomains",
            "Tiered pricing plans with automatic usage limit enforcement",
            "Self-service billing portal for invoice download and card updates",
          ],
          capabilities: [
            "Stripe Customer Portal & webhook billing lifecycle automation",
            "Role-based access control (Admin, Member, Viewer, Billing)",
            "Automated tenant provisioning and onboarding email sequences",
          ],
          suitableFor: [
            "SaaS entrepreneurs launching new subscription software",
            "Agencies productizing custom internal tools into paid SaaS",
            "B2B service providers moving to recurring software models",
          ],
          useCases: [
            "Multi-tenant client reporting portal for digital agencies",
            "B2B subscription tool for automated document parsing",
            "Trading signal broadcast platform with tiered subscriber access",
          ],
          technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Cloudflare Workers"],
          process: [
            "1. Tenant Architecture — Design multi-tenant schema and security boundaries",
            "2. Billing Engine — Connect plans, trials, webhook listeners, and invoices",
            "3. Core Features — Build high-value product tools and exports",
            "4. Launch Engine — Add affiliate system, analytics, and churn alerts",
          ],
        },
      },
      {
        id: "client-portals",
        name: "Dashboards & Client Portals",
        shortDescription: "Secure customer self-service portals and internal metrics hubs.",
        description: "Branded self-service hubs where clients can view project progress, submit tickets, download invoices, and access deliverables securely.",
        icon: "ShieldCheck",
        details: {
          bullets: [
            "Zero client confusion with dedicated project status tracking",
            "Encrypted document sharing and milestone sign-offs",
            "Significant reduction in repetitive customer support emails",
          ],
          capabilities: [
            "Custom domain white-labeling with client branding",
            "Automated email notifications on document upload or status update",
            "Secure magic link or 2FA passwordless login",
          ],
          suitableFor: [
            "Consulting firms, legal advisors, and accounting practices",
            "Custom software agencies sharing development milestones",
            "B2B service businesses seeking an executive client experience",
          ],
          useCases: [
            "Client onboarding portal with document collection and e-signatures",
            "Financial advisory quarterly report repository",
            "Real-time trading signal performance and history dashboard",
          ],
          technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "AWS S3 / Cloudflare R2"],
          process: [
            "1. User Journeys — Map client touchpoints and deliverable access",
            "2. Portal Setup — Secure authentication, file uploads, and branding",
            "3. Integration — Connect to CRM to update milestones automatically",
            "4. Security Review — Role permissions, presigned URLs, and access logs",
          ],
        },
      },
    ],
  },
  {
    id: "automation",
    title: "Automation & AI Workflows",
    icon: "Bot",
    flow: "Trigger → Filter → Sync → Notify",
    items: [
      {
        id: "workflow-automation",
        name: "Workflow Automation",
        shortDescription: "Automate repetitive data transfers and event triggers across platforms.",
        description: "Connect your disparate cloud apps with fault-tolerant webhook pipelines that eliminate copy-pasting and human data entry mistakes.",
        icon: "Workflow",
        details: {
          bullets: [
            "Over 15 hours saved per employee every week",
            "Zero data entry errors with automated validation",
            "Instant event-driven sync between web, CRM, and databases",
          ],
          capabilities: [
            "Multi-step trigger-action automation across 100+ business tools",
            "Error handling with automatic retries and admin alert notifications",
            "Webhook payload transformation, filtering, and sanitization",
          ],
          suitableFor: [
            "Operations teams manually copying data between tools",
            "E-commerce stores managing multi-channel orders",
            "Sales teams wanting instant lead alerts on Telegram or Slack",
          ],
          useCases: [
            "Website lead → CRM lead record → WhatsApp alert to rep → Google Sheet",
            "Stripe payment success → Auto-generate invoice in ERP → Send client email",
            "Contract signed → Auto-create project folder, Slack channel & tasks",
          ],
          technologies: ["Node.js", "Python", "REST APIs", "Cloudflare Workers", "Google Apps Script"],
          process: [
            "1. Workflow Audit — Identify all manual data handoffs and tool bottlenecks",
            "2. Pipeline Design — Build trigger-action sequence with validation checks",
            "3. Staging Testing — Run simulation payloads to verify error edge cases",
            "4. Production Activation — Live monitoring with automated failure alerts",
          ],
        },
      },
      {
        id: "ai-automation",
        name: "AI Automation",
        shortDescription: "Extract structured data from unstructured invoices, emails, and PDFs.",
        description: "Leverage modern Large Language Models and computer vision to extract, categorize, summarize, and route unstructured business documents.",
        icon: "Sparkles",
        details: {
          bullets: [
            "Automated PDF and invoice data extraction into CRM/ERP tables",
            "Intelligent customer query classification and auto-drafted replies",
            "Document summarization and entity extraction at scale",
          ],
          capabilities: [
            "Structured JSON output extraction from messy unstructured documents",
            "AI agents integrated into email and customer support workflows",
            "Custom embedding-based semantic knowledge base search",
          ],
          suitableFor: [
            "Finance departments processing hundreds of vendor invoices",
            "Customer support teams managing repetitive email tickets",
            "Legal & compliance firms reviewing contract documents",
          ],
          useCases: [
            "Auto-extracting line items, vendor name, and tax from PDF invoices",
            "Classifying inbound support emails and routing to right specialist",
            "AI knowledge base answering team operational questions from SOPs",
          ],
          technologies: ["Gemini 1.5 API", "Python", "LangChain", "Vector DB", "TypeScript"],
          process: [
            "1. Document Ingestion — Connect email inboxes and file storage",
            "2. Model Prompting — Structured JSON schemas with zero hallucinations",
            "3. Verification Gate — Confidence thresholds with human-in-the-loop fallback",
            "4. ERP/DB Ingestion — Automatic creation of bills, leads, or records",
          ],
        },
      },
      {
        id: "crm-automation",
        name: "Business & CRM Automation",
        shortDescription: "Automated deal pipeline updates, lead alerts, and invoice generation.",
        description: "Transform your sales pipeline with automated lead qualification, instant rep assignment, follow-up reminders, and recurring billing.",
        icon: "Zap",
        details: {
          bullets: [
            "Sub-minute response times to new incoming website enquiries",
            "Automated follow-up email sequences for cold or stalled leads",
            "Automatic deal stage progression based on contract & payment events",
          ],
          capabilities: [
            "Lead scoring based on company size, budget, and service interest",
            "Round-robin automated lead distribution to sales representatives",
            "Automated payment reminder dispatch before invoice due date",
          ],
          suitableFor: [
            "B2B service providers losing leads due to slow response times",
            "Sales managers needing automated pipeline health metrics",
            "Agencies managing dozens of concurrent client proposals",
          ],
          useCases: [
            "Instant WhatsApp greeting triggered upon website contact form submission",
            "Automated proposal follow-up email sequence after 3 days without response",
            "Auto-invoicing on the 1st of every month with payment link",
          ],
          technologies: ["ERPNext CRM", "Google Apps Script", "Cloudflare", "Resend API"],
          process: [
            "1. Pipeline Review — Define qualification stages and automation triggers",
            "2. Template Setup — Write high-converting email and WhatsApp templates",
            "3. Webhook Hooks — Link website forms and payment gateways directly",
            "4. Team Training — Live walkthrough of the automated pipeline",
          ],
        },
      },
      {
        id: "api-integrations",
        name: "API Integrations",
        shortDescription: "Seamless REST and webhook communication between third-party services.",
        description: "Engineered API bridges, webhook listeners, and background sync workers that keep your financial, operational, and customer tools in harmony.",
        icon: "Network",
        details: {
          bullets: [
            "Bi-directional synchronization between legacy and modern cloud apps",
            "Idempotent webhook handlers preventing duplicate transactions",
            "Detailed payload logging for complete auditability",
          ],
          capabilities: [
            "REST, GraphQL, and SOAP API integration and middleware creation",
            "Rate-limiting and queue handling with Redis/RabbitMQ",
            "Secure OAuth2 and HMAC signature verification",
          ],
          suitableFor: [
            "Companies using custom tools alongside standard SaaS products",
            "Fintech and e-commerce operators connecting payment gateways",
            "Businesses migrating from legacy databases to modern cloud APIs",
          ],
          useCases: [
            "Connecting custom website frontend to ERPNext backend API",
            "Stripe and PayPal multi-gateway payment reconciliation bridge",
            "Logistics shipping API integration with automated tracking updates",
          ],
          technologies: ["Node.js", "Python", "Cloudflare Workers", "Redis", "REST"],
          process: [
            "1. API Documentation Review — Verify authentication, endpoints, and rate limits",
            "2. Middleware Development — Build robust connector with error handling",
            "3. Sandbox Validation — Test all edge cases and failure modes",
            "4. Production Deployment — Live monitoring and automatic alerts",
          ],
        },
      },
      {
        id: "email-notifications",
        name: "Email & Notification Systems",
        shortDescription: "Instant transactional alerts dispatched to staff and customers.",
        description: "High-deliverability transactional email and instant notification systems that reach inboxes reliably without landing in spam.",
        icon: "Mail",
        details: {
          bullets: [
            "99.5%+ inbox deliverability with correct SPF, DKIM, and DMARC",
            "Beautiful responsive HTML email templates with text fallbacks",
            "Automated client milestone and invoice dispatch",
          ],
          capabilities: [
            "Custom transactional email templates styled to match brand guidelines",
            "Real-time open, click, and bounce tracking dashboards",
            "Multi-channel routing: email, SMS, and WhatsApp alerts",
          ],
          suitableFor: [
            "SaaS platforms sending verification codes and welcome emails",
            "Service companies sending automated project updates",
            "E-commerce stores sending order confirmations and shipping tracking",
          ],
          useCases: [
            "Automated enquiry confirmation email sent to leads with Lead ID",
            "Internal staff alert dispatched when VIP high-budget client applies",
            "Automated monthly performance digest sent to subscribers",
          ],
          technologies: ["Resend", "SendGrid", "Google Apps Script", "HTML5 Email CSS"],
          process: [
            "1. DNS Setup — Configure SPF, DKIM, and DMARC domain records",
            "2. Template Design — Code responsive HTML templates tested in Outlook & Gmail",
            "3. Webhook Triggering — Connect backend events to email dispatcher",
            "4. Deliverability Audit — Test spam scores and inbox placement",
          ],
        },
      },
      {
        id: "telegram-automation",
        name: "Telegram Bot Automation",
        shortDescription: "Interactive custom bots and real-time broadcast channel alerts.",
        description: "Custom Telegram bots and notification pipelines for financial market alerts, customer support menus, and internal server monitoring.",
        icon: "Send",
        details: {
          bullets: [
            "Sub-second alert delivery to private channels or group chats",
            "Interactive bot keyboards and command menus for client queries",
            "Automated subscriber tier management with payment bot integration",
          ],
          capabilities: [
            "Webhook-driven broadcast alerts with custom Markdown formatting",
            "Interactive buttons triggering backend API workflows",
            "Private channel invite link generation upon subscription payment",
          ],
          suitableFor: [
            "Trading communities and signal providers",
            "IT teams needing instant server health and downtime alerts",
            "Businesses offering customer self-service through Telegram",
          ],
          useCases: [
            "Instant TradingView chart signal broadcast to VIP channel",
            "Server downtime and critical database error alert bot",
            "Automated subscriber expiry and removal for paid communities",
          ],
          technologies: ["Telegram Bot API", "Python", "Cloudflare Workers", "Node.js"],
          process: [
            "1. Bot Registration — Create bot token with BotFather and set commands",
            "2. Webhook Engine — Deploy serverless webhook listener on Cloudflare",
            "3. Format Logic — Format rich message cards with buttons and links",
            "4. VIP Management — Connect payment verification to channel access",
          ],
        },
      },
    ],
  },
  {
    id: "trading-tech",
    title: "Trading Technology",
    icon: "TrendingUp",
    flow: "Strategy → Indicator → Alert → Automation",
    items: [
      {
        id: "tradingview-indicators",
        name: "TradingView Indicators",
        shortDescription: "Custom Pine Script v5 indicators designed around your chart rules.",
        description: "High-performance, clean Pine Script v5 indicators engineered to execute your exact chart logic with zero repaint and clear visual signals.",
        icon: "TrendingUp",
        details: {
          bullets: [
            "100% non-repainting Pine Script v5 architecture",
            "Clean visual dashboard on chart with customizable inputs",
            "Built-in webhook alert triggers formatted for Telegram & MT5",
          ],
          capabilities: [
            "Multi-timeframe (MTF) analysis and market structure mapping",
            "Custom volatility, order block, and liquidity sweep detectors",
            "Pine Script v4 to v5 code migration and performance optimization",
          ],
          suitableFor: [
            "Discretionary traders standardizing their rule-based entries",
            "Signal community owners wanting proprietary branded indicators",
            "Algorithmic traders needing clean webhook alert generators",
          ],
          useCases: [
            "Fair Value Gap (FVG) and liquidity level scanner across timeframes",
            "Trend momentum indicator with multi-condition entry filters",
            "Custom risk/reward calculator directly on TradingView charts",
          ],
          technologies: ["Pine Script v5", "TradingView", "Webhooks", "JSON"],
          process: [
            "1. Rule Specification — Document exact entry, exit, and indicator logic",
            "2. Pine Script Coding — Implement clean, optimized Pine Script v5 code",
            "3. Chart Verification — Validate signals on historical candles and live ticks",
            "4. Delivery & Script Invite — Private script invite on TradingView with instructions",
          ],
        },
      },
      {
        id: "pine-strategies",
        name: "Pine Script Strategies",
        shortDescription: "Deterministic strategy models for systematic rule-based execution.",
        description: "Full backtestable TradingView strategies with customized position sizing, realistic slippage modeling, and automated alert outputs.",
        icon: "Binary",
        details: {
          bullets: [
            "Realistic backtesting modeling with spread and slippage margins",
            "Detailed Strategy Tester metrics: Profit Factor, Drawdown, Win Rate",
            "Automated alert outputs ready for webhook bridge execution",
          ],
          capabilities: [
            "Custom equity risk management: fixed lot, percentage risk, ATR stops",
            "Session timing filters: London, New York, Asia session constraints",
            "Pyramiding, trailing stops, and multi-tier take-profit logic",
          ],
          suitableFor: [
            "Quantitative traders evaluating mechanical trading rules",
            "Prop firm traders testing rule consistency across market cycles",
            "Traders preparing algorithms for live automated execution",
          ],
          useCases: [
            "Breakout strategy with dynamic ATR trailing stop-loss",
            "Mean reversion oscillator strategy with trend filter",
            "Multi-timeframe liquidity sweep strategy with session rules",
          ],
          technologies: ["Pine Script v5", "TradingView Strategy Engine", "Webhooks"],
          process: [
            "1. Strategy Rules — Define indicators, filters, sizing, and exit criteria",
            "2. Script Development — Code strategy with strict non-repainting execution",
            "3. Historical Backtest — Review metrics across multiple asset classes",
            "4. Alert Configuration — Set up webhook payloads for live automation",
          ],
        },
      },
      {
        id: "mt5-indicators-eas",
        name: "MT5 Indicators & EAs",
        shortDescription: "Custom MetaTrader 5 Expert Advisors with strict risk lot parameters.",
        description: "Native MQL5 Expert Advisors and custom indicators engineered for ultra-low latency execution, strict risk rules, and multi-currency analysis.",
        icon: "Bot",
        details: {
          bullets: [
            "Sub-millisecond trade execution via native MQL5",
            "Strict equity stop, spread filter, and max drawdown protection",
            "Comprehensive Strategy Tester backtesting with tick-by-tick data",
          ],
          capabilities: [
            "Automated lot sizing based on account balance and stop-loss pips",
            "Trailing stops, break-even triggers, and partial profit taking",
            "DLL and WebRequest HTTP communication for external API sync",
          ],
          suitableFor: [
            "Forex, index, and commodity traders needing 24/5 hands-free execution",
            "Prop firm challenge traders adhering to strict daily loss limits",
            "Traders wanting to eliminate emotional errors from execution",
          ],
          useCases: [
            "Automated London breakout Expert Advisor with news filter",
            "Grid/Hedging management robot with maximum exposure guardrails",
            "Custom MT5 indicator plotting multi-timeframe moving averages",
          ],
          technologies: ["MQL5", "MetaTrader 5", "C++ Interop", "Strategy Tester"],
          process: [
            "1. Requirements Document — Define entry signals, SL/TP rules, and risk sizing",
            "2. MQL5 Architecture — Code EA with robust error handling (error 10004/10006)",
            "3. Tick Modeling — Backtest on 99.9% quality tick data across multiple years",
            "4. Demo Forward Test — Validate live execution on demo VPS instance",
          ],
        },
      },
      {
        id: "trading-alerts",
        name: "Trading & Telegram Alerts",
        shortDescription: "Sub-second webhook signal routing from charts to Telegram channels.",
        description: "Cloud-hosted webhook routers that receive chart signals from TradingView or MT5 and broadcast formatted alerts to private Telegram channels.",
        icon: "Send",
        details: {
          bullets: [
            "Sub-second signal broadcast to Telegram groups and channels",
            "Clean formatted alert cards with entry, SL, TP, and risk notes",
            "Zero missed signals with high-availability serverless infrastructure",
          ],
          capabilities: [
            "TradingView webhook JSON payload parsing and formatting",
            "Signal validation and duplicate signal filtering",
            "Multi-channel routing: VIP channel, free channel, and admin console",
          ],
          suitableFor: [
            "Signal providers running paid Telegram communities",
            "Traders needing instant push alerts on their mobile phones",
            "Investment groups sharing automated trade setups in real-time",
          ],
          useCases: [
            "TradingView strategy trigger → Formatted Telegram signal with chart link",
            "MT5 EA open/close trade event → Instant Telegram channel notification",
            "Market scanner detecting RSI divergence → Multi-pair broadcast alert",
          ],
          technologies: ["Telegram Bot API", "Cloudflare Workers", "Python", "Webhooks"],
          process: [
            "1. Channel Setup — Configure Telegram bot with admin permissions",
            "2. Webhook Listener — Deploy serverless router on Cloudflare edge",
            "3. Formatting Engine — Build rich message layout with emojis and chart links",
            "4. End-to-End Test — Fire test signals from chart to verify instant delivery",
          ],
        },
      },
      {
        id: "trading-automation",
        name: "Trading Automation",
        shortDescription: "Automated webhook bridges connecting market signals directly to MT5.",
        description: "Seamless end-to-end automation connecting TradingView chart alerts directly to MetaTrader 5 brokers for instant, hands-free order execution.",
        icon: "Zap",
        details: {
          bullets: [
            "TradingView-to-MT5 automated order routing in under 300ms",
            "Automatic lot size calculation based on account risk percentage",
            "Safety filters: max spread check, slippage limits, and daily loss stop",
          ],
          capabilities: [
            "Webhook receiver forwarding trade commands to MT5 EA bridge",
            "Support for market orders, limit orders, SL/TP updates, and close all",
            "Local VPS setup with auto-start and disconnection recovery",
          ],
          suitableFor: [
            "Traders with proven TradingView indicators wanting MT5 execution",
            "Prop firm traders needing instant execution without manual delays",
            "Busy professionals wanting systematic execution during working hours",
          ],
          useCases: [
            "TradingView Pine Script alert → Auto-place buy order on MT5 broker",
            "Opposite signal alert → Auto-close existing position and reverse",
            "Trailing stop webhook → Auto-update stop-loss pips on live MT5 trade",
          ],
          technologies: ["Python MetaTrader5", "Cloudflare Workers", "FastAPI", "VPS Linux/Windows"],
          process: [
            "1. Signal Mapping — Match TradingView alert payload to MT5 order parameters",
            "2. Bridge Setup — Install lightweight listener on trader's MT5 VPS",
            "3. Risk Guardrails — Configure max lot, daily loss, and spread safeguards",
            "4. Live Demo Testing — Validate 20+ live test trades before funding live",
          ],
        },
      },
      {
        id: "market-tools",
        name: "Market Analysis Tools",
        shortDescription: "Multi-asset scanners monitoring market structure setups simultaneously.",
        description: "Custom market scanners and dashboard utilities that monitor 50+ currency pairs, crypto assets, or indices simultaneously for your trading setups.",
        icon: "Sliders",
        details: {
          bullets: [
            "Scan 50+ assets across multiple timeframes simultaneously",
            "Instant desktop and mobile notification when high-probability setup forms",
            "Save 4+ hours of manual chart-checking every day",
          ],
          capabilities: [
            "Multi-symbol screener table displaying RSI, Trend, Volume, and Structure",
            "Custom confluence score: only alert when 3+ criteria align",
            "One-click symbol switching to quickly inspect matching charts",
          ],
          suitableFor: [
            "Swing traders monitoring dozens of Forex and Crypto pairs",
            "Day traders looking for the top trending assets at session open",
            "Prop traders needing disciplined setup filtering without chart fatigue",
          ],
          useCases: [
            "28 Forex pair dashboard showing London session momentum ranking",
            "Crypto screener alerting on abnormal volume spikes + RSI oversold",
            "MT5 multi-pair scanner highlighting engulfing candles at support",
          ],
          technologies: ["Pine Script v5", "MQL5", "Python", "TradingView Screener"],
          process: [
            "1. Filter Criteria — Define exact technical indicators and timeframe rules",
            "2. Screener Development — Code multi-symbol scanner with clean visual grid",
            "3. Alert Routing — Configure push notifications upon confluence triggers",
            "4. Optimization — Ensure zero chart lag and smooth real-time updates",
          ],
        },
      },
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

export const LOCKED_PRICING_PLANS: LockedPricingPlan[] = [
  {
    id: "plan-biz-consultation",
    slug: "business-consultation",
    service: "Business Consultation",
    originalPrice: "$49",
    price: "$35",
    currency: "USD",
    description: "1-on-1 strategic session to audit operational bottlenecks and map solutions.",
    bullets: [
      "60-minute deep-dive architecture consultation",
      "Tool stack & workflow bottleneck analysis",
      "Actionable roadmap with clear ROI recommendations",
    ],
    serviceId: "business-consultation",
    badge: "28% Off",
  },
  {
    id: "plan-proc-audit",
    slug: "process-tech-audit",
    service: "Process / Tech Audit",
    originalPrice: "$79",
    price: "$59",
    currency: "USD",
    description: "Comprehensive review of existing software, subscriptions, and team friction.",
    bullets: [
      "Complete audit of current software stack & costs",
      "Identification of redundant tools & manual steps",
      "Formal PDF audit report with optimization blueprint",
    ],
    serviceId: "process-tech-audit",
    badge: "25% Off",
  },
  {
    id: "plan-biz-systems",
    slug: "business-systems-consulting",
    service: "Business Systems Consulting",
    originalPrice: "$99",
    price: "$75",
    currency: "USD",
    description: "End-to-end architecture specification for connected business operations.",
    bullets: [
      "Full digital workflow & database schema specification",
      "Standard operating procedure (SOP) digital mapping",
      "Vendor & platform selection advisory",
    ],
    serviceId: "business-systems-consulting",
    badge: "24% Off",
  },
  {
    id: "plan-workflow-auto",
    slug: "workflow-automation",
    service: "Workflow Automation",
    originalPrice: "$149",
    price: "$109",
    currency: "USD",
    description: "Multi-step automated trigger-action pipeline connecting web, CRM, and tools.",
    bullets: [
      "Automated webhook pipeline across up to 3 platforms",
      "Data validation, error logging & automated retry logic",
      "Immediate lead & transaction notification alerts",
    ],
    serviceId: "apps-script-automation",
    badge: "27% Off",
  },
  {
    id: "plan-crm-erp",
    slug: "crm-erp-implementation",
    service: "CRM / ERP Implementation",
    originalPrice: "$499",
    price: "$369",
    currency: "USD",
    description: "Customized Frappe & ERPNext business management system deployment.",
    bullets: [
      "Custom DocTypes, role permissions & transaction flows",
      "Financial accounting, CRM & inventory setup",
      "Data migration & team onboarding walkthrough",
    ],
    serviceId: "frappe-erpnext",
    badge: "26% Off",
  },
];

export const REVISED_PRICING_GROUPS: PricingGroup[] = [
  {
    category: "business",
    title: "Business & Consulting",
    badge: "25%–30% Reduced",
    items: LOCKED_PRICING_PLANS.map((p) => ({
      id: p.id,
      service: p.service,
      originalPrice: p.originalPrice,
      price: p.price,
      currency: p.currency,
      description: p.description,
      bullets: p.bullets,
      serviceId: p.serviceId,
      slug: p.slug,
      categoryLabel: "Business & Consulting",
    })),
  },
  {
    category: "software",
    title: "Software & Web",
    badge: "Standard & Custom",
    items: [
      {
        id: "plan-standard-web-crm",
        service: "Website + Lead Capture + Basic CRM",
        originalPrice: "Discovery Scope",
        price: "Milestone",
        currency: "USD",
        description: "Standard, affordable ready-to-deploy web system with Google Sheets CRM and automated alerts.",
        bullets: [
          "High-speed responsive web engine & lead form",
          "Google Sheets backend with collision-free Lead IDs",
          "Dual management & customer email alert automations",
        ],
        serviceId: "website-lead-capture-crm",
        slug: "website-lead-capture-crm",
        categoryLabel: "Software & Web",
        isCustomScope: true,
      },
      {
        id: "plan-custom-systems",
        service: "Custom Business Systems",
        originalPrice: "Discovery Scope",
        price: "Milestone",
        currency: "USD",
        description: "Custom ERP, finance, booking, and operations portals built around your business rules.",
        bullets: [
          "Tailored database schema & relational data models",
          "Multi-role user portals with secure permissions",
          "Milestone-based delivery with no hourly billing",
        ],
        serviceId: "custom-business-systems",
        slug: "custom-business-systems",
        categoryLabel: "Software & Web",
        isCustomScope: true,
      },
    ],
  },
  {
    category: "trading",
    title: "Trading Technology",
    badge: "Engineering & Automation",
    items: [
      {
        id: "plan-tradingview-tech",
        service: "TradingView Indicators & Strategies",
        originalPrice: "Discovery Scope",
        price: "Milestone",
        currency: "USD",
        description: "Standard & custom non-repainting Pine Script v5 indicators and systematic backtesting scripts.",
        bullets: [
          "100% non-repainting mathematical logic & alerts",
          "Visual on-chart parameter controls & dashboard",
          "Pure technology engineering with zero profit claims",
        ],
        serviceId: "tradingview-indicators",
        slug: "tradingview-indicators",
        categoryLabel: "Trading Technology",
        isCustomScope: true,
      },
      {
        id: "plan-mt5-scanners-alerts",
        service: "MT5 Scanners & Telegram Alerts",
        originalPrice: "Discovery Scope",
        price: "Milestone",
        currency: "USD",
        description: "Multi-symbol MQL5 scanners and sub-second webhook notifications to private Telegram channels.",
        bullets: [
          "Multi-timeframe condition detection across 28+ symbols",
          "Sub-second formatted Telegram channel broadcasts",
          "Automated webhook bridge to execution systems",
        ],
        serviceId: "mt5-scanner-alerts",
        slug: "mt5-scanner-alerts",
        categoryLabel: "Trading Technology",
        isCustomScope: true,
      },
    ],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  deliverable: string;
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Problem",
    shortDesc: "Audit current operational friction and identify the core bottleneck.",
    deliverable: "Operational Assessment & Friction Matrix",
    icon: "Search",
  },
  {
    number: "02",
    title: "Plan",
    shortDesc: "Design system architecture, database schema, and milestone scope.",
    deliverable: "Milestone Architecture Blueprint",
    icon: "Compass",
  },
  {
    number: "03",
    title: "Build",
    shortDesc: "Develop clean, high-performance web systems and automation pipelines.",
    deliverable: "Tested Production Software",
    icon: "Code2",
  },
  {
    number: "04",
    title: "Automate",
    shortDesc: "Connect webhooks, Apps Script, and automated notifications.",
    deliverable: "Active Automation Pipelines",
    icon: "Zap",
  },
  {
    number: "05",
    title: "Train",
    shortDesc: "Walk your team through recorded videos and step-by-step digital SOPs.",
    deliverable: "Digital SOPs & Training Video",
    icon: "GraduationCap",
  },
  {
    number: "06",
    title: "Support",
    shortDesc: "Maintain system health, security, and continuous workflow improvements.",
    deliverable: "SLA Support & Continuous Optimisation",
    icon: "Headphones",
  },
];

export const HOW_IT_WORKS_STEPS = PROCESS_STEPS;

export interface TrustPillar {
  title: string;
  desc: string;
  badge: string;
  icon: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Founder-Led Accountability",
    desc: "Direct systems architecture by Hemanth Ranam (MBA Univ of South Wales, CMI Level 7, ScaleNova Founder). No junior handoffs.",
    badge: "Direct Execution",
    icon: "UserCheck",
  },
  {
    title: "Zero Exaggerated Claims",
    desc: "Genuine engineering specifications only. No fabricated client counts, fake awards, or guaranteed profit promises.",
    badge: "100% Genuine",
    icon: "ShieldCheck",
  },
  {
    title: "Transparent Milestone Pricing",
    desc: "Affordable, fixed milestone rates in USD ($) with no hourly billing, surprise retainers, or hidden surcharges.",
    badge: "Predictable Cost",
    icon: "Tag",
  },
  {
    title: "100% Data Sovereignty",
    desc: "You own all code, databases, and assets completely. We use open platforms with zero proprietary vendor lock-in.",
    badge: "Full Ownership",
    icon: "Lock",
  },
  {
    title: "More Than a Handover",
    desc: "We don't build software and disappear. We train your staff, document processes, and provide ongoing improvements.",
    badge: "Continuous Support",
    icon: "HeartHandshake",
  },
  {
    title: "Fast & Responsive SLA",
    desc: "Guaranteed business-day response times, direct communication channels, and clear progress milestone tracking.",
    badge: "<24h Response",
    icon: "Clock",
  },
];

/* =========================================================================
   "WHAT WE SOLVE" SECTION DATA
   ========================================================================= */

export interface WhatWeSolveItem {
  id: string;
  question: string;
  problem: string;
  system: string;
  automation: string;
  result: string;
  icon: string;
}

export const WHAT_WE_SOLVE_ITEMS: WhatWeSolveItem[] = [
  {
    id: "slow",
    question: "WHAT IS SLOW?",
    problem: "Manual lead collection, delayed email replies, and multi-day deal onboarding.",
    system: "Website + Instant Lead Capture Engine",
    automation: "Sub-second Google Sheets sync & dual notification alerts.",
    result: "Enquiries answered within minutes, dramatically increasing conversions.",
    icon: "Clock",
  },
  {
    id: "manual",
    question: "WHAT IS MANUAL?",
    problem: "Copy-pasting data between spreadsheets, email clients, and billing portals.",
    system: "Google Apps Script & Serverless Webhook Pipeline",
    automation: "Automated trigger-action event routing across applications.",
    result: "Zero data-entry errors and 10+ hours saved per staff member weekly.",
    icon: "FileSpreadsheet",
  },
  {
    id: "disconnected",
    question: "WHAT IS DISCONNECTED?",
    problem: "Isolated team chat, unlinked customer records, and fragmented invoices.",
    system: "Frappe / ERPNext or Custom Business System",
    automation: "Unified database bridging CRM, Finance, Inventory & Operations.",
    result: "Single source of truth with instant cross-department visibility.",
    icon: "Network",
  },
  {
    id: "tracking",
    question: "WHAT IS HARD TO TRACK?",
    problem: "Unclear sales pipeline status, untracked customer issues, and hidden bottlenecks.",
    system: "Centralized Visual Kanban CRM & Ticketing",
    automation: "Automated status escalation and milestone progress alerts.",
    result: "Complete transparency across active deals and operational fulfillment.",
    icon: "Activity",
  },
  {
    id: "repeated",
    question: "WHAT IS REPEATED?",
    problem: "Sending the same onboarding emails, invoice PDFs, and payment reminders.",
    system: "Template Automation Engine",
    automation: "Scheduled batch triggers and automated PDF generation.",
    result: "Routine operations execute automatically in the background 24/7.",
    icon: "Repeat",
  },
  {
    id: "cost",
    question: "WHAT IS COSTING TIME?",
    problem: "'Everyone does it differently' because process knowledge is inside people's heads.",
    system: "Digital SOPs & Standardized Checklists",
    automation: "Step-by-step digital process gates and verification checklists.",
    result: "Rapid employee onboarding and consistent, repeatable execution.",
    icon: "FileText",
  },
];

/* =========================================================================
   REAL SYSTEM WORKFLOW VISUALS DATA
   ========================================================================= */

export interface SystemWorkflowVisual {
  id: string;
  title: string;
  category: string;
  steps: { label: string; icon: string; desc: string }[];
}

export const SYSTEM_WORKFLOW_VISUALS: SystemWorkflowVisual[] = [
  {
    id: "lead-flow",
    title: "Small Business Lead-to-Customer Pipeline",
    category: "Software & Web",
    steps: [
      { label: "Visitor", icon: "Users", desc: "Arrives on mobile-first website" },
      { label: "Lead Form", icon: "FileText", desc: "Submits validated enquiry" },
      { label: "Google Sheet", icon: "Database", desc: "Logged with Lead ID (HRPS-XXXX)" },
      { label: "Email Alert", icon: "Mail", desc: "Management & client alerted instantly" },
      { label: "Customer", icon: "CheckCircle2", desc: "Fast follow-up closes the deal" },
    ],
  },
  {
    id: "hr-flow",
    title: "Automated HR Operations Pipeline",
    category: "Business & Consulting",
    steps: [
      { label: "Employee", icon: "UserCheck", desc: "Submits leave / claim portal request" },
      { label: "Approval", icon: "CheckSquare", desc: "Manager reviews via 1-click notification" },
      { label: "Payroll Sync", icon: "BarChart3", desc: "Deduction auto-calculated in ledger" },
      { label: "HR Record", icon: "FileText", desc: "Permanent audit log updated automatically" },
    ],
  },
  {
    id: "erp-flow",
    title: "Connected ERP Operations Pipeline",
    category: "Business & Consulting",
    steps: [
      { label: "Sales Order", icon: "ShoppingBag", desc: "Customer order confirmed in CRM" },
      { label: "Inventory", icon: "Layers", desc: "Stock reserved & fulfillment dispatched" },
      { label: "Finance", icon: "CreditCard", desc: "Invoice auto-generated & ledger balanced" },
      { label: "Executive KPIs", icon: "Activity", desc: "Real-time dashboard reflection" },
    ],
  },
  {
    id: "trading-flow",
    title: "Trading Technology Execution Pipeline",
    category: "Trading Technology",
    steps: [
      { label: "Market Data", icon: "TrendingUp", desc: "Tick data streamed in real-time" },
      { label: "Scanner / Script", icon: "Search", desc: "28+ pairs scanned for confluence" },
      { label: "Signal Event", icon: "Zap", desc: "Rule-based non-repainting trigger" },
      { label: "Telegram Alert", icon: "Send", desc: "Sub-second formatted card broadcast" },
      { label: "Risk Execution", icon: "Shield", desc: "Automated trade with strict guardrails" },
    ],
  },
];

/* =========================================================================
   NEW COMMERCIAL CATEGORIES ARCHITECTURE
   ========================================================================= */

export interface CategoryServiceSummary {
  name: string;
  tagline: string;
  icon: string;
  slug: string;
}

export interface CoreCategory {
  id: string;
  categoryNumber: string;
  title: string;
  badge: string;
  tagline: string;
  problemStatement: string;
  description: string;
  icon: string;
  accentColor: string;
  services: CategoryServiceSummary[];
}

export const CORE_CATEGORIES: CoreCategory[] = [
  {
    id: "business-consulting",
    categoryNumber: "01",
    title: "Business & Consulting",
    badge: "Operations & Systems",
    tagline: "Understand the problem. Fix the process. Build the right system.",
    problemStatement: "I have tools, people and processes, but everything feels disconnected.",
    description: "Practical business systems advisory and open-source implementation that connect disconnected workflows, digitize SOPs, and automate repetitive administration.",
    icon: "Briefcase",
    accentColor: "blue",
    services: [
      { name: "Business Consultation", tagline: "60-min bottleneck audit and practical technology roadmap.", icon: "HelpCircle", slug: "business-consultation" },
      { name: "Process / Tech Audit", tagline: "Identify software duplication, manual work, and subscription waste.", icon: "Search", slug: "process-tech-audit" },
      { name: "Business Systems Consulting", tagline: "End-to-end architecture specification for connected operations.", icon: "Workflow", slug: "business-systems-consulting" },
      { name: "Frappe / ERPNext Systems Implementation", tagline: "Customized open-source business management with zero per-seat fees.", icon: "Layers", slug: "frappe-erpnext" },
      { name: "Website + Lead Capture + Basic CRM", tagline: "The entry system: capture every lead into Google Sheets with email alerts.", icon: "Mail", slug: "website-lead-capture-crm" },
      { name: "Business Apps Script Automations", tagline: "Connect tools, generate PDF invoices, and eliminate manual tasks.", icon: "Zap", slug: "apps-script-automation" },
      { name: "Documentation & SOPs", tagline: "Turn internal knowledge into repeatable digital execution and checklists.", icon: "FileText", slug: "documentation-sops" },
    ],
  },
  {
    id: "software-web",
    categoryNumber: "02",
    title: "Software & Web",
    badge: "Engineering & Cloud",
    tagline: "Build websites and business software that actually work together.",
    problemStatement: "We need websites and systems that generate business without enterprise bloat.",
    description: "High-performance websites and custom business software built on modern cloud architecture. Start simple with standard blueprints, scale to custom systems when needed.",
    icon: "Code2",
    accentColor: "indigo",
    services: [
      { name: "Website Basic → Premium", tagline: "Fast, responsive business landing pages and corporate websites.", icon: "Globe", slug: "websites" },
      { name: "Fully Automated & Secured Websites", tagline: "Websites with automated lead capture, CRM sync, and edge security.", icon: "ShieldCheck", slug: "websites" },
      { name: "Custom Business Systems", tagline: "Tailored CRM, Finance, HR, ERP, Booking & Operations software.", icon: "Cpu", slug: "custom-business-systems" },
    ],
  },
  {
    id: "trading-technology",
    categoryNumber: "03",
    title: "Trading Technology",
    badge: "Quant & Automation",
    tagline: "Build indicators, strategies, scanners, alerts and trading automation.",
    problemStatement: "We need precise rule-based charting tools and automated market alerts.",
    description: "Dedicated trading technology engineering. We develop custom TradingView indicators, Pine Script strategies, MT5 scanners, and Telegram alert systems with zero profit guarantees.",
    icon: "TrendingUp",
    accentColor: "emerald",
    services: [
      { name: "Standard TradingView Indicators", tagline: "Non-repainting rule-based indicators with clean visual signals.", icon: "TrendingUp", slug: "tradingview-indicators" },
      { name: "Custom TradingView Indicators", tagline: "Bespoke Pine Script v5 indicators reflecting your exact chart logic.", icon: "Code2", slug: "tradingview-indicators" },
      { name: "Standard TradingView Strategies", tagline: "Rule-based systematic backtesting scripts with realistic parameters.", icon: "Binary", slug: "tradingview-strategies" },
      { name: "Custom TradingView Strategies", tagline: "Advanced multi-condition entry/exit engines with session filters.", icon: "Cpu", slug: "tradingview-strategies" },
      { name: "MT5 Custom Scanner & Alert System", tagline: "Multi-symbol market scanner monitoring conditions across 28+ pairs.", icon: "Sliders", slug: "mt5-scanner-alerts" },
      { name: "MT5 Custom Auto-Trading System with Alerts", tagline: "Native MQL5 execution automation with strict equity risk rules.", icon: "Bot", slug: "mt5-auto-trading" },
      { name: "Custom Trading Alerts to Telegram Channel", tagline: "Sub-second webhook delivery of trade signals directly to Telegram.", icon: "Send", slug: "telegram-trading-alerts" },
    ],
  },
];

/* =========================================================================
   STANDARD VS CUSTOM ARCHITECTURE
   ========================================================================= */

export interface SystemModelComparison {
  title: string;
  badge: string;
  description: string;
  idealFor: string;
  points: string[];
  ctaText: string;
  ctaHref: string;
}

export const STANDARD_VS_CUSTOM: { standard: SystemModelComparison; custom: SystemModelComparison } = {
  standard: {
    title: "STANDARD",
    badge: "Affordable & Fast",
    description: "Ready-to-deploy software blueprints with predictable scope, proven architecture, and low upfront costs.",
    idealFor: "Startups and small businesses needing rapid operational capabilities without long development cycles.",
    points: [
      "Fast deployment (days, not months)",
      "Affordable milestone pricing in USD",
      "Ready, battle-tested structure",
      "Predictable scope with zero hourly billing",
      "Upgrade seamlessly to custom systems later",
    ],
    ctaText: "Explore Standard Systems",
    ctaHref: "#pricing",
  },
  custom: {
    title: "CUSTOM",
    badge: "Flexible & Integrated",
    description: "Tailored software and systems architecture engineered specifically around your company's unique operational rules.",
    idealFor: "Growing and established businesses requiring bespoke workflows, specialized CRM modules, or advanced trading technology.",
    points: [
      "100% tailored to your business rules",
      "Flexible multi-platform API & webhook integrations",
      "Advanced automation & role-based security",
      "Full source code ownership with zero licensing fees",
      "Dedicated technical support and ongoing optimization",
    ],
    ctaText: "Discuss Custom Architecture",
    ctaHref: "#contact",
  },
};

/* =========================================================================
   SUPPORT & TRAINING ARCHITECTURE (NO INVENTED PRICES)
   ========================================================================= */

export interface SupportTier {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  deliverables: string[];
  recommended?: boolean;
}

export const SUPPORT_AND_TRAINING_TIERS: SupportTier[] = [
  {
    id: "starter",
    name: "STARTER SUPPORT",
    badge: "Essential Systems Care",
    tagline: "For small businesses that need reliable basic support.",
    description: "Affordable ongoing peace-of-mind keeping your core website, lead forms, and basic webhooks healthy.",
    deliverables: [
      "Scheduled system health sweeps & uptime checks",
      "Form submission monitoring & spam mitigation",
      "Minor content, link, and configuration adjustments",
      "Standard email support with fast SLA response",
      "Cloudflare security & SSL certificate maintenance",
    ],
  },
  {
    id: "growth",
    name: "GROWTH SUPPORT",
    badge: "Continuous Improvement",
    tagline: "For businesses that need ongoing improvements and automation.",
    description: "Active system improvements, webhook adjustments, and continuous workflow automation as business scales.",
    deliverables: [
      "Everything in Starter Support",
      "Continuous automation monitoring & error recovery",
      "Google Apps Script & Zapier/Webhook updates",
      "Monthly allocation for feature & UI enhancements",
      "Priority messaging & email support channel",
      "Operational performance & analytics reviews",
    ],
    recommended: true,
  },
  {
    id: "systems",
    name: "SYSTEMS SUPPORT",
    badge: "Enterprise SLA",
    tagline: "For businesses with larger ongoing technology requirements.",
    description: "Dedicated systems engineering and training partner for complex CRM, ERPNext, and trading technology infrastructure.",
    deliverables: [
      "Everything in Growth Support",
      "ERPNext/Frappe server updates & database backups",
      "TradingView/MT5 webhook bridge reliability monitoring",
      "Dedicated development hours & team training sessions",
      "High-priority incident escalation SLA",
      "Direct technical consultation calls with systems architect",
    ],
  },
];

export const MONTHLY_SUPPORT_PLANS = SUPPORT_AND_TRAINING_TIERS;

/* =========================================================================
   SYSTEM LIFECYCLE ("MORE THAN A HANDOVER")
   ========================================================================= */

export interface LifecycleStage {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export const SYSTEM_LIFECYCLE: LifecycleStage[] = [
  { step: "01", title: "DISCOVER", desc: "Understand current operational bottlenecks, tools, and business objectives.", icon: "Search" },
  { step: "02", title: "BUILD", desc: "Construct clean, high-performance web systems and software without bloated code.", icon: "Code2" },
  { step: "03", title: "LAUNCH", desc: "Deploy with validated data pipelines, SSL security, and automated error logging.", icon: "Rocket" },
  { step: "04", title: "TRAIN", desc: "Walk your staff through hands-on video tutorials and digital SOP documentation.", icon: "GraduationCap" },
  { step: "05", title: "SUPPORT", desc: "Provide ongoing systems assistance and ensure software is never abandoned.", icon: "Headphones" },
  { step: "06", title: "IMPROVE", desc: "Refine user flows and features based on real operational feedback.", icon: "TrendingUp" },
  { step: "07", title: "AUTOMATE", desc: "Layer intelligent automation to eliminate repetitive manual work as you grow.", icon: "Zap" },
];

/* =========================================================================
   FAQ ITEMS
   ========================================================================= */

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do you build custom systems?",
    answer: "Yes. In addition to our affordable standard blueprints, we engineer fully custom business systems, bespoke portals, API middleware, and proprietary database architectures tailored to your specific business logic.",
  },
  {
    question: "Can you integrate with our existing software?",
    answer: "Yes. We routinely bridge modern web applications with existing tools—including legacy databases, ERPNext, Frappe, Google Sheets, WhatsApp, Telegram, Stripe, and third-party REST APIs.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. Our core principle is 'More Than a Handover.' We don't simply build your system and leave. We provide ongoing support, bug fixes, and continuous improvements through flexible support tiers.",
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes. Every project handover includes concise, step-by-step documentation and live or recorded video walkthroughs so your team can confidently use and manage the system from day one.",
  },
  {
    question: "Can small businesses use your services?",
    answer: "Definitely. Our core positioning is 'Small Price. Big Work.' We designed our offerings so small businesses can get professional websites, lead capture pipelines, and automated Google Sheets backends without enterprise agency costs.",
  },
  {
    question: "Do you provide monthly support?",
    answer: "Yes. We provide ongoing support across three tiers: Starter, Growth, and Systems Support. These are configured per project scope so your system is actively maintained and improved over time.",
  },
  {
    question: "Can you automate our existing workflows?",
    answer: "Yes. We specialize in eliminating manual spreadsheet copying, invoice generation, and delayed client follow-ups by implementing automated trigger-action pipelines across webhooks, Google Apps Script, and cloud servers.",
  },
  {
    question: "Do you work with Frappe and ERPNext?",
    answer: "Yes. We deploy, customize, and configure Frappe Framework and ERPNext instances, including custom DocTypes, transaction workflows, role-based security, and REST API integrations.",
  },
  {
    question: "Can you build trading technology?",
    answer: "Yes. We engineer TradingView indicators, Pine Script v5 strategies, MT5 market screeners, and automated alert systems to Telegram channels. We focus strictly on technical engineering and automation with zero financial return guarantees.",
  },
  {
    question: "Can websites connect to Google Sheets?",
    answer: "Yes. Our entry-level Website + Lead Capture + Basic CRM architecture connects your contact forms directly to Google Sheets via Google Apps Script with automated email alerts, giving you a powerful, zero-cost CRM.",
  },
  {
    question: "Can you customize standard systems?",
    answer: "Yes. You can start small with an affordable standard system and seamlessly customize and expand it with custom CRM modules or automated integrations as your business scales.",
  },
];

/* =========================================================================
   DEDICATED SERVICE SUBPAGES DATA (ALL 14 SERVICES)
   ========================================================================= */

export interface ServiceSubpageData {
  slug: string;
  name: string;
  category: string;
  categoryKey: "business" | "software" | "trading";
  badge: string;
  icon: string;
  shortStatement: string;
  shortDescription?: string;
  whatItSolves?: string[];
  whatWeDo?: string[];
  whatsIncluded?: string[];
  workflow?: { step: string; label: string; desc: string }[];
  deliverables?: string[];
  benefits?: string[];
  problem: {
    title: string;
    statement: string;
    bullets: string[];
  };
  solution: {
    title: string;
    statement: string;
    bullets: string[];
  };
  howItWorks: { step: string; label: string; desc: string }[];
  whatWeBuild: { title: string; desc: string; icon: string }[];
  visualWorkflow: { from: string; to: string; label: string }[];
  whatYouGet: string[];
  whoItsFor: { tier: string; desc: string }[];
  standardVsCustom: {
    standard: string[];
    custom: string[];
  };
  supportAndTraining: string[];
  faqs: { q: string; a: string }[];
  relatedPricingPlan?: string;
  defaultPrice?: string;
}

export const DEDICATED_SERVICES: ServiceSubpageData[] = [
  // 1. Business Consultation
  {
    slug: "business-consultation",
    name: "Business Consultation",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Strategy & Assessment",
    icon: "HelpCircle",
    shortStatement: "1-on-1 strategic session to audit operational bottlenecks and map practical solutions.",
    problem: {
      title: "Disconnected Operations & Unclear Roadmaps",
      statement: "I have tools, people and processes, but everything feels disconnected.",
      bullets: [
        "Unclear which software to keep, replace, or automate",
        "Team spending hours daily on manual data re-entry",
        "Overwhelmed by vendor sales pitches and enterprise costs",
      ],
    },
    solution: {
      title: "Pragmatic Technology Roadmap",
      statement: "Review current operations and create an actionable, high-ROI technology blueprint.",
      bullets: [
        "60-minute deep-dive architecture consultation with systems founder",
        "Direct identification of operational bottlenecks and manual drag",
        "Clear step-by-step roadmap prioritizing high-impact improvements",
      ],
    },
    howItWorks: [
      { step: "01", label: "Intake", desc: "Share your current tools, team structure, and primary bottlenecks." },
      { step: "02", label: "Session", desc: "60-minute live deep-dive diagnosing system disconnects." },
      { step: "03", label: "Roadmap", desc: "Receive written architecture action plan with clear platform choices." },
      { step: "04", label: "Next Steps", desc: "Decide whether to execute internally or engage our milestone build." },
    ],
    whatWeBuild: [
      { title: "Operational Assessment", desc: "Clear breakdown of bottlenecks and friction points.", icon: "Search" },
      { title: "Tool Stack Matrix", desc: "Evaluation of active software and redundant costs.", icon: "Layers" },
      { title: "Action Roadmap", desc: "Step-by-step implementation blueprint with ROI priority.", icon: "Compass" },
    ],
    visualWorkflow: [
      { from: "Current Process", to: "Audit Call", label: "Deep-Dive" },
      { from: "Audit Call", to: "Bottlenecks", label: "Diagnosis" },
      { from: "Bottlenecks", to: "Solutions", label: "Architecture" },
      { from: "Solutions", to: "Action Plan", label: "Execution" },
    ],
    whatYouGet: [
      "60-minute live video consultation with recording",
      "Written Operational Assessment & Bottleneck Matrix",
      "Prioritized Technology Action Roadmap",
      "7 days of follow-up email Q&A support",
    ],
    whoItsFor: [
      { tier: "Small Business", desc: "Founders needing clarity before investing in expensive software." },
      { tier: "Growing Business", desc: "Teams struggling with fragmented data across multiple apps." },
      { tier: "Established Business", desc: "Leaders seeking unbiased technology and platform advice." },
    ],
    standardVsCustom: {
      standard: ["Fixed 60-minute strategic scope", "Proven assessment methodology", "Transparent $35 USD milestone rate"],
      custom: ["Follow-on bespoke systems engineering", "Tailored database architecture design", "Custom integration specification"],
    },
    supportAndTraining: [
      "Recorded video copy of your consultation session",
      "Written executive summary of recommendations",
      "Direct email access for follow-up roadmap questions",
    ],
    faqs: [
      { q: "What should I prepare before the call?", a: "A list of software subscriptions you use and 2-3 biggest operational bottlenecks." },
      { q: "Do you push specific proprietary software?", a: "No. We evaluate open-source, standard, and custom options based strictly on what's best for your business." },
    ],
    relatedPricingPlan: "Business Consultation",
    defaultPrice: "$35 USD",
  },

  // 2. Process / Tech Audit
  {
    slug: "process-tech-audit",
    name: "Process / Tech Audit",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Efficiency & Cost Reduction",
    icon: "Search",
    shortStatement: "Comprehensive review of existing software, subscriptions, and team friction.",
    problem: {
      title: "Software Bloat & Redundant Costs",
      statement: "Too many tools. Too much manual work. Too little visibility.",
      bullets: [
        "Paying for overlapping software subscriptions with low utilization",
        "Staff manually copying data from one tool to another daily",
        "Zero central visibility into tool performance and true operational costs",
      ],
    },
    solution: {
      title: "Technology Environment Audit",
      statement: "Audit the existing tech stack, identify duplication, and deliver an optimization blueprint.",
      bullets: [
        "Line-by-line inventory of all software tools, seats, and costs",
        "Mapping of manual data-entry steps that can be eliminated",
        "Formal PDF audit report with software consolidation roadmap",
      ],
    },
    howItWorks: [
      { step: "01", label: "Data Ingestion", desc: "Submit current software list, billing receipts, and workflow descriptions." },
      { step: "02", label: "Analysis", desc: "We map tool overlaps, manual handoffs, and data leaks." },
      { step: "03", label: "Blueprint", desc: "Deliver formal PDF audit report with prioritized recommendations." },
      { step: "04", label: "Debrief", desc: "30-minute walkthrough call reviewing findings and next steps." },
    ],
    whatWeBuild: [
      { title: "Software Cost Matrix", desc: "Detailed breakdown of current SaaS spend and redundancies.", icon: "BarChart3" },
      { title: "Process Friction Map", desc: "Visual diagram of manual handoffs costing team time.", icon: "Workflow" },
      { title: "Consolidation Blueprint", desc: "Actionable plan to eliminate tools and save $100s monthly.", icon: "FileText" },
    ],
    visualWorkflow: [
      { from: "Current Tools", to: "Audit Analysis", label: "Review" },
      { from: "Audit Analysis", to: "Duplication", label: "Isolate" },
      { from: "Duplication", to: "Manual Work", label: "Identify" },
      { from: "Manual Work", to: "Blueprint", label: "Optimize" },
    ],
    whatYouGet: [
      "Comprehensive Software Inventory & Spend Audit",
      "Process Bottleneck & Manual Friction Map",
      "Formal PDF Optimization Blueprint",
      "30-minute debrief call explaining recommendations",
    ],
    whoItsFor: [
      { tier: "Small Business", desc: "Businesses wanting to eliminate $100s in forgotten software subscriptions." },
      { tier: "Growing Business", desc: "Teams frustrated by disconnected apps and repeated data entry." },
    ],
    standardVsCustom: {
      standard: ["Fixed 5-day audit timeline", "Comprehensive PDF report", "Transparent $59 USD milestone rate"],
      custom: ["In-depth multi-department workflow mapping", "Direct vendor contract renegotiation advisory"],
    },
    supportAndTraining: [
      "Detailed step-by-step tool cancellation and data export checklist",
      "14 days of post-audit email support for clarification",
    ],
    faqs: [
      { q: "Do you need password access to our software?", a: "No. A list of active tools, invoices, and workflow descriptions is all that is required." },
      { q: "How much money does this typically save?", a: "Most companies uncover $100 to $400/month in redundant subscriptions." },
    ],
    relatedPricingPlan: "Process / Tech Audit",
    defaultPrice: "$59 USD",
  },

  // 3. Business Systems Consulting
  {
    slug: "business-systems-consulting",
    name: "Business Systems Consulting",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Architecture & Systems Design",
    icon: "Workflow",
    shortStatement: "End-to-end architecture specification for connected business operations.",
    problem: {
      title: "Uncoordinated Growth & Data Silos",
      statement: "Fragmented software and manual operations leading to costly delays.",
      bullets: [
        "Unclear how different company tools should share data",
        "Discussions about software lack technical architecture and database schemas",
        "Team members reinventing workflows because systems aren't connected",
      ],
    },
    solution: {
      title: "Connected Systems Architecture",
      statement: "Design unified digital operating systems connecting web, CRM, operations, finance, and HR.",
      bullets: [
        "Full digital workflow & database schema specification",
        "Standard operating procedure (SOP) digital mapping",
        "Platform and vendor selection advisory with clear specifications",
      ],
    },
    howItWorks: [
      { step: "01", label: "Discovery", desc: "Review complete operational lifecycle from inquiry to delivery." },
      { step: "02", label: "Schema Design", desc: "Architect data relationships, entities, and flow boundaries." },
      { step: "03", label: "SOP Mapping", desc: "Document step-by-step digital processes for each team role." },
      { step: "04", label: "Specification", desc: "Deliver full architecture document ready for build." },
    ],
    whatWeBuild: [
      { title: "Systems Architecture", desc: "Complete visual diagram of connected business tools.", icon: "Network" },
      { title: "Database Schema", desc: "Entity relationships, field definitions, and validation rules.", icon: "Database" },
      { title: "Digital SOP Spec", desc: "Role-by-role execution guides embedded into system flows.", icon: "FileText" },
    ],
    visualWorkflow: [
      { from: "Website", to: "Lead Capture", label: "Traffic" },
      { from: "Lead Capture", to: "CRM Engine", label: "Ingestion" },
      { from: "CRM Engine", to: "Operations", label: "Fulfillment" },
      { from: "Operations", to: "Finance & HR", label: "Reports" },
    ],
    whatYouGet: [
      "Complete Systems Architecture Specification Document",
      "Entity Relationship & Database Schema Spec",
      "Digital Standard Operating Procedure (SOP) Map",
      "Vendor & Technology Selection Evaluation",
    ],
    whoItsFor: [
      { tier: "Growing Business", desc: "Companies transitioning from spreadsheets to structured systems." },
      { tier: "Established Business", desc: "Organizations planning major software builds who need clear specs first." },
    ],
    standardVsCustom: {
      standard: ["Proven connected business architecture", "Standardized database patterns", "Transparent $75 USD milestone rate"],
      custom: ["Multi-branch database modeling", "Specialized compliance and regulatory requirements"],
    },
    supportAndTraining: [
      "Walkthrough session explaining technical blueprints to management",
      "14 days of technical guidance for your developers or contractors",
    ],
    faqs: [
      { q: "Does this include building the software?", a: "This produces the complete blueprint. Implementation can be added via our CRM/ERP or automation milestones." },
    ],
    relatedPricingPlan: "Business Systems Consulting",
    defaultPrice: "$75 USD",
  },

  // 4. Frappe / ERPNext Systems Implementation
  {
    slug: "frappe-erpnext",
    name: "Frappe / ERPNext Systems Implementation",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Open-Source ERP",
    icon: "Layers",
    shortStatement: "Customized Frappe & ERPNext business management system deployment.",
    problem: {
      title: "Crippling Per-Seat License Fees",
      statement: "Enterprise ERP solutions like Salesforce and SAP cost thousands in monthly user fees.",
      bullets: [
        "Paying per-user licensing prevents team-wide software adoption",
        "Disconnected CRM, inventory, and accounting software causing reconciliation errors",
        "Inability to customize software without expensive vendor consultants",
      ],
    },
    solution: {
      title: "Zero-Seat-Fee Open-Source ERP",
      statement: "Deploy tailored Frappe & ERPNext systems uniting CRM, accounting, inventory, and HR.",
      bullets: [
        "100% open-source with zero per-user recurring license fees",
        "Custom DocTypes, transaction workflows, and role permissions",
        "Data migration, configuration, and team onboarding walkthrough",
      ],
    },
    howItWorks: [
      { step: "01", label: "Scoping", desc: "Map your company workflows into ERPNext modules." },
      { step: "02", label: "Configure", desc: "Setup chart of accounts, CRM pipelines, and custom fields." },
      { step: "03", label: "Migrate", desc: "Import existing customer, vendor, and product spreadsheets." },
      { step: "04", label: "Launch & Train", desc: "Live team walkthrough and step-by-step recorded tutorials." },
    ],
    whatWeBuild: [
      { title: "Frappe/ERPNext Setup", desc: "Fully configured cloud or self-hosted business management hub.", icon: "Layers" },
      { title: "Tailored DocTypes", desc: "Custom fields, validation rules, and automated status triggers.", icon: "Code2" },
      { title: "Team Permissions", desc: "Role-based access ensuring staff only see what they need.", icon: "ShieldCheck" },
    ],
    visualWorkflow: [
      { from: "CRM Deals", to: "Sales Order", label: "Convert" },
      { from: "Sales Order", to: "Stock Allocation", label: "Fulfill" },
      { from: "Stock Allocation", to: "Invoice & Ledger", label: "Bill" },
      { from: "Invoice & Ledger", to: "P&L Report", label: "Balance" },
    ],
    whatYouGet: [
      "Configured Frappe / ERPNext instance ready for production",
      "Custom DocTypes and transaction workflow hooks",
      "Historical data migration (customers, items, accounting)",
      "Team video walkthrough and digital SOP documentation",
      "30 days of post-launch configuration support",
    ],
    whoItsFor: [
      { tier: "Growing Business", desc: "Companies outgrowing basic invoicing tools and disjointed spreadsheets." },
      { tier: "Medium Enterprise", desc: "Organizations needing full inventory, procurement, and HR under one roof." },
    ],
    standardVsCustom: {
      standard: ["Core CRM, Invoicing, and Stock modules", "Standard role permissions", "Transparent $369 USD milestone rate"],
      custom: ["Bespoke Frappe apps", "Multi-company consolidation", "Complex manufacturing BOMs"],
    },
    supportAndTraining: [
      "Recorded video walkthroughs covering daily operations",
      "Digital SOP documentation tailored to your company setup",
      "30 days of technical configuration adjustments",
    ],
    faqs: [
      { q: "Are there any recurring license fees?", a: "No. Frappe and ERPNext are 100% open source. You only pay for standard server hosting." },
      { q: "Can we connect our website lead forms to ERPNext?", a: "Yes. We integrate REST APIs and webhooks directly to capture leads automatically." },
    ],
    relatedPricingPlan: "CRM / ERP Implementation",
    defaultPrice: "$369 USD",
  },

  // 5. Website + Lead Capture + Basic CRM
  {
    slug: "website-lead-capture-crm",
    name: "Website + Lead Capture + Basic CRM",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Entry System",
    icon: "Mail",
    shortStatement: "The entry system: capture every lead into Google Sheets with email alerts.",
    problem: {
      title: "Lost Enquiries & Slow Follow-Ups",
      statement: "Small businesses lose 50%+ of potential customers due to slow follow-up and lost emails.",
      bullets: [
        "Inquiries buried in disorganized email inboxes",
        "No centralized record of who contacted you and when",
        "Traditional CRM software is too expensive and complicated for day one",
      ],
    },
    solution: {
      title: "Simple, Automated Lead Pipeline",
      statement: "A practical entry system combining responsive web design, Google Sheets CRM, and instant alerts.",
      bullets: [
        "Fast, mobile-first website with conversion-focused lead form",
        "Google Sheets backend tracking 15 fields with unique Lead IDs",
        "Instant dual email alerts (management dossier + customer receipt)",
      ],
    },
    howItWorks: [
      { step: "01", label: "Visitor", desc: "Client arrives on your fast, mobile-friendly landing page." },
      { step: "02", label: "Submission", desc: "Enquiry submitted with honeypot spam protection." },
      { step: "03", label: "Google Sheet", desc: "Data saved automatically with unique ID (HRPS-YYYYMMDD-XXXX)." },
      { step: "04", label: "Alert & Reply", desc: "You receive full details via email; customer receives instant receipt." },
    ],
    whatWeBuild: [
      { title: "Lead Form System", desc: "Validated submission form with spam prevention.", icon: "FileText" },
      { title: "Google Sheet CRM", desc: "Organized 15-column pipeline with status tracking.", icon: "Database" },
      { title: "Apps Script Engine", desc: "Serverless code handling storage and email dispatches.", icon: "Zap" },
    ],
    visualWorkflow: [
      { from: "Website Visitor", to: "Lead Form", label: "Enquire" },
      { from: "Lead Form", to: "Google Sheet", label: "Save HRPS-ID" },
      { from: "Google Sheet", to: "Email Alert", label: "Notify" },
      { from: "Email Alert", to: "Customer", label: "Close Deal" },
    ],
    whatYouGet: [
      "Responsive, conversion-focused website lead form",
      "Configured Google Sheet with 15 canonical columns",
      "Production Google Apps Script (Code.gs) webhook backend",
      "Dual email notification templates with Lead ID tracking",
    ],
    whoItsFor: [
      { tier: "Small Business", desc: "Startups and service providers needing an affordable, rock-solid lead system." },
      { tier: "Consultants", desc: "Professionals who want every client inquiry safely tracked without paid CRM tools." },
    ],
    standardVsCustom: {
      standard: ["15-column Google Sheets schema", "Pre-built dual email triggers", "Milestone-based delivery"],
      custom: ["WhatsApp notifications", "Multi-stage pipeline routing", "Integration with payment gateways"],
    },
    supportAndTraining: [
      "Video walkthrough demonstrating how to manage leads in Google Sheets",
      "Setup guide for managing Lead Statuses (New, Contacted, Converted)",
    ],
    faqs: [
      { q: "Do I have to pay monthly fees for Google Sheets?", a: "No. Google Sheets and Google Apps Script are completely free with any Google account." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 6. Business Apps Script Automations
  {
    slug: "apps-script-automation",
    name: "Business Apps Script Automations",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Serverless Automation",
    icon: "Zap",
    shortStatement: "Connect tools, generate PDF invoices, and eliminate manual tasks.",
    problem: {
      title: "Repetitive Copy-Pasting & Manual Tasks",
      statement: "Teams wasting valuable hours daily creating documents, sending emails, and moving rows.",
      bullets: [
        "Manually typing invoices and customer confirmation emails",
        "Data stuck in forms without automated routing to team members",
        "Expensive Zapier/Make subscription bills that increase as you grow",
      ],
    },
    solution: {
      title: "Serverless Google Apps Script",
      statement: "Custom automation layer built on Google Apps Script and native webhooks with zero subscription fees.",
      bullets: [
        "Automated multi-step pipelines connecting web forms, Sheets, and Gmail",
        "Automatic PDF invoice and contract generation from spreadsheet triggers",
        "Data validation, error logging, and failure recovery logic",
      ],
    },
    howItWorks: [
      { step: "01", label: "Trigger", desc: "Identify event (form submit, spreadsheet change, scheduled timer)." },
      { step: "02", label: "Process", desc: "Apps Script cleanses, validates, and transforms the payload." },
      { step: "03", label: "Action", desc: "Writes to Sheets, creates Docs/PDFs, and sends emails." },
      { step: "04", label: "Notify", desc: "Alerts team channel or management inbox with execution confirmation." },
    ],
    whatWeBuild: [
      { title: "Custom Code.gs", desc: "Clean, documented Apps Script backend tailored to your tools.", icon: "Code2" },
      { title: "PDF Generators", desc: "Automated invoice and report generation from Sheet templates.", icon: "FileText" },
      { title: "Webhook Bridges", desc: "Serverless listeners receiving data from external software.", icon: "Zap" },
    ],
    visualWorkflow: [
      { from: "Form Submission", to: "Apps Script", label: "Trigger" },
      { from: "Apps Script", to: "Google Sheet", label: "Append Row" },
      { from: "Google Sheet", to: "PDF Generator", label: "Create Doc" },
      { from: "PDF Generator", to: "Client Email", label: "Dispatch" },
    ],
    whatYouGet: [
      "Production Google Apps Script source code",
      "Configured trigger triggers (onFormSubmit, onEdit, time-driven)",
      "Error handling and failure notification alerts",
      "Administrator documentation and deployment runbook",
    ],
    whoItsFor: [
      { tier: "Small Business", desc: "Companies wanting to automate without expensive monthly SaaS fees." },
      { tier: "Operations Teams", desc: "Staff tired of generating manual PDF quotes and email updates." },
    ],
    standardVsCustom: {
      standard: ["Up to 3-step automation pipeline", "Email & Sheet triggers", "Transparent $109 USD milestone rate"],
      custom: ["Multi-system webhook orchestration", "Custom API authentications", "Complex data transformation"],
    },
    supportAndTraining: [
      "Video walkthrough on how to view execution logs and manage triggers",
      "30 days of post-deployment error monitoring and bug fixes",
    ],
    faqs: [
      { q: "Are there any monthly fees for Apps Script?", a: "No. Google Apps Script runs entirely inside Google Cloud at no charge for standard business volume." },
    ],
    relatedPricingPlan: "Workflow Automation",
    defaultPrice: "$109 USD",
  },

  // 7. Documentation & SOPs
  {
    slug: "documentation-sops",
    name: "Documentation & SOPs",
    category: "Business & Consulting",
    categoryKey: "business",
    badge: "Process Standardization",
    icon: "FileText",
    shortStatement: "Turn internal knowledge into repeatable digital execution and checklists.",
    problem: {
      title: "'Everyone Does It Differently'",
      statement: "Knowledge is locked in key individuals' heads, causing operational errors whenever they are absent.",
      bullets: [
        "Inconsistent quality and service delivery across team members",
        "New employee onboarding takes weeks of hand-holding",
        "No written standard operating procedures or verification checklists",
      ],
    },
    solution: {
      title: "Repeatable Digital Execution",
      statement: "Document company processes into clear, step-by-step digital SOPs, checklists, and workflows.",
      bullets: [
        "Structured standard operating procedures for daily operations",
        "Digital checklists embedded directly into software workflows",
        "Clear accountability: 'Before: Everyone does it differently → After: Everyone follows the same process'",
      ],
    },
    howItWorks: [
      { step: "01", label: "Knowledge", desc: "Interview key team members and observe operational routines." },
      { step: "02", label: "Process", desc: "Map sequential milestones, dependencies, and quality checks." },
      { step: "03", label: "Digital SOP", desc: "Write concise, illustrated standard operating procedure guides." },
      { step: "04", label: "Checklists", desc: "Embed digital checklists and tracking verification for daily use." },
    ],
    whatWeBuild: [
      { title: "Standard Operating Procedures", desc: "Structured, illustrated procedure documentation.", icon: "FileText" },
      { title: "Digital Checklists", desc: "Step-by-step task verification templates.", icon: "CheckSquare" },
      { title: "Role Handbooks", desc: "Clear responsibility matrices and task handoffs.", icon: "Users" },
    ],
    visualWorkflow: [
      { from: "Knowledge", to: "Process", label: "Structure" },
      { from: "Process", to: "Digital SOP", label: "Document" },
      { from: "Digital SOP", to: "Checklist", label: "Standardize" },
      { from: "Checklist", to: "Tracking", label: "Repeat" },
    ],
    whatYouGet: [
      "Standard Operating Procedure (SOP) documentation manual",
      "Digital verification checklists for team execution",
      "Process flow diagrams for training new employees",
      "Editable Google Docs / Markdown templates",
    ],
    whoItsFor: [
      { tier: "Small Business", desc: "Founders seeking to delegate daily tasks without losing quality." },
      { tier: "Growing Teams", desc: "Companies onboarding multiple staff members who need clear guidelines." },
    ],
    standardVsCustom: {
      standard: ["Core operational SOPs (Lead handling, fulfillment, invoicing)", "Standard checklist templates"],
      custom: ["Comprehensive departmental manuals", "Compliance & regulatory procedures"],
    },
    supportAndTraining: [
      "Team review call walking staff through new standard operating procedures",
      "Quarterly template review guidance",
    ],
    faqs: [
      { q: "How long does it take to document our SOPs?", a: "Core operational SOPs are typically documented and delivered within 5–7 business days." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 8. Websites (Basic -> Premium & Automated)
  {
    slug: "websites",
    name: "Business Websites (Basic → Premium)",
    category: "Software & Web",
    categoryKey: "software",
    badge: "Web Engineering",
    icon: "Globe",
    shortStatement: "Fast, responsive business landing pages and corporate websites that convert.",
    problem: {
      title: "Slow, Outdated Websites That Don't Convert",
      statement: "Most business websites look pretty but load slowly, fail on mobile, and lose leads.",
      bullets: [
        "Cluttered templates with poor mobile responsiveness",
        "Slow load speeds hurting Google SEO rankings and visitor trust",
        "No automated lead capture or integration with business operations",
      ],
    },
    solution: {
      title: "Modern, Conversion-Focused Web Architecture",
      statement: "High-performance websites built on Next.js, mobile-first design, and built-in lead automation.",
      bullets: [
        "Basic to Premium: from single-page landing engines to corporate websites",
        "100/100 performance optimization with sub-second page loads",
        "Automated lead capture syncing directly with Google Sheets and email alerts",
      ],
    },
    howItWorks: [
      { step: "01", label: "Design", desc: "Select structure: Basic landing page or Premium multi-section website." },
      { step: "02", label: "Develop", desc: "Engineer with clean Next.js, mobile-first styling, and SEO tags." },
      { step: "03", label: "Integrate", desc: "Wire lead forms to Google Sheets CRM and notification webhooks." },
      { step: "04", label: "Deploy", desc: "Launch on global edge CDN with automated SSL and backups." },
    ],
    whatWeBuild: [
      { title: "Mobile-First UI", desc: "Flawless layout across smartphones, tablets, and desktop displays.", icon: "Smartphone" },
      { title: "SEO Foundations", desc: "Structured data, OpenGraph, sitemaps, and semantic headings.", icon: "Search" },
      { title: "Lead Engine", desc: "Built-in form validation, honeypot protection, and CRM sync.", icon: "Mail" },
    ],
    visualWorkflow: [
      { from: "Visitor", to: "Landing Page", label: "Browse" },
      { from: "Landing Page", to: "Lead Capture", label: "Engage" },
      { from: "Lead Capture", to: "Google Sheet", label: "Log" },
      { from: "Google Sheet", to: "Notification", label: "Follow Up" },
    ],
    whatYouGet: [
      "Production Next.js website with full source code",
      "Mobile-optimized responsive layouts tested across 320px–1920px",
      "Configured lead capture connected to Google Sheets",
      "Technical SEO configuration (sitemap.xml, robots.txt, metadata)",
    ],
    whoItsFor: [
      { tier: "Basic Website", desc: "Affordable starting point for startups needing instant online credibility." },
      { tier: "Premium Website", desc: "Corporate sites with advanced animations, service subpages, and conversion UX." },
    ],
    standardVsCustom: {
      standard: ["Single-page conversion landing page", "Fast deployment", "Affordable milestone pricing"],
      custom: ["Multi-page corporate website", "Custom CMS & blog modules", "Advanced 3D interactions"],
    },
    supportAndTraining: [
      "Video walkthrough on how to update content and review incoming leads",
      "30 days of post-launch technical support and maintenance",
    ],
    faqs: [
      { q: "Can I upgrade my Basic website to a Premium system later?", a: "Yes. Our code architecture is modular, so you can expand anytime without rebuilding." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 9. Custom Business Systems
  {
    slug: "custom-business-systems",
    name: "Custom Business Systems",
    category: "Software & Web",
    categoryKey: "software",
    badge: "Tailored Software",
    icon: "Cpu",
    shortStatement: "Tailored CRM, Finance, HR, ERP, Booking & Operations software.",
    problem: {
      title: "Outgrowing Generic SaaS Tools",
      statement: "Generic off-the-shelf software forces your business to adapt to its rigid limitations.",
      bullets: [
        "Paying high monthly subscriptions for software full of unused features",
        "Critical business logic cannot be handled by off-the-shelf apps",
        "Staff wasting time maintaining separate tools that don't speak to each other",
      ],
    },
    solution: {
      title: "Tailored Business Software",
      statement: "Build only what the business needs: standard where possible, custom where necessary.",
      bullets: [
        "Modular architecture: CRM, Finance, HR, ERP, Booking, Operations, Reports",
        "Relational database design tailored to your specific transaction lifecycle",
        "Full intellectual property ownership with zero recurring per-user fees",
      ],
    },
    howItWorks: [
      { step: "01", label: "Scope", desc: "Identify exact modules needed: CRM, Booking, HR, or Finance." },
      { step: "02", label: "Architect", desc: "Design database relationships and role-based access rules." },
      { step: "03", label: "Engineer", desc: "Build full-stack cloud system with TypeScript and Next.js." },
      { step: "04", label: "Launch", desc: "Deploy with automated backups, monitoring, and team training." },
    ],
    whatWeBuild: [
      { title: "Custom CRM & Deals", desc: "Track opportunities, customer records, and milestones.", icon: "Users" },
      { title: "Finance & Invoicing", desc: "Automated quotes, payment tracking, and ledger balancing.", icon: "BarChart3" },
      { title: "Operations & Booking", desc: "Automated appointment scheduling, project fulfillment, and alerts.", icon: "Clock" },
    ],
    visualWorkflow: [
      { from: "CRM", to: "Operations", label: "Fulfill" },
      { from: "Operations", to: "Finance", label: "Bill" },
      { from: "Finance", to: "HR & Payroll", label: "Balance" },
      { from: "HR & Payroll", to: "Executive Reports", label: "Analyze" },
    ],
    whatYouGet: [
      "Complete custom web application with source code ownership",
      "Relational database schema and migration scripts",
      "Role-based authentication (Admin, Manager, Staff)",
      "Recorded video training tutorials and operational runbooks",
    ],
    whoItsFor: [
      { tier: "Growing Business", desc: "Companies needing unified systems without enterprise agency cost." },
      { tier: "Established Business", desc: "Operations with unique proprietary workflows that generic SaaS cannot solve." },
    ],
    standardVsCustom: {
      standard: ["Pre-built module blueprints (CRM, Invoicing, Bookings)", "Low initial cost"],
      custom: ["Bespoke transaction logic", "Custom legacy database bridges", "Tailored reporting dashboards"],
    },
    supportAndTraining: [
      "Comprehensive admin and staff walkthrough sessions",
      "Ongoing monthly support tiers covering new features and continuous improvements",
    ],
    faqs: [
      { q: "Do we own the source code?", a: "Yes. You own 100% of the intellectual property and code upon project completion." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 10. Standard & Custom TradingView Indicators
  {
    slug: "tradingview-indicators",
    name: "TradingView Indicators (Standard & Custom)",
    category: "Trading Technology",
    categoryKey: "trading",
    badge: "Pine Script v5",
    icon: "TrendingUp",
    shortStatement: "Clean, non-repainting technical indicators with visual chart signals.",
    problem: {
      title: "Repainting & Unreliable Chart Indicators",
      statement: "Public indicators often repaint, lag, or fail to trigger clean alerts when conditions occur.",
      bullets: [
        "Repainting indicators that show false historical perfection",
        "Inability to combine multiple conditions into a single clean visual signal",
        "Cluttered charts with too many lines instead of clear execution zones",
      ],
    },
    solution: {
      title: "100% Non-Repainting Pine Script v5",
      statement: "Engineered Pine Script v5 indicators reflecting your exact chart rules with zero lag.",
      bullets: [
        "Strict non-repainting calculation logic adhering to confirmed candle closes",
        "Visual dashboard with customizable inputs and clean on-chart plots",
        "Built-in webhook alert triggers formatted for automation",
      ],
    },
    howItWorks: [
      { step: "01", label: "Rules", desc: "Provide your indicators, timeframe, parameters, and entry/exit criteria." },
      { step: "02", label: "Code", desc: "We write clean, efficient Pine Script v5 code." },
      { step: "03", label: "Verify", desc: "Test across historical charts to ensure zero repainting and clean signals." },
      { step: "04", label: "Handoff", desc: "Deliver open-source script with installation guide and alert setup." },
    ],
    whatWeBuild: [
      { title: "Non-Repainting Logic", desc: "Calculations fixed strictly on candle close.", icon: "ShieldCheck" },
      { title: "Visual Dashboard", desc: "On-chart summary table showing trend, momentum, and volume.", icon: "Activity" },
      { title: "Alert Triggers", desc: "Custom alert messages formatted for webhooks or Telegram.", icon: "Send" },
    ],
    visualWorkflow: [
      { from: "Market Data", to: "Indicator Logic", label: "Calculate" },
      { from: "Indicator Logic", to: "Signal Event", label: "Confirm" },
      { from: "Signal Event", to: "Chart Plot", label: "Visualize" },
      { from: "Chart Plot", to: "Alert Trigger", label: "Dispatch" },
    ],
    whatYouGet: [
      "Full Pine Script v5 source code (.pine file)",
      "Installation and setup guide for TradingView",
      "Webhook alert message template configuration",
      "Technical adjustments and parameter verification",
    ],
    whoItsFor: [
      { tier: "Standard Indicators", desc: "Traders needing proven, non-repainting indicator combinations." },
      { tier: "Custom Indicators", desc: "Traders with proprietary mathematical rules and custom visual requirements." },
    ],
    standardVsCustom: {
      standard: ["Single-indicator rule-set", "Standard visual signals", "Predictable milestone pricing"],
      custom: ["Multi-condition confluence logic", "Multi-timeframe (MTF) analysis", "Custom visual table dashboards"],
    },
    supportAndTraining: [
      "Video guide showing how to add the indicator and set up TradingView alerts",
      "Verification that alerts fire accurately in real-time",
    ],
    faqs: [
      { q: "Do you guarantee trading profits?", a: "No. We provide pure technology engineering and automation. We never make guaranteed profit or return claims." },
      { q: "Will the indicator repaint?", a: "No. All our indicators are strictly written with non-repainting logic on bar confirmation." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 11. Standard & Custom TradingView Strategies
  {
    slug: "tradingview-strategies",
    name: "TradingView Strategies (Standard & Custom)",
    category: "Trading Technology",
    categoryKey: "trading",
    badge: "Backtesting & Rules",
    icon: "Binary",
    shortStatement: "Rule-based systematic strategy scripts with realistic backtest metrics.",
    problem: {
      title: "Unrealistic Backtests & Curve Fitting",
      statement: "Most public strategies ignore commissions, slippage, and spread, showing fake results.",
      bullets: [
        "Unrealistic Strategy Tester metrics that fail immediately in live trading",
        "Lack of realistic slippage and commission modeling",
        "Disorganized execution logic that cannot be automated via webhooks",
      ],
    },
    solution: {
      title: "Deterministic Pine Script Strategies",
      statement: "Systematic strategy scripts modeled with realistic fees, slippage, and session filters.",
      bullets: [
        "Deterministic entry and exit logic with strict risk parameters",
        "Realistic Strategy Tester modeling (commissions, slippage, trade sizes)",
        "Strategy alerts formatted for sub-second webhook execution",
      ],
    },
    howItWorks: [
      { step: "01", label: "Rules", desc: "Define entry triggers, stop-loss, take-profit, and session filters." },
      { step: "02", label: "Develop", desc: "Code systematic strategy in Pine Script v5." },
      { step: "03", label: "Backtest", desc: "Run Strategy Tester with realistic commissions and slippage." },
      { step: "04", label: "Alerts", desc: "Configure alert() functions for automated webhook routing." },
    ],
    whatWeBuild: [
      { title: "Systematic Strategy", desc: "Deterministic Pine Script v5 strategy engine.", icon: "Binary" },
      { title: "Risk Parameters", desc: "Dynamic position sizing, fixed points, or percentage risk.", icon: "Shield" },
      { title: "Automated Triggers", desc: "Order entries and exits formatted for external brokers.", icon: "Zap" },
    ],
    visualWorkflow: [
      { from: "Market Data", to: "Conditions", label: "Evaluate" },
      { from: "Conditions", to: "Entry/Exit Logic", label: "Trigger" },
      { from: "Entry/Exit Logic", to: "Backtest Metrics", label: "Verify" },
      { from: "Backtest Metrics", to: "Alert Dispatch", label: "Automate" },
    ],
    whatYouGet: [
      "Complete Pine Script v5 Strategy Source Code",
      "Strategy Tester performance verification report",
      "Webhook alert payload syntax for automated bots",
      "Documentation on parameters and session adjustments",
    ],
    whoItsFor: [
      { tier: "Systematic Traders", desc: "Traders seeking mathematically verifiable, backtested rule-sets." },
      { tier: "Automators", desc: "Traders wanting strategies ready to connect to MT5 or broker bridges." },
    ],
    standardVsCustom: {
      standard: ["Standard moving average, RSI, or breakout strategy with risk controls"],
      custom: ["Multi-condition confluence, trailing stops, dynamic lot sizing, session filters"],
    },
    supportAndTraining: [
      "Step-by-step video on configuring strategy parameters and backtesting",
      "14 days of technical adjustments to rules",
    ],
    faqs: [
      { q: "Can this strategy place live trades automatically?", a: "Yes. Pine Script strategies trigger alert webhooks which connect to MT5 or broker execution bridges." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 12. MT5 Custom Scanner & Alert System
  {
    slug: "mt5-scanner-alerts",
    name: "MT5 Custom Scanner & Alert System",
    category: "Trading Technology",
    categoryKey: "trading",
    badge: "MQL5 Screener",
    icon: "Sliders",
    shortStatement: "Multi-symbol market scanner monitoring conditions across 28+ pairs.",
    problem: {
      title: "Chart Fatigue & Missed Setups",
      statement: "Traders manually clicking through 30+ charts miss high-probability trade setups.",
      bullets: [
        "Hours wasted manually scrolling through charts across timeframes",
        "Slow reaction times leading to poor entry prices",
        "High CPU consumption from opening dozens of simultaneous MT5 charts",
      ],
    },
    solution: {
      title: "Native MQL5 Market Screener",
      statement: "Single-chart scanner monitoring dozens of instruments and notifying you the second a setup forms.",
      bullets: [
        "Monitors 28+ Forex, Crypto, or Index pairs simultaneously from 1 chart",
        "Multi-timeframe (MTF) condition detection and clean on-screen dashboard",
        "Instant multi-channel alerts (MT5 popups, push notifications, Telegram)",
      ],
    },
    howItWorks: [
      { step: "01", label: "Condition", desc: "Define rules (e.g. RSI divergence, trend confluence, EMA cross)." },
      { step: "02", label: "Scanner Code", desc: "We write efficient MQL5 screener with low CPU usage." },
      { step: "03", label: "Visual Dashboard", desc: "Clean table displaying status of all symbols on one chart." },
      { step: "04", label: "Alert Routing", desc: "Dispatches mobile push notification or Telegram message." },
    ],
    whatWeBuild: [
      { title: "Multi-Symbol Scanner", desc: "Native MQL5 scanner monitoring your complete watchlist.", icon: "Sliders" },
      { title: "Visual Matrix Table", desc: "On-chart green/red status grid for instant scanning.", icon: "Activity" },
      { title: "Multi-Alert Dispatch", desc: "Popups, audio chimes, mobile push, and Telegram alerts.", icon: "Send" },
    ],
    visualWorkflow: [
      { from: "28+ Instruments", to: "MQL5 Scanner", label: "Scan Ticks" },
      { from: "MQL5 Scanner", to: "Condition Match", label: "Evaluate" },
      { from: "Condition Match", to: "Matrix Dashboard", label: "Display" },
      { from: "Matrix Dashboard", to: "Instant Alert", label: "Broadcast" },
    ],
    whatYouGet: [
      "Compiled MT5 Indicator/Expert (.ex5) + MQL5 Source Code (.mq5)",
      "Installation and setup guide for MetaTrader 5",
      "Push notification and Telegram webhook integration guide",
      "Technical verification on live market feed",
    ],
    whoItsFor: [
      { tier: "Watchlist Traders", desc: "Traders monitoring multiple currency pairs, metals, or indices." },
      { tier: "Swing Traders", desc: "Traders wanting to be alerted only when higher timeframe confluence occurs." },
    ],
    standardVsCustom: {
      standard: ["Standard 28-pair screener with RSI, MACD, or MA rules"],
      custom: ["Complex proprietary indicators, multi-timeframe matrix, Telegram integration"],
    },
    supportAndTraining: [
      "Installation video showing how to place files in MQL5/Indicators folder",
      "Configuration guide for setting up MetaTrader 5 mobile push notifications",
    ],
    faqs: [
      { q: "Will the scanner slow down my computer?", a: "No. Our MQL5 code is highly optimized to run smoothly on a single chart with minimal memory footprint." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 13. MT5 Custom Auto-Trading System with Alerts
  {
    slug: "mt5-auto-trading",
    name: "MT5 Custom Auto-Trading System with Alerts",
    category: "Trading Technology",
    categoryKey: "trading",
    badge: "MQL5 Expert Advisor",
    icon: "Bot",
    shortStatement: "Native MQL5 execution automation with strict equity risk rules.",
    problem: {
      title: "Emotional Discipline & Execution Delay",
      statement: "Human emotions, hesitations, and execution delays cause traders to violate their own rules.",
      bullets: [
        "Hesitating on valid signals or chasing poor entries",
        "Failure to enforce strict stop-loss and maximum daily drawdown limits",
        "Inability to monitor markets 24 hours a day during market hours",
      ],
    },
    solution: {
      title: "Algorithmic MQL5 Execution Automation",
      statement: "Custom MetaTrader 5 Expert Advisor (EA) executing strictly to your programmed rules with risk protection.",
      bullets: [
        "Sub-millisecond automated order execution in native MQL5",
        "Dynamic position sizing, trailing stops, and daily maximum loss guardrails",
        "Full trade event notifications sent to your phone or Telegram",
      ],
    },
    howItWorks: [
      { step: "01", label: "Rule Design", desc: "Document entry conditions, stop-loss, take-profit, and risk rules." },
      { step: "02", label: "EA Coding", desc: "We write robust MQL5 Expert Advisor with risk protection." },
      { step: "03", label: "Tick Test", desc: "Verify execution in Strategy Tester on real tick data." },
      { step: "04", label: "Deployment", desc: "Deploy on demo account or VPS with safety guardrails active." },
    ],
    whatWeBuild: [
      { title: "Native MQL5 EA", desc: "Automated trading robot executing with sub-second latency.", icon: "Bot" },
      { title: "Risk Guardrails", desc: "Max spread checks, daily drawdown limits, and trailing stops.", icon: "Shield" },
      { title: "Trade Notifier", desc: "Instant push alerts on order open, modify, and close.", icon: "Activity" },
    ],
    visualWorkflow: [
      { from: "Market Signal", to: "Validation", label: "Check Rules" },
      { from: "Validation", to: "Risk Manager", label: "Size Lot" },
      { from: "Risk Manager", to: "Execution", label: "Place Order" },
      { from: "Execution", to: "Mobile Alert", label: "Notify" },
    ],
    whatYouGet: [
      "Complete MQL5 Expert Advisor Source Code (.mq5 + .ex5)",
      "VPS setup and installation walkthrough guide",
      "Risk parameter configuration manual",
      "30 days of technical execution support",
    ],
    whoItsFor: [
      { tier: "Systematic Traders", desc: "Traders with proven manual rules who want robotic, unemotional execution." },
      { tier: "Prop Firm Traders", desc: "Traders needing strict daily loss caps to protect evaluation accounts." },
    ],
    standardVsCustom: {
      standard: ["Single-strategy EA with fixed SL/TP and risk-per-trade controls"],
      custom: ["Multi-symbol portfolio EA, martingale/grid filters, custom external webhook triggers"],
    },
    supportAndTraining: [
      "VPS setup and installation video guide",
      "Live walkthrough testing order placement on a demo account",
    ],
    faqs: [
      { q: "Do you make any profit promises?", a: "No. We build execution technology strictly according to your specifications. You are responsible for your strategy." },
    ],
    defaultPrice: "Milestone Scoped",
  },

  // 14. Custom Trading Alerts to Telegram Channel
  {
    slug: "telegram-trading-alerts",
    name: "Custom Trading Alerts to Telegram Channel",
    category: "Trading Technology",
    categoryKey: "trading",
    badge: "Telegram Webhook Bridge",
    icon: "Send",
    shortStatement: "Sub-second webhook delivery of trade signals directly to Telegram.",
    problem: {
      title: "Delayed Signal Sharing with Teams & Clients",
      statement: "Manually typing and posting trade signals into Telegram channels causes delayed entries and missed moves.",
      bullets: [
        "Minutes lost manually formatting charts, entry prices, and stop-losses",
        "Subscribers receiving signals after the price has already moved",
        "Clunky third-party bridge tools requiring expensive monthly fees",
      ],
    },
    solution: {
      title: "Sub-Second Automated Telegram Broadcast",
      statement: "Direct webhook bridge from TradingView or MT5 broadcasting formatted signal cards to your Telegram channel.",
      bullets: [
        "Sub-second automated message dispatch upon signal trigger",
        "Professionally formatted cards with instrument, direction, entry, SL, and TP",
        "Runs serverless with zero monthly software subscription fees",
      ],
    },
    howItWorks: [
      { step: "01", label: "Telegram Bot", desc: "Create a private Telegram Bot and add it to your channel." },
      { step: "02", label: "Webhook Bridge", desc: "Deploy lightweight, serverless webhook listener." },
      { step: "03", label: "Format Card", desc: "Design clean signal layout with emojis and structured fields." },
      { step: "04", label: "Live Broadcast", desc: "Signals triggered on TradingView/MT5 appear in Telegram instantly." },
    ],
    whatWeBuild: [
      { title: "Telegram Bot Setup", desc: "Configured bot credentials with channel admin rights.", icon: "Send" },
      { title: "Webhook Router", desc: "Serverless bridge processing alerts and routing to Telegram.", icon: "Zap" },
      { title: "Formatted Cards", desc: "Clean message templates with symbol, direction, entry, and targets.", icon: "FileText" },
    ],
    visualWorkflow: [
      { from: "TradingView / MT5", to: "Signal Generator", label: "Trigger" },
      { from: "Signal Generator", to: "Webhook Bridge", label: "Dispatch" },
      { from: "Webhook Bridge", to: "Telegram Bot", label: "Format" },
      { from: "Telegram Bot", to: "VIP Channel", label: "Broadcast" },
    ],
    whatYouGet: [
      "Complete Telegram Webhook Router Source Code",
      "Telegram Bot API configuration credentials setup",
      "Customizable message card templates (Instrument, Direction, SL, TP)",
      "Testing verification with live chart triggers",
    ],
    whoItsFor: [
      { tier: "Signal Providers", desc: "Traders running private or VIP communities needing instant alerts." },
      { tier: "Individual Traders", desc: "Traders wanting instant mobile notifications without keeping charts open." },
    ],
    standardVsCustom: {
      standard: ["TradingView-to-Telegram signal dispatch with standard formatting"],
      custom: ["MT5-to-Telegram dispatch with automated chart screenshot attachments"],
    },
    supportAndTraining: [
      "Video tutorial on creating Telegram Bots and setting up channel permissions",
      "Guide to customizing alert message templates",
    ],
    faqs: [
      { q: "How fast is the message delivery?", a: "Messages typically appear in your Telegram channel in under 500 milliseconds from signal trigger." },
    ],
    defaultPrice: "Milestone Scoped",
  },
];

export const DO_MORE_BUSINESS_NODES = [
  { name: "Website", role: "Attracts Visitors", icon: "Globe" },
  { name: "Lead", role: "Captures Enquiries", icon: "Mail" },
  { name: "CRM", role: "Qualifies Deals", icon: "Layers" },
  { name: "Operations", role: "Fulfills Orders", icon: "Workflow" },
  { name: "Finance", role: "Auto-Invoices & Collects", icon: "BarChart3" },
  { name: "HR", role: "Coordinates Teams", icon: "Users" },
  { name: "Reports", role: "Live Executive KPIs", icon: "Activity" },
  { name: "Automation", role: "Runs 24/7 in Background", icon: "Zap" },
];

export const SMALL_BIZ_FLOW = [
  { step: "1", title: "Visitor", desc: "Potential client visits your fast, mobile-optimized website.", icon: "UserCheck" },
  { step: "2", title: "Website", desc: "Displays clear services, transparent pricing, and instant credibility.", icon: "Globe" },
  { step: "3", title: "Lead Form", desc: "Enquiry collected with honeypot spam filtering and data validation.", icon: "FileText" },
  { step: "4", title: "Google Sheet", desc: "Row saved instantly with a unique Lead ID (HRPS-YYYYMMDD-XXXX).", icon: "Database" },
  { step: "5", title: "Email Alert", desc: "Manager receives full lead dossier; client receives professional receipt.", icon: "Send" },
  { step: "6", title: "Follow-Up", desc: "Team responds within 24 hours with organized deal context.", icon: "Clock" },
  { step: "7", title: "Customer", desc: "Delighted client onboarded with zero manual administration friction.", icon: "CheckCircle2" },
];
