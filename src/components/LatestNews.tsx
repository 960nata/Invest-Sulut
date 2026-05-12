'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const newsItems = [
  {
    id: 1,
    title: "Realisasi Investasi Sulut Q1 2025 Capai Rp3,08 Triliun",
    date: "15 April 2025",
    category: "PRESS RELEASE",
    isFeatured: true,
    image: "/Images/News/investasi_q1_2025.avif"
  },
  {
    id: 2,
    title: "KEK Likupang Masuk 5 Destinasi Super Prioritas Nasional",
    date: "10 April 2025",
    category: "NEWS",
    isFeatured: false,
    image: "/Images/News/kek_likupang_destinasi.avif"
  },
  {
    id: 3,
    title: "Ekspor Sulawesi Utara Tumbuh 63% di Kuartal Pertama 2025",
    date: "5 April 2025",
    category: "NEWS",
    isFeatured: false,
    image: "/Images/News/ekspor_sulut_2025.avif"
  },
  {
    id: 4,
    title: "Pemerintah Provinsi Percepat Pembangunan Infrastruktur Pariwisata",
    date: "2 April 2025",
    category: "UPDATE",
    isFeatured: false,
    image: "/Images/News/infrastruktur_pariwisata.avif"
  }
];

export default function LatestNews() {
  const featuredNews = newsItems.find(item => item.isFeatured);
  const otherNews = newsItems.filter(item => !item.isFeatured);

  return (
    <section className="relative py-32 bg-white overflow-hidden font-sans border-t border-slate-100">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Standardized Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Berita & Informasi Terbaru
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Pantau perkembangan investasi, kebijakan ekonomi, dan peluang strategis terkini di Sulawesi Utara.
            </p>
          </div>
          
          <Link 
            href="/news" 
            className="bg-[#00529C] text-white px-8 py-4 rounded-full text-[15px] font-bold flex items-center gap-3 hover:bg-white hover:text-[#00529C] border border-transparent hover:border-[#00529C] transition-all duration-300 shadow-xl shadow-blue-900/20 group"
          >
            <span>Lihat Semua Berita</span> <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column - Featured News Card */}
          <div className="lg:col-span-7">
            {featuredNews && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link 
                  href={`/news/${featuredNews.id}`} 
                  className="group block relative h-[360px] md:h-[464px] rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:border-[#00529C] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
                >
                  <Image 
                    src={featuredNews.image} 
                    alt={featuredNews.title} 
                    fill 
                    className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/90 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="bg-[#00529C] text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                        {featuredNews.category}
                      </span>
                      <span className="text-white/70 text-xs font-medium tracking-wide">
                        {featuredNews.date}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors tracking-tight">
                      {featuredNews.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right Column - News List items with refined style */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {otherNews.map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link 
                  href={`/news/${news.id}`} 
                  className={cn(
                    "flex gap-6 group transition-all p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-sm",
                    idx !== otherNews.length - 1 ? "border-b-slate-100" : ""
                  )}
                >
                  <div className="relative w-28 h-20 md:w-40 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm">
                    <Image 
                      src={news.image} 
                      alt={news.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-[#00529C] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-widest">
                        {news.category}
                      </span>
                      <span className="text-slate-400 text-[11px] font-medium">
                        {news.date}
                      </span>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#00529C] transition-colors line-clamp-2 tracking-tight">
                      {news.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


