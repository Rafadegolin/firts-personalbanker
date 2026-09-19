import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/politica-de-privacidade", priority: 0.3 },
  { path: "/termos-de-uso", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-19"),
    changeFrequency: "monthly",
    priority,
  }));
}
