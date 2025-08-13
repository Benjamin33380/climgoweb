interface ClientProfile {
  name: string;
  firstName: string;
  initials: string;
  avatarColor: string;
  avatarColorDark: string;
}

interface CityClientProfiles {
  [key: string]: ClientProfile[];
}

const cityClientProfiles: CityClientProfiles = {
  'bordeaux': [
    { name: "Martin", firstName: "Claire", initials: "CM", avatarColor: "bg-gradient-to-br from-blue-400 to-blue-600", avatarColorDark: "bg-gradient-to-br from-blue-300 to-blue-500" },
    { name: "Dubois", firstName: "Thomas", initials: "TD", avatarColor: "bg-gradient-to-br from-green-400 to-green-600", avatarColorDark: "bg-gradient-to-br from-green-300 to-green-500" },
    { name: "Rousseau", firstName: "Sarah", initials: "SR", avatarColor: "bg-gradient-to-br from-purple-400 to-purple-600", avatarColorDark: "bg-gradient-to-br from-purple-300 to-purple-500" },
    { name: "Bernard", firstName: "Lucas", initials: "BL", avatarColor: "bg-gradient-to-br from-orange-400 to-orange-600", avatarColorDark: "bg-gradient-to-br from-orange-300 to-orange-500" }
  ],
  'arcachon': [
    { name: "Durand", firstName: "Julie", initials: "DJ", avatarColor: "bg-gradient-to-br from-pink-400 to-pink-600", avatarColorDark: "bg-gradient-to-br from-pink-300 to-pink-500" },
    { name: "Moreau", firstName: "Antoine", initials: "MA", avatarColor: "bg-gradient-to-br from-teal-400 to-teal-600", avatarColorDark: "bg-gradient-to-br from-teal-300 to-teal-500" },
    { name: "Simon", firstName: "Emma", initials: "SE", avatarColor: "bg-gradient-to-br from-indigo-400 to-indigo-600", avatarColorDark: "bg-gradient-to-br from-indigo-300 to-indigo-500" },
    { name: "Petit", firstName: "Maxime", initials: "PM", avatarColor: "bg-gradient-to-br from-red-400 to-red-600", avatarColorDark: "bg-gradient-to-br from-red-300 to-red-500" }
  ],
  'andernos-les-bains': [
    { name: "Laurent", firstName: "Sophie", initials: "LS", avatarColor: "bg-gradient-to-br from-cyan-400 to-cyan-600", avatarColorDark: "bg-gradient-to-br from-cyan-300 to-cyan-500" },
    { name: "Garcia", firstName: "Pierre", initials: "GP", avatarColor: "bg-gradient-to-br from-yellow-400 to-yellow-600", avatarColorDark: "bg-gradient-to-br from-yellow-300 to-yellow-500" },
    { name: "Roux", firstName: "Marie", initials: "RM", avatarColor: "bg-gradient-to-br from-rose-400 to-rose-600", avatarColorDark: "bg-gradient-to-br from-rose-300 to-rose-500" },
    { name: "Vincent", firstName: "Nicolas", initials: "VN", avatarColor: "bg-gradient-to-br from-emerald-400 to-emerald-600", avatarColorDark: "bg-gradient-to-br from-emerald-300 to-emerald-500" }
  ],
  'pessac': [
    { name: "Lefebvre", firstName: "Camille", initials: "LC", avatarColor: "bg-gradient-to-br from-violet-400 to-violet-600", avatarColorDark: "bg-gradient-to-br from-violet-300 to-violet-500" },
    { name: "Mercier", firstName: "Julien", initials: "MJ", avatarColor: "bg-gradient-to-br from-lime-400 to-lime-600", avatarColorDark: "bg-gradient-to-br from-lime-300 to-lime-500" },
    { name: "Blanc", firstName: "Léa", initials: "BL", avatarColor: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600", avatarColorDark: "bg-gradient-to-br from-fuchsia-300 to-fuchsia-500" },
    { name: "Guerin", firstName: "Hugo", initials: "GH", avatarColor: "bg-gradient-to-br from-amber-400 to-amber-600", avatarColorDark: "bg-gradient-to-br from-amber-300 to-amber-500" }
  ],
  'merignac': [
    { name: "Chevalier", firstName: "Manon", initials: "CM", avatarColor: "bg-gradient-to-br from-sky-400 to-sky-600", avatarColorDark: "bg-gradient-to-br from-sky-300 to-sky-500" },
    { name: "Girard", firstName: "Romain", initials: "GR", avatarColor: "bg-gradient-to-br from-stone-400 to-stone-600", avatarColorDark: "bg-gradient-to-br from-stone-300 to-stone-500" },
    { name: "Andre", firstName: "Chloé", initials: "AC", avatarColor: "bg-gradient-to-br from-slate-400 to-slate-600", avatarColorDark: "bg-gradient-to-br from-slate-300 to-slate-500" },
    { name: "Faure", firstName: "Théo", initials: "FT", avatarColor: "bg-gradient-to-br from-zinc-400 to-zinc-600", avatarColorDark: "bg-gradient-to-br from-zinc-300 to-zinc-500" }
  ],
  'talence': [
    { name: "Renaud", firstName: "Élise", initials: "RE", avatarColor: "bg-gradient-to-br from-blue-500 to-purple-600", avatarColorDark: "bg-gradient-to-br from-blue-400 to-purple-500" },
    { name: "Dupont", firstName: "Gabriel", initials: "DG", avatarColor: "bg-gradient-to-br from-green-500 to-teal-600", avatarColorDark: "bg-gradient-to-br from-green-400 to-teal-500" },
    { name: "Lemoine", firstName: "Inès", initials: "LI", avatarColor: "bg-gradient-to-br from-pink-500 to-rose-600", avatarColorDark: "bg-gradient-to-br from-pink-400 to-rose-500" },
    { name: "Bonnet", firstName: "Arthur", initials: "BA", avatarColor: "bg-gradient-to-br from-orange-500 to-red-600", avatarColorDark: "bg-gradient-to-br from-orange-400 to-red-500" }
  ],
  // Ajout de profils pour les autres villes avec des variations
  'default': [
    { name: "Lecomte", firstName: "Aurélie", initials: "AL", avatarColor: "bg-gradient-to-br from-gray-400 to-gray-600", avatarColorDark: "bg-gradient-to-br from-gray-300 to-gray-500" },
    { name: "Perrin", firstName: "Mathieu", initials: "PM", avatarColor: "bg-gradient-to-br from-blue-400 to-blue-600", avatarColorDark: "bg-gradient-to-br from-blue-300 to-blue-500" },
    { name: "Roussel", firstName: "Isabelle", initials: "RI", avatarColor: "bg-gradient-to-br from-green-400 to-green-600", avatarColorDark: "bg-gradient-to-br from-green-300 to-green-500" },
    { name: "Marchand", firstName: "Sébastien", initials: "MS", avatarColor: "bg-gradient-to-br from-purple-400 to-purple-600", avatarColorDark: "bg-gradient-to-br from-purple-300 to-purple-500" }
  ]
};

// Ajout des autres villes avec des profils variés
const additionalCities = [
  'ares', 'audenge', 'begles', 'belin-beliet', 'biganos', 'biscarrosse', 
  'bouliac', 'bruges', 'cadaujac', 'canejan', 'cenon', 'cestas', 'eysines', 
  'floirac', 'gradignan', 'gujan-mestras', 'la-brede', 'la-teste-de-buch', 
  'lacanau', 'lanton', 'le-barp', 'le-bouscat', 'le-haillan', 'le-teich', 
  'lege-cap-ferret', 'leognan', 'lormont', 'marcheprime', 'martignas-sur-jalle', 
  'martillac', 'mimizan', 'mios', 'parentis', 'saint-aubin-de-medoc', 
  'saint-jean-d-illac', 'saint-loubes', 'saint-medard-en-jalles', 'saint-selve', 
  'salles', 'sanguinet', 'saucats', 'villenave-d-ornon'
];

// Noms français populaires
const firstNames = ['Emma', 'Jade', 'Louise', 'Alice', 'Chloé', 'Lina', 'Rose', 'Léa', 'Anna', 'Victoria', 'Ambre', 'Mia', 'Lola', 'Inès', 'Juliette', 'Gabriel', 'Raphaël', 'Arthur', 'Louis', 'Lucas', 'Adam', 'Jules', 'Hugo', 'Maël', 'Tom', 'Noah', 'Théo', 'Nathan', 'Ethan', 'Sacha'];
const lastNames = ['Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand', 'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefebvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefevre', 'Faure', 'Andre'];
const colors = [
  { light: "bg-gradient-to-br from-blue-400 to-blue-600", dark: "bg-gradient-to-br from-blue-300 to-blue-500" },
  { light: "bg-gradient-to-br from-green-400 to-green-600", dark: "bg-gradient-to-br from-green-300 to-green-500" },
  { light: "bg-gradient-to-br from-purple-400 to-purple-600", dark: "bg-gradient-to-br from-purple-300 to-purple-500" },
  { light: "bg-gradient-to-br from-pink-400 to-pink-600", dark: "bg-gradient-to-br from-pink-300 to-pink-500" },
  { light: "bg-gradient-to-br from-orange-400 to-orange-600", dark: "bg-gradient-to-br from-orange-300 to-orange-500" },
  { light: "bg-gradient-to-br from-red-400 to-red-600", dark: "bg-gradient-to-br from-red-300 to-red-500" },
  { light: "bg-gradient-to-br from-teal-400 to-teal-600", dark: "bg-gradient-to-br from-teal-300 to-teal-500" },
  { light: "bg-gradient-to-br from-indigo-400 to-indigo-600", dark: "bg-gradient-to-br from-indigo-300 to-indigo-500" },
  { light: "bg-gradient-to-br from-cyan-400 to-cyan-600", dark: "bg-gradient-to-br from-cyan-300 to-cyan-500" },
  { light: "bg-gradient-to-br from-emerald-400 to-emerald-600", dark: "bg-gradient-to-br from-emerald-300 to-emerald-500" }
];

// Génération automatique des profils pour les autres villes
additionalCities.forEach((city, cityIndex) => {
  cityClientProfiles[city] = [];
  for (let i = 0; i < 4; i++) {
    const firstNameIndex = (cityIndex * 4 + i) % firstNames.length;
    const lastNameIndex = (cityIndex * 4 + i) % lastNames.length;
    const colorIndex = (cityIndex * 4 + i) % colors.length;
    
    const firstName = firstNames[firstNameIndex];
    const lastName = lastNames[lastNameIndex];
    const initials = firstName.charAt(0) + lastName.charAt(0);
    
    cityClientProfiles[city].push({
      name: lastName,
      firstName: firstName,
      initials: initials,
      avatarColor: colors[colorIndex].light,
      avatarColorDark: colors[colorIndex].dark
    });
  }
});

export const getCityClientProfiles = (citySlug: string): ClientProfile[] => {
  return cityClientProfiles[citySlug] || cityClientProfiles['default'];
};

export type { ClientProfile };
