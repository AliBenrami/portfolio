import { IconType } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFastapi,
  SiPrisma,
  SiElectron,
} from "react-icons/si";
import { HiMail, HiGlobeAlt } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  contactLinks: {
    label: string;
    href: string;
    icon: IconType;
  }[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface EducationInfo {
  degree: string;
  school: string;
  year: string;
  details?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ali Benrami",
  title: "Software Engineer",
  summary:
    "Building digital experiences that matter. Passionate about AI, machine learning, and creating clean, performant applications that solve real problems.",
  contactLinks: [
    {
      label: "Email",
      href: "mailto:abenrami06@gmail.com",
      icon: HiMail,
    },
    {
      label: "GitHub",
      href: "https://github.com/AliBenrami",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ali-benrami-232b05248/",
      icon: FaLinkedin,
    },
    {
      label: "Portfolio",
      href: "https://alibenrami.com",
      icon: HiGlobeAlt,
    },
  ],
};

export const highlights: Highlight[] = [
  { value: "2+", label: "Years Experience" },
  { value: "3+", label: "Projects Shipped" },
  { value: "1st", label: "Place HackUTD" },
  { value: "3rd", label: "Place AIM Night" },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer & NLP Engineer",
    company: "Kori - HackUTD Winner",
    duration: "2025",
    description: [
      "Built the complete software stack for Kori—an AI-powered focus and productivity platform that won first place at HackUTD",
      "Developed Electron + Express.js interface and backend, React Native mobile app, and sensor integration (BME280, microphone, camera modules)",
      "Integrated Gemini API for emotion and environment-driven insights to help users optimize study efficiency",
      "Created real-time data collection system tracking sound, temperature, air quality, and emotional cues via Raspberry Pi",
    ],
  },
  {
    role: "Technical Mentor & Lead Architect",
    company: "FundThesis - AIM Night 3rd Place",
    duration: "2025",
    description: [
      "Led a team of 6 developers over 10 weeks to build FundThesis—a web app simplifying stock investing for retail investors using NLP and forecasting",
      "Architected the complete backend infrastructure and NLP pipeline, mapping out system design and technical roadmap",
      "Designed the frontend vision and user experience, guiding the team through implementation of sentiment analysis using FinBERT",
      "Mentored team members on web scraping with Finance news APIs and RSS feeds, achieving 3rd place victory at AIM Night",
    ],
  },
];

export const skills: SkillsData = {
  languages: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
  ],
  frameworks: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Electron", icon: SiElectron },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  tools: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
  ],
};

export const featuredSkills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
];

export const education: EducationInfo = {
  degree: "Bachelor's Degree in Computer Science",
  school: "University of Texas at Dallas",
  year: "2027",
  details: "Focused on AI/ML and software engineering",
};
