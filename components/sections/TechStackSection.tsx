import {
  Code2,
  FileCode,
  Braces,
  Atom,
  Cpu,
  Layers,
  Boxes,
  Database,
  GitBranch,
  TrendingUp,
  Activity,
  Send,
  Sparkles,
} from "lucide-react";

export function TechStackSection() {
  const techWall = [
    { name: "Python", category: "Language", icon: FileCode },
    { name: "TypeScript", category: "Language", icon: Code2 },
    { name: "JavaScript", category: "Language", icon: Braces },
    { name: "React", category: "Frontend", icon: Atom },
    { name: "Next.js", category: "Frontend", icon: Cpu },
    { name: "Frappe", category: "ERP Framework", icon: Layers },
    { name: "ERPNext", category: "Business OS", icon: Boxes },
    { name: "SQL & Databases", category: "Backend", icon: Database },
    { name: "Git & GitHub", category: "DevOps", icon: GitBranch },
    { name: "TradingView", category: "Trading", icon: TrendingUp },
    { name: "Pine Script v5", category: "Trading", icon: Code2 },
    { name: "MetaTrader 5", category: "Trading", icon: Activity },
    { name: "MQL5", category: "Trading", icon: FileCode },
    { name: "Telegram Bot API", category: "Automation", icon: Send },
    { name: "AI Automation", category: "AI", icon: Sparkles },
  ];

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Wall</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Production Tech Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Selected for resilience, type-safety, and real-world performance.
          </p>
        </div>

        {/* Clean Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {techWall.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-150 flex items-center gap-3 group"
              >
                <div className="p-2 rounded-xl bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {tech.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
