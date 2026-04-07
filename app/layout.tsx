import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "major",
  description: "major — campus marketplace",
  icons: {
    icon: "/favicon.ico",
  },
  // This section handles the preview image when texting the link
  openGraph: {
    title: "major",
    description: "major — campus marketplace",
    images: [
      {
        url: "/major-logo.png", 
        width: 1200,
        height: 630,
        alt: "major logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
