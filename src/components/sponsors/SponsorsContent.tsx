'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Heart, Globe, ExternalLink, Sparkles, Handshake, Users, Target, Award, TrendingUp, CheckCircle2, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Big C Extra',
    location: 'Pattaya Klang',
    description: 'Sponsor du tournoi de pétanque 2017 au profit de Human Help Network Foundation Thailand',
    logo: '/images/sponsors/bigc-extra.jpg',
    website: 'https://www.bigc.co.th',
    category: 'retail'
  },
  {
    name: 'Bacchus Bourbon',
    location: 'La Réunion, France',
    description: 'Soutien au projet d\'installation de système de filtration d\'eau au village Karen de Huei Kra Ting',
    logo: '/images/sponsors/bacchus-bourbon.jpg',
    website: 'http://bacchus-bourbon.fr',
    category: 'food'
  },
  {
    name: 'Rotary E-Club District 9220',
    location: 'La Réunion',
    description: 'Partenaire pour le projet de distribution d\'eau potable dans le village de Huei Kra Ting',
    logo: '/images/sponsors/rotary-color.svg',
    website: 'https://www.rotary.org',
    category: 'rotary'
  },
  {
    name: 'Rotary Club Bruxelles Erasme',
    location: 'Bruxelles, Belgique',
    description: 'Financement du projet d\'électricité à Mae Song Noi et construction de dortoirs à Padae',
    logo: '/images/sponsors/rotary-color.svg',
    website: 'http://bruxelles-erasme.rotary2170.org/fr/',
    category: 'rotary'
  },
  {
    name: 'Rotary Club Bruxelles Tercoigne',
    location: 'Bruxelles, Belgique',
    description: 'Contribution au projet de dortoirs dans la région Karen',
    logo: '/images/sponsors/rotary-color.svg',
    website: 'http://www.rotary-bxl-tercoigne.org/',
    category: 'rotary'
  },
];

const categoryColors = {
  retail: 'from-blue-500 to-blue-600',
  food: 'from-orange-500 to-orange-600',
  rotary: 'from-primary to-primary/80',
};

const categoryIcons = {
  retail: Globe,
  food: Heart,
  rotary: Handshake,
};

export function SponsorsContent() {
  const t = useTranslations('Sponsors');

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
            {sponsors.length} Partenaires
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nos Mécènes & Partenaires
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            Des partenaires engagés qui nous aident à réaliser nos projets humanitaires et communautaires
          </motion.p>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                L'Impact de Nos Partenariats
              </h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Grâce au soutien de nos partenaires, nous réalisons des projets concrets qui changent des vies
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Projets Financés', icon: Target, color: 'from-blue-500 to-blue-600' },
              { number: '5', label: 'Partenaires Actifs', icon: Handshake, color: 'from-accent to-accent/80' },
              { number: '1000+', label: 'Bénéficiaires', icon: Users, color: 'from-secondary to-secondary/80' },
              { number: '10+', label: 'Années de Collaboration', icon: Award, color: 'from-primary to-primary/80' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-text-dark mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-text-light uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => {
              const Icon = categoryIcons[sponsor.category as keyof typeof categoryIcons] || Heart;
              const colorGradient = categoryColors[sponsor.category as keyof typeof categoryColors] || categoryColors.rotary;

              return (
                <ScrollReveal key={sponsor.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-accent/20 h-full flex flex-col"
                  >
                    {/* Logo or Icon */}
                    <div className="relative h-48 overflow-hidden bg-warm-gray flex items-center justify-center p-8">
                      {sponsor.logo ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${colorGradient} rounded-2xl flex items-center justify-center`}>
                          <Icon className="w-20 h-20 text-white/70" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-black text-text-dark mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                        {sponsor.name}
                      </h3>

                      <p className="text-sm text-text-light mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {sponsor.location}
                      </p>

                      <p className="text-text-light leading-relaxed mb-6 flex-1">
                        {sponsor.description}
                      </p>

                      {sponsor.website && (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
                        >
                          <span>Visiter le site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partenaires Rotary */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-warm-beige via-warm-gray to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Réseau Rotary
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Nos Partenaires Rotary
              </h2>
              <p className="text-xl text-text-light max-w-2xl mx-auto">
                Nous collaborons avec des clubs Rotary du monde entier pour amplifier notre impact humanitaire
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'District 3340',
                description: 'Notre district en Thaïlande',
                icon: Globe,
                link: 'https://www.rotary3340.org'
              },
              {
                title: 'Rotary International',
                description: 'Organisation mondiale',
                icon: Handshake,
                link: 'https://www.rotary.org'
              },
              {
                title: 'Clubs Partenaires',
                description: 'Collaboration internationale',
                icon: Heart,
                link: '#'
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
                  <p className="text-text-light mb-6">{item.description}</p>
                  {item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
                    >
                      <span>En savoir plus</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                <Lightbulb className="w-4 h-4" />
                Avantages
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Pourquoi Devenir Partenaire ?
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                En vous associant au Rotary Club Pattaya Marina, vous contribuez à des projets humanitaires tout en renforçant votre engagement RSE
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Impact Social Mesurable',
                description: 'Participez à des projets concrets avec des résultats tangibles et un suivi transparent de l\'utilisation des fonds.',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Visibilité Internationale',
                description: 'Profitez d\'une visibilité auprès du réseau Rotary International présent dans 200 pays avec 1,4 million de membres.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Handshake,
                title: 'Réseau Professionnel',
                description: 'Intégrez un réseau de professionnels engagés et développez des relations d\'affaires durables.',
                color: 'from-primary to-accent'
              },
              {
                icon: Award,
                title: 'Reconnaissance Publique',
                description: 'Votre logo et votre contribution sont mis en avant sur notre site web et nos communications.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: TrendingUp,
                title: 'Développement RSE',
                description: 'Renforcez votre politique de responsabilité sociétale d\'entreprise avec des actions concrètes.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Target,
                title: 'Projets Ciblés',
                description: 'Choisissez les causes qui vous tiennent à cœur : santé, éducation, environnement, développement local.',
                color: 'from-purple-500 to-indigo-500'
              },
            ].map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-warm-gray rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-warm-beige to-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Types de Partenariats
              </h2>
              <p className="text-xl text-text-light max-w-2xl mx-auto">
                Différentes façons de nous soutenir selon vos objectifs et vos moyens
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Partenaire Financier',
                description: 'Contribution financière pour soutenir nos projets humanitaires et événements caritatifs.',
                features: [
                  'Soutien ponctuel ou récurrent',
                  'Logo sur nos supports',
                  'Rapport d\'impact annuel',
                  'Invitation aux événements'
                ],
                gradient: 'from-primary to-primary/80'
              },
              {
                title: 'Partenaire en Nature',
                description: 'Don de produits, services ou compétences pour nos actions sur le terrain.',
                features: [
                  'Fourniture de matériel',
                  'Mise à disposition de services',
                  'Expertise technique',
                  'Reconnaissance publique'
                ],
                gradient: 'from-accent to-accent/80'
              },
              {
                title: 'Partenaire Stratégique',
                description: 'Collaboration à long terme avec co-développement de projets spécifiques.',
                features: [
                  'Partenariat pluriannuel',
                  'Co-création de projets',
                  'Visibilité maximale',
                  'Gouvernance partagée'
                ],
                gradient: 'from-secondary to-secondary/80'
              },
            ].map((type, index) => (
              <ScrollReveal key={type.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-accent/30 transition-all duration-300"
                >
                  <div className={`h-3 bg-gradient-to-r ${type.gradient}`} />
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      {type.title}
                    </h3>
                    <p className="text-text-light mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-text-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
                  <Handshake className="w-4 h-4" />
                  Devenez Partenaire
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Rejoignez Nos Partenaires
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Votre entreprise souhaite s'associer à nos projets humanitaires? Contactez-nous pour découvrir comment nous pouvons collaborer.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-primary font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
                  >
                    <Heart className="w-5 h-5" />
                    Nous Contacter
                  </Link>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Faire un Don
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
