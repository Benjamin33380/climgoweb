import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('lanton-chauffage-climatisation')!
);

export default function LantonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('lanton-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
