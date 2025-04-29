"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Props tipini basitleştirerek her özellliği any olarak işaretliyoruz
type ThemeProviderProps = {
  children: ReactNode;
  [prop: string]: any;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} enableSystem defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
}
