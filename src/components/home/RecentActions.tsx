'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const recentActions = [
  {
    slug: 'journee-femme-2024',
    category: 'community',
    image: '/images/actions/journee-femme.jpg',
  },
  {
    slug: 'bourses-ywca-2024',
    category: 'education',
    image: '/images/actions/bourses-ywca.jpg',
  },
  {
    slug: 'world-end-polio-2023',
    category: 'health',
    image: '/images/actions/polio-2023.jpg',
  },
];

const actionTitles: Record<string, Record<string, string>> = {
  'journee-femme-2024': {
    fr: 'Journée de la Femme 2024',
    en: "Women's Day 2024",
    th: 'วันสตรีสากล 2567',
  },
  'bourses-ywca-2024': {
    fr: 'Bourses d\'études et Vision 20/20',
    en: 'Scholarships & Vision 20/20',
    th: 'ทุนการศึกษาและ Vision 20/20',
  },
  'world-end-polio-2023': {
    fr: 'Soirée Gala "World End Polio" 2023',
    en: '"World End Polio" Gala 2023',
    th: 'งานกาลา "World End Polio" 2566',
  },
};

const actionDescriptions: Record<string, Record<string, string>> = {
  'journee-femme-2024': {
    fr: 'Distribution d\'articles aux prisonnières de la prison spéciale de Pattaya. 20 000 bahts attribués par le club.',
    en: 'Distribution of essential items to female inmates at Pattaya special prison. 20,000 baht allocated by the club.',
    th: 'แจกสิ่งของจำเป็นแก่นักโทษหญิงในเรือนจำพิเศษพัทยา จัดสรรงบ 20,000 บาท',
  },
  'bourses-ywca-2024': {
    fr: 'Partenariat avec le YWCA pour sponsoriser des bourses et programmes de vision pour les écoliers défavorisés.',
    en: 'Partnership with YWCA to sponsor scholarships and vision programs for underprivileged students.',
    th: 'ร่วมมือกับ YWCA สนับสนุนทุนการศึกษาและโปรแกรมตรวจสายตาสำหรับนักเรียนด้อยโอกาส',
  },
  'world-end-polio-2023': {
    fr: 'Gala de sensibilisation axé sur la prévention et le traitement des maladies, l\'eau potable et l\'assainissement.',
    en: 'Awareness gala focused on disease prevention and treatment, clean water and sanitation.',
    th: 'งานกาล่าเพื่อสร้างความตระหนักด้านการป้องกันและรักษาโรค น้ำสะอาดและสุขาภิบาล',
  },
};

export function RecentActions() {
  const t = useTranslations('RecentActions');
  const tActions = useTranslations('Actions');
  const locale = useLocale();

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-warm-gray relative">
      <div className="container-custom">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/5 border border-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {t('subtitle')}
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-text-dark"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('title')}
              </h2>
            </div>
            <Link
              href="/actions"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-text-dark/10 px-6 py-3 text-sm font-bold text-text-dark hover:bg-text-dark hover:text-white transition-all duration-300 self-start md:self-auto"
            >
              {t('viewAll')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Actions grid - editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured large card */}
          <ScrollReveal className="lg:row-span-2">
            <Link href={`/actions/${recentActions[0].slug}`} className="group block h-full">
              <div className="relative h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden">
                <Image
                  src={recentActions[0].image}
                  alt={actionTitles[recentActions[0].slug]?.[locale] || actionTitles[recentActions[0].slug]?.fr}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Badge variant="secondary" className="mb-4 bg-white/10 text-white border border-white/20 backdrop-blur-md">
                    {tActions(`categories.${recentActions[0].category}`)}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {actionTitles[recentActions[0].slug]?.[locale] || actionTitles[recentActions[0].slug]?.fr}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-lg mb-4">
                    {actionDescriptions[recentActions[0].slug]?.[locale] || actionDescriptions[recentActions[0].slug]?.fr}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                    {t('readMore')}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Two smaller cards */}
          {recentActions.slice(1).map((action, index) => (
            <ScrollReveal key={action.slug} delay={0.1 + index * 0.1}>
              <Link href={`/actions/${action.slug}`} className="group block">
                <div className="relative h-64 rounded-3xl overflow-hidden">
                  <Image
                    src={action.image}
                    alt={actionTitles[action.slug]?.[locale] || actionTitles[action.slug]?.fr}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="secondary" className="mb-3 bg-white/10 text-white border border-white/20 backdrop-blur-md text-[10px]">
                      {tActions(`categories.${action.category}`)}
                    </Badge>
                    <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {actionTitles[action.slug]?.[locale] || actionTitles[action.slug]?.fr}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
                      {actionDescriptions[action.slug]?.[locale] || actionDescriptions[action.slug]?.fr}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
