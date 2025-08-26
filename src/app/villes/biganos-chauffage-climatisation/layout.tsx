import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('biganos-chauffage-climatisation')!
);

export default function BiganosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('biganos-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
