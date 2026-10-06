import { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Hemanth Ranam",
  description:
    "Explore case studies in business operating systems, ERPNext setup, workflow automation, and trading algorithms engineered by Hemanth Ranam.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work & Case Studies | Hemanth Ranam",
    description:
      "Real implementations, internal architectures, and technical demonstrations for growing businesses and quantitative traders.",
    url: "https://app.ranam.workers.dev/work",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
