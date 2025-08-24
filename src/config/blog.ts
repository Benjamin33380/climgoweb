export const blogConfig = {
  // Configuration générale du blog
  title: 'Blog ClimGo',
  description: 'Découvrez nos conseils, actualités et guides sur le chauffage, la climatisation et la maintenance de vos systèmes',
  
  // Configuration des articles
  articlesPerPage: 9,
  excerptLength: 160,
  
  // Configuration des commentaires
  commentsModeration: true,
  maxCommentLength: 1000,
  
  // Configuration des ratings
  ratingRange: {
    min: 1,
    max: 5
  },
  
  // Configuration des images
  imageSettings: {
    maxWidth: 1200,
    maxHeight: 630,
    quality: 'auto',
    format: 'webp'
  },
  
  // Configuration SEO
  seo: {
    defaultTitle: 'Blog ClimGo - Conseils en chauffage et climatisation',
    defaultDescription: 'Découvrez nos conseils d\'experts en chauffage, climatisation et maintenance. Restez informé des dernières technologies et réglementations.',
    siteName: 'ClimGo',
    siteUrl: 'https://climgo.fr',
    twitterHandle: '@climgo',
    defaultImage: '/img/blog-default.jpg'
  },
  
  // Configuration des catégories
  categories: [
    { name: 'Chauffage', slug: 'chauffage', color: 'blue' },
    { name: 'Climatisation', slug: 'climatisation', color: 'green' },
    { name: 'Maintenance', slug: 'maintenance', color: 'orange' },
    { name: 'Eau chaude', slug: 'eau-chaude', color: 'purple' },
    { name: 'Conseils', slug: 'conseils', color: 'indigo' },
    { name: 'Réglementation', slug: 'reglementation', color: 'red' }
  ],
  
  // Configuration des tags populaires
  popularTags: [
    'chauffage', 'climatisation', 'maintenance', 'énergie', 'économies',
    'installation', 'réparation', 'dépannage', 'conseils', 'technologies'
  ]
};

export default blogConfig; 