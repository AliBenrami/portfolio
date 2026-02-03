"use client";

import React from "react";

export default function AppleBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 w-screen h-screen pointer-events-none bg-white"
    >
      {/* Subtle gradient for depth - very Apple-like */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 113, 227, 0.03) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
