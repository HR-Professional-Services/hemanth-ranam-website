"use client";

import { Code2, GraduationCap, Headphones, TrendingUp, Sparkles } from "lucide-react";

export function LifecycleSection() {
  const steps = [
    {
      step: "01",
      title: "Build",
      desc: "Build it to your exact business rules with clean, documented code.",
      icon: Code2,
      accent: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      step: "02",
      title: "Train",
      desc: "Train your team with screen walkthroughs, SOPs, and clear digital checklists.",
      icon: GraduationCap,
      accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      step: "03",
      title: "Support",
      desc: "Reliable, direct WhatsApp & email support whenever you need an adjustment.",
      icon: Headphones,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      step: "04",
      title: "Improve",
      desc: "Automate more manual tasks and optimize workflows as your volume scales.",
      icon: TrendingUp,
      accent: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            MORE THAN A HANDOVER.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Build it. Use it. Improve it. Automate it. We provide support and training after delivery.
          </p>
        </div>

        {/* 4 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((stage) => {
            const IconComp = stage.icon;
            return (
              <div
                key={stage.step}
                className="p-5 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${stage.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-black text-slate-400">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 mb-1.5">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
