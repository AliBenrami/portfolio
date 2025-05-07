import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactProps {
  GitHub: string;
  LinkedIn: string;
  Email: string;
}

export default function ContactSection({
  GitHub,
  LinkedIn,
  Email,
}: ContactProps) {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        Get In Touch
      </h2>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href={GitHub}
            className="flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors w-full md:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-800 dark:text-gray-200" /> GitHub
          </a>
          <a
            href={LinkedIn}
            className="flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors w-full md:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-600 dark:text-blue-400" /> LinkedIn
          </a>
          <a
            href={`mailto:${Email}`}
            className="flex items-center gap-2 px-5 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors w-full md:w-auto justify-center"
          >
            <FaEnvelope className="text-red-500 dark:text-red-400" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
