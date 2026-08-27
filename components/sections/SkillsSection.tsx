import { SKILL_CATEGORIES } from "@/data/siteData";
import {
  Code,
  FileCode2,
  Code2,
  Braces,
  Database,
  Layout,
  Atom,
  Cpu,
  Layers,
  Boxes,
  Network,
  Server,
  Zap,
  GitBranch,
  TrendingUp,
  Activity,
  Binary,
  Send,
  Workflow,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    FileCode2: <FileCode2 className="w-4 h-4 text-blue-600" />,
    Code2: <Code2 className="w-4 h-4 text-blue-600" />,
    Braces: <Braces className="w-4 h-4 text-blue-600" />,
    Database: <Database className="w-4 h-4 text-blue-600" />,
    Layout: <Layout className="w-4 h-4 text-blue-600" />,
    Atom: <Atom className="w-4 h-4 text-blue-600" />,
    Cpu: <Cpu className="w-4 h-4 text-blue-600" />,
    Layers: <Layers className="w-4 h-4 text-blue-600" />,
    Boxes: <Boxes className="w-4 h-4 text-blue-600" />,
    Network: <Network className="w-4 h-4 text-blue-600" />,
    Server: <Server className="w-4 h-4 text-blue-600" />,
    Zap: <Zap className="w-4 h-4 text-blue-600" />,
    GitBranch: <GitBranch className="w-4 h-4 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-blue-600" />,
    Activity: <Activity className="w-4 h-4 text-blue-600" />,
    Binary: <Binary className="w-4 h-4 text-blue-600" />,
    Send: <Send className="w-4 h-4 text-blue-600" />,
    Workflow: <Workflow className="w-4 h-4 text-blue-600" />,
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What I Work With
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A compact, battle-tested technology stack for enterprise systems, automation, and trading technology.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                  {cat.title}
                </h3>
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/70 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                          {iconMap[skill.icon] || <Code className="w-4 h-4 text-blue-600" />}
                        </div>
                        <span className="text-xs font-bold text-slate-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-slate-500 bg-white px-2 py-0.5 rounded-sm border border-slate-200/60">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
