import type { Stat, BlogPost } from "@/types";

export const STATS: Stat[] = [
  { id: "experience", label: "Years Experience", value: 7, suffix: "+" },
  { id: "projects", label: "Projects Shipped", value: 40, suffix: "+" },
  { id: "requests", label: "Daily API Requests", value: 10, suffix: "M+" },
  { id: "uptime", label: "System Uptime", value: 99.99, suffix: "%" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Building Production LLM Inference at Scale",
    excerpt:
      "Deep dive into continuous batching, KV-cache optimization, and multi-node tensor parallelism for serving LLMs at 10M+ requests per day.",
    date: "2024-11-15",
    readTime: 12,
    tags: ["AI", "Infrastructure", "Performance"],
    slug: "building-production-llm-inference",
  },
  {
    id: "2",
    title: "RAG Beyond Basics: Hybrid Search and Re-ranking",
    excerpt:
      "Why naive RAG systems fail in production, and how combining BM25 sparse retrieval with dense embeddings and cross-encoder re-ranking achieves 95%+ accuracy.",
    date: "2024-10-28",
    readTime: 10,
    tags: ["AI", "RAG", "Search"],
    slug: "rag-hybrid-search-reranking",
  },
  {
    id: "3",
    title: "Event Sourcing in Distributed Systems: Lessons Learned",
    excerpt:
      "Practical lessons from implementing event sourcing at scale — pitfalls, schema evolution strategies, and how to avoid common gotchas that kill performance.",
    date: "2024-09-20",
    readTime: 8,
    tags: ["Architecture", "Distributed Systems", "Backend"],
    slug: "event-sourcing-distributed-systems",
  },
  {
    id: "4",
    title: "GitOps at Scale: From Chaos to Controlled Deployments",
    excerpt:
      "How we moved 500+ microservices to a GitOps model using ArgoCD, reducing deployment failures by 90% and giving developers true self-service infrastructure.",
    date: "2024-08-05",
    readTime: 7,
    tags: ["DevOps", "GitOps", "Kubernetes"],
    slug: "gitops-at-scale",
  },
  {
    id: "5",
    title: "Go vs Rust for Systems Programming: A Pragmatic Comparison",
    excerpt:
      "After building production systems in both languages, here's a nuanced breakdown of when to choose Go's simplicity vs Rust's performance guarantees.",
    date: "2024-07-12",
    readTime: 9,
    tags: ["Go", "Rust", "Systems"],
    slug: "go-vs-rust-systems-programming",
  },
  {
    id: "6",
    title: "The Hidden Cost of Microservices: When to Stay Monolithic",
    excerpt:
      "A frank look at the real operational burden of microservices and a framework for deciding when a well-structured monolith is actually the better engineering choice.",
    date: "2024-06-30",
    readTime: 6,
    tags: ["Architecture", "Backend", "Engineering"],
    slug: "hidden-cost-microservices",
  },
];
