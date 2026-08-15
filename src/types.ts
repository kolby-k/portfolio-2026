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
