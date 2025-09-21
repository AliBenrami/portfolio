"use client";
import { useEffect, useState } from "react";

interface dotsInterface {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}
export default function SkyBackground() {
  const [dots, setDots] = useState<dotsInterface[]>([]);

  useEffect(() => {
    const initialDots: dotsInterface[] = Array.from({ length: 250 }, (_, i) => {
      const duration = 3 + Math.random() * 4; // 3s - 7s
      return {
        id: i,
        x: Math.random(),
        y: Math.random(),
        size: Math.floor(Math.random() * 3 + 2),
        delay: -Math.random() * duration, // negative delay gives a random phase
        duration,
      };
    });
    setDots(initialDots);
  }, []);

  // Background dots are static; animation is handled via CSS only.

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 w-screen h-screen bg-gradient-to-br from-black to-blue-950 overflow-hidden pointer-events-none"
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute items-center justify-center"
          style={{
            left: `${dot.x * 100}%`,
            top: `${dot.y * 100}%`,
            animation: `twinkle ${dot.duration}s cubic-bezier(0.45, 0.05, 0.55, 0.95) ${dot.delay}s infinite`,
            animationFillMode: "both",
            opacity: 0.25,
            transform: "scale(1)",
            willChange: "opacity, transform",
          }}
        >
          <div
            className={` bg-white/80 rounded-full flex items-center justify-center transition-all`}
            style={{ width: dot.size, height: dot.size }}
          >
            <div
              className={` bg-white/60 rounded-full blur-[10px] transition-all`}
              style={{
                width: dot.size + 10,
                height: dot.size + 10,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
