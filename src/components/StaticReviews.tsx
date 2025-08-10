'use client';

import { Star } from 'lucide-react';
import { SimpleWrapper } from '@/components/ui/SimpleWrapper';

const reviews = [
  {
    id: 1,
    name: "Marie Dupont",
    rating: 5,
    text: "Installation d'une pompe à chaleur parfaite ! Équipe professionnelle, travail soigné et excellent suivi. Je recommande vivement ClimGO.",
    date: "il y a 2 semaines",
    initials: "MD"
  },
  {
    id: 2,
    name: "Pierre Martin",
    rating: 5,
    text: "Service impeccable pour la maintenance de ma climatisation. Intervention rapide et techniciens très compétents.",
    date: "il y a 1 mois",
    initials: "PM"
  },
  {
    id: 3,
    name: "Sophie Leblanc",
    rating: 5,
    text: "Très satisfaite de l'installation de mon système de chauffage. Prix correct et travail de qualité. Merci à l'équipe !",
    date: "il y a 3 semaines",
    initials: "SL"
  }
];

export default function StaticReviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const averageRating = 5.0;
  const totalReviews = 47; // Exemple

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SimpleWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Avis clients Google
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">{renderStars(Math.round(averageRating))}</div>
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({totalReviews} avis)
              </span>
            </div>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>
        </SimpleWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <SimpleWrapper key={review.id}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{review.text}"
                </p>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span>{review.date}</span>
                </div>
              </div>
            </SimpleWrapper>
          ))}
        </div>

        <SimpleWrapper>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/search/?api=1&query=ClimGO+Bordeaux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Voir tous nos avis Google
            </a>
          </div>
        </SimpleWrapper>
      </div>
    </section>
  );
}
