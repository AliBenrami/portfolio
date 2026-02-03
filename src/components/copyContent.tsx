import { useEffect, useRef, useState } from "react";
import { CheckCircle, Copy } from "lucide-react";

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
      className="mt-6 inline-flex items-center gap-2 min-h-10 max-w-full rounded-lg bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F] px-4 py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md border border-[#E5E5E7]"
    >
      {isCopied ? (
        <CheckCircle className="h-5 w-5 shrink-0 text-[#34C759]" />
      ) : (
        <Copy className="h-5 w-5 shrink-0 text-[#8E8E93]" />
      )}
      <span className="max-w-full overflow-x-auto whitespace-nowrap">
        {content}
      </span>
    </div>
  );
}
