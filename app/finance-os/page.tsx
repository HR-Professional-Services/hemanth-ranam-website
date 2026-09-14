import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Finance OS | Real-Time Accounting & Billing Automation | Hemanth Ranam",
  description:
    "Bring invoicing, expenses, payments, and financial operations into one system. Automated general ledger and payment gateway clearing.",
};

const productData = {
  slug: "finance-os",
  name: "Finance OS",
  tagline: "Bring invoicing, expenses, payments and financial operations into one system.",
  badge: "Financial Control",
  whatItSolves:
    "Eliminates delayed billing, lost expense receipts, manual reconciliation, and financial blind spots with real-time ledger accounting.",
  problemDetails: [
    "Late invoice dispatch causing delayed client payments and cash flow crunches.",
    "Hours spent manually matching bank transactions against invoices and receipts.",
    "Lack of real-time P&L visibility forcing founders to wait weeks for month-end reports.",
    "Uncollected receivables slipping through due to missing automated reminder workflows.",
  ],
  solution:
    "Finance OS links your sales deals, client invoices, online payment links, general ledger, and bank feeds into one automated financial engine.",
  whoItIsFor:
    "Founders, managing directors, and finance managers wanting real-time cash flow visibility and automated billing workflows.",
  coreModules: [
    "General Ledger & Chart of Accounts",
    "Accounts Receivable & Invoicing with Payment Links",
    "Accounts Payable, Purchase Orders & Supplier Records",
    "Expense Claims & Employee Reimbursement",
    "Bank Reconciliation & Statement Import",
    "Real-Time P&L, Balance Sheet, and Cash Flow Reports",
  ],
  workflow: [
    "Sales milestone achieved → draft invoice auto-generated",
    "Invoice emailed to client with Stripe / bank transfer button",
    "Client pays → webhook records receipt and clears Accounts Receivable",
    "Supplier bills matched against Purchase Orders via 3-way check",
    "Executive receives weekly automated cash-position digest",
  ],
  setupFeeNote: "One-time Chart of Accounts configuration, invoice design, and tax rule setup.",
  monthlyPlanNote: "Monthly accounting ledger integrity checks, bank integration maintenance, and system updates.",
  whatsIncluded: [
    "Tailored Chart of Accounts suited to jurisdiction (UK / Global)",
    "Professional PDF invoice templates with payment gateways",
    "Multi-currency support and automated exchange rates",
    "Automated payment reminder workflows for overdue accounts",
    "CFO / Director financial dashboard setup",
  ],
  supportLevel: "Priority financial systems support, tax year transition assistance, and automated database backups.",
  techStack: ["ERPNext Accounts", "Stripe API", "Bank Feed Webhooks", "Report Builder"],
  faqs: [
    {
      question: "Can Finance OS accept online credit card payments?",
      answer: "Yes. Invoices embed direct Stripe / credit card links that automatically record the payment and clear accounts receivable upon success.",
    },
    {
      question: "Does Finance OS support multi-currency billing?",
      answer: "Yes. You can invoice in GBP, USD, EUR, INR, or any international currency with automated daily exchange rate conversion.",
    },
  ],
};

export default function FinanceOsPage() {
  return <ProductDetailPage product={productData} />;
}
