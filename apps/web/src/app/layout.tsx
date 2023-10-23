import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

import "@/styles/globals.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ClerkReactProvider } from "@/components/clerk-provider";
import { TRPCReactProvider } from "@/components/trpc-provider";
import { site } from "@/config/site";
import { ourFileRouter } from "./api/uploadthing/core";

export const dynamic = "force-dynamic";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s - ${site.title}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
  },
  metadataBase: new URL(site.url),
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkReactProvider>
      <html lang="pt-BR">
        <body
          className={[
            "font-sans",
            fontSans.variable,
            "min-h-screen bg-gradient-to-b from-neutral-1 to-primary-2",
          ].join(" ")}
        >
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkReactProvider>
  );
}
