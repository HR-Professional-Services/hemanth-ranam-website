import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "Project OS | Deliverable Milestones & Timesheet Tracking | Hemanth Ranam",
  description:
    "Manage projects, tasks, milestones, and client team delivery with Gantt charts, timesheet billing, and transparent customer review portals.",
};

const productData = {
  slug: "project-os",
  name: "Project OS",
  tagline: "Manage projects, tasks, milestones and team delivery.",
  badge: "Execution Precision",
  whatItSolves:
    "Solves project delivery delays, scope creep, unbilled billable hours, and fragmented team communication across external client engagements.",
  problemDetails: [
    "Milestone deadlines missed due to lack of visual dependency tracking.",
    "Engineers and consultants forgetting to log billable hours, leaking revenue.",
    "Clients constantly asking 'What is the status?' via unstructured WhatsApp or email threads.",
    "Scope creep quietly degrading project profit margins.",
  ],
  solution:
    "Project OS connects accepted sales contracts directly to milestone delivery boards, billable time logs, and a dedicated customer transparency portal.",
  whoItIsFor:
    "Consultancies, engineering firms, software studios, creative agencies, and professional services practices.",
  coreModules: [
    "Project Gantt & Milestone Timelines",
    "Kanban Task Boards with Dependency Mapping",
    "Timesheet Tracking & Billable Hour Logging",
    "Project Budget vs. Actual Cost Monitoring",
    "Client Portal for Progress Transparency",
    "Task Issue & Deliverable Approval Workflows",
  ],
  workflow: [
    "Signed Sales Order automatically creates new Project workspace",
    "Pre-configured template generates milestone tasks & deadlines",
    "Engineers log time against specific deliverables",
    "Timesheets roll up into customer invoice automatically",
    "Client reviews and approves milestone completions in real time",
  ],
  setupFeeNote: "One-time project template architecture, timesheet billing rates setup, and client portal layout.",
  monthlyPlanNote: "Monthly project archive management, storage maintenance, and user permissions tuning.",
  whatsIncluded: [
    "Bespoke project template creation matching internal methodologies",
    "Timesheet to billing automation",
    "Budget overrun warning alerts",
    "Secure external client review portal",
    "Team delivery SOPs and time tracking onboarding",
  ],
  supportLevel: "Business-day technical assistance, system backups, and continuous uptime monitoring.",
  techStack: ["ERPNext Projects", "Frappe Gantt", "Timesheet Engine", "Client Portal"],
  faqs: [
    {
      question: "Can clients view project progress without seeing internal cost rates?",
      answer: "Yes. The external client portal provides milestone views, deliverables, and approval buttons while strictly hiding internal costs and billable rates.",
    },
    {
      question: "Can logged timesheets be automatically converted into invoices?",
      answer: "Yes. Timesheet hours convert directly into billing invoices based on pre-set hourly or role-based rates.",
    },
  ],
};

export default function ProjectOsPage() {
  return <ProductDetailPage product={productData} />;
}
