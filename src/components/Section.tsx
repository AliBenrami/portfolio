interface SectionProps {
  children: React.ReactNode;
  variant?: "white" | "gray";
  className?: string;
  id?: string;
}

export default function Section({
  children,
  variant = "white",
  className = "",
  id,
}: SectionProps) {
  const bgClass = variant === "gray" ? "bg-apple-bg-alt" : "bg-apple-bg";

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className="max-w-4xl mx-auto px-6 py-20">{children}</div>
    </section>
  );
}
