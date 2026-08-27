import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/data/siteData";
import { Logo } from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { Mail, Shield, FileCheck, RefreshCw } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-slate-500 text-xs border-t border-slate-200/80 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Logo & Positioning */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <Link href="/" className="inline-block">
              <Logo size="sm" />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <p className="text-[11px] text-slate-500 font-medium max-w-sm">
              {SITE_CONFIG.positioning}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social & Contact Icons */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-slate-50 border border-slate-200/60 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Send direct email"
              className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-slate-50 border border-slate-200/60 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Legal & Compliance Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© 2026 Hemanth Ranam. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Shield className="w-3 h-3 text-slate-400" />
              <span>Privacy Policy</span>
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-slate-400" />
              <span>Terms & Conditions</span>
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/refund" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-slate-400" />
              <span>Refund Policy</span>
            </Link>
          </div>

          <p className="text-center sm:text-right text-[10px] text-slate-400">
            Technology & automation engineering. No investment advice or profit guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
