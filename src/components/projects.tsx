import type { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/data/case-studies";
import EngineerMindset from "@/components/engineer-mindset";
import ProjectCoreStrengths from "@/components/project-core-strengths";
import { ProjectScreenshot } from "@/components/project-screenshot";
import { HarvestDivider, HoneyClusterAccent, HoneyDripRibbon } from "@/components/project-harvest-decor";
import { ExternalLink, Github, Hexagon, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  projects: CaseStudy[];
  engineerMindsetBullets: string[];
  coreStrengths: readonly string[];
}

const HoneyCellOverviewLink: FC<{
  project: CaseStudy;
  index: number;
}> = ({ project, index }) => (
  <Link
    href={`#${project.slug}`}
    prefetch={false}
    className="group relative flex min-h-[9.5rem] flex-col overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-secondary/45 to-primary/5 text-left shadow-sm ring-1 ring-primary/10 transition hover:border-primary/45 hover:from-secondary/60 hover:via-card hover:to-primary/15 hover:shadow-lg hover:shadow-amber-900/10 hover:ring-2 hover:ring-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:shadow-amber-600/15"
  >
    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-80" aria-hidden />
    <span className="relative flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
      <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 font-headline text-xs font-bold tracking-tighter text-primary dark:bg-primary/25">
        {String(index).padStart(2, "0")}
      </span>
      <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 font-headline text-sm font-semibold text-primary shadow-sm shadow-amber-800/10">
        <Hexagon className="h-3.5 w-3.5 opacity-70" aria-hidden />
        {project.overviewBadge}
      </span>
      <span className="mt-3 flex-1 text-sm font-medium leading-snug text-foreground group-hover:text-primary md:text-[15px]">{project.overviewSummary}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary/70 transition group-hover:text-primary">
        Open case study
        <span aria-hidden className="translate-x-0 transition group-hover:translate-x-1">
          →
        </span>
      </span>
      <HoneyClusterAccent className="pointer-events-none absolute -bottom-3 left-1/2 h-16 w-16 -translate-x-1/2 opacity-35 transition-opacity group-hover:opacity-55" />
    </span>
  </Link>
);

const HarvestScreenshotFrame: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative">
    <div
      aria-hidden
      className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-amber-400/25 blur-3xl dark:bg-primary/25"
    />
    <div
      className="rounded-2xl bg-gradient-to-br from-amber-300/95 via-primary to-amber-900/90 p-[3px] shadow-xl shadow-amber-900/20 dark:from-amber-500/85 dark:via-primary dark:to-amber-950/95 dark:shadow-amber-950/40"
    >
      <div className="overflow-hidden rounded-[13px] bg-card">{children}</div>
    </div>
    <Hexagon className="absolute -bottom-3 -right-2 h-8 w-8 text-primary/40 drop-shadow-md dark:text-amber-400/50" aria-hidden />
    <Hexagon className="absolute -left-1 top-10 h-5 w-5 text-primary/30 dark:text-primary/45" aria-hidden />
  </div>
);

const Projects: FC<ProjectsProps> = ({ projects, engineerMindsetBullets, coreStrengths }) => {
  return (
    <section id="projects" className="relative w-full overflow-hidden bg-muted/30">
      <div className="pointer-events-none absolute inset-0 bg-pattern-honeycomb opacity-[0.2] dark:opacity-[0.15]" aria-hidden />
      <div className="pointer-events-none absolute -right-[12%] top-28 h-72 w-72 rounded-full bg-amber-300/24 blur-[100px] dark:bg-primary/20" aria-hidden />
      <div className="pointer-events-none absolute bottom-40 -left-[8%] h-52 w-52 rounded-full bg-primary/14 blur-[80px]" aria-hidden />

      <div className="relative z-[1] container max-w-6xl px-4 md:px-6">
        <header className="relative mx-auto max-w-3xl pb-12 pt-16 text-center md:pb-14 md:pt-20">
          <div className="pointer-events-none absolute left-1/2 top-0 w-[min(100%,28rem)] -translate-x-1/2 opacity-90 dark:opacity-80">
            <HoneyDripRibbon className="h-auto w-full" />
          </div>
          <div className="relative flex flex-col items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 font-headline text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <HoneyClusterAccent className="h-5 w-5 text-primary" />
              The harvest
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground md:text-base">
              Each build here is a cell in the comb—real systems shaped by security, concurrency, and operational constraints. Skim the overview, then land in a case study for depth.
            </p>
          </div>
          <HarvestDivider className="mt-10" />
        </header>

        {/* Quick scan — narrative band + full-width honey cells */}
        <div className="mb-14 space-y-10">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_minmax(200px,280px)] lg:items-start lg:gap-12">
            <div className="relative space-y-4">
              <HoneyClusterAccent className="absolute -left-2 top-0 h-24 w-24 opacity-50 dark:opacity-40" aria-hidden />
              <div className="relative max-w-2xl">
                <h3 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl">Quick overview</h3>
                <p className="mt-2 text-muted-foreground">
                  Honey is the payoff after steady foraging—these capsules are the clearest &ldquo;fruit&rdquo; of the work: jump in, then scroll for the full case study.
                </p>
              </div>
              <HoneyDripRibbon className="mx-auto h-auto w-full max-w-xs opacity-80 sm:mx-0" />
            </div>
            <div className="relative flex min-h-[12rem] items-center justify-center rounded-2xl border border-dashed border-primary/20 bg-primary/[0.04] p-6 dark:bg-primary/[0.07]">
              <HoneyClusterAccent className="h-32 w-32 text-primary opacity-80 dark:opacity-70" />
              <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-headline text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/60">
                Filled cells
              </p>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute inset-x-10 -top-4 h-28 rounded-full bg-amber-200/20 blur-3xl dark:bg-primary/12" aria-hidden />
            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {projects.map((p, index) => (
                <HoneyCellOverviewLink key={p.slug} project={p} index={index + 1} />
              ))}
            </div>
          </div>
        </div>

        <EngineerMindset bullets={engineerMindsetBullets} />

        {/* Case studies — alternating visual weight */}
        <div className="flex flex-col gap-14 pb-12 md:gap-16 md:pb-16">
          {projects.map((project, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <article key={project.slug} id={project.slug} className="scroll-mt-24">
                <Card className="overflow-visible border-primary/15 bg-card/95 shadow-md ring-1 ring-primary/10">
                  <CardContent className="space-y-0 p-0 sm:p-0">
                    <div className="flex flex-col gap-5 border-b border-primary/15 bg-gradient-to-r from-secondary/35 via-transparent to-primary/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
                      <div className="space-y-1.5">
                        <p className="flex flex-wrap items-center gap-2 font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          <span className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] text-primary md:text-[11px]">
                            Yield {idx + 1}/{projects.length}
                          </span>
                          <span className="text-muted-foreground">Case study</span>
                        </p>
                        <h3 className="font-headline text-xl font-bold tracking-tight sm:text-2xl md:text-[1.65rem]">{project.title}</h3>
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                        {project.repoUrl ? (
                          <Button variant="outline" size="sm" className="rounded-full border-primary/30" asChild>
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" aria-hidden />
                              View code
                            </Link>
                          </Button>
                        ) : null}
                        {project.demoUrl ? (
                          <Button size="sm" className="rounded-full shadow-md shadow-amber-900/15 dark:shadow-amber-500/20" asChild>
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" aria-hidden />
                              Demo
                            </Link>
                          </Button>
                        ) : null}
                        {project.videoUrl ? (
                          <Button variant="secondary" size="sm" className="rounded-full" asChild>
                            <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                              <PlayCircle className="mr-2 h-4 w-4" aria-hidden />
                              Video
                            </Link>
                          </Button>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid gap-8 px-5 py-7 sm:gap-10 sm:px-8 sm:py-9 lg:grid-cols-2 lg:items-start">
                      <div className={cn("space-y-8", flipped && "lg:order-2")}>
                        <div className="space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What it is</p>
                          <p className="whitespace-pre-line text-sm leading-relaxed text-foreground md:text-base">{project.whatItIs}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key highlights</p>
                          <ul className="mt-3 space-y-2.5">
                            {project.highlights.map((item) => (
                              <li key={item} className="flex gap-3 text-sm leading-snug text-muted-foreground md:text-[15px]">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary ring-4 ring-primary/20" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={cn("-mx-1 lg:mx-0", flipped && "lg:order-1")}>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preview</p>
                        <HarvestScreenshotFrame>
                          <ProjectScreenshot
                            slug={project.slug}
                            alt={project.screenshotAlt}
                            figureClassName="overflow-hidden rounded-[13px] border-0 bg-muted/20 shadow-none"
                          />
                        </HarvestScreenshotFrame>
                      </div>
                    </div>

                    <div className="grid gap-6 border-t border-primary/10 bg-gradient-to-br from-primary/[0.06] via-transparent to-secondary/30 px-5 py-7 sm:px-8 sm:py-8 md:grid-cols-2 md:items-start md:gap-10">
                      <div className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-4 dark:bg-primary/15">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Impact</p>
                        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground md:text-base">{project.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tech stack</p>
                        <p className="mt-2 font-mono text-xs leading-relaxed text-foreground sm:text-sm">{project.techStack}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>

        <div className="pb-16 md:pb-20">
          <ProjectCoreStrengths items={[...coreStrengths]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
