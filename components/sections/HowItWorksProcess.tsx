"use client";

import { BUSINESS_OS_PROCESS } from "@/data/businessOsData";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from "lucide-react";

export function HowItWorksProcess() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Operational Methodology
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            We Don&apos;t Just Install Software.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              We Engineer Systems.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Software alone rarely fixes operational friction. Every implementation follows our rigorous 8-stage engineering process to guarantee seamless adoption, staff mastery, and measurable business ROI.
          </p>
        </div>

        {/* 8-Stage Process Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {BUSINESS_OS_PROCESS.map((stage) => (
            <div
              key={stage.step}
              className="p-6 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-blue-500/80 group-hover:text-blue-400 transition-colors">
                  {stage.step}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {stage.name}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px]">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  Tangible Deliverable
                </span>
                <span className="text-slate-200 font-medium mt-0.5 block">
                  {stage.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Ready to diagnose your operational bottlenecks?
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Start with a structured Systems Consultation. We analyze your tech stack, outline a customized Business OS architecture, and provide a fixed milestone proposal.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
          >
            <span>Book Systems Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
