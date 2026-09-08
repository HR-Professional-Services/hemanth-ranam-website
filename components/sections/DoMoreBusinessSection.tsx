"use client";

import { DO_MORE_BUSINESS_NODES } from "@/data/siteData";
import {
  Globe,
  Mail,
  Layers,
  Workflow,
  BarChart3,
  Users,
  Activity,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function DoMoreBusinessSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-blue-400" />,
    Mail: <Mail className="w-5 h-5 text-blue-400" />,
    Layers: <Layers className="w-5 h-5 text-blue-400" />,
    Workflow: <Workflow className="w-5 h-5 text-blue-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-blue-400" />,
    Users: <Users className="w-5 h-5 text-blue-400" />,
    Activity: <Activity className="w-5 h-5 text-blue-400" />,
    Zap: <Zap className="w-5 h-5 text-blue-400" />,
  };

  const benefits = [
    "Less manual administration & spreadsheet copying",
    "Faster lead follow-ups within minutes",
    "Real-time visibility over pipeline & finances",
    "Standardized digital SOPs across teams",
    "Seamlessly connected cloud applications",
    "Intelligent background automation running 24/7",
  ];

  return (
    <section className="py-14 md:py-24 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Systems Multiplier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Do More Business. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">
              Let Your Systems Do More Work.
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop losing productive hours to fragmented spreadsheets and delayed follow-ups. We engineer connected digital pipelines that operate continuously in the background.
          </p>
        </div>

        {/* 8 Connected Nodes Animated Workflow Display */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xs shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              Connected Operational Pipeline
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 relative">
            {DO_MORE_BUSINESS_NODES.map((node, index) => (
              <div
                key={node.name}
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  {iconComponents[node.icon] || <Zap className="w-5 h-5 text-blue-400" />}
                </div>

                <span className="text-xs font-bold text-white mb-0.5 group-hover:text-blue-300 transition-colors">
                  {node.name}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight">
                  {node.role}
                </span>

                <div className="mt-2 text-[9px] font-mono font-bold text-slate-500">
                  Step {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Why Smarter Systems Win:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 text-white text-center flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block mb-1">
                Small Price. Big Work.
              </span>
              <h4 className="text-xl font-black mb-2">Ready to Upgrade?</h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-6">
                Tell us your current operational bottlenecks. We will map an actionable systems architecture.
              </p>
            </div>

            <a
              href="#contact"
              className="w-full py-3 px-6 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Build My System</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
