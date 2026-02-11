'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, CalendarDays } from 'lucide-react';
import Image from 'next/image';

export function AboutPreview() {
  const t = useTranslations('About');

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image composition */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Rotary Club Pattaya Marina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Floating meeting card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:right-6 z-10"
              >
                <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-5 max-w-[260px]">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-3">{t('meetings.title')}</p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="w-4 h-4 text-text-light shrink-0" />
                      <p className="text-xs text-text-dark font-medium">{t('meetings.day')}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-text-light shrink-0" />
                      <p className="text-xs text-text-dark font-medium">{t('meetings.time')}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-text-light shrink-0" />
                      <p className="text-xs text-text-dark font-medium">{t('meetings.place')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl border-2 border-accent/10 -z-10" />
            </div>
          </ScrollReveal>

          {/* Right - Text content */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/5 border border-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                {t('subtitle')}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                {t('history.title')}
              </h2>

              <p className="text-text-light leading-relaxed mb-8 text-base">
                {t('history.content')}
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-text-dark/10 px-6 py-3 text-sm font-bold text-text-dark hover:bg-text-dark hover:text-white transition-all duration-300"
              >
                {t('mission.title')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
