import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('biscarrosse-chauffage-climatisation')!
);

export default function BiscarrosseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('biscarrosse-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
