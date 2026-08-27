"use client";

import { useState } from "react";
import { SERVICE_CATEGORIES } from "@/data/siteData";
import {
  Workflow,
  Code2,
  Bot,
  CandlestickChart,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const iconMap: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-5 h-5 text-blue-600" />,
    Code2: <Code2 className="w-5 h-5 text-blue-600" />,
    Bot: <Bot className="w-5 h-5 text-blue-600" />,
    CandlestickChart: <CandlestickChart className="w-5 h-5 text-blue-600" />,
  };

  const displayedCategories =
    activeCategory === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Service Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Specialized Engineering & <span className="text-blue-600">Consulting Services.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every solution is custom-architected around measurable operational efficiency, reliable technology, and concrete business requirements.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {cat.title.split(" ")[0]} {cat.title.includes("&") ? "& ..." : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Sub-Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/80 gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 border border-blue-100">
                    {iconMap[category.icon]}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">{category.tagline}</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase border border-blue-100 w-fit">
                  {category.badge}
                </span>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.title}
                    className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-5 group"
                  >
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Key Deliverables
                        </p>
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-1.5 text-xs text-slate-700 font-medium"
                          >
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills & Scope Link */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {service.tech.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
                        aria-label={`Scope project for ${service.title}`}
                      >
                        <span>Scope</span>
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              Need a custom system architecture or algorithmic workflow?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              From business operating systems to custom Pine Script indicators and MT5 EAs, I design deterministic solutions tailored to your operational rules.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-sm shrink-0 inline-flex items-center gap-2"
          >
            <span>Request System Scope</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
