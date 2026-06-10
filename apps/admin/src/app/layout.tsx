import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "osm.dev.io 어드민",
  description: "osm.dev.io 어드민 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    white: "#f8f9f6",
    black: "#0a0a0a",
  });
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
