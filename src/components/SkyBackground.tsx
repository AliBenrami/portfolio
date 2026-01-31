"use client";

import React, { useEffect, useState } from "react";

type Dot = {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: number;
  twinkleDuration: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
};

function mulberry32(seed: number) {
  return function rng() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getOrCreateSkySeed(): number {
  // Persist across route changes + reloads so the starfield doesn't "jump".
  const key = "portfolio.skySeed.v1";
  const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
  if (existing) {
    const n = Number(existing);
    if (Number.isFinite(n)) return n;
  }

  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  const seed = buf[0] || 1;
  window.localStorage.setItem(key, String(seed));
  return seed;
}

function generateDots(seed: number, count: number): Dot[] {
  const rand = mulberry32(seed);

  return Array.from({ length: count }, (_, i) => {
    // Twinkle
    const twinkleDuration = 3 + rand() * 4; // 3s - 7s
    const twinkleDelay = -rand() * twinkleDuration; // negative delay gives a random phase

    // Drift (subtle, slow)
    const driftDuration = 20 + rand() * 35; // 20s - 55s
    const driftMag = 8 + rand() * 18; // px
    const angle = rand() * Math.PI * 2;

    return {
      id: i,
      x: rand(),
      y: rand(),
      size: Math.floor(rand() * 3 + 2),
      twinkleDelay,
      twinkleDuration,
      driftX: Math.cos(angle) * driftMag,
      driftY: Math.sin(angle) * driftMag,
      driftDuration,
    };
  });
}

export default function SkyBackground() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const seed = getOrCreateSkySeed();
    setDots(generateDots(seed, 250));
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    // Very subtle parallax. Smooth with rAF so cursor movement doesn't feel jittery.
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      targetX = nx;
      targetY = ny;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      // Scale down to keep it calm.
      setParallax({ x: curX * 10, y: curY * 8 });
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 w-screen h-screen bg-gradient-to-br from-black to-blue-950 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(${parallax.x.toFixed(2)}px, ${parallax.y.toFixed(2)}px, 0)`,
          willChange: "transform",
        }}
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute items-center justify-center sky-dot"
            style={
              {
                left: `${dot.x * 100}%`,
                top: `${dot.y * 100}%`,
                // Combine twinkle + drift; keep transforms isolated to this wrapper
                animation: `twinkle ${dot.twinkleDuration}s cubic-bezier(0.45, 0.05, 0.55, 0.95) ${dot.twinkleDelay}s infinite, star-drift ${dot.driftDuration}s ease-in-out ${dot.twinkleDelay}s infinite alternate`,
                animationFillMode: "both",
                opacity: 0.25,
                willChange: "opacity, transform",
                // Drift targets (CSS variables used by star-drift)
                "--dx": `${dot.driftX.toFixed(2)}px`,
                "--dy": `${dot.driftY.toFixed(2)}px`,
              } as React.CSSProperties & { "--dx": string; "--dy": string }
            }
          >
            <div
              className="bg-white/80 rounded-full flex items-center justify-center"
              style={{ width: dot.size, height: dot.size }}
            >
              <div
                className="bg-white/60 rounded-full blur-[10px]"
                style={{
                  width: dot.size + 10,
                  height: dot.size + 10,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
