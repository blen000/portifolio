import type { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Sparkles } from "lucide-react";

interface AboutProps {
  summary: string;
  additionalSkills: string[];
}

const About: FC<AboutProps> = ({ summary, additionalSkills }) => {
  return (
    <section id="about" className="w-full bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {summary}
            </p>
          </div>
          <div className="flex items-center justify-center">
             <Card className="w-full">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <Sparkles className="h-8 w-8 text-primary" />
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
