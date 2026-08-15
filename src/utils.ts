import { PROJECTS } from "./constants";
import type { ProjectCardProperties } from "./types";

export function getProjectByPath(path: string): ProjectCardProperties | null {
  return (
    PROJECTS.flatMap((p) =>
      p.projects.filter((project) => project.path === path),
    )[0] ?? null
  );
}
