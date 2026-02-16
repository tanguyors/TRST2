'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from '@/i18n/navigation';
import { formatDate } from '@/lib/utils';
import { ArrowRight, Calendar, Heart, GraduationCap, Home, Leaf, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ContentMeta } from '@/lib/content';

type Props = {
  actions: ContentMeta[];
  locale: string;
};

// Category icons mapping
const categoryIcons = {
  education: GraduationCap,
  health: Heart,
  community: Home,
  environment: Leaf,
};

const categoryColors = {
  education: 'from-blue-500 to-blue-600',
  health: 'from-red-500 to-red-600',
  community: 'from-green-500 to-green-600',
  environment: 'from-emerald-500 to-emerald-600',
};

export function ActionsTimeline({ actions, locale }: Props) {
  const t = useTranslations('Actions');

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-20">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent blur-[50px] md:blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-secondary blur-[50px] md:blur-[100px]"
          />
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6"
          >
            <Sparkles className="w-4 h-4" />
            {actions.length} {actions.length > 1 ? t('projects') : t('project')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-custom">
          {actions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-light text-lg">{t('noActions')}</p>
            </div>
          ) : (
            <div className="relative">
              {/* Vertical line - desktop only */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary transform -translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-16 md:space-y-24">
                {actions.map((action, index) => {
                  const isLeft = index % 2 === 0;
                  const Icon = categoryIcons[action.category as keyof typeof categoryIcons] || Heart;
                  const colorGradient = categoryColors[action.category as keyof typeof categoryColors] || categoryColors.health;

                  return (
                    <ScrollReveal key={action.slug} delay={0.1}>
                      <div className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                        {/* Content Card */}
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="w-full md:w-[calc(50%-3rem)] relative"
                        >
                          <Link href={`/actions/${action.slug}`}>
                            <motion.div
                              whileHover={{ y: -8, scale: 1.02 }}
                              className="group bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-accent/20"
                            >
                              {/* Image */}
                              <div className="relative h-64 overflow-hidden bg-warm-gray">
                                {action.image ? (
                                  <Image
                                    src={action.image}
                                    alt={action.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                    loading="lazy"
                                    quality={75}
                                  />
                                ) : (
                                  <div className={`w-full h-full bg-gradient-to-br ${colorGradient} flex items-center justify-center`}>
                                    <Icon className="w-24 h-24 text-white/50" />
                                  </div>
                                )}
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Category badge on image */}
                                {action.category && (
                                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${colorGradient} text-white text-sm font-bold shadow-lg backdrop-blur-sm`}>
                                    {t(`categories.${action.category}`)}
                                  </div>
                                )}
                              </div>

                              {/* Content */}
                              <div className="p-8">
                                <div className="flex items-center gap-2 text-text-light text-sm mb-4">
                                  <Calendar className="w-4 h-4" />
                                  <time>{formatDate(action.date, locale)}</time>
                                </div>

                                <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                  {action.title}
                                </h3>

                                <p className="text-text-light leading-relaxed mb-6 line-clamp-3">
                                  {action.description}
                                </p>

                                <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all">
                                  <span>{t('readMore')}</span>
                                  <ArrowRight className="w-5 h-5" />
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        </motion.div>

                        {/* Center dot and icon - desktop only */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, type: 'spring' }}
                          className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                        >
                          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${colorGradient} shadow-2xl flex items-center justify-center ring-8 ring-white`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </motion.div>

                        {/* Mobile connector line */}
                        <div className="md:hidden w-1 h-8 bg-gradient-to-b from-accent to-primary my-4" />
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-warm-beige via-warm-gray to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
                  <Heart className="w-4 h-4" />
                  {t('cta.badge')}
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t('cta.title')}
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {t('cta.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-primary font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
                  >
                    <Heart className="w-5 h-5" />
                    {t('cta.donateButton')}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  >
                    {t('cta.joinButton')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
