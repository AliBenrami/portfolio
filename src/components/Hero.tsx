"use client";

import { motion, Variants } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
}: HeroProps) {
  const letters = title.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-apple-text tracking-tight flex flex-wrap justify-center overflow-visible"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-xl md:text-2xl text-apple-text-secondary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
        
        {description && (
          <motion.p 
            className="mt-6 text-lg text-apple-text-secondary max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {description}
          </motion.p>
        )}
        
        {children && (
          <motion.div 
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}