"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isPrimary = variant === "primary";
  const showAccentPill = isPrimary || isHovered;

  // Updated baseStyles:
  // - Removed px-6 py-3
  // - Added p-1.5 to act as the "track" padding around the pill
  const baseStyles =
    "inline-flex items-center justify-center p-1.5 text-base font-medium rounded-full relative overflow-hidden bg-[#eff0f2] border border-black/5 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-apple-accent/50";

  const styles = `${baseStyles} ${className}`;

  const animationProps = {
    whileTap: { scale: 0.95 },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  const content = (
    <>
      {/* Accent Background Pill */}
      <AnimatePresence initial={false}>
        {showAccentPill && (
          <motion.div
            initial={{ opacity: isPrimary ? 1 : 0, scale: isPrimary ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-1.5 bg-apple-accent shadow-apple rounded-full"
          />
        )}
      </AnimatePresence>

      {/* Button Text */}
      <motion.span
        animate={{ color: showAccentPill ? "#FFFFFF" : "var(--apple-accent, #1D1D1F)" }}
        transition={{ duration: 0.2 }}
        className="relative z-10 flex items-center gap-2 px-5 py-2"
      >
        {children}
      </motion.span>
    </>
  );

  if (href) {
    const isProtocolLink = href.startsWith("mailto:") || href.startsWith("tel:");

    if (external || isProtocolLink) {
      const isMailto = href.startsWith("mailto:");
      const isTel = href.startsWith("tel:");

      return (
        <motion.a
          href={href}
          {...(isMailto || isTel ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className={styles}
          onClick={onClick}
          {...animationProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink href={href} className={styles} onClick={onClick} {...animationProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      type="button" 
      className={styles} 
      onClick={onClick} 
      {...animationProps}
    >
      {content}
    </motion.button>
  );
}
