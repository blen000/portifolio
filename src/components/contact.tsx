"use client";

import type { FC } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  email: string;
  phone: string;
}

const Contact: FC<ContactProps> = ({ email, phone }) => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="w-full bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 py-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-8">
            <div className="flex justify-center items-center gap-8 text-left p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">{email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{phone}</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
