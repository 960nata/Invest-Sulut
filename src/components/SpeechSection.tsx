'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const speeches = [
  {
    name: "Mayjen TNI (Purn) Yulius Selvanus Komaling, SE",
    title: "Gubernur Sulawesi Utara",
    quote: "Ekonomi Sulawesi Utara yang berkembang pesat dan lingkungan investasi yang kondusif menjadikannya tujuan ideal bagi investor yang mencari peluang menguntungkan.",
    image: "/Images/Leadrer/portrait_governor.webp"
  },
  {
    name: "Joko Supratikto",
    title: "Kepala Perwakilan Bank Indonesia Sulawesi Utara",
    quote: "Sulawesi Utara menawarkan iklim investasi yang berkelanjutan, inklusif, dan terhubung secara global, didukung oleh infrastruktur strategis and ekonomi yang terbuka.",
    image: "/Images/Leadrer/portrait_bi.webp"
  }
];

export default function SpeechSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative min-h-[600px] md:h-[700px] py-20 md:py-0 px-6 overflow-hidden border-t border-blue-900/50 flex items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Images/Leadrer/Background.avif" 
          alt="Leadership Background" 
          fill 
          className="object-cover"
          unoptimized
          quality={100}
          priority
        />
        {/* Gradient Overlay: Natural at top, dark blue at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#001A33]/50 to-[#001A33]"></div>
      </div>

      {/* Background Watermark for Design Consistency */}
      <div className="absolute top-1/2 left-0 w-full text-center overflow-hidden pointer-events-none z-10 opacity-[0.03]">
        <h1 className="text-[8rem] md:text-[14rem] font-black text-white tracking-tighter leading-none select-none uppercase">
          SULAWESI UTARA
        </h1>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto w-full">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Pidato Kepala Daerah
          </h2>
        </div>

        {/* Apple Style Glass Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white/20 md:bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 border border-white/20 flex flex-col md:flex-row gap-8 items-center md:items-center shadow-2xl shadow-black/30"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-white/30">
                <Image src={speeches[currentIndex].image} alt={speeches[currentIndex].name} fill className="object-cover object-top" />
              </div>
              <div className="flex flex-col gap-4 text-white">
                <Quote className="w-10 h-10 text-white/20" />
                <p className="text-lg md:text-xl font-medium italic leading-relaxed tracking-tight text-white/90">
                  "{speeches[currentIndex].quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="font-bold text-xl text-white">{speeches[currentIndex].name}</div>
                  <div className="text-blue-200 font-bold text-xs uppercase tracking-widest mt-1">{speeches[currentIndex].title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {speeches.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  currentIndex === idx 
                    ? "bg-white w-8" 
                    : "bg-white/30 w-2 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
