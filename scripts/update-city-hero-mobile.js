const fs = require('fs');
const path = require('path');

// Liste des villes avec leurs images
const cities = [
  { name: 'arcachon', image: 'arca.webp' },
  { name: 'bordeaux', image: 'bordeaux.webp' },
  { name: 'la-teste-de-buch', image: 'teste.webp' },
  { name: 'gujan-mestras', image: 'gujan.webp' },
  { name: 'le-teich', image: 'leteich.webp' },
  { name: 'biganos', image: 'biganos.webp' },
  { name: 'audenge', image: 'audenge.webp' },
  { name: 'lanton', image: 'lanton.webp' },
  { name: 'andernos-les-bains', image: 'andernos.webp' },
  { name: 'ares', image: 'ares.webp' },
  { name: 'lege-cap-ferret', image: 'lege.webp' },
  { name: 'marcheprime', image: 'marcheprime.webp' },
  { name: 'le-barp', image: 'lebarp.webp' },
  { name: 'mios', image: 'mios.webp' },
  { name: 'salles', image: 'salles.webp' },
  { name: 'belin-beliet', image: 'belin.webp' },
  { name: 'sanguinet', image: 'sanguinet.webp' },
  { name: 'parentis', image: 'parentis.webp' },
  { name: 'biscarrosse', image: 'bisca.webp' },
  { name: 'mimizan', image: 'mimizan.webp' },
  { name: 'canejan', image: 'canejan.webp' },
  { name: 'gradignan', image: 'gradignan.webp' },
  { name: 'saucats', image: 'saucats.webp' },
  { name: 'saint-selve', image: 'saintselve.webp' },
  { name: 'martillac', image: 'martillac.webp' },
  { name: 'leognan', image: 'leognan.webp' },
  { name: 'la-brede', image: 'labrede.webp' },
  { name: 'cadaujac', image: 'cadaujac.webp' },
  { name: 'cestas', image: 'cestas.webp' },
  { name: 'le-haillan', image: 'lehaillan.webp' },
  { name: 'le-bouscat', image: 'lebouscat.webp' },
  { name: 'bruges', image: 'bruges.webp' },
  { name: 'eysines', image: 'eysines.webp' },
  { name: 'cenon', image: 'cenon.webp' },
  { name: 'lormont', image: 'lormont.webp' },
  { name: 'floirac', image: 'floirac.webp' },
  { name: 'bouliac', image: 'bouliac.webp' },
  { name: 'merignac', image: 'merignac.webp' },
  { name: 'pessac', image: 'pessac.webp' },
  { name: 'talence', image: 'talence.webp' },
  { name: 'villenave-d-ornon', image: 'villenave.webp' },
  { name: 'begles', image: 'begles.webp' },
  { name: 'lacanau', image: 'lacanau.webp' },
  { name: 'saint-loubes', image: 'saintloubes.webp' },
  { name: 'saint-jean-d-illac', image: 'saintjean.webp' },
  { name: 'saint-medard-en-jalles', image: 'saintmedard.webp' },
  { name: 'saint-aubin-de-medoc', image: 'saintaubin.webp' },
  { name: 'martignas-sur-jalle', image: 'martignas.webp' }
];

// Fonction pour mettre à jour une ville
function updateCityHero(cityName, imageName) {
  const filePath = `src/app/villes/${cityName}-chauffage-climatisation/page.tsx`;
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Fichier non trouvé: ${filePath}`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Mettre à jour la section hero
    const oldSectionRegex = /<section className="relative h-\[90vh\][^>]*>/;
    const newSection = `<section className="hero-mobile-section relative h-[100vh] xs:h-[95vh] sm:h-[90vh] min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] w-full overflow-hidden bg-transparent sm:bg-white sm:dark:bg-black text-black dark:text-white">`;
    
    content = content.replace(oldSectionRegex, newSection);
    
    // 2. Mettre à jour l'image mobile
    const oldImageRegex = /{/\* Version mobile - image plein écran \*/[\s\S]*?<\/div>/;
    const newImageMobile = `{/* Zone image avec effet zoom - Responsive avec adaptation mobile */}
        <div className="absolute top-0 left-0 h-full w-full z-1 sm:hidden">
          <Image
            src="/villes/${imageName}"
            alt="${cityName.charAt(0).toUpperCase() + cityName.slice(1)} - ${cityName.includes('bordeaux') ? 'Métropole' : 'Bassin d\\'Arcachon'}"
            fill
            className="h-full w-full object-cover transition-opacity duration-1000"
            priority
          />
        </div>`;
    
    content = content.replace(oldImageRegex, newImageMobile);
    
    // 3. Mettre à jour l'image desktop
    const oldDesktopRegex = /<motion\.div[\s\S]*?className="absolute top-0 right-0 h-full w-full sm:w-2\/3"[\s\S]*?<\/motion\.div>/;
    const newDesktop = `<motion.div
          className="hidden sm:block absolute top-0 right-0 h-full w-2/3 z-1"
          aria-hidden
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Version desktop - forme diagonale */}
          <div 
            className="hidden sm:block relative h-full w-full overflow-hidden"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <Image
              src="/villes/${imageName}"
              alt="${cityName.charAt(0).toUpperCase() + cityName.slice(1)} - ${cityName.includes('bordeaux') ? 'Métropole' : 'Bassin d\\'Arcachon'}"
              fill
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </motion.div>`;
    
    content = content.replace(oldDesktopRegex, newDesktop);
    
    // 4. Mettre à jour le contenu
    const oldContentRegex = /<div className="relative z-10 flex h-full items-center">[\s\S]*?<motion\.div[\s\S]*?className="w-full sm:max-w-xl md:max-w-2xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"/;
    const newContent = `<div className="relative z-10 flex h-full items-center" style={{background: 'transparent'}}>
          <motion.div
            className="relative z-10 w-full xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            style={{background: 'transparent'}}`;
    
    content = content.replace(oldContentRegex, newContent);
    
    // 5. Mettre à jour le titre
    const oldTitleRegex = /<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-3 sm:mb-4 md:mb-6 text-black dark:text-white break-words leading-tight">/;
    const newTitle = `<h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:font-light tracking-tight mb-2 xs:mb-3 sm:mb-4 md:mb-6 text-white sm:text-black dark:text-white break-words leading-tight mobile-text-shadow">`;
    
    content = content.replace(oldTitleRegex, newTitle);
    
    // 6. Mettre à jour le paragraphe
    const oldParagraphRegex = /<p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-black dark:text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-\[280px\] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line">/;
    const newParagraph = `<p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white sm:text-black dark:text-white mb-3 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-[260px] xs:max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-none whitespace-pre-line font-medium sm:font-normal mobile-text-shadow">`;
    
    content = content.replace(oldParagraphRegex, newParagraph);
    
    // 7. Mettre à jour les boutons
    const oldButtonsRegex = /<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">/;
    const newButtons = `<div className="flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5">`;
    
    content = content.replace(oldButtonsRegex, newButtons);
    
    // 8. Mettre à jour l'indicateur de scroll
    const oldScrollRegex = /<div className="h-8 w-\[1px\] bg-white\/50 dark:bg-white\/50 animate-pulse" \/>/;
    const newScroll = `<div className="h-8 w-[1px] bg-white/50 sm:bg-black/50 dark:bg-white/50 animate-pulse" />`;
    
    content = content.replace(oldScrollRegex, newScroll);
    
    // Écrire le fichier modifié
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${cityName} mis à jour avec succès`);
    
  } catch (error) {
    console.log(`❌ Erreur lors de la mise à jour de ${cityName}:`, error.message);
  }
}

// Exécuter les mises à jour
console.log('🚀 Début de la mise à jour des villes...\n');

cities.forEach(city => {
  updateCityHero(city.name, city.image);
});

console.log('\n🎉 Mise à jour terminée !');
