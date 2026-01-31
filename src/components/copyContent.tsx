import { useEffect, useRef, useState } from "react";
import { IoCheckmarkCircle, IoDocumentText } from "react-icons/io5";

export default function CopyContent({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isCopied) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        timeoutRef.current = null;
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isCopied]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Copy content"
      title={content}
      onClick={() => {
        // Clipboard may be unavailable in some environments (non-secure context, older browsers, tests).
        // We still toggle UI feedback even if copy fails.
        try {
          if (typeof window !== "undefined") {
            window.navigator.clipboard?.writeText?.(content);
          }
        } catch {
          // no-op
        }
        setIsCopied(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          try {
            if (typeof window !== "undefined") {
              window.navigator.clipboard?.writeText?.(content);
            }
          } catch {
            // no-op
          }
          setIsCopied(true);
        }
      }}
      className="mt-6 inline-flex items-center gap-2 min-h-10 max-w-full rounded-lg bg-white/20 hover:bg-white/30 text-white px-4 py-2 transition-colors cursor-pointer"
    >
      {isCopied ? (
        <IoCheckmarkCircle className="h-5 w-5 shrink-0 text-green-400" />
      ) : (
        <IoDocumentText className="h-5 w-5 shrink-0 text-white/80" />
      )}
      <span className="max-w-full overflow-x-auto whitespace-nowrap">
        {content}
      </span>
    </div>
  );
}
