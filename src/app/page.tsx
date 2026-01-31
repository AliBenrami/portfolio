"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Hero from "@/components/site/Hero";
import NavCards from "@/components/site/NavCards";
import type { GitHubUser } from "@/components/site/types";

export default function HomePage() {
  const router = useRouter();
  const [ghUser, setGhUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
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

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-20 pt-14 md:px-6 md:pt-20">
      <Hero user={ghUser} onPrimary={() => router.push("/projects")} />
      <NavCards />
    </main>
  );
}
