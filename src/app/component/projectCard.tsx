const ProjectCard = ({
  projectName,
  description,
  demoLink,
  githubLink,
}: {
  projectName: string;
  description: string;
  demoLink: string;
  githubLink: string;
}) => {
  return (
    <div className="border dark:border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2 dark:text-white">{projectName}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex gap-4">
        <a
          href={demoLink}
          className="text-blue-600 hover:underline dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={githubLink}
          className="text-blue-600 hover:underline dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
