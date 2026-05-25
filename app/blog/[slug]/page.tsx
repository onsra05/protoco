import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POST_CONTENTS } from "@/data/blog";
import { SITE_CONFIG } from "@/config/site";
import { formatDate } from "@/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POST_CONTENTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POST_CONTENTS.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [SITE_CONFIG.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POST_CONTENTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const otherPosts = BLOG_POST_CONTENTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            All articles
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/15 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-border pb-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime} min read
          </span>
          <span>By {SITE_CONFIG.name}</span>
        </div>

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author box */}
        <div className="mt-16 rounded-2xl border border-border bg-surface-1 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-lg font-bold text-accent">
              H
            </div>
            <div>
              <p className="font-semibold text-foreground">{SITE_CONFIG.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{SITE_CONFIG.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Building AI systems and writing about what I learn along the way.
              </p>
              <Link
                href="/#contact"
                className="mt-3 inline-flex text-sm font-medium text-accent hover:underline"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* More articles */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-foreground">More Articles</h2>
            <div className="space-y-4">
              {otherPosts.map((other) => (
                <Link
                  key={other.id}
                  href={`/blog/${other.slug}`}
                  className="glass-card group flex items-start justify-between gap-4 rounded-xl p-4 transition-all hover:border-accent/20"
                >
                  <div>
                    <p className="font-medium text-foreground transition-colors group-hover:text-accent">
                      {other.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {formatDate(other.date)} · {other.readTime} min read
                    </p>
                  </div>
                  <ArrowLeft
                    size={16}
                    className="mt-1 flex-shrink-0 rotate-180 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name} ·{" "}
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>{" "}
            ·{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
