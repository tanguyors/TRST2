'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: Props) {
  const t = useTranslations('Nav');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-warm-gray">
              <span className="text-lg font-bold text-primary">Menu</span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-warm-gray transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-text-dark hover:bg-warm-gray hover:text-primary transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/donate"
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-secondary hover:bg-secondary/10 transition-colors"
                  >
                    {t('donate')}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-warm-gray">
              <LanguageSwitcher />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
