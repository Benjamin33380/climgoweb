import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('saint-selve-chauffage-climatisation')!
);

export default function Saint-selveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('saint-selve-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
