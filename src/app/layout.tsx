import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "오성민 | 지구 정복 일기장",
  description: "안녕하세요! 저의 블로그에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
