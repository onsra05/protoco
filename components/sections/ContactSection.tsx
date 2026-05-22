"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Github, Linkedin, Twitter, CheckCircle2, AlertCircle, Loader2, Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SITE_CONFIG } from "@/config/site";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { cn } from "@/utils";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400" role="alert">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = cn(
  "w-full rounded-xl border border-border bg-surface-1 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50",
  "transition-all duration-200 outline-none",
  "hover:border-accent/30 focus:border-accent/50 focus:bg-surface-2 focus:ring-1 focus:ring-accent/20"
);

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's build"
          titleGradient="something together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Left: Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">{SITE_CONFIG.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Find me online
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/hoanganh", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/hoanganh", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/hoanganh", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-accent/40 hover:bg-surface-2 hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-card space-y-5 rounded-2xl p-6 sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                </FormField>

                <FormField label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                </FormField>
              </div>

              <FormField label="Subject" error={errors.subject?.message}>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="What's this about?"
                  className={inputClass}
                  aria-invalid={!!errors.subject}
                />
              </FormField>

              <FormField label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={cn(inputClass, "resize-none")}
                  aria-invalid={!!errors.message}
                />
              </FormField>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                  role="status"
                >
                  <CheckCircle2 size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                  role="alert"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-white shadow-glow-blue transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                whileHover={status !== "loading" ? { scale: 1.02 } : undefined}
                whileTap={status !== "loading" ? { scale: 0.98 } : undefined}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
