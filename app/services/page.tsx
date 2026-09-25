import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import {
  Sparkles,
  ArrowRight,
  Layers,
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Commercial Pillars | Hemanth Ranam",
  description:
    "Explore our complete service architecture: Business Consulting, Website Engines, Process Automation, Google Sheets, ERPNext, and Trading Technology.",
};

const PILLARS = [
  {
    code: "CAT-01",
    name: "Consulting & Strategy",
    tagline: "Rapid bottleneck triage, software subscription audits, and systems blueprints.",
    priceRange: "$25 – $199",
    href: "/products?category=Consulting",
    icon: Layers,
    items: ["30-Min Rapid Triage ($25)", "60-Min Strategy ($49)", "Systems Blueprint ($149)", "Business Audit ($99)"],
  },
  {
    code: "CAT-02",
    name: "Websites & Conversion Engines",
    tagline: "High-performance responsive websites connected directly to Google Sheets CRM.",
    priceRange: "$149 – $799+",
    href: "/products?category=Website",
    icon: Globe,
    items: ["Landing Page ($149)", "Website Starter ($299)", "Business Website ($499)", "Website + Automation ($799)"],
  },
  {
    code: "CAT-03",
    name: "Business Automation & Apps Script",
    tagline: "Serverless webhooks, automated email alerts, and spreadsheet synchronizers.",
    priceRange: "$19 – $499+",
    href: "/products?category=Automation",
    icon: Zap,
    items: ["Automation Starter ($149)", "Business Automation ($299)", "Apps Scripts ($19–$149)", "Automation System ($499)"],
  },
  {
    code: "CAT-04",
    name: "Frappe Framework & ERPNext",
    tagline: "Open-source enterprise Business OS configured for your specific industry.",
    priceRange: "$49 – $1,299+",
    href: "/products?category=Frappe",
    icon: ShieldCheck,
    items: ["ERP Feasibility Session ($49)", "Frappe Cloud Setup ($299)", "Single Division OS ($369)", "Full Business OS"],
  },
  {
    code: "CAT-05",
    name: "Institutional Trading Technology",
    tagline: "Custom Pine Script v5 indicators, MT5 scanners, and Telegram signal bridges.",
    priceRange: "$49 – $299+",
    href: "/products?category=Trading",
    icon: TrendingUp,
    items: ["TradingView Indicator ($49)", "Pine Script Strategy ($149)", "MT5 Scanner ($149)", "Telegram Bridge ($149)"],
  },
  {
    code: "CAT-06",
    name: "Digital Templates & Checklists",
    tagline: "Instant-download Google Sheets, operations workbooks, and launch audit checklists.",
    priceRange: "$5 – $39",
    href: "/products?category=Digital",
    icon: FileSpreadsheet,
    items: ["Website Launch Checklist ($5)", "Automation Checklist ($9)", "Systems Workbook ($19)", "Full Bundle ($39)"],
  },
  {
    code: "CAT-07",
    name: "Monthly Management & Retainers",
    tagline: "Continuous uptime monitoring, daily backups, and direct Systems Architect SLA support.",
    priceRange: "$29 – $299/mo",
    href: "/monthly",
    icon: Sparkles,
    items: ["Starter Care ($29/mo)", "Business Care ($79/mo)", "Systems Partner ($149/mo)", "Growth Partner ($299/mo)"],
  },
  {
    code: "CAT-08",
    name: "Free Lead Magnets & Tools",
    tagline: "12 free practical spreadsheets, audit checklists, and business workbooks.",
    priceRange: "Free ($0)",
    href: "/resources",
    icon: Download,
    items: ["Free CRM Sheet", "Free Lead Tracker", "Free Audit Workbook", "Free Cash Flow Model"],
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Service Architecture</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Systems Architecture.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Simplified Delivery.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We help founders eliminate manual drag through affordable, fixed-milestone consulting, automation, websites, and business operating systems.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((p) => {
                const IconComponent = p.icon;
                return (
                  <Link
                    key={p.code}
                    href={p.href}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">
                          {p.code}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          {p.priceRange}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center border border-blue-100 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h2 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {p.name}
                      </h2>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {p.tagline}
                      </p>

                      <ul className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                        {p.items.map((it, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
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
