'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import { Calendar, Users, FolderHeart, Coins } from 'lucide-react';

type Stat = {
  value: number;
  suffix?: string;
  labelKey: string;
  Icon: typeof Calendar;
  color: string;
};

const stats: Stat[] = [
  { value: new Date().getFullYear() - SITE_CONFIG.foundedYear, suffix: '+', labelKey: 'years', Icon: Calendar, color: 'text-accent bg-accent/20' },
  { value: 35, suffix: '+', labelKey: 'members', Icon: Users, color: 'text-secondary bg-secondary/20' },
  { value: 150, suffix: '+', labelKey: 'projects', Icon: FolderHeart, color: 'text-gradient-end bg-gradient-end/20' },
  { value: 5000000, suffix: '+', labelKey: 'donated', Icon: Coins, color: 'text-emerald-400 bg-emerald-400/20' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted = value >= 1000000
    ? `${(count / 1000000).toFixed(count >= value ? 0 : 1)}M`
    : value >= 1000
    ? `${Math.floor(count / 1000)}k`
    : count.toString();

  return <span ref={ref}>{formatted}{suffix}</span>;
}

export function StatsCounter() {
  const t = useTranslations('Stats');

  return (
    <section className="relative py-28 md:py-36 bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-end/5 blur-[100px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass-card-dark p-8 text-center group"
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.color.split(' ')[1]} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <stat.Icon className={`w-5 h-5 ${stat.color.split(' ')[0]}`} />
              </div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                {t(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top fade from white */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
      {/* Bottom fade to warm-gray */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-gray to-transparent" />
    </section>
  );
}
