import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteData } from "@/data/site";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.brand.url),
  title: {
    default: siteData.seo.defaultTitle,
    template: siteData.seo.titleTemplate,
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  authors: [{ name: siteData.brand.name, url: siteData.brand.url }],
  creator: siteData.brand.name,
  publisher: siteData.brand.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteData.brand.url,
  },
  openGraph: {
    type: "website",
    locale: siteData.seo.locale,
    url: siteData.brand.url,
    title: siteData.seo.defaultTitle,
    description: siteData.seo.description,
    siteName: siteData.brand.name,
    images: [
      {
        url: `${siteData.brand.url}/logo.png`,
        width: 798,
        height: 312,
        alt: `${siteData.brand.name} - Quality Computer Education`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.defaultTitle,
    description: siteData.seo.description,
    images: [`${siteData.brand.url}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#060919" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#060919] text-slate-900 dark:text-slate-100 antialiased font-sans transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
