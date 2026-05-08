'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start">
            <div className="bg-[#00529C]/10 text-[#00529C] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Keunggulan Strategis
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
              Mengapa Sulawesi Utara?
            </h3>
            
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-lg mb-8">
              Terletak di jantung kawasan BIMP-EAGA dan Cincin Pasifik, Sulawesi Utara adalah pintu gerbang strategis menuju pasar Asia Timur dan Pasifik. Dengan tiga Kawasan Ekonomi Khusus aktif, pertumbuhan ekonomi di atas rata-rata nasional, dan kekayaan alam yang belum tersentuh — inilah provinsi yang menawarkan imbal hasil nyata bagi investor yang tepat.
            </p>

            {/* Ratings Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-[#00529C] text-[#00529C]" />
                <span className="font-bold text-slate-900 text-sm">Pertumbuhan 5,62% YoY</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                   <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" fill alt="Reviewer" /></div>
                   <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" fill alt="Reviewer" /></div>
                   <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" fill alt="Reviewer" /></div>
                </div>
                <span className="text-sm font-semibold text-slate-700">3 KEK Aktif</span>
              </div>
            </div>

            {/* Standardized BI Blue Button */}
            <Link 
              href="/about" 
              className="bg-[#00529C] text-white px-8 py-4 rounded-full text-[15px] font-bold flex items-center gap-3 hover:bg-[#003d73] transition-all duration-300 shadow-xl shadow-blue-900/20 w-fit group"
            >
              <span>Pelajari Lebih Lanjut</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Images and Floating Stats */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
             {/* Main Center Image */}
             <div className="relative w-[380px] h-[480px] rounded-[2rem] overflow-hidden shadow-2xl z-10">
               <Image 
                 src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop" 
                 alt="Professional Investor" 
                 fill 
                 className="object-cover"
               />
             </div>

             {/* Top Right Floating Card */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="absolute top-8 -right-4 bg-blue-50/80 backdrop-blur-xl border border-white p-6 rounded-3xl w-[240px] shadow-2xl z-20"
             >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-slate-900">3</span>
                  <span className="text-xs font-bold text-slate-600">KEK Aktif</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  KEK Likupang, KEK Bitung, dan KPBPB Manado-Bitung siap menampung investasi strategis.
                </p>
             </motion.div>

             {/* Bottom Right Floating Card */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="absolute bottom-16 -right-12 bg-[#ecfdf5]/90 backdrop-blur-xl border border-white p-6 rounded-3xl w-[260px] shadow-2xl z-20"
             >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-black text-slate-900">1st</span>
                  <span className="text-xs font-bold text-slate-600">Gateway</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  Gerbang strategis Cincin Pasifik dengan posisi terdepan untuk perdagangan Asia-Pasifik.
                </p>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

