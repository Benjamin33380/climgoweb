const fetch = require('node-fetch');

async function testBlogAPI() {
  try {
    console.log('🧪 Test de l\'API blog...');
    
    // Test de l'API locale
    const response = await fetch('http://localhost:3000/api/blog');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    console.log('✅ Réponse de l\'API:', {
      status: response.status,
      statusText: response.statusText,
      articlesCount: data.articles ? data.articles.length : 0,
      pagination: data.pagination
    });
    
    if (data.articles && data.articles.length > 0) {
      console.log('\n📝 Premier article:');
      console.log('   Titre:', data.articles[0].title);
      console.log('   Slug:', data.articles[0].slug);
      console.log('   Publié:', data.articles[0].published);
      console.log('   Excerpt:', data.articles[0].excerpt);
    } else {
      console.log('\n❌ Aucun article retourné par l\'API');
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du test de l\'API:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Le serveur Next.js n\'est probablement pas démarré.');
      console.log('   Démarrez-le avec: npm run dev');
    }
  }
}

testBlogAPI(); 