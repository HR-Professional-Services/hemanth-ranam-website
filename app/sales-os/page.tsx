import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Sales OS | High-Velocity Quotations & CPQ Proposals | Hemanth Ranam",
  description:
    "Turn leads and opportunities into an organized sales pipeline. Dynamic proposal CPQ, margin tracking, rep quotas, and electronic sign-offs.",
};

const productData = {
  slug: "sales-os",
  name: "Sales OS",
  tagline: "Turn leads and opportunities into an organised sales pipeline.",
  badge: "Deal Velocity",
  whatItSolves:
    "Prevents slow quotation turnaround, unassigned inbound leads, and lack of deal closing velocity across sales representatives.",
  problemDetails: [
    "Sales proposals taking days to draft using static Word documents.",
    "Unclear price discounts eroding gross margins without managerial approval.",
    "Lack of visibility into sales rep conversion ratios and pipeline velocity.",
    "Contracts signed but never handed off cleanly to operations or billing.",
  ],
  solution:
    "Sales OS equips your revenue team with dynamic proposal generation, CPQ rules, digital signature tracking, and automatic sales order generation.",
  whoItIsFor:
    "Product and service companies managing recurring proposals, multi-tier pricing, and target-driven sales teams.",
  coreModules: [
    "Deal Velocity Analytics & Forecasting",
    "Quotation CPQ (Configure, Price, Quote)",
    "Automated Sales Order Generation",
    "Territory & Representative Quota Tracking",
    "Customer Contract & Renewal Management",
    "Margin & Profitability Calculation per Deal",
  ],
  workflow: [
    "Sales rep configures line items with locked discounts",
    "One-click quote dispatched to client with tracking link",
    "Client accepts online → Sales Order automatically generated",
    "Inventory or project delivery team notified instantly",
    "Commission & quota metrics updated on team dashboard",
  ],
  setupFeeNote: "One-time catalog setup, discount logic implementation, and proposal template design.",
  monthlyPlanNote: "Monthly pipeline tuning, price list adjustments, and sales team user management.",
  whatsIncluded: [
    "Custom product & service catalog with pricing matrices",
    "Dynamic proposal generator with electronic sign-off",
    "Rep performance and conversion rate reporting",
    "Automated quotation expiry alerts",
    "Sales playbook & tool training for reps",
  ],
  supportLevel: "Standard SLA support, catalog maintenance, and monthly sales funnel health checks.",
  techStack: ["ERPNext Selling", "PDF Generator", "Webhook Triggers", "Analytics Engine"],
  faqs: [
    {
      question: "Can we set minimum pricing and margin thresholds?",
      answer: "Yes, discount caps require manager authorization before proposals can be sent to clients.",
    },
    {
      question: "What happens when a customer accepts a proposal?",
      answer: "A Sales Order is automatically generated, notifying billing and project teams immediately.",
    },
  ],
};

export default function SalesOsPage() {
  return <ProductDetailPage product={productData} />;
}
