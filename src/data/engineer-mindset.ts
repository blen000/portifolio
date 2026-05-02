/** Short, scannable bullets — how you approach real systems (no employer-specific detail). */
export const engineerMindsetBullets: string[] = [
  "Design APIs and data boundaries with least privilege, explicit scoping, and traceable change—especially where audit and access reviews matter.",
  "Separate online paths from batch work: keep user flows responsive; push reports, reconciliations, and heavy IO to jobs and queues.",
  "Treat payments, inventory, and completion records as consistency problems: transactions, idempotency keys, and unique constraints where duplicates would hurt trust.",
  "Prefer configuration and clear rules for recurring workflow change over one-off code branches, so operators can adapt without destabilizing core paths.",
  "Instrument errors and latency early; optimize from measured hotspots rather than assumed bottlenecks.",
];
