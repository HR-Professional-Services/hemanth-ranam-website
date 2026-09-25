import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/payment-success"],
      },
    ],
    sitemap: "https://hemanth.ranam.dev/sitemap.xml",
  };
}
