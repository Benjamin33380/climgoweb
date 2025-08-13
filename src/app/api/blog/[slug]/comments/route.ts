import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../../lib/auth'
import { prisma } from '../../../../../../lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    // Récupérer l'article
    const post = await prisma.post.findUnique({
      where: { slug },
      select: { id: true }
    })

    if (!post) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    // Récupérer les commentaires approuvés
    const comments = await prisma.comment.findMany({
      where: {
        postId: post.id,
        approved: true,
        parentId: null // Seulement les commentaires racines
      },
      include: {
        author: {
          select: { name: true, image: true }
        },
        replies: {
          where: { approved: true },
          include: {
            author: {
              select: { name: true, image: true }
            }
          },
          orderBy: { createdAt: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ comments })

  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des commentaires' },
      { status: 500 }
    )
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Connexion requise' }, { status: 401 })
    }

    const { slug } = await params
    const { content, parentId } = await req.json()

    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Le contenu du commentaire est obligatoire' },
        { status: 400 }
      )
    }

    // Récupérer l'article
    const post = await prisma.post.findUnique({
      where: { slug },
      select: { id: true }
    })

    if (!post) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    // Vérifier si c'est une réponse à un commentaire existant
    if (parentId) {
      const parentComment = await prisma.comment.findUnique({
        where: { id: parentId },
        select: { id: true, postId: true }
      })

      if (!parentComment || parentComment.postId !== post.id) {
        return NextResponse.json(
          { error: 'Commentaire parent non trouvé' },
          { status: 404 }
        )
      }
    }

    // Créer le commentaire
    const comment = await prisma.comment.create({
      data: {
        content: content.trim(),
        postId: post.id,
        authorId: session.user.id,
        parentId: parentId || null,
        approved: false // Les commentaires nécessitent une approbation
      },
      include: {
        author: {
          select: { name: true, image: true }
        }
      }
    })

    return NextResponse.json({
      comment,
      message: 'Commentaire soumis pour modération'
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du commentaire' },
      { status: 500 }
    )
  }
}
