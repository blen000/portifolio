import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, Code2, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

function iconForExperience(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (t.includes("network")) return Network;
  if (t.includes("developer") || t.includes("software")) return Code2;
  if (t.includes("trainee")) return Building2;
  return Briefcase;
}

const TimelineMarker: FC<{
  title: string;
  className?: string;
}> = ({ title, className }) => {
  const Icon = iconForExperience(title);

  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-[3px] ring-primary/30 ring-offset-2 ring-offset-card",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
      <span className="sr-only">{title}</span>
    </div>
  );
};

const ExperienceCard: FC<{ exp: Experience }> = ({ exp }) => (
  <Card className="border-primary/15 shadow-lg ring-1 ring-primary/10">
    <CardHeader>
      <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
      <p className="font-semibold text-primary">{exp.company}</p>
      <p className="text-sm text-muted-foreground">{exp.period}</p>
    </CardHeader>
    <CardContent>
      <ul className="list-disc space-y-2 pl-5 text-left text-muted-foreground">
        {exp.responsibilities.map((resp, i) => (
          <li key={i}>{resp}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const WorkExperience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="work-experience" className="relative w-full overflow-hidden bg-card">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent dark:from-primary/[0.08]" aria-hidden />

      <div className="relative z-[1] container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ownership of internal systems and production delivery in regulated environments.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl pt-12 pb-4 md:pb-8">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-24 bottom-36 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/45 via-border to-primary/45 md:block"
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {experiences.map((exp, index) => {
              const flipped = index % 2 === 1;

              return (
                <div key={`${exp.title}-${exp.period}`}>
                  <div className="flex items-start gap-4 md:hidden">
                    <TimelineMarker title={exp.title} className="relative z-[2]" />
                    <div className="min-w-0 flex-1">
                      <ExperienceCard exp={exp} />
                    </div>
                  </div>

                  <div className="relative z-[1] hidden md:grid md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:items-center md:gap-x-8">
                    {flipped ? (
                      <>
                        <div aria-hidden className="min-h-[1px]" />
                        <div className="relative z-[3] flex w-full justify-center">
                          <TimelineMarker title={exp.title} />
                        </div>
                        <div className="min-w-0">
                          <ExperienceCard exp={exp} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-0">
                          <ExperienceCard exp={exp} />
                        </div>
                        <div className="relative z-[3] flex w-full justify-center">
                          <TimelineMarker title={exp.title} />
                        </div>
                        <div aria-hidden className="min-h-[1px]" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
