export type Experience = {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  type: string;
  logo?: string;
  description?: string;
  site?: string;
  certificate?: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "vednova",
    number: "01",
    role: "Software Developer",
    company: "VedNova AI Technologies LLP",
    period: "Jul 2026 — Oct 2026",
    type: "Professional Experience",
    logo: "/vednova-ai-logo.png",
    description:
      "Worked as a Software Developer Intern at VedNova AI Technologies, contributing to both frontend and backend development across projects including **Daivam**, the internal **CLMS (Client Lifecycle Management System)**, and more. Worked with React, Next.js, TypeScript, Tailwind CSS, and Supabase to build features, integrate APIs, manage data, and improve application functionality. Gained practical experience in full-stack development, authentication, role-based access control, and building maintainable web applications.",
    site: process.env.NEXT_PUBLIC_VEDNOVA_SITE,
    certificate: process.env.NEXT_PUBLIC_VEDNOVA_CERTIFICATE,
    technologies: [
      "React.js",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    id: "infysion-ojt",
    number: "02",
    role: "Mobile App Development",
    company: "Infysion Technology",
    period: "Apr 2026 - May 2026",
    type: "On-the-Job Training",
    description: "Completed a 12-day On-the-Job Training (OJT) program in Mobile App Development at Infysion Technology. Gained hands-on exposure to Android Studio and the fundamentals of Android application development, including understanding project structure, designing user interfaces, and learning the mobile app development workflow.",
    logo: "",
    certificate: "",
    technologies: ["Android Studio"],
  },
];