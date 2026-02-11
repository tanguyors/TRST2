import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Link } from '@/i18n/navigation';
import { Lock } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Members' };
}

function MembersContent() {
  const t = useTranslations('Members');

  return (
    <section className="section-padding">
      <div className="container-custom max-w-lg text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
          <Lock className="h-10 w-10 text-primary" />
        </div>
        <SectionTitle title={t('title')} />
        <p className="text-text-light mb-8">
          This area is reserved for members. Authentication coming soon.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default async function MembersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MembersContent />;
}
