import { PROJECTS } from "./constants";
import type { ProjectShowcase } from "./home.types";

export function getOrderedHighlights(
  currentIndex: number,
): { order: number; item: ProjectShowcase }[] {
  const previousProject = getPreviousProjectShowcase(PROJECTS, currentIndex);
  const currentProject = PROJECTS[currentIndex];
  const nextProject = getNextProjectShowcase(PROJECTS, currentIndex);

  return [
    { order: 1, item: previousProject },
    { order: 2, item: currentProject },
    { order: 3, item: nextProject },
  ];
}
// Returns the ProjectShowcase before the current ProjectShowcase, wrapping back to the last ProjectShowcase.
function getPreviousProjectShowcase(
  projects: ProjectShowcase[],
  currentIndex: number,
): ProjectShowcase {
  if (projects.length < 3) throw new Error("expecting 3 or more projects...");

  const nextIndex = (currentIndex - 1 + projects.length) % projects.length;

  return projects[nextIndex];
}
// Returns the ProjectShowcase after the current ProjectShowcase, wrapping back to the first ProjectShowcase.
function getNextProjectShowcase(
  projects: ProjectShowcase[],
  currentIndex: number,
): ProjectShowcase {
  if (projects.length < 3) throw new Error("expecting 3 or more projects...");

  const nextIndex = (currentIndex + 1) % projects.length;

  return projects[nextIndex];
}
