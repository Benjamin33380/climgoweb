import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('gradignan-chauffage-climatisation')!
);

export default function GradignanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('gradignan-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
