'use client';

import { Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

const amounts = [500, 1000, 2500, 5000, 10000];

export function DonationForm() {
  const t = useTranslations('DonationForm');

  return (
    <div className="space-y-4">
      <p className="text-sm text-text-light">{t('selectAmount')}</p>
      <div className="grid grid-cols-3 gap-3">
        {amounts.map((amount) => (
          <button
            key={amount}
            className="rounded-lg border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-text-dark hover:border-secondary hover:bg-secondary/5 transition-all"
          >
            {amount.toLocaleString()} ฿
          </button>
        ))}
        <button className="rounded-lg border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-text-light hover:border-secondary hover:bg-secondary/5 transition-all">
          {t('other')}
        </button>
      </div>
      <button className="btn-secondary w-full flex items-center justify-center gap-2 mt-4">
        <Heart className="h-4 w-4" />
        {t('donateNow')}
      </button>
      <p className="text-xs text-text-light text-center">
        {t('comingSoon')}
      </p>
    </div>
  );
}
