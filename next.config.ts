import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Optimisations de performance
  experimental: {
    // Optimisations des images
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    
    // Optimisations des polices
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ],
    
    // Optimisations des bundles
    bundlePagesExternals: true,
    
    // Optimisations des images
    images: {
      allowFutureImage: true,
    },
  },

  // Optimisations des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimisations des polices
  optimizeFonts: true,

  // Optimisations des bundles
  webpack: (config, { dev, isServer }) => {
    // Optimisations de production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // Optimisations des images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
          },
        },
      ],
    });

    return config;
  },

  // Optimisations des headers HTTP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimisations des redirections
  async redirects() {
    return [
      {
        source: '/chauffage-gironde',
        destination: '/chauffage',
        permanent: true,
      },
      {
        source: '/climatisation-gironde',
        destination: '/climatisation',
        permanent: true,
      },
      {
        source: '/pompe-a-chaleur-gironde',
        destination: '/chauffage',
        permanent: true,
      },
    ];
  },

  // Optimisations des rewrites
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: '/api/contact',
      },
      {
        source: '/devis-gratuit',
        destination: '/contact',
      },
    ];
  },

  // Optimisations de la compression
  compress: true,

  // Optimisations de la production
  swcMinify: true,

  // Optimisations des types
  typescript: {
    ignoreBuildErrors: false,
  },

  // Optimisations ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Optimisations de la génération statique
  output: 'standalone',

  // Optimisations des variables d'environnement
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Optimisations des pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Optimisations des composants
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
};

export default nextConfig;
