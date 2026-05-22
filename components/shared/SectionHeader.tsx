"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleGradient?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  titleGradient,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {/* Label chip */}
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {label}
        </span>
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
        {titleGradient && (
          <>
            {" "}
            <span className="gradient-text">{titleGradient}</span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : ""
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
