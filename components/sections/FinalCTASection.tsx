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

        {/* Action Buttons: Discuss + WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm shadow-xl shadow-blue-600/30 transition-all cursor-pointer group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/917675815245?text=Hi%2C%20I%20wanted%20to%20connect%20about%20your%20services%2C%20thanks."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
            </svg>
            <span>Chat on WhatsApp</span>
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
