import type { FC } from "react";
import { Mail, Github, Linkedin, LucideProps } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Social {
  name: string;
  url: string;
}

interface ContactProps {
  socials: Social[];
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

const Contact: FC<ContactProps> = ({ socials }) => {
  return (
    <section id="contact" className="w-full bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 py-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-4 pt-8">
          <div className="flex justify-center items-center gap-4">
            {socials.map((social) => {
               const Icon = iconMap[social.name];
               return (
                <Link href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    {Icon && <Icon className="h-6 w-6" />}
                    <span className="sr-only">{social.name}</span>
                  </Button>
                </Link>
               )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
