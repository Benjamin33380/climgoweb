const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkArticles() {
  try {
    console.log('🔍 Vérification des articles dans la base de données...');
    
    // Récupérer tous les articles
    const allArticles = await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        published: true,
        createdAt: true,
        authorId: true
      }
    });
    
    console.log(`📊 Total des articles: ${allArticles.length}`);
    
    if (allArticles.length === 0) {
      console.log('❌ Aucun article trouvé dans la base de données');
      return;
    }
    
    // Afficher les détails de chaque article
    allArticles.forEach((article, index) => {
      console.log(`\n📝 Article ${index + 1}:`);
      console.log(`   ID: ${article.id}`);
      console.log(`   Titre: ${article.title}`);
      console.log(`   Slug: ${article.slug}`);
      console.log(`   Publié: ${article.published ? '✅ Oui' : '❌ Non'}`);
      console.log(`   Créé le: ${article.createdAt}`);
      console.log(`   Auteur ID: ${article.authorId}`);
    });
    
    // Compter les articles publiés vs non publiés
    const publishedCount = allArticles.filter(a => a.published).length;
    const unpublishedCount = allArticles.filter(a => !a.published).length;
    
    console.log(`\n📈 Résumé:`);
    console.log(`   Articles publiés: ${publishedCount}`);
    console.log(`   Articles non publiés: ${unpublishedCount}`);
    
    if (publishedCount === 0) {
      console.log('\n⚠️  ATTENTION: Aucun article n\'est publié !');
      console.log('   C\'est pourquoi votre page blog ne s\'affiche pas.');
      console.log('   Vous devez publier au moins un article depuis l\'admin.');
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la vérification:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkArticles(); 