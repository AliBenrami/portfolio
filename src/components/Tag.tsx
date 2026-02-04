interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="text-xs px-2 py-1 bg-apple-bg-alt rounded-md text-apple-text-secondary">
      {children}
    </span>
  );
}
