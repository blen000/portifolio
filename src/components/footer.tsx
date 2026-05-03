import type { FC } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
}

interface FooterProps {
  name: string;
  socials: SocialLink[];
}

const iconMap: Record<string, typeof Github> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

const Footer: FC<FooterProps> = ({ name, socials }) => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-4 border-t border-primary/20 bg-card/95 bg-gradient-to-br from-secondary/40 via-card to-secondary/25 px-4 py-10 md:px-6 sm:flex-row sm:justify-between">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {socials.map((social) => {
          const Icon = iconMap[social.name];
          const isMail = social.url.startsWith("mailto:");
          return (
            <Link
              key={social.name}
              href={social.url}
              prefetch={false}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
              {social.name}
            </Link>
          );
        })}
      </div>
      <p className="text-center text-xs text-muted-foreground sm:text-right">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
