import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import Shell from "@/components/Shell";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "osm.dev.io 어드민",
  description: "osm.dev.io 어드민 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
