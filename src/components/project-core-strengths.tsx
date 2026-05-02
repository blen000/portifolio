import type { FC } from "react";

interface ProjectCoreStrengthsProps {
  items: string[];
}

const ProjectCoreStrengths: FC<ProjectCoreStrengthsProps> = ({ items }) => {
  return (
    <div className="rounded-xl border border-primary/25 bg-card px-5 py-6 shadow-sm md:px-8 md:py-8">
      <h3 className="text-center font-headline text-lg font-semibold tracking-tight sm:text-left md:text-xl">
        Core strengths demonstrated
      </h3>
      <p className="mt-2 text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
        Patterns reflected across the work above—not buzzwords for their own sake.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((label) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-lg border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground md:text-[15px]"
          >
            <span className="text-primary">•</span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCoreStrengths;
