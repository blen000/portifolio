import type { FC } from "react";
import Image from "next/image";

const SHOT_SRC: Record<string, string> = {
  "audit-platform": "/projects/audit-dashboard.png",
  "event-ticketing": "/projects/event-dashboard.png",
  "enterprise-lms": "/projects/training-dashboard.png",
};

interface ProjectScreenshotProps {
  slug: string;
  /** Accessible description of what the screenshot represents */
  alt: string;
  figureClassName?: string;
}

export const ProjectScreenshot: FC<ProjectScreenshotProps> = ({ slug, alt, figureClassName }) => {
  const src = SHOT_SRC[slug];
  if (!src) return null;

  return (
    <figure
      className={
        figureClassName ??
        "overflow-hidden rounded-lg border border-primary/15 bg-muted/30 shadow-inner"
      }
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full object-cover"
        priority={false}
        unoptimized
      />
      <figcaption className="border-t bg-muted/20 px-3 py-2 text-center text-xs text-muted-foreground">
        Preview (demo data, no sensitive info)
      </figcaption>
    </figure>
  );
};
