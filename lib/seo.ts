import type { Metadata } from "next";
import { site } from "@/content/site";

export function createMetadata(title: string, description?: string): Metadata {
  const pageTitle = `${title} | ${site.shortName}`;
  const pageDescription = description ?? site.description;
  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: { title: pageTitle, description: pageDescription, siteName: site.name, type: "website", locale: "en" },
    twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
  };
}
