export interface CaseStudy {
  slug: string;
  title: string;
  /** Short label for Quick Overview chips, e.g. "Audit Platform" */
  overviewBadge: string;
  /** Skim line shown under badge in Quick Overview */
  overviewSummary: string;
  /** Accessible label for screenshot */
  screenshotAlt: string;
  /** What it is — 1–2 short lines, plain language */
  whatItIs: string;
  /** 4–6 bullets: strongest technical points only */
  highlights: string[];
  /** Impact — 1–2 short lines */
  impact: string;
  /** Single-line stack, no duplication */
  techStack: string;
  repoUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "audit-platform",
    title: "Adaptive Audit Management Platform",
    overviewBadge: "Audit Platform",
    overviewSummary: "Audit workflows, approvals, and compliance tracking",
    screenshotAlt: "Audit admin dashboard preview with charts and mission list — demo data",
    whatItIs:
      "A workflow platform for audit missions, evidence, and sign-offs with a full tamper-evident history. Built for teams that need consistent process and defensible records—not ad-hoc spreadsheets.",
    highlights: [
      "Fine-grained RBAC aligned to auditor, reviewer, and leadership roles",
      "Configurable stages (missions, checklists, approvals) without shipping new code for every process tweak",
      "Append-only activity and entity history for review and compliance queries",
      "Heavy reporting and exports offloaded to background jobs so the UI stays fast under load",
      "Signed, direct-to-object-storage uploads for evidence with minimal server overhead",
      "Pagination and scoped queries designed for large programs and concurrent work",
    ],
    impact:
      "Replaced fragmented tracking with one system of record for assignments, findings, and closure—cutting coordination overhead and making reviews auditable by design.",
    techStack: "Node.js · TypeScript · Next.js · React · PostgreSQL · Prisma · WebSockets · Auth (OAuth/JWT) · Object storage · CI/CD",
    repoUrl: "https://github.com/blen000",
  },
  {
    slug: "event-ticketing",
    title: "Unified Event Ticketing Platform",
    overviewBadge: "Event Ticketing",
    overviewSummary: "Payments, inventory, and QR-based validation",
    screenshotAlt: "Event ticketing dashboard preview with sales charts and QR check-in — demo data",
    whatItIs:
      "A full-stack ticketing product: catalog, checkout, inventory, staff tools, and entry validation. Optimistic for peak sales; conservative where money and inventory must agree.",
    highlights: [
      "DB transactions + time-boxed holds and distributed locks (e.g. Redis) to prevent overselling",
      "Idempotent payment webhooks and server-side intent state for clean reconciliation",
      "Single-use QR semantics and rate limits to reduce fraud and duplicate entry",
      "Offline-tolerant check-in patterns with sync and manual fallback",
      "Role-based admin for sales, attendees, and operations",
      "Signed uploads and CDN-backed media to keep surfaces fast",
    ],
    impact:
      "Tightened revenue and inventory accuracy while shortening door queues and support churn around failed or duplicate purchases.",
    techStack: "Next.js · React · TypeScript · Node.js · PostgreSQL · Prisma · Redis · Stripe · Docker · GitHub Actions",
    repoUrl: "https://github.com/blen000",
  },
  {
    slug: "enterprise-lms",
    title: "Enterprise Learning & Training Platform",
    overviewBadge: "Training Platform",
    overviewSummary: "Multi-tenant LMS with tracking and reporting",
    screenshotAlt: "Learning platform dashboard preview with course cards and progress — demo data",
    whatItIs:
      "A provider-scoped learning system for self-paced and instructor-led training, progress, purchases, and leadership reporting—without mixing tenant data.",
    highlights: [
      "Tenant-scoped data model and indexes so every query is explicitly bounded",
      "Idempotent progress and completion writes (constraints + server checks) under concurrent learners",
      "Short-lived access tokens, refresh rotation, and admin-driven session invalidation",
      "Reliable email via queued delivery and provider fallback for critical notices",
      "Exports and charts for completion and engagement without exposing raw PII broadly",
    ],
    impact:
      "Gave operations one place to run programs, prove completion, and report upward—reducing manual reconciliation and support tickets around access and records.",
    techStack: "Next.js · React · TypeScript · PostgreSQL · Prisma · Radix · Tailwind · Zod · JWT · SES · nodemailer",
    repoUrl: "https://github.com/blen000",
  },
];
