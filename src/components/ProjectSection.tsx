'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sulutProjects = [
  {
    id: 1,
    name: 'KEK Likupang',
    location: 'Minahasa Utara, SULUT',
    year: '2025',
    tags: ['PARIWISATA', 'EKOWISATA'],
    image: '/Images/why sulut/kek_likupang.avif',
  },
  {
    id: 2,
    name: 'Taman Nasional Bunaken',
    location: 'Manado, SULUT',
    year: '2025',
    tags: ['PARIWISATA', 'KONSERVASI'],
    image: '/Images/Project/bunaken_reef.avif',
  },
  {
    id: 3,
    name: 'Jalan Tol Manado-Bitung',
    location: 'Manado-Bitung, SULUT',
    year: '2025',
    tags: ['INFRASTRUKTUR', 'KONEKTIVITAS'],
    image: '/Images/Project/jalan_tol_manado_bitung.avif',
  },
  {
    id: 4,
    name: 'Perluasan Bandara Sam Ratulangi',
    location: 'Manado, SULUT',
    year: '2025',
    tags: ['INFRASTRUKTUR', 'TRANSPORTASI'],
    image: '/Images/why sulut/bandara_sam_ratulangi.avif',
  },
  {
    id: 5,
    name: 'Pelabuhan Hub Internasional Bitung',
    location: 'Bitung, SULUT',
    year: '2025',
    tags: ['LOGISTIK', 'MARITIM'],
    image: '/Images/Project/pelabuhan_bitung.avif',
  },
  {
    id: 6,
    name: 'Bendungan Kuwil Kawangkoan',
    location: 'Minahasa Utara, SULUT',
    year: '2025',
    tags: ['INFRASTRUKTUR', 'AIR'],
    image: '/Images/Project/bendungan_kuwil_kawangkoan.avif',
  },
  {
    id: 7,
    name: 'PLTP Lahendong (Geothermal)',
    location: 'Tomohon, SULUT',
    year: '2025',
    tags: ['ENERGI', 'TERBARUKAN'],
    image: '/Images/why sulut/manado_skyline.avif',
  },
  {
    id: 8,
    name: 'PLTS Likupang',
    location: 'Likupang, SULUT',
    year: '2025',
    tags: ['ENERGI', 'SURYA'],
    image: '/Images/why sulut/selat_lembeh.avif',
  },
  {
    id: 9,
    name: 'PLTA Sulawesi Utara',
    location: 'SULUT',
    year: '2025',
    tags: ['ENERGI', 'AIR'],
    image: '/Images/why sulut/bendungan_lolak.avif',
  },
  {
    id: 10,
    name: 'Kawasan Padi Lolak',
    location: 'Bolaang Mongondow, SULUT',
    year: '2025',
    tags: ['PERTANIAN', 'PANGAN'],
    image: '/Images/why sulut/tomohon_flower.avif',
  },
  {
    id: 11,
    name: 'Sentra Perkebunan Kelapa',
    location: 'Minahasa, SULUT',
    year: '2025',
    tags: ['PERKEBUNAN', 'EKSPOR'],
    image: '/Images/why sulut/rumah_adat_wale.avif',
  },
  {
    id: 12,
    name: 'Perkebunan Cengkih & Pala',
    location: 'SULUT',
    year: '2025',
    tags: ['PERKEBUNAN', 'REMPAH'],
    image: '/Images/why sulut/kolintang.avif',
  },
  {
    id: 13,
    name: 'Agrowisata Tomohon',
    location: 'Tomohon, SULUT',
    year: '2025',
    tags: ['AGROWISATA', 'HORTIKULTURA'],
    image: '/Images/why sulut/tarian_maengket.avif',
  },
  {
    id: 14,
    name: 'Peternakan Modern Bolmong',
    location: 'Bolaang Mongondow, SULUT',
    year: '2025',
    tags: ['PETERNAKAN', 'PANGAN'],
    image: '/Images/why sulut/tarian_kabasaran.avif',
  },
  {
    id: 15,
    name: 'Jembatan Pulau Lembeh',
    location: 'Bitung, SULUT',
    year: '2025',
    tags: ['INFRASTRUKTUR', 'PARIWISATA'],
    image: '/Images/why sulut/waruga_minahasa.avif',
  }
];const ProjectCard = ({ project, idx }: { project: typeof sulutProjects[0], idx: number }) => {
  const [imgSrc, setImgSrc] = React.useState(project.image);

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: idx % 2 === 0 ? 0 : 64 }}
      whileInView={{ opacity: 1, y: idx % 2 === 0 ? -32 : 32 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link 
        href={`/investment/projects/${project.id}`}
        className="flex flex-col group cursor-pointer"
      >
        {/* Image Box */}
        <div className="relative w-full h-[350px] md:h-[380px] rounded-xl overflow-hidden bg-slate-100 shadow-sm">
          <Image
            src={imgSrc}
            alt={project.name}
            fill
            unoptimized
            onError={() => setImgSrc('https://images.unsplash.com/photo-1506744038136-46273834b3fb')}
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-20">
            {project.tags.map((tag, i) => (
              <div key={i} className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90 text-[8px] font-semibold tracking-wider uppercase">
                {tag}
              </div>
            ))}
          </div>

          {/* Hover Action Circle */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-[70px] h-[70px] rounded-full bg-[#00529C]/90 backdrop-blur-sm flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500 ease-out shadow-xl">
              <span className="text-[13px] font-medium tracking-wide">View</span>
            </div>
          </div>
        </div>

        {/* Text Below Image */}
        <div className="flex flex-col px-1 mt-4">
          <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#00529C] transition-colors">
            {project.name}
          </h3>
          <div className="items-center gap-2 mt-1 hidden md:flex">
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{project.location}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ProjectSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Duplicate for smoother infinite loop
  const displayProjects = [...sulutProjects, ...sulutProjects, ...sulutProjects];

  return (
    <section className="relative w-full bg-[#fdfdfd] pt-12 md:pt-24 pb-20 md:pb-48 overflow-hidden font-sans border-t border-slate-100">
      
      {/* Background Watermark Text */}
      <div className="absolute bottom-[-20px] md:bottom-[-40px] left-0 w-full text-center overflow-hidden pointer-events-none z-0">
        <h1 className="text-[6rem] md:text-[20rem] font-black text-slate-100/60 tracking-tighter leading-none select-none uppercase">
          Investasi
        </h1>
      </div>

      <div className="relative z-10">
        
        {/* Header with Arrows on Right */}
        <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight mb-5 leading-[1.1]">
              Proyek Investasi Unggulan
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Pilihan proyek di berbagai sektor strategis
            </p>
          </div>
          
          {/* Custom Arrows */}
          <div className="flex gap-4 relative z-30">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#00529C] hover:text-[#00529C] hover:bg-blue-50 transition-all duration-300 shadow-sm bg-white"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#00529C] hover:text-[#00529C] hover:bg-blue-50 transition-all duration-300 shadow-sm bg-white"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
 
        {/* Embla Carousel Viewport - Full Width for Peek Effect */}
        <div className="relative w-full overflow-hidden" ref={emblaRef}>
          <div className="flex pt-10 md:pt-10 pb-10 md:pb-20">
            {displayProjects.map((project, idx) => (
              <div 
                key={`${project.id}-${idx}`} 
                className="flex-[0_0_65%] md:flex-[0_0_16.6%] min-w-0 px-3"
              >
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

