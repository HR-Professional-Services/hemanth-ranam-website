"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Layers, TrendingUp, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HeroVisualDashboard } from "./HeroVisualDashboard";

export function Hero() {
  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag: Managed Business & Trading Technology */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-200 uppercase font-mono">
              Managed Business OS &amp; Trading Technology Systems
            </span>
          </div>
        </div>

        {/* Primary Headline: Concise & Powerful */}
        <div className="text-center max-w-4xl mx-auto mt-5 sm:mt-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            BUILD YOUR{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              BUSINESS OPERATING SYSTEM.
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            One connected environment for your customers, workforce, financials, and automated growth. Powered by ERPNext and institutional trading systems.
          </p>

          {/* Twin Commercial Pillars Visual Switcher */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 hover:bg-blue-500/20 text-blue-300 text-xs font-medium transition-all group"
            >
              <Layers className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>01 Managed Business OS</span>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-mono">10 Modules</span>
            </a>

            <a
              href="#trading-tech"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-violet-500/10 border border-violet-500/25 hover:bg-violet-500/20 text-violet-300 text-xs font-medium transition-all group"
            >
              <TrendingUp className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
              <span>02 Trading Technology</span>
              <span className="text-[10px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded font-mono">Pine &amp; MT5</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 border border-blue-400/30 transition-all hover:scale-[1.02]"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Business OS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#trading-tech"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all hover:scale-[1.02]"
            >
              <TrendingUp className="w-4 h-4 text-violet-400" />
              <span>Trading Technology</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] transition-all"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Visual Trust Metrics Strip */}
          <div className="mt-8 pt-5 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-base sm:text-lg font-bold text-white font-mono">100%</div>
              <div className="text-[11px] text-slate-400">Data Ownership</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">Zero</div>
              <div className="text-[11px] text-slate-400">Per-Seat Fees</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-base sm:text-lg font-bold text-blue-400 font-mono">ERPNext</div>
              <div className="text-[11px] text-slate-400">Open-Core Engine</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-base sm:text-lg font-bold text-violet-400 font-mono">&lt; 120ms</div>
              <div className="text-[11px] text-slate-400">MT5 Execution</div>
            </div>
          </div>
        </div>

        {/* Floating 3D/Glass Dashboard Visual Layer */}
        <HeroVisualDashboard />
      </div>
    </section>
  );
}
