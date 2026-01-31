import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ali Benrami",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-20 pt-14 md:px-6 md:pt-20">
      <h1 className="text-2xl font-semibold tracking-tight text-white">About</h1>
      <p className="mt-4 text-sm leading-relaxed text-white/75">
        TODO(Ali): 2–3 sentence technical bio.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-sm font-medium text-white">Interests</h2>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            <li>TODO(Ali)</li>
            <li>TODO(Ali)</li>
            <li>TODO(Ali)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-sm font-medium text-white">Currently exploring</h2>
          <p className="mt-3 text-sm text-white/70">TODO(Ali)</p>
        </div>
      </div>
    </main>
  );
}
