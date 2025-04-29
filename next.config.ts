import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
    ],
  },
  // TypeScript kontrollerini atla ve uyarıları görmezden gel
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint ile ilgili hataları görmezden gel
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
