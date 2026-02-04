import Image from "next/image";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";
import ScrollIndicator from "@/components/ScrollIndicator";
import DoubleButton from "@/components/AnimatedButtonGroup";
import { featuredSkills } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Hero
        title="Ali Benrami"
        subtitle="Software Engineer"
        description="Building digital experiences that matter. Focused on creating clean, performant, and user-friendly applications."
      >
        <DoubleButton buttons={[{ label: "View Projects", value: "/projects", href: "/projects" }, { label: "Get in Touch", value: "mailto:abenrami06@gmail.com", href: "mailto:abenrami06@gmail.com" }]} initialSelected="/projects" />
      </Hero>
      <ScrollIndicator targetId="about-section" hideAfterScroll={0.1} />


      <Section variant="gray" id="about-section">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <Image
              src="https://avatars.githubusercontent.com/u/111257593?v=4"
              alt="Ali Benrami"
              width={180}
              height={180}
              className="rounded-full"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-text tracking-tight">
              About Me
            </h2>
            <p className="mt-4 text-lg text-apple-text-secondary leading-relaxed">
            What really drives me is the way AI and machine learning can transform how we interact with technology. 
            I&apos;m especially fascinated by embedded systems - there&apos;s something compelling about bringing 
            intelligence into physical devices with real constraints. Whether I&apos;m working with NLP, building 
            out RAG pipelines, or designing agentic architectures, what I&apos;m always chasing is that moment when 
            something I&apos;ve built genuinely helps someone solve a problem they couldn&apos;t before.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-apple-text mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-4">
            {featuredSkills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <DoubleButton buttons={[{ label: "GitHub", value: "https://github.com/AliBenrami", href: "https://github.com/AliBenrami" }, { label: "LinkedIn", value: "https://www.linkedin.com/in/ali-benrami-232b05248/", href: "https://www.linkedin.com/in/ali-benrami-232b05248/" }]} initialSelected="https://github.com/AliBenrami" />
        </div>
      </Section>
    </>
  );
}
