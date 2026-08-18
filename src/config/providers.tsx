import type { PropsWithChildren } from "react";
import { ThemeProvider } from "../context/ThemeProvider";

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
