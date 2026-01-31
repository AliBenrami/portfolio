"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { GitHubUser } from "@/components/site/types";

export default function ContactPage() {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github/user")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return;
        setUser(data);
      })
      .catch(() => {
        if (cancelled) return;
        setUser(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-20 pt-14 md:px-6 md:pt-20">
      <h1 className="text-2xl font-semibold tracking-tight text-white">Contact</h1>
      <p className="mt-4 text-sm text-white/75">
        TODO(Ali): preferred contact note (e.g., open to internships/collab).
      </p>

      {user?.avatarUrl ? (
        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image
              src={user.avatarUrl}
              alt={user.name || user.login}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user.name || user.login}</p>
            <a
              className="text-sm text-white/70 hover:text-white"
              href={user.htmlUrl || "https://github.com/AliBenrami"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ) : null}

      <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
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
          href="TODO(Ali): add LinkedIn URL"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
