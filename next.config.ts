import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://kotaharmon.github.io",
        port: "",
        pathname: `${process.env.NEXT_PUBLIC_SITE_SLUG}/**`,
      },
    ],
  },
};

export default nextConfig;
