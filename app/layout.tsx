import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "I build multi-tenant backends — PostgreSQL at scale, tenant isolation, and systems that stay safe to refactor.";

// Vercel injects the deployment host; the fallback keeps local dev working.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gustavo González — Full-Stack Developer",
    template: "%s — Gustavo González",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Gustavo González",
    title: "Gustavo González — Full-Stack Developer",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo González — Full-Stack Developer",
    description,
  },
  icons: {
    icon: "/panda.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
