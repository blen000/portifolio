import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  name: string;
}

const Hero: FC<HeroProps> = ({ name }) => {
  return (
    <section className="w-full pt-32 pb-12 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                {name}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A highly motivated Computer Science graduate with a passion for building innovative solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/BK_CV2.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <Link href="#contact" className="inline-flex">
                <Button variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
            <svg
              className="absolute inset-0 w-full h-full text-primary/10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 1 1 H 3 V 3 H 1 Z" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
