import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('bruges-chauffage-climatisation')!
);

export default function BrugesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('bruges-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
