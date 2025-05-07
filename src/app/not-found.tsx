import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 mr-4 flex-shrink-0 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <span className="text-xl">❌</span>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            FileNotFound.txt
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-red-200 dark:border-red-900/30 font-mono">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-red-500 dark:text-red-400 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                  Error 404: File Not Found
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300">
                  The file you&apos;re looking for could not be found in this
                  directory.
                </p>
              </div>
            </div>

            <div className="bg-zinc-200 dark:bg-zinc-700/50 p-4 rounded-md mb-8 font-mono text-sm text-zinc-700 dark:text-zinc-300">
              <p className="mb-2">Error details:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Path not found in file system</li>
                <li>Check the URL and try again</li>
                <li>The file might have been moved or deleted</li>
                <li>
                  You might not have proper permissions to access this file
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <span className="mr-2">🏠</span> Return to Home
              </Link>

              <div className="text-zinc-600 dark:text-zinc-400">
                Or navigate to another directory:
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span className="mr-1">📁</span> About
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span className="mr-1">📁</span> Projects
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span className="mr-1">📄</span> Resume.pdf
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span className="mr-1">📄</span> Contact.txt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
