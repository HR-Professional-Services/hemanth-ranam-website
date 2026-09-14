"use client";

import { AlertTriangle, CheckCircle2, Layers, Unplug, ArrowRight } from "lucide-react";

export function BusinessOsIntroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            01 Business Architecture
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your business should not run across{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              ten disconnected tools.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Most companies operate with a fragmented patchwork of subscriptions: separate tools for CRM, invoicing, project tracking, HR, support tickets, and spreadsheets. When your tools don&apos;t communicate, your team wastes hours copying data, leads slip through the cracks, and management has zero real-time visibility.
          </p>
        </div>

        {/* Contrast Comparison Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: The Disconnected Reality */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/10 border border-rose-500/20 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400 border border-rose-500/30">
                <Unplug className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Fragmented Tool Trap</h3>
                <p className="text-xs text-rose-300/80">Disjointed apps, manual re-entry, and rising subscription fees</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">8+ separate SaaS logins:</strong> Passwords forgotten, users misconfigured, and ballooning per-seat costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">Manual data copy-pasting:</strong> Re-typing customer details from emails into spreadsheets and accounting software.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">Zero unified visibility:</strong> No single dashboard showing true pipeline velocity, actual project margins, or cash flow.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">Fragile Zapier glue:</strong> Brittle third-party automations that break silently when API schemas change.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-rose-500/15 text-xs text-rose-400 font-mono flex items-center justify-between">
              <span>Average tool waste: 12-18 hrs/week</span>
              <span>Cost: $500 - $2,500/mo in SaaS fees</span>
            </div>
          </div>

          {/* Right: The Unified Business OS */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-950/20 border border-blue-500/30 relative overflow-hidden shadow-xl shadow-blue-500/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Connected Business OS</h3>
                <p className="text-xs text-blue-300">One coherent database, custom workflows, and total data ownership</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">One unified platform:</strong> CRM, Sales, HR, Finance, Projects, and Helpdesk sharing the exact same data model.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">Zero per-seat licensing penalties:</strong> Built on open-source Frappe / ERPNext foundations with complete data sovereignty.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">Automated lead-to-cash workflow:</strong> Website leads flow directly into CRM, auto-generate sales orders, and clear invoices.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-100">Managed technical stewardship:</strong> Hemanth handles hosting, backups, updates, and direct support so your team focuses on growth.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-blue-500/20 text-xs text-blue-300 font-mono flex items-center justify-between">
              <span>Implementation: Milestone Scoped</span>
              <span>Ongoing: Flat Monthly Managed OS</span>
            </div>
          </div>
        </div>

        {/* Central Explanatory Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center max-w-4xl mx-auto">
          <p className="text-base text-slate-200 font-medium leading-relaxed">
            &ldquo;Choose the business systems your company needs. We configure the appropriate Frappe / ERPNext applications, connect your existing tools, train your team and provide ongoing technical support.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span>Enterprise ERPNext Foundations</span>
            <span>•</span>
            <span>Zero Lock-in</span>
            <span>•</span>
            <span>Tailored to Your Exact SOPs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
