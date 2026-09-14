"use client";

import Link from "next/link";
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
  return (
    <section id="trading-tech" className="py-16 sm:py-20 lg:py-28 border-t border-white/[0.06] relative bg-[#04070e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider">
            03 Systematic Trading Technology
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Institutional-Grade Tools for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              TradingView & MetaTrader 5
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We build rule-based trading software, custom scanners, Pine Script v5 indicators, MQL5 execution bots, and real-time Telegram alert bridges.
          </p>
        </div>

        {/* Prominent Legal Disclaimer Banner */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-2xl bg-violet-950/20 border border-violet-500/30 flex items-start gap-3 text-xs text-violet-200/90 leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold">Strict Technology Disclaimer:</strong>
            All trading software, indicators, scanners, Expert Advisors, and alert modules provided by Hemanth Ranam are strictly software engineering tools designed for mathematical analysis and rule-based automation. We do not provide financial advice, trading signals, managed accounts, or investment recommendations. Trading in financial markets carries substantial risk of loss.
          </div>
        </div>

        {/* Trading Products Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADING_TECH_PRODUCTS.map((prod) => {
            const IconComp = ICON_MAP[prod.icon] || TrendingUp;
            return (
              <div
                key={prod.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#080d19] border border-white/[0.08] hover:border-violet-500/40 transition-all flex flex-col justify-between group space-y-4 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {prod.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-violet-400 font-medium mt-0.5">
                      &ldquo;{prod.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06] text-xs text-slate-300">
                    <span className="font-semibold text-white block text-[10px] uppercase font-mono">
                      Core Capabilities
                    </span>
                    {prod.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={`#contact?category=Trading+Technology&service=${encodeURIComponent(prod.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600/90 hover:bg-violet-500 shadow-lg shadow-violet-500/20 transition-all"
                  >
                    <span>Request {prod.name} Development</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trading Specs Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-violet-400" />
            <span>Supported Platforms: TradingView Pine Script v5 • MetaTrader 5 (MT5 / MQL5) • Python MT5 API</span>
          </div>
          <Link
            href="/trading-technology"
            className="text-violet-400 hover:text-violet-300 font-medium flex items-center gap-1 font-sans"
          >
            <span>Explore Dedicated Trading Tech Page</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
