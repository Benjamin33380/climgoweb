const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function cleanupDatabase() {
  try {
    console.log('🧹 Début du nettoyage de la base de données...');

    // 1. Vérifier les articles avec des dates nulles
    console.log('📊 Vérification des articles...');
    
    // Utiliser une requête MongoDB native pour éviter les erreurs Prisma
    const db = prisma.$runCommandRaw({ listCollections: 1 });
    console.log('Collections disponibles:', db);

    // 2. Mettre à jour tous les articles avec des dates nulles
    console.log('🔧 Mise à jour des articles...');
    
    const updateResult = await prisma.$runCommandRaw({
      update: "articles",
      updates: [
        {
          q: { 
            $or: [
              { createdAt: null },
              { updatedAt: null }
            ]
          },
          u: {
            $set: {
              createdAt: new Date(),
              updatedAt: new Date()
            }
          },
          multi: true
        }
      ]
    });

    console.log('✅ Résultat de la mise à jour:', updateResult);

    // 3. Vérifier qu'il n'y a plus d'articles avec des dates nulles
    console.log('🔍 Vérification finale...');
    
    const checkResult = await prisma.$runCommandRaw({
      find: "articles",
      filter: {
        $or: [
          { createdAt: null },
          { updatedAt: null }
        ]
      },
      limit: 1
    });

    if (checkResult.documents && checkResult.documents.length === 0) {
      console.log('✅ Aucun article avec des dates nulles trouvé');
    } else {
      console.log('⚠️ Il reste des articles avec des dates nulles:', checkResult.documents?.length || 0);
    }

    console.log('🎉 Nettoyage terminé !');

  } catch (error) {
    console.error('❌ Erreur lors du nettoyage:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le script
cleanupDatabase(); 