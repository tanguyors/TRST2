import { ScrollReveal } from './ScrollReveal';

type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionTitle({ title, subtitle, centered = true, light = false }: Props) {
  return (
    <ScrollReveal className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-text-dark'
        }`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-text-light'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-secondary ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </ScrollReveal>
  );
}
