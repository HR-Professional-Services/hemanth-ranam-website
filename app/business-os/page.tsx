import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Business OS | Connected Enterprise Operating System | Hemanth Ranam",
  description:
    "Consolidate your entire company operations into one connected Business OS. Unify CRM, sales, finance, HRMS, projects, and helpdesk on Frappe / ERPNext foundations.",
};

const productData = {
  slug: "business-os",
  name: "Business OS",
  tagline: "The connected operating system for your company.",
  badge: "Flagship Platform",
  whatItSolves:
    "Eliminates disconnected SaaS tools, data fragmentation, duplicate data entry, and lack of company-wide visibility by consolidating core operations into a unified system.",
  problemDetails: [
    "Information trapped in individual department spreadsheets and personal email inboxes.",
    "Paying thousands of dollars per month across 8+ different software vendors.",
    "Delayed month-end financial closing due to manual billing and payment reconciliation.",
    "Zero real-time operational dashboard for founders and directors.",
  ],
  solution:
    "Business OS brings your customer pipelines, sales orders, accounts, human resources, project delivery, and customer service into one coherent environment sharing a single unified database.",
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
  workflow: [
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
  techStack: ["Frappe Framework", "ERPNext", "MariaDB / PostgreSQL", "Python", "Redis", "Cloudflare"],
  faqs: [
    {
      question: "Can Business OS replace our existing accounting and CRM software?",
      answer: "Yes. Business OS includes full general ledger accounting, accounts receivable/payable, and omnichannel CRM, allowing you to retire redundant subscriptions.",
    },
    {
      question: "Do we have complete ownership over our data?",
      answer: "100%. All customer, financial, and operational data resides in your dedicated database with full export capabilities.",
    },
  ],
};

export default function BusinessOsPage() {
  return <ProductDetailPage product={productData} />;
}
