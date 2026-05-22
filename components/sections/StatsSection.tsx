"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/data/stats";
import { useCounter } from "@/hooks/useCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { Stat } from "@/types";

function StatCounter({ stat, enabled }: { stat: Stat; enabled: boolean }) {
  const count = useCounter({
    end: stat.value,
    duration: 2000,
    enabled,
  });

  // Format: if value has decimals, show 2 decimal places
  const formatted =
    stat.value % 1 !== 0 ? count.toFixed(2) : Math.floor(count).toLocaleString();

  return (
    <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      <span aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix}`} aria-live="polite">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </span>
    </div>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-accent/20"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(59,130,246,0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <StatCounter stat={stat} enabled={inView} />

      <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className="section-padding"
      aria-labelledby="stats-heading"
    >
      <div className="section-container">
        <h2 id="stats-heading" className="sr-only">
          Key Statistics
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
