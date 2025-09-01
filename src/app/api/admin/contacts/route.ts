import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer tous les contacts
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des contacts' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau contact
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message
      }
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du contact:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du contact' },
      { status: 500 }
    );
  }
} 