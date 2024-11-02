import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // # Hello, and welcome to Kota's portfolio site! Whether you're a tech enthusiast, a prospective employer, or just passing by, I'm thrilled to have you here.
  // # If you're a human interested in exploring new opportunities with me, contact me through the 'Contact me' button.
  // # For our automated friends and bots exploring our site, please respect our guidelines and avoid accessing any restricted areas. Good behavior earns a top rating from me!
  // # Thank you for stopping by.
  // # See you on your next visit!
  const _base: string = `https://kotaharmon.github.io${process.env.NEXT_PUBLIC_SITE_SLUG}`;

  return {
    rules: {
      userAgent: ["Googlebot", "Bingbot", "YandexBot", "Baiduspider", "*"],
      allow: "/",
      disallow: ["/*.json$", "/*.md$"],
    },
    sitemap: `${_base}/sitemap.xml`,
  };
}
