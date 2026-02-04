export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Fundthesis",
    description:
      "A web app simplifying stock investing for retail investors using NLP and forecasting",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Shadcn/ui",
    ],
    github: "https://github.com/Fundthesis/Fundthesis",
    live: "https://fundthesis.net",
  },
  {
    title: "Kori.Study",
    description:
      "An AI-powered focus and productivity platform that won first place at HackUTD",
    tags: [
      "React Native",
      "Electron",
      "Express",
      "Raspberry Pi",
      "Gemini API",
      "Python",
      "FastAPI",
      "Docker",
    ],
    github: "https://github.com/DuckyDaBucky/Kori.Study",
    live: "https://kori.study",
  },
  {
    title: "AskTemoc_Backend",
    description:
      "A RAG-enhanced agentic chatbot that answers questions and helps with tasks related to UTD resources",
    tags: [
      "Python",
      "FastAPI",
      "Ollama",
      "Docker",
      "RAG",
      "Vectorstore",
      "Agentic",
      "Langchain",
    ],
    github: "https://github.com/Conwenu/AskTemoc_Backend",
  },
];
