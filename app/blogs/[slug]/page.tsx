import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { BLOG_POSTS, BlogPost } from "@/data/blogsData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/ui/NewsletterSection";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MessageSquare,
  BookOpen,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Hemanth Ranam",
    };
  }

  return {
    title: `${post.title} | Hemanth Ranam`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Hemanth Ranam`,
      description: post.summary,
      type: "article",
      publishedTime: "2026-08-01T00:00:00.000Z",
      authors: ["Hemanth Ranam"],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto py-1"
          >
            <Link href="/" className="hover:text-blue-600 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
            <Link href="/blogs" className="hover:text-blue-600 transition-colors shrink-0">
              Blogs
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
            <span className="text-slate-400 capitalize truncate">
              {post.categoryLabel}
            </span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <span>{post.categoryLabel}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
              {post.summary}
            </p>

            {/* Author & Publish Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-xs">
                  HR
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-none">
                    {post.author.name}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          {post.tableOfContents.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Table of Contents</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                {post.tableOfContents.map((item, idx) => (
                  <li key={item.anchor} className="flex items-center gap-2">
                    <span className="text-blue-600 font-mono text-[11px]">0{idx + 1}.</span>
                    <a
                      href={`#${item.anchor}`}
                      className="hover:text-blue-600 transition-colors truncate"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body Content */}
          <article className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400">Related Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Start a Project CTA Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Need Custom Implementation?
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Let’s Architect This for Your Business
              </h3>
              <p className="text-xs text-blue-100 max-w-md">
                Get custom software, AI workflow automation, or tailored trading algorithms built for your exact operational requirements.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs shadow-md transition-all shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Reads */}
          {relatedPosts.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Related Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blogs/${r.slug}`}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between group bg-white"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 block mb-1">
                        {r.categoryLabel}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {r.title}
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-3 block">
                      {r.readTime} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="pt-4">
            <NewsletterSection compact />
          </div>

          {/* Back to Blogs Button */}
          <div className="pt-2">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all insights</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
