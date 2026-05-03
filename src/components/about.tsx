import type { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Hexagon } from "lucide-react";

interface AboutProps {
  summary: string;
  additionalSkills: string[];
}

const About: FC<AboutProps> = ({ summary, additionalSkills }) => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute right-[-20%] top-1/2 h-[min(420px,50vw)] w-[min(420px,50vw)] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" aria-hidden />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {summary}
            </p>
          </div>
          <div className="relative flex items-center justify-center">
             <Card className="w-full border-primary/15 shadow-sm ring-1 ring-primary/10">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <Hexagon className="h-8 w-8 text-primary" aria-hidden />
                <CardTitle className="font-headline text-2xl">Leadership & Additional Skills</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {additionalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
