import type { Metadata } from "next";
import { galleryCategories, siteConfig } from "@/data/site-data";
import { ROUTES } from "@/data/navigation-state";
import GalleryPageClient from "./GalleryPageClient";

const galleryUrl = new URL(ROUTES.gallery, siteConfig.siteUrl).toString();
const galleryDescription = `Explore the ${galleryCategories
  .filter((category) => category !== "All")
  .join(", ")} gallery for ${siteConfig.name}, a soulful homestay in Santiniketan.`;

export const metadata: Metadata = {
  title: `Gallery | ${siteConfig.name}`,
  description: galleryDescription,
  alternates: {
    canonical: galleryUrl,
  },
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description: galleryDescription,
    url: galleryUrl,
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
    title: `Gallery | ${siteConfig.name}`,
    description: galleryDescription,
    images: [siteConfig.ogImage],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
