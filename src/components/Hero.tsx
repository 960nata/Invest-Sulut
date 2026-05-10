'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, BarChart3, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const usps = [
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    value: "5.62%",
    label: "Economic Growth",
    sub: "Q1 2025 (Above Nat'l Avg)"
  },
  {
    icon: <Globe2 className="w-6 h-6 text-blue-600" />,
    value: "IDR 3.08T",
    label: "Investment Realized",
    sub: "Real-time Q1 2025 Data"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    value: "BBB / Stable",
    label: "Investment Grade",
    sub: "S&P Global Rating"
  }
];

import Link from 'next/link';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const defaultSlides = [
  {
    id: 1,
    tag: "Gateway to the Pacific",
    title: "Creating a Sustainable Future with Investment Solutions.",
    desc: "Discover the amazing ways strategic capital can transform your region or business.",
    btnText: "Explore Pipeline",
    btnUrl: "/investment/projects",
    image: "/Images/Hero/Hero 1.avif",
    stats: { label: "Growth Rate", value: "+5.62%" }
  },
  {
    id: 2,
    tag: "Sustainability First",
    title: "Blue Economy Future.",
    desc: "Leading the transition to a sustainable ocean-based economy. Unlock vast potential in marine resources and renewable energy.",
    btnText: "Invest in Blue",
    btnUrl: "/investment/blue-economy",
    image: "/Images/Hero/Hero 2.png",
    stats: { label: "Potential", value: "IDR 12.5T" }
  },
  {
    id: 3,
    tag: "Industrial Excellence",
    title: "Strategic Hub Sulut.",
    desc: "Connecting international markets through Bitung Special Economic Zone. Infrastructure designed for global trade efficiency.",
    btnText: "Explore SEZ",
    btnUrl: "/investment/sez",
    image: "/Images/Hero/Hero 3.avif",
    stats: { label: "Assets", value: "IDR 3.08T" }
  }
];

export default function Hero({ slides = defaultSlides }: { slides?: typeof defaultSlides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
    dragFree: false
  }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const tweenParallax = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const translateImg = diffToTarget * 5;
        const translateText = diffToTarget * 60; 

        const slideNode = emblaApi.slideNodes()[slideIndex];
        
        // Image Parallax (if any)
        const parallaxImg = slideNode.querySelector('.parallax-layer') as HTMLElement;
        if (parallaxImg) {
          parallaxImg.style.transform = `translateX(${translateImg}%)`;
        }

        // Text Parallax (New)
        const parallaxText = slideNode.querySelector('.parallax-text') as HTMLElement;
        if (parallaxText) {
          parallaxText.style.transform = `translateX(${translateText}px)`;
        }
      });
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    tweenParallax();
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', tweenParallax);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('reInit', tweenParallax);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', tweenParallax);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('reInit', tweenParallax);
    };
  }, [emblaApi, onSelect, tweenParallax]);

  return (
    <section className="relative h-[600px] md:h-[850px] w-full bg-slate-900 overflow-hidden">
      {/* Embla Viewport */}
      <div className="relative h-[600px] md:h-[850px] w-full overflow-hidden bg-slate-900 touch-pan-y cursor-grab active:cursor-grabbing" ref={emblaRef}>
        {/* Embla Container */}
          <div className="flex h-full w-full">
            {slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full overflow-hidden">
                <div className="relative h-full w-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="parallax-layer absolute inset-[-5%] z-0">
                      <Image
                        src={slide.image} 
                        alt={slide.title}
                        fill
                        className="object-cover pointer-events-none"
                        priority
                        quality={100}
                        unoptimized
                        draggable={false}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001A33]/85 via-[#001A33]/50 to-[#001A33]/10 pointer-events-none"></div>
                  </div>

                  {/* Content Container - Left Aligned */}
                  <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center pt-10 select-none">
                    <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="parallax-text flex flex-col items-start text-left max-w-4xl"
                  >
                    <h1 className="text-4xl md:text-[56px] font-bold text-white mb-6 leading-[1.2] tracking-tight font-sans">
                      {slide.title}
                    </h1>
                    
                    <p className="text-base md:text-lg text-white/80 max-w-2xl mb-10 font-normal leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* Standardized BI Blue Button */}
                    <Link 
                      href={slide.btnUrl} 
                      draggable={false}
                      className="bg-[#00529C] text-white px-8 py-4 rounded-full text-[15px] font-bold flex items-center gap-3 hover:bg-white hover:text-[#00529C] transition-all duration-300 shadow-xl shadow-blue-900/20 w-fit group"
                    >
                      <span>{slide.btnText}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>


      {/* Subtle Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
         {slides.map((_, idx) => (
           <button 
             key={idx}
             onClick={() => emblaApi?.scrollTo(idx)}
             className={`h-1.5 rounded-full transition-all duration-500 ${selectedIndex === idx ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
           />
         ))}
      </div>
    </section>
  );
}
