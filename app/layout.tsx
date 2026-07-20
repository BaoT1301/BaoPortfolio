import type { Metadata } from "next";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bao Tran | Software Engineer & AI Builder",
  description: "Software engineer building production APIs, agent workflows, and full stack products that actually ship.",
  alternates: { canonical: "/" },
  authors: [{ name: "Bao Tran" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Bao Tran | Software Engineer",
    description: "Building AI systems that actually ship.",
    url: "/",
    siteName: "Bao Tran Portfolio",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Bao Tran | Software Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bao Tran | Software Engineer",
    description: "Building AI systems that actually ship.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem("portfolio-theme");var theme=saved==="light"||saved==="dark"?saved:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
