"use client";

import { useState } from "react";
import {
  Globe,
  UserPlus,
  Users,
  TrendingUp,
  FileSpreadsheet,
  Receipt,
  Workflow,
  DollarSign,
  BarChart3,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface FlowStep {
  id: string;
  name: string;
  shortDesc: string;
  icon: React.ElementType;
  details: string;
  automatedHandoff: string;
}

export function InteractiveBusinessOsDiagram() {
  const steps: FlowStep[] = [
    {
      id: "website",
      name: "Website",
      shortDesc: "High-speed front-facing platform",
      icon: Globe,
      details: "Visitors discover your services and fill in an intake or consultation enquiry form.",
      automatedHandoff: "Zero-latency edge webhook trigger",
    },
    {
      id: "lead",
      name: "Lead",
      shortDesc: "Instant capture & sanitization",
      icon: UserPlus,
      details: "Form submissions are instantly validated, assigned a Lead ID, and logged without manual copy-paste.",
      automatedHandoff: "Instant routing to sales pipeline",
    },
    {
      id: "crm",
      name: "CRM",
      shortDesc: "Central customer record",
      icon: Users,
      details: "Customer profiles, interaction history, notes, and requirements stored in one place.",
      automatedHandoff: "Automated salesperson alert & task creation",
    },
    {
      id: "sales",
      name: "Sales",
      shortDesc: "Opportunity & stage tracking",
      icon: TrendingUp,
      details: "Visual pipeline showing current deals, deal size, and probability without messy spreadsheets.",
      automatedHandoff: "1-click quotation generation",
    },
    {
      id: "quotation",
      name: "Quotation",
      shortDesc: "Automated proposal generation",
      icon: FileSpreadsheet,
      details: "Accurate itemized proposals generated from price lists and sent directly for customer sign-off.",
      automatedHandoff: "Customer approval triggers sales order",
    },
    {
      id: "invoice",
      name: "Invoice",
      shortDesc: "Payment & receipt processing",
      icon: Receipt,
      details: "Invoices generated automatically upon order approval with direct Stripe / bank payment links.",
      automatedHandoff: "Payment webhook confirms order to ops",
    },
    {
      id: "operations",
      name: "Operations",
      shortDesc: "Project execution & delivery",
      icon: Workflow,
      details: "Tasks, milestones, and folder workspaces provisioned for the fulfillment team automatically.",
      automatedHandoff: "Milestone completion updates accounting",
    },
    {
      id: "finance",
      name: "Finance",
      shortDesc: "Ledger, cash flow & tax",
      icon: DollarSign,
      details: "Real-time accounts receivable, expense tracking, and bank reconciliation in one central ledger.",
      automatedHandoff: "Live data feed to executive dashboard",
    },
    {
      id: "management",
      name: "Management",
      shortDesc: "Live visibility & insight",
      icon: BarChart3,
      details: "Founders and leadership view company performance, profit margins, and capacity at a glance.",
      automatedHandoff: "End-of-month reporting ready instantly",
    },
  ];

  const [activeStepId, setActiveStepId] = useState<string>("website");
  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The Business OS Concept</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How a Connected System Actually Works
          </h2>
          <p className="mt-3 text-base sm:text-lg font-bold text-blue-600">
            One connected system instead of multiple disconnected tools.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Click through any stage below to see how customer data travels seamlessly from first visit to management reporting without manual re-typing.
          </p>
        </div>

        {/* Desktop & Mobile Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 9-step Connected Sequence */}
          <div className="lg:col-span-7 space-y-2">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = step.id === activeStepId;
              const isLast = idx === steps.length - 1;

              return (
                <div key={step.id}>
                  <button
                    type="button"
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-blue-50/80 border-blue-400 shadow-xs"
                        : "bg-slate-50/70 border-slate-200 hover:bg-slate-100/70 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white"
                            : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-slate-400">
                            0{idx + 1}
                          </span>
                          <span className="font-bold text-sm text-slate-900">
                            {step.name}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-normal block">
                          {step.shortDesc}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-blue-600 text-white"
                            : "text-slate-400"
                        }`}
                      >
                        {isSelected ? "Active" : "Inspect →"}
                      </span>
                    </div>
                  </button>

                  {!isLast && (
                    <div className="flex justify-center py-1 text-slate-300">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Stage Inspector Card (Sticky) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl lg:sticky lg:top-28">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block">
                  Stage Inspection
                </span>
                <h3 className="text-xl font-black text-white">
                  {activeStep.name}
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-xs sm:text-sm">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What Happens Here
                </span>
                <p className="text-slate-200 leading-relaxed font-normal">
                  {activeStep.details}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Automated Next Step
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {activeStep.automatedHandoff}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-slate-400 text-xs leading-relaxed">
                <p>
                  No spreadsheets to update. No manual reminders. Every department sees exactly what they need in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
