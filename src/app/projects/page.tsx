import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Ali Benrami",
  description: "Selected projects in AI, full-stack, and developer tooling.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" subtitle="Things I've built." />

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-apple-text-secondary">
            Want to see more? Check out my GitHub for additional projects.
          </p>
          <div className="mt-6">
            <Button href="https://github.com/AliBenrami" external>
              View GitHub Profile
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
