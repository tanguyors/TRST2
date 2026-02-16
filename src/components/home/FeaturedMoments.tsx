'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Users, Calendar } from 'lucide-react';

export function FeaturedMoments() {
  const t = useTranslations('FeaturedMoments');

  const moments = [
    {
      title: t('moments.0.title'),
      image: '/images/installation-2025.jpg',
      date: '2024',
      category: t('moments.0.category'),
      icon: Users
    },
    {
      title: t('moments.1.title'),
      image: '/images/bureau-2024.jpg',
      date: '2024',
      category: t('moments.1.category'),
      icon: Users
    },
    {
      title: t('moments.2.title'),
      image: '/images/anniversary.jpg',
      date: '2024',
      category: t('moments.2.category'),
      icon: Calendar
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-warm-gray">
      <div className="container-custom px-4">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-[0.2em] text-primary mb-3 md:mb-4">
              <Camera className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden xs:inline">{t('badge')}</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-text-dark mb-4 md:mb-6 px-2" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('title')}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-text-light max-w-2xl mx-auto px-4">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {moments.map((moment, index) => (
            <ScrollReveal key={moment.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <div className="flex items-center gap-1.5 md:gap-2 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5">
                      <moment.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                      <span className="text-[10px] md:text-xs font-bold text-primary">{moment.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 lg:p-6">
                  <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider mb-1.5 md:mb-2">
                    {moment.date}
                  </p>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-text-dark leading-tight group-hover:text-accent transition-colors">
                    {moment.title}
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
