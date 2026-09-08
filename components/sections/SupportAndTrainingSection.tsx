"use client";

import { SUPPORT_AND_TRAINING_TIERS } from "@/data/siteData";
import { Headphones, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function SupportAndTrainingSection() {
  return (
    <section id="monthly-support" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Monthly Support & Improvement</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Your System Should Not Be Abandoned After Launch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Project delivery is not the end. We support your software, train your staff, resolve issues quickly, and continuously automate more of your operations as your business scales.
          </p>
        </div>

        {/* 3 Support Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SUPPORT_AND_TRAINING_TIERS.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
                  tier.recommended
                    ? "bg-slate-900 text-white border-blue-500 shadow-xl shadow-blue-500/10 md:-translate-y-2"
                    : "bg-slate-50/70 text-slate-900 border-slate-200 shadow-2xs hover:border-blue-400 hover:bg-white"
                }`}
              >
                {/* Popular Badge */}
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Continuous Improvement</span>
                  </div>
                )}

                <div>
                  {/* Tier Badge & Name */}
                  <div className="mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block mb-2 ${
                        tier.recommended
                          ? "bg-slate-800 text-blue-400 border border-slate-700"
                          : "bg-slate-200/80 text-slate-600"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <h3 className="text-lg font-black tracking-tight">
                      {tier.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-snug ${tier.recommended ? "text-slate-300" : "text-slate-600"}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing Retainer Scope (Configurable Architecture, no invented price) */}
                  <div className={`p-3.5 rounded-2xl mb-6 border ${tier.recommended ? "bg-slate-800/80 border-slate-700" : "bg-white border-slate-200"}`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-blue-500 mb-0.5">
                      Ongoing Agreement
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-black tracking-tight">
                        Tailored Monthly Retainer
                      </span>
                    </div>
                    <span className={`text-[11px] block mt-0.5 ${tier.recommended ? "text-slate-400" : "text-slate-500"}`}>
                      Configurable in USD ($) per project scope
                    </span>
                  </div>

                  <p className={`text-xs mb-6 leading-relaxed ${tier.recommended ? "text-slate-300" : "text-slate-600"}`}>
                    {tier.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-8">
                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${tier.recommended ? "text-slate-400" : "text-slate-500"}`}>
                      Included Support Scope
                    </span>
                    {tier.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.recommended ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span className={tier.recommended ? "text-slate-200" : "text-slate-700"}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className={`pt-4 border-t ${tier.recommended ? "border-slate-800" : "border-slate-200"}`}>
                  <a
                    href="#contact"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.recommended
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>Discuss {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All ongoing monthly agreements operate on flexible milestone terms with no multi-year lock-in.
            </span>
          </div>
          <a
            href="#lifecycle"
            className="font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>See How We Train & Handover Systems</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
