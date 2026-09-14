"use client";

import { ArrowRight, Calendar, Layers, TrendingUp, Sparkles } from "lucide-react";

export function BusinessOsFinalCta() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Next Steps
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build the system your business{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              actually needs.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Stop losing hours to disconnected software and manual spreadsheet gymnastics. Let&apos;s build an integrated, reliable Business OS that scales with your ambition.
          </p>
        </div>

        {/* Triple Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 border border-blue-400/30 transition-all hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Systems Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all hover:scale-[1.02]"
          >
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Explore Business OS</span>
          </a>

          <a
            href="#trading-tech"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-violet-300 hover:text-white bg-violet-950/20 hover:bg-violet-950/40 border border-violet-500/30 transition-all hover:scale-[1.02]"
          >
            <TrendingUp className="w-4 h-4 text-violet-400" />
            <span>View Trading Technology</span>
          </a>
        </div>

        {/* Small trust confirmation */}
        <p className="text-xs text-slate-500 font-mono pt-4">
          Direct consultation with Hemanth Ranam • Fixed milestone scopes • 100% data sovereignty
        </p>
      </div>
    </section>
  );
}
