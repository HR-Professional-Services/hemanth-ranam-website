import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Custom OS | Bespoke Business Systems Engineering | Hemanth Ranam",
  description:
    "Build a custom operating system tailored to your unique company processes. Engineered on Frappe Framework, Python, and modern web architectures.",
};

const productData = {
  slug: "custom-os",
  name: "Custom OS",
  tagline: "Build the operating system around your exact business process.",
  badge: "Bespoke Engineering",
  whatItSolves:
    "Solves the limitation of off-the-shelf software when your competitive advantage relies on a unique, proprietary operational model.",
  problemDetails: [
    "Generic SaaS tools forcing your team into rigid, unnatural workflows.",
    "Expensive subscription fees for features you don't use while missing the exact features you need.",
    "Data scattered across disconnected custom scripts and spreadsheets.",
    "No internal developer capacity to maintain and extend proprietary internal tools.",
  ],
  solution:
    "Custom OS delivers a tailored software environment matching your precise workflow logic, data schemas, approval chains, and client interfaces.",
  whoItIsFor:
    "Specialized businesses, consultancies, and operations whose core competitive advantage requires a tailored operational flow.",
  coreModules: [
    "Custom Data Models & Bespoke DocTypes",
    "Tailored Approval Workflows & Permissions",
    "Third-Party Software & API Integrations",
    "Custom Client & Internal Portals",
    "Custom Executive Reporting & Metrics",
    "Hardened Cloud Server Hosting & Backups",
  ],
  workflow: [
    "Discovery call to map your exact manual workflow and bottlenecks",
    "System specification and database schema created and approved",
    "Interactive development and milestone review on a private staging site",
    "Team testing, user permission setup, and video walkthroughs",
    "Production launch with ongoing managed support and enhancements",
  ],
  setupFeeNote: "Structured one-time milestone project with clear deliverables and transparent scope.",
  monthlyPlanNote: "Monthly managed operating support covering hosting, security updates, and routine adjustments.",
  whatsIncluded: [
    "Custom DocTypes and relational database design",
    "Tailored user permissions and workflow stages",
    "API webhook connections for forms and external tools",
    "Production cloud server deployment with daily backups",
    "Full administrator handover and team video tutorials",
  ],
  supportLevel: "Direct access to Hemanth Ranam for adjustments, maintenance, and system health checks.",
  techStack: ["Frappe Framework", "Python", "MariaDB / PostgreSQL", "Next.js", "Tailwind CSS"],
  faqs: [
    {
      question: "How long does a Custom OS project typically take?",
      answer: "Most custom implementations take between 2 to 6 weeks depending on the number of custom workflows and data migration requirements.",
    },
    {
      question: "Do I own my data and system?",
      answer: "Yes, 100%. You retain full ownership of your database, code, and business data with zero vendor lock-in.",
    },
    {
      question: "Can we add new features later as our company grows?",
      answer: "Absolutely. Frappe's modular architecture makes it simple to add new DocTypes, fields, reports, and workflow states whenever needed.",
    },
  ],
};

export default function CustomOsPage() {
  return <ProductDetailPage product={productData} />;
}
