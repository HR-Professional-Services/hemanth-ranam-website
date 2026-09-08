"use client";

import Link from "next/link";
import {
  Workflow,
  Sparkles,
  Layers,
  Users,
  Sliders,
  BarChart3,
  Mail,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
} from "lucide-react";

interface CompactServiceCard {
  name: string;
  shortDesc: string;
  slug: string;
  iconName: string;
  badge: string;
}

const PRIMARY_SERVICES: CompactServiceCard[] = [
  {
    name: "Business Systems Consulting",
    shortDesc: "Review and re-architect fragmented operations into a unified software ecosystem.",
    slug: "business-systems-consulting",
    iconName: "Workflow",
    badge: "Architecture",
  },
  {
    name: "Process Optimisation",
    shortDesc: "Eliminate operational bottlenecks, manual friction, and multi-day handoff delays.",
    slug: "process-optimisation",
    iconName: "Sparkles",
    badge: "Operations",
  },
  {
    name: "CRM / ERP Implementation",
    shortDesc: "Customized Frappe & ERPNext deployment with zero recurring seat licensing fees.",
    slug: "crm-erp-implementation",
    iconName: "Layers",
    badge: "Enterprise",
  },
  {
    name: "HR Management Systems",
    shortDesc: "Centralized employee records, attendance, leave approvals, and compliant payroll.",
    slug: "hr-management-systems",
    iconName: "Users",
    badge: "People",
  },
  {
    name: "Business Operations & SOPs",
    shortDesc: "Turn static PDF manuals into interactive digital checklists and compliance tracking.",
    slug: "business-operations-sop",
    iconName: "Sliders",
    badge: "Standards",
  },
  {
    name: "Data & Business Analytics",
    shortDesc: "Real-time executive KPI dashboards with clear financial and revenue visibility.",
    slug: "data-business-analytics",
    iconName: "BarChart3",
    badge: "Analytics",
  },
  {
    name: "Website + Lead Capture + Basic CRM",
    shortDesc: "Fast business website with honeypot lead forms feeding directly into Google Sheets.",
    slug: "website-lead-capture-crm",
    iconName: "Mail",
    badge: "Growth",
  },
  {
    name: "Trading Technology & Automation",
    shortDesc: "Pine Script v5 indicators, backtest strategies, and sub-second MT5 webhook bridges.",
    slug: "trading-technology",
    iconName: "TrendingUp",
    badge: "Algorithmic",
  },
];

export function ServicesSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-5 h-5 text-blue-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-blue-600" />,
    Layers: <Layers className="w-5 h-5 text-blue-600" />,
    Users: <Users className="w-5 h-5 text-blue-600" />,
    Sliders: <Sliders className="w-5 h-5 text-blue-600" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-blue-600" />,
    Mail: <Mail className="w-5 h-5 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    Zap: <Zap className="w-5 h-5 text-blue-600" />,
    Code2: <Code2 className="w-5 h-5 text-indigo-600" />,
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5" />
              <span>Core Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Actionable Business Systems &amp; Engineering
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Compact, high-impact services designed for speed, affordability, and practical business execution.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500 hidden sm:inline">
              Every service has a dedicated technical page:
            </span>
            <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
              No Popups • Full Specs
            </span>
          </div>
        </div>

        {/* Compact Horizontal Cards Grid (Desktop: Icon + Heading on left, short desc, Learn More on right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {PRIMARY_SERVICES.map((service) => (
            <div
              key={service.slug}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Horizontal Header: [ICON] next to [SERVICE HEADING] */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {iconComponents[service.iconName] || <Workflow className="w-5 h-5 text-blue-600" />}
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {service.name}
                    </h3>
                  </div>

                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 shrink-0">
                    {service.badge}
                  </span>
                </div>

                {/* Extremely short description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed pl-12 mb-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Action: Learn More linking to dedicated subpage */}
              <div className="pt-2.5 border-t border-slate-100/80 flex items-center justify-between pl-12">
                <span className="text-[11px] font-mono text-slate-400">
                  /services/{service.slug}
                </span>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Need a custom scope not listed above? We architect tailored integrations.</span>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
          >
            <span>Request Custom Architecture</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
