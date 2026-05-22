"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectModal } from "@/components/shared/ProjectModal";
import { PROJECTS } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/utils";
import type { Project } from "@/types";

const CATEGORY_LABELS: Record<Project["category"], string> = {
  ai: "AI",
  fullstack: "Fullstack",
  devops: "DevOps",
  systems: "Systems",
};

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      className="glass-card group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/20"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Top accent */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span
              className={cn(
                "mb-2 inline-block rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest",
                project.featured
                  ? "bg-accent/15 text-accent"
                  : "bg-surface-3 text-muted-foreground"
              )}
            >
              {project.featured ? "Featured" : CATEGORY_LABELS[project.category]}
            </span>
            <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-accent sm:text-lg">
              {project.title}
            </h3>
          </div>

          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.metrics.slice(0, 3).map((metric) => (
            <span
              key={metric}
              className="rounded-lg border border-green-500/10 bg-green-500/5 px-2 py-1 text-xs font-medium text-green-400"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge text-[11px]">
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="tech-badge text-[11px]">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={() => onOpen(project)}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          aria-label={`View ${project.title} details`}
        >
          View Details
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="section-padding"
        aria-labelledby="projects-heading"
      >
        <div className="section-container">
          <SectionHeader
            label="Projects"
            title="Things I've"
            titleGradient="built & shipped"
            description="Production systems and platforms across AI, backend, and fullstack engineering."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
