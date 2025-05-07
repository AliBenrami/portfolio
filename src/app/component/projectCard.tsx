"use client";

import React from "react";

interface ProjectCardProps {
  projectName: string;
  description: string;
  demoLink: string;
  githubLink: string;
  technologies?: string[];
  icon?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  description,
  demoLink,
  githubLink,
  technologies = [],
  icon = "📂",
}) => {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-zinc-100 dark:bg-zinc-900/80 p-3 flex items-center border-b border-zinc-200 dark:border-zinc-700">
        <span className="text-xl mr-2">{icon}</span>
        <span className="font-mono font-medium text-zinc-800 dark:text-zinc-200 truncate">
          {projectName}
          <span className="text-zinc-500 dark:text-zinc-400">.html</span>
        </span>
      </div>

      <div className="p-4">
        <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm sm:text-base">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
          <div className="flex flex-wrap gap-4">
            <a
              href={demoLink}
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-1">🔗</span> Live Demo
            </a>
            <a
              href={githubLink}
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-1">💻</span> View Code
            </a>
          </div>

          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            index.html
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
