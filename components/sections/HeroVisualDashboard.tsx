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
    <div className="relative w-full max-w-5xl mx-auto mt-10 sm:mt-14 select-none">
      {/* Ambient background blue glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Pure White Glassmorphic Window Frame */}
      <div className="relative rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-600/10 backdrop-blur-2xl overflow-hidden">
        {/* Window Topbar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200/80 bg-slate-50/90 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 ml-1.5 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-blue-600" />
              <span>business-os.company.internal</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Sync
              </span>
            </span>
          </div>

          {/* Window View Tabs */}
          <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg text-[11px] font-medium overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-white text-blue-700 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Command Center
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("crm")}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === "crm"
                  ? "bg-white text-blue-700 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              CRM &amp; Sales
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("finance")}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === "finance"
                  ? "bg-white text-blue-700 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Ledger &amp; Cash
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hr")}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === "hr"
                  ? "bg-white text-blue-700 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Workforce
            </button>
          </div>
        </div>

        {/* Window Content Canvas */}
        <div className="p-4 sm:p-6 space-y-4 bg-gradient-to-b from-white to-slate-50/50">
          {/* Top Live Stat Ribbon (Heading Next to Icon) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block">Quarter ARR</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 font-mono">$482,900</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block">Deal Velocity</span>
                <span className="text-base sm:text-lg font-bold text-emerald-600 font-mono">+38.4%</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block">Active Team</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 font-mono">48 Users</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block">Automation Uptime</span>
                <span className="text-base sm:text-lg font-bold text-blue-600 font-mono">99.98%</span>
              </div>
            </div>
          </div>

          {/* Dynamic Window Workspace */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
              {/* Module 1: CRM & Pipeline Engine (Heading Next to Icon) */}
              <div className="lg:col-span-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">CRM Pipeline OS</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
                    12 Active
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-900 block text-[11px]">Apex Logistics Group</span>
                      <span className="text-[10px] text-slate-500">Proposal • $34,500</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold">85% Win Prob</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-900 block text-[11px]">Crestview Pharma</span>
                      <span className="text-[10px] text-slate-500">Contract • $68,000</span>
                    </div>
                    <span className="text-[10px] text-blue-600 font-bold">Final Review</span>
                  </div>
                </div>
              </div>

              {/* Module 2: Automated Financial Ledger (Heading Next to Icon) */}
              <div className="lg:col-span-5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Receipt className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Finance &amp; Ledger OS</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Reconciled
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-[11px]">
                    <span className="text-slate-700 font-sans">Monthly Invoiced</span>
                    <span className="font-bold text-slate-900">$124,350.00</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-[11px]">
                    <span className="text-slate-700 font-sans">Automated Expense Sync</span>
                    <span className="font-bold text-emerald-600">Cleared (0.4s)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-[11px]">
                    <span className="text-slate-700 font-sans">Gross Margin</span>
                    <span className="font-bold text-blue-600">74.2%</span>
                  </div>
                </div>
              </div>

              {/* Module 3: Operations & Approvals (Heading Next to Icon) */}
              <div className="lg:col-span-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <CheckSquare className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Operations OS</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded">
                    3 Pending
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                    <span className="text-slate-800 font-medium">PO-2026-084</span>
                    <span className="text-blue-700 font-bold">Auto-Routed</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
                    <span className="text-slate-800 font-medium">HR Leave Approval</span>
                    <span className="text-emerald-700 font-bold">Approved</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "crm" && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">CRM Opportunity Kanban</span>
                </div>
                <span className="text-xs font-mono text-blue-600 font-bold">$1.24M Weighted Pipeline</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Discovery (6)</span>
                  <p className="font-semibold text-slate-900 text-xs">Omni Logistics UK • $45k</p>
                  <span className="text-[10px] text-slate-500">Scheduled for Technical Audit</span>
                </div>
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200">
                  <span className="text-[10px] uppercase font-bold text-blue-700 block mb-1">Architecture (4)</span>
                  <p className="font-semibold text-slate-900 text-xs">Vertex Fintech • $120k</p>
                  <span className="text-[10px] text-slate-500">Custom ERPNext Scope</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block mb-1">Closed Won (8)</span>
                  <p className="font-semibold text-slate-900 text-xs">Krona Digital • $85k</p>
                  <span className="text-[10px] text-emerald-700 font-medium">Auto-created Invoice #1042</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "finance" && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Receipt className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Multi-Entity General Ledger</span>
                </div>
                <span className="text-xs font-mono text-emerald-700 font-bold">Real-time Currency Normalization</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-slate-700">
                  <span>[2026-09-14 03:40] Invoice INV-2026-0199 Paid via Stripe</span>
                  <span className="text-emerald-600 font-bold">+$12,500.00</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>[2026-09-14 02:15] Automated Tax Reserve Allocation (20%)</span>
                  <span className="text-slate-500">-$2,500.00</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>[2026-09-13 18:00] Cloud Infrastructure Hosting Amortization</span>
                  <span className="text-slate-500">-$420.00</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "hr" && (
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Workforce &amp; Attendance Hub</span>
                </div>
                <span className="text-xs font-mono text-indigo-700 font-bold">48/48 Synced</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-500 block">On Duty Today</span>
                  <span className="font-bold text-slate-900 text-sm">44 Engineers &amp; Staff</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-500 block">Approved Leaves</span>
                  <span className="font-bold text-blue-600 text-sm">4 Team Members</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-500 block">Payroll Status</span>
                  <span className="font-bold text-emerald-600 text-sm">Auto-Drafted (Sep 2026)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
