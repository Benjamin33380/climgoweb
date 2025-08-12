import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, address, postalCode, service, message } = await req.json();

    // Validation des champs requis
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Configuration du transporteur SMTP pour OVH
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net', // Serveur SMTP OVH
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER, // contact@climgo.fr
        pass: process.env.SMTP_PASS, // benclimgo06
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      }
    });

    // Template de l'email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #03144A 0%, #F97316 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">Nouvelle demande de devis</h1>
          <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">ClimGO - Contact depuis le site web</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #03144A; margin-top: 0; font-size: 22px; border-bottom: 2px solid #F97316; padding-bottom: 10px;">Informations client</h2>
          
          <div style="margin: 20px 0;">
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #03144A; width: 150px; display: inline-block;">Nom :</strong>
              <span style="color: #333;">${name}</span>
            </div>
            
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #03144A; width: 150px; display: inline-block;">Email :</strong>
              <span style="color: #333;"><a href="mailto:${email}" style="color: #F97316; text-decoration: none;">${email}</a></span>
            </div>
            
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #03144A; width: 150px; display: inline-block;">Téléphone :</strong>
              <span style="color: #333;"><a href="tel:${phone}" style="color: #F97316; text-decoration: none;">${phone}</a></span>
            </div>
            
            ${address ? `
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #03144A; width: 150px; display: inline-block;">Adresse :</strong>
              <span style="color: #333;">${address}</span>
            </div>
            ` : ''}
            
            ${postalCode ? `
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #03144A; width: 150px; display: inline-block;">Code postal :</strong>
              <span style="color: #333;">${postalCode}</span>
            </div>
            ` : ''}
            
            <div style="display: flex; margin-bottom: 15px;">
              <strong style="color: #03144A; width: 150px; display: inline-block;">Service :</strong>
              <span style="color: #333; background: #F97316; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px;">${service}</span>
            </div>
          </div>
          
          <h3 style="color: #03144A; margin-top: 30px; margin-bottom: 15px; font-size: 18px; border-bottom: 1px solid #F97316; padding-bottom: 5px;">Message du client</h3>
          <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #F97316; border-radius: 4px; margin-bottom: 20px;">
            <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              Email automatique envoyé depuis <strong>www.climgo.fr</strong><br>
              ClimGO - 28 rue de Cantelaude, 33380 MARCHEPRIME<br>
              <a href="tel:0766460008" style="color: #F97316; text-decoration: none;">07 66 46 00 08</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Options de l'email
    const mailOptions = {
      from: `"Site Web ClimGO" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Envoie vers contact@climgo.fr
      subject: `[DEVIS] Nouvelle demande - ${service} - ${name}`,
      html: emailContent,
      replyTo: email, // Permet de répondre directement au client
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été envoyée avec succès ! Nous vous répondrons sous 48h.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur envoi email:', error);
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer ou nous appeler directement.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
