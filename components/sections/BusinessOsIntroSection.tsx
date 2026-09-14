"use client";

import { AlertTriangle, CheckCircle2, Layers, Unplug, ArrowRight, Zap, RefreshCw, Database, Server } from "lucide-react";

export function BusinessOsIntroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-slate-200/80 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Punchy & Concise */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono uppercase tracking-wider font-semibold">
            Architecture Contrast
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stop running your company on{" "}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              10 disconnected tools.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            Siloed apps force your team to re-enter data and cost thousands in per-user subscriptions. A unified Business OS connects every department in one database.
          </p>
        </div>

        {/* Visual Architecture Comparison Grid (Headings Next to Icons) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {/* Card 1: Disconnected Tool Trap */}
          <div className="p-5 sm:p-7 rounded-2xl bg-rose-50/60 border border-rose-200/80 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-700 border border-rose-200 shrink-0">
                    <Unplug className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">The Fragmented Tool Trap</h3>
                    <p className="text-[11px] text-rose-600 font-medium">Disconnected SaaS Sprawl</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-100 text-rose-700 border border-rose-200">
                  HIGH FRICTION
                </span>
              </div>

              {/* Visual Disconnected Tool Grid */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-rose-200/60 grid grid-cols-3 gap-2 text-center text-xs font-mono shadow-sm">
                <div className="p-2 rounded-lg bg-slate-50 border border-rose-100 text-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-rose-600">CRM App</span>
                  <span className="text-[9px] text-slate-500">Isolated DB</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-rose-100 text-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-rose-600">Invoicing App</span>
                  <span className="text-[9px] text-slate-500">Manual Re-entry</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-rose-100 text-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-rose-600">HR App</span>
                  <span className="text-[9px] text-slate-500">Separate Seats</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-rose-100 text-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-rose-600">Projects App</span>
                  <span className="text-[9px] text-slate-500">Duplicate Tasks</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-rose-100 text-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-rose-600">Spreadsheets</span>
                  <span className="text-[9px] text-slate-500">Formula Errors</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-rose-100 text-slate-800 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-rose-600">Brittle Zapier</span>
                  <span className="text-[9px] text-slate-500">Silent Breaks</span>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>8+ recurring software logins with per-seat billing penalties</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Hours lost every week manually copying customer data between tabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Zero live visibility over true margins and pipeline speed</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-rose-200 flex items-center justify-between text-xs font-mono text-rose-700 font-semibold">
              <span>Wasted Time: ~15 hrs/wk</span>
              <span>Extra Cost: $800 - $2,500/mo</span>
            </div>
          </div>

          {/* Card 2: Unified Managed Business OS */}
          <div className="p-5 sm:p-7 rounded-2xl bg-blue-50/70 border border-blue-200 backdrop-blur-md relative overflow-hidden shadow-md shadow-blue-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white border border-blue-500 shrink-0 shadow-sm">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">The Connected Business OS</h3>
                    <p className="text-[11px] text-blue-700 font-medium">Unified ERPNext Architecture</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  OPTIMAL FLOW
                </span>
              </div>

              {/* Visual Connected Operating Pipeline */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-blue-200/80 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-slate-800">
                  <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-200 font-bold text-blue-800">
                    <Database className="w-3 h-3 text-blue-600" />
                    <span>One Single DB</span>
                  </div>
                  <Zap className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-bold text-emerald-800">
                    <RefreshCw className="w-3 h-3 text-emerald-600" />
                    <span>Auto Handshake</span>
                  </div>
                  <Zap className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  <div className="flex items-center gap-1.5 bg-sky-50 px-2.5 py-1.5 rounded-lg border border-sky-200 font-bold text-sky-800">
                    <Server className="w-3 h-3 text-sky-600" />
                    <span>Managed Cloud</span>
                  </div>
                </div>
                <div className="mt-2.5 text-center text-[10px] text-slate-500 font-mono font-medium">
                  CRM ➔ Sales Quotation ➔ Invoice Ledger ➔ HR Dispatch (Instant)
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong className="text-slate-900">100% Data Ownership:</strong> Open-core Frappe / ERPNext with zero per-user licensing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong className="text-slate-900">Instant Flow:</strong> Leads flow to quotes, sales orders, projects, and books seamlessly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong className="text-slate-900">Managed OS:</strong> Hemanth handles configuration, hosting, daily backups, and direct support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-blue-200 flex items-center justify-between text-xs font-mono text-blue-800 font-semibold">
              <span>Setup: One-Time Milestone</span>
              <span>Support: Flat Monthly Managed OS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
