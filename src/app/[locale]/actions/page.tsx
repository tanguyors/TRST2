import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { getAllContent } from '@/lib/content';
import { ActionsTimeline } from '@/components/actions/ActionsTimeline';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Actions' });
  return { title: t('title') };
}

export default async function ActionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const actions = getAllContent('actions', locale);

  return <ActionsTimeline actions={actions} locale={locale} />;
}
