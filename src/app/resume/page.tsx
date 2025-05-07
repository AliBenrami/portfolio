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
      location: "Richardson, TX",
      phone: "972-266-3247",
      email: "abenrami06@gmail.com",
      linkedin: "linkedin.com/in/ali-benrami-232b05248",
      github: "github.com/AliBenrami",
    },
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "The University of Texas at Dallas",
        location: "Richardson, TX",
        graduationDate: "Expected May 2028",
        gpa: "3.9/4.0",
        coursework:
          "Relevant Coursework: CS 1436 (Programming Fundamentals), CS 1337 (Computer Science I), AP Computer Science A, AP Computer Science Principles",
        activities:
          "Activities: Participating in hackathons, coding competitions, and collaborative programming projects",
      },
    ],
    skills: {
      technical: [
        "JavaScript/TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Python",
        "C/C++",
        "Java",
        "HTML5/CSS3",
        "Tailwind CSS",
        "Git/GitHub",
      ],
      databases: ["MongoDB", "Supabase", "SQL"],
      tools: ["VS Code", "GitHub", "Vercel", "Figma (basics)"],
      additional: [
        "Microsoft Office (Excel, Access, Word, PowerPoint, Outlook)",
        "Problem-Solving",
        "Responsive Design",
        "UI/UX Principles",
      ],
    },
    projects: [
      {
        name: "Portfolio Website",
        description:
          "A personal portfolio website built with Next.js and TailwindCSS with a file explorer theme UI.",
        details:
          "Implemented responsive design, dark mode support, and interactive UI elements to showcase projects and skills. Designed with a file explorer inspired interface for an interactive browsing experience. Connected to Supabase backend to dynamically load project information.",
        technologies: [
          "Next.js",
          "React",
          "TailwindCSS",
          "TypeScript",
          "Supabase",
        ],
      },
      {
        name: "Pocket Secretary",
        description:
          "An AI-powered scheduling assistant that turns everyday language into structured calendar events with seamless Google Calendar integration.",
        details:
          "Developed using React and Node.js with integration to AI services and Google Calendar API for automated scheduling. Created an intuitive interface that provides immediate visual feedback and confirmation of scheduled events.",
        technologies: [
          "Flutter",
          "Supabase",
          "AI/ML",
          "Google Calendar API",
          "Gemini API",
        ],
      },
    ],
    organizations: [
      {
        name: "Association for Computing Machinery (ACM)",
        institution: "UT Dallas",
        duration: "August 2024-Present",
        role: "Active Member",
        activities:
          "Participating in weekly coding challenges, attending technical workshops, and networking with industry professionals",
      },
      {
        name: "Artificial Intelligence Society (AIS)",
        institution: "UT Dallas",
        duration: "August 2024-Present",
        role: "Member",
        activities:
          "Exploring machine learning concepts, attending AI demonstrations and speaker sessions",
      },
    ],
    interests: [
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
      "Software Engineering Best Practices",
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
              Page 1 of 2
            </span>
          </div>
        </div>

        {/* PDF Content */}
        <div className="bg-white dark:bg-zinc-900 p-3 sm:p-6 md:p-8 border border-zinc-300 dark:border-zinc-700 rounded-b-md shadow-md w-full max-w-4xl mx-auto overflow-y-auto">
          {/* Header */}
          <header className="border-b border-zinc-300 dark:border-zinc-700 pb-4 mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              {resumeData.personalInfo.name}
            </h1>
            <h2 className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-3">
              {resumeData.personalInfo.title}
            </h2>
            <div className="flex flex-wrap text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <span className="mr-1">📍</span>
                <span className="break-all">
                  {resumeData.personalInfo.location}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">📱</span>
                <span className="break-all">
                  {resumeData.personalInfo.phone}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">📧</span>
                <span className="break-all">
                  {resumeData.personalInfo.email}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">👔</span>
                <span className="break-all">
                  {resumeData.personalInfo.linkedin}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-1">💻</span>
                <span className="break-all">
                  {resumeData.personalInfo.github}
                </span>
              </div>
            </div>
          </header>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
              Education
            </h2>

            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">
                    {edu.degree}
                  </h3>
                  <span className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                    {edu.graduationDate}
                  </span>
                </div>
                <div className="text-zinc-700 dark:text-zinc-300 text-sm mb-1">
                  {edu.institution}, {edu.location}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-medium">
                  GPA: {edu.gpa}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-2">
                  {edu.coursework}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1">
                  {edu.activities}
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
              Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1 text-sm">
                  Technical
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.technical.join(", ")}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1 text-sm">
                  Databases
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.databases.join(", ")}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1 text-sm">
                  Tools & Environments
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.tools.join(", ")}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1 text-sm">
                  Additional
                </h3>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                  {resumeData.skills.additional.join(", ")}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
              Projects
            </h2>

            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-5">
                <div className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                  {project.name}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mb-1 italic">
                  {project.description}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mb-1">
                  {project.details}
                </div>
                <div className="text-zinc-500 dark:text-zinc-500 text-xs">
                  <span className="font-medium">Technologies:</span>{" "}
                  {project.technologies.join(", ")}
                </div>
              </div>
            ))}
          </section>

          {/* Organizations */}
          <section className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
              Organizations
            </h2>

            {resumeData.organizations.map((org, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm">
                    {org.name}
                    {org.role && (
                      <span className="font-normal"> — {org.role}</span>
                    )}
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400 text-xs">
                    {org.duration}
                  </div>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">
                  {org.institution}
                </div>
                {org.activities && (
                  <div className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                    {org.activities}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
              Areas of Interest
            </h2>
            <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
              {resumeData.interests.join(" • ")}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
