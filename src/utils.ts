import type { TagColors } from "./components/Tag";
import { PROJECTS } from "./constants";
import type { ProjectCardProperties, ProjectFocus, ProjectType } from "./types";

export function getProjectByPath(path: string): ProjectCardProperties | null {
  return (
    PROJECTS.flatMap((p) =>
      p.projects.filter((project) => project.path === path),
    )[0] ?? null
  );
}

export function getProjectFocusTagColor(focus: ProjectFocus): TagColors {
  let tagColor: TagColors = "base";
  switch (focus) {
    case "Full Stack":
      tagColor = "orange";
      break;
    case "Backend":
      tagColor = "green";
      break;
    case "Frontend":
      tagColor = "purple";
      break;
    case "Data Analytics":
      tagColor = "blue";
      break;
  }
  return tagColor;
}

export function getProjectTypeTagColor(type: ProjectType): TagColors {
  let tagColor: TagColors = "base";
  switch (type) {
    case "Web App":
      tagColor = "orange";
      break;
    case "Mobile App":
      tagColor = "green";
      break;
    case "Data Visualization":
      tagColor = "purple";
      break;
  }
  return tagColor;
}

export function proper(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}
