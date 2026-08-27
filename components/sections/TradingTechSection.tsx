"use client";

import { useState } from "react";
import { TRADING_PIPELINE } from "@/data/siteData";
import {
  TrendingUp,
  Target,
  Binary,
  ShieldCheck,
  BellRing,
  Zap,
  BookOpenCheck,
  ArrowRight,
  AlertTriangle,
  Radio,
  Send,
  Sliders,
  Sparkles,
} from "lucide-react";

export function TradingTechSection() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const iconComponents: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-blue-600" />,
    Binary: <Binary className="w-5 h-5 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    BellRing: <BellRing className="w-5 h-5 text-blue-600" />,
    Zap: <Zap className="w-5 h-5 text-blue-600" />,
    BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-blue-600" />,
  };

  const markets = [
    { name: "Gold / XAUUSD", type: "Commodity", desc: "Intraday structure & session liquidity" },
    { name: "USTEC / US100", type: "Index", desc: "NY open momentum & volatility filters" },
    { name: "US500", type: "Index", desc: "Macro trends & mean-reversion rules" },
    { name: "Silver / XAGUSD", type: "Commodity", desc: "Correlated swings & spread checks" },
    { name: "Major Forex Pairs", type: "Currencies", desc: "London/NY session killzones" },
  ];

  return (
    <section
      id="trading-tech"
      className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Financial Markets Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Trading Technology, <span className="text-blue-600">Built Around Your Strategy.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            I develop custom trading technology for traders and fund operators who want to turn clearly defined, rule-based execution models into deterministic indicators, low-latency alerts, and automated execution workflows.
          </p>
        </div>

        {/* Visual Strategy-to-Execution Pipeline */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-600" />
                The End-to-End Trading Technology Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                A structured, disciplined engineering workflow converting human discretionary rules into automated technology.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 shrink-0">
              <Radio className="w-3.5 h-3.5 animate-pulse text-blue-600" />
              <span>Deterministic Execution</span>
            </div>
          </div>

          {/* Interactive Steps Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRADING_PIPELINE.map((pipe, index) => {
              const isSelected = selectedStep === index;
              return (
                <button
                  key={pipe.step}
                  onClick={() => setSelectedStep(index)}
                  className={`p-4 rounded-xl text-left transition-all duration-150 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/20"
                      : "bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/80"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-blue-100" : "text-blue-600"
                      }`}
                    >
                      {pipe.step}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-sm ${
                        isSelected
                          ? "bg-blue-700 text-blue-100"
                          : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {pipe.badge}
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-xs font-bold leading-tight ${
                        isSelected ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {pipe.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail card of active step */}
          <div className="mt-6 p-5 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
                {iconComponents[TRADING_PIPELINE[selectedStep].icon]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-400">
                    STEP {TRADING_PIPELINE[selectedStep].step}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {TRADING_PIPELINE[selectedStep].title}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {TRADING_PIPELINE[selectedStep].description}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0"
            >
              <span>Build This Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Core Trading Technology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: TradingView & Pine Script */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mb-4">
                PINE
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                TradingView & Pine Script v5
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom visual overlay indicators, multi-timeframe swing analysis, supply/demand liquidity detectors, and deterministic alert scripts optimized for high resolution.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Pine Script v5 clean architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Real-time webhook JSON payloads
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Dynamic chart drawing & tables
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                TradingView API / Webhooks
              </span>
            </div>
          </div>

          {/* Pillar 2: MetaTrader 5 & MQL5 */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mb-4">
                MT5
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                MetaTrader 5 (MT5) Expert Advisors
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom MQL5 Expert Advisors (EAs) with strict risk management modules, automatic lot sizing based on account equity, slippage controls, and trade execution guards.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Risk percentage lot calculator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Trailing stop & break-even logic
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  WebRequest HTTP / Socket bridge
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                MQL5 / Native C++ Interop
              </span>
            </div>
          </div>

          {/* Pillar 3: Telegram & Webhook Automation */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Send className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Telegram Alert Bots & Webhooks
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instant delivery of formatted trading signals with trade direction, entry price, stop-loss, take-profit levels, and real-time trade progress updates.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Sub-second webhook response time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Private channel & group broadcasting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Database logging & trade journals
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                Telegram Bot API / FastAPI
              </span>
            </div>
          </div>
        </div>

        {/* Markets Covered Strip */}
        <div className="rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Asset Classes & Market Structures Engineered
            </h4>
            <span className="text-xs text-slate-400">5+ Years Market Experience</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {markets.map((m) => (
              <div
                key={m.name}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-blue-600 uppercase">
                    {m.type}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-900 mt-1">{m.name}</p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strict Compliance & Technology Disclaimer */}
        <div className="rounded-xl bg-amber-50/70 border border-amber-200/90 p-4 sm:p-5 flex items-start gap-3.5 text-amber-950">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-bold">
              Engineering & Technology Disclaimer
            </p>
            <p className="text-amber-800/90 leading-relaxed text-xs">
              Trading technology, Pine Script indicators, and MetaTrader 5 Expert Advisors are custom-developed strictly according to client-defined rules, specifications, and execution logic. These services constitute software engineering and technical automation. They do not constitute financial advice, investment recommendations, or guaranteed trading returns. Trading in financial markets carries risk of capital loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
