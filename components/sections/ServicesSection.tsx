"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  Workflow,
  Layers,
  Mail,
  Zap,
  FileText,
  Globe,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Binary,
  Sliders,
  Bot,
  Send,
  ArrowRight,
} from "lucide-react";

interface ServiceCardItem {
  name: string;
  categoryKey: "business" | "software" | "trading";
  categoryLabel: string;
  shortDesc: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

const ALL_SERVICES_CATALOG: ServiceCardItem[] = [
  // Business & Consulting
  {
    name: "Business Consultation",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Review your operational bottlenecks and map a practical systems roadmap.",
    slug: "business-consultation",
    icon: HelpCircle,
    badge: "Strategy",
  },
  {
    name: "Process / Tech Audit",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Audit current software, find tool duplications, and eliminate manual drag.",
    slug: "process-tech-audit",
    icon: Search,
    badge: "Audit",
  },
  {
    name: "Business Systems Consulting",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Review and re-architect fragmented operations into a unified system.",
    slug: "business-systems-consulting",
    icon: Workflow,
    badge: "Architecture",
  },
  {
    name: "Frappe / ERPNext Implementation",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Customized open-source ERP & CRM deployment with zero per-seat fees.",
    slug: "frappe-erpnext",
    icon: Layers,
    badge: "Open-Source ERP",
  },
  {
    name: "Website + Lead Capture + Basic CRM",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Capture every inquiry from web to Google Sheets with automated alerts.",
    slug: "website-lead-capture-crm",
    icon: Mail,
    badge: "Entry System",
  },
  {
    name: "Business Apps Script Automations",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Automate PDF invoices, Google Sheets pipelines, and email triggers.",
    slug: "apps-script-automation",
    icon: Zap,
    badge: "Automation",
  },
  {
    name: "Documentation & SOPs",
    categoryKey: "business",
    categoryLabel: "Business & Consulting",
    shortDesc: "Turn scattered company knowledge into repeatable digital execution.",
    slug: "documentation-sops",
    icon: FileText,
    badge: "Operations",
  },

  // Software & Web
  {
    name: "Website Basic → Premium",
    categoryKey: "software",
    categoryLabel: "Software & Web",
    shortDesc: "High-performance responsive websites engineered for speed and conversion.",
    slug: "websites",
    icon: Globe,
    badge: "Websites",
  },
  {
    name: "Fully Automated & Secured Websites",
    categoryKey: "software",
    categoryLabel: "Software & Web",
    shortDesc: "Edge-secured web platforms syncing leads directly to CRM and backend tools.",
    slug: "websites",
    icon: ShieldCheck,
    badge: "Cloud & Edge",
  },
  {
    name: "Custom Business Systems",
    categoryKey: "software",
    categoryLabel: "Software & Web",
    shortDesc: "Tailored CRM, Finance, HR, ERP, Booking, Operations & Customer software.",
    slug: "custom-business-systems",
    icon: Cpu,
    badge: "Tailored Software",
  },

  // Trading Technology
  {
    name: "TradingView Indicators (Std & Custom)",
    categoryKey: "trading",
    categoryLabel: "Trading Technology",
    shortDesc: "100% non-repainting rule-based Pine Script v5 indicators and visual alerts.",
    slug: "tradingview-indicators",
    icon: TrendingUp,
    badge: "Pine Script v5",
  },
  {
    name: "TradingView Strategies (Std & Custom)",
    categoryKey: "trading",
    categoryLabel: "Trading Technology",
    shortDesc: "Systematic strategy backtesting scripts with realistic fees and slippage.",
    slug: "tradingview-strategies",
    icon: Binary,
    badge: "Backtesting",
  },
  {
    name: "MT5 Custom Scanner & Alert System",
    categoryKey: "trading",
    categoryLabel: "Trading Technology",
    shortDesc: "Multi-symbol market screener monitoring confluence across 28+ pairs.",
    slug: "mt5-scanner-alerts",
    icon: Sliders,
    badge: "MQL5 Screener",
  },
  {
    name: "MT5 Custom Auto-Trading Systems",
    categoryKey: "trading",
    categoryLabel: "Trading Technology",
    shortDesc: "Native MQL5 Expert Advisors with strict equity risk & drawdown rules.",
    slug: "mt5-auto-trading",
    icon: Bot,
    badge: "MQL5 EA",
  },
  {
    name: "Custom Trading Alerts to Telegram",
    categoryKey: "trading",
    categoryLabel: "Trading Technology",
    shortDesc: "Sub-second webhook signal delivery directly to private Telegram channels.",
    slug: "telegram-trading-alerts",
    icon: Send,
    badge: "Alerts Bridge",
  },
];

export function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? ALL_SERVICES_CATALOG
      : ALL_SERVICES_CATALOG.filter((s) => s.categoryKey === activeFilter);

  return (
    <section id="services" className="py-14 md:py-24 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5" />
              <span>Commercial Service Catalogue</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Actionable Business Systems &amp; Technology
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Compact, high-impact services designed for speed, affordability, and practical business execution.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-full md:w-auto">
            {[
              { key: "all", label: "All Services" },
              { key: "business", label: "Business & Consulting" },
              { key: "software", label: "Software & Web" },
              { key: "trading", label: "Trading Technology" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeFilter === tab.key
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Horizontal Cards Grid (Desktop & Mobile: [ICON] beside [HEADING], short description, Learn More) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.slug + service.name}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Horizontal Header: [ICON] next to [SERVICE HEADING] */}
                  <div className="flex items-start justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-all">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {service.name}
                      </h3>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 shrink-0">
                      {service.badge}
                    </span>
                  </div>

                  {/* Extremely short description */}
                  <p className="text-xs text-slate-600 font-normal leading-relaxed pl-12 mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Action: Learn More linking to dedicated subpage */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between pl-12">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`#contact`}
                    className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Discuss →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Every service features a dedicated commercial landing page with full problem, workflow, and deliverable specs.</span>
          </div>
          <span className="text-xs font-mono font-bold text-blue-600 bg-white px-3 py-1 rounded-xl border border-slate-200">
            No Popups • 100% Dedicated URLs
          </span>
        </div>

      </div>
    </section>
  );
}
