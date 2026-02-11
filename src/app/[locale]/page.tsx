import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeSection } from '@/components/home/MarqueeSection';
import { MissionSection } from '@/components/home/MissionSection';
import { RecentActions } from '@/components/home/RecentActions';
import { StatsCounter } from '@/components/home/StatsCounter';
import { AboutPreview } from '@/components/home/AboutPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <MissionSection />
      <StatsCounter />
      <AboutPreview />
      <RecentActions />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
