"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./theme-provider";

export const formatPath = (path: string): string => {
  if (path === "/") return "/Portfolio/Home";
  return "/Portfolio" + path.replace(/\/(\w)/g, (_, char) => "/" + char.toUpperCase());
};

interface TopBarProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar, sidebarOpen }) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();



  return (
    <div className="flex flex-col">
      {/* Window controls bar */}
      <div className="flex items-center h-10 px-4 bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700">
        {/* Mobile sidebar toggle */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden mr-2 p-1 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? "✖" : "☰"}
        </button>

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
      <div className="flex items-center overflow-x-auto h-8 px-4 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700 text-sm scrollbar-hide">
        <div className="flex items-center text-zinc-600 dark:text-zinc-300 space-x-1 whitespace-nowrap">
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
export { formatPath };
