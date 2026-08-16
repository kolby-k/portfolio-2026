export const PROJECT_TYPES = [
  "Web App",
  "Mobile App",
  "Data Analytics",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_FOCUSES = [
  "Full Stack",
  "Frontend",
  "Data Analytics",
] as const;

export type ProjectFocus = (typeof PROJECT_FOCUSES)[number];

export const TECHNOLOGIES = [
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React",
  "React Native",
  "Express",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Redux Toolkit",
  "Tailwind CSS",
  "Zod",
  "Expo",
  "iOS",
  "OpenAI",
  "Google OAuth",
  "Google Maps",
  "Open Meteo",
  "Tableau",
] as const;

export type Technology = (typeof TECHNOLOGIES)[number];
export type ProjectTechnology = {
  languages?: Technology[];
  frameworks?: Technology[];
  libraries?: Technology[];
  databases?: Technology[];
  platforms?: Technology[];
  integrations?: Technology[];
};
export type ProjectCardProperties = {
  id: string;
  image: string;
  type: ProjectType;
  title: string;
  description: string;
  path: string;

  focus: ProjectFocus;
  technology: ProjectTechnology;
  urls: {
    git?: string;
    web?: string;
    ios?: string;
  };
};
