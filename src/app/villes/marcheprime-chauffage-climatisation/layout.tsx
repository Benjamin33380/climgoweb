import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('marcheprime-chauffage-climatisation')!
);

export default function MarcheprimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('marcheprime-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
