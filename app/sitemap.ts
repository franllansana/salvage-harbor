import type { MetadataRoute } from "next";
import { categories, listings } from "@/data/inventory";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://salvageharbor.netlify.app";
  const staticRoutes = ["", "/marketplace", "/complete-inventories", "/how-it-works", "/logistics", "/documentation", "/sellers", "/about", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...categories.map((category) => ({ url: `${base}/marketplace/${category.id}`, lastModified: new Date() })),
    ...listings.map((listing) => ({ url: `${base}/listing/${listing.slug}`, lastModified: new Date() })),
  ];
}
