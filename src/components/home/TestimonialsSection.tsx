'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jean-Pierre D.',
    role: { fr: 'Membre depuis 2012', en: 'Member since 2012', th: 'สมาชิกตั้งแต่ปี 2555' },
    text: {
      fr: 'Rejoindre le Rotary Club Pattaya Marina a été l\'une des meilleures décisions de ma vie. L\'amitié et le sens du service sont extraordinaires.',
      en: 'Joining Rotary Club Pattaya Marina was one of the best decisions of my life. The friendship and sense of service are extraordinary.',
      th: 'การเข้าร่วมสโมสรโรตารีพัทยามารีน่าเป็นหนึ่งในการตัดสินใจที่ดีที่สุดในชีวิตของผม มิตรภาพและจิตอาสาที่นี่ยอดเยี่ยมมาก',
    },
    initials: 'JP',
  },
  {
    name: 'Somchai T.',
    role: { fr: 'Membre depuis 2015', en: 'Member since 2015', th: 'สมาชิกตั้งแต่ปี 2558' },
    text: {
      fr: 'Voir le sourire des enfants quand on leur apporte des livres et des fournitures, c\'est ce qui donne tout son sens à notre engagement.',
      en: 'Seeing the children\'s smiles when we bring them books and supplies, that\'s what gives our commitment its full meaning.',
      th: 'การเห็นรอยยิ้มของเด็กๆ เมื่อเรานำหนังสือและอุปกรณ์มาให้ นั่นคือสิ่งที่ทำให้การอุทิศตนของเรามีความหมาย',
    },
    initials: 'ST',
  },
  {
    name: 'Marie L.',
    role: { fr: 'Membre depuis 2018', en: 'Member since 2018', th: 'สมาชิกตั้งแต่ปี 2561' },
    text: {
      fr: 'Un club multiculturel formidable où chaque membre apporte sa pierre à l\'édifice. Les projets sont concrets et l\'impact est réel.',
      en: 'A wonderful multicultural club where every member contributes. The projects are concrete and the impact is real.',
      th: 'สโมสรพหุวัฒนธรรมที่ยอดเยี่ยม ที่ทุกสมาชิกมีส่วนร่วม โครงการเป็นรูปธรรมและผลกระทบเป็นจริง',
    },
    initials: 'ML',
  },
];

const colors = [
  'from-accent to-accent-dark',
  'from-secondary to-secondary-dark',
  'from-gradient-end to-accent',
];

export function TestimonialsSection() {
  const t = useTranslations('Testimonials');
  const locale = useLocale();

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-warm-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] blur-[80px]" />

      {/* Large decorative quote */}
      <div className="absolute top-20 right-10 opacity-[0.03]">
        <Quote className="w-64 h-64 text-text-dark" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('title')}
            </h2>
            <p className="text-lg text-text-light">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 h-full flex flex-col transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${colors[index]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-text-dark leading-[1.8] flex-1 mb-8 text-[15px]">
                  &ldquo;{testimonial.text[locale as keyof typeof testimonial.text] || testimonial.text.fr}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[index]} flex items-center justify-center shrink-0 shadow-lg`}>
                    <span className="text-xs font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-text-dark">{testimonial.name}</p>
                    <p className="text-xs text-text-light">
                      {testimonial.role[locale as keyof typeof testimonial.role] || testimonial.role.fr}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
