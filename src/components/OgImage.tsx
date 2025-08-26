'use client';

import Image from 'next/image';

interface OgImageProps {
  city: string;
  postalCode: string;
  service?: 'chauffage' | 'climatisation' | 'maintenance';
}

export default function OgImage({ city, postalCode, service = 'chauffage' }: OgImageProps) {
  const imageUrl = `/images/og/${city.toLowerCase().replace(/\s+/g, '-')}-${service}.jpg`;
  
  return (
    <div className="hidden">
      {/* Cette div est cachée mais génère l'image OG */}
      <Image 
        src={imageUrl} 
        alt={`${service} ${city} ${postalCode} - ClimGO Expert Local`}
        width={1200}
        height={630}
        priority
      />
    </div>
  );
}

// Fonction pour générer l'URL de l'image OG
export function getOgImageUrl(city: string, service: string = 'chauffage') {
  return `https://www.climgo.fr/images/og/${city.toLowerCase().replace(/\s+/g, '-')}-${service}.jpg`;
}
