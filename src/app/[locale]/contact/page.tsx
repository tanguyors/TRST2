import { setRequestLocale } from 'next-intl/server';
import { ContactContent } from '@/components/contact/ContactContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Contact - Rotary Club Pattaya Marina' };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}
