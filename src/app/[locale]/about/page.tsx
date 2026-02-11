'use client';

import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import {
  History, Target, Calendar, MapPin, Users, Award, Heart, Globe,
  HandshakeIcon, ShieldCheck, Sparkles, TrendingUp, CheckCircle2,
  UserPlus, Mail, Phone, ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Link } from '@/i18n/navigation';

type Member = {
  name: string;
  role: string;
  image: string;
};

function AboutContent() {
  const t = useTranslations('About');
  const tMission = useTranslations('Mission');
  const yearsOfService = new Date().getFullYear() - SITE_CONFIG.foundedYear;

  const bureau: Member[] = [
    {
      name: 'Olivier Gachoud',
      role: t('leadership.president') + ' 2025-2026',
      image: '/images/membres/gachoud_olivier.jpg'
    },
    {
      name: 'Gérard Porcon',
      role: t('leadership.pastPresident'),
      image: '/images/membres/porcon_gerard.jpg'
    },
    {
      name: 'Michel Roche',
      role: t('leadership.vicePresident'),
      image: '/images/membres/roche_michel.jpg'
    },
    {
      name: 'Heidi Glemeau',
      role: t('leadership.vicePresident2') + ' - ' + t('leadership.protocolChief'),
      image: '/images/membres/heidi.jpg'
    },
    {
      name: 'Daniel Dandoy',
      role: t('leadership.treasurer'),
      image: '/images/membres/dandoy_daniel.jpg'
    },
    {
      name: 'Olivier Meyer',
      role: t('leadership.secretary'),
      image: '/images/membres/meyer_olivier.jpg'
    },
  ];

  const activeMembers: Member[] = [
    {
      name: 'PP Eric Larbouillat',
      role: t('members.title'),
      image: '/images/membres/eric.jpg'
    },
    {
      name: 'Jean-Pierre De Gelder',
      role: t('members.title'),
      image: '/images/membres/degelder_jean_pierre.jpg'
    },
    {
      name: 'Chadaporn Petrachai',
      role: t('members.title'),
      image: '/images/membres/chadaporn.jpg'
    },
  ];

  const honoraryMember: Member = {
    name: 'Dr Philippe Seur',
    role: t('members.honor'),
    image: '/images/membres/philippe_seur.jpg'
  };

  const presidents = [
    { year: '2024-2025', name: 'Gérard Porcon' },
    { year: '2023-2024', name: 'Eric Larbouillat' },
    { year: '2022-2023', name: 'Jean-Pierre De Gelder' },
    { year: '2021-2022', name: 'Michel Roche' },
    { year: '2020-2021', name: 'Olivier Meyer' },
    { year: '2019-2020', name: 'Daniel Dandoy' },
    { year: '2018-2019', name: 'Heidi Glemeau' },
    { year: '2017-2018', name: 'Michel Roche' },
  ];

  const values = [
    {
      icon: HandshakeIcon,
      title: tMission('values.service.title'),
      description: tMission('values.service.description'),
      color: 'accent'
    },
    {
      icon: Heart,
      title: tMission('values.fellowship.title'),
      description: tMission('values.fellowship.description'),
      color: 'secondary'
    },
    {
      icon: ShieldCheck,
      title: tMission('values.integrity.title'),
      description: tMission('values.integrity.description'),
      color: 'primary'
    },
    {
      icon: Sparkles,
      title: tMission('values.diversity.title'),
      description: tMission('values.diversity.description'),
      color: 'gradient-end'
    },
  ];

  const stats = [
    { value: '150+', label: 'Projets Réalisés', icon: CheckCircle2 },
    { value: '5M+', label: 'Baht Collectés', icon: TrendingUp },
    { value: '35+', label: 'Membres Actifs', icon: Users },
    { value: yearsOfService + '+', label: 'Années de Service', icon: Calendar },
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
            className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-end blur-[100px]"
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
            {t('subtitle')}
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
            {t('district')}
          </motion.p>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            <div className="glass-card-dark px-6 py-4 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-black text-white">{yearsOfService}+</p>
                <p className="text-xs text-white/40 uppercase tracking-wider">Ans</p>
              </div>
            </div>
            <div className="glass-card-dark px-6 py-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-secondary" />
              <div className="text-left">
                <p className="text-2xl font-black text-white">35+</p>
                <p className="text-xs text-white/40 uppercase tracking-wider">Membres</p>
              </div>
            </div>
            <div className="glass-card-dark px-6 py-4 flex items-center gap-3">
              <Globe className="w-5 h-5 text-gradient-end" />
              <div className="text-left">
                <p className="text-lg font-bold text-white">District 3340</p>
                <p className="text-xs text-white/40 uppercase tracking-wider">Rotary International</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* History & Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-3xl bg-accent/5 -z-10" />
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/20">
                      <History className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                      {t('history.title')}
                    </h2>
                    <p className="text-text-light leading-relaxed text-lg mb-4">
                      {t('history.content')}
                    </p>
                    <p className="text-text-light leading-relaxed">
                      Depuis notre création en {SITE_CONFIG.foundedYear}, nous avons touché des milliers de vies à travers nos projets d'éducation, de santé et de développement communautaire. Notre engagement envers le service humanitaire reste aussi fort aujourd'hui qu'à nos débuts.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-3xl bg-secondary/5 -z-10" />
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/20">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                      {t('mission.title')}
                    </h2>
                    <p className="text-text-light leading-relaxed text-lg mb-4">
                      {t('mission.content')}
                    </p>
                    <p className="text-text-light leading-relaxed">
                      Nos domaines d'action prioritaires incluent l'éducation des jeunes, l'accès aux soins de santé, le soutien aux communautés défavorisées et la promotion du développement durable. Chaque projet est choisi pour maximiser son impact positif sur notre communauté.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Nos Valeurs */}
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Nos Valeurs
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark" style={{ fontFamily: 'var(--font-heading)' }}>
                Ce Qui Nous Guide
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${value.color} to-${value.color}/80 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{value.title}</h3>
                  <p className="text-text-light leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                Notre Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Des Chiffres Qui Parlent
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Depuis notre création, nous avons réalisé des projets concrets qui ont changé des vies. Voici quelques-unes de nos réalisations.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card-dark p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-5xl font-black text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-white/40 uppercase tracking-wider font-bold">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meetings Info */}
      <section className="py-24 md:py-32 bg-warm-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5">
                <div className="flex items-start gap-6 mb-8">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {t('meetings.title')}
                    </h2>
                    <p className="text-text-light leading-relaxed text-lg">
                      {t('meetings.description')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-warm-beige">
                    <Calendar className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="text-sm text-text-light mb-1">Quand</p>
                      <p className="text-text-dark font-bold">{t('meetings.day')}</p>
                      <p className="text-text-dark font-bold">{t('meetings.time')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-warm-beige">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-text-light mb-1">Où</p>
                      <p className="text-text-dark font-bold">{t('meetings.place')}</p>
                      <p className="text-sm text-text-light mt-1">{t('meetings.address')}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/10">
                  <p className="text-text-dark font-medium">
                    <strong>Les visiteurs sont les bienvenus!</strong> Si vous souhaitez assister à une de nos réunions pour découvrir le Rotary, n'hésitez pas à nous contacter à l'avance.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bureau 2024-2025 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/5 border border-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4"
            >
              Leadership
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('leadership.title')}
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Notre équipe de direction dévouée guide le club vers l'excellence dans le service communautaire
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bureau.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 border border-gray-100"
                >
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden mx-auto mb-6 bg-warm-gray">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text-dark mb-2">{member.name}</h3>
                    <p className="text-sm text-text-light font-medium">{member.role}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline des Présidents */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4"
            >
              Heritage
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('presidents.title')}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Une succession de leaders dévoués qui ont façonné notre club au fil des années
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />

            {presidents.map((president, index) => (
              <ScrollReveal key={president.year} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-center gap-6 mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/20">
                    <Award className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card-dark p-6">
                    <p className="text-accent font-bold text-sm mb-1">{president.year}</p>
                    <p className="text-white text-xl font-bold">{president.name}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membres Actifs */}
      <section className="py-24 md:py-32 bg-warm-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/10 border border-secondary/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4"
            >
              Community
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('members.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activeMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl p-8 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
                >
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden mx-auto mb-6 bg-warm-gray">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="160px"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text-dark mb-2">{member.name}</h3>
                    <p className="text-sm text-text-light font-medium">{member.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Membre d'Honneur */}
          <ScrollReveal>
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-gradient-end px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white mb-2">
                  <Heart className="w-4 h-4" />
                  {t('members.honor')}
                </div>
              </div>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-white to-warm-beige rounded-3xl p-10 shadow-2xl shadow-black/10 border-2 border-accent/20"
              >
                <div className="relative w-48 h-48 rounded-3xl overflow-hidden mx-auto mb-6 ring-4 ring-accent/20">
                  <Image
                    src={honoraryMember.image}
                    alt={honoraryMember.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="192px"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-text-dark mb-2">{honoraryMember.name}</h3>
                  <p className="text-accent font-bold">{honoraryMember.role}</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comment Nous Rejoindre */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Rejoignez-Nous
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Devenez Membre du Club
              </h2>
              <p className="text-xl text-text-light max-w-2xl mx-auto">
                Vous partagez nos valeurs et souhaitez vous engager dans le service communautaire? Rejoignez notre famille Rotarienne!
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: '1',
                  title: 'Contactez-Nous',
                  description: 'Prenez contact avec nous par email ou téléphone pour manifester votre intérêt',
                  icon: Mail
                },
                {
                  step: '2',
                  title: 'Assistez à une Réunion',
                  description: 'Venez découvrir notre club lors d\'une de nos réunions mensuelles',
                  icon: UserPlus
                },
                {
                  step: '3',
                  title: 'Rejoignez l\'Équipe',
                  description: 'Après votre parrainage, devenez membre actif et participez à nos projets',
                  icon: CheckCircle2
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-black text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
                    <p className="text-text-light leading-relaxed">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-center text-white">
                <h3 className="text-3xl font-black mb-4">Prêt à Faire la Différence?</h3>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Contactez-nous dès aujourd'hui pour en savoir plus sur les opportunités de membership
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-primary font-bold hover:scale-105 transition-transform duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Nous Contacter
                  </Link>
                  <a
                    href="tel:+66123456789"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-bold hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Appelez-Nous
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Notre Club en Action - Photo Gallery */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-white via-warm-beige to-warm-gray relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                Galerie Photos
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Notre Club en Action
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                Découvrez nos activités à Pattaya et dans la région à travers ces moments capturés
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: '/images/about/installation-2025.jpg',
                title: 'Installation du Bureau 2025',
                description: 'Cérémonie d\'installation officielle de notre nouveau bureau'
              },
              {
                src: '/images/about/ywca-donation.jpg',
                title: 'Don à la YWCA',
                description: 'Remise d\'un don de 130,000 baht à la YWCA de Pattaya'
              },
              {
                src: '/images/about/prison-donation.jpg',
                title: 'Soutien aux Prisons',
                description: 'Distribution de fournitures essentielles aux détenus'
              },
              {
                src: '/images/about/women-day.jpg',
                title: 'Journée de la Femme',
                description: 'Célébration de la Journée Internationale des Femmes'
              },
              {
                src: '/images/about/singapore-convention.jpg',
                title: 'Convention de Singapore',
                description: 'Participation à la convention régionale du Rotary'
              },
              {
                src: '/images/about/anniversary.jpg',
                title: 'Anniversaire du Club',
                description: 'Célébration de l\'anniversaire du club avec nos membres'
              }
            ].map((photo, index) => (
              <ScrollReveal key={photo.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-warm-gray">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {photo.description}
                    </p>
                  </div>

                  {/* Accent corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-accent/90 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional info */}
          <ScrollReveal>
            <div className="mt-16 text-center">
              <div className="inline-block bg-white rounded-3xl px-8 py-6 shadow-xl">
                <p className="text-text-light mb-2">
                  <span className="font-bold text-accent">Plus de 150 projets</span> réalisés depuis notre création
                </p>
                <p className="text-sm text-text-light/60">
                  Découvrez toutes nos actions sur la page Actions
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rotary International */}
      <section className="py-24 md:py-32 bg-warm-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="flex items-start gap-6 mb-8">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-gradient-end flex items-center justify-center shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      Membre du Rotary International
                    </h2>
                    <p className="text-text-light leading-relaxed text-lg">
                      Le Rotary International rassemble plus de 1,4 million de membres dans plus de 200 pays et régions. Ensemble, nous formons un réseau mondial de leaders communautaires dédiés à résoudre les problèmes les plus pressants de notre époque.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-warm-beige">
                    <h4 className="font-bold text-text-dark mb-2">District 3340</h4>
                    <p className="text-text-light text-sm">
                      Notre club fait partie du District 3340 qui couvre la Thaïlande et regroupe de nombreux clubs Rotary dans la région.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-warm-beige">
                    <h4 className="font-bold text-text-dark mb-2">Club 67334</h4>
                    <p className="text-text-light text-sm">
                      Identifiant unique de notre club au sein du réseau mondial Rotary International.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.rotary.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-bold transition-colors"
                  >
                    En savoir plus sur le Rotary International
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  return <AboutContent />;
}
