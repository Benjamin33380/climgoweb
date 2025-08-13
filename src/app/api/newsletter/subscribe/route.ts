import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { email, name, source = 'website' } = await req.json()

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email valide requis' },
        { status: 400 }
      )
    }

    // Vérifier si l'email existe déjà
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email }
    })

    if (existingSubscription) {
      if (existingSubscription.active) {
        return NextResponse.json(
          { message: 'Vous êtes déjà abonné à notre newsletter' },
          { status: 200 }
        )
      } else {
        // Réactiver l'abonnement
        await prisma.newsletterSubscription.update({
          where: { email },
          data: {
            active: true,
            name: name || existingSubscription.name,
            source
          }
        })
        
        return NextResponse.json({
          message: 'Abonnement réactivé avec succès ! Merci de votre intérêt.'
        })
      }
    }

    // Créer un nouvel abonnement
    await prisma.newsletterSubscription.create({
      data: {
        email,
        name: name || null,
        source,
        active: true,
        confirmed: false, // Nécessitera une confirmation par email
      }
    })

    // Ici vous pourriez envoyer un email de confirmation
    // await sendConfirmationEmail(email)

    return NextResponse.json({
      message: 'Abonnement réussi ! Vous recevrez bientôt nos dernières actualités.'
    }, { status: 201 })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'abonnement' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      )
    }

    // Désactiver l'abonnement
    const subscription = await prisma.newsletterSubscription.findUnique({
      where: { email }
    })

    if (!subscription) {
      return NextResponse.json(
        { error: 'Abonnement non trouvé' },
        { status: 404 }
      )
    }

    await prisma.newsletterSubscription.update({
      where: { email },
      data: { active: false }
    })

    return NextResponse.json({
      message: 'Désabonnement réussi. Nous sommes désolés de vous voir partir.'
    })

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'Erreur lors du désabonnement' },
      { status: 500 }
    )
  }
}

