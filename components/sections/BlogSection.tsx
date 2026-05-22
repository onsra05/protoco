"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BLOG_POSTS } from "@/data/stats";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { formatDate } from "@/utils";
import type { BlogPost } from "@/types";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className="glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-accent/20"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mb-3 flex flex-wrap gap-1.5" aria-label="Post tags">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/15 bg-accent/5 px-2.5 py-0.5 text-[10px] font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mb-2 font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
        {post.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
          aria-label={`Read ${post.title}`}
        >
          Read
          <ArrowRight
            size={12}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="section-padding relative" aria-labelledby="blog-heading">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(139,92,246,0.06), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeader
          label="Writing"
          title="Technical"
          titleGradient="Articles"
          description="Deep dives into AI engineering, distributed systems, and modern backend architecture."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            View all articles
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
