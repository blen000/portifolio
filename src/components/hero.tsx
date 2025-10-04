import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  name: string;
}

const Hero: FC<HeroProps> = ({ name }) => {
  return (
    <section className="w-full pt-32 pb-12 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 bg-gradient-to-br from-card to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
              {name}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200">
              A highly motivated Computer Science graduate with a passion for building innovative solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up animation-delay-400">
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
      </div>
    </section>
  );
};

export default Hero;
