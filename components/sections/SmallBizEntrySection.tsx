import Link from "next/link";
import { SMALL_BIZ_FLOW } from "@/data/siteData";
import {
  UserCheck,
  Globe,
  FileText,
  Database,
  Send,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function SmallBizEntrySection() {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-5 h-5 text-blue-600" />,
    Globe: <Globe className="w-5 h-5 text-blue-600" />,
    FileText: <FileText className="w-5 h-5 text-blue-600" />,
    Database: <Database className="w-5 h-5 text-emerald-600" />,
    Send: <Send className="w-5 h-5 text-blue-600" />,
    Clock: <Clock className="w-5 h-5 text-blue-600" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
  };

  return (
    <section className="py-14 md:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Small Business Growth System</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Website + Lead Capture + Basic CRM
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            A practical, high-converting entry-level system for businesses that need reliable lead generation without complex, high-priced enterprise software.
          </p>
        </div>

        {/* 7-Step Visual Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4 mb-12">
          {SMALL_BIZ_FLOW.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between group text-center"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                  {iconMap[step.icon] || <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                </div>

                <span className="text-[10px] font-mono font-bold text-blue-600 block mb-0.5">
                  STEP 0{step.step}
                </span>

                <h3 className="text-xs sm:text-sm font-black text-slate-900 mb-1">
                  {step.title}
                </h3>

                <p className="text-[11px] text-slate-500 font-normal leading-snug">
                  {step.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                {idx < 6 ? "Connected →" : "Target Met"}
              </div>
            </div>
          ))}
        </div>

        {/* Key Inclusions Bento Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/50 border border-blue-200/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
              Ready-to-Deploy Package
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Zero Subscription Fees • Complete Code Ownership
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Includes mobile-optimized website, serverless Google Apps Script webhook, canonical 13-column CRM Google Sheet, and dual HTML notifications.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/services/website-lead-capture-crm"
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 text-center transition-colors"
            >
              View Service Specs
            </Link>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 text-center transition-colors shadow-xs"
            >
              Get This System
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
