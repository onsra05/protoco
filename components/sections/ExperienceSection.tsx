"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EXPERIENCES } from "@/data/experience";
import { timelineItem } from "@/lib/animations";
import type { Experience } from "@/types";

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  return (
    <motion.div
      variants={timelineItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      className="relative flex gap-6 pl-8 sm:gap-8 sm:pl-10"
    >
      {/* Vertical line */}
      {index < EXPERIENCES.length - 1 && (
        <div
          className="absolute left-[11px] top-8 h-full w-px bg-gradient-to-b from-accent/30 to-transparent sm:left-[13px]"
          aria-hidden="true"
        />
      )}

      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface-1 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        {exp.current ? (
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
        ) : (
          <span className="h-2 w-2 rounded-full bg-border" />
        )}
      </div>

      {/* Content */}
      <article className="glass-card mb-8 flex-1 rounded-2xl p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm font-medium text-accent">{exp.company}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
            {exp.current && (
              <span className="rounded-full bg-green-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-green-400">
                Current
              </span>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>

        <ul className="mb-4 space-y-1.5" aria-label="Key highlights">
          {exp.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {exp.techStack.map((tech) => (
            <span key={tech} className="tech-badge text-[11px]">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-labelledby="experience-heading"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(59,130,246,0.06), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="section-container relative">
        <SectionHeader
          label="Experience"
          title="Career"
          titleGradient="Timeline"
          description="7+ years of building impactful systems across AI, backend, and fullstack engineering."
        />

        <div className="mx-auto max-w-3xl">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
