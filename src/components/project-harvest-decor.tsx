"use client";

import type { FC } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

/** Small clustered hex motif — evokes cells filled after foraging */
export const HoneyClusterAccent: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    fill="none"
    className={cn("text-primary", className)}
    aria-hidden
  >
    <path
      fill="currentColor"
      fillOpacity={0.12}
      stroke="currentColor"
      strokeOpacity={0.35}
      strokeWidth={0.75}
      d="M36 6 56 17.8v23.7L36 53.5 16 41.6V17.9L36 6Z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.08}
      stroke="currentColor"
      strokeOpacity={0.25}
      strokeWidth={0.6}
      d="m52 41.8 17 10v16.4l-17 10-17.2-10V51.9l17-10.2Z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.1}
      stroke="currentColor"
      strokeOpacity={0.3}
      strokeWidth={0.6}
      d="m20 42 17 9.9v17.9L20 80 3 70V52.1l17-10.1Z"
    />
  </svg>
);

/** Soft golden drip — metaphor for distilled output */
export const HoneyDripRibbon: FC<{ className?: string }> = ({ className }) => {
  const gradId = useId().replace(/:/g, "");
  const href = `url(#${gradId})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 56"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1={0} y1={0} x2={160} y2={56} gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" stopOpacity={0.9} />
          <stop offset={0.5} stopColor="#d97706" stopOpacity={0.85} />
          <stop offset={1} stopColor="#b45309" stopOpacity={0.65} />
        </linearGradient>
      </defs>
      <path fill={href} fillOpacity={0.45} d="M0 8c26 0 40 18 62 22s54-14 74-22c12-5 24-9 36-10v42H0V8z" />
      <ellipse cx={130} cy={48} rx={8} ry={11} fill={href} fillOpacity={0.35} />
      <ellipse cx={110} cy={50} rx={6} ry={9} fill={href} fillOpacity={0.28} />
    </svg>
  );
};

export const HarvestDivider: FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex items-center gap-4", className)}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" aria-hidden />
    <HoneyClusterAccent className="h-8 w-8 shrink-0 opacity-90" />
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" aria-hidden />
  </div>
);
