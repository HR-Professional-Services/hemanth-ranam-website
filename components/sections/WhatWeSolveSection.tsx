"use client";

import { WHAT_WE_SOLVE_ITEMS } from "@/data/siteData";
import {
  Clock,
  FileSpreadsheet,
  Network,
  Activity,
  Repeat,
  FileText,
  ArrowRight,
  AlertCircle,
  Cpu,
  Zap,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  FileSpreadsheet,
  Network,
  Activity,
  Repeat,
  FileText,
};

export function WhatWeSolveSection() {
  return (
    <section id="what-we-solve" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle background tech accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Operational Bottleneck Diagnosis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            What Is Slowing Your Business Down?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            We don&apos;t just sell software. We identify where your operations lose time, money, and momentum—then engineer simple, permanent systems to fix them.
          </p>
        </div>

        {/* 6 Problem-to-Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_SOLVE_ITEMS.map((item) => {
            const IconComp = ICON_MAP[item.icon] || AlertCircle;
            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header Question */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-black text-blue-600 tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                      {item.question}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      The Friction Point
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      &ldquo;{item.problem}&rdquo;
                    </p>
                  </div>

                  {/* Operational Transformation Steps */}
                  <div className="space-y-2.5 py-3.5 border-y border-slate-200/60 my-4 text-xs">
                    <div className="flex items-start gap-2 text-slate-700">
                      <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-bold">System: </strong>
                        <span className="text-slate-600 font-normal">{item.system}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-bold">Automation: </strong>
                        <span className="text-slate-600 font-normal">{item.automation}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Result */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    The Business Result
                  </span>
                  <div className="flex items-start gap-2 text-xs font-bold text-slate-900 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.result}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              Practical Diagnosis
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight">
              Ready to eliminate your primary operational bottleneck?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Book a 60-minute Business Consultation ($35 USD) or request a comprehensive Process & Tech Audit ($59 USD).
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>View Transparent Project Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
