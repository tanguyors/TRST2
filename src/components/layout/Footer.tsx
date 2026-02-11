'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';
import { Mail, MapPin, Phone, Facebook, ExternalLink, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary blur-[100px]"
        />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/rotary-logo.gif"
                alt="Rotary"
                className="w-12 h-12 transition-transform group-hover:scale-110 duration-300"
              />
              <div>
                <p className="text-lg font-black leading-tight">Rotary Club</p>
                <p className="text-sm text-white/60 leading-tight">Pattaya Marina</p>
              </div>
            </Link>

            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              {t('description')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={SOCIAL_LINKS.rotaryInternational}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <p className="mt-6 text-sm text-white/40 italic flex items-center gap-2">
              <Heart className="w-3.5 h-3.5" />
              &quot;{t('serviceAboveSelf')}&quot;
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-accent transition-colors" />
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-accent transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{SITE_CONFIG.meetingPlace}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              &copy; {currentYear} {SITE_CONFIG.name}. {t('rights')}.
            </p>
            <div className="flex items-center gap-4">
              <span>District {SITE_CONFIG.rotaryDistrict}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <a
                href={SOCIAL_LINKS.rotaryInternational}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Rotary International
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
