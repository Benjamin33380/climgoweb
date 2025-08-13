import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { getBruteforceStats, cleanupExpiredAttempts } from '../../../../../lib/bruteforce'
import { prisma } from '../../../../../lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    // Nettoyer les tentatives expirées
    await cleanupExpiredAttempts(15)
    
    // Récupérer les statistiques
    const bruteforceStats = await getBruteforceStats()
    
    // Récupérer les tentatives récentes
    const recentAttempts = await prisma.bruteforceAttempt.findMany({
      where: {
        lastAttempt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // 24h
        }
      },
      orderBy: {
        lastAttempt: 'desc'
      },
      take: 10
    })

    // Récupérer les IPs actuellement bloquées
    const blockedIPs = await prisma.bruteforceAttempt.findMany({
      where: {
        blocked: true,
        blockedUntil: {
          gte: new Date()
        }
      },
      orderBy: {
        blockedUntil: 'desc'
      }
    })

    return NextResponse.json({
      stats: bruteforceStats,
      recentAttempts,
      blockedIPs
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des stats de sécurité:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// Endpoint pour débloquer une IP manuellement
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { action, ip, email } = await request.json()
    
    if (action === 'unblock') {
      await prisma.bruteforceAttempt.deleteMany({
        where: {
          ip,
          email: email || ''
        }
      })
      
      console.log(`🔓 IP ${ip} débloquée manuellement par ${session.user.email}`)
      
      return NextResponse.json({ success: true })
    }
    
    return NextResponse.json({ error: 'Action non supportée' }, { status: 400 })
  } catch (error) {
    console.error('Erreur lors de l\'action de sécurité:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
