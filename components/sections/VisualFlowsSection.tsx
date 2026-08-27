"use client";

import { useState } from "react";
import { VISUAL_FLOWS } from "@/data/siteData";
import {
  Workflow,
  AlertCircle,
  Sliders,
  Layers,
  Zap,
  BarChart3,
  Target,
  Binary,
  TrendingUp,
  BellRing,
  Send,
  Lightbulb,
  Layout,
  Code2,
  Network,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function VisualFlowsSection() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  const iconComponents: Record<string, React.ReactNode> = {
    AlertCircle: <AlertCircle className="w-4 h-4 text-blue-600" />,
    Sliders: <Sliders className="w-4 h-4 text-blue-600" />,
    Layers: <Layers className="w-4 h-4 text-blue-600" />,
    Zap: <Zap className="w-4 h-4 text-blue-600" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-blue-600" />,
    Target: <Target className="w-4 h-4 text-blue-600" />,
    Binary: <Binary className="w-4 h-4 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-blue-600" />,
    BellRing: <BellRing className="w-4 h-4 text-blue-600" />,
    Send: <Send className="w-4 h-4 text-blue-600" />,
    Lightbulb: <Lightbulb className="w-4 h-4 text-blue-600" />,
    Layout: <Layout className="w-4 h-4 text-blue-600" />,
    Code2: <Code2 className="w-4 h-4 text-blue-600" />,
    Network: <Network className="w-4 h-4 text-blue-600" />,
    Rocket: <Rocket className="w-4 h-4 text-blue-600" />,
  };

  const activeFlow = VISUAL_FLOWS[activeFlowIndex];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50/60 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Workflow className="w-3.5 h-3.5" />
              <span>How Systems Are Built</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Visual Solutions & Delivery Flows
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Clear, step-by-step technical execution models designed for deterministic results.
            </p>
          </div>

          {/* Flow Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
            {VISUAL_FLOWS.map((flow, index) => (
              <button
                key={flow.title}
                onClick={() => setActiveFlowIndex(index)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  activeFlowIndex === index
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {flow.category}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Pipeline Presentation */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">
                Active Architecture Pipeline
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1.5">
                {activeFlow.title}
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              <span>Build this workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 5-Step Connected Flow Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
            {activeFlow.steps.map((step, index) => (
              <div
                key={step.num}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all duration-150 relative group flex flex-col justify-between"
              >
                {/* Arrow indicator for desktop */}
                {index < activeFlow.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-blue-400 font-bold text-xs pointer-events-none">
                    →
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      {step.num}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs text-blue-600">
                      {iconComponents[step.icon] || <Zap className="w-4 h-4 text-blue-600" />}
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.label}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
