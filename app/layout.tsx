import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://baot1301.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bao Tran | Software Engineer + AI Builder",
  description: "Software engineer building production APIs, agent workflows, and full stack products that actually ship.",
  alternates: { canonical: "/" },
  authors: [{ name: "Bao Tran" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Bao Tran | Software Engineer + AI Builder",
    description: "I build the thing. Then I make it worth using.",
    url: "/",
    siteName: "Bao Tran Portfolio",
    images: [{ url: "/og-2026-v2.png", width: 1731, height: 909, alt: "Bao Tran, Software Engineer and AI Builder" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bao Tran | Software Engineer + AI Builder",
    description: "I build the thing. Then I make it worth using.",
    images: ["/og-2026-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
