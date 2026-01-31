"use client";

import { useEffect, useMemo, useState } from "react";

import ProjectDialog, { type ProjectViewModel } from "@/components/ProjectDialog";
import { hasCuratedProjects, curatedProjects, reposToProjects } from "@/components/site/github";
import type { GitHubRepo, Project } from "@/components/site/types";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  const [activeProject, setActiveProject] = useState<ProjectViewModel | null>(null);
  const [projectOpen, setProjectOpen] = useState(false);

  const useCurated = useMemo(() => hasCuratedProjects(), []);

  useEffect(() => {
    if (useCurated) {
      setProjects(curatedProjects());
      setStatus("success");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setStatus("loading");
        const res = await fetch(
          "https://api.github.com/users/AliBenrami/repos?per_page=100&sort=pushed",
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(String(res.status));
        const repos = (await res.json()) as GitHubRepo[];
        if (cancelled) return;
        setProjects(reposToProjects(repos));
        setStatus("success");
      } catch {
        if (cancelled) return;
        setProjects([]);
        setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [useCurated]);

  const openProject = (p: Project) => {
    setActiveProject({
      name: p.name,
      problem: p.problem,
      stack: p.stack,
      github: p.github,
      demo: p.demo,
      highlight: p.highlight,
    });
    setProjectOpen(true);
  };

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-20 pt-14 md:px-6 md:pt-20">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white">Projects</h1>
        <p className="mt-2 text-sm text-white/70">
          {useCurated
            ? "Curated projects (edit src/data/featuredProjects.ts)."
            : "Recent GitHub repos (fallback)."}
        </p>
      </header>

      {status === "loading" ? <p className="text-sm text-white/70">Loading…</p> : null}
      {status === "error" ? (
        <p className="text-sm text-white/70">Couldn’t load projects right now.</p>
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => openProject(p)}
            className="group relative rounded-2xl border border-white/10 bg-black/20 p-5 text-left transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <h3 className="text-base font-semibold text-white">{p.name}</h3>
            <p className="mt-2 text-sm text-white/70">{p.problem}</p>

            {p.stack.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}

            <p className="mt-4 text-xs text-white/60">Click for details</p>
          </button>
        ))}
      </div>

      <ProjectDialog open={projectOpen} onOpenChange={setProjectOpen} project={activeProject} />
    </main>
  );
}
