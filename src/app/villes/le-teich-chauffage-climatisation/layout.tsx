import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('le-teich-chauffage-climatisation')!
);

export default function Le-teichLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('le-teich-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
