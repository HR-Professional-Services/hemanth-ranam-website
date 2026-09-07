"use client";

import { TRUST_PILLARS, SITE_CONFIG } from "@/data/siteData";
import {
  ShieldCheck,
  UserCheck,
  GraduationCap,
  Clock,
  Lock,
  FileText,
  Mail,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export function TrustSection() {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-5 h-5 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    Clock: <Clock className="w-5 h-5 text-blue-600" />,
    Lock: <Lock className="w-5 h-5 text-blue-600" />,
    FileText: <FileText className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section
      id="trust"
      className="py-12 md:py-20 bg-white border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Trust & Accountability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Built on Real Accountability.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Clear standards, transparent communication, and verified background. No exaggerated statistics or fabricated marketing claims.
          </p>
        </div>

        {/* 6 Trust Commitment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs">
                    {iconMap[pillar.icon] || <ShieldCheck className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Verified Business Commitment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Business Details Block */}
        <div className="mt-10 p-5 sm:p-7 rounded-2xl bg-slate-900 text-white shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                Verified Business Identity
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                HR Professional Services & ScaleNova Ecosystem
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl font-normal">
                Directly overseen by Hemanth Ranam. Based in the United Kingdom with operational delivery across UK, India, and global clients. Every project is executed with transparent contracts and verified direct communications.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
