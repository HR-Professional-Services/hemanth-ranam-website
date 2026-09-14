import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Website Growth OS | Storefront Connected to CRM Pipeline | Hemanth Ranam",
  description:
    "A premium website connected directly to your lead and customer workflow. Instant lead capture, Google Sheets CRM, automated WhatsApp & email alerts.",
};

const productData = {
  slug: "website-growth-os",
  name: "Website Growth OS",
  tagline: "A premium website connected directly to your lead and customer workflow.",
  badge: "Conversion Engine",
  whatItSolves:
    "Transforms disconnected, brochure-style websites into an automated revenue pipeline that validates enquiries, assigns canonical Lead IDs, and triggers immediate team alerts.",
  problemDetails: [
    "Websites that look modern but have no backend integration with customer management.",
    "Form submissions landing in spam folders or lost without confirmation IDs.",
    "Hours passing before sales teams respond to high-intent customer requests.",
    "No structured tracking of which campaigns or services drive qualified leads.",
  ],
  solution:
    "Website Growth OS pairs Next.js high-speed digital storefronts with an automated 15-column Google Sheets CRM backend, real-time validation, and instant notification bots.",
  whoItIsFor:
    "Service businesses, consultancies, B2B founders, and agencies needing a reliable, automated customer intake channel.",
  coreModules: [
    "Next.js App Router Ultra-Fast Storefront",
    "Canonical 15-Column Google Sheets CRM Engine",
    "Real-Time Email & WhatsApp Manager Notification Bots",
    "Anti-Spam Verification & Honeypot Protection",
    "International Phone Number Input Validation",
    "SEO Infrastructure with Schema Markup & Social Graph Cards",
    "Automated Customer Receipt Confirmation with SLA Guarantee",
  ],
  workflow: [
    "Visitor lands on fast, responsive digital storefront",
    "Clear value propositions guide visitor to structured lead form",
    "Contact information validated in real time with international country formats",
    "Canonical Lead ID generated (HRPS-YYYYMMDD-XXXX)",
    "Google Sheets CRM logs full enquiry parameters across 15 columns",
    "Manager receives instant HTML email and WhatsApp dispatch within seconds",
    "Sales follow-up executes while client purchase intent is at its peak",
  ],
  setupFeeNote: "One-time website design, copywriting alignment, domain configuration, and webhook setup.",
  monthlyPlanNote: "Managed Website Growth OS subscription covering edge CDN, uptime monitoring, and form health verification.",
  whatsIncluded: [
    "Custom responsive design matching executive brand standards",
    "Full Google Apps Script serverless backend code deployment",
    "Automated email templates for customer receipt and manager alerts",
    "Google Analytics & Google Search Console indexing setup",
    "Speed optimization achieving 95+ Google Lighthouse scores",
  ],
  supportLevel: "Continuous form webhook monitoring, spam filtering tuning, and monthly performance reports.",
  techStack: ["Next.js", "Tailwind CSS", "Google Apps Script", "Google Sheets API", "Cloudflare CDN"],
  faqs: [
    {
      question: "Do I need to pay for an expensive CRM software subscription?",
      answer: "No. Website Growth OS uses an automated Google Sheets CRM backend as its initial canonical database, meaning zero recurring per-seat software costs.",
    },
    {
      question: "Can we connect this to Frappe / ERPNext later?",
      answer: "Yes. The canonical 15-column schema is engineered to transition directly into Frappe CRM or ERPNext whenever your company scales.",
    },
  ],
};

export default function WebsiteGrowthOsPage() {
  return <ProductDetailPage product={productData} />;
}
