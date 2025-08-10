import { CityData } from '@/components/CityPageTemplate';

export const citiesData: Record<string, CityData> = {
  'andernos-les-bains': {
    name: 'Andernos-les-Bains',
    slug: 'andernos-les-bains-chauffage-climatisation',
    region: "Bassin d'Arcachon",
    backgroundImage: '/villes/andernos.jpg',
    videoUrl: '/mp4/andernos.mp4',
    description: {
      intro: [
        "Située au bord du bassin, Andernos-les-Bains séduit par son cadre maritime et ses quartiers variés, du centre-ville animé au Bétey paisible. ClimGO adapte ses solutions à chaque type d'habitat pour garantir votre confort thermique toute l'année.",
        "Nous accompagnons les familles, retraités et nouveaux arrivants dans leurs projets d'installation, en tenant compte des spécificités locales et des réglementations environnementales.",
        "Chaque intervention vise à optimiser la performance énergétique de votre logement tout en respectant l'intégration harmonieuse dans ce cadre naturel et urbain."
      ],
      location: [
        "Située entre plages, forêt et piste cyclable, Andernos-les-Bains séduit par son cadre naturel privilégié. Avec ses 12 000 habitants, la ville attire aussi bien les familles en quête de tranquillité que les retraités ou jeunes actifs souhaitant s'installer à proximité de Bordeaux.",
        "Le centre-ville dynamique, le port ostréicole typique, les établissements scolaires et les nombreuses pistes cyclables font d'Andernos une commune vivante toute l'année. La zone de la Jetée, le quartier du Bétey ou encore Coubertin accueillent une diversité de logements adaptés à tous les styles de vie.",
        "ClimGO intervient dans tous les quartiers d'Andernos, des villas contemporaines du port aux maisons typiques du centre, en passant par les nouvelles constructions côté Mauret ou Grand Large."
      ],
      interventions: "Du centre-ville au Bétey, nous couvrons tous les secteurs d'Andernos. Nos solutions s'adaptent aux constructions neuves comme aux maisons anciennes, avec un souci constant d'efficacité et de durabilité. Où que vous soyez, nous vous garantissons un service réactif et personnalisé.",
      whyChoose: [
        "Choisir ClimGO à Andernos-les-Bains, c'est faire appel à des experts qui connaissent les contraintes spécifiques du climat local et la richesse environnementale de la commune.",
        "Matériaux performants, normes rigoureuses et finitions impeccables : chaque projet est traité avec la plus grande exigence, du premier contact à la mise en service.",
        "Notre proximité nous permet d'intervenir rapidement sur tout Andernos, pour des dépannages ou des installations urgentes sans attente."
      ],
      specificDetails: {
        environment: {
          title: "Un cadre de vie recherché au bord du Bassin",
          content: [
            "Située entre plages, forêt et piste cyclable, Andernos-les-Bains séduit par son cadre naturel privilégié. Avec ses 12 000 habitants, la ville attire aussi bien les familles en quête de tranquillité que les retraités ou jeunes actifs souhaitant s'installer à proximité de Bordeaux.",
            "Le centre-ville dynamique, le port ostréicole typique, les établissements scolaires et les nombreuses pistes cyclables font d'Andernos une commune vivante toute l'année. La zone de la Jetée, le quartier du Bétey ou encore Coubertin accueillent une diversité de logements adaptés à tous les styles de vie.",
            "ClimGO intervient dans tous les quartiers d'Andernos, des villas contemporaines du port aux maisons typiques du centre, en passant par les nouvelles constructions côté Mauret ou Grand Large."
          ]
        },
        examples: {
          title: "Exemples concrets d'interventions à Andernos",
          content: [
            "• Quartier du Bétey : installation d'une pompe à chaleur air/air dans une maison secondaire, avec optimisation acoustique pour le voisinage.",
            "• Avenue Pasteur : remplacement d'un ancien chauffage au gaz par une PAC air/eau haute performance pour une résidence principale de plain-pied.",
            "• Rue du Port : entretien annuel d'un système multisplit Mitsubishi dans une maison rénovée avec vue sur le Bassin.",
            "• Lotissement Coubertin : pose d'un chauffe-eau thermodynamique compact dans une construction neuve RT2012."
          ]
        },
        expertise: {
          title: "Un savoir-faire adapté à l'environnement andernosien",
          content: [
            "L'air marin, l'humidité du Bassin et la proximité des pins exigent des installations robustes et bien pensées. Chez ClimGO, chaque PAC est installée avec des supports surélevés et des traitements anticorrosion pour résister aux conditions locales.",
            "Nous tenons compte des expositions souvent plein ouest, de l'ombre partielle liée aux grands arbres, et des contraintes de voisinage, pour assurer un confort optimal en toute saison."
          ]
        },
        contact: {
          title: "Un projet thermique à Andernos ? On en parle ?",
          content: "Vous habitez Andernos-les-Bains ou venez d'acquérir un bien ? Nos conseillers sont à votre écoute pour définir ensemble une solution de chauffage, climatisation ou production d'eau chaude parfaitement adaptée à votre logement. Contactez-nous pour un diagnostic gratuit."
        }
      }
    },
    faq: [
      {
        question: "Quels sont vos services à Andernos-les-Bains ?",
        answer: "Nous assurons l'installation, l'entretien et le dépannage de systèmes de chauffage, climatisation et production d'eau chaude à Andernos et ses alentours."
      },
      {
        question: "Proposez-vous un accompagnement pour les aides ?",
        answer: "Oui. Nous vous guidons dans les démarches pour obtenir MaPrimeRénov', les CEE, la TVA réduite ou l'Éco-PTZ, selon votre projet."
      },
      {
        question: "Intervenez-vous dans les quartiers d'Andernos ?",
        answer: "Absolument. Nos techniciens se déplacent dans tous les quartiers d'Andernos, notamment le centre-ville, le Bétey, la Jetée ou encore les zones pavillonnaires."
      }
    ],
    backgroundImages: {
      interventions: '/mo.png',
      whyChoose: '/fond3.png',
      faq: '/faq.jpg'
    }
  },

  'la-teste-de-buch': {
    name: 'La Teste-de-Buch',
    slug: 'la-teste-de-buch-chauffage-climatisation',
    region: "Bassin d'Arcachon",
    backgroundImage: '/villes/la-teste.jpg',
    description: {
      intro: [
        "Plus grande commune du Bassin d'Arcachon, La Teste-de-Buch allie patrimoine naturel exceptionnel et développement urbain moderne. ClimGO accompagne cette diversité avec des solutions adaptées à chaque quartier et type d'habitat.",
        "De la Dune du Pilat aux quartiers résidentiels, nous intervenons sur tous types de logements en respectant les contraintes environnementales et patrimoniales locales.",
        "Notre expertise locale nous permet de proposer des installations performantes et durables, parfaitement intégrées dans ce territoire unique."
      ],
      location: [
        "Avec ses 26 000 habitants, La Teste-de-Buch est un territoire aux multiples facettes : centre historique, zones pavillonnaires récentes, quartiers proches de l'océan et secteurs forestiers.",
        "De Cazaux au Pyla, en passant par le centre-ville et les nouveaux quartiers, chaque zone présente ses spécificités climatiques et architecturales que nous maîtrisons parfaitement.",
        "ClimGO intervient dans tous les secteurs de La Teste, des résidences secondaires du Pyla aux maisons familiales de Cazaux, en passant par les appartements du centre-ville."
      ],
      interventions: "Sur l'ensemble du territoire testerin, nous adaptons nos interventions aux spécificités de chaque secteur. Du littoral venteux aux zones forestières abritées, nos techniciens maîtrisent les contraintes locales pour vous garantir un confort optimal.",
      whyChoose: [
        "Notre connaissance approfondie de La Teste-de-Buch nous permet d'anticiper les défis techniques liés à l'environnement côtier et forestier.",
        "Nous respectons scrupuleusement les réglementations locales, notamment celles liées à la proximité de sites naturels protégés.",
        "Notre réactivité sur ce vaste territoire vous assure une intervention rapide, que vous soyez au Pyla ou à Cazaux."
      ],
      specificDetails: {
        environment: {
          title: "Un territoire d'exception aux multiples visages",
          content: [
            "La Teste-de-Buch s'étend de l'océan Atlantique au bassin d'Arcachon, englobant des espaces naturels remarquables comme la Dune du Pilat et la forêt des Landes. Cette diversité géographique influence directement les besoins en chauffage et climatisation.",
            "Les quartiers côtiers subissent les embruns et les vents marins, tandis que les zones forestières bénéficient d'un microclimat plus abrité. Notre expertise nous permet d'adapter chaque installation à ces conditions particulières.",
            "ClimGO intervient aussi bien dans les villas modernes du Pyla que dans les maisons traditionnelles du centre-ville ou les constructions récentes des nouveaux quartiers."
          ]
        },
        examples: {
          title: "Nos réalisations à La Teste-de-Buch",
          content: [
            "• Pyla-sur-Mer : installation d'une pompe à chaleur air/eau résistante aux embruns dans une villa avec vue sur l'océan.",
            "• Centre-ville : remplacement d'un chauffage fuel par un système hybride dans une maison de caractère des années 1960.",
            "• Cazaux : pose d'un système multisplit dans une maison d'architecte contemporaine en lisière de forêt.",
            "• Quartier des Prés Salés : maintenance préventive d'installations de climatisation dans un ensemble résidentiel récent."
          ]
        },
        expertise: {
          title: "Une expertise adaptée aux défis testerins",
          content: [
            "L'exposition aux vents marins, la corrosion saline et les variations hygrométriques importantes exigent des équipements et des installations spécialement conçus pour ces conditions extrêmes.",
            "Nous sélectionnons des matériaux anticorrosion et dimensionnons chaque installation en tenant compte des contraintes climatiques locales, pour une durabilité maximale."
          ]
        },
        contact: {
          title: "Un projet à La Teste-de-Buch ?",
          content: "Que vous habitiez le Pyla, Cazaux ou le centre-ville, nos experts ClimGO sont à votre disposition pour étudier votre projet. Profitez de notre connaissance du territoire pour une solution parfaitement adaptée."
        }
      }
    },
    faq: [
      {
        question: "Intervenez-vous sur tout le territoire de La Teste ?",
        answer: "Oui, nous couvrons l'ensemble de la commune, du Pyla à Cazaux en passant par le centre-ville et tous les quartiers résidentiels."
      },
      {
        question: "Vos équipements résistent-ils aux embruns ?",
        answer: "Absolument. Nous utilisons des équipements et traitements spécialement conçus pour résister à la corrosion marine et aux conditions côtières."
      },
      {
        question: "Proposez-vous des contrats d'entretien ?",
        answer: "Oui, nous proposons des contrats d'entretien préventif adaptés aux conditions locales pour garantir la longévité de vos installations."
      }
    ],
    backgroundImages: {
      interventions: '/mo.png',
      whyChoose: '/fond3.png',
      faq: '/faq.jpg'
    }
  },

  'gujan-mestras': {
    name: 'Gujan-Mestras',
    slug: 'gujan-mestras-chauffage-climatisation',
    region: "Bassin d'Arcachon",
    backgroundImage: '/villes/gujan.jpg',
    description: {
      intro: [
        "Capitale ostréicole du Bassin d'Arcachon, Gujan-Mestras conjugue tradition maritime et modernité résidentielle. ClimGO vous accompagne dans tous vos projets de chauffage et climatisation avec une parfaite connaissance des spécificités locales.",
        "Des ports ostréicoles aux nouveaux quartiers résidentiels, nous adaptons nos solutions à la diversité architecturale et aux contraintes climatiques de cette commune dynamique.",
        "Notre expertise technique et notre proximité géographique vous garantissent des installations performantes et un service de qualité sur l'ensemble du territoire gujanais."
      ],
      location: [
        "Avec ses 22 000 habitants, Gujan-Mestras s'étend sur un territoire varié incluant plusieurs ports ostréicoles, des zones pavillonnaires récentes et des quartiers historiques.",
        "De La Hume au centre-ville, en passant par les ports de Larros, du Canal et de Gujan, chaque secteur présente ses particularités que nos équipes connaissent parfaitement.",
        "ClimGO intervient dans tous les quartiers de Gujan-Mestras, des maisons de caractère du centre aux villas modernes des nouveaux lotissements."
      ],
      interventions: "Sur l'ensemble de Gujan-Mestras, nous maîtrisons les spécificités de chaque quartier pour vous proposer des solutions adaptées. De l'humidité des ports ostréicoles aux zones résidentielles abritées, nos installations sont pensées pour votre confort.",
      whyChoose: [
        "Notre parfaite connaissance de Gujan-Mestras nous permet d'anticiper les contraintes liées à l'environnement ostréicole et maritime.",
        "Nous respectons l'identité patrimoniale de la commune tout en apportant des solutions techniques modernes et performantes.",
        "Notre proximité vous assure une réactivité optimale pour tous vos besoins, de l'installation d'urgence à la maintenance programmée."
      ],
      specificDetails: {
        environment: {
          title: "La capitale ostréicole aux multiples facettes",
          content: [
            "Gujan-Mestras tire son identité de ses sept ports ostréicoles qui façonnent le paysage et l'atmosphère de la commune. Cette proximité avec les activités conchylicoles crée un environnement particulier avec une humidité constante et des variations thermiques spécifiques.",
            "Les quartiers résidentiels, en retrait des ports, bénéficient d'un climat plus stable tout en conservant les avantages de la proximité du Bassin. Cette diversité d'environnements nécessite une approche technique adaptée à chaque zone.",
            "ClimGO intervient aussi bien dans les cabanes ostréicoles modernisées que dans les villas contemporaines des nouveaux quartiers ou les maisons traditionnelles du centre-ville."
          ]
        },
        examples: {
          title: "Nos interventions à Gujan-Mestras",
          content: [
            "• Port de Larros : installation d'un système de déshumidification dans une cabane ostréicole rénovée en habitation.",
            "• Centre-ville : remplacement d'une chaudière gaz par une pompe à chaleur air/eau dans une maison des années 1970.",
            "• Quartier de La Hume : pose d'une climatisation réversible dans une villa récente avec optimisation énergétique.",
            "• Zone pavillonnaire : entretien préventif d'installations de chauffage dans un lotissement de maisons individuelles."
          ]
        },
        expertise: {
          title: "Un savoir-faire adapté à l'environnement gujanais",
          content: [
            "L'humidité constante liée aux activités ostréicoles et la proximité du Bassin nécessitent des installations robustes et parfaitement dimensionnées. Nous maîtrisons ces contraintes pour vous proposer des solutions durables.",
            "Notre expertise nous permet de gérer les défis techniques liés à la corrosion, à l'humidité et aux variations saisonnières importantes, garantissant ainsi la longévité de vos équipements."
          ]
        },
        contact: {
          title: "Un projet à Gujan-Mestras ?",
          content: "Que vous habitiez près des ports ostréicoles ou dans les quartiers résidentiels, nos experts ClimGO sont à votre écoute pour étudier votre projet de chauffage ou climatisation. Bénéficiez de notre connaissance approfondie de la commune."
        }
      }
    },
    faq: [
      {
        question: "Vos équipements résistent-ils à l'humidité des ports ?",
        answer: "Oui, nous sélectionnons des équipements spécialement conçus pour résister à l'humidité constante et utilisons des traitements anticorrosion adaptés."
      },
      {
        question: "Intervenez-vous dans tous les quartiers de Gujan ?",
        answer: "Absolument, nous couvrons l'ensemble de la commune, des ports ostréicoles aux quartiers résidentiels les plus éloignés."
      },
      {
        question: "Proposez-vous des solutions contre l'humidité ?",
        answer: "Oui, nous installons des systèmes de déshumidification et de ventilation adaptés aux spécificités locales pour garantir un air sain."
      }
    ],
    backgroundImages: {
      interventions: '/mo.png',
      whyChoose: '/fond3.png',
      faq: '/faq.jpg'
    }
  }

  // On peut continuer avec toutes les autres villes...
};

// Fonction utilitaire pour obtenir les données d'une ville
export function getCityData(citySlug: string): CityData | null {
  return citiesData[citySlug] || null;
}

// Liste de toutes les villes disponibles
export const availableCities = Object.keys(citiesData);
