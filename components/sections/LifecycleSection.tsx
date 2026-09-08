import { SYSTEM_LIFECYCLE } from "@/data/siteData";
import {
  Compass,
  Code2,
  Rocket,
  GraduationCap,
  Headphones,
  TrendingUp,
  Zap,
  Sparkles,
} from "lucide-react";

export function LifecycleSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-blue-600" />,
    Code2: <Code2 className="w-5 h-5 text-blue-600" />,
    Rocket: <Rocket className="w-5 h-5 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600" />,
    Headphones: <Headphones className="w-5 h-5 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600" />,
    Zap: <Zap className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Support &amp; Training Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            More Than a Handover
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            We don&apos;t simply build systems and leave. We help your team understand them, use them, improve them and automate more of the work as your business grows.
          </p>
        </div>

        {/* 7-Step Lifecycle Horizontal Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {SYSTEM_LIFECYCLE.map((stage, idx) => (
            <div
              key={stage.step}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group text-center"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {iconMap[stage.icon] || <Sparkles className="w-5 h-5 text-blue-600" />}
                </div>

                <span className="text-[10px] font-mono font-bold text-blue-600 block mb-1">
                  STAGE {stage.step}
                </span>

                <h3 className="text-xs sm:text-sm font-black text-slate-900 mb-2">
                  {stage.title}
                </h3>

                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400 font-mono">
                0{idx + 1} / 07
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
