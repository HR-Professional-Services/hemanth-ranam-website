"use client";

import { useState } from "react";
import { BUSINESS_ECOSYSTEM, SITE_CONFIG } from "@/data/siteData";
import {
  Cpu,
  Users,
  TrendingUp,
  HeartHandshake,
  CheckSquare,
  CreditCard,
  UserCheck,
  BarChart3,
  Sparkles,
  ArrowRight,
  Workflow,
  Shield,
  Layers,
  Database,
  ArrowUpRight,
} from "lucide-react";

export function BusinessSystemsSection() {
  const [activeNode, setActiveNode] = useState<number>(0);

  const iconComponents: Record<string, React.ReactNode> = {
    Users: <Users className="w-4 h-4 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-blue-600" />,
    HeartHandshake: <HeartHandshake className="w-4 h-4 text-blue-600" />,
    CheckSquare: <CheckSquare className="w-4 h-4 text-blue-600" />,
    CreditCard: <CreditCard className="w-4 h-4 text-blue-600" />,
    UserCheck: <UserCheck className="w-4 h-4 text-blue-600" />,
    Cpu: <Cpu className="w-4 h-4 text-blue-600" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-blue-600" />,
    Sparkles: <Sparkles className="w-4 h-4 text-blue-600" />,
  };

  const pillars = [
    { title: "People", desc: "Clear roles, role-based access, and seamless team handoffs.", icon: Users },
    { title: "Processes", desc: "Deterministic standard operating procedures (SOP) without manual bottlenecks.", icon: Workflow },
    { title: "Data", desc: "Single source of truth eliminating duplicate data entry across tools.", icon: Database },
    { title: "Software", desc: "Unified ERP, CRM, and custom portals engineered for your exact business model.", icon: Layers },
    { title: "Automation", desc: "Background sync workers handling repetitive updates and cross-system triggers.", icon: Sparkles },
    { title: "Reporting", desc: "Real-time executive telemetry and financial KPI visibility on demand.", icon: BarChart3 },
  ];

  return (
    <section id="business-systems" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Turn Complex Operations Into{" "}
            <span className="text-blue-600">Connected Systems.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most businesses do not have a software problem—they have a fragmented systems problem. I design and build integrated architectures that connect every functional division into a cohesive operating engine.
          </p>
        </div>

        {/* Visual Business Ecosystem Node Grid */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800 mb-12 relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-8">
              <div>
                <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  The Connected Business Ecosystem
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Unified Data & Workflow Pipeline
                </h3>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Real-time Sync • Multi-Tenant • Zero Silos
              </div>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2.5">
              {BUSINESS_ECOSYSTEM.map((node, index) => {
                const isSelected = activeNode === index;
                return (
                  <button
                    key={node.name}
                    onClick={() => setActiveNode(index)}
                    className={`p-3.5 rounded-xl text-left transition-all duration-150 border flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg ring-2 ring-blue-400/30"
                        : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono opacity-60">0{index + 1}</span>
                      <div className="p-1 rounded-md bg-white/10">
                        {iconComponents[node.icon]}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">{node.name}</p>
                      <p className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? "text-blue-100" : "text-slate-400"}`}>
                        {node.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Strip */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <p className="text-xs font-semibold text-white">
                    Integrated Node: {BUSINESS_ECOSYSTEM[activeNode].name}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {BUSINESS_ECOSYSTEM[activeNode].desc} — connected via event webhooks & database triggers to upstream/downstream workflows.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shrink-0"
              >
                <span>Automate This Workflow</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* The 6 Integration Pillars */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
            Connecting What Matters Across Your Organization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{pillar.title}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ScaleNova Spotlight Reference */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-World Business Operating System</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              ScaleNova — Modern Business OS Architecture
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              ScaleNova is an active business operating system initiative I founded and lead as CEO, designed to unify sales, customer CRM, operations, finance, and automation into a single multi-tenant control plane.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#scalenova"
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
            >
              Learn More
            </a>
            <a
              href={SITE_CONFIG.scalenovaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
            >
              <span>Visit ScaleNova</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
