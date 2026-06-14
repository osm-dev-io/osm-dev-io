"use client";

import type { ReactNode } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/queries/getQueryClient";

export default function Providers({ children }: { children: ReactNode }) {
  const theme = createTheme({
    white: "#f8f9f6",
    black: "#0a0a0a",
  });

  const queryClient = getQueryClient();

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MantineProvider>
  );
}
