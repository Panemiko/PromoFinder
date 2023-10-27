import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import { site } from "@/config/site";

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
    <html lang="pt-BR">
      <body
        className={[
          "font-sans",
          fontSans.variable,
          "min-h-screen bg-gradient-to-b from-neutral-1 to-primary-2",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
