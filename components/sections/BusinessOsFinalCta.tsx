"use client";

import { ArrowRight, Calendar, Layers, TrendingUp, Sparkles } from "lucide-react";

export function BusinessOsFinalCta() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden border-t border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Next Steps
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build the system your business{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              actually needs.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Stop losing hours to disconnected software and manual spreadsheet gymnastics. Let&apos;s build an integrated, reliable Business OS that scales with your ambition.
          </p>
        </div>

        {/* Triple Action Buttons (open in same tab) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Systems Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 transition-all hover:scale-[1.02] shadow-xs"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Explore All Products &amp; Systems</span>
          </a>

          <a
            href="/trading-technology"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-sky-700 hover:text-sky-800 bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200 transition-all hover:scale-[1.02]"
          >
            <TrendingUp className="w-4 h-4 text-sky-600" />
            <span>View Trading Technology</span>
          </a>
        </div>

        {/* Trust confirmation */}
        <p className="text-xs text-slate-500 font-mono pt-4">
          Direct consultation with Hemanth Ranam • Fixed milestone scopes • 100% data sovereignty
        </p>
      </div>
    </section>
  );
}
