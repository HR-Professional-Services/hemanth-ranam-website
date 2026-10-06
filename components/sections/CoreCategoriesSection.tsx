"use client";

import Link from "next/link";
import {
  Layers,
  Workflow,
  Cpu,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function CoreCategoriesSection() {
  const categories = [
    {
      id: "business-systems",
      title: "Business Systems",
      icon: Layers,
      desc: "CRM, sales, operations, finance and management systems.",
      price: "From $49",
      href: "/services?cat=business-systems",
      features: [
        "Eliminate fragmented spreadsheets",
        "Unified customer and order records",
        "Executive visibility and reporting",
      ],
      badge: "Core Flagship",
    },
    {
      id: "automation",
      title: "Automation",
      icon: Workflow,
      desc: "Connect tools and remove repetitive manual work.",
      price: "From $149",
      href: "/services?cat=automation",
      features: [
        "Zero-latency webhook integrations",
        "Google Workspace & Sheet workflows",
        "Automated invoices & email dispatches",
      ],
      badge: "Fast Payback",
    },
    {
      id: "erpnext",
      title: "ERPNext",
      icon: Cpu,
      desc: "Implementation, configuration and custom business workflows.",
      price: "From $499",
      href: "/services?cat=erpnext",
      features: [
        "Accounts, Stock, CRM & HRMS setup",
        "Custom DocTypes & server scripts",
        "Zero per-user software licensing fees",
      ],
      badge: "Enterprise Fit",
    },
    {
      id: "websites",
      title: "Websites",
      icon: Globe,
      desc: "Professional business websites connected to lead and operational workflows.",
      price: "From $199",
      href: "/services?cat=websites",
      features: [
        "Modern high-speed edge architecture",
        "Direct CRM & inquiry synchronization",
        "Responsive, accessible, mobile-first",
      ],
      badge: "Lead Engine",
    },
    {
      id: "trading-technology",
      title: "Trading Technology",
      icon: TrendingUp,
      desc: "TradingView and MT5 software engineering.",
      price: "From $49",
      href: "/trading-technology",
      features: [
        "Pine Script v6 confirmed-bar indicators",
        "MetaTrader 5 (MQL5) scanners & EAs",
        "Automated webhook-to-broker execution",
      ],
      badge: "Specialist Tech",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Focused Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Five Core Service Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Practical technology services designed for growing businesses. Start with targeted advice or deploy complete integrated systems.
          </p>
        </div>

        {/* 5 Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isWide = idx === 3 || idx === 4;
            return (
              <div
                key={cat.id}
                className={`bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group ${
                  isWide ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {cat.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6 text-xs text-slate-600">
                    {cat.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-slate-900">
                    {cat.price}
                  </span>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View full catalogue link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View all commercial offerings and package details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
