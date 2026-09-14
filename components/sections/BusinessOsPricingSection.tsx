"use client";

import { useState } from "react";
import {
  ONE_TIME_SERVICES,
  MONTHLY_OS_PLANS,
  RECURRING_VALUE_EXPLANATION,
} from "@/data/pricingData";
import {
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Server,
  RefreshCw,
  Headphones,
  Sliders,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Server,
  Shield: ShieldCheck,
  RefreshCw,
  Headphones,
  Sliders,
  BookOpen,
};

export function BusinessOsPricingSection() {
  const [billingTab, setBillingTab] = useState<"monthly" | "onetime">("monthly");

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Commercial Architecture
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Transparent Implementation.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Managed Peace of Mind.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We separate one-time architectural setup from ongoing managed operational stewardship. Build with fixed milestone scopes; scale with continuous managed support.
          </p>

          {/* Pricing Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingTab("monthly")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingTab === "monthly"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Managed Business OS (Monthly)</span>
            </button>
            <button
              type="button"
              onClick={() => setBillingTab("onetime")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingTab === "onetime"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>One-Time Implementation &amp; Consulting</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MONTHLY MANAGED BUSINESS OS */}
        {billingTab === "monthly" && (
          <div className="mt-12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {MONTHLY_OS_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 relative bg-white ${
                    plan.popular
                      ? "border-2 border-blue-600 shadow-xl shadow-blue-500/15 ring-4 ring-blue-50"
                      : "border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-[10px] font-bold text-white uppercase tracking-wider shadow-md whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Inline Heading next to icon */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{plan.name}</h3>
                        <p className="text-[11px] text-blue-600 font-semibold">{plan.tagline}</p>
                      </div>
                    </div>

                    <div className="py-2.5 border-y border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{plan.period}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1 leading-normal">
                        <strong>Ideal for:</strong> {plan.idealFor}
                      </span>
                    </div>

                    {/* Modules included: Full Wording, No Truncation */}
                    <div className="space-y-2 text-xs">
                      <span className="font-bold text-slate-800 block font-mono text-[10px] uppercase tracking-wider">
                        Covered Applications
                      </span>
                      <div className="space-y-1.5">
                        {plan.includedModules.map((m, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-800 leading-snug">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features & SLA: Full Wording, No Truncation */}
                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                      <span className="font-bold text-slate-800 block font-mono text-[10px] uppercase tracking-wider">
                        Operational Scope
                      </span>
                      <div className="space-y-1.5">
                        {plan.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 space-y-2.5">
                    <div className="text-[11px] font-mono text-emerald-700 flex items-center justify-between font-semibold">
                      <span>Service Level</span>
                      <span>{plan.sla}</span>
                    </div>
                    <a
                      href={`/#contact?plan=${encodeURIComponent(plan.name)}`}
                      className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white shadow-md shadow-blue-500/25"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                      }`}
                    >
                      <span>{plan.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Recurring Value Explanation Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              <div className="max-w-3xl">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  Operational Philosophy
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {RECURRING_VALUE_EXPLANATION.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {RECURRING_VALUE_EXPLANATION.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {RECURRING_VALUE_EXPLANATION.pillars.map((pillar, idx) => {
                  const PillarIcon = ICON_MAP[pillar.icon] || ShieldCheck;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2"
                    >
                      <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ONE-TIME IMPLEMENTATION & CONSULTING */}
        {billingTab === "onetime" && (
          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ONE_TIME_SERVICES.map((serv) => (
                <div
                  key={serv.id}
                  className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all flex flex-col justify-between ${
                    serv.popular
                      ? "border-2 border-blue-600 shadow-lg shadow-blue-500/10"
                      : "border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                        {serv.category}
                      </span>
                      {serv.badge && (
                        <span className="text-[10px] font-mono text-emerald-700 font-bold">
                          {serv.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{serv.name}</h3>
                    </div>

                    <p className="text-xs text-slate-500">{serv.deliverableScope}</p>

                    <div className="py-2.5 border-y border-slate-100 flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                        {serv.price}
                      </span>
                      {serv.originalPrice && (
                        <span className="text-xs text-slate-400 line-through font-mono">
                          {serv.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-slate-500 font-mono ml-auto font-medium">
                        {serv.timeline}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-700">
                      {serv.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={`/#contact?service=${encodeURIComponent(serv.name)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/25 transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{serv.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 font-mono">
              All implementation projects include initial architecture discovery, custom field modeling, testing, and video SOP team training.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
