interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div
      className={`bg-white rounded-apple shadow-apple p-6 text-center transition-all duration-300 hover:shadow-apple-lg hover:-translate-y-1 ${className}`}
    >
      <div className="text-4xl md:text-5xl font-bold text-apple-text tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-sm text-apple-text-secondary">{label}</div>
    </div>
  );
}
