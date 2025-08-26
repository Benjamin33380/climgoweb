import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('cadaujac-chauffage-climatisation')!
);

export default function CadaujacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('cadaujac-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
