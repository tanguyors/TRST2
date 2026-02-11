'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from '@/i18n/navigation';
import { Heart, Building2, Copy, CheckCircle2, Mail, Info, Users, ArrowRight, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export function DonateContent() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetails = [
    { label: 'Banque', value: 'Kasikorn Bank Public Co LTD Thailand', field: 'bank' },
    { label: 'Bénéficiaire', value: 'Rotary Club Pattaya Marina', field: 'beneficiary' },
    { label: 'Code SWIFT', value: 'KASITHBK', field: 'swift' },
    { label: 'Numéro de compte', value: '870-2-27445-2', field: 'account' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-primary">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-accent blur-[75px] md:blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-end blur-[75px] md:blur-[150px]"
          />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div className="container-custom relative z-10 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Faire un Don
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
            >
              Votre générosité permet de financer nos projets humanitaires et de changer des vies
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* Bank Transfer Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                <Building2 className="w-4 h-4" />
                Virement Bancaire
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Coordonnées Bancaires
              </h2>
              <p className="text-lg text-text-light">
                Effectuez un virement avec les informations ci-dessous
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-warm-gray rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Informations Bancaires</h3>
                    <p className="text-sm text-white/70">Cliquez pour copier</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {bankDetails.map((detail) => (
                  <button
                    key={detail.field}
                    onClick={() => copyToClipboard(detail.value, detail.field)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white transition-all duration-300 text-left group"
                  >
                    <div className="flex-1">
                      <p className="text-xs font-bold text-text-light uppercase tracking-wide mb-1">
                        {detail.label}
                      </p>
                      <p className="text-base font-semibold text-text-dark group-hover:text-accent transition-colors">
                        {detail.value}
                      </p>
                    </div>
                    <div className="ml-4">
                      {copiedField === detail.field ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-text-light group-hover:text-accent transition-colors" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Important Notice */}
          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-xl p-6">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-text-dark mb-2">Important</h4>
                <p className="text-sm text-text-light mb-3">
                  Après votre virement, merci de nous confirmer par email en précisant le montant et le projet que vous souhaitez soutenir.
                </p>
                <a
                  href="mailto:contact@rotary-pattaya-marina.org"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contact@rotary-pattaya-marina.org
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="container-custom px-4">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-[0.2em] text-accent mb-3 md:mb-4">
                <Camera className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden xs:inline">L'Impact de Vos Dons</span>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-text-dark mb-3 md:mb-4 px-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Vos Dons en Action
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-text-light max-w-2xl mx-auto px-4">
                Découvrez comment vos contributions financent nos projets humanitaires et aident les communautés locales
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                image: '/images/about/ywca-donation.jpg',
                title: 'Soutien à la YWCA',
                amount: '130,000 ฿',
                description: 'Aide aux femmes et familles en difficulté'
              },
              {
                image: '/images/about/prison-donation.jpg',
                title: 'Aide aux Détenus',
                amount: '50,000 ฿',
                description: 'Distribution de fournitures essentielles'
              },
              {
                image: '/images/actions/filtre-eau-karen.jpg',
                title: 'Eau Potable Villages Karen',
                amount: '200,000 ฿',
                description: 'Systèmes de filtration et distribution'
              },
              {
                image: '/images/actions/electricite-mae-song-noi.jpg',
                title: 'Électrification Rurale',
                amount: '150,000 ฿',
                description: 'Installation électrique Mae Song Noi'
              },
              {
                image: '/images/about/women-day.jpg',
                title: 'Journée de la Femme',
                amount: '30,000 ฿',
                description: 'Célébration et soutien aux femmes'
              },
              {
                image: '/images/actions/ecole-hua-yai.jpg',
                title: 'Fournitures Scolaires',
                amount: '80,000 ฿',
                description: 'Équipement pour écoles défavorisées'
              },
            ].map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden bg-warm-gray">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-accent text-white text-xs md:text-sm font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                      {project.amount}
                    </div>
                  </div>
                  <div className="p-4 md:p-5 lg:p-6">
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-text-dark mb-1.5 md:mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-light line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 md:mt-12 text-center px-4">
              <p className="text-sm md:text-base text-text-light mb-4 md:mb-6 max-w-2xl mx-auto">
                Chaque baht compte et contribue à améliorer la vie des personnes dans le besoin. Merci pour votre générosité !
              </p>
              <Link
                href="/actions"
                className="inline-flex items-center gap-2 text-sm md:text-base text-accent font-bold hover:gap-4 transition-all"
              >
                Voir tous nos projets
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other Ways Section */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Autres Façons de Contribuer
              </h2>
              <p className="text-lg text-text-light">
                Votre soutien peut prendre plusieurs formes
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Devenir Membre',
                description: 'Rejoignez notre club et participez à nos projets',
                link: '/about'
              },
              {
                icon: Building2,
                title: 'Partenariat',
                description: 'Entreprises : devenez partenaire du club',
                link: '/sponsors'
              },
              {
                icon: Heart,
                title: 'Bénévolat',
                description: 'Offrez votre temps et vos compétences',
                link: '/contact'
              },
            ].map((way, index) => (
              <ScrollReveal key={way.title} delay={index * 0.1}>
                <Link href={way.link}>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <way.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-accent transition-colors">
                      {way.title}
                    </h3>
                    <p className="text-sm text-text-light">
                      {way.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-primary">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-accent blur-[75px] md:blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-end blur-[75px] md:blur-[150px]"
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
              <Heart className="w-12 h-12 mx-auto mb-6 text-white/70" />
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                Chaque Geste Compte
              </h2>
              <p className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed">
                Votre générosité fait une vraie différence dans la vie de ceux que nous aidons
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Nous Contacter
                </Link>
                <Link
                  href="/actions"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  Voir Nos Actions
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-warm-gray to-transparent" />
      </section>
    </>
  );
}
