"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group flex-shrink-0 w-[340px] md:w-[400px] bg-white rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-500 border border-[#E5E5E7] snap-start"
    >
      {/* Image */}
      <div className="relative w-full h-72 bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 340px, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 space-y-5">
        {/* Title and Subtitle */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-[#1D1D1F] leading-tight tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="text-base text-[#86868B] font-medium">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-[15px] text-[#1D1D1F] leading-relaxed line-clamp-2 min-h-[3rem]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-[#F5F5F7] text-[#6E6E73] rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-2">
          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0071E3] text-white rounded-full text-sm font-medium hover:bg-[#0077ED] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>View Demo</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          )}
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#D2D2D7] text-[#1D1D1F] rounded-full text-sm font-medium hover:bg-[#F5F5F7] transition-all duration-200"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
