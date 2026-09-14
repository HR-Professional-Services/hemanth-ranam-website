"use client";

import { useState } from "react";
import {
  Users,
  Receipt,
  UserCheck,
  TrendingUp,
  CheckSquare,
  Headphones,
  BarChart3,
  ShieldCheck,
  Zap,
  Activity,
  ArrowUpRight,
  Database,
  Lock,
} from "lucide-react";

export function HeroVisualDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "crm" | "finance" | "hr">("overview");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-16 select-none">
      {/* Ambient background glow behind dashboard */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Outer Dashboard Shell with Glassmorphism */}
      <div className="relative rounded-2xl bg-[#090e1b]/90 border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden">
        {/* Window Topbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#070b16]/70">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/60 border border-rose-500/30" />
            <div className="w-3 h-3 rounded-full bg-amber-500/60 border border-amber-500/30" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/60 border border-emerald-500/30" />
            <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-blue-400" />
              <span>business-os.company.internal</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "overview"
                  ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Command Center
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("crm")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "crm"
                  ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              CRM & Sales
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("finance")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "finance"
                  ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Ledger & Cash
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hr")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "hr"
                  ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Workforce
            </button>
          </div>
        </div>

        {/* Interactive Dashboard Content */}
        <div className="p-5 sm:p-6 lg:p-8 space-y-6">
          {/* Executive Metric Strips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5 text-blue-400" />
                  Monthly Run Rate
                </span>
                <span className="text-emerald-400 text-[10px] flex items-center font-mono">
                  +18.4%
                </span>
              </div>
              <div className="text-xl font-bold text-white mt-1 font-mono tracking-tight">
                $142,850
              </div>
              <div className="text-[10px] text-slate-400 mt-1">Reconciled via Finance OS</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  Active Deals
                </span>
                <span className="text-blue-400 text-[10px] flex items-center font-mono">
                  34 open
                </span>
              </div>
              <div className="text-xl font-bold text-white mt-1 font-mono tracking-tight">
                $384,200
              </div>
              <div className="text-[10px] text-slate-400 mt-1">Weighted Pipeline Value</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-indigo-400" />
                  Milestones on Track
                </span>
                <span className="text-emerald-400 text-[10px] flex items-center font-mono">
                  96.8%
                </span>
              </div>
              <div className="text-xl font-bold text-white mt-1 font-mono tracking-tight">
                28 / 29
              </div>
              <div className="text-[10px] text-slate-400 mt-1">Active Client Engagements</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5 text-emerald-400" />
                  Support SLA
                </span>
                <span className="text-emerald-400 text-[10px] flex items-center font-mono">
                  14m avg
                </span>
              </div>
              <div className="text-xl font-bold text-white mt-1 font-mono tracking-tight">
                99.4%
              </div>
              <div className="text-[10px] text-slate-400 mt-1">CSAT Benchmark</div>
            </div>
          </div>

          {/* Connected Floating Modular Cards Connected by Visual Conduits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Connecting subtle SVG lines across modules */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-cyan-500/20 pointer-events-none -translate-y-1/2" />

            {/* Layer 1: CRM & Sales Opportunities */}
            <div className="relative p-4 rounded-xl bg-[#0d1424]/90 border border-blue-500/25 shadow-lg shadow-blue-500/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">01. CRM & Sales</h4>
                    <span className="text-[10px] text-slate-400">Inbound Lead Pipeline</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  Auto-Routed
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">Apex Capital Partners</div>
                    <div className="text-[10px] text-slate-400">Enterprise Business OS • 45 users</div>
                  </div>
                  <div className="text-right font-mono text-emerald-400 text-xs">$24,500</div>
                </div>

                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">Nordic Logistics Ltd</div>
                    <div className="text-[10px] text-slate-400">Inventory & Operations OS</div>
                  </div>
                  <div className="text-right font-mono text-emerald-400 text-xs">$12,800</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  Lead Score 94/100
                </span>
                <span className="text-blue-400">→ Dispatched to Proposal</span>
              </div>
            </div>

            {/* Layer 2: Operations & Automated Projects */}
            <div className="relative p-4 rounded-xl bg-[#0d1424]/90 border border-indigo-500/25 shadow-lg shadow-indigo-500/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <CheckSquare className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">02. Operations & Tasks</h4>
                    <span className="text-[10px] text-slate-400">SOP & Milestone Delivery</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Sprint 4/6
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-300">Frappe ERP Migration</span>
                    <span className="text-indigo-400 font-mono">82%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full w-[82%]" />
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-300">Multi-Tier Approval Rules</span>
                    <span className="text-emerald-400 font-mono">Verified</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-full" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  Zero Blockers
                </span>
                <span className="text-indigo-400">→ Auto-Sync with Billing</span>
              </div>
            </div>

            {/* Layer 3: Finance Ledger & Automated Cash Flow */}
            <div className="relative p-4 rounded-xl bg-[#0d1424]/90 border border-cyan-500/25 shadow-lg shadow-cyan-500/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Receipt className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">03. Finance & Invoicing</h4>
                    <span className="text-[10px] text-slate-400">Real-Time Ledger Clearing</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Auto-Settled
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">Invoice #INV-2026-089</div>
                    <div className="text-[10px] text-slate-400">Stripe Webhook Settled</div>
                  </div>
                  <div className="text-right font-mono text-emerald-400 text-xs">+$6,450</div>
                </div>

                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">Invoice #INV-2026-090</div>
                    <div className="text-[10px] text-slate-400">Due in 5 days • Link Viewed</div>
                  </div>
                  <div className="text-right font-mono text-blue-400 text-xs">$8,200</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  Tax Audit Ready
                </span>
                <span className="text-cyan-400">→ Auto-Reconciled</span>
              </div>
            </div>
          </div>

          {/* Bottom Connectivity Bar */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Unified Database: Frappe / ERPNext Core</span>
              <span>•</span>
              <span className="text-slate-300">Single Source of Truth</span>
            </div>
            <div className="text-[11px] text-blue-400 flex items-center gap-1 font-sans">
              <span>All 10 modules communicate without manual exports</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
