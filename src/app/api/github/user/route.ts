import { NextResponse } from "next/server";

export const revalidate = 1800; // 30 minutes

export async function GET() {
  const res = await fetch("https://api.github.com/users/AliBenrami", {
    headers: {
      Accept: "application/vnd.github+json",
    },
    // Next.js caching
    next: { revalidate },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "github_fetch_failed", status: res.status },
      { status: 502 }
    );
  }

  const data = (await res.json()) as {
    login: string;
    name?: string | null;
    bio?: string | null;
    blog?: string | null;
    avatar_url?: string | null;
    html_url?: string | null;
    public_repos: number;
    followers: number;
    following: number;
  };

  return NextResponse.json({
    login: data.login,
    name: data.name ?? null,
    bio: data.bio ?? null,
    blog: data.blog ?? null,
    avatarUrl: data.avatar_url ?? null,
    htmlUrl: data.html_url ?? null,
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
  });
}
