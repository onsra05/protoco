import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

const SOCIALS = [
  { icon: "github" as const, href: "https://github.com/onsra05", label: "GitHub" },
  { icon: "linkedin" as const, href: "https://linkedin.com/in/hoanganh", label: "LinkedIn" },
  { icon: "twitter" as const, href: "https://twitter.com/hoanganh", label: "Twitter" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-accent">©</span> {year} {SITE_CONFIG.name}. Built with Next.js &
          Framer Motion.{" "}
          <Link
            href="/privacy-policy"
            className="underline-offset-2 hover:text-accent hover:underline"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex items-center gap-4" role="list" aria-label="Social links">
          {SOCIALS.map(({ icon, href, label }) => {
            const Icon = socialIcons[icon];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
