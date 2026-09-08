import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { DEDICATED_SERVICES, SITE_CONFIG } from "@/data/siteData";
import {
  Workflow,
  Sparkles,
  Layers,
  Users,
  Sliders,
  BarChart3,
  Mail,
  TrendingUp,
  Zap,
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Search,
  Activity,
  Binary,
  Bot,
  Globe,
  Layout,
  Cpu,
  Send,
  HelpCircle,
  Compass,
  FileText,
  Settings,
  Terminal,
  LineChart,
  FileCheck,
  Gauge,
  Clock,
  Target,
  BookOpen,
  Headphones,
  MessageSquare,
  Database,
  Network,
  Bell,
  FileSpreadsheet,
  Check,
  X,
  Building2,
  Briefcase,
  Store,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return DEDICATED_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = DEDICATED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | HR Professional Services",
    };
  }

  return {
    title: `${service.name} | ${SITE_CONFIG.title}`,
    description: service.shortStatement || service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} — Small Price. Big Work.`,
      description: service.shortStatement || service.shortDescription,
      url: `/services/${service.slug}`,
      siteName: "HR Professional Services",
      type: "website",
    },
  };
}

export default async function ServiceSubpage({ params }: PageProps) {
  const { slug } = await params;
  const service = DEDICATED_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-8 h-8 text-blue-600" />,
    Sparkles: <Sparkles className="w-8 h-8 text-blue-600" />,
    Layers: <Layers className="w-8 h-8 text-blue-600" />,
    Users: <Users className="w-8 h-8 text-blue-600" />,
    Sliders: <Sliders className="w-8 h-8 text-blue-600" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-blue-600" />,
    Mail: <Mail className="w-8 h-8 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-8 h-8 text-emerald-600" />,
    Zap: <Zap className="w-8 h-8 text-blue-600" />,
    Code2: <Code2 className="w-8 h-8 text-indigo-600" />,
    Search: <Search className="w-8 h-8 text-blue-600" />,
    Globe: <Globe className="w-8 h-8 text-blue-600" />,
    Layout: <Layout className="w-8 h-8 text-blue-600" />,
    Bot: <Bot className="w-8 h-8 text-emerald-600" />,
    Binary: <Binary className="w-8 h-8 text-emerald-600" />,
    Cpu: <Cpu className="w-8 h-8 text-emerald-600" />,
    Send: <Send className="w-8 h-8 text-emerald-600" />,
    Activity: <Activity className="w-8 h-8 text-emerald-600" />,
    HelpCircle: <HelpCircle className="w-8 h-8 text-blue-600" />,
    Compass: <Compass className="w-8 h-8 text-blue-600" />,
    FileText: <FileText className="w-8 h-8 text-blue-600" />,
    Settings: <Settings className="w-8 h-8 text-blue-600" />,
    Terminal: <Terminal className="w-8 h-8 text-blue-600" />,
    LineChart: <LineChart className="w-8 h-8 text-emerald-600" />,
    FileCheck: <FileCheck className="w-8 h-8 text-blue-600" />,
    Gauge: <Gauge className="w-8 h-8 text-blue-600" />,
    Clock: <Clock className="w-8 h-8 text-blue-600" />,
    Target: <Target className="w-8 h-8 text-blue-600" />,
    BookOpen: <BookOpen className="w-8 h-8 text-blue-600" />,
    Headphones: <Headphones className="w-8 h-8 text-blue-600" />,
    MessageSquare: <MessageSquare className="w-8 h-8 text-blue-600" />,
    Database: <Database className="w-8 h-8 text-blue-600" />,
    Network: <Network className="w-8 h-8 text-blue-600" />,
    Bell: <Bell className="w-8 h-8 text-emerald-600" />,
    FileSpreadsheet: <FileSpreadsheet className="w-8 h-8 text-blue-600" />,
  };

  const tierIconMap: Record<string, React.ReactNode> = {
    "Small Business": <Store className="w-5 h-5 text-blue-600" />,
    "Growing Business": <TrendingUp className="w-5 h-5 text-emerald-600" />,
    "Established Business": <Building2 className="w-5 h-5 text-indigo-600" />,
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/#services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-semibold">{service.name}</span>
          </nav>
        </div>

        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="relative p-6 sm:p-10 md:p-14 rounded-3xl bg-linear-to-b from-slate-50 via-white to-blue-50/40 border border-slate-200/80 shadow-xs">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  {service.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                  {service.badge}
                </span>
                {service.defaultPrice && (
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    From {service.defaultPrice}
                  </span>
                )}
              </div>

              <div className="flex items-start sm:items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                  {iconMap[service.icon] || <Workflow className="w-8 h-8 text-blue-600" />}
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {service.name}
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal mb-6">
                {service.shortStatement || service.shortDescription}
              </p>

              {/* Value Badges Strip */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  Small Price. Big Work.
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  No Hourly Billing
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  Standard &amp; Custom
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  Support Included
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#discuss"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-xs hover:shadow-md flex items-center gap-2"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/#pricing"
                  className="px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
                >
                  <span>View Project Rates</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2 & 3. THE PROBLEM & THE SOLUTION
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-rose-200/80 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>The Problem</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {service.problem.title}
              </h2>
              <blockquote className="p-4 rounded-xl bg-rose-50/50 border-l-4 border-rose-500 text-xs sm:text-sm italic text-slate-700 font-medium mb-6">
                &ldquo;{service.problem.statement}&rdquo;
              </blockquote>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Operational Friction Solved:
              </p>
              <ul className="space-y-3">
                {service.problem.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200/80 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>The Solution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {service.solution.title}
              </h2>
              <div className="p-4 rounded-xl bg-blue-50/50 border-l-4 border-blue-500 text-xs sm:text-sm text-slate-700 font-medium mb-6">
                {service.solution.statement}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Engineering Approach:
              </p>
              <ul className="space-y-3">
                {service.solution.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. HOW IT WORKS (SEQUENTIAL IMPLEMENTATION)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="mb-8">
            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
              Step-by-Step Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Transparent milestone-based progress from initial diagnosis to production sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 px-2.5 py-1 rounded bg-blue-50 border border-blue-200">
                      Step {step.step}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Stage 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. WHAT WE BUILD (FEATURE CARDS)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="mb-8">
            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
              Tangible Implementations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              What We Build
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Production modules configured and integrated for your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeBuild.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center mb-4 text-blue-600">
                    {iconMap[feature.icon] || <Code2 className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. VISUAL WORKFLOW (SYSTEM DIAGRAM)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                System Diagram
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
                Visual Workflow &amp; Information Flow
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                How information, triggers, and data move through this system architecture.
              </p>
            </div>

            {/* Pipeline Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {service.visualWorkflow.map((node, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between group hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900">
                      Node 0{idx + 1}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      {node.label}
                    </span>
                  </div>

                  <div className="my-2">
                    <div className="text-xs text-slate-400 font-mono">From:</div>
                    <div className="text-sm font-bold text-white mb-2">{node.from}</div>
                    <div className="text-xs text-slate-400 font-mono">To:</div>
                    <div className="text-sm font-bold text-emerald-400">{node.to}</div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>Active Connection</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7 & 8. WHAT YOU GET & WHO IT IS FOR
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What You Get */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
                    Deliverables
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    What You Get
                  </h2>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Full Ownership</span>
                </div>
              </div>

              <ul className="space-y-3">
                {service.whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It Is For */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
                  Target Match
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Who It Is For
                </h2>
              </div>

              <div className="space-y-4">
                {service.whoItsFor.map((tier, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs shrink-0">
                      {tierIconMap[tier.tier] || <Briefcase className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{tier.tier}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{tier.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. STANDARD VS CUSTOM ARCHITECTURE
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="mb-8">
            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
              Architectural Flexibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              Standard vs Custom
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Start with tested standard building blocks to keep costs low. Customise specific logic when your workflow requires it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Tier */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Standard Architecture</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Rapid, Tested &amp; Affordable
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Proven templates, standard fields, and pre-built connectors that deploy quickly at milestone rates.
              </p>
              <ul className="space-y-3">
                {service.standardVsCustom.standard.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Tier */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-indigo-200 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Custom Architecture</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Business-Specific &amp; Bespoke
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Tailored schema, unique multi-step automation scripts, custom indicators, or proprietary workflow rules.
              </p>
              <ul className="space-y-3">
                {service.standardVsCustom.custom.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. SUPPORT & TRAINING (MORE THAN A HANDOVER)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-b from-slate-50 via-white to-blue-50/50 border border-slate-200 shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
                Support &amp; Training
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                More Than a Handover
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We don&apos;t simply build your system and leave. We ensure your team understands it, uses it effectively, and knows how to scale it as your business operations grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.supportAndTraining.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 text-blue-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-snug">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            11. FAQ SECTION
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="mb-8">
            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            12. DISCUSS THIS SERVICE (LEAD FORM PRE-POPULATING THIS SERVICE)
           ========================================================================= */}
        <div id="discuss">
          <ContactSection
            preselectedCategory={service.category}
            preselectedService={service.name}
            preselectedPlan={service.relatedPricingPlan}
            preselectedPrice={service.defaultPrice}
          />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
