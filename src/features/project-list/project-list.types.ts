import type { ProjectFocus, ProjectType, Technology } from "../../types";
export type FilterValueType = ProjectType | ProjectFocus | Technology;
export type FilterUpdate =
  | {
      list: "type";
      value: ProjectType;
    }
  | {
      list: "focus";
      value: ProjectFocus;
    }
  | {
      list: "technology";
      value: Technology;
    };
