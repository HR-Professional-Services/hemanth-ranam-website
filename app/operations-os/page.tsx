import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Operations OS | Standard Operating Procedures & Approval Trees | Hemanth Ranam",
  description:
    "Standardise internal workflows, multi-tier approvals, digital SOPs, equipment tracking, and daily operational execution in one verified system.",
};

const productData = {
  slug: "operations-os",
  name: "Operations OS",
  tagline: "Standardise internal workflows, approvals, SOPs and daily operations.",
  badge: "Operational Rigor",
  whatItSolves:
    "Eliminates operational chaos, bottlenecked approvals, undocumented tribal knowledge, and compliance risks through codified execution.",
  problemDetails: [
    "Important purchase requests and contracts delayed in email inboxes waiting for sign-offs.",
    "Internal processes varying wildly depending on which staff member executes them.",
    "Tribal knowledge lost when key employees transition or take leave.",
    "Missing audit logs for internal authorizations and compliance checks.",
  ],
  solution:
    "Operations OS establishes codified approval matrices, timestamped digital checklists, and standard operating procedures directly into daily software workflows.",
  whoItIsFor:
    "Multi-location businesses, scaling companies, and operational leaders seeking consistent, audit-ready daily execution.",
  coreModules: [
    "Multi-Level Approval Matrix (Expenses, Contracts, POs)",
    "Digital Standard Operating Procedures (SOPs) with Verification Checklists",
    "Asset & Equipment Tracking",
    "Operational KPI Dashboard & Real-Time Bottleneck Alerts",
    "Vendor & Contractor Compliance Verification",
    "Incident Logging & Corrective Action Tracking",
  ],
  workflow: [
    "Team member submits purchase requisition exceeding $1,000",
    "System automatically triggers two-tier approval (Manager → Director)",
    "Approved request auto-generates purchase order with audit log",
    "Daily shift opening checklist completed via mobile device",
    "Exception alerts dispatched immediately to Operations Director",
  ],
  setupFeeNote: "One-time workflow codification, approval hierarchy build, and digital checklist migration.",
  monthlyPlanNote: "Monthly workflow optimization, rule adjustments, and operational audit reports.",
  whatsIncluded: [
    "Custom approval workflow trees with email & WhatsApp sign-offs",
    "Interactive digital checklists with timestamped completions",
    "Asset register with maintenance schedules",
    "Executive operational risk & delay dashboards",
    "Operations manual and management team training",
  ],
  supportLevel: "Priority SLA, workflow debugging, and continuous infrastructure health assurance.",
  techStack: ["Frappe Workflow Engine", "DocType Modeler", "Custom Server Scripts", "Notification Webhooks"],
  faqs: [
    {
      question: "Can managers approve requests directly from email or mobile notifications?",
      answer: "Yes. Managers receive instant notifications with one-click 'Approve' or 'Reject' links directly from authorized devices.",
    },
    {
      question: "Does Operations OS maintain an audit trail?",
      answer: "Every approval, modification, and digital checklist completion is timestamped with user credentials and IP verification.",
    },
  ],
};

export default function OperationsOsPage() {
  return <ProductDetailPage product={productData} />;
}
