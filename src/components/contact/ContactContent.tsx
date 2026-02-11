'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { MapPin, Mail, Phone, Calendar, Clock, Facebook, ExternalLink, Sparkles, Send, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactContent() {
  const t = useTranslations('Contact');

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresse',
      value: SITE_CONFIG.address,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: SITE_CONFIG.email,
      color: 'from-accent to-accent/80',
      link: `mailto:${SITE_CONFIG.email}`
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: SITE_CONFIG.phone,
      color: 'from-secondary to-secondary/80',
      link: `tel:${SITE_CONFIG.phone}`
    },
    {
      icon: Calendar,
      label: 'Réunions',
      value: SITE_CONFIG.meetingDay,
      color: 'from-primary to-primary/80'
    },
    {
      icon: Clock,
      label: 'Horaire',
      value: SITE_CONFIG.meetingTime,
      color: 'from-purple-500 to-purple-600'
    },
  ];

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
            className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-secondary blur-[100px]"
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
            Contactez-Nous
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Rejoignez Notre Action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            Que vous souhaitiez devenir membre, participer à nos projets ou simplement en savoir plus, nous serions ravis d'échanger avec vous
          </motion.p>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* Main Contact Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-warm-beige to-warm-gray rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-text-dark" style={{ fontFamily: 'var(--font-heading)' }}>
                      Envoyez-nous un Message
                    </h2>
                    <p className="text-sm text-text-light">Nous vous répondrons rapidement</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                  Informations de Contact
                </h2>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-warm-gray transition-all duration-300"
                        >
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-text-light uppercase tracking-wide mb-1">{item.label}</p>
                            <p className="text-base text-text-dark font-semibold group-hover:text-accent transition-colors">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                            <item.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-text-light uppercase tracking-wide mb-1">{item.label}</p>
                            <p className="text-base text-text-dark font-semibold">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                  <p className="text-white/80 mb-6">
                    Restez informés de nos actions et événements sur les réseaux sociaux
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-6 py-3 transition-all hover:scale-105"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-semibold">Facebook</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.rotaryInternational}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-6 py-3 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">Rotary.org</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-warm-beige via-warm-gray to-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Où Nous Trouver
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Nous nous réunissons au {SITE_CONFIG.meetingPlace}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.7622982749186!2d100.88448931483!3d12.931663090883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102f7f3c7c7c7c7%3A0x3c7c7c7c7c7c7c7c!2sSiam%20Bayshore%20Resort%20Pattaya!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-text-dark text-sm mb-1">Siam Bayshore Resort</p>
                    <p className="text-xs text-text-light">559 Moo 10, Beach Road</p>
                    <p className="text-xs text-text-light">Pattaya, Chonburi 20150</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meeting Place Gallery */}
      <section className="py-24 md:py-32 bg-warm-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                <MapPin className="w-4 h-4" />
                Notre Lieu de Rencontre
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Siam Bayshore Resort, Pattaya
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Nous nous réunissons dans un cadre convivial au bord de la plage
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: '/images/about/installation-2025.jpg',
                title: 'Nos Réunions',
                description: 'Chaque 1er et 3ème vendredi du mois'
              },
              {
                image: '/images/about/anniversary.jpg',
                title: 'Événements Conviviaux',
                description: 'Célébrations et moments de partage'
              },
              {
                image: '/images/bureau-2024.jpg',
                title: 'Notre Équipe',
                description: 'Des membres engagés et passionnés'
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden bg-warm-gray">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Pourquoi Nous Rejoindre ?
              </h2>
              <p className="text-xl text-text-light max-w-2xl mx-auto">
                Faites partie d'un réseau mondial de leaders engagés pour le service et l'action
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Réseau International',
                description: 'Intégrez un réseau de 1,4 million de membres dans 200 pays et territoires',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Heart,
                title: 'Impact Concret',
                description: 'Participez à des projets humanitaires qui changent réellement des vies',
                color: 'from-accent to-accent/80'
              },
              {
                icon: Sparkles,
                title: 'Développement Personnel',
                description: 'Développez vos compétences en leadership et élargissez vos horizons',
                color: 'from-secondary to-secondary/80'
              },
            ].map((reason, index) => (
              <ScrollReveal key={reason.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-warm-gray rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {reason.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
