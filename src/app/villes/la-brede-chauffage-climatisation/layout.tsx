import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('la-brede-chauffage-climatisation')!
);

export default function La-bredeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('la-brede-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
