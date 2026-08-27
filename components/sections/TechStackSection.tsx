import { TECH_ICONS } from "@/data/siteData";
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
  const iconMap: Record<string, React.ReactNode> = {
    FileCode: <FileCode className="w-4 h-4 text-blue-600" />,
    Code2: <Code2 className="w-4 h-4 text-blue-600" />,
    Braces: <Braces className="w-4 h-4 text-blue-600" />,
    Atom: <Atom className="w-4 h-4 text-blue-600" />,
    Cpu: <Cpu className="w-4 h-4 text-blue-600" />,
    Layers: <Layers className="w-4 h-4 text-blue-600" />,
    Boxes: <Boxes className="w-4 h-4 text-blue-600" />,
    Database: <Database className="w-4 h-4 text-blue-600" />,
    GitBranch: <GitBranch className="w-4 h-4 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-blue-600" />,
    Activity: <Activity className="w-4 h-4 text-blue-600" />,
    Send: <Send className="w-4 h-4 text-blue-600" />,
    Sparkles: <Sparkles className="w-4 h-4 text-blue-600" />,
  };

  return (
    <section id="tech-stack" className="py-12 md:py-16 bg-slate-50/50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-3 h-3" />
            <span>Technologies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Production Tech Stack
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Selected for type safety, performance, and long-term enterprise maintainability.
          </p>
        </div>

        {/* Compact Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {TECH_ICONS.map((tech) => (
            <div
              key={tech.name}
              className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2.5 hover:border-blue-300 transition-colors"
            >
              <div className="p-1.5 rounded-lg bg-blue-50/80 text-blue-600 shrink-0">
                {iconMap[tech.icon] || <Code2 className="w-4 h-4 text-blue-600" />}
              </div>
              <span className="text-xs font-bold text-slate-900 truncate">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
