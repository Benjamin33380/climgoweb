#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fonction pour valider le schéma LocalBusiness
function validateLocalBusiness() {
  console.log('🔍 Validation du schéma LocalBusiness...');
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ClimGO",
    "description": "Spécialiste en climatisation, chauffage et maintenance depuis plus de 10 ans. Notre expertise au service de votre confort en Gironde et dans le Nord des Landes.",
    "url": "https://www.climgo.fr",
    "telephone": "+33766460008",
    "email": "contact@climgo.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zone d'activité",
      "addressLocality": "Bordeaux",
      "addressRegion": "Gironde",
      "postalCode": "33000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.837789",
      "longitude": "-0.57918"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bordeaux"
      },
      {
        "@type": "City", 
        "name": "Arcachon"
      },
      {
        "@type": "City",
        "name": "Mérignac"
      },
      {
        "@type": "City",
        "name": "Pessac"
      }
    ],
    "serviceType": ["Chauffage", "Climatisation", "Maintenance", "Pompe à chaleur"],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://www.facebook.com/climgo",
      "https://www.instagram.com/climgo",
      "https://www.linkedin.com/company/climgo"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services ClimGO",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Pompe à Chaleur",
            "description": "Installation de pompes à chaleur air-eau et air-air"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Maintenance Climatisation",
            "description": "Entretien et maintenance de systèmes de climatisation"
          }
        }
      ]
    }
  };

  // Vérifications de base
  const requiredFields = ['@context', '@type', 'name', 'address', 'telephone'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.log(`❌ Champs manquants: ${missingFields.join(', ')}`);
    return false;
  }

  // Vérification de l'adresse
  if (!schema.address['@type'] || !schema.address.addressLocality) {
    console.log('❌ Adresse invalide');
    return false;
  }

  // Vérification des coordonnées géographiques
  if (!schema.geo || !schema.geo.latitude || !schema.geo.longitude) {
    console.log('❌ Coordonnées géographiques manquantes');
    return false;
  }

  console.log('✅ Schéma LocalBusiness valide !');
  return true;
}

// Fonction pour valider le schéma Service
function validateService() {
  console.log('🔍 Validation du schéma Service...');
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chauffage - ClimGO",
    "description": "Service de chauffage professionnel en Gironde. Installation, maintenance et dépannage. Devis gratuit.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ClimGO",
      "telephone": "+33766460008",
      "email": "contact@climgo.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bordeaux",
        "addressRegion": "Gironde",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Gironde",
      "addressCountry": "FR"
    },
    "url": "https://www.climgo.fr/chauffage",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Devis gratuit"
    }
  };

  // Vérifications de base
  const requiredFields = ['@context', '@type', 'name', 'provider', 'areaServed'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.log(`❌ Champs manquants: ${missingFields.join(', ')}`);
    return false;
  }

  // Vérification du provider
  if (!schema.provider['@type'] || !schema.provider.name) {
    console.log('❌ Provider invalide');
    return false;
  }

  // Vérification de la zone d'intervention
  if (!schema.areaServed['@type'] || !schema.areaServed.name) {
    console.log('❌ Zone d\'intervention invalide');
    return false;
  }

  console.log('✅ Schéma Service valide !');
  return true;
}

// Fonction pour valider le schéma City
function validateCity() {
  console.log('🔍 Validation du schéma City...');
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chauffage et Climatisation Bordeaux",
    "description": "Expert chauffage climatisation Bordeaux 33000. Installation PAC, dépannage urgent, entretien. Artisan RGE certifié.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ClimGO",
      "telephone": "+33766460008",
      "email": "contact@climgo.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bordeaux",
        "postalCode": "33000",
        "addressRegion": "Gironde",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Bordeaux",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bordeaux",
        "postalCode": "33000",
        "addressRegion": "Gironde",
        "addressCountry": "FR"
      }
    },
    "serviceType": ["Chauffage", "Climatisation", "Maintenance"],
    "url": "https://www.climgo.fr/villes/bordeaux-chauffage-climatisation",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Devis gratuit"
    }
  };

  // Vérifications de base
  const requiredFields = ['@context', '@type', 'name', 'provider', 'areaServed', 'url'];
  const missingFields = requiredFields.filter(field => !schema[field]);
  
  if (missingFields.length > 0) {
    console.log(`❌ Champs manquants: ${missingFields.join(', ')}`);
    return false;
  }

  // Vérification du provider
  if (!schema.provider['@type'] || !schema.provider.name) {
    console.log('❌ Provider invalide');
    return false;
  }

  // Vérification de la zone d'intervention
  if (!schema.areaServed['@type'] || !schema.areaServed.name) {
    console.log('❌ Zone d\'intervention invalide');
    return false;
  }

  console.log('✅ Schéma City valide !');
  return true;
}

// Fonction principale
function main() {
  console.log('🚀 VALIDATION SCHEMA.ORG CLIMGO 🚀');
  console.log('=' .repeat(50));

  const results = [
    validateLocalBusiness(),
    validateService(),
    validateCity()
  ];

  console.log('=' .repeat(50));
  
  const validSchemas = results.filter(Boolean).length;
  const totalSchemas = results.length;
  
  if (validSchemas === totalSchemas) {
    console.log(`✅ ${validSchemas}/${totalSchemas} schémas valides !`);
    console.log('🎯 Schema.org ClimGO est parfait !');
  } else {
    console.log(`❌ ${totalSchemas - validSchemas}/${totalSchemas} schémas invalides !`);
    console.log('🔧 Des corrections sont nécessaires.');
  }

  console.log('\n📋 Prochaines étapes :');
  console.log('1. Tester avec Google Rich Results Test');
  console.log('2. Vérifier dans Google Search Console');
  console.log('3. Relancer l\'audit Ahrefs dans 1-2 semaines');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { validateLocalBusiness, validateService, validateCity };
