"use client";

import Link from "next/link";
import {
  Layers,
  Workflow,
  Cpu,
  Globe,
  TrendingUp,
  Mail,
  MapPin,
  Shield,
  FileCheck,
  RefreshCw,
  MessageSquare,
  Sparkles,
  ShoppingBag,
  FolderKanban,
  AlertCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <span className="font-extrabold text-sm text-blue-400">
                    HR
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Hemanth Ranam
                </span>
                <span className="text-[11px] text-blue-400 font-medium">
                  Founder &amp; Systems Architect
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              I design, build and manage practical business systems, automation and ERP solutions that help growing businesses replace manual work and disconnected software.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>United Kingdom • Global Client Engagements</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Core Services</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="/services?cat=business-systems"
                  className="hover:text-white transition-colors"
                >
                  Business Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services?cat=automation"
                  className="hover:text-white transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services?cat=erpnext"
                  className="hover:text-white transition-colors"
                >
                  ERPNext Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/services?cat=websites"
                  className="hover:text-white transition-colors"
                >
                  Business Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/trading-technology"
                  className="hover:text-white transition-colors"
                >
                  Trading Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Store */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
              <FolderKanban className="w-3.5 h-3.5 text-blue-400" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Support Plans
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Free Tools &amp; Checklists
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-white transition-colors">
                  Digital Products &amp; Store
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Your Cart &amp; Checkout
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Hemanth Ranam
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Engagement */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Get Started</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="/contact?service=consultation"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Book $49 Consultation →
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?service=audit"
                  className="hover:text-white transition-colors"
                >
                  Book Systems Audit ($99)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  General Contact &amp; Enquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <AlertCircle className="w-3 h-3 text-slate-500" />
                  <span>Trading Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Sub-Footer */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <span>© {currentYear} Hemanth Ranam. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Business Systems • Automation • ERPNext • Websites • Trading Tech</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-slate-500" />
              <span>Privacy Policy</span>
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <FileCheck className="w-3 h-3 text-slate-500" />
              <span>Terms of Service</span>
            </Link>
            <span>•</span>
            <Link
              href="/refund"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3 text-slate-500" />
              <span>Refund Policy</span>
            </Link>
            <span>•</span>
            <Link
              href="/blogs"
              className="hover:text-slate-300 transition-colors"
            >
              Articles &amp; Guides
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
