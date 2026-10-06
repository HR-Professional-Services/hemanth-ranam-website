import { Metadata } from "next";
import { ProductsContent } from "./ProductsContent";

export const metadata: Metadata = {
  title: "Commercial Offerings & Software Products | Hemanth Ranam",
  description:
    "Complete technical catalog of systems architecture audits, ERPNext setups, trading technology, and automated digital products.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Commercial Offerings & Products | Hemanth Ranam",
    description:
      "Full catalog of consulting, one-time builds, and digital assets.",
    url: "https://app.ranam.workers.dev/products",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
