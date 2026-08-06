export type ProjectType =
  | "Web App"
  | "Mobile App"
  | "Case Study"
  | "Data Analytics";
export type ProjectCardProperties = {
  image: string;
  type: ProjectType;
  title: string;
  description: string;
  path: string;
};

export type ProjectShowcase = {
  id: number;
  highlight: string;
  skills: string[];
  path: string;
  projects: ProjectCardProperties[];
};

export type HighlightPlaceholder = {
  id: null;
  highlight: null;
  skills: null;
  path: null;
  projects: null;
};
