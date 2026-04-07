import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "major",
  icons: {
    icon: "/icon.png",
  },
};
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
