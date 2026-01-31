"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { featuredProjects } from "@/data/featuredProjects";

type Project = {
  name: string;
  problem: string;
  stack: string[];
  github?: string;
  demo?: string;
  proudOf?: string;
};

type GitHubUser = {
  login: string;
  name?: string | null;
  bio?: string | null;
  blog?: string | null;
  publicRepos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
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
  topics?: string[];
};

type Experiment = {
  name: string;
  note: string;
  link?: string;
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-white">{title}</h2>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6">
        {children}
      </div>
    </section>
  );
}

function NavCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, rgba(255,255,255,0.10), transparent 40%), radial-gradient(600px circle at 80% 80%, rgba(96,165,250,0.10), transparent 40%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </button>
  );
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsStatus, setProjectsStatus] = useState<"idle" | "loading" | "error" | "success">(
    "idle"
  );
  const [ghUser, setGhUser] = useState<GitHubUser | null>(null);

  const hasCurated = featuredProjects.some((p) => !p.name.startsWith("TODO:"));

  useEffect(() => {
    // GitHub stats (lightweight; server-cached)
    let cancelled = false;
    fetch("/api/github/user")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return;
        setGhUser(data);
      })
      .catch(() => {
        if (cancelled) return;
        setGhUser(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    // Prefer curated list (easiest to edit, avoids random repos). Fall back to GitHub recents.
    if (hasCurated) {
      setProjects(
        featuredProjects
          .filter((p) => !p.name.startsWith("TODO:"))
          .map((p) => ({
            name: p.name,
            problem: p.problem,
            stack: p.stack,
            github: p.github,
            demo: p.demo?.startsWith("TODO:") ? undefined : p.demo,
            proudOf: p.highlight,
          }))
      );
      setProjectsStatus("success");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setProjectsStatus("loading");

        const res = await fetch(
          "https://api.github.com/users/AliBenrami/repos?per_page=100&sort=pushed",
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const repos = (await res.json()) as GitHubRepo[];

        const filtered = repos
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

        if (cancelled) return;
        setProjects(filtered);
        setProjectsStatus("success");
      } catch {
        if (cancelled) return;
        setProjectsStatus("error");
        setProjects([]);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [hasCurated]);

  const experiments: Experiment[] = useMemo(
    () => [
      {
        name: "TODO(Ali): Experiment name",
        note: "TODO(Ali): 1-line note (what you tried / learned).",
        link: "TODO(Ali): optional link",
      },
    ],
    []
  );

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-20 pt-14 md:px-6 md:pt-20">
      {/* Hero */}
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-white/60">
          COMPUTER SCIENCE
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {ghUser?.name || "Ali Benrami"}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/70">
          {ghUser?.bio || "TODO(Ali): one-line description"}
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="rounded-xl bg-white text-black px-5 py-2.5 text-sm font-medium shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            View Projects
          </button>

          {ghUser ? (
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                {ghUser.publicRepos} repos
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                {ghUser.followers} followers
              </span>
            </div>
          ) : null}
        </div>
      </header>

      {/* Card navigation */}
      <section aria-label="Navigation" className="mt-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          <NavCard
            icon="🚀"
            title="Projects"
            description="Selected work"
            onClick={() => scrollTo("projects")}
          />
          <NavCard
            icon="🧠"
            title="About"
            description="Focus areas"
            onClick={() => scrollTo("about")}
          />
          <NavCard
            icon="🧪"
            title="Experiments"
            description="Curiosity builds"
            onClick={() => scrollTo("experiments")}
          />
          <NavCard
            icon="🧰"
            title="Skills"
            description="What I use"
            onClick={() => scrollTo("skills")}
          />
          <NavCard
            icon="📡"
            title="Contact"
            description="Let’s talk"
            onClick={() => scrollTo("contact")}
          />
        </div>
      </section>

      {/* Content */}
      <section className="mt-10 grid grid-cols-1 gap-6">
        <Section id="projects" title="🚀 Projects">
          {projectsStatus === "loading" ? (
            <p className="text-sm text-white/70">Loading projects from GitHub…</p>
          ) : null}
          {projectsStatus === "error" ? (
            <p className="text-sm text-white/70">
              Couldn’t load projects from GitHub right now.
            </p>
          ) : null}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
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

                {p.proudOf ? (
                  <p className="mt-4 text-sm text-white/65">
                    <span className="text-white/80">Design decision:</span> {p.proudOf}
                  </p>
                ) : null}

                <div className="mt-5 flex gap-3 text-sm">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/80 hover:text-white"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/80 hover:text-white"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="about" title="🧠 About">
          <p className="text-sm leading-relaxed text-white/75">
            {ghUser?.bio || "TODO(Ali): 2–3 sentence technical bio."}
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-white">Interests</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>TODO(Ali): interest</li>
                <li>TODO(Ali): interest</li>
                <li>TODO(Ali): interest</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Currently exploring</h3>
              <p className="mt-2 text-sm text-white/70">TODO(Ali): what you’re exploring</p>
            </div>
          </div>
        </Section>

        <Section id="experiments" title="🧪 Experiments">
          <div className="grid gap-3">
            {experiments.map((e) => (
              <div
                key={e.name}
                className="rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{e.name}</p>
                  {e.link ? (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Link
                    </a>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-white/70">{e.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="🧰 Skills">
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-white">Comfortable with</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>TODO(Ali)</li>
                <li>TODO(Ali)</li>
                <li>TODO(Ali)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Used in projects</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>TODO(Ali)</li>
                <li>TODO(Ali)</li>
                <li>TODO(Ali)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Currently exploring</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>TODO(Ali)</li>
                <li>TODO(Ali)</li>
                <li>TODO(Ali)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-white">Engineering values</h3>
            <p className="mt-2 text-sm text-white/70">TODO(Ali): values (optional)</p>
          </div>
        </Section>

        <Section id="contact" title="📡 Contact">
          <div className="grid gap-3 text-sm">
            <a className="text-white/80 hover:text-white" href="mailto:abenrami06@gmail.com">
              abenrami06@gmail.com
            </a>
            <a
              className="text-white/80 hover:text-white"
              href="https://github.com/AliBenrami"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-white/80 hover:text-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <p className="text-white/70">
              Open to internships or collaboration.
            </p>
          </div>
        </Section>
      </section>

      <footer className="mt-10 text-center text-xs text-white/50">
        Built with care. Minimal by design.
      </footer>
    </main>
  );
}
