import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getContentBySlug, getAllSlugs } from '@/lib/content';
import { Link } from '@/i18n/navigation';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar } from 'lucide-react';
import { routing } from '@/i18n/routing';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    const slugs = getAllSlugs('actions', locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const action = getContentBySlug('actions', locale, slug);
  if (!action) return { title: 'Not Found' };
  return { title: action.title, description: action.description };
}

export default async function ActionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Actions' });
  const action = getContentBySlug('actions', locale, slug);

  if (!action) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <Link
          href="/actions"
          className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('backToList')}
        </Link>

        <article>
          <header className="mb-8">
            {action.category && (
              <Badge variant="primary" className="mb-4">
                {t(`categories.${action.category}`)}
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {action.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-text-light">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(action.date, locale)}
              </span>
            </div>
          </header>

          {action.image && (
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <Image
                src={action.image}
                alt={action.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:text-text-dark prose-headings:font-bold prose-p:text-text-light prose-a:text-primary prose-strong:text-text-dark prose-li:text-text-light">
            <MDXRemote source={action.content} />
          </div>
        </article>
      </div>
    </section>
  );
}
