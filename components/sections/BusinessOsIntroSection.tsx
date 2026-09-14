"use client";

import { AlertTriangle, CheckCircle2, Layers, Unplug, ArrowRight, Zap, RefreshCw, Database, Server } from "lucide-react";

export function BusinessOsIntroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Punchy & Concise */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Architecture Contrast
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stop running your company on{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              10 disconnected tools.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Siloed apps force your team to re-enter data and cost thousands in per-user subscriptions. A unified Business OS connects every department in one database.
          </p>
        </div>

        {/* Visual Architecture Comparison Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {/* Card 1: Disconnected Tool Trap */}
          <div className="p-5 sm:p-7 rounded-2xl bg-rose-950/15 border border-rose-500/20 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 border border-rose-500/30">
                    <Unplug className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">The Fragmented Tool Trap</h3>
                    <p className="text-[11px] text-rose-300/80">Disconnected SaaS Sprawl</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  HIGH FRICTION
                </span>
              </div>

              {/* Visual Disconnected Tool Grid */}
              <div className="mt-5 p-3.5 rounded-xl bg-black/40 border border-rose-500/15 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-lg bg-white/[0.02] border border-rose-500/20 text-slate-300 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-rose-400">CRM App</span>
                  <span className="text-[9px] text-slate-500">Isolated DB</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-rose-500/20 text-slate-300 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-rose-400">Invoicing App</span>
                  <span className="text-[9px] text-slate-500">Manual Re-entry</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-rose-500/20 text-slate-300 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-rose-400">HR App</span>
                  <span className="text-[9px] text-slate-500">Separate Seats</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-rose-500/20 text-slate-300 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-rose-400">Projects App</span>
                  <span className="text-[9px] text-slate-500">Duplicate Tasks</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-rose-500/20 text-slate-300 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-rose-400">Spreadsheets</span>
                  <span className="text-[9px] text-slate-500">Formula Errors</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-rose-500/20 text-slate-300 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-rose-400">Brittle Zapier</span>
                  <span className="text-[9px] text-slate-500">Silent Breaks</span>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>8+ recurring software logins with per-seat billing penalties</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Hours lost every week manually copying customer data between tabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Zero live visibility over true margins and pipeline speed</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-rose-500/15 flex items-center justify-between text-xs font-mono text-rose-300">
              <span>Wasted Time: ~15 hrs/wk</span>
              <span>Extra Cost: $800 - $2,500/mo</span>
            </div>
          </div>

          {/* Card 2: Unified Managed Business OS */}
          <div className="p-5 sm:p-7 rounded-2xl bg-blue-950/20 border border-blue-500/30 backdrop-blur-md relative overflow-hidden shadow-xl shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">The Connected Business OS</h3>
                    <p className="text-[11px] text-blue-300">Unified ERPNext Architecture</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  OPTIMAL FLOW
                </span>
              </div>

              {/* Visual Connected Operating Pipeline */}
              <div className="mt-5 p-3.5 rounded-xl bg-black/40 border border-blue-500/20">
                <div className="flex items-center justify-between text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-1.5 bg-blue-500/10 px-2.5 py-1.5 rounded-lg border border-blue-500/30">
                    <Database className="w-3 h-3 text-blue-400" />
                    <span>One Single DB</span>
                  </div>
                  <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/30">
                    <RefreshCw className="w-3 h-3 text-emerald-400" />
                    <span>Auto Handshake</span>
                  </div>
                  <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <div className="flex items-center gap-1.5 bg-indigo-500/10 px-2.5 py-1.5 rounded-lg border border-indigo-500/30">
                    <Server className="w-3 h-3 text-indigo-400" />
                    <span>Managed Cloud</span>
                  </div>
                </div>
                <div className="mt-2.5 text-center text-[10px] text-slate-400 font-mono">
                  CRM ➔ Sales Quotation ➔ Invoice Ledger ➔ HR Dispatch (Instant)
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-4 space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>100% Data Ownership:</strong> Open-core Frappe / ERPNext with zero per-user licensing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Instant Flow:</strong> Leads flow to quotes, sales orders, projects, and books seamlessly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Managed OS:</strong> Hemanth handles configuration, hosting, daily backups, and priority support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-blue-500/20 flex items-center justify-between text-xs font-mono text-blue-300">
              <span>Setup: One-Time Milestone</span>
              <span>Support: Flat Monthly Managed OS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
