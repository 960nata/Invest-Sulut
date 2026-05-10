'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sulutProjects = [
  {
    id: 1,
    name: 'KEK Likupang — Waterfront Tourism City',
    location: 'Minahasa Utara, SULUT',
    year: '2025',
    tags: ['PARIWISATA', 'KWS. KHUSUS'],
    image: '/Images/Sulawesi/likupang_resort_1778425988352.png',
  },
  {
    id: 2,
    name: 'Bitung Industrial Port Zone',
    location: 'Bitung, SULUT',
    year: '2024',
    tags: ['LOGISTIK', 'PELABUHAN'],
    image: '/Images/Sulawesi/bitung_port_1778426013679.png',
  },
  {
    id: 3,
    name: 'Logistics Gateway North Sulawesi',
    location: 'Manado, SULUT',
    year: '2026',
    tags: ['INFRASTRUKTUR', 'STRATEGIS'],
    image: 'https://images.unsplash.com/photo-1541888086225-ee82fb612ca4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Geothermal Energy Lahendong',
    location: 'Tomohon, SULUT',
    year: '2025',
    tags: ['ENERGI', 'TERBARUKAN'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Likupang Eco-Resort Development',
    location: 'Likupang, SULUT',
    year: '2026',
    tags: ['PARIWISATA', 'RESORT'],
    image: '/Images/Sulawesi/likupang_resort_1778425988352.png',
  },
  {
    id: 6,
    name: 'Agro-Industrial Processing Zone',
    location: 'Minahasa Selatan, SULUT',
    year: '2024',
    tags: ['PERTANIAN', 'INDUSTRI'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop',
  }
];const ProjectCard = ({ project, idx }: { project: typeof sulutProjects[0], idx: number }) => {
  const [imgSrc, setImgSrc] = React.useState(project.image);

  return (
    <div className={cn(
      "w-full transition-transform duration-500",
      idx % 2 === 0 ? "-translate-y-8" : "translate-y-8"
    )}>
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
    </div>
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
    <section className="relative w-full bg-[#fdfdfd] pt-24 pb-48 overflow-hidden font-sans border-t border-slate-100">
      
      {/* Background Watermark Text */}
      <div className="absolute bottom-[-40px] left-0 w-full text-center overflow-hidden pointer-events-none z-0">
        <h1 className="text-[12rem] md:text-[20rem] font-black text-slate-100/60 tracking-tighter leading-none select-none uppercase">
          Investasi
        </h1>
      </div>

      <div className="relative z-10">
        
        {/* Header with Arrows on Right */}
        <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight mb-5 leading-[1.1]">
              Peluang <span className="text-[#00529C]">Investasi Yang</span> <br />
              Mendefinisikan Masa Depan
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Katalog proyek kami menampilkan berbagai peluang, dari infrastruktur strategis fungsional hingga kawasan pariwisata terpadu kelas dunia.
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
          <div className="flex pt-10 pb-20">
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

