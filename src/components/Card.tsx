interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-apple shadow-apple p-6 ${
        hover
          ? "transition-shadow duration-300 hover:shadow-apple-lg"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
