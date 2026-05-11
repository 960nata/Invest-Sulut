import Hero from '@/components/Hero';
import WhySulut from '@/components/WhySulut';
import ProjectSection from '@/components/ProjectSection';
import EconomicSnapshot from '@/components/EconomicSnapshot';
import SpeechSection from '@/components/SpeechSection';
import LatestNews from '@/components/LatestNews';
import InfinitePartnerStrip from '@/components/InfinitePartnerStrip';
import ContactSection from '@/components/ContactSection';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
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

      {/* Layout Switcher */}
      <div className="fixed bottom-6 right-6 z-50 bg-[#1E293B]/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-3 border border-white/5 text-xs font-bold text-white shadow-xl">
        <span className="text-white/70 uppercase tracking-widest text-[10px]">Layout</span>
        <div className="flex gap-3 text-white/40">
          <a href="https://invest-sulut.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">V1</a>
          <a href="https://invest-sulut.vercel.app/v2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">V2</a>
          <a href="https://invest-sulut-xi.vercel.app/id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">V3</a>
        </div>
      </div>
    </main>
  );
}
