import { useMemo, useState } from "react";
import { PROJECTS } from "../constants";
import {
  type ProjectCardProperties,
  type ProjectFocus,
  type ProjectType,
  type Technology,
  TECHNOLOGIES,
  PROJECT_TYPES,
  PROJECT_FOCUSES,
} from "../types";
import type {
  FilterUpdate,
  FilterValueType,
} from "../features/project-list/project-list.types";
import { useSearchParams } from "react-router-dom";

function useFilteredProjects() {
  const [params] = useSearchParams();

  const initTechFilter = params
    .getAll("tech")
    .filter((tech): tech is Technology =>
      TECHNOLOGIES.includes(tech as Technology),
    );

  const initFocusFilter = params
    .getAll("focus")
    .filter((focus): focus is ProjectFocus =>
      PROJECT_FOCUSES.includes(focus as ProjectFocus),
    );

  const initTypeFilter = params
    .getAll("type")
    .filter((type): type is ProjectType =>
      PROJECT_TYPES.includes(type as ProjectType),
    );

  const [typeFilter, setTypeFilter] = useState<ProjectType[]>([
    ...initTypeFilter,
  ]);
  const [focusFilter, setFocusFilter] = useState<ProjectFocus[]>([
    ...initFocusFilter,
  ]);
  const [techFilter, setTechFilter] = useState<Technology[]>([
    ...initTechFilter,
  ]);

  const projectsToRender = useMemo(() => {
    const allProjects = PROJECTS.flatMap((s) => s.projects);
    // No filters -> display all projects
    if (
      noFilterApplied(typeFilter) &&
      noFilterApplied(focusFilter) &&
      noFilterApplied(techFilter)
    )
      return allProjects;
    let filterProjects: ProjectCardProperties[] = [];
    // Filter applied -> exclude projects w/out type > focus > tech
    if (!noFilterApplied(typeFilter)) {
      filterProjects = allProjects.filter((project) =>
        typeFilter.includes(project.type),
      );
    }
    if (!noFilterApplied(focusFilter)) {
      filterProjects = allProjects.filter((project) =>
        focusFilter.includes(project.focus),
      );
    }
    if (!noFilterApplied(techFilter)) {
      filterProjects = allProjects.filter((project) =>
        Object.values(project.technology)
          .flatMap((technologies) => technologies)
          .some((t) => techFilter.includes(t) === true),
      );
    }
    return filterProjects;
  }, [techFilter, focusFilter, typeFilter, PROJECTS]);

  function add({ list, value }: FilterUpdate) {
    if (list === "type") {
      setTypeFilter((prev) => [...prev, value]);
    } else if (list === "focus") {
      setFocusFilter((prev) => [...prev, value]);
    } else if (list === "technology") {
      setTechFilter((prev) => [...prev, value]);
    }
  }

  function remove({ list, value }: FilterUpdate) {
    if (list === "type") {
      setTypeFilter((prev) => prev.filter((v) => v !== value));
    } else if (list === "focus") {
      setFocusFilter((prev) => prev.filter((v) => v !== value));
    } else if (list === "technology") {
      setTechFilter((prev) => prev.filter((v) => v !== value));
    }
  }

  function clear() {
    setFocusFilter([]);
    setTypeFilter([]);
    setTechFilter([]);
  }

  // The currently active filters regardless of type/focus/tech
  const active: FilterValueType[] = useMemo(() => {
    return [...typeFilter, ...focusFilter, ...techFilter];
  }, [typeFilter, focusFilter, techFilter]);

  // ALL possible filters regardless of type/focus/tech
  const options: FilterValueType[] = useMemo(() => {
    return [...PROJECT_TYPES, ...PROJECT_FOCUSES, ...TECHNOLOGIES];
  }, [PROJECT_TYPES, PROJECT_FOCUSES, TECHNOLOGIES]);

  return {
    projects: projectsToRender,
    add,
    remove,
    clear,
    active,
    options,
  };
}

export default useFilteredProjects;

function noFilterApplied(
  filters: ProjectFocus[] | ProjectType[] | Technology[],
) {
  if (filters.length === 0) return true;
  return false;
}
