import { performanceConfig } from '@/config/performance';

export function PerformanceOptimizations() {
  return (
    <>
      {/* Optimisations de performance */}
      {performanceConfig.external.preconnect.map((url) => (
        <link key={url} rel="preconnect" href={url} />
      ))}
      
      {performanceConfig.external.dnsPrefetch.map((url) => (
        <link key={url} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Preload des ressources critiques */}
      {performanceConfig.images.preload.map((src) => (
        <link key={src} rel="preload" href={src} as="image" />
      ))}
      
      {/* Meta tags de sécurité et performance */}
      <meta name="theme-color" content={performanceConfig.pwa.themeColor} />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      
      {/* Optimisations pour les réseaux sociaux */}
      <meta property="og:site_name" content={performanceConfig.pwa.name} />
      <meta property="og:locale" content="fr_FR" />
      <meta name="twitter:site" content={performanceConfig.seo.meta.social.twitter.site} />
      <meta name="twitter:creator" content={performanceConfig.seo.meta.social.twitter.creator} />
      
      {/* Optimisations de sécurité */}
      <meta httpEquiv="X-Frame-Options" content={performanceConfig.seo.meta.security["X-Frame-Options"]} />
      <meta httpEquiv="X-Content-Type-Options" content={performanceConfig.seo.meta.security["X-Content-Type-Options"]} />
      <meta name="referrer" content={performanceConfig.seo.meta.security["Referrer-Policy"]} />
      <meta name="permissions-policy" content={performanceConfig.seo.meta.security["Permissions-Policy"]} />
      
      {/* Configuration PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={performanceConfig.pwa.name} />
      <meta name="application-name" content={performanceConfig.pwa.name} />
      <meta name="msapplication-TileColor" content={performanceConfig.pwa.themeColor} />
      
      {/* Optimisations pour les moteurs de recherche */}
      <meta name="google-site-verification" content="Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g" />
      <meta name="msvalidate.01" content="VERIFICATION_CODE_TO_ADD" />
      
      {/* Optimisations de performance */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no, email=no, address=no" />
      
      {/* Optimisations pour les réseaux sociaux avancées */}
      <meta property="og:type" content="website" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content={performanceConfig.pwa.name} />
      
      {/* Twitter Card optimisations */}
      <meta name="twitter:card" content={performanceConfig.seo.meta.social.twitter.card} />
      <meta name="twitter:site" content={performanceConfig.seo.meta.social.twitter.site} />
      <meta name="twitter:creator" content={performanceConfig.seo.meta.social.twitter.creator} />
      
      {/* Optimisations pour les applications mobiles */}
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-title" content={performanceConfig.pwa.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Optimisations pour Windows */}
      <meta name="msapplication-TileImage" content="/favicon/favicon-144x144.png" />
      <meta name="msapplication-TileColor" content={performanceConfig.pwa.themeColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Optimisations pour Android */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={performanceConfig.pwa.themeColor} />
      <meta name="background-color" content={performanceConfig.pwa.backgroundColor} />
      
      {/* Optimisations de performance avancées */}
      <link rel="modulepreload" href="/_next/static/chunks/main.js" />
      <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
      
      {/* Preload des polices critiques */}
      <link rel="preload" href="/_next/static/media/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/_next/static/media/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </>
  );
}
