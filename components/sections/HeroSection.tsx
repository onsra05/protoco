"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { scrollToSection } from "@/utils";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 70%, rgba(139,92,246,0.08), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div
        className="animate-float-slow absolute left-[10%] top-[20%] h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="animate-float-slower absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={fadeIn} className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
              <span
                className="relative flex h-2 w-2"
                aria-label="Available for work"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-xs font-medium text-green-400">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block text-foreground">{SITE_CONFIG.fullName}</span>
            <span className="gradient-text block">builds the future</span>
            <span className="block text-foreground">of AI systems.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            <Sparkles
              size={18}
              className="mr-2 inline text-accent"
              aria-hidden="true"
            />
            {SITE_CONFIG.title} — building intelligent infrastructure at the intersection of
            large-scale AI, distributed systems, and modern web engineering.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-wrap items-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow-blue transition-all hover:bg-blue-500 hover:shadow-glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ArrowDown size={16} aria-hidden="true" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-1 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.button>

            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/hoanganh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/hoanganh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-8 border-t border-border pt-8"
          >
            {[
              { value: "7+", label: "Years Experience" },
              { value: "40+", label: "Projects Shipped" },
              { value: "10M+", label: "Daily API Req" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="gradient-text text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            scroll
          </span>
          <ArrowDown size={14} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
