import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Home } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('Common');

  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <p className="text-8xl font-extrabold text-primary/20 mb-4">404</p>
        <h1 className="text-2xl font-bold text-text-dark mb-4">{t('notFound')}</h1>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          <Home className="h-4 w-4" />
          {t('backHome')}
        </Link>
      </div>
    </section>
  );
}
