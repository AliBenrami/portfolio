"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, submitting: true }));

    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        submitting: false,
        name: "",
        email: "",
        message: "",
      }));
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-xl">📄</span>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-mono">
            Contact.txt
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 font-mono">
            <div className="mb-8">
              <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                <span className="font-bold mr-2">FILE:</span>
                <span>/Portfolio/Contact.txt</span>
                <span className="ml-auto">READ/WRITE</span>
              </div>

              <h1 className="text-xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">
                Contact Information
              </h1>

              <div className="space-y-3 mb-6">
                <p className="text-zinc-700 dark:text-zinc-300">
                  I&apos;m always open to new opportunities, collaborations, or
                  just a friendly chat!
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Here&apos;s how you can reach me:
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    Email:
                  </h2>
                  <a
                    href="mailto:abenrami06@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    abenrami06@gmail.com
                  </a>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    LinkedIn:
                  </h2>
                  <a
                    href="https://www.linkedin.com/in/ali-benrami-232b05248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/ali-benrami-232b05248
                  </a>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    GitHub:
                  </h2>
                  <a
                    href="https://github.com/AliBenrami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    github.com/AliBenrami
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200">
                Send Me a Message
              </h2>

              {formState.submitted ? (
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-md border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200">
                  <p className="font-semibold">Message sent!</p>
                  <p className="text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() =>
                      setFormState((prev) => ({ ...prev, submitted: false }))
                    }
                    className="mt-2 text-xs underline text-green-700 dark:text-green-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formState.submitting}
                      className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        formState.submitting
                          ? "opacity-70 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {formState.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 mt-8 border-t border-zinc-200 dark:border-zinc-700">
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
