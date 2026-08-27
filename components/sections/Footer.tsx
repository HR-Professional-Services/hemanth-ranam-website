import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/data/siteData";
import { Logo } from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { Mail, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#" className="inline-block">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              {SITE_CONFIG.shortPositioning}
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Designing, engineering and optimizing connected business systems, enterprise SaaS/ERP, automation engines, and custom trading technology.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Send email"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Initiatives & Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Initiatives & Inquiries
            </p>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-xs font-semibold text-white">ScaleNova Pvt Ltd</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Business Operating System & Multi-tenant Cloud Platform
                </p>
                <a
                  href={SITE_CONFIG.scalenovaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-semibold mt-2"
                >
                  <span>scalenovasys.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div>
                <p className="text-[11px] text-slate-400">Direct Inquiries:</p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Technology Legal Disclaimer */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p className="flex items-center gap-1.5 font-semibold text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Trading Technology & Advisory Disclaimer:</span>
          </p>
          <p>
            All trading technology, custom Pine Script v5 indicators, and MetaTrader 5 Expert Advisors (EAs) developed by Hemanth Ranam are software engineering and algorithmic automation services built strictly to client-defined specifications. These tools and workflows do not constitute financial advice, investment management, or guarantees of profitability. Users are solely responsible for their own risk management and financial decisions.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>© 2026 Hemanth Ranam. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>United Kingdom</span>
            <span>•</span>
            <span>2X Founder</span>
            <span>•</span>
            <span>MBA • CMI Level 7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
