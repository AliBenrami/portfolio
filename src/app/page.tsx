"use client";
import { useState } from "react";

interface PortfolioDetails {
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function Home() {
  const [portfolioDetails, setPortfolioDetails] = useState<PortfolioDetails>({
    name: "Ali Benrami",
    description: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/111257593?v=4",
    link: "https://github.com/AliBenrami",
  });

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6 min-h-[500px]">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {portfolioDetails.name}
        </h1>
        <p className="mt-2 text-white/80">{portfolioDetails.description}</p>

        <div className="mt-4 overflow-hidden rounded-[200px]">
          <img
            src={portfolioDetails.image}
            alt={portfolioDetails.name}
            className="w-full h-56 md:h-64 object-cover"
          />
        </div>

        <a
          href={portfolioDetails.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 text-white px-4 py-2 transition-colors"
        >
          {portfolioDetails.link}
        </a>
      </div>
    </div>
  );
}
