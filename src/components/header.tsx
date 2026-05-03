import Image from "next/image";
import Link from "next/link";
import { Hexagon, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface SocialLink {
  name: string;
  url: string;
}

interface HeaderProps {
  socials: SocialLink[];
  brand: string;
}

const compactIconMap: Record<string, typeof Github> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Header({ socials, brand }: HeaderProps) {
  const priority = ["GitHub", "LinkedIn", "Email"] as const;
  const compactLinks = priority
    .map((label) => socials.find((s) => s.name === label))
    .filter((s): s is SocialLink => Boolean(s));

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center border-b border-primary/15 bg-background/85 px-4 shadow-[0_1px_0_hsl(38_92%_47%_/_0.08)] backdrop-blur-md dark:shadow-[0_1px_0_hsl(43_93%_50%_/_0.12)] lg:px-6">
      <Link href="#" className="group flex items-center justify-center gap-2" prefetch={false}>
        <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-2 ring-primary/25 transition group-hover:bg-primary/15 dark:bg-primary/15 dark:ring-primary/35">
          <Image src="/favicon.ico" alt="" width={28} height={28} className="h-7 w-7 rounded-md object-contain" unoptimized priority />
        </span>
        <Hexagon className="hidden h-5 w-5 text-primary/80 sm:block" aria-hidden />
        <span className="font-headline font-semibold tracking-tight text-foreground">{brand}</span>
      </Link>
      <nav className="ml-auto flex items-center gap-3 sm:gap-6">
        <div className="hidden items-center gap-1 rounded-full border border-primary/20 bg-secondary/60 px-1 py-1 sm:flex">
          {compactLinks.map((social) => {
            const Icon = compactIconMap[social.name];
            const isMail = social.url.startsWith("mailto:");
            return (
              <Link
                key={social.name}
                href={social.url}
                prefetch={false}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-background hover:text-foreground"
                aria-label={social.name}
              >
                {Icon ? <Icon className="h-4 w-4" /> : null}
              </Link>
            );
          })}
        </div>
        <Link href="#about" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          About
        </Link>
        <Link href="#work-experience" className="hidden text-sm font-medium underline-offset-4 hover:underline md:inline" prefetch={false}>
          Experience
        </Link>
        <Link href="#education" className="hidden text-sm font-medium underline-offset-4 hover:underline lg:inline" prefetch={false}>
          Education
        </Link>
        <Link href="#skills" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Skills
        </Link>
        <Link href="#projects" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Projects
        </Link>
        <Link href="#contact" className="text-sm font-medium underline-offset-4 hover:underline" prefetch={false}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
