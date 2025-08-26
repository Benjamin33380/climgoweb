import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('bordeaux-chauffage-climatisation')!
);

export default function BordeauxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('bordeaux-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}