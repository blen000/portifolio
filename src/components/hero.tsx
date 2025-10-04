
"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  name: string;
}

const Hero: FC<HeroProps> = ({ name }) => {
  const tagline = "A highly motivated Computer Science graduate with a passion for building innovative solutions.";

  return (
    <section className="relative w-full pt-32 pb-12 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
       <div
        className="absolute inset-y-0 left-0 h-full w-px bg-border/80">
        <div
          className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div
        className="absolute inset-y-0 right-0 h-full w-px bg-border/80">
        <div
          className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px w-full bg-border/80">
        <div
          className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline"
            >
              {name.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="relative z-10 mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            >
              {tagline}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 flex flex-col gap-2 min-[400px]:flex-row"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
