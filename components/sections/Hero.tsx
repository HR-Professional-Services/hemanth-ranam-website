"use client";

import { HeroScene3D } from "@/components/3d/HeroScene3D";
import { ArrowRight, MessageSquare, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";

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
              <span>HR & Business Systems Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.12]">
              Building Digital Systems That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Work Smarter.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-slate-700 leading-snug">
              Practical HR Management, Workflow Automation & Custom Software
            </p>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed font-normal">
              We help founders and growing enterprises eliminate operational friction, structure HR processes, integrate custom software, and deploy high-reliability automation without bloated overhead.
            </p>

            {/* Quick Value Signals */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                HR & Talent Systems
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Custom Software & ERP
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Direct Founder Support
              </span>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                id="hero-contact-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-md transition-all group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                id="hero-services-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-2xs transition-all"
              >
                <span>View Services</span>
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
