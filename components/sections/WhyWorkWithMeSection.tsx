import { WHY_WORK_WITH_ME } from "@/data/siteData";
import { Briefcase, Code2, Target, ShieldCheck, CheckCircle2 } from "lucide-react";

export function WhyWorkWithMeSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 text-blue-600" />,
    Code2: <Code2 className="w-5 h-5 text-blue-600" />,
    Target: <Target className="w-5 h-5 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Why Work With Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Direct Partnership. Measurable Impact.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A rare fusion of commercial strategy and software craftsmanship.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_WORK_WITH_ME.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-2xl bg-blue-50/80 text-blue-600 w-fit mb-4 border border-blue-100/70">
                  {iconComponents[item.icon]}
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
