import React from "react";
import ProjectCard from "../component/projectCard";
import supabase from "../util/supabase";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Browse my portfolio projects",
};

interface ProjectCardInterface {
  id: string;
  projectName: string;
  description: string;
  demoLink: string;
  githubLink: string;
  technologies?: string[];
}

async function getProjects(): Promise<ProjectCardInterface[]> {
  const backup = [
    {
      id: "1",
      projectName: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and TailwindCSS with a file explorer theme UI.",
      demoLink: "https://portfolio.demo",
      githubLink: "https://github.com/AliBenrami/portfolio",
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    },
    {
      id: "2",
      projectName: "Pocket Secretary",
      description:
        "An AI-powered scheduling assistant that turns everyday language into structured calendar events with seamless Google Calendar integration.",
      demoLink: "https://tasks.demo",
      githubLink: "https://github.com/omahamz/PocketSecretary",
      technologies: ["React", "Node.js", "AI/ML", "Google API"],
    },
    {
      id: "3",
      projectName: "E-commerce Dashboard",
      description:
        "An administrative dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing.",
      demoLink: "https://dashboard.demo",
      githubLink: "https://github.com/AliBenrami/ecommerce-dashboard",
      technologies: ["React", "Redux", "Express", "MongoDB"],
    },
    {
      id: "4",
      projectName: "Weather App",
      description:
        "A responsive weather application that shows current conditions and forecasts based on user location or search.",
      demoLink: "https://weather.demo",
      githubLink: "https://github.com/AliBenrami/weather-app",
      technologies: ["JavaScript", "Weather API", "CSS"],
    },
  ];

  try {
    const { data: projects, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      console.log(error);
      return backup;
    }

    return projects ?? backup;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return backup;
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Map project categories
  const projectsByCategory = {
    "Web Applications": projects.filter((p) =>
      p.technologies?.some((t) => ["React", "Next.js", "Angular"].includes(t))
    ),
    "Backend Services": projects.filter((p) =>
      p.technologies?.some((t) => ["Node.js", "Express", "MongoDB"].includes(t))
    ),
    "Other Projects": projects.filter(
      (p) =>
        !p.technologies?.some((t) =>
          [
            "React",
            "Next.js",
            "Angular",
            "Node.js",
            "Express",
            "MongoDB",
          ].includes(t)
        )
    ),
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 sm:p-4">
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-xl">📂</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            Projects
          </h1>
        </div>

        {/* File explorer "view options" bar */}
        <div className="bg-zinc-100 dark:bg-zinc-900 mb-4 sm:mb-6 p-2 sm:p-3 rounded-md flex items-center justify-between border border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            <span className="mr-4">
              <span className="font-semibold">{projects.length}</span> items
            </span>
            <span>
              Sort by: <span className="underline cursor-pointer">Name</span>
            </span>
          </div>

          <div className="flex space-x-2">
            <button className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <span>🗂️</span>
            </button>
            <button className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <span>📋</span>
            </button>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Display projects by category */}
          {Object.entries(projectsByCategory).map(
            ([category, categoryProjects]) =>
              categoryProjects.length > 0 && (
                <div key={category} className="mb-6 sm:mb-8">
                  <h2 className="text-lg font-medium mb-3 sm:mb-4 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-700 pb-2">
                    {category} ({categoryProjects.length})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {categoryProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        projectName={project.projectName}
                        description={project.description}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                        technologies={project.technologies}
                      />
                    ))}
                  </div>
                </div>
              )
          )}

          {/* Fallback if categories didn't work */}
          {Object.values(projectsByCategory).every(
            (arr) => arr.length === 0
          ) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  projectName={project.projectName}
                  description={project.description}
                  demoLink={project.demoLink}
                  githubLink={project.githubLink}
                  technologies={project.technologies}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
