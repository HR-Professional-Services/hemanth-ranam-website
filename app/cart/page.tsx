"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Lock,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalCount,
    subtotal,
    subtotalDisplay,
  } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      <ScrollProgressBar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Shopping Cart</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
              <span>Order Selection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Your Cart ({totalCount})
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Review your selected business systems, automation, or consulting offerings.
            </p>
          </div>

          {items.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-slate-500 hover:text-rose-600 font-medium transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear cart</span>
            </button>
          )}
        </div>

        {/* Cart Content */}
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-16 text-center max-w-xl mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-sm text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
              You haven&apos;t added any services or products yet. Discover how we can help replace manual work and connect your business tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Browse Core Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/store"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
              >
                <span>Digital Products &amp; Store</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items List */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                          {item.category}
                        </span>
                        {item.deliveryTime && (
                          <span className="text-[11px] text-slate-400">
                            • Delivery: {item.deliveryTime}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.name}
                      </h3>
                      {item.shortDescription && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {item.shortDescription}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base sm:text-lg font-black text-slate-900 block">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[11px] text-slate-400">
                          ${item.price.toFixed(2)} each
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Actions Bar */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium">
                        Qty:
                      </span>
                      <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white rounded transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-bold text-xs text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white rounded transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-slate-400 hover:text-rose-600 font-medium flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Browsing Services</span>
                </Link>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm sticky top-28">
              <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                Order Summary
              </h2>

              <div className="space-y-3 py-4 text-xs border-b border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Selected Items</span>
                  <span className="font-semibold text-slate-900">{totalCount}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">{subtotalDisplay}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-slate-900">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 text-slate-900">
                <span className="font-bold text-sm">Total</span>
                <span className="font-black text-2xl text-blue-600">
                  {subtotalDisplay}
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/checkout"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20"
                >
                  <Lock className="w-4 h-4" />
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Founder Execution</span>
                  </div>
                  <p className="leading-relaxed">
                    All business systems and automations are designed and built directly by Hemanth Ranam. Consultation fees are 100% credited toward future projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
