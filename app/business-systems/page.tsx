import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import {
  Layers,
  Users,
  CreditCard,
  TrendingUp,
  Zap,
  Boxes,
  FolderKanban,
  Shield,
  ArrowRight,
  Sparkles,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Connected Business Operating Systems | Hemanth Ranam",
  description:
    "Explore our full suite of integrated Business Operating Systems: CRM OS, Finance OS, Sales OS, Operations OS, Inventory OS, and All-in-One Business OS.",
  alternates: {
    canonical: "/business-systems",
  },
};

const SYSTEMS = [
  {
    title: "Business OS (All-in-One)",
    slug: "/business-os",
    tagline: "The complete serverless enterprise operating system for growing companies.",
    icon: Layers,
    accent: "blue",
    features: ["Unified multi-team environment", "Zero per-user software licensing", "Google Drive automated client folders", "Real-time executive cockpit"],
    price: "From $999",
  },
  {
    title: "CRM OS",
    slug: "/crm-os",
    tagline: "Lead capture, pipeline stages, and automated client onboarding.",
    icon: Users,
    accent: "indigo",
    features: ["Inbound web form integration", "Deal velocity tracking", "Automated email alerts", "Zero lead leakage"],
    price: "From $199",
  },
  {
    title: "Finance OS",
    slug: "/finance-os",
    tagline: "Automated invoice generation, expense tracking, and cash flow forecasting.",
    icon: CreditCard,
    accent: "emerald",
    features: ["One-click PDF invoices", "Recurring billing monitor", "12-month runway forecast", "Stripe fee reconciliation"],
    price: "From $199",
  },
  {
    title: "Sales OS",
    slug: "/sales-os",
    tagline: "Customer database, quotation generation, and sales team pipeline analytics.",
    icon: TrendingUp,
    accent: "amber",
    features: ["Proposal & quote generator", "Sales rep target tracker", "Conversion rate analytics", "Commission ledger"],
    price: "From $199",
  },
  {
    title: "Operations OS",
    slug: "/operations-os",
    tagline: "Standard operating procedures, approval chains, and internal task routing.",
    icon: Zap,
    accent: "cyan",
    features: ["Digital SOP handbook", "Role-based approval trees", "Team handoff verification", "Incident logs"],
    price: "From $299",
  },
  {
    title: "HRMS OS",
    slug: "/hrms-os",
    tagline: "Employee directory, attendance, leave approvals, and onboarding records.",
    icon: Shield,
    accent: "violet",
    features: ["Team profile directory", "Leave quota calculator", "Automated welcome kit", "Credential tracker"],
    price: "From $199",
  },
  {
    title: "Inventory OS",
    slug: "/inventory-os",
    tagline: "Stock ledger, minimum threshold reorder alerts, and supplier records.",
    icon: Boxes,
    accent: "rose",
    features: ["Multi-warehouse balances", "Low-stock automated alerts", "Supplier order tracker", "SKU barcode mapping"],
    price: "From $249",
  },
  {
    title: "Project OS",
    slug: "/project-os",
    tagline: "Client milestone delivery, sprint task tracking, and time management.",
    icon: FolderKanban,
    accent: "teal",
    features: ["Milestone burndown charts", "Client review gates", "Deliverable sign-off logs", "SLA time tracking"],
    price: "From $199",
  },
];

export default function BusinessSystemsPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Modular Operational Architecture</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Connected Business{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Operating Systems.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your company should not operate across ten isolated apps. Replace fragmented subscriptions with unified, zero-license operational engines.
            </p>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SYSTEMS.map((sys) => {
                const Icon = sys.icon;
                return (
                  <div
                    key={sys.slug}
                    className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {sys.title}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {sys.tagline}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <ul className="space-y-1.5">
                          {sys.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {sys.price}
                      </span>
                      <Link
                        href={sys.slug}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                      >
                        <span>Explore OS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
