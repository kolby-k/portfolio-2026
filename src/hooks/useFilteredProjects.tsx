import { useMemo } from "react";
import { PROJECTS } from "../constants";
import { PROJECT_TYPES, PROJECT_FOCUSES, LANGUAGES } from "../types";
import type {
  FilterUpdate,
  FilterValueType,
} from "../features/project-list/project-list.types";
import { useSearchParams } from "react-router-dom";

function useFilteredProjects() {
  const [params, setParams] = useSearchParams();

  const languageFilter = useMemo(
    () => getValidParams(params, "languages", LANGUAGES),
    [params],
  );

  const focusFilter = useMemo(
    () => getValidParams(params, "focus", PROJECT_FOCUSES),
    [params],
  );

  const typeFilter = useMemo(
    () => getValidParams(params, "type", PROJECT_TYPES),
    [params],
  );

  const projectsToRender = useMemo(() => {
    const allProjects = PROJECTS.flatMap((section) => section.projects);

    return allProjects.filter((project) => {
      const matchesType =
        typeFilter.length === 0 || typeFilter.includes(project.type);

      const matchesFocus =
        focusFilter.length === 0 || focusFilter.includes(project.focus);

      const matchesLanguage =
        languageFilter.length === 0 ||
        languageFilter.some((language) =>
          project.technology.languages?.includes(language),
        );

      return matchesType && matchesFocus && matchesLanguage;
    });
  }, [typeFilter, focusFilter, languageFilter]);

  function add({ list, value }: FilterUpdate) {
    setParams((prev) => {
      const next = new URLSearchParams(prev);

      if (!next.getAll(list).includes(value)) {
        next.append(list, value);
      }

      return next;
    });
  }

  function remove({ list, value }: FilterUpdate) {
    setParams((prev) => {
      const next = new URLSearchParams(prev);

      const remaining = next
        .getAll(list)
        .filter((current) => current !== value);

      next.delete(list);

      remaining.forEach((current) => {
        next.append(list, current);
      });

      return next;
    });
  }

  function clear() {
    setParams((prev) => {
      const next = new URLSearchParams(prev);

      next.delete("type");
      next.delete("focus");
      next.delete("languages");

      return next;
    });
  }

  // The currently active filters regardless of type/focus/tech
  const active: FilterValueType[] = useMemo(() => {
    return [...typeFilter, ...focusFilter, ...languageFilter];
  }, [typeFilter, focusFilter, languageFilter]);

  // ALL possible filters regardless of type/focus/tech
  const options: FilterValueType[] = useMemo(() => {
    return [...PROJECT_TYPES, ...PROJECT_FOCUSES, ...LANGUAGES];
  }, []);

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

function getValidParams<T extends string>(
  params: URLSearchParams,
  key: string,
  options: readonly T[],
): T[] {
  return params
    .getAll(key)
    .filter((value): value is T => options.includes(value as T));
}
