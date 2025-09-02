import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { response, adminName } = body;

    if (!response || !adminName) {
      return NextResponse.json(
        { error: 'La réponse et le nom de l\'admin sont requis' },
        { status: 400 }
      );
    }

    // Récupérer le contact
    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact non trouvé' },
        { status: 404 }
      );
    }

    // Mettre à jour le contact avec la réponse
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: {
        adminResponse: response,
        adminResponseDate: new Date(),
        adminResponseBy: adminName,
        status: 'PROCESSED'
      }
    });

    // Configurer Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Envoyer l'email de réponse au client
    const emailToClient = {
      from: `"ClimGO - Réponse à votre demande" <${process.env.SMTP_USER}>`,
      to: contact.email,
      subject: `Réponse à votre demande - ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FF8C00, #2563EB); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Réponse à votre demande</h1>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <p style="font-size: 16px; margin-bottom: 20px;">
              Bonjour <strong>${contact.name}</strong>,
            </p>
            
            <p style="margin-bottom: 20px;">
              Nous vous remercions pour votre demande concernant "<strong>${contact.subject}</strong>".
            </p>

            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #FF8C00; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Notre réponse :</h3>
              <div style="white-space: pre-wrap; line-height: 1.6;">${response}</div>
            </div>

            <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;">
                📞 <strong>Besoin d'un complément d'information ?</strong><br>
                N'hésitez pas à nous contacter au <strong>07.66.46.00.08</strong> ou par email à <strong>contact@climgo.fr</strong>
              </p>
            </div>

            <p style="margin-top: 30px;">
              Cordialement,<br>
              <strong>L'équipe ClimGO</strong><br>
              <small style="color: #666;">Réponse envoyée par ${adminName}</small>
            </p>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">ClimGO - Spécialiste Climatisation & Chauffage en Gironde</p>
            <p style="margin: 5px 0 0 0;">15 Avenue des Pins, 33380 Marcheprime | 07.66.46.00.08</p>
            <p style="margin: 5px 0 0 0;">
              <a href="https://climgo.fr" style="color: #FF8C00;">climgo.fr</a>
            </p>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(emailToClient);
      console.log('Email de réponse envoyé avec succès à:', contact.email);
    } catch (emailError) {
      console.error('Erreur envoi email de réponse:', emailError);
      // On continue même si l'email échoue, la réponse est sauvegardée
    }

    return NextResponse.json({
      success: true,
      message: 'Réponse envoyée avec succès',
      contact: updatedContact
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la réponse:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la réponse' },
      { status: 500 }
    );
  }
} 