'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { MapPin, Mail, Phone, Calendar, Clock, Facebook, ExternalLink, Sparkles, Send, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactContent() {
  const tContact = useTranslations('Contact');
  const tHero = useTranslations('Contact.hero');
  const tForm = useTranslations('Contact.form');
  const tInfo = useTranslations('Contact.info');
  const tMap = useTranslations('Contact.map');
  const tGallery = useTranslations('Contact.meetingGallery');
  const tWhyJoin = useTranslations('Contact.whyJoin');

  const contactInfo = [
    {
      icon: MapPin,
      label: tInfo('address'),
      value: SITE_CONFIG.address,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: tInfo('email'),
      value: SITE_CONFIG.email,
      color: 'from-accent to-accent/80',
      link: `mailto:${SITE_CONFIG.email}`
    },
    {
      icon: Phone,
      label: tInfo('phone'),
      value: SITE_CONFIG.phone,
      color: 'from-secondary to-secondary/80',
      link: `tel:${SITE_CONFIG.phone}`
    },
    {
      icon: Calendar,
      label: tInfo('meetings'),
      value: SITE_CONFIG.meetingDay,
      color: 'from-primary to-primary/80'
    },
    {
      icon: Clock,
      label: tInfo('schedule'),
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
            {tHero('badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {tHero('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {tHero('description')}
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
                      {tForm('title')}
                    </h2>
                    <p className="text-sm text-text-light">{tForm('subtitle')}</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                  {tInfo('title')}
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
                  <h3 className="text-xl font-bold mb-4">{tInfo('followUs')}</h3>
                  <p className="text-white/80 mb-6">
                    {tInfo('followDescription')}
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
                {tMap('title')}
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                {tMap('subtitle')}
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
                    <p className="font-bold text-text-dark text-sm mb-1">{tMap('venueName')}</p>
                    <p className="text-xs text-text-light">{tMap('address.line1')}</p>
                    <p className="text-xs text-text-light">{tMap('address.line2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meeting Place Gallery */}
      <section className="py-12 md:py-24 lg:py-32 bg-warm-gray">
        <div className="container-custom px-4">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-[0.2em] text-primary mb-3 md:mb-4">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden xs:inline">{tGallery('badge')}</span>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-text-dark mb-3 md:mb-4 px-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {tGallery('title')}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-text-light max-w-2xl mx-auto px-4">
                {tGallery('subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                image: '/images/about/installation-2025.jpg',
                title: tGallery('items.meetings.title'),
                description: tGallery('items.meetings.description')
              },
              {
                image: '/images/about/anniversary.jpg',
                title: tGallery('items.events.title'),
                description: tGallery('items.events.description')
              },
              {
                image: '/images/bureau-2024.jpg',
                title: tGallery('items.team.title'),
                description: tGallery('items.team.description')
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-warm-gray">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 lg:p-6 text-white">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1.5 md:mb-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-white/80">{item.description}</p>
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
                {tWhyJoin('title')}
              </h2>
              <p className="text-xl text-text-light max-w-2xl mx-auto">
                {tWhyJoin('subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: tWhyJoin('reasons.network.title'),
                description: tWhyJoin('reasons.network.description'),
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Heart,
                title: tWhyJoin('reasons.impact.title'),
                description: tWhyJoin('reasons.impact.description'),
                color: 'from-accent to-accent/80'
              },
              {
                icon: Sparkles,
                title: tWhyJoin('reasons.development.title'),
                description: tWhyJoin('reasons.development.description'),
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
