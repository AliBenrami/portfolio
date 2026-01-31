import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments — Ali Benrami",
};

export default function ExperimentsPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-20 pt-14 md:px-6 md:pt-20">
      <h1 className="text-2xl font-semibold tracking-tight text-white">Experiments</h1>
      <p className="mt-4 text-sm leading-relaxed text-white/75">
        TODO(Ali): short intro (1–2 sentences).
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-white/70">TODO(Ali): experiment list</p>
      </div>
    </main>
  );
}
