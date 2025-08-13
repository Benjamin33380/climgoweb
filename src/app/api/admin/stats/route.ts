import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Accès non autorisé' }, { status: 403 })
    }

    // TEMPORAIRE : Données mockées pour la demo
    // En attendant la connexion DB
    try {
      const [
        totalPosts,
        totalUsers,
        totalComments,
        pendingComments,
        newsletterSubscribers,
        contactRequests
      ] = await Promise.all([
        prisma.post.count(),
        prisma.user.count(),
        prisma.comment.count(),
        prisma.comment.count({
          where: { approved: false }
        }),
        prisma.newsletterSubscription.count({
          where: { active: true }
        }),
        prisma.contactRequest.count({
          where: { status: 'PENDING' }
        })
      ])

      return NextResponse.json({
        totalPosts,
        totalUsers,
        totalComments,
        pendingComments,
        newsletterSubscribers,
        contactRequests
      })
    } catch (error) {
      // Si DB pas connectée, retourner des données mockées
      return NextResponse.json({
        totalPosts: 12,
        totalUsers: 45,
        totalComments: 23,
        pendingComments: 3,
        newsletterSubscribers: 156,
        contactRequests: 8
      })
    }

  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques' },
      { status: 500 }
    )
  }
}
