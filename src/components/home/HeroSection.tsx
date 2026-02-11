'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ChevronDown, Calendar, MapPin, Users } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  const t = useTranslations('Hero');
  const yearsOfService = new Date().getFullYear() - SITE_CONFIG.foundedYear;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-primary">
      {/* Animated mesh gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-accent blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-end blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-secondary blur-[120px]"
        />
      </div>

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Main content - Split layout */}
      <div className="container-custom relative z-10 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight"
            >
              {t('title')}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent via-accent-light to-gradient-end bg-clip-text text-transparent mb-8">
                {t('subtitle')}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed"
            >
              {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
              >
                <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('cta_join')}
              </Link>
              <Link
                href="/actions"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                {t('cta_discover')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right - Visual composition */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Rotating Rotary gear */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <svg width="380" height="380" viewBox="0 0 100 100" className="opacity-[0.06]">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="0.3" fill="none" />
                <circle cx="50" cy="50" r="6" fill="white" />
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60 * Math.PI) / 180;
                  const x1 = 50 + 35 * Math.cos(angle);
                  const y1 = 50 + 35 * Math.sin(angle);
                  const x2 = 50 + 48 * Math.cos(angle);
                  const y2 = 50 + 48 * Math.sin(angle);
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="3" strokeLinecap="round" />
                  );
                })}
              </svg>
            </motion.div>

            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-72 rounded-full border border-accent/20"
              />
            </div>

            {/* Floating stat badges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-8 right-0"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card-dark px-5 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-black text-white">35+</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">{t('badge_members')}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-16 left-0"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-card-dark px-5 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-lg font-black text-white">{yearsOfService}+</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">{t('badge_years')}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-4 right-12"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="glass-card-dark px-5 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-end/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gradient-end" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t('badge_location')}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">{t('badge_country')}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <ChevronDown className="h-4 w-4 text-white/30 animate-scroll-bounce" />
      </motion.div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}
