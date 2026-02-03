import { Button } from "@/components/ui/button";
import { siGithub } from "simple-icons";
import { Mail } from "lucide-react";
import { portfolioDetails } from "@/data/Mydata";

type SocialNameType = "github" | "email";

export default function SocialButton({
  SocialName,
}: {
  SocialName: SocialNameType;
}) {
  const socialConfig = {
    github: {
      href: portfolioDetails.github,
      svg: siGithub.svg,
      label: "View GitHub",
      isExternal: true,
    },
    email: {
      href: `mailto:${portfolioDetails.email}`,
      svg: null,
      label: "Send Email",
      isExternal: false,
    },
  };

  const config = socialConfig[SocialName];

  return (
    <Button variant="apple" size="xl" asChild>
      <a
        href={config.href}
        {...(config.isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className="flex items-center gap-2"
      >
        {SocialName === "github" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            dangerouslySetInnerHTML={{ __html: config.svg! }}
          />
        ) : (
          <Mail size={20} />
        )}
        {config.label}
      </a>
    </Button>
  );
}
