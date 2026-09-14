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
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Commercial Architecture
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Implementation.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Managed Peace of Mind.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We separate one-time architectural setup from ongoing managed operational stewardship. Build with fixed milestone scopes; scale with continuous managed support.
          </p>

          {/* Pricing Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0a0f1d] border border-white/[0.1] shadow-xl">
            <button
              type="button"
              onClick={() => setBillingTab("monthly")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                billingTab === "monthly"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Managed Business OS (Monthly)</span>
            </button>
            <button
              type="button"
              onClick={() => setBillingTab("onetime")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                billingTab === "onetime"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>One-Time Implementation & Consulting</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MONTHLY MANAGED BUSINESS OS */}
        {billingTab === "monthly" && (
          <div className="mt-12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MONTHLY_OS_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular
                      ? "bg-[#0c1426] border-2 border-blue-500 shadow-2xl shadow-blue-500/15"
                      : "bg-[#090e1b]/90 border border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-blue-300 font-medium mt-0.5">{plan.tagline}</p>
                    </div>

                    <div className="py-2 border-y border-white/[0.06]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{plan.period}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        Ideal for: {plan.idealFor}
                      </span>
                    </div>

                    {/* Modules included */}
                    <div className="space-y-1.5 text-xs">
                      <span className="font-semibold text-slate-200 block font-mono text-[10px] uppercase">
                        Covered Applications
                      </span>
                      {plan.includedModules.map((m, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="truncate">{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features & SLA */}
                    <div className="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200 block font-mono text-[10px] uppercase">
                        Operational Scope
                      </span>
                      {plan.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-2">
                    <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                      <span>Service Level</span>
                      <span>{plan.sla}</span>
                    </div>
                    <a
                      href={`#contact?plan=${encodeURIComponent(plan.name)}`}
                      className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                          : "bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1]"
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
            <div className="p-8 sm:p-10 rounded-3xl bg-[#09101e] border border-blue-500/20 shadow-xl space-y-6">
              <div className="max-w-3xl">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Operational Philosophy
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {RECURRING_VALUE_EXPLANATION.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {RECURRING_VALUE_EXPLANATION.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {RECURRING_VALUE_EXPLANATION.pillars.map((pillar, idx) => {
                  const PillarIcon = ICON_MAP[pillar.icon] || ShieldCheck;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2"
                    >
                      <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <span>{pillar.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
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
                  className={`p-6 sm:p-7 rounded-3xl bg-[#090e1b]/90 border transition-all flex flex-col justify-between ${
                    serv.popular
                      ? "border-blue-500/50 shadow-xl shadow-blue-500/10"
                      : "border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-blue-300 border border-white/[0.08]">
                        {serv.category}
                      </span>
                      {serv.badge && (
                        <span className="text-[10px] font-mono text-emerald-400">
                          {serv.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">{serv.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{serv.deliverableScope}</p>
                    </div>

                    <div className="py-2 border-y border-white/[0.06] flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                        {serv.price}
                      </span>
                      {serv.originalPrice && (
                        <span className="text-xs text-slate-500 line-through font-mono">
                          {serv.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono ml-auto">
                        {serv.timeline}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {serv.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <a
                      href={`#contact?service=${encodeURIComponent(serv.name)}&price=${encodeURIComponent(serv.price)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{serv.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-slate-400 font-mono">
              All implementation projects include initial architecture discovery, custom field modeling, testing, and video SOP team training.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
