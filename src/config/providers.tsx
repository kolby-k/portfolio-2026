import type { PropsWithChildren } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
