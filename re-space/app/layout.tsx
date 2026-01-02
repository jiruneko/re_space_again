import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Re:Space",
  description: "A quiet place to just be.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
