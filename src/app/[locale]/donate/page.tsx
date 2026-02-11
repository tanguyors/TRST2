import { setRequestLocale } from 'next-intl/server';
import { DonateContent } from '@/components/donate/DonateContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Faire un Don - Rotary Club Pattaya Marina' };
}

export default async function DonatePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DonateContent />;
}
