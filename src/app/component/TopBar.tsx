"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./theme-provider";

const TopBar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Convert the pathname to a file explorer-style path
  const formatPath = (path: string) => {
    if (path === "/") return "/Portfolio/Home";
    // Replace the first slash and capitalize each segment
    return (
      "/Portfolio" +
      path.replace(/\/(\w)/g, (_, char) => "/" + char.toUpperCase())
    );
  };

  return (
    <div className="flex flex-col">
      {/* Window controls bar */}
      <div className="flex items-center h-10 px-4 bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
          Portfolio - File Explorer
        </div>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          title={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Path navigation bar */}
      <div className="flex items-center h-8 px-4 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700 text-sm">
        <div className="flex items-center text-zinc-600 dark:text-zinc-300 space-x-1">
          <span>📁</span>
          {formatPath(pathname)
            .split("/")
            .filter(Boolean)
            .map((segment, index, array) => {
              // Build the path for this breadcrumb
              const path =
                "/" +
                array
                  .slice(0, index + 1)
                  .join("/")
                  .toLowerCase();

              return (
                <React.Fragment key={index}>
                  <span>/</span>
                  {index === array.length - 1 ? (
                    <span className="font-medium">{segment}</span>
                  ) : (
                    <Link href={path} className="hover:underline">
                      {segment}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
