"use client";

import Link from "next/link";
import {
  Search,
  PenTool,
  Cpu,
  Workflow,
  Rocket,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function HowItWorksProcess() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand your business, problems and existing tools.",
      icon: Search,
      deliverable: "Bottleneck diagnosis & toolchain review",
    },
    {
      num: "02",
      title: "Design",
      desc: "Map the workflows and system architecture.",
      icon: PenTool,
      deliverable: "System blueprint & data models",
    },
    {
      num: "03",
      title: "Build",
      desc: "Configure or build the required technology.",
      icon: Cpu,
      deliverable: "ERPNext setup, custom software, or web build",
    },
    {
      num: "04",
      title: "Automate",
      desc: "Connect systems and remove repetitive work.",
      icon: Workflow,
      deliverable: "Zero-latency webhooks & automated triggers",
    },
    {
      num: "05",
      title: "Launch",
      desc: "Deploy, test and train.",
      icon: Rocket,
      deliverable: "Production deployment, team training & SOPs",
    },
    {
      num: "06",
      title: "Support",
      desc: "Maintain and improve the system.",
      icon: Headphones,
      deliverable: "Ongoing updates, backups & proactive monitoring",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A straightforward, disciplined six-step process from initial discovery through long-term maintenance.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-2xl font-black font-mono text-blue-600">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700 uppercase tracking-wider block text-[10px]">
                    Outcome
                  </span>
                  <span>{s.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/contact?service=consultation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <span>Start with Step 01 — Book a $49 Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
