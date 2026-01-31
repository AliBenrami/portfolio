export type FeaturedProject = {
  name: string;
  problem: string;
  stack: string[];
  github?: string;
  demo?: string;
  highlight?: string;
};

/**
 * TODO(Ali): Replace these with your real, curated projects.
 * Keep them short and concrete (1-line problem, 1 optional highlight).
 */
export const featuredProjects: FeaturedProject[] = [
  {
    name: "TODO: Project name",
    problem: "TODO: 1-line problem statement (what you solved).",
    stack: ["TODO: TS", "TODO: Next.js"],
    github: "https://github.com/AliBenrami/portfolio",
    demo: "TODO: add live demo URL (or remove)",
    highlight: "TODO: One design decision / constraint you handled well.",
  },
];
