"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { SITE_CONFIG } from "@/config/site";

const TECH_BADGES = [
  "Python", "Go", "Rust", "TypeScript",
  "PyTorch", "LangChain", "Next.js", "FastAPI",
  "Kubernetes", "AWS", "PostgreSQL", "Kafka",
  "Redis", "Terraform", "Docker", "gRPC",
];

const HIGHLIGHTS = [
  { icon: Code2, text: "7+ years building production systems at scale" },
  { icon: Coffee, text: "Specialist in LLM inference & RAG architecture" },
  { icon: MapPin, text: `Based in ${SITE_CONFIG.location}` },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="The engineer"
          titleGradient="behind the code"
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m <strong className="font-semibold text-foreground">HoangAnh</strong>, an AI
              Systems Engineer with a deep focus on building intelligent infrastructure that
              actually ships to production. My work sits at the intersection of machine learning
              engineering, distributed systems, and modern full-stack development.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;ve spent the last 7 years designing and operating systems that handle millions
              of requests daily — from low-latency LLM inference platforms to real-time analytics
              pipelines and enterprise RAG systems. I care deeply about{" "}
              <em className="text-foreground">correctness, observability, and developer experience</em>
              .
            </p>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              When I&apos;m not architecting systems, I write technical articles about AI
              engineering, distributed systems, and the practical realities of building at scale.
            </p>


            <div className="space-y-3 pt-4">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={16} className="text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>


          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-accent">
                // Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {TECH_BADGES.map((tech, i) => (
                  <motion.span
                    key={tech}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="tech-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-border bg-background/60 p-4 font-mono text-xs leading-relaxed">
                <div className="text-muted-foreground/60">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">engineer</span>{" "}
                  <span className="text-muted-foreground">= {"{"}</span>
                </div>
                <div className="pl-4 text-muted-foreground/60">
                  <span className="text-green-400">name</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-yellow-400">&quot;HoangAnh&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4 text-muted-foreground/60">
                  <span className="text-green-400">focus</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-yellow-400">&quot;AI + Systems&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-4 text-muted-foreground/60">
                  <span className="text-green-400">available</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-blue-400">true</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="text-muted-foreground/60">{"}"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
