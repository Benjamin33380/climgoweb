import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('sanguinet-chauffage-climatisation')!
);

export default function SanguinetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('sanguinet-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
