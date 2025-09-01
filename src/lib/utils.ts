import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formate une date en français
 * @param date - La date à formater
 * @returns La date formatée en français
 */
export function formatDate(date: Date | null | undefined): string {
  if (!date) return 'Date inconnue';
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}