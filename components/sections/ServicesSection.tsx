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
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("business-systems");

  const iconComponents: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-5 h-5 text-blue-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-blue-600" />,
    Layers: <Layers className="w-5 h-5 text-blue-600" />,
    Users: <Users className="w-5 h-5 text-blue-600" />,
    Sliders: <Sliders className="w-5 h-5 text-blue-600" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-blue-600" />,
    Code2: <Code2 className="w-5 h-5 text-blue-600" />,
    Globe: <Globe className="w-5 h-5 text-blue-600" />,
    Layout: <Layout className="w-5 h-5 text-blue-600" />,
    Smartphone: <Smartphone className="w-5 h-5 text-blue-600" />,
    Cloud: <Cloud className="w-5 h-5 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    Bot: <Bot className="w-5 h-5 text-blue-600" />,
    Zap: <Zap className="w-5 h-5 text-blue-600" />,
    Network: <Network className="w-5 h-5 text-blue-600" />,
    Mail: <Mail className="w-5 h-5 text-blue-600" />,
    Send: <Send className="w-5 h-5 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600" />,
    Binary: <Binary className="w-5 h-5 text-blue-600" />,
  };

  const selectedGroup =
    CONSOLIDATED_SERVICES.find((g) => g.id === activeCategory) ||
    CONSOLIDATED_SERVICES[0];

  const categoryShortLabels: Record<string, string> = {
    "business-systems": "Systems & HR",
    software: "Software & Web",
    automation: "Automation",
    "trading-tech": "Trading Tech",
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Service Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              What We Build, Manage &amp; Deliver
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Practical engineering, systems design, and HR operations structured into four distinct areas.
            </p>
          </div>

          {/* Category Tabs (ScaleNova Pill Filter Design) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80 w-full lg:w-auto">
            {CONSOLIDATED_SERVICES.map((group) => {
              const isSelected = activeCategory === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveCategory(group.id)}
                  className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-xl transition-all text-center min-h-[40px] flex items-center justify-center cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-700 hover:text-slate-950 hover:bg-white/80"
                  }`}
                >
                  <span>{categoryShortLabels[group.id] || group.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Execution Flow Ribbon */}
        <div className="mb-8 p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900">
              Delivery Workflow:
            </span>
            <span className="font-mono text-xs font-bold text-blue-700 tracking-wide">
              {selectedGroup.flow}
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0"
          >
            <span>Request Consultation</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ScaleNova-Style Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {selectedGroup.items.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconComponents[item.icon] || <Workflow className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Production Ready
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                    {item.shortDescription || item.description}
                  </p>
                </div>

                {/* Scannable Bullet Points */}
                {item.details?.bullets && (
                  <ul className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {item.details.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight font-medium text-[11px] text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Card Action */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {selectedGroup.title}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
