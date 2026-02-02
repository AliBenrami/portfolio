import Link from "next/link";

import { blogPosts } from "@/content/blogPosts";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="text-white/70 text-sm">Notes, learnings, and shipping logs.</p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-white/20 bg-white/5 p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h2 className="text-xl font-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <span className="text-white/60 text-sm">{post.date}</span>
              </div>
              <p className="mt-2 text-white/80">{post.excerpt}</p>
              <div className="mt-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 transition-colors text-sm"
                >
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-white/70 text-sm">
          Want this to be MDX later? I can wire that up next.
        </div>
      </div>
    </div>
  );
}
