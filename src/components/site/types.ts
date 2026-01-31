export type GitHubUser = {
  login: string;
  name?: string | null;
  bio?: string | null;
  blog?: string | null;
  avatarUrl?: string | null;
  htmlUrl?: string | null;
  publicRepos: number;
  followers: number;
  following: number;
};

export type Project = {
  name: string;
  problem: string;
  stack: string[];
  github?: string;
  demo?: string;
  highlight?: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  pushed_at: string;
};
