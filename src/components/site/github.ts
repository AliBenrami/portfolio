import type { GitHubRepo, GitHubUser, Project } from "@/components/site/types";
import { featuredProjects } from "@/data/featuredProjects";

export function hasCuratedProjects(): boolean {
  return featuredProjects.some((p) => !p.name.startsWith("TODO:"));
}

export function curatedProjects(): Project[] {
  return featuredProjects
    .filter((p) => !p.name.startsWith("TODO:"))
    .map((p) => ({
      name: p.name,
      problem: p.problem,
      stack: p.stack,
      github: p.github,
      demo: p.demo?.startsWith("TODO:") ? undefined : p.demo,
      highlight: p.highlight,
    }));
}

export function reposToProjects(repos: GitHubRepo[]): Project[] {
  return repos
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => (a.pushed_at < b.pushed_at ? 1 : -1))
    .slice(0, 10)
    .map<Project>((r) => {
      const stack: string[] = [];
      if (r.language) stack.push(r.language);
      return {
        name: r.name,
        problem: r.description || "—",
        stack,
        github: r.html_url,
        demo: r.homepage || undefined,
      };
    });
}

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  const res = await fetch("/api/github/user");
  if (!res.ok) return null;
  return (await res.json()) as GitHubUser;
}
