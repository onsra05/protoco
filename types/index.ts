// Core domain types for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  imageAlt: string;
}

export type ProjectCategory = "ai" | "fullstack" | "devops" | "systems";

export interface Skill {
  id: string;
  category: string;
  icon: string;
  items: SkillItem[];
  level: number; // 0-100
}

export interface SkillItem {
  name: string;
  proficiency: "expert" | "advanced" | "intermediate";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  current?: boolean;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  slug: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TerminalCommand {
  command: string;
  output: string | string[];
}

// Animation types
export interface MotionVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
  exit?: Record<string, unknown>;
}
