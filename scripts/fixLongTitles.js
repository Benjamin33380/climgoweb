#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des corrections de titres
const titleCorrections = {
  'le-bouscat': {
    oldTitle: 'Chauffage Climatisation Le Bouscat 33110 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Le Bouscat 33110 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Le Bouscat 33110. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Le Bouscat 33110. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'le-barp': {
    oldTitle: 'Chauffage Climatisation Le Barp 33114 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Le Barp 33114 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Le Barp 33114. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Le Barp 33114. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'le-haillan': {
    oldTitle: 'Chauffage Climatisation Le Haillan 33185 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Le Haillan 33185 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Le Haillan 33185. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Le Haillan 33185. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'le-teich': {
    oldTitle: 'Chauffage Climatisation Le Teich 33470 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Le Teich 33470 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Le Teich 33470. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Le Teich 33470. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'lege-cap-ferret': {
    oldTitle: 'Chauffage Climatisation Lège-Cap-Ferret 33950 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Lège-Cap-Ferret 33950 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Lège-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Lège-Cap-Ferret 33950. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'saint-aubin-de-medoc': {
    oldTitle: 'Climatisation Chauffage Saint-Aubin-de-Médoc 33160 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Saint-Aubin-de-Médoc 33160 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Saint-Aubin-de-Médoc 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Saint-Aubin-de-Médoc 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'saint-medard-en-jalles': {
    oldTitle: 'Climatisation Chauffage Saint-Médard-en-Jalles 33160 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Saint-Médard-en-Jalles 33160 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Saint-Médard-en-Jalles 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Saint-Médard-en-Jalles 33160. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'martignas-sur-jalle': {
    oldTitle: 'Climatisation Chauffage Martignas-sur-Jalle 33127 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation Martignas-sur-Jalle 33127 | ClimGO',
    oldDescription: 'Expert chauffage climatisation Martignas-sur-Jalle 33127. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation Martignas-sur-Jalle 33127. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  },
  'la-teste-de-buch': {
    oldTitle: 'Chauffage Climatisation La Teste-de-Buch 33260 | ClimGO | ClimGO Gironde',
    newTitle: 'Chauffage Climatisation La Teste-de-Buch 33260 | ClimGO',
    oldDescription: 'Expert chauffage climatisation La Teste-de-Buch 33260. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.',
    newDescription: 'Expert chauffage climatisation La Teste-de-Buch 33260. Installation PAC, dépannage, entretien. Artisan RGE. Devis gratuit.'
  }
};

// Fonction pour corriger un titre de ville
function fixCityTitle(citySlug) {
  const correction = titleCorrections[citySlug];
  if (!correction) {
    console.log(`⚠️  Aucune correction définie pour: ${citySlug}`);
    return false;
  }

  const cityPath = path.join(__dirname, '..', 'src', 'app', 'villes', `${citySlug}-chauffage-climatisation`);
  const layoutPath = path.join(cityPath, 'layout.tsx');

  if (!fs.existsSync(layoutPath)) {
    console.log(`❌ Fichier non trouvé: ${layoutPath}`);
    return false;
  }

  try {
    let content = fs.readFileSync(layoutPath, 'utf8');
    
    // Remplacer le titre
    content = content.replace(
      new RegExp(correction.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      correction.newTitle
    );
    
    // Remplacer la description si nécessaire
    if (correction.oldDescription !== correction.newDescription) {
      content = content.replace(
        new RegExp(correction.oldDescription.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
        correction.newDescription
      );
    }

    // Remplacer dans OpenGraph
    content = content.replace(
      new RegExp(`title: '${correction.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
      `title: '${correction.newTitle}'`
    );

    // Remplacer dans Twitter
    content = content.replace(
      new RegExp(`title: '${correction.oldTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
      `title: '${correction.newTitle}'`
    );

    // Écrire le fichier corrigé
    fs.writeFileSync(layoutPath, content);
    
    // Vérifier la longueur du nouveau titre
    const newTitleLength = correction.newTitle.length;
    const status = newTitleLength <= 60 ? '✅' : '❌';
    
    console.log(`${status} ${citySlug}: ${newTitleLength}/60 caractères`);
    return newTitleLength <= 60;
  } catch (error) {
    console.error(`❌ Erreur correction ${citySlug}:`, error.message);
    return false;
  }
}

// Fonction principale
function main() {
  console.log('🚀 CORRECTION DES TITRES TROP LONGS CLIMGO 🚀');
  console.log('=' .repeat(50));

  let correctedCount = 0;
  let totalCount = Object.keys(titleCorrections).length;

  Object.keys(titleCorrections).forEach(citySlug => {
    if (fixCityTitle(citySlug)) {
      correctedCount++;
    }
  });

  console.log('=' .repeat(50));
  console.log(`✅ ${correctedCount}/${totalCount} titres corrigés !`);
  
  if (correctedCount === totalCount) {
    console.log('🎯 Tous les titres respectent maintenant la limite de 60 caractères !');
  } else {
    console.log('🔧 Certains titres nécessitent encore des corrections manuelles.');
  }

  console.log('\n📋 Prochaines étapes :');
  console.log('1. Faire un build pour vérifier les corrections');
  console.log('2. Relancer l\'audit Ahrefs dans 1-2 semaines');
  console.log('3. Vérifier que tous les titres sont ≤ 60 caractères');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { titleCorrections, fixCityTitle };
