import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Helpdesk OS | Structured Support & SLA Ticket Tracking | Hemanth Ranam",
  description:
    "Give your clients and support team a structured support system with email-to-ticket routing, response timers, knowledge base, and CSAT benchmarks.",
};

const productData = {
  slug: "helpdesk-os",
  name: "Helpdesk OS",
  tagline: "Give your customers and support team a structured support system.",
  badge: "Service Excellence",
  whatItSolves:
    "Stops client support emails from being forgotten in personal inboxes and provides transparent SLA tracking with satisfaction benchmarks.",
  problemDetails: [
    "Customer support requests lost in employees' personal email threads.",
    "No measurable SLA metrics for first response time or resolution speed.",
    "Answering identical customer questions repeatedly without a searchable knowledge base.",
    "Unhappy customers churning silently with zero feedback mechanism.",
  ],
  solution:
    "Helpdesk OS routes all support emails and tickets into a shared team queue, enforcing resolution countdowns and measuring customer satisfaction.",
  whoItIsFor:
    "SaaS companies, managed service providers, product sellers, and service firms handling post-sale client requests.",
  coreModules: [
    "Shared Support Inbox with Ticket Auto-Assignment",
    "Multi-Channel Ingestion (Email-to-Ticket, Web Portal, WhatsApp)",
    "SLA Policy Engine (First Response & Resolution Timers)",
    "Knowledge Base & Frequently Asked Solutions",
    "Canned Responses & Automation Macros",
    "Customer Satisfaction (CSAT) Scoring",
  ],
  workflow: [
    "Customer emails support@company.com or files a ticket online",
    "Ticket created with unique reference ID and SLA countdown",
    "Auto-routed to available specialist based on issue category",
    "Agent resolves using verified Knowledge Base macro",
    "Customer receives resolution notification with 1-click CSAT rating",
  ],
  setupFeeNote: "One-time email routing setup, SLA matrix definition, and knowledge base structuring.",
  monthlyPlanNote: "Monthly helpdesk performance audits, spam filtering tuning, and ticket archive management.",
  whatsIncluded: [
    "Email-to-ticket domain integration (support@...)",
    "Custom ticket priority and resolution SLA rules",
    "Pre-built canned responses and standard replies",
    "Customer self-service knowledge base framework",
    "Support team operating guidelines and training",
  ],
  supportLevel: "High-priority support, mailbox monitoring, and continuous queue health inspection.",
  techStack: ["Frappe Helpdesk", "IMAP/SMTP Mail Routers", "Knowledge Base Engine", "CSAT Tracker"],
  faqs: [
    {
      question: "Can our customers submit tickets by sending an email?",
      answer: "Yes. Customers can simply email your existing support address, and Helpdesk OS automatically converts it into a ticket and replies with the reference number.",
    },
    {
      question: "Can we track agent response times?",
      answer: "Yes. The executive dashboard displays average first-response time, resolution time, and customer satisfaction ratings per agent.",
    },
  ],
};

export default function HelpdeskOsPage() {
  return <ProductDetailPage product={productData} />;
}
