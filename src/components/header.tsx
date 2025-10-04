import Link from "next/link";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Code2 className="h-6 w-6 text-primary" />
        <span className="ml-2 font-headline font-semibold">Blen's Portfolio</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#work-experience" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Experience
        </Link>
        <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Education
        </Link>
        <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Skills
        </Link>
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Projects
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
