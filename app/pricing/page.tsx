import { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Transparent Pricing & Investment Roadmap | Hemanth Ranam",
  description:
    "Predictable, fixed-scope pricing for business systems consulting, workflow automation, custom builds, and ongoing monthly care retainers.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Transparent Pricing & Investment Roadmap | Hemanth Ranam",
    description:
      "Fixed scope pricing from $49 consultations to end-to-end multi-tenant business systems and monthly retainers.",
    url: "https://app.ranam.workers.dev/pricing",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
