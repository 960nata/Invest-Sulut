import Hero from '@/components/Hero';
import WhySulut from '@/components/WhySulut';
import ProjectSection from '@/components/ProjectSection';
import EconomicSnapshot from '@/components/EconomicSnapshot';
import SpeechSection from '@/components/SpeechSection';
import LatestNews from '@/components/LatestNews';
import InfinitePartnerStrip from '@/components/InfinitePartnerStrip';
import ContactSection from '@/components/ContactSection';
import prisma from '@/lib/db';

export default async function HomePage() {
  const heroSetting = await prisma.setting.findUnique({
    where: { key: 'hero_slides' },
  });

  const slides = heroSetting ? JSON.parse(heroSetting.value) : undefined;

  return (
    <main className="min-h-screen">
      <Hero slides={slides} />
      <EconomicSnapshot />
      <WhySulut />
      <ProjectSection />
      <LatestNews />

      {/* Speech Section */}
      <SpeechSection />

      {/* Partner Logos infinite carousel */}
      <InfinitePartnerStrip />

      {/* Final CTA Contact Section */}
      <ContactSection />
    </main>
  );
}
