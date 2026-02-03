export type ActionLinkStyle = "primary" | "secondary";

export interface PortfolioActionLink {
  label: string;
  href: string;
  style?: ActionLinkStyle;
}

export interface PortfolioProject {
  title: string;
  summary: string;
  role: string;
  timeframe: string;
  tags: string[];
  links: PortfolioActionLink[];
}

export interface PortfolioExperience {
  title: string;
  company: string;
  timeframe: string;
  summary: string;
}

export interface PortfolioSkillGroup {
  title: string;
  items: string[];
}

export interface PortfolioContent {
  site: {
    title: string;
    description: string;
  };
  sections: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
  };
  hero: {
    name: string;
    role: string;
    intro: string;
    location: string;
    availability: string;
    links: PortfolioActionLink[];
  };
  about: string[];
  projects: PortfolioProject[];
  experience: PortfolioExperience[];
  skills: PortfolioSkillGroup[];
  contact: {
    heading: string;
    intro: string;
    links: PortfolioActionLink[];
  };
}

export const portfolioContent: PortfolioContent = {
  site: {
    title: "",
    description: "",
  },
  sections: {
    about: "",
    projects: "",
    experience: "",
    skills: "",
  },
  hero: {
    name: "",
    role: "",
    intro: "",
    location: "",
    availability: "",
    links: [],
  },
  about: [],
  projects: [],
  experience: [],
  skills: [],
  contact: {
    heading: "",
    intro: "",
    links: [],
  },
};
