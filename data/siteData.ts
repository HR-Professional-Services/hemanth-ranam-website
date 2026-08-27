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
  originalPrice: string;
  price: string;
  description: string;
  bullets: string[];
  serviceId: string;
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
  { label: "Services", href: "/#services" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "Trading Tech", href: "/#trading-tech" },
  { label: "Pricing", href: "/#pricing" },
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

export const REVISED_PRICING_GROUPS: PricingGroup[] = [
  {
    category: "business",
    title: "Business & Consulting",
    badge: "25%–30% Reduced",
    items: [
      {
        id: "plan-biz-consultation",
        service: "Business Consultation",
        originalPrice: "$49",
        price: "$35",
        description: "1-on-1 strategic session to audit operational bottlenecks and map solutions.",
        bullets: [
          "60-minute deep-dive architecture consultation",
          "Tool stack & workflow bottleneck analysis",
          "Actionable roadmap with clear ROI recommendations",
        ],
        serviceId: "biz-consulting",
      },
      {
        id: "plan-proc-audit",
        service: "Process / Tech Audit",
        originalPrice: "$79",
        price: "$59",
        description: "Comprehensive review of existing software, subscriptions, and team friction.",
        bullets: [
          "Complete audit of current software stack & costs",
          "Identification of redundant tools & manual steps",
          "Formal PDF audit report with optimization blueprint",
        ],
        serviceId: "process-opt",
      },
      {
        id: "plan-biz-systems",
        service: "Business Systems Consulting",
        originalPrice: "$99",
        price: "$75",
        description: "End-to-end architecture specification for connected business operations.",
        bullets: [
          "Full digital workflow & database schema specification",
          "Standard operating procedure (SOP) digital mapping",
          "Vendor & platform selection advisory",
        ],
        serviceId: "biz-consulting",
      },
      {
        id: "plan-workflow-auto",
        service: "Workflow Automation",
        originalPrice: "$149",
        price: "$109",
        description: "Multi-step automated trigger-action pipeline connecting web, CRM, and tools.",
        bullets: [
          "Automated webhook pipeline across up to 3 platforms",
          "Data validation, error logging & automated retry logic",
          "Immediate lead & transaction notification alerts",
        ],
        serviceId: "workflow-automation",
      },
      {
        id: "plan-crm-erp",
        service: "CRM / ERP Implementation",
        originalPrice: "$499",
        price: "$369",
        description: "Customized Frappe & ERPNext business management system deployment.",
        bullets: [
          "Custom DocTypes, role permissions & transaction flows",
          "Financial accounting, CRM & inventory setup",
          "Data migration & team onboarding walkthrough",
        ],
        serviceId: "crm-erp",
      },
    ],
  },
  {
    category: "software",
    title: "Software & Web",
    badge: "25%–30% Reduced",
    items: [
      {
        id: "plan-biz-website",
        service: "Business Website",
        originalPrice: "$199",
        price: "$149",
        description: "Fast, responsive executive website with modern SEO & WhatsApp lead capture.",
        bullets: [
          "100/100 Lighthouse speed score & mobile-first UI",
          "Structured SEO schema, OpenGraph & dynamic sitemap",
          "International WhatsApp & email CRM integration",
        ],
        serviceId: "biz-websites",
      },
      {
        id: "plan-client-portal",
        service: "Client Portal / Dashboard",
        originalPrice: "$349",
        price: "$259",
        description: "Branded customer self-service hub with secure logins and document sharing.",
        bullets: [
          "Secure authentication & role-based client views",
          "Milestone progress tracking & document repository",
          "Automated email notifications on status updates",
        ],
        serviceId: "client-portals",
      },
      {
        id: "plan-custom-app",
        service: "Custom Web Application",
        originalPrice: "$399",
        price: "$289",
        description: "Tailored full-stack cloud application with PostgreSQL database & authentication.",
        bullets: [
          "TypeScript, Next.js 15 & responsive modern UI",
          "Relational database design & REST/GraphQL APIs",
          "Global edge deployment with automated SSL & backups",
        ],
        serviceId: "custom-software",
      },
      {
        id: "plan-api-integration",
        service: "API & Webhook Integration",
        originalPrice: "$149",
        price: "$109",
        description: "Secure real-time bridge connecting third-party services and legacy databases.",
        bullets: [
          "Fault-tolerant REST API middleware & webhook listeners",
          "HMAC signature validation & payload transformation",
          "Detailed execution audit logs & failure recovery",
        ],
        serviceId: "api-integrations",
      },
    ],
  },
  {
    category: "trading",
    title: "Trading Technology",
    badge: "25%–30% Reduced",
    items: [
      {
        id: "plan-tv-indicator",
        service: "TradingView Indicator",
        originalPrice: "$99",
        price: "$75",
        description: "Custom Pine Script v5 indicator built to your exact chart rules.",
        bullets: [
          "100% non-repainting Pine Script v5 code",
          "Visual on-chart dashboard with customizable inputs",
          "Built-in webhook alert triggers for automation",
        ],
        serviceId: "tradingview-indicators",
      },
      {
        id: "plan-pine-strategy",
        service: "Pine Script Strategy",
        originalPrice: "$149",
        price: "$109",
        description: "Rule-based systematic strategy script with realistic backtest metrics.",
        bullets: [
          "Comprehensive Strategy Tester backtesting metrics",
          "Slippage, spread & commission modeling",
          "Multi-condition entries, exits & session filters",
        ],
        serviceId: "pine-strategies",
      },
      {
        id: "plan-mt5-indicator",
        service: "MT5 Custom Indicator",
        originalPrice: "$149",
        price: "$109",
        description: "Native MetaTrader 5 indicator with custom visual buffers & alerts.",
        bullets: [
          "Low-latency MQL5 code with zero lag",
          "Multi-timeframe (MTF) calculation logic",
          "On-screen alerts & push notifications",
        ],
        serviceId: "mt5-indicators-eas",
      },
      {
        id: "plan-telegram-alerts",
        service: "Trading Alerts / Telegram",
        originalPrice: "$99",
        price: "$75",
        description: "Sub-second webhook delivery directly to private Telegram channels.",
        bullets: [
          "Instant broadcast to Telegram groups or channels",
          "Formatted cards with entry, stop-loss & take-profit",
          "Zero server maintenance with serverless edge router",
        ],
        serviceId: "trading-alerts",
      },
      {
        id: "plan-mt5-ea",
        service: "MT5 Expert Advisor (EA)",
        originalPrice: "$299",
        price: "$219",
        description: "Automated trading robot with strict equity risk & drawdown guardrails.",
        bullets: [
          "Sub-millisecond automated order execution in MQL5",
          "Dynamic lot sizing, trailing stops & max drawdown stops",
          "Backtested on 99.9% quality tick data",
        ],
        serviceId: "mt5-indicators-eas",
      },
      {
        id: "plan-trading-automation",
        service: "Trading Automation Setup",
        originalPrice: "$399",
        price: "$289",
        description: "End-to-end webhook bridge from TradingView alerts to MT5 broker.",
        bullets: [
          "Under 300ms execution bridge from TradingView to MT5",
          "Automated risk percentage calculation per trade",
          "Safety guards: spread checks & connection recovery",
        ],
        serviceId: "trading-automation",
      },
      {
        id: "plan-custom-trading-system",
        service: "Custom Trading System",
        originalPrice: "$499",
        price: "$369",
        description: "Complete custom architecture with multi-asset scanner, alerts & bot.",
        bullets: [
          "Multi-pair scanner + Pine indicator + MT5 execution bridge",
          "Telegram VIP channel alerts + trade management EA",
          "Full VPS setup, documentation & 30-day technical support",
        ],
        serviceId: "trading-automation",
      },
    ],
  },
];
