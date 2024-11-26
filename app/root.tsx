import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";
import { Toaster } from "./components/ui/toaster";
import { LocalStorageProvider } from "./context/LocalStorageContext";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="user-scalable=0, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#141414" />
        <title>Gray Zone Warfare Map</title>
        <meta name="description" content="GZW Interactive map - Loot Maps, LZ's, Key Spawns, Container Spawns & Enemies mapped out!" />
        <meta name="author" content="Robert Arnorsson" />
        <meta name="creator" content="Robert Arnorsson" />
        <meta name="keywords" content="gray zone warfare map, gray zone warfare locations, gray zone warfare tasks, gray zone warfare landing zones, gray zone warfare missions, gray zone warfare strategy, gray zone warfare guide, gray zone warfare tips, gray zone warfare walkthrough, gray zone warfare gameplay, gray zone warfare exploration, gray zone warfare resources, gray zone warfare objectives, gray zone warfare secrets, gray zone warfare hidden items, gray zone warfare map updates, gray zone warfare community, gray zone warfare players, gray zone warfare factions, gray zone warfare lore, Gray Zone Warfare Interactive Map, Lamang Island Loot Map, Gray Zone Map, GZ Map, GZW Map, GZW Key Door Locations, Gray Zone Locked Doors, Gray Zone Loot Heatmaps, Gray Zone Spawns, Gray Zone Extracts, Gray Zone Warfare Valuable Spawns, Gray Zone Warfare Enemy Spawn Maps, gzw map, gzw locations, gzw tasks, gzw landing zones, gzw missions, gzw strategy, gzw guide, gzw tips, gzw walkthrough, gzw gameplay, gzw exploration, gzw resources, gzw objectives, gzw secrets, gzw hidden items, gzw map updates, gzw community, gzw players, gzw factions, gzw lore" />

        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/assets/icons/icon-72x72.png" sizes="72x72" />
        <link rel="icon" href="/assets/icons/icon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/assets/icons/icon-128x128.png" sizes="128x128" />
        <link rel="icon" href="/assets/icons/icon-144x144.png" sizes="144x144" />
        <link rel="icon" href="/assets/icons/icon-152x152.png" sizes="152x152" />
        <link rel="icon" href="/assets/icons/icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/assets/icons/icon-384x384.png" sizes="384x384" />
        <link rel="icon" href="/assets/icons/icon-512x512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
        <link rel="manifest" href="site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gzwmap.com" />
        <meta property="og:title" content="Gray Zone Warfare Map" />
        <meta property="og:site_name" content="Gray Zone Warfare Map" />
        <meta property="og:description" content="GZW Interactive map - Loot Maps, LZ's, Key Spawns, Container Spawns & Enemies mapped out!" />
        <meta property="og:image" content="https://gzwmap.com/assets/gzw_twitter.jpg" />
        <meta property="og:email" content="info@gzwmap.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@creator" />
        <meta name="twitter:image" content="https://gzwmap.com/assets/gzw_twitter.jpg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <LocalStorageProvider>
      <Outlet />
    </LocalStorageProvider>
  );
}
