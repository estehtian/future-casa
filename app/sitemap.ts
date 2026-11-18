import type { MetadataRoute } from "next";
import { articles, properties } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurecasa.com";
const slugify = (title: string) => title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/properties", "/services", "/journal", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "weekly" as const, priority: path ? 0.7 : 1 })),
    ...properties.map((property) => ({ url: `${siteUrl}/properties/${property.id.toLowerCase()}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteUrl}/journal/${slugify(article.title)}`, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
