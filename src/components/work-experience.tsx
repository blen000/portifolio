import type { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

const WorkExperience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="work-experience" className="w-full bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and responsibilities.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl py-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 bg-border -translate-x-1/2 md:block"></div>
          {experiences.map((exp, index) => (
             <div key={index} className="relative mb-8 flex w-full items-center md:justify-between md:odd:flex-row-reverse">
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg absolute left-1/2 -translate-x-1/2 md:relative">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="w-full md:w-5/12">
                <Card className="shadow-lg">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
