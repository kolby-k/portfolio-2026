import { createContext } from "react";

export type Theme = "light" | "dark";
export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
};

export const STORAGE_KEY = "theme";

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
