import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import Header from "../components/Header";

import Footer from "../components/Footer";

import "./app.css";

const SITE_NAME = "Compro";
const SITE_DESCRIPTION = "Company profile website.";
const THEME_COLOR = "#ffffff";

export const meta: Route.MetaFunction = () => {
  const title = SITE_NAME;
  const description = SITE_DESCRIPTION;
  const ogImage = "/og-image.svg";

  return [
    { title },

    { name: "description", content: description },
    { name: "theme-color", content: THEME_COLOR },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },

    { name: "apple-mobile-web-app-title", content: SITE_NAME },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "mobile-web-app-capable", content: "yes" },
  ];
};

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://api.fontshare.com/v2/css?f[]=general-sans@700,600,500,400&f[]=satoshi@700,500,400&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "manifest", href: "/manifest.webmanifest" },
  { rel: "apple-touch-icon", href: "/favicon.ico" },
  { rel: "mask-icon", href: "/maskable-icon.svg", color: THEME_COLOR },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
