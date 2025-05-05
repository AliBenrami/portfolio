export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Ali Benrmai. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://github.com/yourusername"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
