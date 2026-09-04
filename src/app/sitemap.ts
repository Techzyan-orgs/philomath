import { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: siteData.brand.url,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteData.brand.url}/#courses`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteData.brand.url}/#results`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteData.brand.url}/#why-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteData.brand.url}/#pedagogy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteData.brand.url}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
