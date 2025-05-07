"use client";

import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

interface FileExplorerLayoutProps {
  children: React.ReactNode;
}

const FileExplorerLayout: React.FC<FileExplorerLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col h-screen bg-zinc-100 dark:bg-zinc-900">
      {/* Top navigation bar (with window controls) */}
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with folders */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md m-2 rounded-md">
          {children}
        </main>
      </div>
    </div>
  );
};

export default FileExplorerLayout;
