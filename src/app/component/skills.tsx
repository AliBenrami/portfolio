export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "Git",
    "RESTful APIs",
  ];

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-center transition-colors duration-300"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
