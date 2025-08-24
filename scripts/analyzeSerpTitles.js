#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des analyses de titres
const titleAnalysis = {
  // Titres trop longs (>60 caractères)
  'longTitles': [],
  
  // Titres avec trop de mots-clés
  'keywordSpam': [],
  
  // Titres avec répétitions
  'repetitiveTitles': [],
  
  // Titres trop complexes
  'complexTitles': [],
  
  // Titres SERP-friendly
  'serpFriendly': []
};

// Fonction pour analyser un titre
function analyzeTitle(title, url) {
  const analysis = {
    url,
    title,
    length: title.length,
    wordCount: title.split(' ').length,
    hasRepetition: false,
    hasKeywordSpam: false,
    isSerpFriendly: true,
    issues: []
  };

  // Vérifier la longueur
  if (title.length > 60) {
    analysis.isSerpFriendly = false;
    analysis.issues.push(`Titre trop long: ${title.length}/60 caractères`);
    titleAnalysis.longTitles.push(analysis);
  }

  // Vérifier le nombre de mots
  if (analysis.wordCount > 8) {
    analysis.isSerpFriendly = false;
    analysis.issues.push(`Trop de mots: ${analysis.wordCount} mots`);
    titleAnalysis.complexTitles.push(analysis);
  }

  // Vérifier les répétitions VRAIES (pas juste la présence de mots)
  const words = title.toLowerCase().split(' ');
  const wordCount = {};
  words.forEach(word => {
    if (word.length > 3) { // Ignorer les mots courts
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  Object.entries(wordCount).forEach(([word, count]) => {
    if (count > 2) { // Seulement si un mot apparaît plus de 2 fois
      analysis.hasRepetition = true;
      analysis.isSerpFriendly = false;
      analysis.issues.push(`Mot répété: "${word}" (${count}x)`);
      titleAnalysis.repetitiveTitles.push(analysis);
    }
  });

  // Vérifier le spam de mots-clés VRAI (pas juste la présence de "ClimGO")
  const keywordPatterns = [
    /ClimGO.*ClimGO.*ClimGO/g, // 3x ou plus ClimGO
    /Gironde.*Gironde.*Gironde/g, // 3x ou plus Gironde
    /Expert.*Expert.*Expert/g, // 3x ou plus Expert
    /\|\s*\|\s*\|/g, // 3 séparateurs ou plus
    /ClimGO\s*\|\s*ClimGO\s*\|\s*ClimGO/g // ClimGO | ClimGO | ClimGO
  ];

  let spamDetected = false;
  keywordPatterns.forEach(pattern => {
    if (pattern.test(title)) {
      spamDetected = true;
    }
  });

  if (spamDetected) {
    analysis.hasKeywordSpam = true;
    analysis.isSerpFriendly = false;
    analysis.issues.push('Spam de mots-clés détecté');
    titleAnalysis.keywordSpam.push(analysis);
  }

  // Si le titre est SERP-friendly
  if (analysis.isSerpFriendly) {
    titleAnalysis.serpFriendly.push(analysis);
  }

  return analysis;
}

// Fonction pour analyser une page
function analyzePage(pagePath) {
  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Extraire le titre
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (titleMatch) {
      const title = titleMatch[1];
      const url = pagePath.replace(__dirname + '/../src/app/', 'https://www.climgo.fr/').replace('/layout.tsx', '');
      return analyzeTitle(title, url);
    }
  } catch (error) {
    console.log(`⚠️  Erreur lecture ${pagePath}:`, error.message);
  }
  return null;
}

// Fonction pour analyser tous les layouts
function analyzeAllLayouts() {
  console.log('🔍 ANALYSE DES TITRES SERP CLIMGO 🔍');
  console.log('=' .repeat(50));

  const srcPath = path.join(__dirname, '..', 'src', 'app');
  const pages = [];

  // Fonction récursive pour scanner les dossiers
  function scanDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const itemRelativePath = path.join(relativePath, item);
      
      if (fs.statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, itemRelativePath);
      } else if (item === 'layout.tsx') {
        pages.push(fullPath);
      }
    });
  }

  scanDirectory(srcPath);

  console.log(`📁 ${pages.length} pages analysées...\n`);

  // Analyser chaque page
  pages.forEach(pagePath => {
    const analysis = analyzePage(pagePath);
    if (analysis) {
      console.log(`${analysis.isSerpFriendly ? '✅' : '❌'} ${analysis.url}`);
      if (analysis.issues.length > 0) {
        analysis.issues.forEach(issue => console.log(`   ${issue}`));
      }
    }
  });

  // Résumé des analyses
  console.log('\n' + '=' .repeat(50));
  console.log('📊 RÉSUMÉ DES ANALYSES :');
  console.log(`✅ Titres SERP-friendly: ${titleAnalysis.serpFriendly.length}`);
  console.log(`❌ Titres trop longs: ${titleAnalysis.longTitles.length}`);
  console.log(`❌ Titres avec répétitions: ${titleAnalysis.repetitiveTitles.length}`);
  console.log(`❌ Titres trop complexes: ${titleAnalysis.complexTitles.length}`);
  console.log(`❌ Spam de mots-clés: ${titleAnalysis.keywordSpam.length}`);

  // Recommandations
  console.log('\n📋 RECOMMANDATIONS :');
  
  if (titleAnalysis.longTitles.length > 0) {
    console.log('🔧 Raccourcir les titres > 60 caractères');
  }
  
  if (titleAnalysis.repetitiveTitles.length > 0) {
    console.log('🔧 Éliminer les répétitions de mots');
  }
  
  if (titleAnalysis.keywordSpam.length > 0) {
    console.log('🔧 Réduire la densité des mots-clés');
  }
  
  if (titleAnalysis.complexTitles.length > 0) {
    console.log('🔧 Simplifier les titres trop complexes');
  }

  if (titleAnalysis.serpFriendly.length === pages.length) {
    console.log('🎯 Tous les titres sont SERP-friendly !');
  } else {
    console.log(`🔧 ${pages.length - titleAnalysis.serpFriendly.length} titres nécessitent des corrections`);
  }

  return titleAnalysis;
}

// Fonction principale
function main() {
  const analysis = analyzeAllLayouts();
  
  console.log('\n📋 Prochaines étapes :');
  console.log('1. Corriger les titres problématiques identifiés');
  console.log('2. Faire un build pour vérifier les corrections');
  console.log('3. Relancer l\'audit Ahrefs dans 1-2 semaines');
  console.log('4. Surveiller les SERP Google pour vérifier l\'affichage');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { analyzeTitle, analyzePage, analyzeAllLayouts };
