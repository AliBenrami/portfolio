import Card from "./Card";
import type { Experience } from "@/data/resume";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export default function ExperienceCard({
  experience,
  className,
}: ExperienceCardProps) {
  return (
    <Card className={className}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold text-apple-text">
            {experience.role}
          </h3>
          <p className="text-apple-text-secondary">{experience.company}</p>
        </div>
        <span className="text-sm text-apple-text-secondary whitespace-nowrap">
          {experience.duration}
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {experience.description.map((item, i) => (
          <li
            key={i}
            className="text-apple-text-secondary text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-apple-accent before:rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
