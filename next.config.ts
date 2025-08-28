import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuration des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Compression
  compress: true,

  // Typescript
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Extensions de pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Compilateur
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
