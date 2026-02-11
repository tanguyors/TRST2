'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Users, Calendar } from 'lucide-react';

const moments = [
  {
    title: 'Installation du Bureau 2024-2025',
    image: '/images/installation-2025.jpg',
    date: '2024',
    category: 'Événement',
    icon: Users
  },
  {
    title: 'Bureau du Club 2024',
    image: '/images/bureau-2024.jpg',
    date: '2024',
    category: 'Bureau',
    icon: Users
  },
  {
    title: 'Anniversaire du Club',
    image: '/images/anniversary.jpg',
    date: '2024',
    category: 'Célébration',
    icon: Calendar
  },
];

export function FeaturedMoments() {
  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              <Camera className="w-4 h-4" />
              Nos Moments
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Moments Marquants
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Découvrez les moments forts de notre club et nos événements
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <ScrollReveal key={moment.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5">
                      <moment.icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-bold text-primary">{moment.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    {moment.date}
                  </p>
                  <h3 className="text-xl font-bold text-text-dark leading-tight group-hover:text-accent transition-colors">
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
