import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'
import { 
  checkBruteforceProtection, 
  recordFailedAttempt, 
  recordSuccessfulAttempt 
} from './bruteforce'

export const authOptions: NextAuthOptions = {
  providers: [
    // Connexion avec Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    
    // Connexion avec email/mot de passe
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // 🛡️ PROTECTION ANTI-BRUTEFORCE
          const bruteforceCheck = await checkBruteforceProtection(credentials.email)
          
          if (!bruteforceCheck.allowed) {
            if (bruteforceCheck.blockedUntil) {
              console.warn(`🚨 Tentative de connexion bloquée pour ${credentials.email} jusqu'à ${bruteforceCheck.blockedUntil}`)
            }
            return null
          }
          
          // Délai progressif si configuré
          if (bruteforceCheck.delayMs && bruteforceCheck.delayMs > 0) {
            await new Promise(resolve => setTimeout(resolve, bruteforceCheck.delayMs))
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if (!user || !user.password) {
            // Enregistrer la tentative échouée
            await recordFailedAttempt(credentials.email)
            return null
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isPasswordValid) {
            // Enregistrer la tentative échouée
            await recordFailedAttempt(credentials.email)
            return null
          }

          // ✅ Connexion réussie - reset les tentatives
          await recordSuccessfulAttempt(credentials.email)
          
          console.log(`✅ Connexion réussie pour ${credentials.email}`)

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            image: user.image,
          }
        } catch (error) {
          console.error('Auth error:', error)
          // En cas d'erreur, enregistrer quand même comme tentative échouée
          await recordFailedAttempt(credentials.email)
          return null
        }
      }
    })
  ],
  
  session: {
    strategy: 'jwt',
  },
  
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.role
      }
      
      // Si connexion Google, créer/mettre à jour l'utilisateur
      if (account?.provider === 'google' && user?.email) {
        try {
          const existingUser = await prisma.user.upsert({
            where: { email: user.email },
            update: {
              name: user.name,
              image: user.image,
            },
            create: {
              email: user.email,
              name: user.name,
              image: user.image,
              verified: true,
            },
          })
          token.role = existingUser.role
        } catch (error) {
          console.error('User creation error:', error)
        }
      }
      
      return token
    },
    
    async session({ session, token }) {
      if (session?.user && token?.sub) {
        session.user.id = token.sub
        session.user.role = token.role as string
      }
      return session
    },
  },
  
  pages: {
    signIn: '/auth/signin',
  },
  
  secret: process.env.NEXTAUTH_SECRET,
}
