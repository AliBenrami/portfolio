export default function Button({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick: () => void;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="mt-6 inline-flex h-10 w-24 items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 text-white px-4 transition-colors whitespace-nowrap truncate"
    >
      {children}
    </a>
  );
}
