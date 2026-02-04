import { IconType } from "react-icons";

interface SkillBadgeProps {
  name: string;
  icon: IconType;
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-apple">
      <Icon className="w-5 h-5 text-apple-text-secondary" />
      <span className="text-sm text-apple-text">{name}</span>
    </div>
  );
}
