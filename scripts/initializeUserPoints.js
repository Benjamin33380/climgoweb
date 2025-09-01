const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function initializeUserPoints() {
  try {
    console.log('🔧 Initialisation des points pour tous les utilisateurs...');
    
    // Récupérer tous les utilisateurs
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        points: true
      }
    });
    
    console.log(`📊 ${users.length} utilisateurs trouvés`);
    
    let updatedCount = 0;
    
    // Mettre à jour chaque utilisateur individuellement
    for (const user of users) {
      if (user.points === null || user.points === undefined) {
        await prisma.user.update({
          where: { id: user.id },
          data: { points: 5 }
        });
        updatedCount++;
        console.log(`✅ ${user.email}: points initialisés à 5`);
      } else {
        console.log(`ℹ️  ${user.email}: déjà ${user.points} points`);
      }
    }
    
    console.log(`\n🎯 Résumé: ${updatedCount} utilisateurs mis à jour`);
    
    // Vérifier l'état final
    const finalUsers = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        points: true
      }
    });
    
    console.log('\n📊 État final des points des utilisateurs :');
    finalUsers.forEach(user => {
      console.log(`- ${user.email}: ${user.points} points`);
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation des points:', error);
  } finally {
    await prisma.$disconnect();
  }
}

initializeUserPoints(); 