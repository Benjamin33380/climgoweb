import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const clients = await prisma.client.findMany({
      include: {
        _count: {
          select: {
            quotes: true,
            invoices: true,
            projects: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ clients })
  } catch (_error) {
    console.error('Erreur lors de la récupération des clients:', _error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const data = await request.json()
    const { name, email, phone, address, city, postalCode, notes } = data

    // Vérifier si l'email existe déjà
    const existingClient = await prisma.client.findUnique({
      where: { email }
    })

    if (existingClient) {
      return NextResponse.json({ error: 'Un client avec cet email existe déjà' }, { status: 400 })
    }

    const client = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        postalCode,
        notes
      },
      include: {
        _count: {
          select: {
            quotes: true,
            invoices: true,
            projects: true
          }
        }
      }
    })

    return NextResponse.json({ client })
  } catch (_error) {
    console.error('Erreur lors de la création du client:', _error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
