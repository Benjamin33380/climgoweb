import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('bouliac-chauffage-climatisation')!
);

export default function BouliacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('bouliac-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
