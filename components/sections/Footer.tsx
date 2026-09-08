import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteData";
import { Logo } from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { Mail, Shield, FileCheck, RefreshCw, MapPin, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <Logo size="sm" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              Practical HR systems, recruitment infrastructure, workflow automation, and custom software architecture built for founders and growing businesses.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Send direct email"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 rounded-xl text-emerald-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#categories" className="hover:text-blue-400 transition-colors">
                  Commercial Categories
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-blue-400 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-blue-400 transition-colors">
                  Project Rates (USD)
                </Link>
              </li>
              <li>
                <Link href="/#monthly-support" className="hover:text-blue-400 transition-colors">
                  Monthly Support Plans
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Service Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Dedicated Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/business-systems-consulting" className="hover:text-blue-400 transition-colors">
                  Business Systems Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/frappe-erpnext" className="hover:text-blue-400 transition-colors">
                  Frappe / ERPNext Systems
                </Link>
              </li>
              <li>
                <Link href="/services/website-lead-capture-crm" className="hover:text-blue-400 transition-colors">
                  Website + Lead Capture + CRM
                </Link>
              </li>
              <li>
                <Link href="/services/custom-business-systems" className="hover:text-blue-400 transition-colors">
                  Custom Business Systems
                </Link>
              </li>
              <li>
                <Link href="/services/tradingview-indicators" className="hover:text-blue-400 transition-colors">
                  TradingView Indicators &amp; Strategies
                </Link>
              </li>
              <li>
                <Link href="/services/mt5-scanner-alerts" className="hover:text-blue-400 transition-colors">
                  MT5 Scanner &amp; Alerts System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors truncate">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  {SITE_CONFIG.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <span>© 2026 HR Professional Services. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-1">
              <Shield className="w-3 h-3 text-slate-400" />
              <span>Privacy Policy</span>
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-slate-400" />
              <span>Terms of Service</span>
            </Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-white transition-colors flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-slate-400" />
              <span>Refund Policy</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
