import type { ProjectFocus, ProjectType, Language } from "../../types";
export type FilterValueType = ProjectType | ProjectFocus | Language;
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
      list: "languages";
      value: Language;
    };
