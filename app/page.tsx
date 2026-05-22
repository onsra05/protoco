import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";

// Dynamically import below-the-fold sections for performance
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection").then((m) => m.AboutSection),
  { loading: () => <SectionLoader /> }
);
const SkillsSection = dynamic(
  () => import("@/components/sections/SkillsSection").then((m) => m.SkillsSection),
  { loading: () => <SectionLoader /> }
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection),
  { loading: () => <SectionLoader /> }
);
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection").then((m) => m.ExperienceSection),
  { loading: () => <SectionLoader /> }
);
const StatsSection = dynamic(
  () => import("@/components/sections/StatsSection").then((m) => m.StatsSection),
  { loading: () => <SectionLoader /> }
);
const TerminalSection = dynamic(
  () => import("@/components/sections/TerminalSection").then((m) => m.TerminalSection),
  { loading: () => <SectionLoader /> }
);
const BlogSection = dynamic(
  () => import("@/components/sections/BlogSection").then((m) => m.BlogSection),
  { loading: () => <SectionLoader /> }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((m) => m.ContactSection),
  { loading: () => <SectionLoader /> }
);

function SectionLoader() {
  return <div className="h-32 w-full animate-pulse bg-surface-1" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <StatsSection />
        <TerminalSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
