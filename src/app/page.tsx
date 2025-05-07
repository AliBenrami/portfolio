import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-2">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-xl">📄</span>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            Welcome.txt
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 font-mono">
            <div className="flex items-center mb-6">
              <Image
                className="rounded-full mr-4"
                src="/profile.jpg"
                alt="Profile picture"
                width={80}
                height={80}
                priority
              />
              <div>
                <h1 className="text-2xl font-bold mb-1">Ali Benrmai</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-4">Welcome to my portfolio file system! 👋</p>
              <p className="mb-4">
                I&apos;m a passionate developer with experience in building web
                applications. I specialize in React, Next.js, and Node.js.
              </p>
              <p>
                Navigate through the folders on the left to explore my projects,
                learn more about me, or find my contact information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Quick Links:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  📁{" "}
                  <a
                    href="/about"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    About
                  </a>{" "}
                  - Learn more about me and my skills
                </li>
                <li>
                  📁{" "}
                  <a
                    href="/projects"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Projects
                  </a>{" "}
                  - Browse my recent work
                </li>
                <li>
                  📄{" "}
                  <a
                    href="/resume"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Resume.pdf
                  </a>{" "}
                  - View or download my resume
                </li>
                <li>
                  📄{" "}
                  <a
                    href="/contact"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Contact.txt
                  </a>{" "}
                  - Get in touch with me
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold">Last modified:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
