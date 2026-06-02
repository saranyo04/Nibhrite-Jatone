import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-data";
import { ROUTES } from "@/data/navigation-state";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
    },
    {
      url: new URL(ROUTES.gallery, siteConfig.siteUrl).toString(),
      lastModified,
    },
  ];
}
