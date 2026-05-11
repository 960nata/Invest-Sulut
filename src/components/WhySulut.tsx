'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topProjects = [
  {
    id: 1,
    name: 'Likupang',
    sector: 'Pariwisata',
    image: '/Images/Sulawesi/likupang_resort_1778425988352.png',
    w: 'w-[320px] md:w-[450px]'
  },
  {
    id: 2,
    name: 'Bitung',
    sector: 'Logistik',
    image: '/Images/Sulawesi/bitung_port_1778426013679.png',
    w: 'w-[240px] md:w-[300px]'
  },
  {
    id: 3,
    name: 'Bunaken',
    sector: 'Marine Park',
    image: '/Images/Sulawesi/bunaken_reef_1778426086437.png',
    w: 'w-[280px] md:w-[400px]'
  },
  {
    id: 4,
    name: 'Kabasaran',
    sector: 'Budaya',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[260px] md:w-[350px]'
  },
  {
    id: 5,
    name: 'Tinutuan',
    sector: 'Kuliner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[280px] md:w-[420px]'
  },
  {
    id: 6,
    name: 'Geothermal',
    sector: 'Energi Hijau',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[260px] md:w-[380px]'
  },
  {
    id: 13,
    name: 'Manado',
    sector: 'Metropolitan',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[280px] md:w-[400px]'
  }
];

const bottomProjects = [
  {
    id: 7,
    name: 'Perkebunan',
    sector: 'Agrikultur',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[320px] md:w-[420px]'
  },
  {
    id: 8,
    name: 'Kawasan Industri',
    sector: 'Manufaktur',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[240px] md:w-[320px]'
  },
  {
    id: 9,
    name: 'Minahasa',
    sector: 'Highlands',
    image: '/Images/Sulawesi/minahasa_house_1778426047038.png',
    w: 'w-[280px] md:w-[380px]'
  },
  {
    id: 10,
    name: 'Investasi',
    sector: 'Masa Depan',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[260px] md:w-[410px]'
  },
  {
    id: 11,
    name: 'Ekowisata',
    sector: 'Destinasi',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
    w: 'w-[280px] md:w-[360px]'
  },
  {
    id: 12,
    name: 'Infrastruktur',
    sector: 'Konektivitas',
    image: 'https://images.unsplash.com/photo-1541888086225-ee82fb612ca4?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[260px] md:w-[440px]'
  },
  {
    id: 14,
    name: 'Bentang Alam',
    sector: 'Sulawesi Utara',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
    w: 'w-[260px] md:w-[380px]'
  }
];

const ProjectCard = ({ project }: { project: typeof topProjects[0] }) => {
  const [imgSrc, setImgSrc] = React.useState(project.image);

  return (
    <div
      className={cn(
        "flex-none h-[220px] md:h-[250px] relative group transition-all duration-500 hover:-translate-y-2 transform-gpu will-change-transform",
        project.w
      )}
    >
      <div className="mr-8 h-full relative text-left">
        <div className="absolute inset-0 z-10 rounded-xl overflow-hidden bg-slate-800 transform-gpu">
          <Image
            src={imgSrc}
            alt={project.name}
            fill
            unoptimized
            onError={() => setImgSrc('https://images.unsplash.com/photo-1506744038136-46273834b3fb')}
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

        <div className="absolute bottom-10 left-8 right-[130px] pointer-events-none">
          <h4 className="text-lg md:text-[18px] font-bold text-white whitespace-normal leading-tight drop-shadow-sm mb-2">
            {project.name}
          </h4>
          <div className="flex">
            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest">
              {project.sector}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-2px] right-[-2px] w-[100px] h-[100px] pointer-events-none z-20">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#fcfcfc] fill-current"
        >
          <path
            d="M 100 100 H 0 C 5 100 10 95 10 85 C 10 22 22 10 85 10 C 95 10 100 5 100 0 V 100 Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-2 right-2 z-30">
        <Link
          href={`/investment/projects/${project.id}`}
          className="w-16 h-16 rounded-full bg-[#00529C] flex items-center justify-center text-white hover:scale-110 transition-transform group"
        >
          <ArrowRight className="w-7 h-7 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
        </Link>
      </div>
    </div>
  </div>
  );
};

export default function WhySulut() {
  return (
    <section id="why-sulut" className="py-24 bg-[#fcfcfc] overflow-hidden border-t border-slate-100">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 60s linear infinite reverse;
        }
        .marquee-container:hover .animate-marquee,
        .marquee-container:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]"
          >
            Mengapa Sulawesi Utara?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-5xl mb-12 mx-auto"
          >
            Terletak di jantung kawasan BIMP-EAGA dan Cincin Pasifik, Sulawesi Utara adalah pintu gerbang strategis menuju pasar Asia Timur dan Pasifik. Dengan tiga Kawasan Ekonomi Khusus aktif, pertumbuhan ekonomi di atas rata-rata nasional, dan kekayaan alam yang belum tersentuh — inilah provinsi yang menawarkan imbal hasil nyata bagi investor yang tepat.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#00529C] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00529C] transition-colors">Gerbang Cincin Pasifik</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Posisi strategis untuk perdagangan Asia-Pasifik</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#00529C] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00529C] transition-colors">3 Kawasan Ekonomi Khusus</h4>
              <p className="text-sm text-slate-500 leading-relaxed">KEK Likupang, KEK Bitung, KPBPB Manado-Bitung</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#00529C] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00529C] transition-colors">Pertumbuhan Konsisten</h4>
              <p className="text-sm text-slate-500 leading-relaxed">5,62% YoY, melampaui rata-rata nasional</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Top Carousel (LTR Animation) */}
      <div className="marquee-container flex overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...topProjects, ...topProjects].map((project, idx) => (
            <ProjectCard key={`top-${project.id}-${idx}`} project={project} />
          ))}
        </div>
      </div>

      {/* Bottom Carousel (RTL Animation) */}
      <div className="marquee-container flex overflow-hidden py-4">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...bottomProjects, ...bottomProjects].map((project, idx) => (
            <ProjectCard key={`bottom-${project.id}-${idx}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
