import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/content/blogPosts";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6">
        <Link
          href="/blog"
          className="text-white/70 hover:text-white transition-colors text-sm"
        >
          ← Back to Blog
        </Link>

        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          {post.title}
        </h1>
        <div className="mt-1 text-white/60 text-sm">{post.date}</div>

        <div className="mt-6 whitespace-pre-wrap text-white/85 leading-relaxed">
          {post.content}
        </div>
      </div>
    </div>
  );
}
