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
    name: 'KEK Likupang',
    sector: 'Pariwisata',
    image: '/Images/why sulut/kek_likupang.png',
    w: 'w-[320px] md:w-[450px]'
  },
  {
    id: 2,
    name: 'Revitalisasi Taman Nasional Bunaken',
    sector: 'Pariwisata',
    image: '/Images/why sulut/bunaken.png',
    w: 'w-[240px] md:w-[300px]'
  },
  {
    id: 3,
    name: 'Wisata Selat Lembeh',
    sector: 'Pariwisata',
    image: '/Images/why sulut/selat_lembeh.png',
    w: 'w-[280px] md:w-[400px]'
  },
  {
    id: 4,
    name: 'Tomohon International Flower Festival',
    sector: 'Pariwisata',
    image: '/Images/why sulut/tomohon_flower.png',
    w: 'w-[260px] md:w-[350px]'
  },
  {
    id: 5,
    name: 'Manado Skyline (Bukit Doa)',
    sector: 'Pariwisata',
    image: '/Images/why sulut/manado_skyline.png',
    w: 'w-[280px] md:w-[420px]'
  },
  {
    id: 6,
    name: 'Jalan Tol Manado-Bitung',
    sector: 'Infrastruktur',
    image: '/Images/why sulut/tol_manado_bitung.png',
    w: 'w-[260px] md:w-[380px]'
  },
  {
    id: 7,
    name: 'Bendungan Kuwil Kawangkoan',
    sector: 'Infrastruktur',
    image: '/Images/why sulut/bendungan_kuwil.png',
    w: 'w-[280px] md:w-[400px]'
  },
  {
    id: 8,
    name: 'Bendungan Lolak',
    sector: 'Infrastruktur',
    image: '/Images/why sulut/bendungan_lolak.png',
    w: 'w-[300px] md:w-[430px]'
  }
];

const bottomProjects = [
  {
    id: 9,
    name: 'Perluasan Bandara Sam Ratulangi',
    sector: 'Infrastruktur',
    image: '/Images/why sulut/bandara_sam_ratulangi.png',
    w: 'w-[320px] md:w-[420px]'
  },
  {
    id: 10,
    name: 'Pelabuhan Hub Internasional Bitung',
    sector: 'Infrastruktur',
    image: '/Images/why sulut/pelabuhan_bitung.png',
    w: 'w-[240px] md:w-[320px]'
  },
  {
    id: 11,
    name: 'Tarian Kabasaran',
    sector: 'Kebudayaan',
    image: '/Images/why sulut/tarian_kabasaran.png',
    w: 'w-[280px] md:w-[380px]'
  },
  {
    id: 12,
    name: 'Alat Musik Kolintang',
    sector: 'Kebudayaan',
    image: '/Images/why sulut/kolintang.png',
    w: 'w-[260px] md:w-[410px]'
  },
  {
    id: 13,
    name: 'Tarian Maengket',
    sector: 'Kebudayaan',
    image: '/Images/why sulut/tarian_maengket.png',
    w: 'w-[280px] md:w-[360px]'
  },
  {
    id: 14,
    name: 'Waruga Minahasa',
    sector: 'Kebudayaan',
    image: '/Images/why sulut/waruga_minahasa.png',
    w: 'w-[260px] md:w-[440px]'
  },
  {
    id: 15,
    name: 'Arsitektur Rumah Adat Wale',
    sector: 'Kebudayaan',
    image: '/Images/why sulut/rumah_adat_wale.png',
    w: 'w-[260px] md:w-[380px]'
  }
];

const ProjectCard = ({ project, idx }: { project: typeof topProjects[0], idx: number }) => {
  const [imgSrc, setImgSrc] = React.useState(project.image);

  return (
    <motion.div
      className={cn(
        "flex-none h-[220px] md:h-[250px] relative group",
        project.w
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
      whileHover={{ scale: 1.05, y: -8, zIndex: 50 }}
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
  </motion.div>
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
            className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-5xl mb-6 mx-auto"
          >
            Terletak di jantung kawasan BIMP-EAGA dan Cincin Pasifik, Sulawesi Utara adalah pintu gerbang strategis menuju pasar Asia Timur dan Pasifik. Dengan tiga Kawasan Ekonomi Khusus aktif, pertumbuhan ekonomi di atas rata-rata nasional, dan kekayaan alam yang belum tersentuh — inilah provinsi yang menawarkan imbal hasil nyata bagi investor yang tepat.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
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
      <div className="marquee-container flex overflow-hidden pt-6 pb-3 -mt-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...topProjects, ...topProjects].map((project, idx) => (
            <ProjectCard key={`top-${project.id}-${idx}`} project={project} idx={idx} />
          ))}
        </div>
      </div>

      {/* Bottom Carousel (RTL Animation) */}
      <div className="marquee-container flex overflow-hidden pt-3 pb-6">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...bottomProjects, ...bottomProjects].map((project, idx) => (
            <ProjectCard key={`bottom-${project.id}-${idx}`} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
