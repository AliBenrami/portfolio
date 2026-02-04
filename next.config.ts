import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Next/Image to optimize the GitHub avatar used on the Contact page.
    // (In production, external image domains must be explicitly allowed.)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
