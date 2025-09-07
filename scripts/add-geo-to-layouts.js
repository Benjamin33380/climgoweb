#!/usr/bin/env node

/**
 * Script pour ajouter les données géographiques (geo) dans tous les JSON-LD des layouts
 */

const fs = require('fs');
const path = require('path');

console.log('🌍 Ajout des données géographiques dans les layouts...\n');

// Configuration des coordonnées
const HEADQUARTERS_COORDINATES = {
  latitude: 44.6917,
  longitude: -0.8547
};

// Fonction pour générer le JSON-LD géographique
function generateGeoJsonLd(coordinates, name) {
  return {
    "@type": "GeoCoordinates",
    "latitude": coordinates.latitude,
    "longitude": coordinates.longitude,
    "name": name
  };
}

// Fonction pour générer le serviceArea avec géolocalisation
function generateServiceAreaJsonLd(coordinates, radius = "50000") {
  return {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "geoRadius": radius
  };
}

// Fonction pour ajouter les données geo à un JSON-LD
function addGeoToJsonLd(jsonLdString) {
  try {
    const jsonLd = JSON.parse(jsonLdString);
    
    // Ajouter geo au niveau principal si c'est un LocalBusiness ou HVACBusiness
    if (jsonLd["@type"] === "LocalBusiness" || jsonLd["@type"] === "HVACBusiness") {
      if (!jsonLd.geo) {
        jsonLd.geo = generateGeoJsonLd(HEADQUARTERS_COORDINATES, "ClimGO Marcheprime");
      }
      if (!jsonLd.serviceArea) {
        jsonLd.serviceArea = generateServiceAreaJsonLd(HEADQUARTERS_COORDINATES, "50000");
      }
    }
    
    // Ajouter geo au provider si c'est un Service
    if (jsonLd["@type"] === "Service" && jsonLd.provider) {
      if (!jsonLd.provider.geo) {
        jsonLd.provider.geo = generateGeoJsonLd(HEADQUARTERS_COORDINATES, "ClimGO Marcheprime");
      }
      if (!jsonLd.provider.serviceArea) {
        jsonLd.provider.serviceArea = generateServiceAreaJsonLd(HEADQUARTERS_COORDINATES, "50000");
      }
    }
    
    // Ajouter geo à areaServed si c'est un Place
    if (jsonLd.areaServed && typeof jsonLd.areaServed === "object" && jsonLd.areaServed["@type"] === "Place") {
      if (!jsonLd.areaServed.geo) {
        jsonLd.areaServed.geo = generateGeoJsonLd(HEADQUARTERS_COORDINATES, "Zone d'intervention ClimGO");
      }
    }
    
    return JSON.stringify(jsonLd, null, 2);
  } catch (error) {
    console.error('Erreur lors du parsing JSON:', error.message);
    return jsonLdString;
  }
}

// Fonction pour traiter un fichier layout
function processLayoutFile(filePath) {
  try {
    console.log(`📄 Traitement de ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Rechercher et remplacer les JSON-LD
    const jsonLdRegex = /JSON\.stringify\(\s*(\{[\s\S]*?\})\s*\)/g;
    
    content = content.replace(jsonLdRegex, (match, jsonLdString) => {
      const updatedJsonLd = addGeoToJsonLd(jsonLdString);
      if (updatedJsonLd !== jsonLdString) {
        modified = true;
        return `JSON.stringify(${updatedJsonLd})`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${filePath} mis à jour avec les données géographiques`);
    } else {
      console.log(`ℹ️  ${filePath} - Aucune modification nécessaire`);
    }
    
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${filePath}:`, error.message);
  }
}

// Fonction pour parcourir récursivement les dossiers
function walkDirectory(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorer node_modules et .next
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        walkDirectory(filePath, callback);
      }
    } else if (file === 'layout.tsx') {
      callback(filePath);
    }
  });
}

// Traiter tous les layouts
const srcDir = path.join(__dirname, '..', 'src', 'app');
walkDirectory(srcDir, processLayoutFile);

console.log('\n🎉 Traitement terminé !');
console.log('\n📋 Résumé des améliorations :');
console.log('  • Données géographiques ajoutées aux JSON-LD');
console.log('  • Coordonnées du siège social ClimGO (Marcheprime)');
console.log('  • Zones de service avec rayon de 50km');
console.log('  • Amélioration du SEO local');
console.log('  • Meilleure visibilité dans les résultats de recherche géolocalisés');
