import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Rubik } from "next/font/google";
import "./globals.css";
import "@/components/overlays/overlay.css";
import ReactDOM from "react-dom";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gray Zone Warfare Map",
  description: "GZW Interactive map - Loot Maps, LZ's, Key Spawns, Container Spawns & Enemies mapped out!",
  authors: [{ name: "Robert Arnorsson", url: "https://github.com/robertarnorsson" }],
  creator: "Robert Arnorsson",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
    { rel: "icon", url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple", url: "/favicon/apple-touch-icon.png" },
  ],
  manifest: "/favicon/site.webmanifest",
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
    "Gray Zone Warfare Interactive Map",
    "Lamang Island Loot Map",
    "Gray Zone Map",
    "GZ Map",
    "GZW Map",
    "GZW Key Door Locations",
    "Gray Zone Locked Doors",
    "Gray Zone Loot Heatmaps",
    "Gray Zone Spawns",
    "Gray Zone Extracts",
    "Gray Zone Warfare Valuable Spawns",
    "Gray Zone Warfare Enemy Spawn Maps",
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
  openGraph: {
    type: "website",
    url: "https://gzwmap.com",
    title: "Gray Zone Warfare Map",
    siteName: "Gray Zone Warfare Map",
    description: "GZW Interactive map - Loot Maps, LZ's, Key Spawns, Container Spawns & Enemies mapped out!",
    images: [{
      url: "https://gzwmap.com/gzw_twitter.jpg",
    }],
    emails: "info@gzwmap.com"
  },
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
  ReactDOM.preconnect("https://tiles.gzwmap.com/", { crossOrigin: "anonymous" });
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
