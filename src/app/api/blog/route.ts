import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const category = searchParams.get('category') || ''
    const search = searchParams.get('search') || ''
    const featured = searchParams.get('featured') === 'true'

    const where: Record<string, unknown> = {
      published: true
    }

    // Filtrage par catégorie
    if (category && category !== 'all') {
      where.category = { equals: category, mode: 'insensitive' as const }
    }

    // Recherche dans titre et contenu
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' as const } },
        { excerpt: { contains: search, mode: 'insensitive' as const } },
        { content: { contains: search, mode: 'insensitive' as const } },
        { tags: { has: search } }
      ]
    }

    if (featured) {
      where.featured = true
    }

    try {
      const [posts, total] = await Promise.all([
        prisma.post.findMany({
          where,
          include: {
            author: {
              select: { name: true, email: true }
            },
            _count: {
              select: { comments: true }
            }
          },
          orderBy: [
            { featured: 'desc' },
            { createdAt: 'desc' }
          ],
          take: limit,
          skip: (page - 1) * limit
        }),
        prisma.post.count({ where })
      ])

      return NextResponse.json({
        posts,
        pagination: {
          total,
          pages: Math.ceil(total / limit),
          current: page,
          limit
        }
      })
    } catch (error) {
      // Si DB pas connectée, retourner des données mockées avec les nouvelles propriétés
      const mockPosts = [
        {
          id: '1',
          title: 'Comment optimiser votre pompe à chaleur en hiver ?',
          slug: 'optimiser-pompe-chaleur-hiver',
          excerpt: 'Découvrez nos conseils d\'experts pour maximiser l\'efficacité de votre pompe à chaleur pendant la saison froide et réduire vos factures d\'énergie.',
          content: '<p>Contenu de l\'article...</p>',
          coverImage: null,
          published: true,
          featured: true,
          views: 1250,
          readTime: 8,
          category: 'pompe-a-chaleur',
          tags: ['pompe à chaleur', 'hiver', 'économies', 'optimisation'],
          createdAt: new Date().toISOString(),
          publishedAt: new Date().toISOString(),
          author: { name: 'Expert ClimGO', email: 'expert@climgo.fr' },
          _count: { comments: 3 }
        },
        {
          id: '2',
          title: 'Guide complet : Entretien de votre climatisation',
          slug: 'guide-entretien-climatisation',
          excerpt: 'Un entretien régulier de votre climatisation est essentiel pour son bon fonctionnement. Suivez notre guide step-by-step.',
          content: '<p>Contenu de l\'article...</p>',
          coverImage: null,
          published: true,
          featured: false,
          views: 890,
          readTime: 12,
          category: 'climatisation',
          tags: ['climatisation', 'entretien', 'maintenance', 'guide'],
          createdAt: new Date(Date.now() - 7*24*60*60*1000).toISOString(),
          publishedAt: new Date(Date.now() - 7*24*60*60*1000).toISOString(),
          author: { name: 'Expert ClimGO', email: 'expert@climgo.fr' },
          _count: { comments: 1 }
        },
        {
          id: '3',
          title: 'Les aides financières 2025 pour votre chauffage',
          slug: 'aides-financieres-2025-chauffage',
          excerpt: 'MaPrimeRénov\', CEE, crédit d\'impôt... Découvrez toutes les aides disponibles en 2025 pour financer vos travaux de chauffage.',
          content: '<p>Contenu de l\'article...</p>',
          coverImage: null,
          published: true,
          featured: false,
          views: 2340,
          readTime: 15,
          category: 'conseils',
          tags: ['aides', 'financement', '2025', 'rénovation', 'chauffage'],
          createdAt: new Date(Date.now() - 14*24*60*60*1000).toISOString(),
          publishedAt: new Date(Date.now() - 14*24*60*60*1000).toISOString(),
          author: { name: 'Expert ClimGO', email: 'expert@climgo.fr' },
          _count: { comments: 5 }
        },
        {
          id: '4',
          title: 'Maintenance préventive : 5 gestes pour prolonger la vie de votre chaudière',
          slug: 'maintenance-preventive-chaudiere',
          excerpt: 'Apprenez les gestes simples qui peuvent prolonger significativement la durée de vie de votre chaudière et éviter les pannes coûteuses.',
          content: '<p>Contenu de l\'article...</p>',
          coverImage: null,
          published: true,
          featured: true,
          views: 1580,
          readTime: 6,
          category: 'maintenance',
          tags: ['maintenance', 'chaudière', 'prévention', 'durabilité'],
          createdAt: new Date(Date.now() - 21*24*60*60*1000).toISOString(),
          publishedAt: new Date(Date.now() - 21*24*60*60*1000).toISOString(),
          author: { name: 'Technicien ClimGO', email: 'tech@climgo.fr' },
          _count: { comments: 8 }
        },
        {
          id: '5',
          title: 'Réglementation thermique RE2020 : ce qui change pour votre logement',
          slug: 'reglementation-re2020-changements',
          excerpt: 'La RE2020 bouleverse les normes de construction. Découvrez les implications pour votre projet de rénovation énergétique.',
          content: '<p>Contenu de l\'article...</p>',
          coverImage: null,
          published: true,
          featured: false,
          views: 950,
          readTime: 10,
          category: 'reglementation',
          tags: ['RE2020', 'réglementation', 'construction', 'normes'],
          createdAt: new Date(Date.now() - 28*24*60*60*1000).toISOString(),
          publishedAt: new Date(Date.now() - 28*24*60*60*1000).toISOString(),
          author: { name: 'Expert ClimGO', email: 'expert@climgo.fr' },
          _count: { comments: 2 }
        },
        {
          id: '6',
          title: 'Eau chaude sanitaire : choisir entre ballon thermodynamique et chauffe-eau solaire',
          slug: 'eau-chaude-ballon-thermodynamique-vs-solaire',
          excerpt: 'Comparatif détaillé entre les solutions de production d\'eau chaude écologiques : avantages, inconvénients et retour sur investissement.',
          content: '<p>Contenu de l\'article...</p>',
          coverImage: null,
          published: true,
          featured: false,
          views: 760,
          readTime: 14,
          category: 'eau-chaude',
          tags: ['eau chaude', 'thermodynamique', 'solaire', 'comparatif'],
          createdAt: new Date(Date.now() - 35*24*60*60*1000).toISOString(),
          publishedAt: new Date(Date.now() - 35*24*60*60*1000).toISOString(),
          author: { name: 'Expert ClimGO', email: 'expert@climgo.fr' },
          _count: { comments: 4 }
        }
      ]

      // Filtrer selon les critères de recherche
      let filteredPosts = mockPosts

      if (category && category !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === category)
      }

      if (search) {
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        )
      }

      return NextResponse.json({
        posts: filteredPosts,
        pagination: {
          total: filteredPosts.length,
          pages: 1,
          current: 1,
          limit
        }
      })
    }

  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    )
  }
}
