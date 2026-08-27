import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://hemanth-ranam-website.hemanth-ranam.workers.dev/sitemap.xml",
  };
}
