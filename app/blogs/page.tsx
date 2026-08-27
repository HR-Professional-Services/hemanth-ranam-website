"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/data/blogsData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/ui/NewsletterSection";
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Layers,
  Sliders,
  TrendingUp,
  Bot,
  Zap,
  Tag,
} from "lucide-react";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Sliders":
        return <Sliders className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "Bot":
        return <Bot className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications & Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Business Systems, AI & Algo Engineering
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deep dives into ERP customization, serverless AI workflow pipelines, non-repainting Pine Script indicators, and low-latency MT5 Expert Advisors.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-4">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or technology..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 placeholder:text-slate-400 shadow-xs"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {BLOG_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Post (shown when on "all" and no search query) */}
          {activeCategory === "all" && !searchQuery && featuredPost && (
            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-10 shadow-xl overflow-hidden relative group">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
                      Featured Publication
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-3xl font-black text-white group-hover:text-blue-200 transition-colors leading-tight">
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {featuredPost.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/10 text-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
                    >
                      <span>Read Full Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 hidden lg:flex justify-center">
                  <div className="w-36 h-36 rounded-3xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 shadow-2xl backdrop-blur-md">
                    <Layers className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Articles ({filteredPosts.length})
              </h3>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-500 font-medium">
                  No articles found matching "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs font-bold text-blue-600 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Visual Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${post.coverTheme.gradient} text-white flex items-center justify-center shadow-xs`}
                        >
                          {getIcon(post.coverTheme.icon)}
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                          {post.categoryLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                        <Link href={`/blogs/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>

                      {/* Summary */}
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {post.summary}
                      </p>
                    </div>

                    <div>
                      {/* Metadata */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.publishDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Read Link */}
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="w-full py-2 px-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 group-hover:text-blue-700 text-slate-700 text-xs font-bold flex items-center justify-between transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Section */}
          <div className="pt-6">
            <NewsletterSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
