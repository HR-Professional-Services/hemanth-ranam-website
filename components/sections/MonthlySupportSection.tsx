import { MONTHLY_SUPPORT_PLANS } from "@/data/siteData";
import { Headphones, CheckCircle2 } from "lucide-react";

export function MonthlySupportSection() {
  return (
    <section id="monthly-support" className="py-12 md:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Ongoing Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Your System Should Not Be Abandoned After Launch
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            We don&apos;t just deliver software and disappear. We keep your systems secure, monitor webhooks, train your team, and automate more as your business grows.
          </p>
        </div>

        {/* Monthly Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {MONTHLY_SUPPORT_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 rounded-3xl transition-all flex flex-col justify-between relative ${
                plan.recommended
                  ? "bg-slate-900 text-white border-2 border-blue-500 shadow-xl"
                  : "bg-white text-slate-900 border border-slate-200 shadow-2xs hover:border-blue-300"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      plan.recommended
                        ? "bg-blue-950/80 text-blue-300 border-blue-800"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  <span
                    className={`text-xs font-mono ${
                      plan.recommended ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    No Long-Term Lock-In
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs font-bold font-mono ${
                      plan.recommended ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    USD {plan.frequency}
                  </span>
                  {plan.wasPrice && (
                    <span
                      className={`text-xs line-through ml-1 ${
                        plan.recommended ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      Was {plan.wasPrice}
                    </span>
                  )}
                </div>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    plan.recommended ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2.5 mb-8 pt-4 border-t border-slate-100/10">
                  {plan.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.recommended ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <span className={plan.recommended ? "text-slate-200" : "text-slate-700"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100/10">
                <a
                  href="#contact"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs text-center block transition-colors ${
                    plan.recommended
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  Select {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
