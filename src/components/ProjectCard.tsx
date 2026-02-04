import Card from "./Card";
import Tag from "./Tag";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={`flex flex-col ${className ?? ""}`}>
      <h3 className="text-xl font-semibold text-apple-text">{project.title}</h3>
      <p className="mt-3 text-apple-text-secondary text-sm leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-apple-accent hover:underline"
          >
            <SiGithub className="w-4 h-4" />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-apple-accent hover:underline"
          >
            <HiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </Card>
  );
}
