"use client";

import type { FC } from "react";
import type { HighlightSkillsOutput } from "@/ai/flows/skills-highlighting";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Star, Activity } from "lucide-react";

interface SkillsProps {
  skills: HighlightSkillsOutput;
}

const skillsByCategory: Record<string, string[]> = {
    "Programming Languages": ["C#", "C++", "JavaScript", "PHP"],
    "Web Development": ["React", "Next.js", "Tailwind", "HTML", "CSS", "JavaScript"],
    "Database Management": ["Postgres", "SQL", "MySQL", "Oracle"],
    "Monitoring & Logging": ["Grafana", "Promtail", "Prometheus", "Loki"],
    "Networking": ["Cisco Packet Tracer", "Network Configuration", "Cable Management"],
    "System Administration": ["IT Infrastructure Support", "System Troubleshooting"],
    "Other": ["Microsoft Office", "Technical Documentation", "Team Leadership"],
};

const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code className="h-6 w-6 text-primary" />,
    "Web Development": <Code className="h-6 w-6 text-primary" />,
    "Database Management": <Database className="h-6 w-6 text-primary" />,
    "Networking": <Server className="h-6 w-6 text-primary" />,
    "System Administration": <Server className="h-6 w-6 text-primary" />,
    "Monitoring & Logging": <Activity className="h-6 w-6 text-primary" />, // or use a monitoring icon if available
    "Other": <Star className="h-6 w-6 text-primary" />,
};


const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="w-full bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A breakdown of my technical skills, categorized by area of expertise.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsByCategory).map(([category, skillsList]) => (
            <Card key={category} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {categoryIcons[category]}
                <CardTitle className="font-headline text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-1 pt-4">
                  {skillsList.map((skill, index) => (
                    <li key={index} className="text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
