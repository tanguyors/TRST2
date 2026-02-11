'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { Menu, Heart, Sparkles } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const t = useTranslations('Nav');
  const tHeader = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-2xl border-b border-gray-100/50 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rotary-logo.gif"
                  alt="Rotary"
                  className="w-12 h-12 lg:w-14 lg:h-14 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <p className={`text-base lg:text-lg font-black leading-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  Rotary Club
                </p>
                <p className={`text-sm lg:text-base font-semibold leading-tight transition-colors ${isScrolled ? 'text-text-light' : 'text-white/80'}`}>
                  Pattaya Marina
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-bold transition-all duration-300 rounded-2xl group ${
                    isScrolled
                      ? 'text-text-dark hover:text-accent'
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  <span className="relative z-10">{t(item.key)}</span>
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gray-100/0 group-hover:bg-gray-100'
                      : 'bg-white/0 group-hover:bg-white/10'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <Link
                href="/donate"
                className="hidden md:inline-flex items-center gap-2 btn-secondary text-sm px-6 py-3 hover:scale-105 transition-transform shadow-lg shadow-secondary/30"
              >
                <Heart className="h-4 w-4" />
                {t('donate')}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden rounded-2xl p-3 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'
                }`}
                aria-label={tHeader('menuOpen')}
              >
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-0" />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
