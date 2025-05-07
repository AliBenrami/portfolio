import React from "react";

export const metadata = {
  title: "Resume | Portfolio",
  description: "View my professional resume",
};

export default function ResumePage() {
  // Resume data structured for display
  const resumeData = {
    personalInfo: {
      name: "Ali Benrami",
      title: "Full Stack Developer",
      location: "Your Location",
      email: "abenrami06@gmail.com",
      linkedin: "linkedin.com/in/ali-benrami-232b05248",
      github: "github.com/AliBenrami",
    },
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University Name",
        location: "City, State",
        graduationDate: "Month Year",
        gpa: "3.8/4.0",
      },
    ],
    experience: [
      {
        title: "Full Stack Developer",
        company: "Company Name",
        location: "City, State",
        startDate: "Month Year",
        endDate: "Present",
        responsibilities: [
          "Developed and maintained responsive web applications using React and Node.js",
          "Implemented RESTful APIs and database solutions",
          "Worked in an Agile development environment with cross-functional teams",
        ],
      },
      {
        title: "Web Developer Intern",
        company: "Internship Company",
        location: "City, State",
        startDate: "Month Year",
        endDate: "Month Year",
        responsibilities: [
          "Assisted in developing front-end components using HTML, CSS, and JavaScript",
          "Contributed to codebase improvements and bug fixes",
          "Participated in code reviews and team meetings",
        ],
      },
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
      frameworks: ["React", "Next.js", "Node.js", "Express"],
      tools: ["Git", "Docker", "AWS", "Vercel"],
      databases: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    projects: [
      {
        name: "Portfolio Website",
        description: "Personal portfolio website with file explorer theme",
        technologies: ["Next.js", "React", "Tailwind CSS"],
      },
      {
        name: "Pocket Secretary",
        description: "AI-powered scheduling assistant",
        technologies: ["React", "Node.js", "AI/ML", "Google API"],
      },
    ],
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 sm:p-4">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-xl">📄</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            Resume.pdf
          </h1>
        </div>

        {/* PDF Toolbar */}
        <div className="bg-zinc-200 dark:bg-zinc-800 mb-2 sm:mb-4 p-2 rounded-t-md flex items-center justify-between border-x border-t border-zinc-300 dark:border-zinc-700">
          <div className="flex items-center text-xs sm:text-sm space-x-2 sm:space-x-4">
            <button className="p-1 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700">
              <span>🔍</span>
            </button>
            <span className="text-zinc-600 dark:text-zinc-400">100%</span>
            <button className="p-1 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700">
              <span>⬇️</span>
            </button>
            <button className="p-1 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700">
              <span>🖨️</span>
            </button>
          </div>
          <div>
            <span className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
              Page 1 of 1
            </span>
          </div>
        </div>

        {/* PDF Content */}
        <div className="bg-white dark:bg-zinc-900 p-3 sm:p-6 md:p-8 border border-zinc-300 dark:border-zinc-700 rounded-b-md shadow-md w-full max-w-4xl mx-auto overflow-y-auto">
          {/* Header */}
          <header className="border-b pb-2 sm:pb-4 mb-3 sm:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              {resumeData.personalInfo.name}
            </h1>
            <h2 className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-2 sm:mb-3">
              {resumeData.personalInfo.title}
            </h2>
            <div className="flex flex-wrap text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 gap-x-3 sm:gap-x-4 gap-y-1">
              <div className="break-all">
                {resumeData.personalInfo.location}
              </div>
              <div className="break-all">{resumeData.personalInfo.email}</div>
              <div className="break-all">
                {resumeData.personalInfo.linkedin}
              </div>
              <div className="break-all">{resumeData.personalInfo.github}</div>
            </div>
          </header>

          {/* Education */}
          <section className="mb-3 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1 mb-2 sm:mb-3">
              Education
            </h2>

            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-2 sm:mb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">
                    {edu.degree}
                  </h3>
                  <span className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                    {edu.graduationDate}
                  </span>
                </div>
                <div className="text-zinc-700 dark:text-zinc-300 text-sm">
                  {edu.institution}, {edu.location}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  GPA: {edu.gpa}
                </div>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="mb-3 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1 mb-2 sm:mb-3">
              Experience
            </h2>

            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-3 sm:mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">
                    {exp.title}
                  </h3>
                  <span className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="text-zinc-700 dark:text-zinc-300 mb-1 text-sm">
                  {exp.company}, {exp.location}
                </div>
                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-3 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1 mb-2 sm:mb-3">
              Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-0.5 sm:mb-1 text-sm">
                  Languages
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.languages.join(", ")}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-0.5 sm:mb-1 text-sm">
                  Frameworks
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.frameworks.join(", ")}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-0.5 sm:mb-1 text-sm">
                  Tools
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.tools.join(", ")}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-0.5 sm:mb-1 text-sm">
                  Databases
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.databases.join(", ")}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1 mb-2 sm:mb-3">
              Projects
            </h2>

            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-2">
                <div className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  {project.name}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {project.description}
                </div>
                <div className="text-zinc-500 dark:text-zinc-500 text-xs">
                  Technologies: {project.technologies.join(", ")}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
