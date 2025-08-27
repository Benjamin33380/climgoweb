const fs = require('fs');
const path = require('path');

const villesDir = path.join(__dirname, '../src/app/villes');

// Configuration des zones d'intervention par ville
const zonesParVille = {
  // BORDEAUX MÉTROPOLE
  'bordeaux': ['Mérignac', 'Pessac', 'Talence', 'Villenave-d\'Ornon', 'Bègles', 'Cenon', 'Floirac', 'Bouliac', 'Le Bouscat', 'Le Haillan', 'Saint-Médard-en-Jalles'],
  'merignac': ['Bordeaux', 'Pessac', 'Le Haillan', 'Saint-Médard-en-Jalles', 'Le Taillan-Médoc', 'Martignas-sur-Jalle'],
  'pessac': ['Bordeaux', 'Mérignac', 'Talence', 'Gradignan', 'Canéjan', 'Cestas'],
  'talence': ['Bordeaux', 'Pessac', 'Gradignan', 'Villenave-d\'Ornon', 'Bègles'],
  'villenave-d-ornon': ['Bordeaux', 'Talence', 'Bègles', 'Cenon', 'Floirac', 'Bouliac'],
  'begles': ['Bordeaux', 'Talence', 'Villenave-d\'Ornon', 'Cenon', 'Floirac'],
  'cenon': ['Bordeaux', 'Villenave-d\'Ornon', 'Bègles', 'Floirac', 'Bouliac', 'Lormont'],
  'floirac': ['Bordeaux', 'Villenave-d\'Ornon', 'Bègles', 'Cenon', 'Bouliac', 'Lormont'],
  'bouliac': ['Bordeaux', 'Villenave-d\'Ornon', 'Cenon', 'Floirac', 'Lormont', 'Carbon-Blanc'],
  'le-bouscat': ['Bordeaux', 'Mérignac', 'Le Haillan', 'Saint-Médard-en-Jalles', 'Eysines'],
  'le-haillan': ['Bordeaux', 'Mérignac', 'Le Bouscat', 'Saint-Médard-en-Jalles', 'Eysines', 'Blanquefort'],
  'saint-medard-en-jalles': ['Bordeaux', 'Mérignac', 'Le Haillan', 'Le Bouscat', 'Eysines', 'Blanquefort', 'Le Taillan-Médoc'],
  'eysines': ['Bordeaux', 'Mérignac', 'Le Bouscat', 'Le Haillan', 'Blanquefort', 'Le Taillan-Médoc'],
  'blanquefort': ['Bordeaux', 'Le Haillan', 'Saint-Médard-en-Jalles', 'Eysines', 'Le Taillan-Médoc', 'Parempuyre'],
  'le-taillan-medoc': ['Bordeaux', 'Mérignac', 'Le Haillan', 'Saint-Médard-en-Jalles', 'Blanquefort', 'Parempuyre'],
  'parempuyre': ['Bordeaux', 'Blanquefort', 'Le Taillan-Médoc', 'Ludon-Médoc', 'Macau'],
  'ludon-medoc': ['Bordeaux', 'Parempuyre', 'Macau', 'Lamarque', 'Margaux'],
  'macau': ['Bordeaux', 'Parempuyre', 'Ludon-Médoc', 'Lamarque', 'Margaux', 'Cantenac'],
  'lormont': ['Bordeaux', 'Cenon', 'Bouliac', 'Carbon-Blanc', 'Ambarès-et-Lagrave'],
  'carbon-blanc': ['Bordeaux', 'Cenon', 'Bouliac', 'Lormont', 'Ambarès-et-Lagrave', 'Bassens'],
  'ambares-et-lagrave': ['Bordeaux', 'Lormont', 'Carbon-Blanc', 'Bassens', 'Saint-Loubès', 'Saint-Vincent-de-Paul'],
  'bassens': ['Bordeaux', 'Carbon-Blanc', 'Ambarès-et-Lagrave', 'Saint-Loubès', 'Saint-Vincent-de-Paul'],
  'saint-loubes': ['Bordeaux', 'Ambarès-et-Lagrave', 'Bassens', 'Saint-Vincent-de-Paul', 'Izon'],
  'saint-vincent-de-paul': ['Bordeaux', 'Ambarès-et-Lagrave', 'Bassens', 'Saint-Loubès', 'Izon', 'Vayres'],
  'gradignan': ['Bordeaux', 'Pessac', 'Talence', 'Canéjan', 'Cestas', 'Villenave-d\'Ornon'],
  'canejan': ['Bordeaux', 'Pessac', 'Gradignan', 'Cestas', 'Le Barp', 'Saucats'],
  'cestas': ['Bordeaux', 'Pessac', 'Gradignan', 'Canéjan', 'Le Barp', 'Saucats', 'Marcheprime'],
  'le-barp': ['Bordeaux', 'Canéjan', 'Cestas', 'Marcheprime', 'Saucats', 'La Brède'],
  'saucats': ['Bordeaux', 'Canéjan', 'Le Barp', 'La Brède', 'Cestas', 'Marcheprime'],
  'la-brede': ['Bordeaux', 'Le Barp', 'Saucats', 'Cestas', 'Marcheprime', 'Canéjan', 'Gradignan'],
  'marcheprime': ['Bordeaux', 'Cestas', 'Le Barp', 'La Brède', 'Saucats', 'Canéjan'],
  'martignas-sur-jalle': ['Bordeaux', 'Mérignac', 'Le Haillan', 'Saint-Médard-en-Jalles', 'Saint-Aubin-de-Médoc'],
  'saint-aubin-de-medoc': ['Bordeaux', 'Martignas-sur-Jalle', 'Saint-Médard-en-Jalles', 'Blanquefort', 'Le Taillan-Médoc'],
  'saint-jean-d-illac': ['Bordeaux', 'Saint-Médard-en-Jalles', 'Eysines', 'Blanquefort', 'Le Taillan-Médoc'],
  'saint-selve': ['Bordeaux', 'Gradignan', 'Cestas', 'Canéjan', 'Le Barp', 'La Brède'],
  'bruges': ['Bordeaux', 'Le Bouscat', 'Eysines', 'Blanquefort', 'Le Taillan-Médoc', 'Parempuyre'],
  'cadaujac': ['Bordeaux', 'Villenave-d\'Ornon', 'Bègles', 'Cenon', 'Floirac', 'Bouliac'],
  'martillac': ['Bordeaux', 'Gradignan', 'Cestas', 'Canéjan', 'Le Barp', 'La Brède'],
  'leognan': ['Bordeaux', 'Gradignan', 'Cestas', 'Canéjan', 'Le Barp', 'La Brède', 'Marcheprime'],

  // BASSIN D'ARCACHON
  'arcachon': ['La Teste-de-Buch', 'Le Teich', 'Gujan-Mestras', 'Biganos', 'Audenge', 'Lanton', 'Andernos-les-Bains', 'Lège-Cap-Ferret', 'Pyla-sur-Mer'],
  'la-teste-de-buch': ['Arcachon', 'Le Teich', 'Gujan-Mestras', 'Biganos', 'Audenge', 'Lanton', 'Andernos-les-Bains'],
  'le-teich': ['La Teste-de-Buch', 'Arcachon', 'Gujan-Mestras', 'Biganos', 'Audenge', 'Lanton', 'Andernos-les-Bains'],
  'gujan-mestras': ['Arcachon', 'La Teste-de-Buch', 'Le Teich', 'Biganos', 'Audenge', 'Lanton', 'Andernos-les-Bains'],
  'biganos': ['Arcachon', 'La Teste-de-Buch', 'Le Teich', 'Gujan-Mestras', 'Audenge', 'Lanton', 'Andernos-les-Bains'],
  'audenge': ['Arcachon', 'La Teste-de-Buch', 'Le Teich', 'Gujan-Mestras', 'Biganos', 'Lanton', 'Andernos-les-Bains'],
  'lanton': ['Arcachon', 'La Teste-de-Buch', 'Le Teich', 'Gujan-Mestras', 'Biganos', 'Audenge', 'Andernos-les-Bains'],
  'andernos-les-bains': ['Arcachon', 'La Teste-de-Buch', 'Le Teich', 'Gujan-Mestras', 'Biganos', 'Audenge', 'Lanton', 'Lège-Cap-Ferret'],
  'lege-cap-ferret': ['Arcachon', 'Andernos-les-Bains', 'Lanton', 'Audenge', 'Lège', 'Pyla-sur-Mer'],
  'pyla-sur-Mer': ['Arcachon', 'La Teste-de-Buch', 'Lège-Cap-Ferret', 'Andernos-les-Bains'],

  // CÔTE ATLANTIQUE
  'lacanau': ['Hourtin', 'Carcans', 'Le Porge', 'Soulac-sur-Mer', 'Vendays-Montalivet'],
  'hourtin': ['Lacanau', 'Carcans', 'Le Porge', 'Soulac-sur-Mer', 'Vendays-Montalivet'],
  'carcans': ['Lacanau', 'Hourtin', 'Le Porge', 'Soulac-sur-Mer', 'Vendays-Montalivet'],
  'le-porge': ['Lacanau', 'Hourtin', 'Carcans', 'Soulac-sur-Mer', 'Vendays-Montalivet'],
  'soulac-sur-mer': ['Lacanau', 'Hourtin', 'Carcans', 'Le Porge', 'Vendays-Montalivet'],
  'vendays-montalivet': ['Lacanau', 'Hourtin', 'Carcans', 'Le Porge', 'Soulac-sur-Mer'],

  // LANDES
  'mimizan': ['Biscarrosse', 'Parentis-en-Born', 'Sanguinet', 'Ychoux', 'Pissos'],
  'biscarrosse': ['Mimizan', 'Parentis-en-Born', 'Sanguinet', 'Ychoux', 'Pissos'],
  'parentis-en-born': ['Mimizan', 'Biscarrosse', 'Sanguinet', 'Ychoux', 'Pissos'],
  'sanguinet': ['Mimizan', 'Biscarrosse', 'Parentis-en-Born', 'Ychoux', 'Pissos'],
  'ychoux': ['Mimizan', 'Biscarrosse', 'Parentis-en-Born', 'Sanguinet', 'Pissos'],
  'pissos': ['Mimizan', 'Biscarrosse', 'Parentis-en-Born', 'Sanguinet', 'Ychoux'],

  // AUTRES VILLES
  'mios': ['Bordeaux', 'Gradignan', 'Cestas', 'Canéjan', 'Le Barp', 'La Brède'],
  'ares': ['Arcachon', 'La Teste-de-Buch', 'Le Teich', 'Gujan-Mestras', 'Biganos', 'Audenge'],
  'salles': ['Bordeaux', 'Gradignan', 'Cestas', 'Canéjan', 'Le Barp', 'La Brède'],
  'talence': ['Bordeaux', 'Pessac', 'Gradignan', 'Villenave-d\'Ornon', 'Bègles']
};

function optimizeAreaServed() {
  let optimizedCount = 0;
  let totalCount = 0;

  // Parcourir tous les dossiers de villes
  const villeDirs = fs.readdirSync(villesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  villeDirs.forEach(villeDir => {
    const layoutPath = path.join(villesDir, villeDir, 'layout.tsx');
    
    if (fs.existsSync(layoutPath)) {
      totalCount++;
      let content = fs.readFileSync(layoutPath, 'utf8');
      
      // Extraire le nom de la ville du nom du dossier
      const villeName = villeDir.replace('-chauffage-climatisation', '');
      
      // Vérifier si on a une configuration pour cette ville
      if (zonesParVille[villeName]) {
        const villesVoisines = zonesParVille[villeName];
        
        // Créer le nouveau areaServed optimisé
        const newAreaServed = `"areaServed": [
                {
                  "@type": "Place",
                  "name": "${villeName.charAt(0).toUpperCase() + villeName.slice(1).replace(/-/g, ' ')}"
                }${villesVoisines.map(ville => `,
                {
                  "@type": "Place",
                  "name": "${ville}"
                }`).join('')}
              ]`;
        
        // Remplacer l'ancien areaServed
        const oldAreaServedRegex = /"areaServed":\s*\{[^}]*"name":\s*"[^"]*"[^}]*\}/g;
        if (content.match(oldAreaServedRegex)) {
          content = content.replace(oldAreaServedRegex, newAreaServed);
          fs.writeFileSync(layoutPath, content, 'utf8');
          optimizedCount++;
          console.log(`✅ ${villeName} - areaServed optimisé avec ${villesVoisines.length} villes voisines`);
        } else {
          console.log(`ℹ️  ${villeName} - déjà optimisé ou format différent`);
        }
      } else {
        console.log(`⚠️  ${villeName} - pas de configuration de zone`);
      }
    }
  });

  console.log(`\n🎯 Résumé : ${optimizedCount}/${totalCount} villes optimisées`);
}

optimizeAreaServed();
