"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { GitHubUser } from "@/components/site/types";

export default function Hero({
  user,
  onPrimary,
}: {
  user: GitHubUser | null;
  onPrimary?: () => void;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium tracking-[0.2em] text-white/60">
        COMPUTER SCIENCE
      </p>

      <div className="mt-5 flex flex-col items-center gap-4">
        {user?.avatarUrl ? (
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image
              src={user.avatarUrl}
              alt={user.name || user.login}
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {user?.name || "Ali Benrami"}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            {user?.bio || "TODO(Ali): one-line description"}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Button
            onClick={onPrimary}
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
          >
            View Projects
          </Button>

          {user ? (
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                {user.publicRepos} repos
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                {user.followers} followers
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
