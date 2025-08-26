import type { Metadata } from 'next';
import { CityConfig } from '@/config/cities';

interface CityLayoutProps {
  cityData: CityConfig;
  children: React.ReactNode;
}

// Constantes globales
const SITE = 'https://www.climgo.fr';
const BRAND = 'ClimGO';
const POSTAL_CODE = '33380';
const STREET = '28 rue de Cantelaude';
const COUNTRY_CODE = 'FR';
const PHONE = '+33 7 66 46 00 08';
const LOGO_URL = `${SITE}/logo.png`;

// Réseaux sociaux
const SAME_AS: string[] = [
  'https://g.page/r/CYU8G8pY5uo1EBM',
].filter(Boolean);

// Horaires d'ouverture
const OPENING_HOURS: Array<{ day: string; opens: string; closes: string }> = [
  { day: 'Mo-Fr', opens: '08:00', closes: '19:00' },
  { day: 'Sa', opens: '09:00', closes: '13:00' },
];

// Services principaux avec descriptions détaillées
const SERVICES: Array<{ name: string; description: string; category: string }> = [
  { 
    name: 'Installation Pompe à Chaleur Air/Eau', 
    description: 'Installation et mise en service de PAC air/eau pour chauffage et eau chaude sanitaire',
    category: 'Chauffage'
  },
  { 
    name: 'Installation Pompe à Chaleur Air/Air', 
    description: 'Installation de climatisation réversible et chauffage par PAC air/air',
    category: 'Climatisation'
  },
  { 
    name: 'Installation Chauffe-eau Thermodynamique', 
    description: 'Installation de chauffe-eau thermodynamique pour l\'eau chaude sanitaire',
    category: 'Eau Chaude Sanitaire'
  },
  { 
    name: 'Maintenance Préventive', 
    description: 'Maintenance préventive et curative de tous systèmes de chauffage et climatisation',
    category: 'Maintenance'
  },
  { 
    name: 'Dépannage d\'Urgence', 
    description: 'Intervention rapide en cas de panne de chauffage ou climatisation',
    category: 'Dépannage'
  },
];

// Villes voisines par région pour areaServed
const NEARBY_CITIES = {
  'Bordeaux Métropole': [
    'Bordeaux', 'Mérignac', 'Pessac', 'Talence', 'Cenon', 'Bègles', 'Floirac', 
    'Bruges', 'Eysines', 'Le Haillan', 'Saint-Médard-en-Jalles', 'Saint-Aubin-de-Médoc',
    'Le Bouscat', 'Gradignan', 'Cestas', 'Canejan', 'Cadaujac', 'Bouliac', 'La Brède',
    'Léognan', 'Saint-Selve', 'Martignas-sur-Jalle', 'Martillac', 'Saint-Loubès',
    'Saint-Jean-d\'Illac', 'Villenave-d\'Ornon', 'Salles', 'Saucats'
  ],
  'Bassin d\'Arcachon': [
    'Arcachon', 'La Teste-de-Buch', 'Gujan-Mestras', 'Le Teich', 'Biganos', 'Audenge',
    'Lanton', 'Andernos-les-Bains', 'Arès', 'Lège-Cap-Ferret', 'Marcheprime', 'Le Barp',
    'Mios', 'Belin-Béliet', 'Sanguinet', 'Parentis-en-Born', 'Biscarrosse', 'Mimizan',
    'Lacanau'
  ]
};

// FAQ spécifique à la ville
export function generateCityFAQ(cityName: string) {
  return [
    {
      question: `Intervenez-vous à domicile sur ${cityName} ?`,
      answer: `Oui, ClimGO couvre toute la commune de ${cityName} et ses alentours. Nos techniciens se déplacent chez vous pour l'installation, la maintenance et le dépannage.`
    },
    {
      question: `Proposez-vous des devis gratuits à ${cityName} ?`,
      answer: `Absolument ! Le devis est gratuit et sans engagement. Nos experts se déplacent à ${cityName} pour évaluer vos besoins et vous proposer la solution la plus adaptée.`
    },
    {
      question: `Pouvez-vous m'aider avec MaPrimeRénov' à ${cityName} ?`,
      answer: `Oui, ClimGO vous accompagne dans vos démarches MaPrimeRénov'. Nous calculons les montants éligibles et vous aidons à monter votre dossier pour ${cityName}.`
    },
    {
      question: `Quels sont vos délais d'intervention à ${cityName} ?`,
      answer: `À ${cityName}, nous nous engageons sur des délais rapides : devis sous 24h, installation sous 15 jours et dépannage d'urgence sous 4h.`
    },
    {
      question: `Êtes-vous certifiés RGE pour ${cityName} ?`,
      answer: `Oui, ClimGO est certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides de l'État pour vos travaux à ${cityName}.`
    }
  ];
}

// Construction des métadonnées
export function generateCityMetadata(cityData: CityConfig): Metadata {
  const cityUrl = `${SITE}/villes/${cityData.slug}`;
  const ogImage = `${SITE}/images/og/${cityData.slug}.jpg`;

  return {
    metadataBase: new URL(SITE),
    title: `${BRAND} à ${cityData.name} – Chauffage, Climatisation & Entretien`,
    description: `${BRAND} intervient à ${cityData.name} (${cityData.region}) : pompe à chaleur, climatisation, chauffe-eau, entretien & maintenance. Devis rapide, intervention soignée, garanties pro.`,
    alternates: { canonical: cityUrl },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: BRAND,
      url: cityUrl,
      title: `${BRAND} à ${cityData.name} – Chauffage, Climatisation & Entretien`,
      description: `${BRAND} à ${cityData.name} : PAC air/air & air/eau, clim, chauffe-eau, entretien. Intervention locale, devis rapide.`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${BRAND} – ${cityData.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${BRAND} à ${cityData.name} – Chauffage, Climatisation & Entretien`,
      description: `${BRAND} : PAC, clim, chauffe-eau, entretien à ${cityData.name}. Devis rapide.`,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    viewport: { width: 'device-width', initialScale: 1 },
    other: { 'zones-desservies': cityData.name.toLowerCase() },
  };
}

// Construction du JSON-LD amélioré
function buildCityJsonLd(cityData: CityConfig) {
  const cityUrl = `${SITE}/villes/${cityData.slug}`;
  
  // Récupère les villes voisines de la même région
  const nearbyCities = NEARBY_CITIES[cityData.region as keyof typeof NEARBY_CITIES] || [];
  
  // Construit areaServed avec la ville principale et les villes voisines
  const areaServed = [
    { '@type': 'City', name: cityData.name },
    ...nearbyCities.slice(0, 10).map(city => ({ '@type': 'City', name: city }))
  ];

  const localBusiness: {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
    image: string;
    telephone: string;
    address: {
      '@type': string;
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
    areaServed: Array<{ '@type': string; name: string }>;
    serviceArea: {
      '@type': string;
      geoMidpoint: {
        '@type': string;
        latitude: number;
        longitude: number;
      };
      geoRadius: string;
    };
    place: {
      '@type': string;
      name: string;
      address: {
        '@type': string;
        addressLocality: string;
        addressRegion: string;
        addressCountry: string;
      };
      geo: {
        '@type': string;
        latitude: number;
        longitude: number;
      };
    };
    sameAs?: string[];
    geo: {
      '@type': string;
      latitude: number;
      longitude: number;
    };
    openingHoursSpecification: Array<{
      '@type': string;
      dayOfWeek: string;
      opens: string;
      closes: string;
    }>;
    hasOfferCatalog: {
      '@type': string;
      name: string;
      itemListElement: Array<{
        '@type': string;
        position: number;
        itemOffered: {
          '@type': string;
          name: string;
          description: string;
          category: string;
          areaServed: Array<{ '@type': string; name: string }>;
          provider: { '@type': string; name: string };
        };
      }>;
    };
  } = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND,
    url: cityUrl,
    image: LOGO_URL,
    telephone: PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET,
      addressLocality: 'Marcheprime',
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE,
    },
    areaServed: areaServed,
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: cityData.coordinates.lat,
        longitude: cityData.coordinates.lng
      },
      geoRadius: '25000' // 25km de rayon
    },
    place: {
      '@type': 'Place',
      name: cityData.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityData.name,
        addressRegion: cityData.region,
        addressCountry: COUNTRY_CODE
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: cityData.coordinates.lat,
        longitude: cityData.coordinates.lng
      }
    },
    sameAs: SAME_AS.length ? SAME_AS : undefined,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.coordinates.lat,
      longitude: cityData.coordinates.lng
    },
    openingHoursSpecification: OPENING_HOURS.map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services ClimGO à ${cityData.name}`,
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          category: service.category,
          areaServed: areaServed,
          provider: { '@type': 'LocalBusiness', name: BRAND },
        },
      })),
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Zones d\'interventions', item: `${SITE}/zones-interventions` },
      { '@type': 'ListItem', position: 3, name: cityData.name, item: cityUrl },
    ],
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${BRAND} à ${cityData.name} – Chauffage, Climatisation & Entretien`,
    url: cityUrl,
    inLanguage: 'fr-FR',
    isPartOf: { '@type': 'WebSite', name: BRAND, url: SITE },
    description: `${BRAND} à ${cityData.name} : PAC, climatisation, chauffe-eau, entretien.`,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generateCityFAQ(cityData.name).map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };

  const services = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${BRAND} – Services à ${cityData.name}`,
    itemListElement: SERVICES.map((s, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        category: s.category,
        areaServed: areaServed,
        provider: { '@type': 'LocalBusiness', name: BRAND },
      },
    })),
  };

  return [localBusiness, breadcrumb, webPage, faq, services];
}

export default function CityLayout({ cityData, children }: CityLayoutProps) {
  const ld = buildCityJsonLd(cityData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      {children}
    </>
  );
}
