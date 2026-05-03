import type { FC } from "react";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface Certification {
  title: string;
  issuer: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="w-full bg-card">
       <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Certifications & Recognitions</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col items-center border-primary/15 p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:border-primary/35 hover:shadow-xl">
                <Award className="mb-4 h-10 w-10 text-primary drop-shadow-[0_2px_8px_rgba(217,119,6,0.25)] dark:drop-shadow-[0_2px_8px_rgba(251,191,36,0.2)]" />
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
