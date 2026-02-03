"use client";

import { useRef, useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

export default function ProjectCarousel({
  projects,
  title = "The latest. All-new and lovable.",
  subtitle,
}: ProjectCarouselProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollButtons = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < maxScroll - 10);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      updateScrollButtons();
      carousel.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      return () => {
        carousel.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, [projects]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      animate(carouselRef.current.scrollLeft, newScrollLeft, {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft = latest;
          }
        },
      });
    }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-[#1D1D1F] mb-4 tracking-[-0.03em] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-[#86868B] max-w-2xl md:max-w-none">{subtitle}</p>
          )}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#F5F5F7" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-[#E5E5E7] items-center justify-center transition-all duration-200 backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-[#1D1D1F]" />
            </motion.button>
          )}

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 snap-x snap-mandatory pl-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#F5F5F7" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-[#E5E5E7] items-center justify-center transition-all duration-200 backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-[#1D1D1F]" />
            </motion.button>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
