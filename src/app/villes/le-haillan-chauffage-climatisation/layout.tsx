import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('le-haillan-chauffage-climatisation')!
);

export default function Le-haillanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('le-haillan-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
