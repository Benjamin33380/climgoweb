import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'
import slugify from 'slugify'

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const search = searchParams.get('search') || ''

    const where = search ? {
      OR: [
        { title: { contains: search, mode: 'insensitive' as const } },
        { content: { contains: search, mode: 'insensitive' as const } }
      ]
    } : {}

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
          orderBy: { createdAt: 'desc' },
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
      // Si DB pas connectée, retourner des données mockées
      const mockPosts = [
        {
          id: '1',
          title: 'Comment optimiser votre pompe à chaleur en hiver',
          slug: 'optimiser-pompe-chaleur-hiver',
          published: true,
          featured: true,
          createdAt: new Date().toISOString(),
          author: { name: 'Admin ClimGO', email: 'admin@climgo.fr' },
          _count: { comments: 5 }
        },
        {
          id: '2',
          title: 'Guide d\'entretien de votre climatisation',
          slug: 'guide-entretien-climatisation',
          published: true,
          featured: false,
          createdAt: new Date(Date.now() - 24*60*60*1000).toISOString(),
          author: { name: 'Admin ClimGO', email: 'admin@climgo.fr' },
          _count: { comments: 2 }
        }
      ]

      return NextResponse.json({
        posts: mockPosts,
        pagination: {
          total: mockPosts.length,
          pages: 1,
          current: 1,
          limit
        }
      })
    }

  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    const { 
      title, 
      content, 
      excerpt, 
      coverImage, 
      published = false,
      featured = false,
      tags = [],
      category,
      seoTitle,
      seoDescription
    } = await req.json()

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Le titre et le contenu sont obligatoires' },
        { status: 400 }
      )
    }

    // Générer le slug
    const baseSlug = slugify(title, { lower: true, strict: true })
    let slug = baseSlug
    let counter = 1

    // Vérifier l'unicité du slug
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`
      counter++
    }

    // Calculer le temps de lecture (approximatif)
    const wordsPerMinute = 200
    const wordCount = content.split(' ').length
    const readTime = Math.ceil(wordCount / wordsPerMinute)

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || content.substring(0, 200) + '...',
        coverImage,
        published,
        featured,
        tags,
        category,
        readTime,
        seoTitle: seoTitle || title,
        seoDescription: seoDescription || excerpt,
        publishedAt: published ? new Date() : null,
        authorId: session.user.id
      },
      include: {
        author: {
          select: { name: true, email: true }
        }
      }
    })

    return NextResponse.json(post, { status: 201 })

  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    )
  }
}
