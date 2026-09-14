"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Layers,
  Globe,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Sparkles,
  Phone,
  Workflow,
  CheckCircle2,
  MessageSquare,
  Boxes,
  Cpu,
  FolderKanban,
  LifeBuoy,
  CreditCard,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessOsOpen, setBusinessOsOpen] = useState(false);
  const flyoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close flyout if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target as Node)) {
        setBusinessOsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm shadow-blue-500/5"
            : "bg-white/90 backdrop-blur-xl border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand & Identity (Left) */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 p-[1.5px] shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    HR
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                  Hemanth Ranam
                </span>
                <span className="text-[11px] text-slate-500 font-normal leading-tight mt-1">
                  Founder &amp; Systems Architect
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Center) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {/* Business OS with Flyout Menu */}
              <div
                ref={flyoutRef}
                className="relative"
                onMouseEnter={() => setBusinessOsOpen(true)}
                onMouseLeave={() => setBusinessOsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    businessOsOpen
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/70"
                  }`}
                  onClick={() => setBusinessOsOpen(!businessOsOpen)}
                  aria-expanded={businessOsOpen}
                >
                  <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Business OS</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 shrink-0 ${
                      businessOsOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Flyout Menu Panel (Pure White Glass, All 10 OS Products Listed) */}
                {businessOsOpen && (
                  <div className="absolute top-full left-0 w-[580px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-400/20 backdrop-blur-2xl">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                            01 Division
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            Connected Business Operating Systems
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          Frappe &amp; ERPNext Architecture
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href="/business-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Business OS (All-in-One)</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Complete connected environment for all teams.
                          </p>
                        </Link>

                        <Link
                          href="/crm-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>CRM OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Lead capture, deal stages &amp; pipeline tracking.
                          </p>
                        </Link>

                        <Link
                          href="/finance-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <CreditCard className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Finance OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Invoicing, expense tracking &amp; financial ledger.
                          </p>
                        </Link>

                        <Link
                          href="/hrms-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>HRMS OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Staff directory, attendance &amp; leave management.
                          </p>
                        </Link>

                        <Link
                          href="/sales-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <TrendingUp className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Sales OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Customer quotations, orders &amp; forecasting.
                          </p>
                        </Link>

                        <Link
                          href="/operations-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Operations OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Standard operating procedures &amp; approval workflows.
                          </p>
                        </Link>

                        <Link
                          href="/inventory-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <Boxes className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Inventory OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Stock ledger, warehouse balances &amp; purchasing.
                          </p>
                        </Link>

                        <Link
                          href="/project-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <FolderKanban className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Project OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Milestone delivery, tasks &amp; time tracking.
                          </p>
                        </Link>

                        <Link
                          href="/helpdesk-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <LifeBuoy className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Helpdesk OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Client support tickets &amp; issue resolution.
                          </p>
                        </Link>

                        <Link
                          href="/custom-os"
                          onClick={() => setBusinessOsOpen(false)}
                          className="p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs group-hover/item:text-blue-600">
                            <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Custom OS</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            Tailored software matching your exact workflow.
                          </p>
                        </Link>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Managed setup + monthly maintenance</span>
                        </div>
                        <Link
                          href="/#products"
                          onClick={() => setBusinessOsOpen(false)}
                          className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                        >
                          <span>Compare all products</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Digital Growth */}
              <Link
                href="/website-growth-os"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-full hover:bg-slate-100/70 transition-all whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Digital Growth</span>
              </Link>

              {/* Trading Technology */}
              <Link
                href="/trading-technology"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-full hover:bg-slate-100/70 transition-all whitespace-nowrap"
              >
                <TrendingUp className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Trading Tech</span>
              </Link>

              {/* How It Works */}
              <Link
                href="/#how-it-works"
                className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-full hover:bg-slate-100/70 transition-all whitespace-nowrap"
              >
                How It Works
              </Link>

              {/* Pricing */}
              <Link
                href="/#pricing"
                className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-full hover:bg-slate-100/70 transition-all whitespace-nowrap"
              >
                Pricing
              </Link>
            </nav>

            {/* Desktop Right Action Area */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* WhatsApp Quick Link (opens in same tab, no phone displayed) */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all whitespace-nowrap shadow-xs"
                title="Chat directly on WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Book Consultation Primary CTA (Pure Blue Gradient) */}
              <a
                href="/#contact"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/25 border border-blue-400/20 transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="/#contact"
                className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
              >
                Consult
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-700 hover:text-blue-600 rounded-lg focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel (Pure White Sheet) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 pt-1 pb-1 font-bold">
                Operating Systems
              </div>
              <Link
                href="/business-os"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span>Business OS (All-in-One)</span>
              </Link>
              <Link
                href="/crm-os"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span>CRM OS</span>
              </Link>
              <Link
                href="/finance-os"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <span>Finance OS</span>
              </Link>
              <Link
                href="/website-growth-os"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span>Website Growth OS</span>
              </Link>
              <Link
                href="/trading-technology"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Trading Technology</span>
              </Link>

              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 pt-3 pb-1 font-bold">
                Platform &amp; Process
              </div>
              <Link
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
              >
                <Workflow className="w-3.5 h-3.5 text-blue-600" />
                <span>How It Works (8 Stages)</span>
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Pricing Architecture</span>
              </Link>
              <Link
                href="/#why-hemanth"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
              >
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Why Hemanth</span>
              </Link>
              <Link
                href="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2.5"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Articles &amp; Guides</span>
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25"
              >
                <span>Book Systems Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Permanent Fixed Header Spacer */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
