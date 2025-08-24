import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Permettre l'accès depuis d'autres adresses IP
      config.devServer = {
        ...config.devServer,
        host: '0.0.0.0',
        allowedHosts: 'all',
      };
    }
    return config;
  },
};

export default nextConfig;
