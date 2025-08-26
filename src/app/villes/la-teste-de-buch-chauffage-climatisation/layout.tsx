import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('la-teste-de-buch-chauffage-climatisation')!
);

export default function Layout.tsxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cityData = getCityConfig('la-teste-de-buch-chauffage-climatisation')!;
  
  return (
    <CityLayout cityData={cityData}>
      {children}
    </CityLayout>
  );
}
