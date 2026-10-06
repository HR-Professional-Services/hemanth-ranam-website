"use client";

import { useState } from "react";
import Link from "next/link";
import { MONTHLY_PLANS, CURATED_OFFERS } from "@/data/curatedCatalog";
import { useCart } from "@/context/CartContext";
import {
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Calendar,
} from "lucide-react";

export function BusinessOsPricingSection() {
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<"projects" | "monthly">("projects");

  const projectSteps = [
    {
      step: "01 — Start Small",
      title: "Business Systems Consultation",
      price: "$49",
      numericPrice: 49,
      id: "biz-sys-consultation",
      timeline: "60 Minutes",
      desc: "Diagnose acute software bottlenecks and clarify your digital architecture.",
      features: [
        "1-on-1 private video session with Hemanth",
        "Tool consolidation recommendations",
        "Executive action notes (PDF)",
        "100% credited toward implementation",
      ],
      cta: "Book Consultation ($49)",
      popular: true,
    },
    {
      step: "02 — Diagnose",
      title: "Business Systems Audit",
      price: "$99",
      numericPrice: 99,
      id: "biz-sys-audit",
      timeline: "3–5 Days",
      desc: "Review current tools, team handoffs, spreadsheets, and cost waste.",
      features: [
        "Comprehensive Systems Audit Report",
        "Data flow and integration map",
        "Software rationalization guide",
        "45-minute findings review walkthrough",
      ],
      cta: "Order Audit ($99)",
    },
    {
      step: "03 — Plan",
      title: "Systems Blueprint",
      price: "$199",
      numericPrice: 199,
      id: "biz-sys-blueprint",
      timeline: "5–7 Days",
      desc: "Detailed system architecture, data models, and automation plan.",
      features: [
        "Architectural Blueprint Document",
        "Entity relationship & data models",
        "Approval & workflow routing specs",
        "Implementation milestone roadmap",
      ],
      cta: "Order Blueprint ($199)",
    },
    {
      step: "04 — Build",
      title: "Implementation & Automation",
      price: "From $149",
      numericPrice: 149,
      id: "auto-starter",
      timeline: "Milestone-based",
      desc: "Production deployment of configured systems, automations, or websites.",
      features: [
        "Automation workflows (from $149)",
        "Business websites (from $399)",
        "ERPNext standard setup (from $499)",
        "End-to-end testing and training",
      ],
      cta: "View Implementation",
      isLink: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" />
            <span>Clear Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Start small with an affordable diagnostic session or protect your business with monthly operational care.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "projects"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Four-Stage Project Path
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("monthly")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "monthly"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Support Plans
            </button>
          </div>
        </div>

        {/* Tab 1: Four-Stage Project Path */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {projectSteps.map((p) => (
              <div
                key={p.step}
                className={`bg-white rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                  p.popular
                    ? "border-blue-600 shadow-md shadow-blue-500/10 ring-1 ring-blue-600"
                    : "border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      {p.step}
                    </span>
                    {p.popular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {p.title}
                  </h3>
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl font-black text-slate-900">
                      {p.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      ({p.timeline})
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {p.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6 text-xs text-slate-700">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {p.isLink ? (
                    <Link
                      href="/services"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors"
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: p.id,
                          name: p.title,
                          price: p.numericPrice,
                          priceDisplay: p.price,
                          category: "Business Systems",
                          billingType: "ONE_TIME",
                          deliveryTime: p.timeline,
                          shortDescription: p.desc,
                        })
                      }
                      className={`w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                        p.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Monthly Support Plans */}
        {activeTab === "monthly" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {MONTHLY_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "border-blue-600 shadow-lg shadow-blue-500/10 ring-1 ring-blue-600"
                    : "border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl font-black text-slate-900">
                      {plan.priceDisplay}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {plan.tagline}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-6">
                    <strong className="text-slate-800">Ideal for: </strong>
                    {plan.idealFor}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6 text-xs text-slate-700">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: plan.id,
                        name: `${plan.name} Support Plan`,
                        price: plan.price,
                        priceDisplay: `${plan.priceDisplay}/mo`,
                        category: "Monthly Support",
                        billingType: "MONTHLY",
                        deliveryTime: "Immediate Activation",
                        shortDescription: plan.tagline,
                      })
                    }
                    className={`w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Pricing Link */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View complete pricing breakdown, inclusions and FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
