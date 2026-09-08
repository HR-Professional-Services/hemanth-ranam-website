"use client";

import {
  Lightbulb,
  Workflow,
  Zap,
  Headphones,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function SystemWorkflowVisualsSection() {
  const steps = [
    {
      step: "01",
      name: "IDEA",
      desc: "Understand your operational bottleneck and map the highest ROI solution.",
      icon: Lightbulb,
    },
    {
      step: "02",
      name: "SYSTEM",
      desc: "Design the right data structure, database, and connected workflow blueprint.",
      icon: Workflow,
    },
    {
      step: "03",
      name: "AUTOMATION",
      desc: "Connect forms, Google Sheets, CRM, alerts, and bots to run quietly 24/7.",
      icon: Zap,
    },
    {
      step: "04",
      name: "SUPPORT",
      desc: "Provide team onboarding, documentation, SOPs, and ongoing technical support.",
      icon: Headphones,
    },
    {
      step: "05",
      name: "GROW",
      desc: "Scale your business smoothly while your systems handle the repetitive volume.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="workflow" className="py-14 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Execution Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            How Systems Work Together
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
            From initial idea to automated operations. Five clean stages with zero enterprise bloat.
          </p>
        </div>

        {/* 5-Node Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 relative">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col justify-between">
                <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-blue-500 transition-all flex flex-col justify-between h-full group">
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[10px] font-mono font-black text-slate-500">
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm font-black text-white tracking-wide mb-1.5 flex items-center gap-1.5">
                      <span>{item.name}</span>
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-400 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-4 pt-2.5 border-t border-slate-700/50 flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Stage</span>
                  </div>
                </div>

                {/* Arrow Connector for Desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ChevronRight className="w-4 h-4 text-blue-400/70" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer"
          >
            <span>Discuss Your Pipeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
