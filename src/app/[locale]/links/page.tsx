import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { ExternalLink, Globe } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return { title: 'Liens' };
}

const linkGroups = [
  {
    titleKey: 'rotaryIntl' as const,
    links: [
      { name: 'Rotary International', url: 'https://www.rotary.org' },
      { name: 'Rotary Foundation', url: 'https://www.rotary.org/en/about-rotary/rotary-foundation' },
      { name: 'My Rotary', url: 'https://my.rotary.org' },
    ],
  },
  {
    titleKey: 'district' as const,
    links: [
      { name: 'District 3340', url: 'https://www.rotary3340.org' },
      { name: 'DG Newsletter', url: '#' },
    ],
  },
  {
    titleKey: 'friends' as const,
    links: [
      { name: 'RC Bangkok South', url: '#' },
      { name: 'RC Jomtien-Pattaya', url: '#' },
      { name: 'RC Eastern Seaboard', url: '#' },
    ],
  },
];

function LinksContent() {
  const t = useTranslations('Links');

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linkGroups.map((group, groupIdx) => (
            <ScrollReveal key={group.titleKey} delay={groupIdx * 0.1}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-dark">{t(group.titleKey)}</h3>
                </div>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors group"
                      >
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 group-hover:text-primary" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function LinksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LinksContent />;
}
