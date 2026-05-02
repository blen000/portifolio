import type { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/data/case-studies";
import EngineerMindset from "@/components/engineer-mindset";
import ProjectCoreStrengths from "@/components/project-core-strengths";
import { ProjectScreenshot } from "@/components/project-screenshot";
import { ExternalLink, Github, PlayCircle } from "lucide-react";

interface ProjectsProps {
  projects: CaseStudy[];
  engineerMindsetBullets: string[];
  coreStrengths: readonly string[];
}

const Projects: FC<ProjectsProps> = ({ projects, engineerMindsetBullets, coreStrengths }) => {
  return (
    <section id="projects" className="w-full bg-muted/25">
      <div className="container max-w-4xl px-4 md:px-6">
        <header className="mx-auto max-w-2xl pb-10 pt-14 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Internal-grade systems generalized for portfolio use—impact, constraints, and stack at a glance.
          </p>
        </header>

        {/* Quick scan — recruiter-first */}
        <div className="mb-12 rounded-xl border bg-card px-5 py-7 shadow-sm md:px-8 md:py-9">
          <h3 className="text-center font-headline text-xl font-bold tracking-tight sm:text-2xl">Quick Overview</h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">Tap a card to jump to the write-up and preview.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`#${p.slug}`}
                prefetch={false}
                className="group flex flex-col rounded-xl border bg-muted/30 p-4 text-left shadow-sm ring-offset-background transition hover:border-primary/40 hover:bg-muted/50 hover:ring-2 hover:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="inline-flex w-fit rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-headline text-sm font-semibold text-primary">
                  {p.overviewBadge}
                </span>
                <span className="mt-3 text-sm font-medium leading-snug text-foreground group-hover:text-primary md:text-[15px]">
                  {p.overviewSummary}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <EngineerMindset bullets={engineerMindsetBullets} />

        {/* Deep dive — compressed case study shape */}
        <div className="flex flex-col gap-12 pb-10 md:gap-14 md:pb-14">
          {projects.map((project) => (
            <article key={project.slug} id={project.slug} className="scroll-mt-24">
              <Card className="border bg-card shadow-sm">
                <CardContent className="space-y-6 p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-headline text-xl font-bold tracking-tight sm:text-2xl">{project.title}</h3>
                      <div className="mt-4 space-y-1 text-left">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What it is</p>
                        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground md:text-base">{project.whatItIs}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-2">
                      {project.repoUrl ? (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" aria-hidden />
                            Code
                          </Link>
                        </Button>
                      ) : null}
                      {project.demoUrl ? (
                        <Button size="sm" asChild>
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" aria-hidden />
                            Demo
                          </Link>
                        </Button>
                      ) : null}
                      {project.videoUrl ? (
                        <Button variant="secondary" size="sm" asChild>
                          <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                            <PlayCircle className="mr-2 h-4 w-4" aria-hidden />
                            Video
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Screenshot</p>
                    <div className="mt-3">
                      <ProjectScreenshot slug={project.slug} alt={project.screenshotAlt} />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key highlights</p>
                    <ul className="mt-3 list-none space-y-2">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-snug text-muted-foreground md:text-[15px]">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Impact</p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-foreground md:text-base">{project.impact}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tech stack</p>
                    <p className="mt-2 font-mono text-xs leading-relaxed text-foreground sm:text-sm">{project.techStack}</p>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="pb-16 md:pb-20">
          <ProjectCoreStrengths items={[...coreStrengths]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
