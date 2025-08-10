import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true, // Pour les images locales
  },
};

export default nextConfig;
