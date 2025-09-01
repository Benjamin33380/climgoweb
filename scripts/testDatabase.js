const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testDatabase() {
  try {
    console.log('🧪 Test de la base de données...');

    // 1. Test de connexion
    console.log('📡 Test de connexion...');
    await prisma.$connect();
    console.log('✅ Connexion réussie');

    // 2. Vérifier les collections
    console.log('📊 Vérification des collections...');
    const collections = await prisma.$runCommandRaw({ listCollections: 1 });
    console.log('Collections disponibles:', collections);

    // 3. Compter les articles
    console.log('📝 Comptage des articles...');
    const articleCount = await prisma.article.count();
    console.log(`Nombre d'articles: ${articleCount}`);

    // 4. Essayer de récupérer un article
    if (articleCount > 0) {
      console.log('🔍 Récupération d\'un article...');
      const firstArticle = await prisma.article.findFirst({
        select: {
          id: true,
          title: true,
          createdAt: true,
          updatedAt: true
        }
      });
      console.log('Premier article:', firstArticle);
    }

    // 5. Vérifier la structure d'un article
    console.log('🏗️ Vérification de la structure...');
    const sampleArticle = await prisma.article.findFirst({
      include: {
        author: {
          select: {
            id: true,
            email: true
          }
        }
      }
    });
    
    if (sampleArticle) {
      console.log('Structure de l\'article:', {
        id: sampleArticle.id,
        title: sampleArticle.title,
        createdAt: sampleArticle.createdAt,
        updatedAt: sampleArticle.updatedAt,
        author: sampleArticle.author
      });
    }

    console.log('🎉 Test terminé avec succès !');

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
    
    // Afficher plus de détails sur l'erreur
    if (error.code) {
      console.error('Code d\'erreur:', error.code);
    }
    if (error.meta) {
      console.error('Métadonnées:', error.meta);
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le test
testDatabase(); 