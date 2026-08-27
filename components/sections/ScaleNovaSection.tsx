import { SITE_CONFIG } from "@/data/siteData";
import {
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  Zap,
  CheckCircle2,
  Building,
} from "lucide-react";

export function ScaleNovaSection() {
  const capabilities = [
    { title: "Sales & Invoicing", desc: "Automated quotes, deals, recurring subscriptions and payment collection." },
    { title: "Customer CRM", desc: "Complete customer lifecycle telemetry, communications and support." },
    { title: "Operations & Tasks", desc: "Resource allocation, project milestones, and SOP management." },
    { title: "People & HR", desc: "Multi-tenant role permissions, employee onboarding and attendance." },
    { title: "Data & BI Analytics", desc: "Consolidated real-time operational reports and executive KPI visibility." },
    { title: "AI Automation Engine", desc: "Intelligent background workers handling cross-module synchronization." },
  ];

  return (
    <section id="scalenova" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Grid in container */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Vision & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Founder Spotlight</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">ScaleNova</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                ScaleNova is a unified business operating system initiative created to eliminate fragmented corporate software by connecting sales, operations, finance, people, and automated data reporting into a single intuitive control plane.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.scalenovaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="scalenova-visit-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md group"
                >
                  <span>Explore ScaleNova</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
                >
                  Discuss Enterprise OS
                </a>
              </div>
            </div>

            {/* Right Column: Connected Capabilities Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-xs hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Status Note */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Architecture: Multi-Tenant Cloud OS</span>
                <span className="font-mono text-blue-400">scalenovasys.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
