// Configuration des optimisations de performance
export const performanceConfig = {
  // Optimisations des polices
  fonts: {
    display: "swap",
    preload: true,
    fallback: ["system-ui", "arial"],
  },
  
  // Optimisations des images
  images: {
    formats: ["webp", "avif"],
    sizes: [16, 32, 96, 192, 512],
    preload: ["/img/climdame.png", "/favicon/favicon.ico"],
  },
  
  // Optimisations des ressources externes
  external: {
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.googletagmanager.com",
    ],
    dnsPrefetch: [
      "//www.googletagmanager.com",
      "//fonts.googleapis.com",
      "//fonts.gstatic.com",
    ],
  },
  
  // Configuration PWA
  pwa: {
    name: "ClimGO",
    shortName: "ClimGO",
    description: "Expert chauffage et climatisation en Gironde",
    themeColor: "#0ea5e9",
    backgroundColor: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    startUrl: "/",
  },
  
  // Optimisations SEO
  seo: {
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
      themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
      ],
      colorScheme: "light dark",
      viewportFit: "cover",
    },
    
    // Meta tags avancés
    meta: {
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      
      // Optimisations pour les réseaux sociaux
      social: {
        twitter: {
          site: "@climgo_fr",
          creator: "@climgo_fr",
          card: "summary_large_image",
        },
      },
      
      // Optimisations de sécurité
      security: {
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      },
    },
  },
  
  // Configuration des analytics
  analytics: {
    google: {
      tagManagerId: "GTM-K5D2MM6F", // Votre ID GTM actuel
    },
  },
  
  // Optimisations de cache
  cache: {
    static: {
      maxAge: 31536000, // 1 an
      immutable: true,
    },
    dynamic: {
      maxAge: 86400, // 1 jour
      staleWhileRevalidate: 604800, // 1 semaine
    },
  },
};
