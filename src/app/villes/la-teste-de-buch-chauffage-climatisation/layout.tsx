import CityLayout from '@/components/CityLayout';
import { getCityConfig } from '@/config/cities';

const cityData = getCityConfig('la-teste-de-buch-chauffage-climatisation')!;

export default function LaTesteDeBuchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout cityData={cityData}>{children}</CityLayout>;
}
