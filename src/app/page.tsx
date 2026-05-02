import { highlightSkills, type HighlightSkillsInput, type HighlightSkillsOutput } from "@/ai/flows/skills-highlighting";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WorkExperience from "@/components/work-experience";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import { caseStudies } from "@/data/case-studies";
import { engineerMindsetBullets } from "@/data/engineer-mindset";
import { portfolioCoreStrengths } from "@/data/core-strengths";

const resumeData = {
  name: "Blen Kassahun Nigatu",
  location: "Addis Abeba, Ethiopia",
  email: "blenkassahun08@gmail.com",
  phone: "+251908279572",
  professionalSummary:
    "Full-stack engineer building secure internal tooling, admin surfaces, and workflow automation for regulated environments. BSc in Computer Science from Dilla University (GPA 3.92) with practical delivery experience in banking and SaaS contexts.",
  technicalSkills:
    "Programming Languages: C++, Java, JavaScript, PHP. Web Development: HTML, CSS, JavaScript. Database Management: SQL, MySQL, Oracle. Networking: Cisco Packet Tracer, Network Configuration, Cable Management. System Administration: IT Infrastructure Support, System Troubleshooting. Other: Microsoft Office, Technical Documentation, Team Leadership.",
  workExperience: `Graduate IT Trainee at NIB International Bank (March 2025 – Present): Contributing to the design and development of internal banking systems. Implementing backend features and improving system reliability. Participating in code reviews, debugging, and production issue resolution.
  Software Developer Intern at Acacia Technologies (Jan 2025 – March 2025): Assisting in the development and optimization of software solutions. Engaging in troubleshooting and debugging software applications. Collaborating with team members on IT infrastructure-related tasks.
  Network System Administration Intern at Omo Bank (June 2023 – Aug 2023): Assisted in network installation and system maintenance. Managed network cables and troubleshot IT equipment.`,
  projects: `Adaptive Audit Management Platform – Enterprise audit workflows with RBAC, findings, immutable trails, integrations, reporting.
Unified Event Ticketing Platform – High-concurrency ticketing, Stripe-ready payments, Redis locks, QR validation, admin dashboards.
Enterprise Learning Platform – Tenant-scoped LMS with courses, live sessions, certificates, SES email, JWT session patterns.
Supporting builds: Electricity Billing stack; Gedeu'ffa bilingual translator tooling; QR menu + student registration systems using Next.js, Prisma, MySQL.`,
  workExperienceList: [
    {
      title: "Graduate IT Trainee",
      company: "National banking technology team",
      period: "March 2025 – Present",
      responsibilities: [
        "Designed and delivered internal banking workflows and operational tooling.",
        "Built backend services and reliability improvements for production operations.",
        "Led code reviews, root-cause debugging, and incident remediation.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Technology services group",
      period: "Jan 2025 – March 2025",
      responsibilities: [
        "Built and optimized web application features for operational users.",
        "Resolved bugs and improved development and release workflows.",
        "Collaborated on sprint planning, QA handoff, and deployment readiness.",
      ],
    },
    {
      title: "Network System Administration Intern",
      company: "Financial operations network team",
      period: "June 2023 – Aug 2023",
      responsibilities: [
        "Deployed and maintained network equipment for branch operations.",
        "Structured cable and access configurations to improve uptime.",
        "Troubleshot infrastructure issues and verified system stability.",
      ],
    },
  ],
  education: {
    institution: "Dilla University",
    location: "Dilla, Ethiopia",
    degree: "Bachelor of Science in Computer Science",
    details: "Graduated: July 2024 | GPA: 3.92",
  },
  certifications: [
    { title: "Gold Medalist", issuer: "College of Engineering and Technology" },
    { title: "Certificate of Recognition", issuer: "Dilla University Peace Forum" },
    { title: "Professional Development Training", issuer: "Dereja Academy" },
  ],
  additionalSkills: [
    "Led cross-functional cohorts inside academic labs and sprint-style delivery forums.",
    "Comfortable bridging ops feedback with engineering tradeoffs.",
    "Amharic fluent · English proficient.",
    "Continuously sharpening auth patterns, Postgres performance, and platform observability tactics.",
  ],
  socials: [
    { name: "Email", url: "mailto:blenkassahun08@gmail.com" },
    { name: "GitHub", url: "https://github.com/blen000" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/blen-kassahun/" },
  ],
  heroRole: "Full-Stack Developer",
  heroHeadline:
    "I deliver secure full-stack systems for admin tools, workflows, and APIs in regulated environments.",
  heroSpecialties: [
    "Role-Based Access Control (RBAC)",
    "Internal admin dashboards & workflows",
    "Workflow automation & background jobs",
    "Secure, scalable backend systems",
  ],
};

export default async function Home() {
  let highlightedSkills: HighlightSkillsOutput;

  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "YOUR_API_KEY_HERE") {
    const skillsInput: HighlightSkillsInput = {
      professionalSummary: resumeData.professionalSummary,
      technicalSkills: resumeData.technicalSkills,
      workExperience: resumeData.workExperience,
      projects: resumeData.projects,
    };
    highlightedSkills = await highlightSkills(skillsInput);
  } else {
    const skillsList = resumeData.technicalSkills.split(".").flatMap((s) => s.split(",")).map((sk) => sk.trim()).filter(Boolean);
    highlightedSkills = skillsList.map((skill) => ({
      skill: skill.replace(/:(.*)/, "").trim(),
      proficiency: "Intermediate",
    }));
  }

  const brandShort = resumeData.name.split(" ")[0];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header socials={resumeData.socials} brand={`${brandShort}'s Portfolio`} />
      <main className="flex-1">
        <Hero
          name={resumeData.name}
          role={resumeData.heroRole}
          headline={resumeData.heroHeadline}
          specialties={resumeData.heroSpecialties}
          socials={resumeData.socials}
        />
        <About summary={resumeData.professionalSummary} additionalSkills={resumeData.additionalSkills} />
        <WorkExperience experiences={resumeData.workExperienceList} />
        <Education education={resumeData.education} />
        <Skills skills={highlightedSkills} />
        <Projects projects={caseStudies} engineerMindsetBullets={engineerMindsetBullets} coreStrengths={portfolioCoreStrengths} />
        <Certifications certifications={resumeData.certifications} />
        <Contact socials={resumeData.socials} />
      </main>
      <Footer name={resumeData.name} socials={resumeData.socials} />
    </div>
  );
}
