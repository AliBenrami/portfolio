"use client";

import Link from "next/link";

function Card({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, rgba(255,255,255,0.10), transparent 40%), radial-gradient(600px circle at 80% 80%, rgba(96,165,250,0.10), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </Link>
  );
}

export default function NavCards() {
  return (
    <section aria-label="Navigation" className="mt-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        <Card icon="🚀" title="Projects" description="Selected work" href="/projects" />
        <Card icon="🧠" title="About" description="Focus areas" href="/about" />
        <Card icon="🧪" title="Experiments" description="Curiosity builds" href="/experiments" />
        <Card icon="🧰" title="Skills" description="What I use" href="/skills" />
        <Card icon="📡" title="Contact" description="Let’s talk" href="/contact" />
      </div>
    </section>
  );
}
