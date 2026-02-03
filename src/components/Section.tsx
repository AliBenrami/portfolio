"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "muted";
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-32 px-6 md:px-8 ${
        background === "muted" ? "bg-[#FBFBFD]" : "bg-white"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1D1D1F] mb-4 tracking-[-0.03em] leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-[#86868B] max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
