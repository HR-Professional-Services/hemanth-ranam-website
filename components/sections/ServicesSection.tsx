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
} from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("business-systems");

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

  return (
    <section id="services" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
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

          {/* Minimal 4-Tab Switcher */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/80">
            {CONSOLIDATED_SERVICES.map((group) => {
              const isSelected = activeCategory === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveCategory(group.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                  }`}
                >
                  {group.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="space-y-6">
          {/* Visual Execution Flow Banner */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-900">Execution Flow:</span>
              <span className="font-mono text-blue-700 font-semibold tracking-wide">
                {selectedGroup.flow}
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 shrink-0"
            >
              <span>Scope this project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Compact 6-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
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
      </div>
    </section>
  );
}
