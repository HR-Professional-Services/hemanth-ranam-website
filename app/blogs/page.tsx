import { Metadata } from "next";
import { BlogsContent } from "./BlogsContent";

export const metadata: Metadata = {
  title: "Engineering Articles, Systems & Algo Blueprints | Hemanth Ranam",
  description:
    "Technical breakdowns, architecture blueprints, ERPNext tutorials, and Pine Script/MT5 trading system guides written by Hemanth Ranam.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Engineering Articles & Systems Blueprints | Hemanth Ranam",
    description:
      "Deep-dive technical guides on business operating systems, workflow automation, and algorithmic trading architecture.",
    url: "https://app.ranam.workers.dev/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsContent />;
}
