"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Mail,
  UserCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function WhyHemanthSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Founder Portrait & Badges */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl mx-auto relative bg-slate-100">
                  <Image
                    src="/images/hemanth-ranam-profile.jpg"
                    alt="Hemanth Ranam — Founder & Systems Architect"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 224px, 256px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2.5 rounded-2xl shadow-lg border-2 border-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-xl font-black text-slate-900">
                  Hemanth Ranam
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
                  Founder &amp; Systems Architect
                </p>
                <p className="text-xs text-slate-500">
                  United Kingdom • ScaleNova Business OS
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right: Core Positioning & Experience */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Founder-Led Stewardship</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Built directly by Hemanth Ranam
                </h2>
                <p className="mt-3 text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  I work directly with business owners to design, build and improve the systems behind their operations.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                When you work with me, there are no layers of junior account executives or outsourced contractors. You work directly with someone who understands both executive business management and deep software architecture.
              </p>

              {/* Verified Background Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>MBA &amp; CMI Level 7</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Master of Business Administration (Univ of South Wales) + Chartered Management Institute Executive Diploma.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Systems &amp; Trading Architect</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Nearly a decade configuring enterprise ERP, workflow automation, and quantitative financial algorithms.
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  <span>Read Full About Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact?service=consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors"
                >
                  <span>Book $49 Discovery Session</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
