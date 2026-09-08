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
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} — Small Price. Big Work.`,
      description: service.shortDescription,
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
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
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

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="relative p-6 sm:p-10 md:p-14 rounded-3xl bg-linear-to-b from-slate-50 via-white to-blue-50/30 border border-slate-200/80 shadow-xs">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>{service.category}</span>
                <span>•</span>
                <span>{service.badge}</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
                  {iconMap[service.icon] || <Workflow className="w-8 h-8 text-blue-600" />}
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {service.name}
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <span>Discuss This Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/#pricing"
                  className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
                >
                  <span>View Project Rates</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What It Solves vs What We Do */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem / What It Solves */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-rose-100 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Friction Points Solved</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                What This Eliminates
              </h2>
              <ul className="space-y-3">
                {service.whatItSolves.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution / What We Do */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 shadow-2xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Practical Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                What We Build &amp; Deliver
              </h2>
              <ul className="space-y-3">
                {service.whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Workflow Section (ScaleNova Flow Architecture) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mb-8 sm:mb-12">
              <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
                Visual Process Storytelling
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
                How We Deliver {service.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Transparent sequential delivery from initial business audit to production automation.
              </p>
            </div>

            {/* Sequential Flow Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {service.workflow.map((w, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between group hover:border-blue-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900">
                        {w.step}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">Stage {idx + 1}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {w.label}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included & Typical Deliverables */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* What's Included */}
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    What&apos;s Included in Every Engagement
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct founder accountability and fixed milestone scope.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SLA Backed</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatsIncluded.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Deliverables */}
            <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Tangible Deliverables</h3>
                <p className="text-xs text-slate-600 mb-6">
                  You receive production-grade artifacts and full ownership:
                </p>

                <ul className="space-y-3">
                  {service.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        {deliv}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200/60">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs text-center block hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Request Detailed Scope
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-100/80 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              Strategic Business Value
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-blue-600 font-mono text-xs font-bold block mb-1">
                    0{idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Lead Form Pre-populating this Service */}
        <div id="contact">
          <ContactSection preselectedService={service.name} preselectedCategory={service.category} />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
