import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "ERPNext Implementation & Frappe Customization | Hemanth Ranam",
  description:
    "Enterprise-grade Frappe and ERPNext implementation, DocType modeling, data migration, and cloud hosting with zero per-user licensing fees.",
};

const productData = {
  slug: "erpnext",
  name: "ERPNext & Frappe Implementation",
  tagline: "Enterprise open-source business management with zero per-user licensing fees.",
  badge: "Enterprise Platform",
  whatItSolves:
    "Replaces exorbitant enterprise ERP systems (SAP, NetSuite, Salesforce) with a customizable, fully owned open-source solution that eliminates recurring user licensing costs.",
  problemDetails: [
    "Per-user monthly SaaS fees escalating exponentially as employee count increases.",
    "Vendor lock-in with proprietary software vendors dictating feature roadmaps.",
    "Rigid commercial ERP software that cannot adapt to custom company workflows.",
    "Exorbitant consultation and maintenance rates charged by legacy enterprise agencies.",
  ],
  solution:
    "We architect, configure, customize, and deploy Frappe / ERPNext for your company—tailored to your exact business rules, workflows, and reporting needs.",
  whoItIsFor:
    "Companies from 10 to 500+ users seeking enterprise software capabilities without recurring per-seat software licensing penalties.",
  coreModules: [
    "Accounting & General Ledger (Global Tax Ready)",
    "CRM & Sales Pipeline Management",
    "Buying & Supplier Management",
    "Stock, Warehousing & Inventory Valuation",
    "Human Resources Management & Payroll (HRMS)",
    "Project Management & Timesheets",
    "Customer Support Helpdesk",
    "Custom DocTypes & Server Scripts",
  ],
  workflow: [
    "Chart of Accounts, company structure, and role hierarchy established",
    "Custom DocTypes and fields modeled to match existing SOPs",
    "Historical customer, supplier, and financial data cleaned and migrated",
    "Integrations configured with payment gateways, email, and webhooks",
    "Staging system reviewed by department leads and signed off",
    "Production deployment with zero downtime and staff training",
  ],
  setupFeeNote: "Structured one-time setup based on module scope, user count, and data migration volume.",
  monthlyPlanNote: "Monthly Managed Business OS subscription covering dedicated cloud server management, updates, backups, and priority SLA.",
  whatsIncluded: [
    "Hardened cloud server deployment (Linux, MariaDB, Redis, Nginx)",
    "SSL certificate, domain routing, and automated daily backups",
    "Role-based permission architecture and multi-tier approval chains",
    "Complete data migration from legacy spreadsheets or accounting tools",
    "Interactive staff training and customized video SOP library",
  ],
  supportLevel: "Priority SLA directly with Hemanth Ranam, monthly system health checks, and database performance tuning.",
  techStack: ["Frappe Framework", "ERPNext v15", "Python", "MariaDB", "Redis", "Ubuntu / Docker"],
  faqs: [
    {
      question: "Are there any per-user monthly software licensing fees with ERPNext?",
      answer: "No. ERPNext is 100% open source. You own your system and pay zero per-seat software fees, regardless of whether you have 10 or 500 users.",
    },
    {
      question: "Can we host ERPNext on our own servers or private cloud?",
      answer: "Yes. You have complete data sovereignty and can host on your private cloud infrastructure or have us manage it fully.",
    },
  ],
};

export default function ErpNextPage() {
  return <ProductDetailPage product={productData} />;
}
