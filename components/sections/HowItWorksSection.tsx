"use client";

import { PROCESS_STEPS } from "@/data/siteData";
import {
  Search,
  Compass,
  Layers,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Route,
} from "lucide-react";

export function HowItWorksSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5 text-blue-600" />,
    Compass: <Compass className="w-5 h-5 text-blue-600" />,
    Layers: <Layers className="w-5 h-5 text-blue-600" />,
    Headphones: <Headphones className="w-5 h-5 text-blue-600" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section
      id="how-it-works"
      className="py-12 md:py-20 bg-slate-50/70 border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Route className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Structured Execution. Zero Chaos.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            From initial discovery and architecture to deployment and ongoing reviews, every engagement follows a tested, transparent roadmap.
          </p>
        </div>

        {/* 6-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400/60 transition-all flex flex-col justify-between group"
            >
              {/* Step indicator and Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[step.icon] || <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.shortDesc}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                  Deliverable
                </span>
                <span className="text-[11px] font-semibold text-slate-800 leading-tight block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Ready to map out your requirements?
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Start with a no-obligation technical diagnostic to evaluate scope and feasibility.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs shrink-0"
          >
            <span>Talk to Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
