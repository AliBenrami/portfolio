"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import Section from "@/components/Section";
import { featuredProjects } from "@/data/projects";
import { portfolioDetails } from "@/data/Mydata";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Featured Projects Carousel */}
      <ProjectCarousel
        projects={featuredProjects}
        title="The latest. All-new and lovable."
        subtitle="A selection of my recent work and open-source contributions"
      />

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Passionate full-stack developer with expertise in building modern web applications. I focus on creating elegant solutions that combine beautiful design with powerful functionality."
        background="muted"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <p className="text-xl text-[#1D1D1F] leading-relaxed font-light">
            {portfolioDetails.description}
          </p>
          <p className="text-lg text-[#86868B] leading-relaxed">
            I specialize in creating user-centered experiences that are both
            beautiful and functional. Whether it&apos;s a complex web application or
            a simple landing page, I approach each project with attention to
            detail and a focus on performance.
          </p>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Technologies"
        subtitle="Technologies I work with regularly"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            {
              category: "Frontend",
              items: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Vue.js",
              ],
            },
            {
              category: "Backend",
              items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
            },
            {
              category: "Tools",
              items: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
            },
          ].map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-6"
            >
              <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-[-0.02em]">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-[#0071E3] text-white rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Let&apos;s Connect"
        subtitle="I&apos;m always interested in hearing about new opportunities and exciting projects. Feel free to reach out if you&apos;d like to collaborate or just say hello!"
        background="muted"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={`mailto:${portfolioDetails.email}`}
            whileHover={{ scale: 1.05, backgroundColor: "#0077ED" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] text-white rounded-full text-base font-medium hover:shadow-md transition-all duration-200 shadow-sm"
          >
            Send Email
          </motion.a>
          <motion.a
            href={portfolioDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#F5F5F7" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#D2D2D7] text-[#1D1D1F] rounded-full text-base font-medium transition-all duration-200"
          >
            View GitHub
          </motion.a>
        </motion.div>
      </Section>
    </main>
  );
}
