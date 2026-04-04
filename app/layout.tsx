import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "major",
  description: "major — campus marketplace",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
