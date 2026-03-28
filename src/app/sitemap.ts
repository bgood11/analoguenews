import type { MetadataRoute } from "next";
import { newsItems } from "@/data/news";
import { filmStocks } from "@/data/film-stocks";

const BASE_URL = "https://analoguenews.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/film-stocks`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/tools`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/exposure-calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/reciprocity`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/newsletter`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const articles: MetadataRoute.Sitemap = newsItems
    .filter((n) => n.contentType !== "guide")
    .map((n) => ({
      url: `${BASE_URL}/news/${n.slug}`,
      lastModified: new Date(n.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const guides: MetadataRoute.Sitemap = newsItems
    .filter((n) => n.contentType === "guide")
    .map((n) => ({
      url: `${BASE_URL}/guides/${n.slug}`,
      lastModified: new Date(n.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const stocks: MetadataRoute.Sitemap = filmStocks.map((s) => ({
    url: `${BASE_URL}/film-stocks/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articles, ...guides, ...stocks];
}
