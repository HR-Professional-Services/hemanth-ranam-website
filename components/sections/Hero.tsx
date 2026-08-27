"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/siteData";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Activity,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Zap,
  Terminal,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"system" | "trading">("system");

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
    >
      {/* Background Subtle Gradient Mesh & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-blue-100/60 via-sky-50/40 to-indigo-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-800 uppercase">
                Technology • Systems • Automation • Trading Technology
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Building Smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">
                Business Systems
              </span>{" "}
              & Technology.
            </h1>

            {/* Supporting Statement */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {SITE_CONFIG.supportingStatement}
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
              {SITE_CONFIG.secondaryStatement}
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all duration-200"
              >
                <span>Explore Services</span>
                <Layers className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Key Micro Signals */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>2X Founder</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>MBA & CMI Level 7</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>ScaleNova CEO</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>UK Based</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-6 overflow-hidden">
              {/* Header with Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400 pl-2">
                    architecture.engine
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] font-medium">
                  <button
                    onClick={() => setActiveTab("system")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "system"
                        ? "bg-white text-blue-600 shadow-xs font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Business OS
                  </button>
                  <button
                    onClick={() => setActiveTab("trading")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "trading"
                        ? "bg-white text-blue-600 shadow-xs font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Trading Pipeline
                  </button>
                </div>
              </div>

              {/* Dynamic View 1: Connected Business OS Engine */}
              {activeTab === "system" ? (
                <div className="pt-4 space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-600" />
                      Connected Operational Workflow
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      100% Operational
                    </span>
                  </div>

                  {/* Connected Flow Visualization */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <p className="font-medium text-slate-500 text-[10px]">INBOUND</p>
                      <p className="font-bold text-slate-800 mt-0.5">Leads & CRM</p>
                      <span className="text-[10px] text-blue-600 font-mono">Auto-Triage</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/90 relative">
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-blue-400 font-mono text-[10px]">
                        →
                      </div>
                      <p className="font-medium text-blue-700 text-[10px]">CORE ENGINE</p>
                      <p className="font-bold text-blue-900 mt-0.5">ERP & Logic</p>
                      <span className="text-[10px] text-blue-600 font-mono">Sync & Rules</span>
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-blue-400 font-mono text-[10px]">
                        →
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <p className="font-medium text-slate-500 text-[10px]">OUTCOME</p>
                      <p className="font-bold text-slate-800 mt-0.5">Reporting & SOP</p>
                      <span className="text-[10px] text-emerald-600 font-mono">Real-time KPI</span>
                    </div>
                  </div>

                  {/* Live Telemetry Panel */}
                  <div className="rounded-xl bg-slate-950 p-3.5 text-white font-mono text-[11px] space-y-2 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] border-b border-slate-800 pb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-blue-400" />
                        EVENT_DISPATCHER
                      </span>
                      <span className="text-emerald-400">LATENCY: 14ms</span>
                    </div>
                    <p className="text-slate-300">
                      <span className="text-blue-400">✓ Ingestion:</span> Lead captured via API
                    </p>
                    <p className="text-slate-300">
                      <span className="text-sky-400">✓ Validation:</span> Multi-tenant ERP mapped
                    </p>
                    <p className="text-slate-300">
                      <span className="text-emerald-400">✓ Dispatch:</span> Telegram notification sent
                    </p>
                  </div>
                </div>
              ) : (
                /* Dynamic View 2: Trading Technology Flow */
                <div className="pt-4 space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      Algorithmic Execution Pipeline
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      Pine v5 → MT5 EA
                    </span>
                  </div>

                  {/* Trading Pipeline Grid */}
                  <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-[9px] text-slate-400 font-mono">01</p>
                      <p className="font-bold text-slate-800 text-[11px]">Rules</p>
                      <p className="text-[9px] text-slate-500">Structure</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-[9px] text-slate-400 font-mono">02</p>
                      <p className="font-bold text-slate-800 text-[11px]">Indicator</p>
                      <p className="text-[9px] text-blue-600">Pine Script</p>
                    </div>
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                      <p className="text-[9px] text-blue-500 font-mono">03</p>
                      <p className="font-bold text-blue-900 text-[11px]">Alert</p>
                      <p className="text-[9px] text-blue-700">Webhook</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-[9px] text-slate-400 font-mono">04</p>
                      <p className="font-bold text-slate-800 text-[11px]">MT5 / Bot</p>
                      <p className="text-[9px] text-emerald-600">Telegram</p>
                    </div>
                  </div>

                  {/* Telemetry Panel for Trading */}
                  <div className="rounded-xl bg-slate-950 p-3.5 text-white font-mono text-[11px] space-y-2 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] border-b border-slate-800 pb-1.5">
                      <span className="flex items-center gap-1.5 text-sky-300">
                        <Activity className="w-3 h-3 text-sky-400" />
                        XAUUSD / USTEC ROUTER
                      </span>
                      <span className="text-emerald-400">LATENCY: 8ms</span>
                    </div>
                    <p className="text-slate-300">
                      <span className="text-emerald-400">[FILTER_PASS]</span> HTF Invalidation Check: True
                    </p>
                    <p className="text-slate-300">
                      <span className="text-sky-400">[WEBHOOK]</span> Signal payload routed to Telegram
                    </p>
                    <p className="text-slate-300">
                      <span className="text-blue-400">[EA_STATUS]</span> Risk lot calculation verified
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Quick Metric strip */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Deterministic Rules
                </span>
                <span className="flex items-center gap-1 font-mono text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Scalable Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
