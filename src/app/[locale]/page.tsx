import Hero from '@/components/Hero';
import WhySulut from '@/components/WhySulut';
import ProjectSection from '@/components/ProjectSection';
import EconomicSnapshot from '@/components/EconomicSnapshot';
import SpeechSection from '@/components/SpeechSection';
import LatestNews from '@/components/LatestNews';
import InfinitePartnerStrip from '@/components/InfinitePartnerStrip';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
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
