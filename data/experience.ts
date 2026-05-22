import type { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: "senior-ai-engineer",
    role: "Senior AI Systems Engineer",
    company: "TechCorp AI",
    period: "2023 – Present",
    current: true,
    description:
      "Leading the design and deployment of production AI infrastructure serving millions of users globally.",
    highlights: [
      "Architected LLM inference platform reducing latency by 70% and cost by 60%",
      "Built multi-tenant RAG system indexed over 50TB of enterprise knowledge",
      "Led a team of 5 engineers across AI platform and backend systems",
      "Established MLOps practices reducing model deployment time from weeks to hours",
    ],
    techStack: ["Python", "Rust", "Kubernetes", "CUDA", "FastAPI", "Kafka"],
  },
  {
    id: "fullstack-engineer",
    role: "Fullstack Engineer",
    company: "StartupXYZ",
    period: "2021 – 2023",
    description:
      "Full-stack ownership of a SaaS analytics platform from 0 to $5M ARR.",
    highlights: [
      "Built real-time analytics pipeline processing 1M+ events/sec",
      "Designed and shipped 3 major product features that drove 40% revenue growth",
      "Reduced infrastructure costs by 35% through optimization and right-sizing",
      "Mentored 3 junior engineers and established frontend architecture standards",
    ],
    techStack: ["Next.js", "TypeScript", "Go", "PostgreSQL", "ClickHouse", "AWS"],
  },
  {
    id: "backend-engineer",
    role: "Backend Engineer",
    company: "FinTech Solutions",
    period: "2019 – 2021",
    description:
      "Core backend engineer for a high-frequency trading and payments infrastructure.",
    highlights: [
      "Implemented distributed transaction system with zero data loss guarantees",
      "Optimized critical payment paths achieving sub-5ms p99 latency",
      "Migrated monolithic system to microservices architecture",
      "Designed compliance-ready audit logging system handling 500M events/day",
    ],
    techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "gRPC"],
  },
  {
    id: "software-engineer",
    role: "Software Engineer",
    company: "Agency Vietnam",
    period: "2017 – 2019",
    description:
      "Fullstack development for enterprise clients across healthcare and e-commerce verticals.",
    highlights: [
      "Delivered 10+ client projects on time and within budget",
      "Built e-commerce platform handling Black Friday traffic spikes (100x baseline)",
      "Introduced automated testing practices improving code quality by measurable metrics",
      "Led technical discovery and estimation for enterprise RFPs",
    ],
    techStack: ["Node.js", "React", "MySQL", "Docker", "AWS"],
  },
];
