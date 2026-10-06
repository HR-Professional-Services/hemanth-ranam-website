"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import {
  AlertCircle,
  ArrowRight,
  ShoppingBag,
  HelpCircle,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";

export default function PaymentCancelledPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      <ScrollProgressBar />

      <main className="flex-1 flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm text-center">
          <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>Transaction Not Completed</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Payment Not Completed
          </h1>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Your transaction was cancelled or could not be completed. No charges were made to your account, and your selected items remain in your cart.
          </p>

          <div className="mt-8 space-y-3">
            <Link
              href="/checkout"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Return to Checkout</span>
            </Link>

            <Link
              href="/cart"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-slate-500" />
              <span>Review Your Cart</span>
            </Link>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Need help or custom invoice? Contact Hemanth</span>
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
