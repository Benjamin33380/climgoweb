import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default resend

// Templates d'emails
export const emailTemplates = {
  newArticle: (title: string, slug: string, username?: string) => ({
    subject: `Nouvel article ClimGO : ${title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0ea5e9;">ClimGO</h1>
        <h2>Nouvel article disponible !</h2>
        <p>Bonjour ${username || 'cher client'},</p>
        <p>Un nouvel article vient d'être publié sur notre blog :</p>
        <h3>${title}</h3>
        <p>Découvrez-le en premier !</p>
        <a href="https://www.climgo.fr/blog/${slug}" 
           style="background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Lire l'article
        </a>
        <p style="margin-top: 20px; color: #666;">
          ClimGO - Votre expert chauffage et climatisation en Gironde
        </p>
      </div>
    `
  }),
  
  newsletterMessage: (subject: string, message: string, username?: string) => ({
    subject: `ClimGO - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0ea5e9;">ClimGO</h1>
        <h2>${subject}</h2>
        <p>Bonjour ${username || 'cher client'},</p>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
          ${message}
        </div>
        <p style="margin-top: 20px; color: #666;">
          ClimGO - Votre expert chauffage et climatisation en Gironde
        </p>
      </div>
    `
  })
}
