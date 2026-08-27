"use client";

import { useState } from "react";
import { SERVICE_CATEGORIES } from "@/data/siteData";
import {
  Workflow,
  Code2,
  Bot,
  TrendingUp,
  Sparkles,
  Briefcase,
  RefreshCw,
  Layers,
  Users,
  Sliders,
  FileText,
  Database,
  BarChart3,
  Globe,
  Layout,
  Smartphone,
  Cloud,
  Laptop,
  Calendar,
  PieChart,
  ShieldCheck,
  Network,
  Mail,
  Send,
  Bell,
  Link2,
  Binary,
  Target,
  Activity,
  BellRing,
  Zap,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const iconComponents: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-4 h-4 text-blue-600" />,
    Sparkles: <Sparkles className="w-4 h-4 text-blue-600" />,
    Briefcase: <Briefcase className="w-4 h-4 text-blue-600" />,
    RefreshCw: <RefreshCw className="w-4 h-4 text-blue-600" />,
    Layers: <Layers className="w-4 h-4 text-blue-600" />,
    Users: <Users className="w-4 h-4 text-blue-600" />,
    Sliders: <Sliders className="w-4 h-4 text-blue-600" />,
    FileText: <FileText className="w-4 h-4 text-blue-600" />,
    Database: <Database className="w-4 h-4 text-blue-600" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-blue-600" />,
    Code2: <Code2 className="w-4 h-4 text-blue-600" />,
    Globe: <Globe className="w-4 h-4 text-blue-600" />,
    Layout: <Layout className="w-4 h-4 text-blue-600" />,
    Smartphone: <Smartphone className="w-4 h-4 text-blue-600" />,
    Cloud: <Cloud className="w-4 h-4 text-blue-600" />,
    Laptop: <Laptop className="w-4 h-4 text-blue-600" />,
    Calendar: <Calendar className="w-4 h-4 text-blue-600" />,
    PieChart: <PieChart className="w-4 h-4 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-blue-600" />,
    Network: <Network className="w-4 h-4 text-blue-600" />,
    Bot: <Bot className="w-4 h-4 text-blue-600" />,
    Mail: <Mail className="w-4 h-4 text-blue-600" />,
    Send: <Send className="w-4 h-4 text-blue-600" />,
    Bell: <Bell className="w-4 h-4 text-blue-600" />,
    Link2: <Link2 className="w-4 h-4 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-blue-600" />,
    Binary: <Binary className="w-4 h-4 text-blue-600" />,
    Target: <Target className="w-4 h-4 text-blue-600" />,
    Activity: <Activity className="w-4 h-4 text-blue-600" />,
    BellRing: <BellRing className="w-4 h-4 text-blue-600" />,
    Zap: <Zap className="w-4 h-4 text-blue-600" />,
  };

  const displayedCategories =
    activeTab === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What I Can Help With
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Clear, practical engineering services with direct deliverables and transparent scope.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
                activeTab === "all"
                  ? "bg-blue-600 text-white font-semibold shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  activeTab === cat.id
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {category.title}
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  {category.tagline}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xs transition-all duration-150 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="p-2 rounded-xl bg-blue-50/80 text-blue-600 border border-blue-100/80">
                          {iconComponents[item.icon] || <Workflow className="w-4 h-4 text-blue-600" />}
                        </div>
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-end">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
