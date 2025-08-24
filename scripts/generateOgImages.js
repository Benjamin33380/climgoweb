#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des images Open Graph
const ogImages = [
  {
    name: 'chauffage-gironde',
    title: 'Chauffage Gironde',
    subtitle: 'Installation PAC, Plancher Chauffant',
    brand: 'ClimGO'
  },
  {
    name: 'climatisation-gironde',
    title: 'Climatisation Gironde',
    subtitle: 'Installation PAC Air/Air',
    brand: 'ClimGO'
  },
  {
    name: 'maintenance-gironde',
    title: 'Maintenance Gironde',
    subtitle: 'Entretien & Dépannage',
    brand: 'ClimGO'
  },
  {
    name: 'eau-chaude-sanitaire-gironde',
    title: 'Eau Chaude Sanitaire',
    subtitle: 'Chauffe-eau & Ballons',
    brand: 'ClimGO'
  }
];

// Template HTML pour les images OG
function generateOgImageHtml(image) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${image.title} - ${image.subtitle} | ${image.brand}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .container {
      text-align: center;
      padding: 40px;
      max-width: 800px;
    }
    .title {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .subtitle {
      font-size: 2rem;
      margin-bottom: 30px;
      opacity: 0.9;
    }
    .brand {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fbbf24;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    .logo {
      font-size: 4rem;
      margin-bottom: 30px;
      color: #fbbf24;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">🔥</div>
    <h1 class="title">${image.title}</h1>
    <h2 class="subtitle">${image.subtitle}</h2>
    <div class="brand">${image.brand}</div>
  </div>
</body>
</html>`;
}

// Fonction pour créer une image OG
function createOgImage(image) {
  const imagePath = path.join(__dirname, '..', 'public', 'images', 'og', `${image.name}.html`);
  
  try {
    fs.writeFileSync(imagePath, generateOgImageHtml(image));
    console.log(`✅ Image OG créée: ${image.name}.html`);
  } catch (error) {
    console.error(`❌ Erreur création ${image.name}:`, error.message);
  }
}

// Fonction principale
function main() {
  console.log('🚀 GÉNÉRATION DES IMAGES OPEN GRAPH CLIMGO 🚀');
  console.log('=' .repeat(50));

  // Créer le dossier s'il n'existe pas
  const ogDir = path.join(__dirname, '..', 'public', 'images', 'og');
  if (!fs.existsSync(ogDir)) {
    fs.mkdirSync(ogDir, { recursive: true });
    console.log('📁 Dossier images/og créé');
  }

  // Générer toutes les images
  ogImages.forEach(createOgImage);

  console.log('=' .repeat(50));
  console.log(`✅ ${ogImages.length} images Open Graph générées !`);
  console.log('📁 Dossier: public/images/og/');
  console.log('\n📋 Prochaines étapes :');
  console.log('1. Convertir les HTML en images JPG/PNG');
  console.log('2. Optimiser les images pour le web');
  console.log('3. Tester le partage social');
  console.log('\n💡 Astuce: Utilisez un outil comme Puppeteer ou Playwright pour convertir HTML en images');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { ogImages, generateOgImageHtml, createOgImage };
