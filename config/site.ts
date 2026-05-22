import type { NavItem, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Hoang Anh",
  fullName: "Nguyen Hoang Anh",
  title: "AI Systems Engineer & Fullstack Developer",
  description:
    "Building intelligent systems at the intersection of AI, backend architecture, and modern web engineering.",
  url: "https://hoanganh.dev",
  email: "hoanganh54321.oc@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  avatar: "/images/avatar.jpg",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/onsra05",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/hoanganh",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/iam_daau",
    icon: "twitter",
  },
];

export const TERMINAL_PROMPT = "hoanganh@portfolio:~$";
