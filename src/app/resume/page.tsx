import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import StatCard from "@/components/StatCard";
import SkillCategory from "@/components/SkillCategory";
import { HiDownload } from "react-icons/hi";
import {
  personalInfo,
  highlights,
  experiences,
  skills,
  education,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Ali Benrami",
  description: "Resume, experience, education, and skills for Ali Benrami.",
};

export default function ResumePage() {
  const resumePath = "/resume.pdf";

  return (
    <>
      <PageHeader title={personalInfo.name} subtitle={personalInfo.title} />

      {/* Summary & Contact */}
      <section className="pb-12 px-6 -mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-apple-text-secondary max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {personalInfo.contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-apple-bg-alt text-apple-text-secondary hover:bg-apple-accent hover:text-white transition-all duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <Section variant="gray">
        <h2 className="text-3xl font-bold text-apple-text tracking-tight text-center">
          At a Glance
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((highlight) => (
            <StatCard
              key={highlight.label}
              value={highlight.value}
              label={highlight.label}
            />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section variant="white">
        <h2 className="text-3xl font-bold text-apple-text tracking-tight text-center">
          Experience
        </h2>
        <div className="mt-12 space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              experience={exp}
            />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section variant="gray">
        <h2 className="text-3xl font-bold text-apple-text tracking-tight text-center">
          Skills
        </h2>
        <div className="mt-12 space-y-8">
          <SkillCategory title="Languages" skills={skills.languages} />
          <SkillCategory
            title="Frameworks & Libraries"
            skills={skills.frameworks}
          />
          <SkillCategory title="Tools & Databases" skills={skills.tools} />
        </div>
      </Section>

      {/* Education Section */}
      <Section variant="white">
        <h2 className="text-3xl font-bold text-apple-text tracking-tight text-center">
          Education
        </h2>
        <div className="mt-12 max-w-xl mx-auto">
          <Card>
            <h3 className="text-xl font-semibold text-apple-text">
              {education.degree}
            </h3>
            <p className="text-apple-text-secondary">{education.school}</p>
            <p className="text-sm text-apple-text-secondary mt-1">
              Expected {education.year}
            </p>
            {education.details && (
              <p className="text-sm text-apple-text-secondary mt-2">
                {education.details}
              </p>
            )}
          </Card>
        </div>
      </Section>

      {/* Download CTA Section */}
      <Section variant="gray">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-apple-text tracking-tight">
            Want the PDF?
          </h2>
          <p className="mt-4 text-apple-text-secondary">
            Download my resume for your records.
          </p>
          <div className="mt-8">
            <Button
              href={resumePath}
              external
              className="inline-flex items-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
