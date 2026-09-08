"use client";

import { useState } from "react";
import Link from "next/link";
import { REVISED_PRICING_GROUPS } from "@/data/siteData";
import { Tag, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("business");

  const selectedPricingGroup =
    REVISED_PRICING_GROUPS.find((g) => g.category === activeCategory) ||
    REVISED_PRICING_GROUPS[0];

  const categoryLabels: Record<string, string> = {
    business: "Business & Consulting",
    software: "Software & Web",
    trading: "Trading Technology",
  };

  const handleDiscussClick = (item: {
    categoryLabel?: string;
    service: string;
    price: string;
    currency?: string;
  }) => {
    if (typeof window !== "undefined") {
      const category = item.categoryLabel || "Business & Consulting";
      const service = item.service;
      const plan = item.service;
      const priceVal = item.price.startsWith("$") ? `${item.price} USD` : item.price;

      // Dispatch custom event to auto-populate ContactSection
      window.dispatchEvent(
        new CustomEvent("hrps-select-plan", {
          detail: {
            category,
            service,
            selectedPlan: plan,
            price: priceVal,
          },
        })
      );

      // Smooth scroll to contact form
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pricing" className="py-14 md:py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Transparent Project Rates</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Project Pricing
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Clear, affordable milestone-based pricing in USD ($). Reduced by 25%–30% with no hourly billing.
            </p>
          </div>

          {/* 3 Commercial Category Switcher */}
          <div className="grid grid-cols-3 gap-1 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs w-full md:w-auto">
            {REVISED_PRICING_GROUPS.map((group) => {
              const isSelected = activeCategory === group.category;
              return (
                <button
                  key={group.category}
                  onClick={() => setActiveCategory(group.category)}
                  className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-xl transition-all text-center cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span className="hidden sm:inline">{categoryLabels[group.category] || group.title}</span>
                  <span className="sm:hidden">{group.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {selectedPricingGroup.items.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category Label */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                    {item.categoryLabel || selectedPricingGroup.title}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                    Milestone
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                  {item.service}
                </h3>

                {/* Price Display: Current price visually dominant, was price subtle */}
                <div className="mb-3">
                  {item.originalPrice && (
                    <div className="text-xs text-slate-400 line-through mb-0.5">
                      Was {item.originalPrice}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-bold text-slate-500">From</span>
                    <span className="text-3xl font-black text-slate-900 tracking-tight">
                      {item.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      {item.currency || "USD"}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="mb-6 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included Features:
                  </span>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions: [Learn More] [Discuss] */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/services/${item.slug || item.serviceId || "business-consultation"}`}
                  className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Learn More →
                </Link>

                <button
                  onClick={() => handleDiscussClick(item)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-2xs transition-all cursor-pointer hover:shadow-sm"
                >
                  <span>Discuss</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Callout Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Need post-launch system maintenance, team training, or ongoing improvements?</span>
          </div>
          <a
            href="#monthly-support"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
          >
            <span>Explore Monthly Support &amp; Improvement</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
