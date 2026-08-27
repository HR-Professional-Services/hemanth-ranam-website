"use client";

import { useState } from "react";
import { CONSOLIDATED_SERVICES } from "@/data/siteData";
import {
  Workflow,
  Sparkles,
  Layers,
  Users,
  Sliders,
  BarChart3,
  Code2,
  Globe,
  Layout,
  Smartphone,
  Cloud,
  ShieldCheck,
  Bot,
  Zap,
  Network,
  Mail,
  Send,
  TrendingUp,
  Binary,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("business-systems");
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number | null>(0);

  const iconComponents: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-4 h-4 text-blue-600" />,
    Sparkles: <Sparkles className="w-4 h-4 text-blue-600" />,
    Layers: <Layers className="w-4 h-4 text-blue-600" />,
    Users: <Users className="w-4 h-4 text-blue-600" />,
    Sliders: <Sliders className="w-4 h-4 text-blue-600" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-blue-600" />,
    Code2: <Code2 className="w-4 h-4 text-blue-600" />,
    Globe: <Globe className="w-4 h-4 text-blue-600" />,
    Layout: <Layout className="w-4 h-4 text-blue-600" />,
    Smartphone: <Smartphone className="w-4 h-4 text-blue-600" />,
    Cloud: <Cloud className="w-4 h-4 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-blue-600" />,
    Bot: <Bot className="w-4 h-4 text-blue-600" />,
    Zap: <Zap className="w-4 h-4 text-blue-600" />,
    Network: <Network className="w-4 h-4 text-blue-600" />,
    Mail: <Mail className="w-4 h-4 text-blue-600" />,
    Send: <Send className="w-4 h-4 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-blue-600" />,
    Binary: <Binary className="w-4 h-4 text-blue-600" />,
  };

  const selectedGroup =
    CONSOLIDATED_SERVICES.find((g) => g.id === activeCategory) ||
    CONSOLIDATED_SERVICES[0];

  const flowSteps = selectedGroup.flow.split(" → ").map((step, idx) => ({
    num: `0${idx + 1}`,
    name: step.trim(),
  }));

  const categoryShortLabels: Record<string, string> = {
    "business-systems": "Business",
    software: "Software",
    automation: "Automation",
    "trading-tech": "Trading",
  };

  return (
    <section id="services" className="py-10 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3 h-3" />
              <span>Core Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What I Build & Automate
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Clear, practical engineering capabilities organized into four key areas.
            </p>
          </div>

          {/* 2x2 on mobile, 4-in-a-row on tablet/desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80 w-full md:w-auto">
            {CONSOLIDATED_SERVICES.map((group) => {
              const isSelected = activeCategory === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => {
                    setActiveCategory(group.id);
                    setExpandedMobileIndex(0);
                  }}
                  className={`px-3 py-2 text-xs font-bold rounded-xl transition-all text-center min-h-[38px] flex items-center justify-center ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 bg-white sm:bg-transparent hover:bg-white border border-slate-200/60 sm:border-transparent"
                  }`}
                >
                  <span className="hidden sm:inline">{group.title}</span>
                  <span className="sm:hidden">{categoryShortLabels[group.id] || group.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Execution Flow Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block sm:inline mr-2">
                Execution Flow:
              </span>
              {/* Desktop Horizontal */}
              <span className="hidden sm:inline font-mono text-blue-700 font-bold text-xs tracking-wide">
                {selectedGroup.flow}
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0"
            >
              <span>Scope this project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Vertical 4 Steps */}
          <div className="sm:hidden grid grid-cols-4 gap-1 mt-3 pt-3 border-t border-blue-200/60 text-center">
            {flowSteps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-blue-500 font-bold">
                  {step.num}
                </span>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                  {step.name}
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-blue-400 text-[10px] font-bold mt-0.5">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {/* 1. Mobile Accordion View (< sm) */}
        <div className="sm:hidden space-y-2">
          {selectedGroup.items.map((item, index) => {
            const isExpanded = expandedMobileIndex === index;
            return (
              <div
                key={item.name}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() =>
                    setExpandedMobileIndex(isExpanded ? null : index)
                  }
                  className="w-full p-3.5 flex items-center justify-between text-left gap-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      {iconComponents[item.icon] || <Workflow className="w-4 h-4 text-blue-600" />}
                    </div>
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/50 animate-fade-in">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex justify-end">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-xs"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 2. Desktop Compact Grid (>= sm) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {selectedGroup.items.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-blue-50/80 text-blue-600 border border-blue-100/70">
                    {iconComponents[item.icon] || <Workflow className="w-4 h-4 text-blue-600" />}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
