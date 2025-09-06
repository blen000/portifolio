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

const resumeData = {
  name: "Blen Kassahun Nigatu",
  location: "Addis Abeba, Ethiopia",
  email: "blenkassahun08@gmail.com",
  phone: "+251908279572",
  professionalSummary:
    "A highly motivated and accomplished Computer Science graduate with a BSc from Dilla University, achieving a GPA of 3.92. Proficient in various programming languages, network administration, and system maintenance. Demonstrates strong technical skills, communication abilities, decision-making, and time-management. Awarded a gold medal for academic excellence in the College of Engineering and Technology.",
  technicalSkills:
    "Programming Languages: C++, Java, JavaScript, PHP. Web Development: HTML, CSS, JavaScript. Database Management: SQL, MySQL, Oracle. Networking: Cisco Packet Tracer, Network Configuration, Cable Management. System Administration: IT Infrastructure Support, System Troubleshooting. Other: Microsoft Office, Technical Documentation, Team Leadership.",
  workExperience: `Graduate IT Trainee at NIB International Bank (March 2025 – Present): Participating in the design, development, and testing of internal banking applications. Collaborating with the development team to write clean, maintainable, and scalable code. Supporting the enhancement and maintenance of existing software systems used in banking operations. Engaging in code reviews, debugging sessions, and documentation tasks.
  Software Developer Intern at Acacia Technologies (Jan 2025 – March 2025): Assisting in the development and optimization of software solutions. Engaging in troubleshooting and debugging software applications. Collaborating with team members on IT infrastructure-related tasks.
  Network System Administration Intern at Omo Bank (June 2023 – Aug 2023): Assisted in network installation and system maintenance. Managed network cables and troubleshot IT equipment.`,
  projects: `Electricity Billing System – Developed using HTML, CSS, JavaScript, and Oracle.
  Gedeu'ffa - Amharic Bidirectional Translator – A language translation project designed for efficient bidirectional translations.`,
  projectsData: [
    {
      title: "Electricity Billing System",
      description: "A comprehensive system for managing electricity billing, developed using HTML, CSS, JavaScript, and Oracle.",
      repoUrl: "https://github.com/blen000",
      liveUrl: "#",
    },
    {
      title: "Gedeu'ffa - Amharic Bidirectional Translator",
      description: "A language translation project designed for efficient bidirectional translations between Amharic and Gedeu'ffa.",
      repoUrl: "https://github.com/blen000",
      liveUrl: "#",
    },
    {
      title: "Smart Menu – QR Code–Based Digital Menu System",
      description: "Designed and developed a digital menu platform for hotels and restaurants, enabling guests to access menus instantly by scanning a QR code. Built an intuitive admin panel for secure menu management and real-time updates without requiring reprinting. Used Next.js/React, Tailwind CSS, Prisma, and MySQL.",
      repoUrl: "https://github.com/blen000",
      liveUrl: "#",
    }
  ],
  workExperienceList: [
    {
      title: "Graduate IT Trainee",
      company: "NIB International Bank",
      period: "March 2025 – Present",
      responsibilities: [
        "Participating in the design, development, and testing of internal banking applications.",
        "Collaborating with the development team to write clean, maintainable, and scalable code.",
        "Supporting the enhancement and maintenance of existing software systems used in banking operations.",
        "Engaging in code reviews, debugging sessions, and documentation tasks.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Acacia Technologies",
      period: "Jan 2025 – March 2025",
      responsibilities: [
        "Assisting in the development and optimization of software solutions.",
        "Engaging in troubleshooting and debugging software applications.",
        "Collaborating with team members on IT infrastructure-related tasks.",
      ],
    },
    {
      title: "Network System Administration Intern",
      company: "Omo Bank",
      period: "June 2023 – Aug 2023",
      responsibilities: [
        "Assisted in network installation and system maintenance.",
        "Managed network cables and troubleshot IT equipment.",
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
    { title: "Certificate of Recognition", issuer: "Dilla University Peace Forum" },
    { title: "Professional Development Training", issuer: "Dereja Academy" },
    { title: "Gold Medalist", issuer: "College of Engineering and Technology" },
  ],
  additionalSkills: [
    "Served as a team leader in multiple academic and project-based collaborations.",
    "Strong interpersonal and decision-making skills.",
    "Passionate about learning, innovation, and problem-solving.",
    "Fluent in Amharic and Advanced in English.",
  ],
  socials: [
    { name: "Email", url: "mailto:blenkassahun08@gmail.com" },
    { name: "GitHub", url: "https://github.com/blen000" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/blen-kassahun-900415318/" },
  ]
};

export default async function Home() {
  let highlightedSkills: HighlightSkillsOutput;

  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_API_KEY_HERE') {
    const skillsInput: HighlightSkillsInput = {
      professionalSummary: resumeData.professionalSummary,
      technicalSkills: resumeData.technicalSkills,
      workExperience: resumeData.workExperience,
      projects: resumeData.projects,
    };
    highlightedSkills = await highlightSkills(skillsInput);
  } else {
    // Fallback if API key is not set
    const skillsList = resumeData.technicalSkills.split('.').flatMap(s => s.split(',')).map(sk => sk.trim()).filter(Boolean);
    highlightedSkills = skillsList.map(skill => ({
      skill: skill.replace(/:(.*)/, '').trim(),
      proficiency: 'Intermediate',
    }));
  }


  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero name={resumeData.name} />
        <About summary={resumeData.professionalSummary} additionalSkills={resumeData.additionalSkills} />
        <WorkExperience experiences={resumeData.workExperienceList} />
        <Education education={resumeData.education} />
        <Skills skills={highlightedSkills} />
        <Projects projects={resumeData.projectsData} />
        <Certifications certifications={resumeData.certifications} />
        <Contact socials={resumeData.socials} />
      </main>
      <Footer name={resumeData.name} />
    </div>
  );
}
