"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from "@/components/theme-provider";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <JotaiProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
};

export default Providers;
