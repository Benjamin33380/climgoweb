import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuration des images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
    ignoreDuringBuilds: true,
  },

  // Extensions de pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Compilateur
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimisations expérimentales
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion'],
  },

  // Configuration webpack pour optimiser les chunks
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Chunk pour React et React-DOM
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            priority: 20,
            chunks: 'all',
          },
          // Chunk pour Three.js et React Three Fiber
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: 'three',
            priority: 15,
            chunks: 'all',
            enforce: true,
            reuseExistingChunk: true,
          },
          // Chunk pour Framer Motion
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer',
            priority: 10,
            chunks: 'all',
          },
          // Chunk pour les autres vendors
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 5,
            chunks: 'all',
            minChunks: 2,
            enforce: true,
            reuseExistingChunk: true,
          },
          // Chunk par défaut
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
