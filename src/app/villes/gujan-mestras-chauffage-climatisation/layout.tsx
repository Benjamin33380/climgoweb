import { Metadata } from 'next';
import { getCityConfig } from '@/config/cities';
import { generateCityMetadata } from '@/components/CityLayout';
import CityLayout from '@/components/CityLayout';

export const metadata: Metadata = generateCityMetadata(
  getCityConfig('gujan-mestras-chauffage-climatisation')!
);

const cityData = getCityConfig('gujan-mestras-chauffage-climatisation')!;

export default function GujanMestrasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout cityData={cityData}>{children}</CityLayout>;
}
