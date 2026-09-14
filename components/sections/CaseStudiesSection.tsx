"use client";

import { useState } from "react";
import {
  Layers,
  Users,
  TrendingUp,
  Receipt,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Server,
  Zap,
} from "lucide-react";

export function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<0 | 1 | 2>(0);

  const cases = [
    {
      title: "ScaleNova Multi-Tenant Business OS",
      subtitle: "Enterprise Operating System & Multi-Site SaaS Architecture",
      client: "B2B Enterprise Group • 75+ Users",
      metrics: [
        { label: "Operational Speed", value: "+340%" },
        { label: "SaaS Tool Waste", value: "-$18,400/yr" },
        { label: "Billing Reconciliation", value: "Instant" },
      ],
      description:
        "Consolidated 9 disconnected cloud tools into a single, unified Business OS environment built on Frappe and ERPNext. Departmental silos between Sales, Accounts, HR, and Operations were completely eliminated with automated cross-module data passing.",
      highlights: [
        "Automated Quotation-to-Invoice generation with online customer approval",
        "Role-based multi-tier employee leave, expense, and PO approvals",
        "Centralized executive financial analytics replacing 14 separate spreadsheets",
        "99.98% uptime on hardened cloud infrastructure with daily automated snapshots",
      ],
    },
    {
      title: "Website Growth OS & Inbound Lead Engine",
      subtitle: "High-Converting Storefront + Automated Google Sheets CRM",
      client: "Professional Services Practice • UK & Global",
      metrics: [
        { label: "Form Conversion Rate", value: "8.4%" },
        { label: "Lead Response Time", value: "< 3 mins" },
        { label: "Data Leakage", value: "0%" },
      ],
      description:
        "Deployed a high-speed Next.js digital storefront connected directly to a canonical 15-column Google Sheets CRM backend. Inbound enquiries are validated in real time, assigned a permanent Lead ID, and dispatched to management via instant email & WhatsApp webhooks.",
      highlights: [
        "International phone validation, anti-spam honeypot, and instant response receipt",
        "Automated Lead ID generation (HRPS canonical standard)",
        "Zero-seat software licensing overhead for client intake",
        "Direct calendar booking integration with automated SMS reminders",
      ],
    },
    {
      title: "Chartora Algorithmic Execution Bridge",
      subtitle: "MetaTrader 5 Real-Time Scanner & Telegram Alert Ecosystem",
      client: "Quantitative Proprietary Desk & Trading Firm",
      metrics: [
        { label: "Execution Latency", value: "< 120ms" },
        { label: "Markets Monitored", value: "28+ Symbols" },
        { label: "Uptime Reliability", value: "99.99%" },
      ],
      description:
        "Engineered an institutional-grade market data ingestion and alerting pipeline connecting MetaTrader 5 (MT5) with low-latency Telegram channels and automated risk managers for Gold, Silver, and equity index instruments.",
      highlights: [
        "Real-time multi-symbol trend confluence scanner coded in native MQL5",
        "Sub-second alert formatting with dynamic stop-loss and take-profit targets",
        "Strict automated equity risk controls and drawdown limits",
        "Cloud VPS runtime with continuous heartbeat monitoring",
      ],
    },
  ];

  const current = cases[activeCase];

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Proven Architectures
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Systems &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Live Case Studies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real enterprise operating environments engineered, configured, and managed by Hemanth Ranam.
          </p>
        </div>

        {/* Case Study Tab Selectors */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {cases.map((c, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCase(idx as 0 | 1 | 2)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeCase === idx
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/40"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Selected Case Mockup Presentation */}
        <div className="mt-8 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#080d19] border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Case Description & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  {current.client}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {current.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1">
                  {current.subtitle}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {current.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white font-mono">{m.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <span>Build a Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Realistic UI System Mockup Display */}
            <div className="lg:col-span-6 rounded-2xl bg-[#050811] border border-white/[0.1] shadow-2xl p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-semibold">{current.title}</span>
                </div>
                <span className="text-[10px] text-blue-400">Production Node</span>
              </div>

              {/* Dynamic Mockup Body depending on Active Case */}
              {activeCase === 0 && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <span className="text-slate-400 block text-[10px]">ERP System State</span>
                      <span className="text-emerald-400 font-bold">100% Operational • 0 Errors</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300">
                      Frappe v15
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Sales → Invoicing Automation</span>
                      <span className="text-emerald-400">Cleared in 1.4s</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">HRMS Leave Balance Calculation</span>
                      <span className="text-emerald-400">Synchronized</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Daily Automated Backup Snapshot</span>
                      <span className="text-slate-400">03:00 UTC (Verified)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Multi-tenant data isolation active across all workspaces.</span>
                  </div>
                </div>
              )}

              {activeCase === 1 && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-emerald-400 block text-[10px]">Inbound Webhook Stream</span>
                      <span className="text-white font-bold">Canonical 15-Column Google Sheet CRM</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      Live
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Lead ID Generator</span>
                      <span className="text-cyan-400">HRPS-20260914-8842</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Executive Alert Email</span>
                      <span className="text-emerald-400">Dispatched (240ms)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">WhatsApp Notification Bot</span>
                      <span className="text-emerald-400">Delivered</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-slate-300 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Average lead contact speed reduced from 4 hours to 3 minutes.</span>
                  </div>
                </div>
              )}

              {activeCase === 2 && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-violet-400 block text-[10px]">MT5 Scanner Feed</span>
                      <span className="text-white font-bold">Multi-Timeframe Trend Confluence</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">
                      28 Pairs
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Gold (XAUUSD) M15 Pullback</span>
                      <span className="text-emerald-400">Confluence Triggered</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Telegram Channel Broadcast</span>
                      <span className="text-emerald-400">Sent (&lt;90ms)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-300">Max Drawdown Guardian</span>
                      <span className="text-slate-400">Active (0% breach)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-slate-300 flex items-center gap-2">
                    <Server className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Dedicated VPS automated execution running 24/5.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
