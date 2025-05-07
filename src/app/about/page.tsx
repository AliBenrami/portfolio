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
      <div className="p-2">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-xl">📄</span>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            Bio.txt
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 font-mono mb-8">
            <div className="flex mb-6 items-start">
              <Image
                className="rounded-lg mr-6"
                src="/profile.jpg"
                alt="Profile picture"
                width={180}
                height={180}
                priority
              />
              <div>
                <h1 className="text-2xl font-bold mb-3">About Me</h1>
                <p className="mb-4">
                  Hello! I&apos;m Ali, a Full Stack Developer passionate about
                  creating interactive and responsive web applications.
                </p>
                <p className="mb-4">
                  With a strong foundation in modern web technologies, I
                  specialize in building applications using React, Next.js, and
                  Node.js. I enjoy tackling complex problems and turning ideas
                  into elegant, functional solutions.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  learning about the latest industry trends.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold">Last modified:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Skills section styled as a JSON file */}
          <div id="skills" className="my-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-xl">📄</span>
              </div>
              <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
                skills.json
              </h1>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono">
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
