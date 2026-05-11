'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Text & Info */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-[#00529C] text-xs font-bold uppercase tracking-widest">Download Center</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1] mt-2 mb-6">
                Unduh Buku Presentasi Investasi Sulawesi Utara
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-xl">
                Data investasi, proyek unggulan, dan peluang strategis — tersedia dalam satu dokumen komprehensif.
              </p>
            </div>

            {/* Features/Stats in Presentation Book */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                <div className="text-[#00529C] font-bold text-xl mb-1">50+</div>
                <div className="text-xs text-slate-500 font-medium">Halaman Data</div>
              </div>
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                <div className="text-[#00529C] font-bold text-xl mb-1">Q1 2025</div>
                <div className="text-xs text-slate-500 font-medium">Data Terkini</div>
              </div>
            </div>
          </div>

          {/* Right Column - Download Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#001A33] text-white p-8 md:p-10 rounded-3xl relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00529C]/20 blur-3xl rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Presentation Book</h3>
                  <p className="text-blue-200 text-sm">Versi Bahasa Indonesia & English</p>
                </div>

                <Link 
                  href="/investment/presentation-book" 
                  className="w-full bg-[#00529C] hover:bg-[#003d73] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-black/20"
                >
                  <span>Lihat Semua Buku Presentasi</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <p className="text-white/50 text-[11px] mt-2">
                  Format PDF · Ukuran File ~15MB
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
