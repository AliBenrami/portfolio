"use client";

import { useEffect, useState } from "react";
import { HiArrowDown } from "react-icons/hi";

interface ScrollIndicatorProps {
  targetId: string;
  hideAfterScroll?: number; // Percentage of hero height to hide after
}
 
export default function ScrollIndicator({
  targetId,
  hideAfterScroll = 0.5,
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight - 64; // Account for navbar
      setIsVisible(scrollPosition < heroHeight * hideAfterScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideAfterScroll]);

  const scrollToTarget = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 z-40 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTarget}
        aria-label="Scroll to next section"
        className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-apple transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <HiArrowDown className="w-6 h-6 text-apple-text-secondary group-hover:text-apple-text transition-colors animate-bounce" />
        <span className="text-xs text-apple-text-secondary group-hover:text-apple-text font-medium">
          Scroll
        </span>
      </button>
    </div>
  );
}
