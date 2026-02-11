'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Users, Heart, Globe } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/about/installation-2025.jpg',
    title: 'Installation du Bureau',
    category: 'Événement Club'
  },
  {
    src: '/images/about/anniversary.jpg',
    title: 'Anniversaire du Club',
    category: 'Célébration'
  },
  {
    src: '/images/about/singapore-convention.jpg',
    title: 'Convention Singapore',
    category: 'Événement International'
  },
  {
    src: '/images/about/women-day.jpg',
    title: 'Journée de la Femme',
    category: 'Événement Social'
  },
  {
    src: '/images/about/prison-donation.jpg',
    title: 'Don aux Prisons',
    category: 'Action Humanitaire'
  },
  {
    src: '/images/about/ywca-donation.jpg',
    title: 'Partenariat YWCA',
    category: 'Partenariat'
  },
];

export function PhotoGallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
              <Camera className="w-4 h-4" />
              Galerie Photos
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Notre Vie de Club
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Découvrez nos événements, nos actions et les moments de convivialité qui font la richesse de notre club
            </p>
          </div>
        </ScrollReveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.src} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-warm-gray">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block text-xs font-bold text-accent bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                        {image.category}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '35+', label: 'Membres Actifs' },
              { icon: Heart, value: '150+', label: 'Projets Réalisés' },
              { icon: Globe, value: '5', label: 'Pays Partenaires' },
              { icon: Camera, value: '1000+', label: 'Moments Partagés' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-black text-text-dark mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </p>
                <p className="text-sm text-text-light font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
