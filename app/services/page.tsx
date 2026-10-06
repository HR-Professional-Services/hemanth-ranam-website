"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { CURATED_OFFERS } from "@/data/curatedCatalog";
import { useCart } from "@/context/CartContext";
import {
  Layers,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShoppingBag,
  Search,
} from "lucide-react";

const CATEGORIES = [
  { label: "All Services", slug: "all" },
  { label: "Business Systems", slug: "business-systems" },
  { label: "Automation", slug: "automation" },
  { label: "ERPNext", slug: "erpnext" },
  { label: "Websites", slug: "websites" },
  { label: "Trading Technology", slug: "trading-technology" },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [userCat, setUserCat] = useState<string | null>(null);
  const selectedCat = userCat ?? initialCat;
  const setSelectedCat = (cat: string) => setUserCat(cat);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();

  const filteredOffers = CURATED_OFFERS.filter((offer) => {
    const matchesCat =
      selectedCat === "all" || offer.categorySlug === selectedCat;

    const matchesSearch =
      searchQuery.trim() === "" ||
      offer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.whoItIsFor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      <ScrollProgressBar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Services</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Commercial Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Practical Technology Services for Growing Businesses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Curated business systems, workflow automation, ERPNext setup, modern websites, and trading technology. Designed and engineered directly by Hemanth Ranam.
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCat(cat.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCat === cat.slug
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredOffers.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-xs">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              No services found
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Try adjusting your search query or select another category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCat("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Meta Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                      {offer.category}
                    </span>
                    {offer.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {offer.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Price */}
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {offer.name}
                  </h2>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-black text-slate-900">
                      {offer.priceDisplay}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {offer.deliveryTime}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {offer.shortDescription}
                  </p>

                  {/* Who It Is For Callout */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-6">
                    <strong className="text-slate-900 block mb-0.5 font-bold">
                      Who it is for:
                    </strong>
                    <span>{offer.whoItIsFor}</span>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 mb-6 text-xs text-slate-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Deliverables Included
                    </span>
                    {offer.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: offer.id,
                          name: offer.name,
                          price: offer.price,
                          priceDisplay: offer.priceDisplay,
                          category: offer.category,
                          billingType: offer.billingType,
                          deliveryTime: offer.deliveryTime,
                          shortDescription: offer.shortDescription,
                          stripePaymentLink: offer.stripePaymentLink,
                          bookingUrl: offer.bookingUrl,
                        })
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer min-h-[44px]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>

                    <Link
                      href={
                        offer.billingType === "CUSTOM"
                          ? "/contact"
                          : `/checkout?id=${encodeURIComponent(offer.id)}`
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs transition-colors min-h-[44px]"
                    >
                      <span>
                        {offer.billingType === "CUSTOM"
                          ? "Enquire"
                          : offer.deliveryType === "consultation_booking"
                          ? "Book Now"
                          : "Buy Now"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Not sure which service fits your current stage?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Start with a 60-minute systems discovery consultation. We review your tools and workflows, and 100% of the $49 fee is credited toward any subsequent implementation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?service=consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-sm min-h-[44px]"
            >
              <span>Book $49 Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm transition-colors min-h-[44px]"
            >
              <span>Explore Monthly Support Plans</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 p-12 text-center">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
