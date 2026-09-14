"use client";

import Link from "next/link";
import {
  Layers,
  Globe,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Shield,
  FileCheck,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#04060c] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#060911] rounded-[11px] flex items-center justify-center">
                  <span className="font-bold text-base text-white">HR</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight">
                  Hemanth Ranam
                </span>
                <span className="text-[11px] text-blue-400 font-mono">
                  Founder & Systems Architect
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We design, configure and support practical Business OS solutions using ERPNext, CRM, workflow automation, and modern web technology.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>United Kingdom • Global Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  +91 76758 15245 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: 01 Business OS Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>01 Business OS</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/business-os" className="hover:text-blue-400 transition-colors">
                  Business OS (Connected)
                </Link>
              </li>
              <li>
                <Link href="/crm-os" className="hover:text-blue-400 transition-colors">
                  CRM OS (Pipeline)
                </Link>
              </li>
              <li>
                <Link href="/hrms-os" className="hover:text-blue-400 transition-colors">
                  HRMS OS (Workforce)
                </Link>
              </li>
              <li>
                <Link href="/finance-os" className="hover:text-blue-400 transition-colors">
                  Finance OS (Invoicing)
                </Link>
              </li>
              <li>
                <Link href="/sales-os" className="hover:text-blue-400 transition-colors">
                  Sales OS (CPQ)
                </Link>
              </li>
              <li>
                <Link href="/project-os" className="hover:text-blue-400 transition-colors">
                  Project OS (Milestones)
                </Link>
              </li>
              <li>
                <Link href="/operations-os" className="hover:text-blue-400 transition-colors">
                  Operations OS (Workflows)
                </Link>
              </li>
              <li>
                <Link href="/helpdesk-os" className="hover:text-blue-400 transition-colors">
                  Helpdesk OS (Support)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: 02 Digital Growth */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>02 Digital Growth</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/website-growth-os" className="hover:text-emerald-400 transition-colors">
                  Website Growth OS
                </Link>
              </li>
              <li>
                <Link href="/#digital-growth" className="hover:text-emerald-400 transition-colors">
                  Website Lead Capture
                </Link>
              </li>
              <li>
                <Link href="/#digital-growth" className="hover:text-emerald-400 transition-colors">
                  CRM Webhook Sync
                </Link>
              </li>
              <li>
                <Link href="/#digital-growth" className="hover:text-emerald-400 transition-colors">
                  Booking Systems
                </Link>
              </li>
              <li>
                <Link href="/services/apps-script-automation" className="hover:text-emerald-400 transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/websites" className="hover:text-emerald-400 transition-colors">
                  Premium Websites
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 03 Trading & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
              <span>03 Trading Tech</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/trading-technology" className="hover:text-violet-400 transition-colors">
                  Trading Technology Suite
                </Link>
              </li>
              <li>
                <Link href="/services/tradingview-indicators" className="hover:text-violet-400 transition-colors">
                  TradingView Indicators
                </Link>
              </li>
              <li>
                <Link href="/services/tradingview-strategies" className="hover:text-violet-400 transition-colors">
                  TradingView Strategies
                </Link>
              </li>
              <li>
                <Link href="/services/mt5-scanner-alerts" className="hover:text-violet-400 transition-colors">
                  MT5 Scanners & Alerts
                </Link>
              </li>
              <li>
                <Link href="/services/mt5-auto-trading" className="hover:text-violet-400 transition-colors">
                  MT5 Expert Advisors
                </Link>
              </li>
              <li>
                <Link href="/services/telegram-trading-alerts" className="hover:text-violet-400 transition-colors">
                  Telegram Alert Bots
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Sub-Footer */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <span>© {currentYear} Hemanth Ranam. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Business Systems • ERPNext • CRM • Web • Trading Technology</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <Shield className="w-3 h-3 text-slate-500" />
              <span>Privacy Policy</span>
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-slate-500" />
              <span>Terms of Service</span>
            </Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-slate-500" />
              <span>Refund Policy</span>
            </Link>
            <span>•</span>
            <Link href="/blogs" className="hover:text-slate-300 transition-colors">
              Insights & Guides
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
