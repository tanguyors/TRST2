'use client';

import { useTranslations } from 'next-intl';

export function MarqueeSection() {
  const t = useTranslations('Marquee');
  const row1 = t.raw('row1') as string[];
  const row2 = t.raw('row2') as string[];
  return (
    <section className="py-4 bg-white overflow-hidden border-y border-gray-100 space-y-3">
      {/* Row 1 - scrolls left */}
      <div className="flex animate-marquee w-fit">
        {[...row1, ...row1].map((item, i) => (
          <div key={`r1-${i}`} className="flex items-center shrink-0">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-text-dark/70 whitespace-nowrap px-6">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
          </div>
        ))}
      </div>
      {/* Row 2 - scrolls right (reverse direction via CSS) */}
      <div className="flex w-fit" style={{ animation: 'marquee 35s linear infinite reverse' }}>
        {[...row2, ...row2].map((item, i) => (
          <div key={`r2-${i}`} className="flex items-center shrink-0">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-text-light/40 whitespace-nowrap px-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-secondary/30 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
