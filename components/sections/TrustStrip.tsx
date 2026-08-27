import { TRUST_NUMBERS } from "@/data/siteData";

export function TrustStrip() {
  return (
    <section className="py-6 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
          {TRUST_NUMBERS.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
            >
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {item.value}
              </p>
              <p className="text-xs font-semibold text-slate-700 mt-1">
                {item.label}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
