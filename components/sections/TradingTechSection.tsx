import {
  TrendingUp,
  Binary,
  Activity,
  Bot,
  Send,
  Zap,
  Sliders,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export function TradingTechSection() {
  const pipeline = [
    { title: "Strategy", icon: Sliders },
    { title: "Indicator", icon: Binary },
    { title: "Alert", icon: Zap },
    { title: "Telegram", icon: Send },
    { title: "MT5 EA", icon: Activity },
    { title: "Automation", icon: Bot },
  ];

  const tags = [
    "Pine Script v5",
    "TradingView Webhooks",
    "MT5 Custom Indicators",
    "MQL5 Expert Advisors",
    "Telegram Channel Alerts",
    "Multi-Asset Scanners",
  ];

  return (
    <section id="trading-tech" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3 h-3" />
            <span>Trading Tech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Trading Technology
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Turn defined trading rules into indicators, alerts and automation.
          </p>
        </div>

        {/* Compact Horizontal Pipeline */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
            {pipeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center justify-center relative"
                >
                  {index < pipeline.length - 1 && (
                    <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-blue-400 font-bold text-[10px] z-10 pointer-events-none">
                      →
                    </span>
                  )}
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 mb-1.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-slate-900">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small Service Tags Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0"
          >
            <span>Discuss Trading Setup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tiny Compliance Note */}
        <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
          <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            <strong>Technology development only.</strong> No guaranteed trading results or investment advice.
          </span>
        </div>
      </div>
    </section>
  );
}
