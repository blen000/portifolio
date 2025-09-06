"use client";

import type { FC } from "react";
import { Progress } from "@/components/ui/progress";
import type { HighlightSkillsOutput } from "@/ai/flows/skills-highlighting";

interface SkillsProps {
  skills: HighlightSkillsOutput;
}

const proficiencyToValue = (proficiency: string) => {
  switch (proficiency.toLowerCase()) {
    case "advanced":
      return 100;
    case "intermediate":
      return 66;
    case "beginner":
      return 33;
    default:
      return 0;
  }
};

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="w-full bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's a look at my technical proficiency, highlighting key areas of my expertise based on my experience and projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="grid gap-2">
              <h3 className="text-lg font-bold font-headline">{skill.skill}</h3>
              <div className="flex items-center gap-2">
                <Progress value={proficiencyToValue(skill.proficiency)} className="w-full h-3" />
                <span className="text-sm font-medium text-muted-foreground">{skill.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
