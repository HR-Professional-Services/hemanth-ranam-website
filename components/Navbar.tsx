"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Layers,
  ChevronDown,
  ArrowRight,
  Workflow,
  Cpu,
  Globe,
  TrendingUp,
  ShoppingBag,
  FolderKanban,
  FileText,
  CreditCard,
  User,
  MessageSquare,
  Sparkles,
  Phone,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesFlyoutOpen, setServicesFlyoutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        setServicesFlyoutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesFlyoutOpen(false);
  }, [pathname]);

  const serviceCategories = [
    {
      title: "Business Systems",
      desc: "CRM, sales, operations & management systems",
      href: "/services?cat=business-systems",
      icon: Layers,
    },
    {
      title: "Business Automation",
      desc: "Connect tools and remove repetitive admin work",
      href: "/services?cat=automation",
      icon: Workflow,
    },
    {
      title: "ERPNext Implementation",
      desc: "Frappe & ERPNext workflows, setup & custom doctypes",
      href: "/services?cat=erpnext",
      icon: Cpu,
    },
    {
      title: "Business Websites",
      desc: "Modern websites connected to lead capture & CRM",
      href: "/services?cat=websites",
      icon: Globe,
    },
    {
      title: "Trading Technology",
      desc: "Pine Script v6 & MT5 indicators, scanners & bridges",
      href: "/trading-technology",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-[1.5px] shadow-sm group-hover:shadow-blue-500/25 transition-all">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xs tracking-wider bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    HR
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                  Hemanth Ranam
                </span>
                <span className="text-[11px] text-slate-500 font-normal leading-tight mt-1">
                  Business Systems &amp; Automation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold text-slate-700">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/" ? "text-blue-600 font-bold" : ""
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                ref={flyoutRef}
                className="relative"
                onMouseEnter={() => setServicesFlyoutOpen(true)}
                onMouseLeave={() => setServicesFlyoutOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesFlyoutOpen((prev) => !prev)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 cursor-pointer ${
                    pathname.startsWith("/services") ? "text-blue-600 font-bold" : ""
                  }`}
                  aria-expanded={servicesFlyoutOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                      servicesFlyoutOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {servicesFlyoutOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in duration-150">
                    <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-1">
                      <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                          Core Divisions
                        </span>
                        <Link
                          href="/services"
                          className="text-[11px] text-blue-600 hover:underline font-bold"
                        >
                          All Services →
                        </Link>
                      </div>

                      {serviceCategories.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 block">
                                {item.title}
                              </span>
                              <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/work"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/work" ? "text-blue-600 font-bold" : ""
                }`}
              >
                Work
              </Link>

              <Link
                href="/resources"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/resources" ? "text-blue-600 font-bold" : ""
                }`}
              >
                Resources
              </Link>

              <Link
                href="/store"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/store" ? "text-blue-600 font-bold" : ""
                }`}
              >
                Store
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/about" ? "text-blue-600 font-bold" : ""
                }`}
              >
                About
              </Link>

              <Link
                href="/pricing"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/pricing" ? "text-blue-600 font-bold" : ""
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-600 hover:bg-slate-100/60 ${
                  pathname === "/contact" ? "text-blue-600 font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Actions: Cart & Primary CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors flex items-center justify-center cursor-pointer min-w-[44px] min-h-[44px]"
                aria-label={`View cart with ${totalCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs animate-in zoom-in duration-150">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Primary Consultation CTA */}
              <Link
                href="/contact?service=consultation"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm shadow-blue-500/15 min-h-[44px]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-200">
            {/* Mobile Menu Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                  HR
                </div>
                <span className="font-bold text-sm text-slate-900">
                  Hemanth Ranam
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                Home
              </Link>

              <div className="pt-2 pb-1 px-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Services
                </span>
                <div className="space-y-1 pl-2 border-l border-slate-200">
                  <Link
                    href="/services"
                    className="block py-2 text-xs font-bold text-blue-600 hover:underline min-h-[36px]"
                  >
                    View All Services →
                  </Link>
                  <Link
                    href="/services?cat=business-systems"
                    className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 min-h-[36px]"
                  >
                    • Business Systems
                  </Link>
                  <Link
                    href="/services?cat=automation"
                    className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 min-h-[36px]"
                  >
                    • Business Automation
                  </Link>
                  <Link
                    href="/services?cat=erpnext"
                    className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 min-h-[36px]"
                  >
                    • ERPNext Implementation
                  </Link>
                  <Link
                    href="/services?cat=websites"
                    className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 min-h-[36px]"
                  >
                    • Business Websites
                  </Link>
                  <Link
                    href="/trading-technology"
                    className="block py-1.5 text-xs text-slate-600 hover:text-blue-600 min-h-[36px]"
                  >
                    • Trading Technology (Pine &amp; MT5)
                  </Link>
                </div>
              </div>

              <Link
                href="/work"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                Selected Work
              </Link>

              <Link
                href="/resources"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                Free Resources
              </Link>

              <Link
                href="/store"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                Digital Store
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                About Hemanth
              </Link>

              <Link
                href="/pricing"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                Pricing &amp; Support Plans
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                Contact
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-blue-600" />
                  <span>Shopping Cart</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                  {totalCount}
                </span>
              </button>
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
              <Link
                href="/contact?service=consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm text-center shadow-sm min-h-[44px]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
