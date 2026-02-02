export type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-built-this-portfolio",
    title: "Why I built this portfolio",
    date: "2026-02-03",
    excerpt:
      "A quick note on the file-explorer theme, what I wanted to show, and what I'm improving next.",
    content:
      "This is a placeholder post. Replace this string with real content (or switch to MDX later).",
  },
  {
    slug: "what-im-learning-right-now",
    title: "What I'm learning right now",
    date: "2026-02-03",
    excerpt:
      "A running list of topics I'm deepening: Next.js App Router, testing, and building small tools.",
    content:
      "This is a placeholder post. Add your current learning notes here.",
  },
];
