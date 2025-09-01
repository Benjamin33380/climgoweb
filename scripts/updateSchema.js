const { execSync } = require('child_process');

console.log('🔄 Mise à jour du schéma Prisma...');

try {
  // Générer le client Prisma avec le nouveau schéma
  console.log('📦 Génération du client Prisma...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Pousser les modifications vers la base de données
  console.log('🚀 Mise à jour de la base de données...');
  execSync('npx prisma db push', { stdio: 'inherit' });
  
  console.log('✅ Schéma Prisma mis à jour avec succès !');
  console.log('✨ Le système de points est maintenant actif !');
  
} catch (error) {
  console.error('❌ Erreur lors de la mise à jour du schéma:', error.message);
  process.exit(1);
} 