import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Lock } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Login' };
}

function LoginContent() {
  const t = useTranslations('Members');

  return (
    <section className="section-padding">
      <div className="container-custom max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <SectionTitle title={t('login.title')} />
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
                {t('login.email')}
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                disabled
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-1.5">
                {t('login.password')}
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                disabled
              />
            </div>

            <button
              type="button"
              disabled
              className="btn-primary w-full opacity-50 cursor-not-allowed"
            >
              {t('login.submit')}
            </button>

            <p className="text-center text-xs text-text-light">
              Authentication coming soon.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LoginContent />;
}
