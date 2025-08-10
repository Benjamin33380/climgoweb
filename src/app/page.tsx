import Link from 'next/link';
import Hero from '@/components/HeroSection';
import Engagements from '@/components/Engagements';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import GoogleReviews from '@/components/GoogleReviews';
import LocationMap from '@/components/LocationMap';
import StaticReviews from '@/components/StaticReviews';


export default function HomePage() {
  return (
    <>
      {/* Hero Section avec votre composant */}
      <Hero />

      {/* Engagements Section */}
      <Engagements />

      {/* Services Section - Nos savoir-faire */}
      <Services />

      {/* WhyChooseUs Section */}
      <WhyChooseUs />

      {/* Google Reviews Section - Avis clients */}
      <GoogleReviews 
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ClimGO-default-place-id"} 
      />

      {/* Location Map Section - Notre localisation */}
      <LocationMap />

    </>
  );
}