import { TRUST_METRICS } from "@/data/siteData";
import {
  Building2,
  Layers,
  TrendingUp,
  GraduationCap,
  Award,
  Cpu,
} from "lucide-react";

export function TrustStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-blue-600" />,
    Layers: <Layers className="w-5 h-5 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600" />,
    Award: <Award className="w-5 h-5 text-blue-600" />,
    Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section className="relative -mt-4 pb-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-5 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {TRUST_METRICS.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col items-start ${
                  index > 0 ? "pt-3 sm:pt-0 sm:pl-4 lg:pl-5" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-700 leading-tight">
                  {item.label}
                </p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
