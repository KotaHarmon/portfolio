import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const _base: string = `https://kotaharmon.github.io${process.env.NEXT_PUBLIC_SITE_SLUG}`;

  return [
    {
      url: _base,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
      // alternates: {
      //   languages: {
      //     es: `${_base}/es`,
      //     en: `${_base}/en`,
      //   },
      // },
    },
  ];
}
