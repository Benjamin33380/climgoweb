import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Configuration SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // ou ton serveur SMTP
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email pour ClimGO
    const emailToClimGO = {
      from: process.env.SMTP_USER,
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

    // Email de confirmation pour le client
    const emailToClient = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Confirmation de votre demande - ClimGO`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FF8C00, #2563EB); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Merci ${name} !</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Votre demande a bien été reçue</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333;">Récapitulatif de votre demande</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #FF8C00;">
              <p><strong>Service demandé :</strong> ${service}</p>
              <p><strong>Message :</strong></p>
              <p style="font-style: italic; color: #666;">${message}</p>
            </div>

            <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0;">🚀 Prochaines étapes</h3>
              <ul style="color: #1e40af; margin: 0; padding-left: 20px;">
                <li>Notre équipe va étudier votre demande</li>
                <li>Nous vous contactons sous 24h pour organiser un rendez-vous</li>
                <li>Visite gratuite et devis personnalisé</li>
              </ul>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404;">
                <strong>Une question urgente ?</strong><br>
                Appelez-nous directement au <a href="tel:0766460008" style="color: #2563EB; font-weight: bold;">07.66.46.00.08</a>
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center;">
            <h3 style="margin: 0 0 10px 0;">ClimGO</h3>
            <p style="margin: 0; font-size: 14px;">Spécialiste Climatisation & Chauffage en Gironde</p>
            <p style="margin: 5px 0;">📍 15 Avenue des Pins, 33380 Marcheprime</p>
            <p style="margin: 5px 0;">📞 07.66.46.00.08 | ✉️ contact@climgo.fr</p>
            
            <div style="margin: 15px 0;">
              <a href="https://climgo.fr" style="color: #FF8C00; text-decoration: none; margin: 0 10px;">🌐 Site web</a>
              <a href="https://www.google.com/maps/search/?api=1&query=ClimGO" style="color: #FF8C00; text-decoration: none; margin: 0 10px;">📍 Nous trouver</a>
            </div>
          </div>
        </div>
      `,
    };

    // Envoi des emails
    await transporter.sendMail(emailToClimGO);
    await transporter.sendMail(emailToClient);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.' 
      },
      { status: 500 }
    );
  }
}
