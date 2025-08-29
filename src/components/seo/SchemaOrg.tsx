'use client';

interface SchemaOrgProps {
  type: 'website' | 'article' | 'blog' | 'service' | 'organization';
  title: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}

export default function SchemaOrg({
  type,
  title,
  description,
  url,
  image,
  author,
  publishedTime,
  modifiedTime,
  keywords
}: SchemaOrgProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : type === 'blog' ? 'Blog' : type === 'service' ? 'Service' : 'WebSite',
    "name": title,
    "description": description,
    "url": url,
    "image": image || "https://www.climgo.fr/logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "ClimGO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.climgo.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  if (type === 'article' || type === 'blog') {
    Object.assign(baseSchema, {
      "author": {
        "@type": "Organization",
        "name": author || "ClimGO"
      },
      "datePublished": publishedTime || new Date().toISOString(),
      "dateModified": modifiedTime || new Date().toISOString(),
      "keywords": keywords || ["chauffage", "climatisation", "maintenance", "conseils"],
      "articleSection": "Blog",
      "inLanguage": "fr-FR"
    });
  }

  if (type === 'service') {
    Object.assign(baseSchema, {
      "provider": {
        "@type": "Organization",
        "name": "ClimGO"
      },
      "areaServed": {
        "@type": "State",
        "name": "Gironde"
      },
      "serviceType": "Installation et maintenance de systèmes de chauffage et climatisation"
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseSchema)
      }}
    />
  );
}
