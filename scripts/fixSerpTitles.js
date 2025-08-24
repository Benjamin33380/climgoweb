#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des corrections SERP
const serpCorrections = {
  // Pages principales
  'a-propos': {
    oldTitle: 'À propos de ClimGO | Expert Chauffage Climatisation Gironde | ClimGO Gironde',
    newTitle: 'À propos de ClimGO | Expert Chauffage Climatisation Gironde',
    oldDescription: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié, devis gratuit.',
    newDescription: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.'
  },
  'aides-etat': {
    oldTitle: 'Aides & Subventions ClimGO | MaPrimeRénov, CEE, Éco-PTZ | ClimGO Gironde',
    newTitle: 'Aides & Subventions ClimGO | MaPrimeRénov, CEE',
    oldDescription: 'Découvrez toutes les aides de l\'État 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne dans vos démarches.',
    newDescription: 'Découvrez toutes les aides de l\'État 2025 pour vos travaux chauffage climatisation. ClimGO vous accompagne.'
  },
  'chauffage': {
    oldTitle: 'Chauffage Gironde | Installation PAC, Plancher Chauffant | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Gironde | Installation PAC, Plancher Chauffant | ClimGO',
    oldDescription: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié. Devis gratuit. 07 66 46 00 08',
    newDescription: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié. Devis gratuit.'
  },
  'climatisation': {
    oldTitle: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO | ClimGO Gironde',
    newTitle: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    oldDescription: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Devis gratuit. ClimGO expert.',
    newDescription: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Devis gratuit.'
  },
  'contact': {
    oldTitle: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation Gironde | ClimGO Gironde',
    newTitle: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
    oldDescription: 'Contactez ClimGO pour un devis gratuit chauffage climatisation Gironde. Installation, maintenance, dépannage. 07 66 46 00 08.',
    newDescription: 'Contactez ClimGO pour un devis gratuit chauffage climatisation Gironde. Installation, maintenance, dépannage.'
  },
  'maintenance': {
    oldTitle: 'Entretien Chauffage Climatisation Gironde | Entretien ClimGO | ClimGO Gironde',
    newTitle: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    oldDescription: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel. Intervention rapide.',
    newDescription: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel.'
  },
  'eau-chaude-sanitaire': {
    oldTitle: 'Chauffe-eau Ballon Eau Chaude Gironde | Installation ClimGO | ClimGO Gironde',
    newTitle: 'Chauffe-eau Ballon Eau Chaude Gironde | Installation ClimGO',
    oldDescription: 'Installation chauffe-eau ballon eau chaude Gironde. Ballon thermodynamique, électrique, solaire. Devis gratuit. ClimGO expert.',
    newDescription: 'Installation chauffe-eau ballon eau chaude Gironde. Ballon thermodynamique, électrique, solaire. Devis gratuit.'
  },
  'services': {
    oldTitle: 'Services ClimGO | Chauffage Climatisation PAC Gironde | Expert RGE | ClimGO Gironde',
    newTitle: 'Services ClimGO | Chauffage Climatisation PAC Gironde',
    oldDescription: 'Services ClimGO : chauffage, climatisation, pompe à chaleur en Gironde. Installation, maintenance, dépannage. Expert RGE certifié.',
    newDescription: 'Services ClimGO : chauffage, climatisation, pompe à chaleur en Gironde. Installation, maintenance, dépannage.'
  },
  'blog': {
    oldTitle: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde | ClimGO Gironde',
    newTitle: 'Blog ClimGO | Conseils Chauffage Climatisation Gironde',
    oldDescription: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques. Expert RGE en Gironde.',
    newDescription: 'Blog ClimGO : conseils chauffage climatisation, actualités, guides techniques.'
  },
  'zones-interventions': {
    oldTitle: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde | ClimGO Gironde',
    newTitle: 'Zones d\'Intervention ClimGO | Chauffage Climatisation Gironde',
    oldDescription: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes. Chauffage climatisation.',
    newDescription: 'Zones d\'intervention ClimGO en Gironde. Bordeaux, Arcachon, Mérignac, Pessac et plus de 40 villes.'
  }
};

// Fonction pour corriger un titre SERP
function fixSerpTitle(pagePath, corrections) {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    let modified = false;

    // Remplacer le titre
    if (corrections.oldTitle && corrections.newTitle) {
      content = content.replace(
        new RegExp(corrections.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        corrections.newTitle
      );
      modified = true;
    }

    // Remplacer la description
    if (corrections.oldDescription && corrections.newDescription) {
      content = content.replace(
        new RegExp(corrections.oldDescription.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        corrections.newDescription
      );
      modified = true;
    }

    // Remplacer dans OpenGraph
    if (corrections.oldTitle && corrections.newTitle) {
      content = content.replace(
        new RegExp(`title: '${corrections.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
        `title: '${corrections.newTitle}'`
      );
    }

    // Remplacer dans Twitter
    if (corrections.oldTitle && corrections.newTitle) {
      content = content.replace(
        new RegExp(`title: '${corrections.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
        `title: '${corrections.newTitle}'`
      );
    }

    // Écrire le fichier modifié
    if (modified) {
      fs.writeFileSync(pagePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Erreur correction ${pagePath}:`, error.message);
    return false;
  }
}

// Fonction pour corriger les titres des villes
function fixCityTitles() {
  const citiesPath = path.join(__dirname, '..', 'src', 'app', 'villes');
  const cities = fs.readdirSync(citiesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let correctedCities = 0;

  cities.forEach(cityDir => {
    const layoutPath = path.join(citiesPath, cityDir, 'layout.tsx');
    
    if (fs.existsSync(layoutPath)) {
      try {
        let content = fs.readFileSync(layoutPath, 'utf8');
        let modified = false;

        // Remplacer les titres avec répétition "ClimGO | ClimGO Gironde"
        const oldPattern = /title:\s*['"`]([^'"`]*ClimGO[^'"`]*ClimGO[^'"`]*)['"`]/g;
        const newPattern = (match, title) => {
          const newTitle = title.replace(/\|\s*ClimGO\s*Gironde/, '').trim();
          modified = true;
          return `title: '${newTitle}'`;
        };

        content = content.replace(oldPattern, newPattern);

        // Remplacer dans OpenGraph
        content = content.replace(oldPattern, newPattern);

        // Remplacer dans Twitter
        content = content.replace(oldPattern, newPattern);

        if (modified) {
          fs.writeFileSync(layoutPath, content);
          correctedCities++;
          console.log(`✅ ${cityDir} corrigé`);
        }
      } catch (error) {
        console.log(`⚠️  Erreur ${cityDir}:`, error.message);
      }
    }
  });

  return correctedCities;
}

// Fonction principale
function main() {
  console.log('🚀 CORRECTION DES TITRES SERP CLIMGO 🚀');
  console.log('=' .repeat(50));

  let correctedPages = 0;
  let correctedCities = 0;

  // Corriger les pages principales
  Object.entries(serpCorrections).forEach(([page, corrections]) => {
    const pagePath = path.join(__dirname, '..', 'src', 'app', page, 'layout.tsx');
    
    if (fs.existsSync(pagePath)) {
      if (fixSerpTitle(pagePath, corrections)) {
        correctedPages++;
        console.log(`✅ ${page} corrigé`);
      }
    }
  });

  // Corriger les titres des villes
  console.log('\n🏙️  Correction des titres des villes...');
  correctedCities = fixCityTitles();

  console.log('\n' + '=' .repeat(50));
  console.log(`✅ ${correctedPages} pages principales corrigées`);
  console.log(`✅ ${correctedCities} villes corrigées`);
  console.log(`🎯 Total: ${correctedPages + correctedCities} corrections appliquées`);

  console.log('\n📋 Prochaines étapes :');
  console.log('1. Faire un build pour vérifier les corrections');
  console.log('2. Relancer l\'analyse SERP pour confirmer');
  console.log('3. Surveiller les SERP Google');
  console.log('4. Relancer l\'audit Ahrefs dans 1-2 semaines');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { serpCorrections, fixSerpTitle, fixCityTitles };
