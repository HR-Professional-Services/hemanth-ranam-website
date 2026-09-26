"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import {
  CANONICAL_SERVICES_CATALOGUE,
  FREE_RESOURCES,
} from "@/data/pricingData";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Download,
  Calendar,
  Layers,
  Lock,
  Zap,
  AlertTriangle,
  FolderLock,
  Tag,
  Clock,
  Shield,
  CreditCard,
  Search,
  ExternalLink,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import confetti from "canvas-confetti";

interface StoreItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: string;
  originalPrice?: string;
  billingType: string;
  deliveryTime: string;
  shortDescription: string;
  included?: string[];
  stripePaymentLink?: string;
  bookingUrl?: string;
  downloadUrl?: string;
  orderBump?: {
    title: string;
    price: string;
    description: string;
  };
  disclaimer?: string;
}

const CHECKOUT_CATEGORIES = [
  "All Offerings",
  "Free Resources ($0)",
  "Consulting & Bookings",
  "One-Time Services",
  "Monthly Retainers",
  "Trading Tech",
  "Digital Products",
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const initialItemId = searchParams.get("id") || searchParams.get("item") || searchParams.get("sku") || "";

  // Combine Free Resources + 50 Canonical Services
  const allItems: StoreItem[] = useMemo(() => [
    ...FREE_RESOURCES.map((r) => ({
      id: r.freeResourceId || r.id,
      name: r.title,
      category: "Free Resources",
      subcategory: r.category,
      price: "FREE ($0)",
      billingType: "FREE",
      deliveryTime: "Instant Download",
      shortDescription: r.description,
      included: [
        "Instant Google Drive copy access",
        "Step-by-step implementation guide",
        "Pre-built formulas & data validation",
        "Zero subscription or recurring fee",
      ],
      downloadUrl: r.downloadUrl,
    })),
    ...CANONICAL_SERVICES_CATALOGUE.map((s) => ({
      id: s.serviceId,
      name: s.serviceName,
      category: s.category,
      subcategory: s.subcategory,
      price: s.price,
      originalPrice: s.originalPrice,
      billingType: s.billingType,
      deliveryTime: s.deliveryTime,
      shortDescription: s.shortDescription,
      included: s.included,
      stripePaymentLink: s.stripePaymentLink,
      bookingUrl: s.bookingUrl,
      orderBump: s.orderBump,
      disclaimer: s.disclaimer,
    })),
  ], []);

  const [activeCategory, setActiveCategory] = useState("All Offerings");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<StoreItem>(allItems[0]);

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [addOrderBump, setAddOrderBump] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [freeDelivered, setFreeDelivered] = useState(false);
  const [deliveryDriveUrl, setDeliveryDriveUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [testModeSuccess, setTestModeSuccess] = useState<string | null>(null);

  // Sync initial item from query param if available
  useEffect(() => {
    if (initialItemId) {
      const found = allItems.find(
        (i) => i.id.toLowerCase() === initialItemId.toLowerCase() ||
               i.name.toLowerCase().includes(initialItemId.toLowerCase())
      );
      if (found) {
        setSelectedItem(found);
      }
    }
  }, [initialItemId, allItems]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Category filter
      let matchesCat = true;
      if (activeCategory === "Free Resources ($0)") {
        matchesCat = item.billingType === "FREE";
      } else if (activeCategory === "Consulting & Bookings") {
        matchesCat = item.category.toLowerCase().includes("consulting") || item.bookingUrl !== undefined;
      } else if (activeCategory === "One-Time Services") {
        matchesCat =
          item.billingType !== "FREE" &&
          item.billingType !== "MONTHLY" &&
          (item.category.toLowerCase().includes("website") ||
            item.category.toLowerCase().includes("automation") ||
            item.category.toLowerCase().includes("frappe") ||
            item.category.toLowerCase().includes("sheets"));
      } else if (activeCategory === "Monthly Retainers") {
        matchesCat = item.billingType === "MONTHLY" || item.category.toLowerCase().includes("monthly");
      } else if (activeCategory === "Trading Tech") {
        matchesCat = item.category.toLowerCase().includes("trading");
      } else if (activeCategory === "Digital Products") {
        matchesCat =
          item.category.toLowerCase().includes("template") ||
          item.category.toLowerCase().includes("checklist") ||
          item.category.toLowerCase().includes("kit") ||
          item.category.toLowerCase().includes("dashboard");
      }

      // Search Query filter
      const matchesSearch =
        searchQuery === ""
          ? true
          : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCat && matchesSearch;
    });
  }, [allItems, activeCategory, searchQuery]);

  const isFree =
    selectedItem.price.toLowerCase().includes("free") ||
    selectedItem.price === "$0" ||
    selectedItem.billingType === "FREE";

  const isMonthly =
    selectedItem.billingType === "MONTHLY" ||
    selectedItem.price.toLowerCase().includes("/mo");

  const isConsulting =
    selectedItem.category.toLowerCase().includes("consulting") ||
    selectedItem.id.startsWith("CONS");

  const GAS_URL =
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbz0PfSDNcjbNUnMJRP0PgaI-jgPd2VCNvfXVEasYElOk_1jH1wWaXeZOKA9ewmONJlX-w/exec";

  // Free Resource Claim Handler
  const handleFreeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !billingEmail) {
      setErrorMessage("Please enter your name and email to receive access.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const payload = {
        action: "createLead",
        name: fullName,
        email: billingEmail,
        googleEmail: googleEmail || billingEmail,
        company: company || "Independent",
        service: selectedItem.name,
        category: selectedItem.category,
        selectedPlan: "Free Resource Download",
        price: "$0.00",
        message: `Free claim for ${selectedItem.name} (${selectedItem.id}). Notes: ${notes || "None"}`,
        source: "Checkout Page Embed",
        page: "/checkout",
      };

      try {
        await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch (gasErr) {
        console.warn("GAS notification caught:", gasErr);
      }

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // Ignored
      }

      setDeliveryDriveUrl(
        selectedItem.downloadUrl ||
          "https://drive.google.com/drive/folders/1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l"
      );
      setFreeDelivered(true);
    } catch {
      setDeliveryDriveUrl(
        selectedItem.downloadUrl ||
          "https://drive.google.com/drive/folders/1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l"
      );
      setFreeDelivered(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Paid Checkout & Stripe Trigger
  const handlePaidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !billingEmail) {
      setErrorMessage("Please provide your name and billing email address.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const payload = {
        action: "createLead",
        name: fullName,
        email: billingEmail,
        googleEmail: googleEmail || billingEmail,
        company: company || "Independent",
        service: selectedItem.name,
        category: selectedItem.category,
        selectedPlan: selectedItem.price,
        price: selectedItem.price,
        message: `Pre-checkout order intent for ${selectedItem.name} (${selectedItem.id}). Add order bump: ${addOrderBump ? "Yes" : "No"}. Notes: ${notes || "None"}`,
        source: "Checkout Page Embed",
        page: "/checkout",
      };

      // 1. Direct post to Google Apps Script CRM
      try {
        await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch (gasErr) {
        console.warn("GAS order intent caught:", gasErr);
      }

      // 2. Determine target Stripe Payment Link or calendar booking
      const targetUrl =
        selectedItem.stripePaymentLink &&
        selectedItem.stripePaymentLink !== "CONFIG_REQUIRED"
          ? selectedItem.stripePaymentLink
          : selectedItem.bookingUrl ||
            "https://buy.stripe.com/test_placeholder";

      // If valid Stripe link exists, redirect with prefilled parameters
      if (
        targetUrl.startsWith("https://buy.stripe.com") ||
        targetUrl.startsWith("https://checkout.stripe.com")
      ) {
        const separator = targetUrl.includes("?") ? "&" : "?";
        const finalUrl = `${targetUrl}${separator}prefilled_email=${encodeURIComponent(
          billingEmail
        )}&client_reference_id=${encodeURIComponent(selectedItem.id)}`;
        window.location.href = finalUrl;
      } else {
        // Fallback / Test Mode Display
        setTestModeSuccess(
          `Order intent registered for ${selectedItem.name}! In production, this forwards directly to Stripe Checkout with Webhook destination we_1UJjGjJb83tJVGZIQCocEkFt.`
        );
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <ScrollProgressBar />
      <TechBackground3D />

      {/* Hero Header */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Stripe Verified Checkout &amp; Drive Provisioning</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                E-Commerce Store &amp; Checkout
              </h1>
              <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl">
                Browse our full catalogue of free resources, 1-on-1 consultations, one-time systems implementations, and monthly business OS retainers.
              </p>
            </div>

            {/* Quick Guarantees Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Google Drive Delivery</span>
              </div>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CHECKOUT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dual-Column Checkout Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service Catalogue & Selector (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Search Header */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search across 60+ offerings by keyword, code (CONS-001, FREE-001)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent outline-none placeholder:text-slate-400 text-slate-900"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
              <span>Showing {filteredItems.length} Offerings</span>
              <span>Click any card to load into checkout</span>
            </div>

            {/* List of Offerings */}
            <div className="space-y-3 max-h-[750px] overflow-y-auto pr-1">
              {filteredItems.map((item) => {
                const isSelected = selectedItem.id === item.id;
                const isItemFree = item.billingType === "FREE";

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item);
                      setFreeDelivered(false);
                      setTestModeSuccess(null);
                    }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left relative ${
                      isSelected
                        ? "bg-blue-50/70 border-blue-600 ring-2 ring-blue-600/20 shadow-md"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                            {item.id}
                          </span>
                          <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                            {item.category}
                          </span>
                          {isItemFree && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                              FREE ASSET
                            </span>
                          )}
                        </div>

                        <h3 className="font-bold text-base text-slate-900 leading-snug">
                          {item.name}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {item.shortDescription}
                        </p>

                        <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.deliveryTime}</span>
                          </div>
                          {item.included && (
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{item.included.length} Deliverables</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pricing Tag */}
                      <div className="text-right shrink-0">
                        <div className="text-lg font-black text-slate-900">
                          {item.price}
                        </div>
                        {item.originalPrice && (
                          <div className="text-xs text-slate-400 line-through">
                            {item.originalPrice}
                          </div>
                        )}
                        <button
                          type="button"
                          className={`mt-3 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {isSelected ? "Selected" : "Select"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Embedded Checkout Form (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Header Ribbon */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center border border-white/20">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-sm tracking-tight text-white leading-tight">
                      Order Summary &amp; Checkout
                    </h2>
                    <p className="text-[11px] text-blue-100">
                      Step 1 of 2: Confirm Order &amp; Delivery Details
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full text-white">
                  {selectedItem.id}
                </span>
              </div>

              {/* Success Screen for Free Claim */}
              {freeDelivered ? (
                <div className="p-8 text-center space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                    <Sparkles className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Access Granted Successfully!
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                      Your free copy of <strong>{selectedItem.name}</strong> is ready. An automated delivery notification has also been logged in our Google Drive engine.
                    </p>
                  </div>

                  <a
                    href={deliveryDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Open in Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setFreeDelivered(false);
                      setFullName("");
                    }}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800"
                  >
                    Select Another Offering
                  </button>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  
                  {/* Selected Item Overview Card */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">
                          {selectedItem.category}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                          {selectedItem.name}
                        </h4>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-lg font-black text-slate-900">
                          {selectedItem.price}
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {isMonthly ? "Billed Monthly" : "One-Time"}
                        </span>
                      </div>
                    </div>

                    {/* Turnaround & SLA */}
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-200/80 text-xs text-slate-600">
                      <div className="flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>SLA: {selectedItem.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-emerald-700">
                        <FolderLock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Client Workspace</span>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    {selectedItem.included && selectedItem.included.length > 0 && (
                      <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Deliverables Included:
                        </span>
                        {selectedItem.included.slice(0, 3).map((inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Optional Order Bump */}
                  {selectedItem.orderBump && (
                    <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 cursor-pointer transition-all hover:bg-amber-50">
                      <input
                        type="checkbox"
                        checked={addOrderBump}
                        onChange={(e) => setAddOrderBump(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <div className="space-y-0.5 flex-1">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                          <span>{selectedItem.orderBump.title}</span>
                          <span className="text-blue-700 font-extrabold">
                            +{selectedItem.orderBump.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-800 leading-relaxed">
                          {selectedItem.orderBump.description}
                        </p>
                      </div>
                    </label>
                  )}

                  {/* Mandatory Trading Disclaimer */}
                  {selectedItem.disclaimer && (
                    <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{selectedItem.disclaimer}</span>
                    </div>
                  )}

                  {/* Form Fields */}
                  <form
                    onSubmit={isFree ? handleFreeSubmit : handlePaidSubmit}
                    className="space-y-3.5"
                  >
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Billing Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="billing@company.com"
                          value={billingEmail}
                          onChange={(e) => setBillingEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Google Delivery Email
                        </label>
                        <input
                          type="email"
                          placeholder="you@gmail.com (Optional)"
                          value={googleEmail}
                          onChange={(e) => setGoogleEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Corp"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Requirements or Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Brief summary of your current workflow, stack, or goal..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    {testModeSuccess && (
                      <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-medium text-blue-900 leading-relaxed space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-blue-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          <span>Simulation Successful</span>
                        </div>
                        <p>{testModeSuccess}</p>
                      </div>
                    )}

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                        isFree
                          ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25"
                          : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/25"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-white" />
                          <span>Processing...</span>
                        </>
                      ) : isFree ? (
                        <>
                          <Download className="w-4 h-4 text-white" />
                          <span>Get Free Instant Access ($0.00)</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 text-white" />
                          <span>Proceed to Stripe Checkout</span>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust Footer */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Stripe Webhook Verified</span>
                    </div>
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Loading HR Professional Services Checkout...</span>
          </div>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
