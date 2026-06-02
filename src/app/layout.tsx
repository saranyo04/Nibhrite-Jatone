import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito, Noto_Serif_Bengali } from "next/font/google";
import { siteConfig } from "@/data/site-data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoBengali = Noto_Serif_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.bengaliName} — A Soulful Homestay in Santiniketan`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  description:
    `Discover peace in the heart of Santiniketan. ${siteConfig.name} offers a soulful homestay experience surrounded by Sonajhuri forests, Baul culture, and authentic Bengali hospitality.`,
  keywords: [
    "Santiniketan homestay",
    "Bengali culture",
    "Sonajhuri forest",
    "Nibhrite Jatone",
    siteConfig.bengaliName,
    "peaceful retreat",
    "Bengal heritage",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteConfig.name} — A Soulful Homestay in Santiniketan`,
    description:
      `${siteConfig.bengaliTagline} — Experience authentic Bengali hospitality in the heart of Santiniketan`,
    siteName: siteConfig.name,
    type: "website",
    locale: "bn_IN",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — A Soulful Homestay in Santiniketan`,
    description:
      `Discover peace in the heart of Santiniketan. ${siteConfig.name} offers a soulful homestay experience surrounded by Sonajhuri forests, Baul culture, and authentic Bengali hospitality.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cormorant.variable} ${nunito.variable} ${notoBengali.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
