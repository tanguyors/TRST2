'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { HandHeart, Users, Shield, Globe, Sparkles, Target } from 'lucide-react';

const values = [
  { key: 'service' as const, Icon: HandHeart, color: 'text-blue-500', gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10' },
  { key: 'fellowship' as const, Icon: Users, color: 'text-amber-500', gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10' },
  { key: 'integrity' as const, Icon: Shield, color: 'text-violet-500', gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-500/10' },
  { key: 'diversity' as const, Icon: Globe, color: 'text-emerald-500', gradient: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-500/10' },
];

export function MissionSection() {
  const t = useTranslations('Mission');

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-end/[0.02] blur-[80px]" />

      <div className="container-custom relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/5 border border-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {t('subtitle')}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('title')}
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid with highlight card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Large mission statement card - spans 2 cols */}
          <ScrollReveal className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary p-10 h-full min-h-[220px]">
              {/* Decorative orb */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-[60px]" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-end/10 blur-[60px]" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/80 leading-relaxed text-base md:text-lg max-w-lg">
                  {t('description')}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border border-white/5" />
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-white/5" />
              </div>
            </div>
          </ScrollReveal>

          {/* First two value cards */}
          {values.slice(0, 2).map((value, index) => {
            const { Icon } = value;
            return (
              <ScrollReveal key={value.key} delay={0.1 + index * 0.1}>
                <div className="bento-card group h-full">
                  <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`h-7 w-7 ${value.color}`} />
                  </div>
                  <h3 className="font-bold text-lg text-text-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(`values.${value.key}.title`)}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Last two value cards */}
          {values.slice(2).map((value, index) => {
            const { Icon } = value;
            return (
              <ScrollReveal key={value.key} delay={0.3 + index * 0.1}>
                <div className="bento-card group h-full">
                  <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`h-7 w-7 ${value.color}`} />
                  </div>
                  <h3 className="font-bold text-lg text-text-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(`values.${value.key}.title`)}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Visual accent card - spans 2 cols */}
          <ScrollReveal className="md:col-span-2" delay={0.4}>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-r from-warm-gray to-white p-8 h-full flex items-center">
              <div className="flex items-center gap-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="shrink-0"
                >
                  <svg width="60" height="60" viewBox="0 0 100 100" className="text-accent/20">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="6" fill="currentColor" />
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60 * Math.PI) / 180;
                      const x1 = Math.round((50 + 35 * Math.cos(angle)) * 100) / 100;
                      const y1 = Math.round((50 + 35 * Math.sin(angle)) * 100) / 100;
                      const x2 = Math.round((50 + 48 * Math.cos(angle)) * 100) / 100;
                      const y2 = Math.round((50 + 48 * Math.sin(angle)) * 100) / 100;
                      return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      );
                    })}
                  </svg>
                </motion.div>
                <div>
                  <p className="text-sm font-bold text-text-dark mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    Rotary International · District 3340
                  </p>
                  <p className="text-xs text-text-light">Le seul Rotary Francophone d&apos;Asie · Club 67334</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
