import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "CRM OS | Capture, Manage & Convert Deals | Hemanth Ranam",
  description:
    "Turn inbound leads into organized sales velocity. Omnichannel pipeline, visual Kanban, automated email & WhatsApp alerts, and quotation CPQ.",
};

const productData = {
  slug: "crm-os",
  name: "CRM OS",
  tagline: "Capture, manage and convert every customer opportunity.",
  badge: "Revenue Engine",
  whatItSolves:
    "Stops leads from slipping through cracks, unifies fragmented conversation channels, and provides predictable visibility over deal stages and sales velocity.",
  problemDetails: [
    "Enquiries languishing in personal inboxes for hours or days before follow-up.",
    "No shared view of which sales rep is working on which opportunity.",
    "Missing deal values, inaccurate revenue forecasting, and untracked proposal follow-ups.",
    "Leads lost during staff turnover due to unorganized customer history.",
  ],
  solution:
    "CRM OS captures every inbound enquiry from your website, WhatsApp, and email, validates contact data, assigns accountability, and drives deals to conversion.",
  whoItIsFor:
    "B2B service firms, consultancies, agencies, and high-touch sales teams needing a structured, automated pipeline.",
  coreModules: [
    "Omnichannel Lead Ingestion (Web, WhatsApp, Email, Phone)",
    "Visual Kanban Deal Pipeline & Stage Governance",
    "Contact & Organisation Relationship Graph",
    "Activity Timeline (Calls, Notes, Tasks, Meetings)",
    "Automated Email Sequences & Follow-up Triggers",
    "Quotation & Proposal Generation",
  ],
  workflow: [
    "Inbound lead submitted via web form",
    "Auto-enrichment adds company domain & location",
    "Lead scoring prioritises high-intent opportunities",
    "Sales rep receives instant WhatsApp/email notification",
    "Stage transition automatically logs meeting notes & generates proposal",
  ],
  setupFeeNote: "One-time configuration of pipeline stages, custom fields, and lead capture routing.",
  monthlyPlanNote: "Monthly managed CRM maintenance, webhook health checks, and minor workflow tweaks.",
  whatsIncluded: [
    "Complete lead-to-opportunity pipeline architecture",
    "Website & WhatsApp lead form integration",
    "Custom quotation templates with brand styling",
    "Notification bots and automated reminder triggers",
    "Team onboarding & CRM usage manual",
  ],
  supportLevel: "Continuous pipeline uptime monitoring, webhook verification, and quarterly workflow audits.",
  techStack: ["Frappe CRM", "Next.js Webhooks", "REST APIs", "WhatsApp Cloud API", "Google Sheets Bridge"],
  faqs: [
    {
      question: "Can CRM OS integrate with our existing website?",
      answer: "Yes. We configure direct webhook handlers and embeddable forms that inject leads directly into CRM OS.",
    },
    {
      question: "Can we send automated follow-up emails and WhatsApp messages?",
      answer: "Yes. You can trigger automated follow-up sequences based on deal stage transitions or inactivity periods.",
    },
  ],
};

export default function CrmOsPage() {
  return <ProductDetailPage product={productData} />;
}
