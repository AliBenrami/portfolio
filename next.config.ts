import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Forwarded-Proto",
            value: "https",
          },
        ],
      },
    ];
  },
};

module.exports = {
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/111257593?v=4"),
    ],
  },
};

export default nextConfig;
