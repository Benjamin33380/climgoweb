import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, postalCode, service, message } = body;

    // Validation des champs requis
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Stocker le message dans la base de données MongoDB
    try {
      const contactMessage = await prisma.contact.create({
        data: {
          name,
          email,
          phone,
          subject: `Demande de devis - ${service}`,
          message,
          status: 'PENDING',
        },
      });

      console.log('Message stocké en base avec succès:', contactMessage.id);

    } catch (dbError) {
      console.error('Erreur stockage en base:', dbError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement de votre message. Veuillez nous contacter directement au 07.66.46.00.08.' },
        { status: 500 }
      );
    }

    // Essayer d'envoyer l'email via OVH (mais ne pas faire échouer si ça rate)
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // ssl0.ovh.net
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

      // Email pour ClimGO
      const emailToClimGO = {
        from: `"Formulaire Contact ClimGO" <${process.env.SMTP_USER}>`,
        to: 'contact@climgo.fr',
        subject: `Nouveau devis - ${service} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #FF8C00, #2563EB); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Nouvelle demande de devis - ClimGO</h1>
            </div>
            
            <div style="padding: 20px; background: #f9f9f9;">
              <h2 style="color: #333; border-bottom: 2px solid #FF8C00; padding-bottom: 10px;">
                Informations client
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 10px; background: white; border: 1px solid #ddd; font-weight: bold;">Nom :</td>
                  <td style="padding: 10px; background: white; border: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Email :</td>
                  <td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">
                    <a href="mailto:${email}" style="color: #2563EB;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: white; border: 1px solid #ddd; font-weight: bold;">Téléphone :</td>
                  <td style="padding: 10px; background: white; border: 1px solid #ddd;">
                    <a href="tel:${phone}" style="color: #2563EB;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Adresse :</td>
                  <td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${address || 'Non renseignée'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: white; border: 1px solid #ddd; font-weight: bold;">Code postal :</td>
                  <td style="padding: 10px; background: white; border: 1px solid #ddd;">${postalCode || 'Non renseigné'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Service :</td>
                  <td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">
                    <span style="background: #FF8C00; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px;">
                      ${service}
                    </span>
                  </td>
                </tr>
              </table>

              <h3 style="color: #333; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
                Message du client
              </h3>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #FF8C00; margin: 15px 0;">
                ${message.replace(/\n/g, '<br>')}
              </div>

              <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #1e40af; font-weight: bold;">
                  💡 Action à prendre : Contacter le client dans les plus brefs délais pour finaliser le devis.
                </p>
              </div>
            </div>
            
            <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">ClimGO - Spécialiste Climatisation & Chauffage en Gironde</p>
              <p style="margin: 5px 0 0 0;">15 Avenue des Pins, 33380 Marcheprime | 07.66.46.00.08</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(emailToClimGO);
      console.log('Email ClimGO envoyé avec succès via OVH');

    } catch (emailError) {
      console.error('Erreur envoi email OVH (non bloquant):', emailError);
      // On continue même si l'email échoue, le message est stocké en base
    }

    // Toujours retourner le succès car le message est stocké en base
    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été enregistrée avec succès ! Nous vous contacterons sous 24h.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur générale API contact:', error);
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement au 07.66.46.00.08.' 
      },
      { status: 500 }
    );
  }
}
