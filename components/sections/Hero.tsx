"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-white/60 backdrop-blur-xs">
      {/* Subtle radial ambient blue gradients on white */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[420px] bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
          <span>Hemanth Ranam • Business Systems &amp; Automation</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
          Business Systems That Make Your Business{" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Easier to Run
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          I design and build practical business systems, automation and ERP solutions that connect your customers, sales, finance and operations.
        </p>

        {/* Small Supporting Line */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <span>Business Systems</span>
          <span className="text-slate-300">•</span>
          <span>Automation</span>
          <span className="text-slate-300">•</span>
          <span>ERPNext</span>
          <span className="text-slate-300">•</span>
          <span>Websites</span>
          <span className="text-slate-300">•</span>
          <span>Trading Technology</span>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <Link
            href="/contact?service=consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 hover:scale-[1.02] min-h-[44px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all hover:scale-[1.02] min-h-[44px]"
          >
            <span>View Services</span>
          </Link>
        </div>

        {/* Founder Trust Element */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Built and supported directly by Hemanth Ranam.</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5 text-slate-600 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% of consultation credited to implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
