"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import React from "react";

interface ClerkProviderProps {
  children: React.ReactNode;
}

const ClerkProviders = ({ children }: ClerkProviderProps) => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <ClerkProvider
        appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
      >
        {children}
      </ClerkProvider>
    </div>
  );
};

export default ClerkProviders;
