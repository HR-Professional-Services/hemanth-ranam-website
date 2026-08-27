"use client";

import { useState } from "react";
import { REVISED_PRICING_GROUPS } from "@/data/siteData";
import { Tag, ArrowRight, Info, ChevronDown } from "lucide-react";

export function PricingSection() {
  const [activeGroup, setActiveGroup] = useState<string>("business");
  const [expandedMobilePricing, setExpandedMobilePricing] = useState<number | null>(0);

  const selectedPricing =
    REVISED_PRICING_GROUPS.find((g) => g.category === activeGroup) ||
    REVISED_PRICING_GROUPS[0];

  const shortLabels: Record<string, string> = {
    business: "Business",
    software: "Software",
    trading: "Trading",
  };

  return (
    <section id="pricing" className="py-10 md:py-16 bg-slate-50/50 border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
              <Tag className="w-3 h-3" />
              <span>Project Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Transparent Project Rates
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Clear, affordable milestone-based pricing in USD ($). No hourly billing.
            </p>
          </div>

          {/* 3 Group Switcher Tabs */}
          <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-xs w-full sm:w-auto">
            {REVISED_PRICING_GROUPS.map((group) => {
              const isSelected = activeGroup === group.category;
              return (
                <button
                  key={group.category}
                  onClick={() => {
                    setActiveGroup(group.category);
                    setExpandedMobilePricing(0);
                  }}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all text-center ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="hidden sm:inline">{group.title}</span>
                  <span className="sm:hidden">{shortLabels[group.category] || group.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Mobile Accordion Pricing (< sm) */}
        <div className="sm:hidden space-y-2">
          {selectedPricing.items.map((item, index) => {
            const isExpanded = expandedMobilePricing === index;
            return (
              <div
                key={item.service}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() =>
                    setExpandedMobilePricing(isExpanded ? null : index)
                  }
                  className="w-full p-3.5 flex items-center justify-between text-left gap-2"
                >
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {item.service}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-black text-blue-600">
                      From {item.price}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/50 animate-fade-in">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-medium">Milestone Based</span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                      >
                        <span>Discuss Project</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 2. Desktop Compact Grid (>= sm) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {selectedPricing.items.map((item) => (
            <div
              key={item.service}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900 leading-tight">
                    {item.service}
                  </span>
                  <div className="flex items-baseline gap-1 shrink-0">
                    <span className="text-[10px] text-slate-400">From</span>
                    <span className="text-lg font-black text-blue-600">
                      {item.price}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">USD</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">Milestone Based</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-500">
          <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>
            Final pricing depends on scope, complexity and integrations. Technology & automation services only. No investment advice.
          </span>
        </div>
      </div>
    </section>
  );
}
