import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { BLOG_POST_CONTENTS } from "@/data/blog";
import { SITE_CONFIG } from "@/config/site";
import { formatDate } from "@/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: `Technical articles by ${SITE_CONFIG.name} on AI engineering, distributed systems, and modern backend architecture.`,
};

export default function BlogPage() {
  const posts = BLOG_POST_CONTENTS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Technical{" "}
            <span className="gradient-text">Writing</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Deep dives on AI engineering, distributed systems, and backend architecture.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-accent/20"
            >
              <div className="mb-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/15 bg-accent/5 px-2.5 py-0.5 text-[10px] font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
              </Link>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime} min read
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  Read article
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
