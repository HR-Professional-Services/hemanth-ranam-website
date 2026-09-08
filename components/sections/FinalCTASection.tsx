"use client";

import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Small Price. Big Work.</span>
        </div>

        {/* Major Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
          YOUR BUSINESS DOESN&apos;T NEED MORE TOOLS. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
            IT NEEDS BETTER SYSTEMS.
          </span>
        </h2>

        {/* 4 Supporting Mantras */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto my-8">
          {[
            "Start small.",
            "Build what you need.",
            "Automate what you can.",
            "Grow when you're ready.",
          ].map((mantra, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{mantra}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm shadow-xl shadow-blue-600/30 transition-all cursor-pointer group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
          >
            <span>Transparent Project Rates</span>
          </a>
        </div>

        {/* Sub-assurance */}
        <p className="mt-6 text-xs text-slate-400 font-normal">
          Direct engagement with founder • Milestone-based pricing in USD ($) • Guaranteed 24-hour response
        </p>

      </div>
    </section>
  );
}
