import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('saint-loubes-chauffage-climatisation')!
);

export default function Saint-loubesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('saint-loubes-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
