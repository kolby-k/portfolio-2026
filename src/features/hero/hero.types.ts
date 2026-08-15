import type { ProjectCardProperties } from "../../types";

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
