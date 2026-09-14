"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Layers, TrendingUp, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HeroVisualDashboard } from "./HeroVisualDashboard";

export function Hero() {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-22 overflow-hidden bg-white">
      {/* Subtle radial ambient blue gradients on white */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-blue-100/60 via-sky-50/40 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag: Managed Business & Trading Technology */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wide text-blue-800 uppercase font-mono">
              Managed Business OS &amp; Trading Technology Systems
            </span>
          </div>
        </div>

        {/* Primary Headline with Rich Blue Gradient */}
        <div className="text-center max-w-4xl mx-auto mt-4 sm:mt-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            BUILD YOUR{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              BUSINESS OPERATING SYSTEM.
            </span>
          </h1>

          <p className="mt-3.5 sm:mt-4 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            One connected environment for your customers, workforce, financials, and automated growth. Powered by ERPNext and custom trading technology.
          </p>

          {/* Twin Commercial Pillars Visual Switcher (Heading Next to Icon) */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="/#products"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50/90 border border-blue-200 hover:bg-blue-100/80 text-blue-800 text-xs font-semibold transition-all group shadow-sm"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span>01 Managed Business OS</span>
              <span className="text-[10px] bg-blue-200/70 text-blue-800 px-1.5 py-0.5 rounded font-mono font-bold">10 Modules</span>
            </a>

            <a
              href="/#trading-tech"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50/90 border border-sky-200 hover:bg-sky-100/80 text-sky-900 text-xs font-semibold transition-all group shadow-sm"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <span>02 Trading Technology</span>
              <span className="text-[10px] bg-sky-200/70 text-sky-900 px-1.5 py-0.5 rounded font-mono font-bold">Pine &amp; MT5</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-lg shadow-blue-600/25 border border-blue-400/20 transition-all hover:scale-[1.02]"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Business OS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/#trading-tech"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all hover:scale-[1.02]"
            >
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Trading Technology</span>
            </a>

            <a
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-700 bg-slate-100/80 hover:bg-slate-100 border border-slate-200 transition-all"
            >
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Visual Trust Metrics Strip (Headings next to metrics) */}
          <div className="mt-7 pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-base sm:text-lg font-bold text-slate-900 font-mono">100%</div>
              <div className="text-[11px] text-slate-500 font-medium">Data Ownership</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-base sm:text-lg font-bold text-emerald-600 font-mono">Zero</div>
              <div className="text-[11px] text-slate-500 font-medium">Per-Seat Fees</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-base sm:text-lg font-bold text-blue-600 font-mono">ERPNext</div>
              <div className="text-[11px] text-slate-500 font-medium">Open-Core Engine</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-base sm:text-lg font-bold text-sky-600 font-mono">Pine &amp; MT5</div>
              <div className="text-[11px] text-slate-500 font-medium">Trading Scripts</div>
            </div>
          </div>
        </div>

        {/* Floating Windows Dashboard Visual */}
        <HeroVisualDashboard />
      </div>
    </section>
  );
}
