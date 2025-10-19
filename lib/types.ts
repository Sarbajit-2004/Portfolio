export type Social = {
  github?: string; linkedin?: string; x?: string; kaggle?: string; medium?: string;
};
export type SiteConfig = {
  name: string; tagline: string; punchline: string; primaryColor: string;
  profileImage?: string; email?: string; social?: Social; about?: string;
};
export type Skill = { name: string; icon?: string; level?: "core" | "exploring" };
export type TimelineItem = {
  type: "education" | "project" | "experience";
  title: string; org?: string; period: string; summary?: string; tags?: string[];
};
export type Project = {
  name: string; tagline: string; highlights: string[]; tech: string[];
  links?: { github?: string; live?: string }; featured?: boolean;
  image?: string; period?: string; learnings?: string;
};
