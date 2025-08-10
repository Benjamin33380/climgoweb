// Configuration du Scroll Shadow Global
export const scrollShadowConfig = {
  // Taille des ombres (en pixels)
  size: 120,
  
  // Couleur des ombres (avec transparence)
  shadowColor: 'rgba(3, 20, 74, 0.15)', // Couleur ClimGO avec transparence
  
  // Intensité du flou (en pixels)
  blurIntensity: 25,
  
  // Couleur alternative pour le mode sombre
  darkShadowColor: 'rgba(0, 0, 0, 0.2)',
  
  // Durée des transitions (en millisecondes)
  transitionDuration: 300,
  
  // Couleurs personnalisées par thème
  themeColors: {
    light: {
      primary: 'rgba(3, 20, 74, 0.15)',    // Bleu ClimGO
      secondary: 'rgba(0, 0, 0, 0.08)',     // Noir subtil
      accent: 'rgba(59, 130, 246, 0.1)'     // Bleu accent
    },
    dark: {
      primary: 'rgba(0, 0, 0, 0.25)',       // Noir plus prononcé
      secondary: 'rgba(255, 255, 255, 0.1)', // Blanc subtil
      accent: 'rgba(147, 197, 253, 0.15)'    // Bleu clair
    }
  }
};

// Fonction pour obtenir la configuration selon le thème
export function getScrollShadowConfig(theme: 'light' | 'dark' = 'light') {
  return {
    ...scrollShadowConfig,
    shadowColor: scrollShadowConfig.themeColors[theme].primary,
    darkShadowColor: scrollShadowConfig.themeColors[theme].primary
  };
}
