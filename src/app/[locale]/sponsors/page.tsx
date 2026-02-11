import { setRequestLocale } from 'next-intl/server';
import { SponsorsContent } from '@/components/sponsors/SponsorsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Nos Mécènes & Partenaires' };
}

export default async function SponsorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SponsorsContent />;
}
