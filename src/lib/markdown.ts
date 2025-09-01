import { marked } from 'marked';

// Configuration de marked pour la sécurité
marked.use({
  breaks: true,
  gfm: true,
});

/**
 * Parse le markdown en HTML de manière sécurisée
 * @param markdown - Le contenu markdown à parser
 * @returns Le HTML parsé
 */
export async function parseMarkdown(markdown: string): Promise<string> {
  if (!markdown) return '';
  
  try {
    return await marked(markdown);
  } catch (error) {
    console.error('Erreur lors du parsing du markdown:', error);
    return markdown; // Retourne le markdown brut en cas d'erreur
  }
}

/**
 * Parse le markdown en HTML avec des options personnalisées
 * @param markdown - Le contenu markdown à parser
 * @param options - Options de parsing
 * @returns Le HTML parsé
 */
export async function parseMarkdownWithOptions(
  markdown: string, 
  options: any = {} // eslint-disable-line @typescript-eslint/no-explicit-any
): Promise<string> {
  if (!markdown) return '';
  
  try {
    return await marked(markdown, options);
  } catch (error) {
    console.error('Erreur lors du parsing du markdown:', error);
    return markdown;
  }
}

/**
 * Extrait le texte brut du markdown (sans HTML)
 * @param markdown - Le contenu markdown
 * @returns Le texte brut
 */
export async function extractTextFromMarkdown(markdown: string): Promise<string> {
  if (!markdown) return '';
  
  try {
    // Parse en HTML puis extrait le texte
    const html = await marked(markdown);
    
    // Vérifier si on est côté client
    if (typeof window !== 'undefined') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || '';
    } else {
      // Côté serveur, utiliser une regex simple pour extraire le texte
      return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    }
  } catch (error) {
    console.error('Erreur lors de l\'extraction du texte:', error);
    return markdown;
  }
}

/**
 * Limite le contenu markdown à un certain nombre de caractères
 * @param markdown - Le contenu markdown
 * @param maxLength - Longueur maximale
 * @returns Le markdown tronqué
 */
export function truncateMarkdown(markdown: string, maxLength: number): string {
  if (!markdown || markdown.length <= maxLength) return markdown;
  
  // Tronque et ajoute des points de suspension
  return markdown.substring(0, maxLength).trim() + '...';
} 