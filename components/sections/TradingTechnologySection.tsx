"use client";

import Link from "next/link";
import { useState } from "react";
import {
  TrendingUp,
  Binary,
  Sliders,
  Bot,
  Send,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";
import { TRADING_TECH_PRODUCTS } from "@/data/businessOsData";

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp,
  Binary,
  Sliders,
  Bot,
  Send,
  Cpu,
};

export function TradingTechnologySection() {
  const [activeTab, setActiveTab] = useState<"pine" | "mt5" | "scanner">("mt5");

  return (
    <section id="trading-tech" className="py-14 sm:py-20 lg:py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            02 Commercial Division
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trading Technology &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Execution Systems
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            Custom quantitative software for TradingView and MetaTrader 5. Built for proprietary desks, algorithmic traders, and systematic funds.
          </p>
        </div>

        {/* Live Interactive Terminal Simulation UI (Mac/Windows Pure White Frame) */}
        <div className="mt-8 sm:mt-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden max-w-5xl mx-auto">
          {/* Terminal Window Header */}
          <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                <span>quant-bridge-core.mql5 // v5.4.1</span>
              </span>
            </div>

            {/* Mode Switchers */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActiveTab("mt5")}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === "mt5"
                    ? "bg-blue-600 text-white font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                MT5 Expert Advisor
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scanner")}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === "scanner"
                    ? "bg-blue-600 text-white font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Multi-Asset Scanner
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pine")}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === "pine"
                    ? "bg-blue-600 text-white font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Pine Script v5
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 font-mono text-xs space-y-3 bg-slate-50">
            {activeTab === "mt5" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-200">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>ENGINE ACTIVE • VPS LOW-LATENCY</span>
                  </span>
                  <span className="font-medium">LATENCY: 84ms • TICK EVENT DRIVEN</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-[10px] text-slate-500 block">Symbol / Instrument</span>
                    <span className="text-slate-900 font-bold">XAUUSD (Gold Spot)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-[10px] text-slate-500 block">Risk Matrix</span>
                    <span className="text-blue-700 font-bold">0.50% Equity / Max DD 2.0%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-[10px] text-slate-500 block">Execution Mode</span>
                    <span className="text-emerald-700 font-bold">Limit / Non-Slippage</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700 space-y-1 shadow-xs">
                  <span className="text-blue-600 font-bold">[03:45:12 UTC]</span> OrderBlock verified on M15. Confluence index: 0.88.
                  <br />
                  <span className="text-emerald-600 font-bold">[03:45:13 UTC]</span> Executing buy limit @ 2654.20. Target R:R 1:2.8.
                  <br />
                  <span className="text-indigo-600 font-bold">[03:45:14 UTC]</span> Telegram alert dispatched to Private Desk VIP channel.
                </div>
              </div>
            )}

            {activeTab === "scanner" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-200">
                  <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>SCANNING 28 FOREX &amp; INDEX SYMBOLS</span>
                  </span>
                  <span className="font-medium">REFRESH: 1.0s REAL-TIME</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="block font-bold text-slate-900">EURUSD</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Bullish Sweep (H1)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="block font-bold text-slate-900">US30</span>
                    <span className="text-[10px] text-rose-600 font-semibold">Supply Rejection (M30)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="block font-bold text-slate-900">XAUUSD</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Break of Structure (H4)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="block font-bold text-slate-900">NAS100</span>
                    <span className="text-[10px] text-blue-600 font-semibold">Fair Value Gap (M15)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pine" && (
              <div className="space-y-2 text-[11px] text-slate-700 p-2">
                <div className="text-slate-400">// TradingView Pine Script v5 Non-Repainting Logic</div>
                <div className="space-y-1">
                  <span className="text-blue-600 font-bold">//@version=5</span>
                  <br />
                  <span className="text-indigo-600 font-bold">indicator</span>(&quot;Institutional Liquidity Engine&quot;, overlay = true)
                  <br />
                  <span className="text-slate-600">f_detect_sweep</span>(len) =&gt; ta.highest(high, len)[1] &lt; high and close &lt; open
                  <br />
                  <span className="text-emerald-600 font-bold">alertcondition</span>(sweepCondition, title=&quot;Liquidity Run&quot;, message=&quot;Symbol: {'{{ticker}}'} Run Detected&quot;)
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prominent Legal Disclaimer Banner (Concise, Clean White Card) */}
        <div className="mt-6 max-w-4xl mx-auto p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-2.5 text-xs text-blue-900 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-[11px] sm:text-xs">
            <strong className="text-slate-900">Strict Technology Disclaimer:</strong> All indicators, scanners, Expert Advisors, and alert bridges are mathematical software engineering tools. We do not provide financial advice, trading signals, managed accounts, or investment recommendations.
          </div>
        </div>

        {/* Trading Products Grid: Clean Cards with Headings Next to Icons */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRADING_TECH_PRODUCTS.map((prod) => {
            const IconComp = ICON_MAP[prod.icon] || TrendingUp;
            return (
              <div
                key={prod.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Heading next to icon */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {prod.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-blue-600 font-medium">
                    C++ / MQL5 / Pine
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Build Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
