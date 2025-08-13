import { NextResponse } from 'next/server'

// Toutes tes villes de fou !
const cities = [
  'andernos-les-bains', 'arcachon', 'ares', 'audenge', 'begles', 'belin-beliet',
  'biganos', 'biscarrosse', 'bordeaux', 'bouliac', 'bruges', 'cadaujac',
  'canejan', 'cenon', 'cestas', 'eysines', 'floirac', 'gradignan',
  'gujan-mestras', 'la-brede', 'la-teste-de-buch', 'lacanau', 'lanton',
  'le-barp', 'le-bouscat', 'le-haillan', 'le-teich', 'lege-cap-ferret',
  'leognan', 'marcheprime', 'martignas-sur-jalle', 'martillac', 'merignac',
  'mimizan', 'mios', 'parentis', 'pessac', 'saint-aubin-de-medoc',
  'saint-jean-d-illac', 'saint-loubes', 'saint-medard-en-jalles',
  'saint-selve', 'salles', 'sanguinet', 'saucats', 'talence', 'villenave-d-ornon'
]

const services = [
  'chauffage', 'climatisation', 'maintenance', 'eau-chaude-sanitaire'
]

const staticPages = [
  '', // homepage
  'contact',
  'services',
  'zones-interventions',
  'blog',
  'mentions-legales',
  'politique-confidentialite'
]

export async function GET() {
  const baseUrl = 'https://www.climgo.fr'
  
  // Date actuelle pour lastmod
  const currentDate = new Date().toISOString()
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`

  // Pages statiques ULTRA-IMPORTANTES
  staticPages.forEach(page => {
    const url = page === '' ? baseUrl : `${baseUrl}/${page}`
    const priority = page === '' ? '1.0' : '0.9'
    const changefreq = page === '' ? 'daily' : 'weekly'
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })

  // Pages SERVICES - Ultra-importantes pour le SEO local !
  services.forEach(service => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
  })

  // Pages VILLE - Le COEUR du SEO local ! 💰
  cities.forEach(city => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${city}-chauffage-climatisation</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  })

  // BLOG - Pour le content marketing ! 📝
  try {
    // Récupérer les articles du blog dynamiquement
    const blogResponse = await fetch(`${baseUrl}/api/blog?limit=100`, {
      headers: { 'User-Agent': 'ClimGO-Sitemap-Generator' }
    })
    
    if (blogResponse.ok) {
      const blogData = await blogResponse.json()
      
      blogData.posts?.forEach((post: { slug: string; createdAt?: string; updatedAt?: string }) => {
        sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.createdAt || post.updatedAt || currentDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
      })
    }
  } catch (error) {
    console.log('Blog posts not available for sitemap')
  }

  // PAGES COMBINÉES ULTRA-SEO ! 🎯
  // Ex: "Chauffage Bordeaux", "Climatisation Mérignac"
  cities.forEach(city => {
    services.forEach(service => {
      sitemap += `
  <url>
    <loc>${baseUrl}/blog?city=${city}&service=${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    })
  })

  sitemap += `
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
