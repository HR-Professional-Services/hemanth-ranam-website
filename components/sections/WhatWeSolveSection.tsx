"use client";

import Link from "next/link";
import {
  FileSpreadsheet,
  Keyboard,
  UserX,
  Repeat,
  Unplug,
  EyeOff,
  BarChart3,
  ClockAlert,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function WhatWeSolveSection() {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Too many spreadsheets",
      desc: "Critical business data scattered across multiple unlinked Excel and Google Sheets.",
    },
    {
      icon: Keyboard,
      title: "Manual data entry",
      desc: "Team members re-typing customer info, invoices, and job notes across different apps.",
    },
    {
      icon: UserX,
      title: "Leads getting lost",
      desc: "Enquiries sitting in form inboxes without instant routing, alerts, or CRM tracking.",
    },
    {
      icon: Repeat,
      title: "Repetitive admin work",
      desc: "Hours lost every day creating manual documents, follow-ups, and status updates.",
    },
    {
      icon: Unplug,
      title: "Disconnected software",
      desc: "Paying for 5–10 SaaS tools that don't talk to each other or share customer data.",
    },
    {
      icon: EyeOff,
      title: "Poor visibility",
      desc: "Founders unable to see cash flow, order status, or pipeline health at a glance.",
    },
    {
      icon: BarChart3,
      title: "Manual reporting",
      desc: "End-of-month panic spending days compiling numbers from conflicting sources.",
    },
    {
      icon: ClockAlert,
      title: "Slow internal processes",
      desc: "Approval bottlenecks and delays waiting for emails and internal handoffs.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>The Core Problem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Your business shouldn&apos;t depend on disconnected tools.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Growing companies often add apps one by one. Over time, that creates friction, errors, and exhaustion for founders and teams.
          </p>
        </div>

        {/* 8 Common Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.title}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resolution Banner */}
        <div className="rounded-3xl bg-white border border-blue-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs shadow-blue-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 block mb-0.5">
                The Practical Fix
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                I connect the systems and automate the repetitive work.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                One integrated architecture connecting your website, CRM, orders, invoicing, and reporting so your business runs smoothly.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
