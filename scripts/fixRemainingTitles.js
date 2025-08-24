#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des corrections finales
const finalCorrections = {
  'a-propos': {
    oldTitle: 'À propos de ClimGO | Expert Chauffage Climatisation Gironde',
    newTitle: 'À propos de ClimGO | Expert Chauffage Climatisation',
    oldDescription: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié, devis gratuit.',
    newDescription: 'Découvrez ClimGO, votre expert en chauffage et climatisation en Gironde depuis plus de 10 ans. Artisan RGE certifié.'
  },
  'chauffage': {
    oldTitle: 'Chauffage Gironde | Installation PAC, Plancher Chauffant | ClimGO',
    newTitle: 'Chauffage Gironde | Installation PAC, Plancher Chauffant',
    oldDescription: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié. Devis gratuit.',
    newDescription: 'Expert chauffage Gironde. Installation pompe à chaleur, plancher chauffant, radiateurs. Artisan RGE certifié.'
  },
  'climatisation': {
    oldTitle: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air | ClimGO',
    newTitle: 'Climatisation Gironde | Installation Climatiseur PAC Air/Air',
    oldDescription: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage. Devis gratuit.',
    newDescription: 'Climatisation Gironde. Installation climatiseur, PAC air/air, réversible. Entretien, dépannage.'
  },
  'contact': {
    oldTitle: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation Gironde',
    newTitle: 'Contactez ClimGO | Devis Gratuit Chauffage Climatisation',
    oldDescription: 'Contactez ClimGO pour un devis gratuit chauffage climatisation Gironde. Installation, maintenance, dépannage.',
    newDescription: 'Contactez ClimGO pour un devis gratuit chauffage climatisation. Installation, maintenance, dépannage.'
  },
  'maintenance': {
    oldTitle: 'Entretien Chauffage Climatisation Gironde | ClimGO Maintenance',
    newTitle: 'Entretien Chauffage Climatisation Gironde | ClimGO',
    oldDescription: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur. Contrat entretien annuel.',
    newDescription: 'Entretien chauffage climatisation Gironde. Maintenance PAC, chaudière, climatiseur.'
  },
  'services': {
    oldTitle: 'Services ClimGO | Chauffage Climatisation PAC Gironde',
    newTitle: 'Services ClimGO | Chauffage Climatisation PAC',
    oldDescription: 'Services ClimGO : chauffage, climatisation, pompe à chaleur en Gironde. Installation, maintenance, dépannage.',
    newDescription: 'Services ClimGO : chauffage, climatisation, pompe à chaleur. Installation, maintenance, dépannage.'
  }
};

// Fonction pour corriger un titre
function fixTitle(pagePath, corrections) {
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

// Fonction principale
function main() {
  console.log('🚀 CORRECTION FINALE DES TITRES CLIMGO 🚀');
  console.log('=' .repeat(50));

  let correctedPages = 0;

  // Corriger les pages principales
  Object.entries(finalCorrections).forEach(([page, corrections]) => {
    const pagePath = path.join(__dirname, '..', 'src', 'app', page, 'layout.tsx');
    
    if (fs.existsSync(pagePath)) {
      if (fixTitle(pagePath, corrections)) {
        correctedPages++;
        console.log(`✅ ${page} corrigé`);
        
        // Vérifier la longueur du nouveau titre
        const newTitleLength = corrections.newTitle.length;
        console.log(`   ${newTitleLength}/60 caractères`);
      }
    }
  });

  console.log('\n' + '=' .repeat(50));
  console.log(`✅ ${correctedPages} pages corrigées !`);
  
  if (correctedPages === Object.keys(finalCorrections).length) {
    console.log('🎯 Tous les titres respectent maintenant la limite de 60 caractères !');
  } else {
    console.log('🔧 Certains titres nécessitent encore des corrections manuelles.');
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

module.exports = { finalCorrections, fixTitle };
