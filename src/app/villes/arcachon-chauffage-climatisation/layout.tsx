import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('arcachon-chauffage-climatisation')!
);

export default function ArcachonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('arcachon-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}