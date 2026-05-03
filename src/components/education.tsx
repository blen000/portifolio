import type { FC } from "react";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  details: string;
}

interface EducationProps {
  education: EducationItem;
}

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="relative w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-56 w-56 rounded-full bg-amber-500/12 blur-[70px] dark:bg-primary/12" aria-hidden />
      <div className="relative z-[1] container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Education</h2>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <div className="flex items-start gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-[3px] ring-primary/25">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="grid gap-1 text-left">
              <h3 className="text-xl font-bold font-headline">{education.institution}</h3>
              <p className="text-muted-foreground">{education.location}</p>
              <p className="font-semibold">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
