'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { Heart, Users, ArrowRight, Calendar, FolderHeart, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const trustItems = [
  { Icon: Calendar, value: `${new Date().getFullYear() - SITE_CONFIG.foundedYear}+`, label: 'ans' },
  { Icon: Users, value: '35+', label: 'membres' },
  { Icon: FolderHeart, value: '150+', label: 'projets' },
  { Icon: Globe, value: '1er', label: 'Rotary FR d\'Asie' },
];

export function CTASection() {
  const t = useTranslations('CTA');

  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden bg-primary">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-accent blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-end blur-[150px]"
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t('description')}
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.Icon className="w-4 h-4 text-white/30" />
                  <div className="text-left">
                    <p className="text-sm font-black text-white">{item.value}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
              >
                <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('join')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/donate"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <Heart className="h-4 w-4" />
                {t('donate')}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Top fade from warm-gray */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-warm-gray to-transparent" />
    </section>
  );
}
