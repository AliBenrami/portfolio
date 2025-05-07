import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 mr-4 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xl">📂</span>
          </div>
          <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-700 rounded-md animate-pulse"></div>
        </div>

        <div className="max-w-none">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col space-y-4">
              {/* Loading progress bar */}
              <div className="mb-4">
                <div className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
                  Loading file contents...
                </div>
                <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 dark:bg-blue-600 rounded-full animate-loading-progress"></div>
                </div>
              </div>

              {/* Placeholder content */}
              <div className="space-y-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded-md w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-md w-full animate-pulse"></div>
                      <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded-md w-5/6 animate-pulse"></div>
                    </div>
                  ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
                  Processing...
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-zinc-300 dark:border-zinc-600 border-t-blue-500 dark:border-t-blue-400 animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
