'use client';

import { useState, useEffect, useRef } from 'react';

interface LazyGoogleMapsProps {
  backgroundColor?: string;
}

export default function LazyGoogleMaps({ backgroundColor = "bg-white dark:bg-black" }: LazyGoogleMapsProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !isLoaded) {
      // Délai de 5 secondes pour éviter de charger immédiatement
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isInView, isLoaded]);

  return (
    <div className={`w-screen ml-[calc(-50vw+50%)] ${backgroundColor}`} ref={mapRef}>
      {isLoaded ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9835896155786!2d-0.8562622!3d44.6965443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55e91babdbbad05%3A0x35eae658ca1b3c85!2sClimGO!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr&z=8"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="Zone d'intervention ClimGO - Gironde"
        />
      ) : (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Chargement de la carte...</p>
          </div>
        </div>
      )}
    </div>
  );
}
