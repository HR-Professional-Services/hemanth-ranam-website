import { Metadata } from "next";
import { StoreContent } from "./StoreContent";

export const metadata: Metadata = {
  title: "Professional Services & Digital Store | Hemanth Ranam",
  description:
    "Browse our complete catalog of free templates, strategic consultations, one-time custom builds, and monthly support partnerships with direct Stripe checkout and instant delivery.",
  alternates: {
    canonical: "/store",
  },
  openGraph: {
    title: "Professional Services & Digital Store | Hemanth Ranam",
    description:
      "Browse our catalog of business operating systems, automation templates, and quantitative trading tools.",
    url: "https://app.ranam.workers.dev/store",
  },
};

export default function StorePage() {
  return <StoreContent />;
}
