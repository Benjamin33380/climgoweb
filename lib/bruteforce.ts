import { prisma } from './prisma'
import { headers } from 'next/headers'

interface BruteforceConfig {
  maxAttempts: number
  windowMinutes: number
  blockDurationMinutes: number
  progressiveDelay: boolean
}

const defaultConfig: BruteforceConfig = {
  maxAttempts: 5,          // 5 tentatives max
  windowMinutes: 15,       // Dans une fenêtre de 15 minutes
  blockDurationMinutes: 30, // Blocage pendant 30 minutes
  progressiveDelay: true   // Délai progressif
}

export async function getClientIP(): Promise<string> {
  const headersList = headers()
  
  // Essayer différents headers pour récupérer la vraie IP
  const forwardedFor = headersList.get('x-forwarded-for')
  const realIP = headersList.get('x-real-ip')
  const clientIP = headersList.get('x-client-ip')
  
  if (forwardedFor) {
    // x-forwarded-for peut contenir plusieurs IPs, prendre la première
    return forwardedFor.split(',')[0].trim()
  }
  
  if (realIP) return realIP
  if (clientIP) return clientIP
  
  // Fallback
  return '127.0.0.1'
}

export async function checkBruteforceProtection(
  email?: string,
  config: Partial<BruteforceConfig> = {}
): Promise<{ allowed: boolean; remainingAttempts: number; blockedUntil?: Date; delayMs?: number }> {
  const ip = await getClientIP()
  const finalConfig = { ...defaultConfig, ...config }
  
  try {
    // Nettoyer les anciennes tentatives expirées
    await cleanupExpiredAttempts(finalConfig.windowMinutes)
    
    // Chercher les tentatives existantes
    const attempt = await prisma.bruteforceAttempt.findUnique({
      where: {
        ip_email: {
          ip,
          email: email || ''
        }
      }
    })
    
    if (!attempt) {
      return {
        allowed: true,
        remainingAttempts: finalConfig.maxAttempts
      }
    }
    
    // Vérifier si encore bloqué
    if (attempt.blocked && attempt.blockedUntil && attempt.blockedUntil > new Date()) {
      return {
        allowed: false,
        remainingAttempts: 0,
        blockedUntil: attempt.blockedUntil
      }
    }
    
    // Vérifier le nombre de tentatives dans la fenêtre de temps
    const windowStart = new Date(Date.now() - finalConfig.windowMinutes * 60 * 1000)
    
    if (attempt.lastAttempt < windowStart) {
      // La dernière tentative est trop ancienne, reset
      await prisma.bruteforceAttempt.update({
        where: { id: attempt.id },
        data: {
          attempts: 0,
          blocked: false,
          blockedUntil: null,
          lastAttempt: new Date()
        }
      })
      
      return {
        allowed: true,
        remainingAttempts: finalConfig.maxAttempts
      }
    }
    
    const remainingAttempts = Math.max(0, finalConfig.maxAttempts - attempt.attempts)
    
    if (remainingAttempts > 0) {
      // Délai progressif optionnel
      let delayMs = 0
      if (finalConfig.progressiveDelay && attempt.attempts > 2) {
        delayMs = Math.pow(2, attempt.attempts - 2) * 1000 // 1s, 2s, 4s, 8s...
      }
      
      return {
        allowed: true,
        remainingAttempts,
        delayMs
      }
    }
    
    return {
      allowed: false,
      remainingAttempts: 0
    }
    
  } catch (error) {
    console.error('Erreur protection bruteforce:', error)
    // En cas d'erreur, autoriser mais log
    return {
      allowed: true,
      remainingAttempts: finalConfig.maxAttempts
    }
  }
}

export async function recordFailedAttempt(
  email?: string,
  config: Partial<BruteforceConfig> = {}
): Promise<void> {
  const ip = await getClientIP()
  const finalConfig = { ...defaultConfig, ...config }
  
  try {
    const now = new Date()
    
    const attempt = await prisma.bruteforceAttempt.upsert({
      where: {
        ip_email: {
          ip,
          email: email || ''
        }
      },
      update: {
        attempts: {
          increment: 1
        },
        lastAttempt: now,
        updatedAt: now
      },
      create: {
        ip,
        email: email || '',
        attempts: 1,
        lastAttempt: now
      }
    })
    
    // Vérifier si on doit bloquer
    if (attempt.attempts >= finalConfig.maxAttempts) {
      const blockedUntil = new Date(Date.now() + finalConfig.blockDurationMinutes * 60 * 1000)
      
      await prisma.bruteforceAttempt.update({
        where: { id: attempt.id },
        data: {
          blocked: true,
          blockedUntil
        }
      })
      
      // Log de sécurité
      console.warn(`🚨 IP ${ip} bloquée pour bruteforce (email: ${email || 'unknown'}) jusqu'à ${blockedUntil}`)
    }
    
  } catch (error) {
    console.error('Erreur enregistrement tentative échouée:', error)
  }
}

export async function recordSuccessfulAttempt(email?: string): Promise<void> {
  const ip = await getClientIP()
  
  try {
    // Reset les tentatives en cas de succès
    await prisma.bruteforceAttempt.deleteMany({
      where: {
        ip,
        email: email || ''
      }
    })
  } catch (error) {
    console.error('Erreur reset tentatives:', error)
  }
}

export async function cleanupExpiredAttempts(windowMinutes: number): Promise<void> {
  try {
    const expiredDate = new Date(Date.now() - windowMinutes * 60 * 1000)
    
    await prisma.bruteforceAttempt.deleteMany({
      where: {
        AND: [
          { lastAttempt: { lt: expiredDate } },
          { blocked: false }
        ]
      }
    })
    
    // Nettoyer aussi les blocages expirés
    await prisma.bruteforceAttempt.deleteMany({
      where: {
        AND: [
          { blocked: true },
          { blockedUntil: { lt: new Date() } }
        ]
      }
    })
    
  } catch (error) {
    console.error('Erreur nettoyage tentatives expirées:', error)
  }
}

export async function getBruteforceStats(): Promise<{
  totalAttempts: number
  blockedIPs: number
  recentAttempts: number
}> {
  try {
    const [totalAttempts, blockedIPs, recentAttempts] = await Promise.all([
      prisma.bruteforceAttempt.count(),
      prisma.bruteforceAttempt.count({ where: { blocked: true } }),
      prisma.bruteforceAttempt.count({
        where: {
          lastAttempt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // 24h
          }
        }
      })
    ])
    
    return {
      totalAttempts,
      blockedIPs,
      recentAttempts
    }
  } catch (error) {
    console.error('Erreur stats bruteforce:', error)
    return {
      totalAttempts: 0,
      blockedIPs: 0,
      recentAttempts: 0
    }
  }
}

