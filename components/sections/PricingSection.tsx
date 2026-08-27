"use client";

import { useState } from "react";
import { PRICING_PLANS } from "@/data/siteData";
import { DollarSign, Check, ArrowRight, Tag, Info } from "lucide-react";

export function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Business", "Software", "Trading Tech"];

  const filteredPlans =
    activeCategory === "All"
      ? PRICING_PLANS
      : PRICING_PLANS.filter((p) => p.category === activeCategory);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Project Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Transparent Project-Based Rates
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Clear, affordable milestone-based pricing for businesses, founders, and traders. No hourly billing surprises.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPlans.map((plan) => (
            <div
              key={plan.title}
              className={`p-5 rounded-3xl bg-white border transition-all duration-150 flex flex-col justify-between relative ${
                plan.popular
                  ? "border-blue-500 shadow-md ring-1 ring-blue-500/20"
                  : "border-slate-200/90 hover:border-blue-300 hover:shadow-xs"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 right-4 text-[10px] font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded-full shadow-xs">
                  Popular
                </span>
              )}

              <div>
                <span className="text-[10px] font-mono font-semibold uppercase text-slate-400">
                  {plan.category}
                </span>

                <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                  {plan.title}
                </h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xs font-medium text-slate-500">From</span>
                  <span className="text-2xl font-black text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400">USD</span>
                </div>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {plan.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {plan.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-xs text-slate-700 font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  href="#contact"
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                  }`}
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-500">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Note on Project Scope:</strong> Final pricing depends on project scope, complexity, and third-party integrations. Fixed quotes are confirmed after requirement scoping. Technology & automation engineering services only.
          </span>
        </div>
      </div>
    </section>
  );
}
