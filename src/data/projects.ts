export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Modern and thoughtful.",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS featuring Apple's design principles.",
    image: "/next.svg", // Replace with actual project image
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    links: {
      github: "https://github.com/AliBenrami",
      demo: "#",
    },
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-stack solution.",
    description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    image: "/vercel.svg", // Replace with actual project image
    tags: ["Node.js", "Express", "MongoDB", "Stripe"],
    links: {
      github: "https://github.com/AliBenrami",
      demo: "#",
    },
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    subtitle: "Collaborative and real-time.",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "/file.svg", // Replace with actual project image
    tags: ["React", "Firebase", "Material-UI", "Redux"],
    links: {
      github: "https://github.com/AliBenrami",
      demo: "#",
    },
    featured: true,
  },
  {
    id: "api-service",
    title: "REST API Service",
    subtitle: "Scalable backend.",
    description: "High-performance REST API built with Node.js and PostgreSQL, featuring authentication and rate limiting.",
    image: "/globe.svg", // Replace with actual project image
    tags: ["Node.js", "PostgreSQL", "Express", "JWT"],
    links: {
      github: "https://github.com/AliBenrami",
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
