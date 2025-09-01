const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixArticlesDates() {
  try {
    console.log('🔧 Début de la correction des dates des articles...');

    // Trouver tous les articles avec des dates nulles
    const articlesWithNullDates = await prisma.article.findMany({
      where: {
        OR: [
          { createdAt: null },
          { updatedAt: null }
        ]
      }
    });

    console.log(`📊 ${articlesWithNullDates.length} articles avec des dates nulles trouvés`);

    if (articlesWithNullDates.length === 0) {
      console.log('✅ Aucune correction nécessaire');
      return;
    }

    // Mettre à jour chaque article
    for (const article of articlesWithNullDates) {
      const now = new Date();
      
      await prisma.article.update({
        where: { id: article.id },
        data: {
          createdAt: article.createdAt || now,
          updatedAt: article.updatedAt || now
        }
      });

      console.log(`✅ Article "${article.title}" corrigé`);
    }

    console.log('🎉 Correction terminée avec succès !');

  } catch (error) {
    console.error('❌ Erreur lors de la correction:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le script
fixArticlesDates(); 