import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://app.ranam.workers.dev";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/cart",
          "/checkout",
          "/payment-success",
          "/payment-cancelled",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
