"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Check, Zap } from "lucide-react";
import { overlayVariants, modalVariants } from "@/lib/animations";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);


  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>

          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />


          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-x-4 inset-y-4 z-50 mx-auto my-auto max-h-[calc(100vh-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface-1 shadow-2xl sm:inset-x-6"
          >
            <div className="p-6 sm:p-8">

              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="modal-title"
                    className="text-xl font-bold text-foreground sm:text-2xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground capitalize">
                    {project.category.replace("-", " ")}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>


              <p className="mb-6 leading-relaxed text-muted-foreground">
                {project.longDescription}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  // Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-xl border border-accent/10 bg-accent/5 px-4 py-3 text-center"
                    >
                      <span className="text-sm font-semibold text-accent">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  // Architecture
                </h3>
                <ul className="space-y-2">
                  {project.architectureHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="mb-8">
                <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  // Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Github size={16} />
                  View Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500"
                  >
                    <Zap size={16} />
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
