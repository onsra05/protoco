"use client";

import { motion } from "framer-motion";
import { Brain, Server, Layers, Cloud, Cpu, Zap } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SKILLS } from "@/data/skills";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { Skill, SkillItem } from "@/types";
import { cn } from "@/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  brain: Brain,
  server: Server,
  layers: Layers,
  cloud: Cloud,
  cpu: Cpu,
  zap: Zap,
};

const proficiencyColor: Record<SkillItem["proficiency"], string> = {
  expert: "text-green-400",
  advanced: "text-blue-400",
  intermediate: "text-yellow-400",
};

const proficiencyDot: Record<SkillItem["proficiency"], string> = {
  expert: "bg-green-400",
  advanced: "bg-blue-400",
  intermediate: "bg-yellow-400",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = iconMap[skill.icon] ?? Brain;

  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-accent/20"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      aria-label={`${skill.category} skills`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(59,130,246,0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
            <Icon size={20} className="text-accent" aria-hidden="true" />
          </div>
          <h3 className="font-semibold text-foreground">{skill.category}</h3>
        </div>
        <span className="font-mono text-xs font-bold text-accent">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div
        className="mb-5 h-1 overflow-hidden rounded-full bg-surface-3"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.level}% proficiency`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Skills list */}
      <ul className="space-y-2" aria-label={`${skill.category} technologies`}>
        {skill.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={cn("h-1.5 w-1.5 rounded-full", proficiencyDot[item.proficiency])}
                aria-hidden="true"
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span className={cn("text-xs font-medium capitalize", proficiencyColor[item.proficiency])}>
              {item.proficiency}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding relative"
      aria-labelledby="skills-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(139,92,246,0.06), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <SectionHeader
          label="Skills"
          title="What I"
          titleGradient="specialize in"
          description="A comprehensive view of my technical expertise, from AI engineering to cloud infrastructure."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
