"use client";

import { HeroScene3D } from "@/components/3d/HeroScene3D";
import { ArrowRight, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-100/40 via-sky-100/30 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Small Price. Big Work.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-slate-900 leading-[1.14]">
              BUILD SMARTER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                Websites. Business Systems. Automation. Trading Technology.
              </span>
            </h1>

            <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
              Do more business. Let your systems do more work.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed font-normal">
              Practical technology consultancy and custom system development. We turn messy operations, spreadsheets, and manual tasks into connected, automated workflows that simply work.
            </p>

            {/* Quick Value Signals */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Affordable Rates (USD)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                No Hourly Billing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                WhatsApp Direct Support
              </span>
            </div>

            {/* Actions: Discuss + WhatsApp */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                id="hero-contact-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all group cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://wa.me/917675815245?text=Hi%2C%20I%20wanted%20to%20connect%20about%20your%20services%2C%20thanks."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all cursor-pointer"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 fill-emerald-600 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Visualization + ScaleNova-Style Operational Flow Bento Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative space-y-4">
            <HeroScene3D />

            {/* Interactive Bento Workflow Stream (ScaleNova Architecture) */}
            <div className="w-full p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  Continuous Operational Flow
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">
                  SLA &lt; 24h
                </span>
              </div>

              <div className="flex items-center justify-between gap-1 text-[10px] font-bold text-slate-700 overflow-x-auto no-scrollbar py-0.5">
                <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200/80 shrink-0 text-center">
                  Audit
                </span>
                <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />
                <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200/80 shrink-0 text-center">
                  Architecture
                </span>
                <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />
                <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200/80 shrink-0 text-center">
                  Build & Sync
                </span>
                <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />
                <span className="px-2 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 shrink-0 text-center font-extrabold">
                  Support
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="block text-[11px] font-bold text-slate-900">Direct Contact</span>
                  <span className="block text-[9px] text-slate-500 font-medium">No junior agency layers</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="block text-[11px] font-bold text-slate-900">Full Ownership</span>
                  <span className="block text-[9px] text-slate-500 font-medium">100% Code & Database</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
