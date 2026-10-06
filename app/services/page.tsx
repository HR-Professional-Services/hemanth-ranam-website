import { Metadata } from "next";
import { Suspense } from "react";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Business Systems & Automation Services | Hemanth Ranam",
  description:
    "Explore practical technology services: Business Systems consulting, workflow automation, Frappe/ERPNext implementation, business websites, and trading technology.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Business Systems & Automation Services | Hemanth Ranam",
    description:
      "Curated business systems, workflow automation, ERPNext setup, and trading technology. Designed and engineered directly by Hemanth Ranam.",
    url: "https://app.ranam.workers.dev/services",
  },
};

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-12 text-center text-slate-500 font-medium">
          Loading services catalog...
        </div>
      }
    >
      <ServicesContent />
    </Suspense>
  );
}
