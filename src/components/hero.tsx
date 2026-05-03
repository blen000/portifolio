"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
}

interface HeroProps {
  name: string;
  role: string;
  headline: string;
  specialties: string[];
  socials: SocialLink[];
}

const socialIconMap: Record<string, typeof Github> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

const Hero: FC<HeroProps> = ({ name, role, headline, specialties, socials }) => {
  return (
    <section className="relative w-full overflow-hidden border-b border-primary/15 bg-gradient-to-b from-amber-100/35 via-background to-background pt-32 pb-12 dark:from-primary/10 dark:via-background md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-pattern-honeycomb opacity-[0.35] dark:opacity-[0.25]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-pattern-bee-stripes opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(38_92%_47%_/_0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(43_93%_50%_/_0.18),transparent_55%)]" aria-hidden />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-border/80">
        <div className="absolute top-0 h-48 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-border/80">
        <div className="absolute h-48 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-border/80">
        <div className="absolute left-1/2 h-px w-48 max-w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary ring-4 ring-primary/25 ring-offset-2 ring-offset-transparent" aria-hidden />
            {role}
          </motion.p>
          <div className="space-y-4">
            <h1 className="relative z-10 mx-auto flex max-w-4xl flex-wrap justify-center gap-x-3 gap-y-1 text-center text-3xl font-bold tracking-normal sm:gap-x-4 sm:text-5xl xl:text-6xl/none font-headline">
              {name.trim().split(/\s+/).filter(Boolean).map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="inline-block whitespace-nowrap"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="relative z-10 mx-auto max-w-[720px] text-lg font-medium text-foreground md:text-xl"
            >
              {headline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.45 }}
              className="mx-auto max-w-xl space-y-3 text-muted-foreground"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">Focus</p>
              <ul className="mx-auto flex max-w-lg flex-col gap-2 text-left text-base md:text-lg">
                {specialties.map((item) => (
                  <li key={item} className="flex gap-2 leading-snug">
                    <span className="font-semibold text-primary" aria-hidden>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.65 }}
            className="relative z-10 flex flex-col items-center gap-4 min-[480px]:flex-row min-[480px]:justify-center"
          >
            <Link href="#projects" prefetch={false} className="inline-flex">
              <Button variant="default" className="rounded-full shadow-lg shadow-amber-600/25 dark:shadow-amber-500/20">
                View projects
              </Button>
            </Link>
            <Link href="#contact" prefetch={false} className="inline-flex">
              <Button variant="outline" className="rounded-full border-primary/35 bg-background/60 backdrop-blur-sm">
                Contact
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
            aria-label="Professional profiles"
          >
            {socials.map((social) => {
              const Icon = socialIconMap[social.name];
              const isMail = social.url.startsWith("mailto:");
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  prefetch={false}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition hover:border-primary/45 hover:bg-primary/5 hover:text-foreground"
                >
                  {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                  {social.name}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
