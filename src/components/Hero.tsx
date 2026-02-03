"use client";

import { portfolioDetails } from "@/data/Mydata";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-24 md:pb-32 bg-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl text-center space-y-10"
      >
        {/* Large Name */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-semibold text-[#1D1D1F] tracking-[-0.04em] leading-[0.9]">
            {portfolioDetails.name.split(" ")[0]}
            <br />
            <span className="text-[#86868B] font-normal">
              {portfolioDetails.name.split(" ")[1]}
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-[#1D1D1F] font-medium tracking-[-0.02em]"
        >
          {portfolioDetails.title}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-[#86868B] max-w-2xl mx-auto leading-relaxed font-light"
        >
          {portfolioDetails.description}
        </motion.p>

        {/* CTA Buttons - Apple Style */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <motion.a
            href={portfolioDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#0077ED" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] text-white rounded-full text-base font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span>View GitHub</span>
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            href={`mailto:${portfolioDetails.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 text-[#0071E3] rounded-full text-base font-medium hover:bg-[#0071E3]/5 transition-all duration-200"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          variants={itemVariants}
          className="pt-20 text-sm text-[#86868B] space-y-3"
        >
          <p className="font-medium">{portfolioDetails.location}</p>
          {portfolioDetails.available && (
            <p className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-[#34C759] rounded-full animate-pulse shadow-sm shadow-[#34C759]/50" />
              <span className="font-medium">Available for opportunities</span>
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
