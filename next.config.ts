import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuration pour les navigateurs modernes
  // swcMinify: true, // Déprécié dans Next.js 15
  
  // Configuration SWC pour éviter les polyfills inutiles
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion'],
  },
  
  // Configuration pour les navigateurs modernes (réduit les polyfills)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuration des images optimisée
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimisation supplémentaire
    unoptimized: false,
    loader: 'default',
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



  // Configuration webpack pour optimiser les chunks
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configuration pour les navigateurs modernes
      config.target = ['web', 'es2022'];
      
      // Éviter les polyfills inutiles
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      config.optimization.splitChunks = {
                  chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
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
            maxSize: 80000,
            minSize: 50000,
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
            maxSize: 50000,
            minSize: 20000,
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
