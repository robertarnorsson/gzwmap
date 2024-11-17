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
import { LocalStorageData, LocalStorageProvider } from "./context/LocalStorageContext";

export const links: LinksFunction = () => [
  {
    rel: "manifest",
    href: "/manifest.webmanifest"
  },
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
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const initialData: LocalStorageData = {
  user: {
    username: '',
    faction: '',
    completedObjectives: [],
    discoveredLZs: [],
    notes: {}
  },
  popup: {
    dismissedNewMap: false
  }
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="user-scalable=0, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#141414" />
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
    <LocalStorageProvider initialData={initialData}>
      <Outlet />
    </LocalStorageProvider>
  );
}
