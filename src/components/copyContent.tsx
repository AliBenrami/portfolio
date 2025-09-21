import { useEffect, useState } from "react";
import { IoCheckmarkCircle, IoDocumentText } from "react-icons/io5";

export default function CopyContent({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Copy content"
      title={content}
      onClick={() => {
        navigator.clipboard.writeText(content);
        setIsCopied(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigator.clipboard.writeText(content);
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
