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
    <section id="trading-tech" className="py-14 sm:py-20 lg:py-24 border-t border-white/[0.06] relative bg-[#04070e]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Punchy & Clear */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider">
            02 Commercial Division
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trading Technology &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Execution Systems
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Custom quantitative software for TradingView and MetaTrader 5. Built for proprietary desks, algorithmic traders, and systematic funds.
          </p>
        </div>

        {/* Live Interactive Terminal Simulation UI */}
        <div className="mt-8 sm:mt-12 rounded-2xl bg-[#080d19] border border-white/[0.1] shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-[#060911] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>quant-bridge-core.mql5 // v5.4.1</span>
              </span>
            </div>

            {/* Mode Switchers */}
            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-white/[0.06] text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActiveTab("mt5")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === "mt5"
                    ? "bg-violet-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                MT5 Expert Advisor
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scanner")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === "scanner"
                    ? "bg-violet-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Multi-Asset Scanner
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pine")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeTab === "pine"
                    ? "bg-violet-600 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Pine Script v5
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-xs space-y-3 bg-[#050914]">
            {activeTab === "mt5" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/[0.05]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>ENGINE ACTIVE • VPS LOW-LATENCY</span>
                  </span>
                  <span>LATENCY: 84ms • TICK EVENT DRIVEN</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block">Symbol / Instrument</span>
                    <span className="text-white font-bold">XAUUSD (Gold Spot)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block">Risk Matrix</span>
                    <span className="text-violet-400 font-bold">0.50% Equity / Max DD 2.0%</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block">Execution Mode</span>
                    <span className="text-emerald-400 font-bold">Limit / Non-Slippage</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-black/60 border border-violet-500/20 text-[11px] text-slate-300 space-y-1">
                  <span className="text-violet-400">[03:45:12 UTC]</span> OrderBlock verified on M15. Confluence index: 0.88.
                  <br />
                  <span className="text-emerald-400">[03:45:13 UTC]</span> Executing buy limit @ 2654.20. Target R:R 1:2.8.
                  <br />
                  <span className="text-cyan-400">[03:45:14 UTC]</span> Telegram alert dispatched to Private Desk VIP channel.
                </div>
              </div>
            )}

            {activeTab === "scanner" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/[0.05]">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>SCANNING 28 FOREX &amp; INDEX SYMBOLS</span>
                  </span>
                  <span>REFRESH: 1.0s REAL-TIME</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    <span className="block font-bold">EURUSD</span>
                    <span className="text-[10px]">Bullish Sweep (H1)</span>
                  </div>
                  <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300">
                    <span className="block font-bold">US30</span>
                    <span className="text-[10px]">Supply Rejection (M30)</span>
                  </div>
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    <span className="block font-bold">XAUUSD</span>
                    <span className="text-[10px]">Break of Structure (H4)</span>
                  </div>
                  <div className="p-2 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300">
                    <span className="block font-bold">NAS100</span>
                    <span className="text-[10px]">Fair Value Gap (M15)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pine" && (
              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="text-slate-500">// TradingView Pine Script v5 Non-Repainting Logic</div>
                <div className="text-violet-300">
                  <span className="text-blue-400">//@version=5</span>
                  <br />
                  <span className="text-indigo-300">indicator</span>(&quot;Institutional Liquidity Engine&quot;, overlay = true)
                  <br />
                  <span className="text-slate-400">f_detect_sweep</span>(len) =&gt; ta.highest(high, len)[1] &lt; high and close &lt; open
                  <br />
                  <span className="text-emerald-400">alertcondition</span>(sweepCondition, title=&quot;Liquidity Run&quot;, message=&quot;Symbol: {'{{ticker}}'} Run Detected&quot;)
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prominent Legal Disclaimer Banner (Concise) */}
        <div className="mt-6 max-w-4xl mx-auto p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/30 flex items-start gap-2.5 text-xs text-violet-200 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
          <div className="text-[11px] sm:text-xs">
            <strong className="text-white">Strict Technology Disclaimer:</strong> All indicators, scanners, Expert Advisors, and alert bridges are mathematical software engineering tools. We do not provide financial advice, trading signals, managed accounts, or investment recommendations.
          </div>
        </div>

        {/* Trading Products Grid: Clean Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRADING_TECH_PRODUCTS.map((prod) => {
            const IconComp = ICON_MAP[prod.icon] || TrendingUp;
            return (
              <div
                key={prod.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#080d19] border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between group space-y-4 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {prod.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-violet-400">
                    C++ / MQL5 / Pine
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-white group-hover:text-violet-400 flex items-center gap-1 transition-colors"
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
