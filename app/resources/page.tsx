import { Metadata } from "next";
import { ResourcesContent } from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Free Tools, Templates & Checklists | Hemanth Ranam",
  description:
    "Free Google Sheets models, architecture templates, automation checklists, and indicator scripts with direct Google Drive access.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Free Tools, Templates & Checklists | Hemanth Ranam",
    description:
      "Instant copy access to operational templates, systems audits, and automation checklists.",
    url: "https://app.ranam.workers.dev/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
