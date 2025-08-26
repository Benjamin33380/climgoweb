import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('floirac-chauffage-climatisation')!
);

export default function FloiracLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('floirac-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
