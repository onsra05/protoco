import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ai-inference-engine",
    title: "AI Inference Engine",
    description:
      "High-throughput LLM inference platform serving 10M+ requests/day with sub-100ms p99 latency.",
    longDescription:
      "A production-grade AI inference platform built for scale. Implements custom batching strategies, KV-cache optimization, and intelligent request routing across GPU clusters. Features real-time monitoring, auto-scaling, and a developer-friendly API.",
    techStack: ["Python", "Rust", "CUDA", "Kubernetes", "Redis", "FastAPI", "Prometheus"],
    metrics: ["10M+ req/day", "< 100ms p99", "99.99% uptime", "60% cost reduction"],
    architectureHighlights: [
      "Continuous batching for maximum GPU utilization",
      "Speculative decoding for 3x throughput improvement",
      "Multi-node tensor parallelism",
      "Zero-downtime deployments with rolling updates",
    ],
    githubUrl: "https://github.com/hoanganh/ai-inference-engine",
    liveUrl: "https://inference.hoanganh.dev",
    featured: true,
    category: "ai",
    imageAlt: "AI Inference Engine architecture diagram",
  },
  {
    id: "distributed-workflow-engine",
    title: "Distributed Workflow Engine",
    description:
      "Fault-tolerant workflow orchestration system handling complex DAG execution at scale.",
    longDescription:
      "A distributed workflow engine inspired by Apache Airflow but built for microservices. Supports dynamic DAG generation, distributed locking, at-least-once execution guarantees, and real-time observability.",
    techStack: ["Go", "PostgreSQL", "Redis", "gRPC", "Docker", "Temporal"],
    metrics: ["500K workflows/day", "< 10ms scheduling", "Zero data loss", "Multi-region"],
    architectureHighlights: [
      "Event-sourced workflow state management",
      "Saga pattern for distributed transactions",
      "Pluggable executor backends",
      "Automatic retry with exponential backoff",
    ],
    githubUrl: "https://github.com/hoanganh/workflow-engine",
    featured: true,
    category: "systems",
    imageAlt: "Workflow engine topology visualization",
  },
  {
    id: "rag-platform",
    title: "Enterprise RAG Platform",
    description:
      "Production RAG system with hybrid search, re-ranking, and multi-tenant knowledge bases.",
    longDescription:
      "A complete Retrieval-Augmented Generation platform for enterprise use. Combines dense and sparse retrieval, cross-encoder re-ranking, and LLM generation with citation tracking. Supports hundreds of concurrent tenants.",
    techStack: ["Python", "Next.js", "PostgreSQL", "pgvector", "OpenAI", "LangChain", "Celery"],
    metrics: ["95% answer accuracy", "2s avg latency", "100+ tenants", "50TB+ indexed"],
    architectureHighlights: [
      "Hybrid BM25 + dense vector retrieval",
      "Hierarchical document chunking",
      "Tenant-isolated vector namespaces",
      "Streaming response generation",
    ],
    githubUrl: "https://github.com/hoanganh/rag-platform",
    liveUrl: "https://rag.hoanganh.dev",
    featured: true,
    category: "ai",
    imageAlt: "RAG platform architecture",
  },
  {
    id: "devops-platform",
    title: "Internal DevOps Platform",
    description:
      "Self-service developer platform with CI/CD, infrastructure provisioning, and cost management.",
    longDescription:
      "A Backstage-inspired internal developer platform that unifies CI/CD pipelines, cloud resource provisioning, secret management, and cost attribution. Reduced deployment time from hours to minutes.",
    techStack: ["TypeScript", "Next.js", "Terraform", "ArgoCD", "Vault", "AWS", "Pulumi"],
    metrics: ["10x faster deploys", "40% cost savings", "500+ services", "Zero-touch infra"],
    architectureHighlights: [
      "GitOps-first deployment model",
      "Policy-as-code with OPA",
      "Dynamic secret injection via Vault",
      "FinOps integration with anomaly detection",
    ],
    githubUrl: "https://github.com/hoanganh/devops-platform",
    featured: false,
    category: "devops",
    imageAlt: "DevOps platform dashboard screenshot",
  },
  {
    id: "realtime-analytics",
    title: "Real-time Analytics Engine",
    description:
      "Stream processing pipeline ingesting 1M+ events/sec with sub-second query latency.",
    longDescription:
      "A high-performance analytics system built on Kafka and ClickHouse. Supports complex aggregations, time-series analysis, and real-time dashboards. Handles bursty traffic with automatic backpressure management.",
    techStack: ["Kafka", "ClickHouse", "Flink", "Go", "Grafana", "React"],
    metrics: ["1M+ events/sec", "< 500ms query P99", "PB-scale storage", "99.9% SLA"],
    architectureHighlights: [
      "Lambda + Kappa hybrid architecture",
      "Materialized view pre-computation",
      "Adaptive micro-batching",
      "Column-store query optimization",
    ],
    githubUrl: "https://github.com/hoanganh/realtime-analytics",
    featured: false,
    category: "systems",
    imageAlt: "Real-time analytics dashboard",
  },
  {
    id: "ai-code-review",
    title: "AI Code Review Assistant",
    description:
      "LLM-powered code review bot that provides contextual feedback, security scanning, and refactoring suggestions.",
    longDescription:
      "An intelligent code review system that integrates with GitHub PRs. Uses specialized fine-tuned models for different languages, performs static analysis, detects security vulnerabilities, and suggests architectural improvements.",
    techStack: ["Python", "FastAPI", "OpenAI", "GitHub API", "Tree-sitter", "Redis"],
    metrics: ["80% false positive reduction", "3x faster reviews", "1000+ repos", "15 languages"],
    architectureHighlights: [
      "AST-aware code understanding",
      "Contextual diff analysis",
      "Fine-tuned language-specific models",
      "Integration with SAST tools",
    ],
    githubUrl: "https://github.com/hoanganh/ai-code-review",
    liveUrl: "https://codereview.hoanganh.dev",
    featured: false,
    category: "ai",
    imageAlt: "AI code review interface",
  },
];
