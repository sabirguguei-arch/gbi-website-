import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/programs", "/projects", "/impact", "/stories", "/resources", "/partners", "/contact"];
  return routes.map(url => ({ url: absoluteUrl(url), changeFrequency: "monthly", priority: url === "/" ? 1 : 0.7 }));
}
