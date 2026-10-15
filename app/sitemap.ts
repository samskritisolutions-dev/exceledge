import type { MetadataRoute } from "next";
import { products, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/contact",
    "/book-a-demo",
    "/careers",
    ...products.map((p) => `/products/${p.slug}`),
  ];
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
  }));
}
