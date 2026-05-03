import type { FC } from "react";

interface EngineerMindsetProps {
  bullets: string[];
}

const EngineerMindset: FC<EngineerMindsetProps> = ({ bullets }) => {
  return (
    <section id="how-i-think" className="mb-12 scroll-mt-28">
      <div className="rounded-xl border border-primary/20 bg-card bg-gradient-to-br from-secondary/40 via-card to-transparent px-5 py-6 shadow-sm md:px-8 md:py-8">
        <h2 className="font-headline text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">How I think as an engineer</h2>
        <p className="mt-2 max-w-2xl text-xs text-muted-foreground md:text-sm">
          How I approach internal, high-stakes products—readable in a few seconds.
        </p>
        <ul className="mt-6 space-y-2.5 text-left md:space-y-3">
          {bullets.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-snug text-foreground md:text-[15px]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EngineerMindset;
