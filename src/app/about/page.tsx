import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about me and my skills",
};

export default function AboutPage() {
  // List of skills with icons and proficiency levels
  const skills = [
    { name: "JavaScript", icon: "📄", proficiency: 90 },
    { name: "TypeScript", icon: "📄", proficiency: 85 },
    { name: "React", icon: "📄", proficiency: 90 },
    { name: "Next.js", icon: "📄", proficiency: 85 },
    { name: "Node.js", icon: "📄", proficiency: 80 },
    { name: "HTML/CSS", icon: "📄", proficiency: 95 },
    { name: "Tailwind CSS", icon: "📄", proficiency: 90 },
    { name: "SQL", icon: "📄", proficiency: 75 },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 sm:p-4">
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-xl">📄</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            Bio.txt
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 font-mono mb-6 sm:mb-8">
            {/* Bio Header */}
            <div className="mb-5 border-b border-zinc-200 dark:border-zinc-700 pb-3">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-800 dark:text-zinc-200">
                About Me
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Full Stack Developer | React Specialist
              </p>
            </div>

            {/* Bio Content - Responsive Layout */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 mb-6">
              {/* Profile Image - Centered on mobile, left-aligned on desktop */}
              <div className="flex justify-center sm:justify-start sm:flex-shrink-0">
                <div className="relative w-[180px] h-[180px]">
                  <Image
                    className="rounded-lg object-cover border-2 border-zinc-200 dark:border-zinc-700 shadow-md"
                    src="/profile.jpg"
                    alt="Profile picture"
                    fill
                    sizes="180px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Bio Text */}
              <div className="flex-1 space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                  Hello! I&apos;m Ali, a Full Stack Developer passionate about
                  creating interactive and responsive web applications.
                </p>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                  With a strong foundation in modern web technologies, I
                  specialize in building applications using React, Next.js, and
                  Node.js. I enjoy tackling complex problems and turning ideas
                  into elegant, functional solutions.
                </p>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  learning about the latest industry trends.
                </p>
              </div>
            </div>

            {/* Quick Facts Section */}
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-4 mb-6">
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3 text-sm sm:text-base">
                Quick Facts:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <span className="mr-2">🌐</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Based in: Dallas, TX
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">💼</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Status: Student Developer
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎓</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Education: BS in Computer Science, UTD
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">💻</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Favorite Tech: React & Next.js
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold">Last modified:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Skills section styled as a JSON file */}
          <div id="skills" className="my-6 sm:my-8">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl">📄</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
                skills.json
              </h1>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-6 rounded-lg overflow-x-auto">
              <pre className="text-xs sm:text-sm text-green-400 font-mono">
                {`{
  "name": "Ali Benrmai",
  "title": "Full Stack Developer",
  "skills": [
${skills
  .map(
    (skill, index) =>
      `    {
      "name": "${skill.name}",
      "icon": "${skill.icon}",
      "proficiency": ${skill.proficiency}${index < skills.length - 1 ? "," : ""}
    }`
  )
  .join("\n")}
  ]
}`}
              </pre>
            </div>
          </div>

          {/* Education and Experience sections could be added here */}
        </div>
      </div>
    </div>
  );
}
