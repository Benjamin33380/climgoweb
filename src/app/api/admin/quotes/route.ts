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

    const quotes = await prisma.quote.findMany({
      include: {
        client: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        items: true,
        _count: {
          select: {
            items: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ quotes })
  } catch (_error) {
    console.error('Erreur lors de la récupération des devis:', _error)
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
    const { clientId, title, description, items, vatRate = 20, validUntil } = data

    // Calculer les totaux
    let subtotal = 0
    const processedItems = items.map((item: { description: string; quantity: number; unitPrice: number }) => {
      const total = item.quantity * item.unitPrice
      subtotal += total
      return {
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        total
      }
    })

    const vatAmount = (subtotal * vatRate) / 100
    const total = subtotal + vatAmount

    // Générer le numéro de devis
    const lastQuote = await prisma.quote.findFirst({
      orderBy: { createdAt: 'desc' }
    })
    
    const nextNumber = lastQuote 
      ? parseInt(lastQuote.number.replace('DEV-', '')) + 1 
      : 1001

    const number = `DEV-${nextNumber.toString().padStart(4, '0')}`

    const quote = await prisma.quote.create({
      data: {
        number,
        title,
        description,
        clientId,
        subtotal,
        vatRate,
        vatAmount,
        total,
        validUntil: validUntil ? new Date(validUntil) : null,
        items: {
          create: processedItems
        }
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        items: true
      }
    })

    return NextResponse.json({ quote })
  } catch (_error) {
    console.error('Erreur lors de la création du devis:', _error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
