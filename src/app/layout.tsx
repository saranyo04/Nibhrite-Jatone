import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito, Noto_Serif_Bengali } from "next/font/google";
import { contactInfo, contactLinks, siteConfig } from "@/data/site-data";
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BedAndBreakfast",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteConfig.siteUrl,
  image: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
  address: contactInfo.address,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  sameAs: [
    contactLinks.instagramUrl,
    contactLinks.facebookUrl,
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.bengaliName} — A Soulful Homestay in Santiniketan`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  description: siteConfig.seoDescription,
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
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} — A Soulful Homestay in Santiniketan`,
    description:
      `${siteConfig.bengaliTagline} — Experience authentic Bengali hospitality in the heart of Santiniketan`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "bn_IN",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — A Soulful Homestay in Santiniketan`,
    description: siteConfig.seoDescription,
    images: [siteConfig.ogImage],
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
        suppressHydrationWarning
        className={`${cormorant.variable} ${nunito.variable} ${notoBengali.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
