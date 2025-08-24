#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fonction pour corriger un titre de ville
function fixCityTitle(cityPath) {
  try {
    let content = fs.readFileSync(cityPath, 'utf8');
    let modified = false;

    // Remplacer les titres avec répétition "ClimGO | ClimGO Gironde"
    const oldPattern = /title:\s*['"`]([^'"`]*ClimGO[^'"`]*ClimGO[^'"`]*)['"`]/g;
    content = content.replace(oldPattern, (match, title) => {
      const newTitle = title.replace(/\|\s*ClimGO\s*Gironde/, '').trim();
      modified = true;
      return `title: '${newTitle}'`;
    });

    // Remplacer dans OpenGraph
    content = content.replace(oldPattern, (match, title) => {
      const newTitle = title.replace(/\|\s*ClimGO\s*Gironde/, '').trim();
      return `title: '${newTitle}'`;
    });

    // Remplacer dans Twitter
    content = content.replace(oldPattern, (match, title) => {
      const newTitle = title.replace(/\|\s*ClimGO\s*Gironde/, '').trim();
      return `title: '${newTitle}'`;
    });

    // Remplacer dans DC.title
    content = content.replace(oldPattern, (match, title) => {
      const newTitle = title.replace(/\|\s*ClimGO\s*Gironde/, '').trim();
      return `title: '${newTitle}'`;
    });

    // Écrire le fichier modifié
    if (modified) {
      fs.writeFileSync(cityPath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Erreur correction ${cityPath}:`, error.message);
    return false;
  }
}

// Fonction principale
function main() {
  console.log('🚀 CORRECTION DES TITRES DES VILLES CLIMGO 🚀');
  console.log('=' .repeat(50));

  const citiesPath = path.join(__dirname, '..', 'src', 'app', 'villes');
  const cities = fs.readdirSync(citiesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let correctedCities = 0;

  cities.forEach(cityDir => {
    const layoutPath = path.join(citiesPath, cityDir, 'layout.tsx');
    
    if (fs.existsSync(layoutPath)) {
      if (fixCityTitle(layoutPath)) {
        correctedCities++;
        console.log(`✅ ${cityDir} corrigé`);
      }
    }
  });

  console.log('\n' + '=' .repeat(50));
  console.log(`✅ ${correctedCities} villes corrigées !`);
  
  if (correctedCities > 0) {
    console.log('🎯 Les titres des villes sont maintenant SERP-friendly !');
  } else {
    console.log('ℹ️  Aucune correction nécessaire pour les villes');
  }

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

module.exports = { fixCityTitle };
