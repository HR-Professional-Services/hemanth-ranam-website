import { Metadata } from "next";
import { MonthlyContent } from "./MonthlyContent";

export const metadata: Metadata = {
  title: "Monthly Systems Care & Dedicated Support Retainers | Hemanth Ranam",
  description:
    "Ongoing proactive maintenance, security patches, custom workflow expansions, and priority founder SLA for your business operating systems.",
  alternates: {
    canonical: "/monthly",
  },
  openGraph: {
    title: "Monthly Systems Care & Retainers | Hemanth Ranam",
    description:
      "Keep your ERPNext, CRM, and workflow automations continuously maintained and optimized with predictable monthly care.",
    url: "https://app.ranam.workers.dev/monthly",
  },
};

export default function MonthlyPage() {
  return <MonthlyContent />;
}
