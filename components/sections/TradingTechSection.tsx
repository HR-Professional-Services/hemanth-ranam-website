import {
  TrendingUp,
  Binary,
  Target,
  Activity,
  Bot,
  Send,
  Zap,
  Sliders,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export function TradingTechSection() {
  const steps = [
    { title: "TradingView", sub: "Chart Platform", icon: TrendingUp },
    { title: "Pine Script", sub: "Indicator Logic", icon: Binary },
    { title: "MT5", sub: "Execution Platform", icon: Activity },
    { title: "Indicators", sub: "Visual Setups", icon: Sliders },
    { title: "Alerts", sub: "Webhook Events", icon: Zap },
    { title: "Telegram", sub: "Channel Dispatch", icon: Send },
    { title: "Automation", sub: "MQL5 EA Robots", icon: Bot },
  ];

  const capabilities = [
    { name: "Custom Indicators", desc: "Multi-timeframe Pine Script v5 & MT5 indicators.", icon: Sliders },
    { name: "Strategy Implementation", desc: "Translating price action rules into deterministic logic.", icon: Target },
    { name: "MT5 Expert Advisors", desc: "Automated execution robots with strict risk parameters.", icon: Bot },
    { name: "Telegram Signal Alerts", desc: "Low-latency webhook delivery directly to Telegram.", icon: Send },
    { name: "Trading Automation", desc: "Seamless bridge between chart signals and MT5.", icon: Zap },
    { name: "Market Scanners", desc: "Automated multi-asset scanners for specific structure setups.", icon: Activity },
  ];

  return (
    <section id="trading-tech" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Markets & Algo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Trading Technology
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Turn trading rules into technology. Custom indicators, alert routers, and automated execution bots.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            The Algorithmic Workflow Pipeline
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col items-center justify-between"
                >
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{item.title}</p>
                    <p className="text-[10px] text-slate-400">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.name}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5"
              >
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {cap.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Short Legal Disclaimer */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              <strong>Technology development only.</strong> No guaranteed trading results or investment advice provided.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>Discuss Trading Project</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
