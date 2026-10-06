import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hemanth Ranam | Business Systems & Automation",
    short_name: "Hemanth Ranam",
    description:
      "Modern business operating systems, ERPNext, automation, and trading technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logo.svg",
        sizes: "192x192 512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
