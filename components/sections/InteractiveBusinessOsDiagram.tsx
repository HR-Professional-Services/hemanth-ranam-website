"use client";

import { useState } from "react";
import { INTERACTIVE_DIAGRAM_STAGES } from "@/data/businessOsData";
import {
  Globe,
  Mail,
  Users,
  TrendingUp,
  Receipt,
  Sliders,
  UserCheck,
  Headphones,
  Layers,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

const STAGE_ICONS: Record<string, React.ElementType> = {
  Globe,
  Mail,
  Users,
  TrendingUp,
  Receipt,
  Sliders,
  UserCheck,
  Headphones,
  Layers,
};

export function InteractiveBusinessOsDiagram() {
  const [selectedStageId, setSelectedStageId] = useState<string>(
    INTERACTIVE_DIAGRAM_STAGES[0].id
  );

  const activeStage =
    INTERACTIVE_DIAGRAM_STAGES.find((s) => s.id === selectedStageId) ||
    INTERACTIVE_DIAGRAM_STAGES[0];

  const IconComponent = STAGE_ICONS[activeStage.icon] || Layers;

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Connected Architecture
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Data Flows Through Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Business OS
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Click any node in the operating chain below to inspect how information transitions automatically from visitor discovery to management insight without manual friction.
          </p>
        </div>

        {/* Diagram Flow Container */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Step-by-Step Flow Pipeline */}
          <div className="lg:col-span-7 space-y-2.5">
            {INTERACTIVE_DIAGRAM_STAGES.map((stage, idx) => {
              const StepIcon = STAGE_ICONS[stage.icon] || Layers;
              const isSelected = stage.id === selectedStageId;
              const isLast = idx === INTERACTIVE_DIAGRAM_STAGES.length - 1;

              return (
                <div key={stage.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? "bg-blue-50/90 border-blue-500 shadow-md shadow-blue-500/10"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div>
                        {/* Inline heading next to category badge */}
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs sm:text-sm font-bold ${
                              isSelected ? "text-blue-900" : "text-slate-900"
                            }`}
                          >
                            {stage.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                            {stage.category}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 block mt-0.5 truncate max-w-xs sm:max-w-md">
                          {stage.description}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs shrink-0">
                      {isSelected && (
                        <span className="text-[11px] font-mono text-blue-600 font-bold hidden sm:inline">
                          Active
                        </span>
                      )}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected
                            ? "text-blue-600 translate-x-1"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Vertical Connector Line */}
                  {!isLast && (
                    <div className="flex justify-center my-0.5">
                      <div className="w-[1.5px] h-2 bg-gradient-to-b from-blue-400 to-slate-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Details Inspector Window (Mac/Windows Frame) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden">
              {/* Window Header Controls */}
              <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-600 font-semibold">
                    pipeline-inspector.json
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  {activeStage.category}
                </span>
              </div>

              <div className="p-6 sm:p-7 space-y-5">
                {/* Heading next to icon */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block">
                      {activeStage.category} Stage
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {activeStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Data Transformation Context */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      Inputs Received
                    </span>
                    <p className="text-xs text-slate-800 font-medium font-mono">
                      {activeStage.inputs}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200/80 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold block">
                      Automated Output / Next Trigger
                    </span>
                    <p className="text-xs text-blue-900 font-medium font-mono">
                      {activeStage.outputs}
                    </p>
                  </div>
                </div>

                {/* Automation Highlight */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Zero Hand-offs:</strong> Every transition executes programmatically inside ERPNext and webhooks without manual re-entry.
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Build This Workflow for Your Business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
