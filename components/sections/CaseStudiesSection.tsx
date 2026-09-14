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
      title: "Enterprise Core Business OS",
      subtitle: "Multi-Department Operating System & ERP Architecture",
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
    <section className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Proven Architectures
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Selected Systems &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Live Case Studies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
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
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCase === idx
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Selected Case Mockup Presentation (Pure White Window Container) */}
        <div className="mt-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Mac/Windows Window Controls Bar */}
          <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-slate-600 font-semibold">
                case-study // {current.title.toLowerCase().replace(/\s+/g, "-")}.env
              </span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              Production Verified
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Case Description & Metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-wider font-bold">
                    {current.client}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    {current.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {current.subtitle}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {current.description}
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Build a Similar Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: Realistic UI System Mockup Display (Window Card) */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-800 font-bold">{current.title}</span>
                  </div>
                  <span className="text-[10px] text-blue-600 font-bold">Live Cluster</span>
                </div>

                {/* Dynamic Mockup Body depending on Active Case */}
                {activeCase === 0 && (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-slate-500 block text-[10px]">ERP System State</span>
                        <span className="text-emerald-700 font-bold">100% Operational • 0 Errors</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                        Frappe v15
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Sales → Invoicing Automation</span>
                        <span className="text-emerald-700 font-bold">Cleared in 1.4s</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">HRMS Leave Balance Calculation</span>
                        <span className="text-emerald-700 font-bold">Synchronized</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Daily Automated Backup Snapshot</span>
                        <span className="text-slate-500">03:00 UTC (Verified)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-800 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Multi-tenant data isolation active across all workspaces.</span>
                    </div>
                  </div>
                )}

                {activeCase === 1 && (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-emerald-800 block text-[10px] font-semibold">Inbound Webhook Stream</span>
                        <span className="text-slate-900 font-bold">Canonical 15-Column Google Sheet CRM</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        Live
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Lead ID Generator</span>
                        <span className="text-blue-700 font-bold">HRPS-20260914-8842</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Executive Alert Email</span>
                        <span className="text-emerald-700 font-bold">Dispatched (240ms)</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">WhatsApp Notification Bot</span>
                        <span className="text-emerald-700 font-bold">Delivered</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] text-slate-700 flex items-center gap-2 shadow-xs">
                      <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Average lead contact speed reduced from 4 hours to 3 minutes.</span>
                    </div>
                  </div>
                )}

                {activeCase === 2 && (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-indigo-800 block text-[10px] font-semibold">MT5 Scanner Feed</span>
                        <span className="text-slate-900 font-bold">Multi-Timeframe Trend Confluence</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                        28 Pairs
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-xs">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Gold (XAUUSD) M15 Pullback</span>
                        <span className="text-emerald-700 font-bold">Confluence Triggered</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Telegram Channel Broadcast</span>
                        <span className="text-emerald-700 font-bold">Sent (&lt;90ms)</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-700">Max Drawdown Guardian</span>
                        <span className="text-slate-500 font-semibold">Active (0% breach)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] text-slate-700 flex items-center gap-2 shadow-xs">
                      <Server className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Dedicated VPS automated execution running 24/5.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
