"use client";

import { BUSINESS_OS_PROCESS } from "@/data/businessOsData";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function HowItWorksProcess() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Operational Methodology
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            We Don&apos;t Just Install Software.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              We Engineer Systems.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Software alone rarely fixes operational friction. Every implementation follows our rigorous 8-stage engineering process to guarantee seamless adoption, staff mastery, and measurable business ROI.
          </p>
        </div>

        {/* 8-Stage Process Cards Grid with Headings Next to Icons */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {BUSINESS_OS_PROCESS.map((stage) => (
            <div
              key={stage.step}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-extrabold font-mono text-blue-600 group-hover:text-blue-700 transition-colors">
                  {stage.step}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  {stage.name}
                </span>
              </div>

              {/* Heading next to stage icon/indicator */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {stage.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {stage.description}
              </p>

              <div className="pt-3 border-t border-slate-100 text-[11px]">
                <span className="text-slate-400 block font-mono text-[10px] uppercase font-semibold">
                  Tangible Deliverable
                </span>
                <span className="text-slate-800 font-medium mt-0.5 block">
                  {stage.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Ready to diagnose your operational bottlenecks?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Start with a structured Systems Consultation. We analyze your tech stack, outline a customized Business OS architecture, and provide a fixed milestone proposal.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02]"
          >
            <span>Book Systems Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
