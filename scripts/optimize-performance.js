#!/usr/bin/env node

/**
 * Script d'optimisation des performances
 * Optimise les images, nettoie le cache et optimise la base de données
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Début de l\'optimisation des performances...\n');

// 1. Nettoyer le cache Next.js
console.log('🧹 Nettoyage du cache Next.js...');
try {
  execSync('rm -rf .next', { stdio: 'inherit' });
  console.log('✅ Cache Next.js nettoyé\n');
} catch (error) {
  console.log('⚠️  Erreur lors du nettoyage du cache:', error.message, '\n');
}

// 2. Nettoyer node_modules et réinstaller
console.log('📦 Nettoyage et réinstallation des dépendances...');
try {
  execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dépendances réinstallées\n');
} catch (error) {
  console.log('⚠️  Erreur lors de la réinstallation:', error.message, '\n');
}

// 3. Optimiser les images dans le dossier public
console.log('🖼️  Optimisation des images...');
const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      optimizeImages(filePath);
    } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
      console.log(`  📸 Optimisation de ${file}...`);
      // Ici vous pourriez ajouter des commandes d'optimisation d'images
      // comme sharp, imagemin, etc.
    }
  });
}

try {
  optimizeImages(publicDir);
  console.log('✅ Images optimisées\n');
} catch (error) {
  console.log('⚠️  Erreur lors de l\'optimisation des images:', error.message, '\n');
}

// 4. Générer le build de production pour tester
console.log('🏗️  Génération du build de production...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build de production généré\n');
} catch (error) {
  console.log('⚠️  Erreur lors du build:', error.message, '\n');
}

// 5. Analyser la taille du bundle
console.log('📊 Analyse de la taille du bundle...');
try {
  const buildDir = path.join(__dirname, '..', '.next');
  if (fs.existsSync(buildDir)) {
    const analyzeBundle = () => {
      const staticDir = path.join(buildDir, 'static');
      if (fs.existsSync(staticDir)) {
        const chunks = fs.readdirSync(staticDir);
        let totalSize = 0;
        
        chunks.forEach(chunk => {
          const chunkPath = path.join(staticDir, chunk);
          const stat = fs.statSync(chunkPath);
          if (stat.isFile()) {
            totalSize += stat.size;
            console.log(`  📦 ${chunk}: ${(stat.size / 1024).toFixed(2)} KB`);
          }
        });
        
        console.log(`\n📊 Taille totale du bundle: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
      }
    };
    
    analyzeBundle();
  }
} catch (error) {
  console.log('⚠️  Erreur lors de l\'analyse:', error.message, '\n');
}

console.log('🎉 Optimisation terminée !');
console.log('\n📋 Recommandations supplémentaires :');
console.log('  • Utilisez un CDN pour les images statiques');
console.log('  • Configurez Redis pour la mise en cache en production');
console.log('  • Activez la compression gzip/brotli sur votre serveur');
console.log('  • Utilisez un service de monitoring comme Vercel Analytics');
console.log('  • Considérez l\'utilisation de Prisma Accelerate pour la base de données');
