import { Metadata } from "next";
import { ProductDetailPage } from "@/components/templates/ProductDetailPage";

export const metadata: Metadata = {
  title: "HRMS OS | Modern Workforce & People Operations | Hemanth Ranam",
  description:
    "Manage people, attendance, leave, recruitment, and payroll operations in one compliant, self-service workforce environment.",
};

const productData = {
  slug: "hrms-os",
  name: "HRMS OS",
  tagline: "Manage your people, attendance, leave, recruitment and HR operations.",
  badge: "People & Culture",
  whatItSolves:
    "Replaces messy spreadsheets, manual leave requests, and ad-hoc employee onboarding with compliant, self-service workforce infrastructure.",
  problemDetails: [
    "Leave balances tracked on disconnected spreadsheets with frequent discrepancies.",
    "Manual paperwork and unorganized contract copies for employee onboarding.",
    "Unclear shift schedules, attendance disputes, and delayed payroll processing.",
    "Expired visas, certificates, and compliance paperwork causing organizational risk.",
  ],
  solution:
    "HRMS OS provides employees and managers with a modern digital portal for leave requests, attendance logs, performance reviews, and document management.",
  whoItIsFor:
    "Companies with 5 to 250+ employees, distributed teams, or hybrid operations seeking structured people management.",
  coreModules: [
    "Employee Master Record & Digital Profile",
    "Self-Service Leave Application & Multi-tier Approvals",
    "Attendance & Shift Scheduling",
    "Recruitment Pipeline & Candidate Tracking (ATS)",
    "Payroll & Salary Slip Distribution",
    "Document Storage & Expiry Reminders (Visas, Certs)",
  ],
  workflow: [
    "Job requisition approved by department manager",
    "Applicant applies → candidate auto-populated in ATS pipeline",
    "Offer letter accepted → system auto-creates Employee Profile",
    "Automated checklist assigns hardware, credentials, and digital SOPs",
    "Employee logs attendance & submits leave from mobile self-service portal",
  ],
  setupFeeNote: "One-time HR policy translation, shift setup, and legacy employee data import.",
  monthlyPlanNote: "Monthly HRMS hosting, payroll cycle support, and policy permission updates.",
  whatsIncluded: [
    "Custom leave & attendance rules matching company handbook",
    "Employee self-service portal configuration",
    "Recruitment portal with public career page feed",
    "Salary structures, tax rules, and slip automation",
    "Admin & staff training documentation",
  ],
  supportLevel: "Business-hours technical assistance, monthly payroll pre-check, and data backup verification.",
  techStack: ["Frappe HRMS", "Python", "MariaDB", "Automated Email Engine"],
  faqs: [
    {
      question: "Can employees access HRMS OS on mobile devices?",
      answer: "Yes, HRMS OS features a responsive web app enabling staff to check balances, request leave, and view salary slips on smartphones.",
    },
    {
      question: "Can we configure custom approval tiers for leave and expense claims?",
      answer: "Yes, multi-level hierarchy trees can be configured based on team structure, department, or tenure.",
    },
  ],
};

export default function HrmsOsPage() {
  return <ProductDetailPage product={productData} />;
}
