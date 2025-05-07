"use client";

import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

interface FileExplorerLayoutProps {
  children: React.ReactNode;
}

const FileExplorerLayout: React.FC<FileExplorerLayoutProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-zinc-100 dark:bg-zinc-900">
      {/* Top navigation bar (with window controls) */}
      <TopBar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Backdrop overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar with folders - hidden on mobile by default */}
        <div
          className={`
          ${sidebarOpen ? "block" : "hidden"}
          md:block fixed md:static z-20 h-[calc(100%-3rem)]
          md:h-auto md:flex-shrink-0
        `}
        >
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-2 sm:p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md m-1 sm:m-2 rounded-md">
          {children}
        </main>
      </div>
    </div>
  );
};

export default FileExplorerLayout;
