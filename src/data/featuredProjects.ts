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
  // TODO(Ali): Add your curated projects here. Keep it short + concrete.
  // Example shape:
  // {
  //   name: "My Project",
  //   problem: "1-line problem statement.",
  //   stack: ["TypeScript", "Next.js"],
  //   github: "https://github.com/...",
  //   demo: "https://...",
  //   highlight: "Optional: design decision / constraint you handled.",
  // },
];
