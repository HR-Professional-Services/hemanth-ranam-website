"use client";

import { useState } from "react";
import { SYSTEM_WORKFLOW_VISUALS } from "@/data/siteData";
import {
  ArrowRight,
  Workflow,
  Users,
  FileText,
  Database,
  Mail,
  CheckCircle2,
  UserCheck,
  CheckSquare,
  BarChart3,
  ShoppingBag,
  Layers,
  CreditCard,
  Activity,
  TrendingUp,
  Search,
  Zap,
  Send,
  Shield,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  FileText,
  Database,
  Mail,
  CheckCircle2,
  UserCheck,
  CheckSquare,
  BarChart3,
  ShoppingBag,
  Layers,
  CreditCard,
  Activity,
  TrendingUp,
  Search,
  Zap,
  Send,
  Shield,
};

export function SystemWorkflowVisualsSection() {
  const [activeTab, setActiveTab] = useState<string>(SYSTEM_WORKFLOW_VISUALS[0].id);

  const selectedVisual =
    SYSTEM_WORKFLOW_VISUALS.find((v) => v.id === activeTab) || SYSTEM_WORKFLOW_VISUALS[0];

  return (
    <section id="workflow-visuals" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Systems Architecture in Action</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            How Data Moves Through Better Systems
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
            Stop guessing where information gets stuck. We engineer transparent, automated workflows with zero manual friction between business stages.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {SYSTEM_WORKFLOW_VISUALS.map((visual) => {
            const isSelected = activeTab === visual.id;
            return (
              <button
                key={visual.id}
                onClick={() => setActiveTab(visual.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60"
                }`}
              >
                {visual.title.split(" Pipeline")[0]}
              </button>
            );
          })}
        </div>

        {/* Active Workflow Display Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-800/50 border border-slate-700/80 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-700/60">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                {selectedVisual.category}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                {selectedVisual.title}
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
              {selectedVisual.steps.length} Connected Stages
            </span>
          </div>

          {/* Connected Steps Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {selectedVisual.steps.map((step, idx) => {
              const IconComp = ICON_MAP[step.icon] || Workflow;
              const isLast = idx === selectedVisual.steps.length - 1;
              return (
                <div key={idx} className="relative flex flex-col justify-between">
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/70 hover:border-blue-500 transition-all group h-full flex flex-col justify-between">
                    <div>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black text-slate-500 font-mono">
                          0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Step Name */}
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-2 leading-tight">
                        {step.label}
                      </h4>

                      {/* Step Description */}
                      <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Stage status indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Automated</span>
                    </div>
                  </div>

                  {/* Desktop Connecting Arrow */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                      <ArrowRight className="w-4 h-4 text-blue-400/80" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Context Message */}
          <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>
              💡 Each node is monitored with automated error checking and instantaneous alerting.
            </span>
            <a
              href="#contact"
              className="font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <span>Discuss Building This Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
