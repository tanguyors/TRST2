import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
  glass?: boolean;
};

export function Card({ children, className, hover = true, padding = true, glass = false }: Props) {
  return (
    <div
      className={cn(
        'rounded-3xl overflow-hidden transition-all duration-500',
        glass
          ? 'bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl shadow-black/10'
          : 'bg-white border border-gray-100/50 shadow-lg shadow-black/5',
        hover && 'card-hover group',
        padding && 'p-8',
        className
      )}
    >
      {children}
    </div>
  );
}
