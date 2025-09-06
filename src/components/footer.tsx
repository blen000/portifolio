import type { FC } from "react";

interface FooterProps {
    name: string;
}

const Footer: FC<FooterProps> = ({ name }) => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t bg-card">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
