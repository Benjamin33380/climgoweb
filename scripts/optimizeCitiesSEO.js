#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Toutes les villes avec leurs codes postaux
const cities = [
  { name: 'Andernos-les-Bains', postalCode: '33510' },
  { name: 'Arcachon', postalCode: '33120' },
  { name: 'Ares', postalCode: '33640' },
  { name: 'Audenge', postalCode: '33980' },
  { name: 'Begles', postalCode: '33130' },
  { name: 'Belin-Beliet', postalCode: '33830' },
  { name: 'Biganos', postalCode: '33380' },
  { name: 'Biscarrosse', postalCode: '40600' },
  { name: 'Bordeaux', postalCode: '33000' },
  { name: 'Bouliac', postalCode: '33270' },
  { name: 'Bruges', postalCode: '33520' },
  { name: 'Cadaujac', postalCode: '33140' },
  { name: 'Canejan', postalCode: '33610' },
  { name: 'Cenon', postalCode: '33150' },
  { name: 'Cestas', postalCode: '33610' },
  { name: 'Eysines', postalCode: '33320' },
  { name: 'Floirac', postalCode: '33270' },
  { name: 'Gradignan', postalCode: '33170' },
  { name: 'Gujan-Mestras', postalCode: '33260' },
  { name: 'La Brede', postalCode: '33650' },
  { name: 'La Teste-de-Buch', postalCode: '33260' },
  { name: 'Lacanau', postalCode: '33680' },
  { name: 'Lanton', postalCode: '33138' },
  { name: 'Le Barp', postalCode: '33114' },
  { name: 'Le Bouscat', postalCode: '33110' },
  { name: 'Le Haillan', postalCode: '33185' },
  { name: 'Le Teich', postalCode: '33470' },
  { name: 'Lege-Cap-Ferret', postalCode: '33950' },
  { name: 'Leognan', postalCode: '33850' },
  { name: 'Marcheprime', postalCode: '33380' },
  { name: 'Martignas-sur-Jalle', postalCode: '33127' },
  { name: 'Martillac', postalCode: '33650' },
  { name: 'Merignac', postalCode: '33700' },
  { name: 'Mimizan', postalCode: '40200' },
  { name: 'Mios', postalCode: '33380' },
  { name: 'Parentis-en-Born', postalCode: '40160' },
  { name: 'Pessac', postalCode: '33600' },
  { name: 'Saint-Aubin-de-Medoc', postalCode: '33160' },
  { name: 'Saint-Jean-d\'Illac', postalCode: '33127' },
  { name: 'Saint-Loubes', postalCode: '33450' },
  { name: 'Saint-Medard-en-Jalles', postalCode: '33160' },
  { name: 'Saint-Selve', postalCode: '33650' },
  { name: 'Salles', postalCode: '33770' },
  { name: 'Sanguinet', postalCode: '40460' },
  { name: 'Saucats', postalCode: '33650' },
  { name: 'Talence', postalCode: '33400' },
  { name: 'Villenave-d\'Ornon', postalCode: '33140' }
];

// Template pour les données structurées des villes
function generateCityJsonLd(city, postalCode) {
  // Échapper les apostrophes pour éviter les erreurs de syntaxe
  const escapedCity = city.replace(/'/g, "\\'");
  const escapedCityForUrl = city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
  
  // Titres et descriptions raccourcis pour respecter les limites SEO
  const shortTitle = `Chauffage Climatisation ${escapedCity} ${postalCode} | ClimGO`;
  const shortDescription = `Expert chauffage climatisation ${escapedCity} ${postalCode}. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.`;
  
  return `import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

// Métadonnées ultra-optimisées ${escapedCity} COMPLETE
export const metadata: Metadata = {
  title: '${shortTitle}',
  description: '${shortDescription}',
  
  keywords: 'climatisation ${escapedCity}, chauffage ${escapedCity}, pompe à chaleur ${escapedCity}, chauffagiste ${escapedCity}, installateur climatisation ${escapedCity}, artisan RGE ${escapedCity}, installation PAC ${escapedCity}, entretien climatisation ${escapedCity}, dépannage chauffage ${escapedCity}, chaudière ${escapedCity}, maintenance ${escapedCity}, réparation climatisation ${escapedCity}, devis gratuit ${escapedCity}, intervention urgence ${escapedCity}, certificat RGE ${escapedCity}, MaPrimeRénov ${escapedCity}, aide financière chauffage ${escapedCity}, prime CEE ${escapedCity}, crédit impôt ${escapedCity}, économie énergie ${escapedCity}, rénovation énergétique ${escapedCity}, audit énergétique ${escapedCity}, expert chauffage ${postalCode}, climatisation ${postalCode}, chauffagiste ${postalCode}, devis gratuit ${escapedCity}, intervention urgence ${escapedCity}, spécialiste CVC ${escapedCity}, entreprise chauffage ${escapedCity}, installateur agréé ${escapedCity}, technicien qualifié ${escapedCity}, service après-vente ${escapedCity}',
  
  // Open Graph optimisé COMPLET
  openGraph: {
    title: '${shortTitle}',
    description: '${shortDescription}',
    url: 'https://www.climgo.fr/villes/${escapedCityForUrl}-chauffage-climatisation',
    siteName: 'ClimGO - Expert Chauffage Climatisation',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: 'https://www.climgo.fr/images/og/${escapedCityForUrl}-chauffage-climatisation.jpg',
      width: 1200,
      height: 630,
      alt: 'Chauffage climatisation ${escapedCity} ${postalCode} - ClimGO',
    }],
  },
  
  // Twitter Cards COMPLET
  twitter: {
    card: 'summary_large_image',
    site: '@climgo_fr',
    creator: '@climgo_fr',
    title: '${shortTitle}',
    description: '${shortDescription}',
    images: ['https://www.climgo.fr/images/og/${escapedCityForUrl}-chauffage-climatisation.jpg'],
  },
  
  // Métadonnées avancées COMPLÈTES
  other: {
    // Géolocalisation précise
    'geo.region': 'FR-33',
    'geo.placename': '${escapedCity}',
    'geo.position': '44.8997;-0.7031',
    'ICBM': '44.8997, -0.7031',
    'geo.country': 'France',
    'geo.state': 'Nouvelle-Aquitaine',
    
    // Dublin Core COMPLET
    'DC.title': '${shortTitle}',
    'DC.description': '${shortDescription}',
    'DC.creator': 'ClimGO',
    'DC.publisher': 'ClimGO',
    'DC.language': 'fr-FR',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.climgo.fr/villes/${escapedCityForUrl}-chauffage-climatisation',
    'DC.source': 'https://www.climgo.fr',
    'DC.coverage': '${escapedCity}, Gironde, France',
    'DC.rights': '© 2025 ClimGO. Tous droits réservés.',
    
    // Données business locales COMPLÈTES
    'business.contact_data.locality': '${escapedCity}',
    'business.contact_data.postal_code': '${postalCode}',
    'business.contact_data.phone_number': '+33766460008',
    'business.contact_data.website': 'https://www.climgo.fr',
    'business.contact_data.email': 'contact@climgo.fr',
    
    // Signaux SEO local AVANCÉS
    'rating': '4.8',
    'priceRange': '€€',
    'audience': 'Particuliers et Professionnels',
    'category': 'Chauffage, Climatisation, Pompe à chaleur',
    'serviceType': 'Installation, Dépannage, Entretien',
    
    // Référencement avancé
    'revisit-after': '1 day',
    'robots': 'index,follow,noimageindex,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    'googlebot': 'index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1',
    
    // Vérifications
    'google-site-verification': 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    'bing-site-verification': 'VERIFICATION_CODE_TO_ADD'
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://www.climgo.fr/villes/${escapedCityForUrl}-chauffage-climatisation',
  },
  
  verification: {
    google: 'Ljs9Q3ve_Z_ldbzUTagcBPPmmQ_LTJER2pD3j7Woj1g',
    other: {
      bing: 'VERIFICATION_CODE_TO_ADD'
    }
  }
};

export default function ${city.replace(/[^a-zA-Z]/g, '')}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd type="city" city="${escapedCity}" postalCode="${postalCode}" />
      {children}
    </>
  );
}`;
}

// Fonction pour créer/optimiser une page de ville
function optimizeCity(city, postalCode) {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const cityPath = path.join(__dirname, '..', 'src', 'app', 'villes', `${citySlug}-chauffage-climatisation`);
  const layoutPath = path.join(cityPath, 'layout.tsx');
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(cityPath)) {
    fs.mkdirSync(cityPath, { recursive: true });
    console.log(`✅ Dossier créé: ${cityPath}`);
  }
  
  // Générer le contenu optimisé
  const optimizedContent = generateCityJsonLd(city, postalCode);
  
  // Écrire le fichier
  fs.writeFileSync(layoutPath, optimizedContent);
  console.log(`🚀 ${city} (${postalCode}) - Layout SEO optimisé !`);
}

// Fonction principale
function main() {
  console.log('🚀 OPTIMISATION SEO MASSIVE DES VILLES CLIMGO 🚀');
  console.log('=' .repeat(60));
  
  cities.forEach(({ name, postalCode }) => {
    optimizeCity(name, postalCode);
  });
  
  console.log('=' .repeat(60));
  console.log(`✅ ${cities.length} villes optimisées pour le SEO !`);
  console.log('🎯 ClimGO va DOMINER le référencement local !');
  console.log('🔥 N\'oubliez pas de faire un build après !');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { cities, generateCityJsonLd, optimizeCity };
