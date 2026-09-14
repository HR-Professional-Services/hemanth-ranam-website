"use client";

import { useState } from "react";
import {
  INTERACTIVE_DIAGRAM_STAGES,
} from "@/data/businessOsData";
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
  ArrowDown,
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
    <section className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Connected Architecture
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Data Flows Through Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Business OS
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Click any node in the operating chain below to inspect how information transitions automatically from visitor discovery to management insight without manual friction.
          </p>
        </div>

        {/* Diagram Flow Container */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                    className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 border ${
                      isSelected
                        ? "bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10"
                        : "bg-[#090e1b]/80 border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? "bg-blue-500 text-white"
                            : "bg-white/[0.05] text-slate-400"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs sm:text-sm font-bold ${
                              isSelected ? "text-white" : "text-slate-200"
                            }`}
                          >
                            {stage.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400">
                            {stage.category}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 block mt-0.5 truncate max-w-xs sm:max-w-md">
                          {stage.description}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      {isSelected && (
                        <span className="text-[11px] font-mono text-blue-400 font-semibold hidden sm:inline">
                          Inspecting
                        </span>
                      )}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected
                            ? "text-blue-400 translate-x-1"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Vertical Connector Line */}
                  {!isLast && (
                    <div className="flex justify-center my-0.5">
                      <div className="w-[1.5px] h-2 bg-gradient-to-b from-blue-500/40 to-white/10" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Details Inspector Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1122] border border-blue-500/30 shadow-2xl shadow-blue-500/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    {activeStage.category} Stage
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Data Transformation Context */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Inputs Received
                  </span>
                  <p className="text-xs text-slate-200 font-medium font-mono">
                    {activeStage.inputs}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 font-semibold">
                    Automated Output / Next Trigger
                  </span>
                  <p className="text-xs text-blue-200 font-medium font-mono">
                    {activeStage.outputs}
                  </p>
                </div>
              </div>

              {/* Automation Highlight */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Zero Hand-offs:</strong> Every transition executes programmatically inside ERPNext and webhooks without manual re-entry.
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <span>Build This Workflow for Your Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
