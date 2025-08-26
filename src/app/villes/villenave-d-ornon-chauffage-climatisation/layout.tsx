import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('villenave-d-ornon-chauffage-climatisation')!
);

export default function Layout.tsxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('villenave-d-ornon-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
