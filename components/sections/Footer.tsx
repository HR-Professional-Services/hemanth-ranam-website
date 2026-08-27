import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/data/siteData";
import { Logo } from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-slate-500 text-xs border-t border-slate-200/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Logo & Small Positioning Line */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <Link href="#" className="inline-block">
              <Logo size="sm" />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <p className="text-xs text-slate-500 font-medium">
              {SITE_CONFIG.mainPositioning}
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-50 border border-slate-200/60 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-50 border border-slate-200/60 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 Hemanth Ranam. All rights reserved.</p>
          <p>Technology & algorithmic automation development services only. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
