import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Business Systems Consulting & Technical Audits | Hemanth Ranam",
  description:
    "Founder-led technology consulting, operational bottleneck diagnosis, software subscription audits, and digital transformation roadmaps.",
};

const productData = {
  slug: "consulting",
  name: "Business Systems Consulting",
  tagline: "High-ROI operational diagnosis and systems architecture roadmaps.",
  badge: "Strategic Advisory",
  whatItSolves:
    "Helps business leaders cut through software confusion, eliminate subscription waste, fix operational bottlenecks, and design scalable systems architectures.",
  problemDetails: [
    "Purchasing expensive software tools that internal teams abandon within months.",
    "Paying for overlapping software subscriptions with redundant capabilities.",
    "Lack of technical clarity on how to structure company data flows.",
    "Difficulty bridging corporate strategy with actual technical execution.",
  ],
  solution:
    "1-on-1 strategic consulting with Hemanth Ranam (MBA, CMI Level 7) delivering clear, actionable system blueprints and fixed milestone scopes.",
  whoItIsFor:
    "Founders, managing directors, and operational leaders preparing to scale, automate, or transition to a modern Business OS.",
  coreModules: [
    "60-Minute Systems Bottleneck Diagnosis",
    "Comprehensive Tech Stack & Software Spend Audit",
    "Digital Transformation & Data Flow Roadmap",
    "Role-Based Permission & Operational SOP Review",
    "Vendor Evaluation & ERP Feasibility Study",
    "Executive Presentation of Prioritized Recommendations",
  ],
  workflow: [
    "Initial discovery questionnaire submitted",
    "60-minute intensive 1-on-1 strategy call with Hemanth",
    "Current software stack and manual workflows mapped",
    "Actionable roadmap and optimization blueprint drafted",
    "Follow-up review with 100% fee credit toward subsequent implementation",
  ],
  setupFeeNote: "Fixed milestone fees ($35 Business Consultation, $59 Systems Audit, $75 Roadmap).",
  monthlyPlanNote: "Advisory sessions are one-time milestones; optional ongoing retainer available under Scale OS.",
  whatsIncluded: [
    "Direct consultation with Hemanth Ranam (no junior associates)",
    "Comprehensive audit report with prioritized recommendations",
    "Session video recording and shared digital canvas diagrams",
    "Vendor recommendations and open-source feasibility analysis",
    "Full fee credit applied toward any implementation within 60 days",
  ],
  supportLevel: "Direct email and WhatsApp follow-up for 14 days post-consultation to clarify findings.",
  techStack: ["Systems Architecture", "Frappe / ERPNext", "Process Mapping", "Operational SOPs", "ROI Modeling"],
  faqs: [
    {
      question: "Is the consultation fee credited if we hire you for implementation?",
      answer: "Yes, 100% of your initial consultation fee is credited directly toward your subsequent Business OS setup.",
    },
    {
      question: "How should we prepare for the consultation?",
      answer: "A list of your current software subscriptions, employee count, and your top 2 operational headaches is all you need.",
    },
  ],
};

export default function ConsultingPage() {
  return <ProductDetailPage product={productData} />;
}
