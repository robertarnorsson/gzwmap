import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gray Zone Warfare Map",
  description: "GZW Interactive map - Loot Maps, LZ's, Key Spawns, Container Spawns & Enemies mapped out!",
  authors: [{ name: "Robert Arnorsson", url: "https://github.com/robertarnorsson" }],
  creator: "Robert Arnorsson",
  keywords: [
    "gray zone warfare map",
    "gray zone warfare locations",
    "gray zone warfare tasks",
    "gray zone warfare landing zones",
    "gray zone warfare missions",
    "gray zone warfare strategy",
    "gray zone warfare guide",
    "gray zone warfare tips",
    "gray zone warfare walkthrough",
    "gray zone warfare gameplay",
    "gray zone warfare exploration",
    "gray zone warfare resources",
    "gray zone warfare objectives",
    "gray zone warfare secrets",
    "gray zone warfare hidden items",
    "gray zone warfare map updates",
    "gray zone warfare community",
    "gray zone warfare players",
    "gray zone warfare factions",
    "gray zone warfare lore",
    "gzw map",
    "gzw locations",
    "gzw tasks",
    "gzw landing zones",
    "gzw missions",
    "gzw strategy",
    "gzw guide",
    "gzw tips",
    "gzw walkthrough",
    "gzw gameplay",
    "gzw exploration",
    "gzw resources",
    "gzw objectives",
    "gzw secrets",
    "gzw hidden items",
    "gzw map updates",
    "gzw community",
    "gzw players",
    "gzw factions",
    "gzw lore",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://gzwmap.com/gzw_twitter.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
