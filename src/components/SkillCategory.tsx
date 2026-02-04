import SkillBadge from "./SkillBadge";
import { Skill } from "@/data/resume";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  className?: string;
}

export default function SkillCategory({
  title,
  skills,
  className = "",
}: SkillCategoryProps) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-apple-text mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
