'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 px-6 bg-[#001A33] text-slate-400 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
           <div className="relative h-10 w-40 mb-4">
             <Image 
               src="/logo_riru.avif" 
               alt="Logo" 
               fill
               className="object-contain brightness-0 invert"
             />
           </div>
           <p className="max-w-md text-lg leading-relaxed text-slate-300 font-medium">
             Portal Investasi Resmi Sulawesi Utara. Gerbang strategis menuju pasar Asia Timur and Pasifik.
           </p>
           <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer">
                 <FacebookIcon className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer">
                 <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all cursor-pointer">
                 <TwitterIcon className="w-5 h-5" />
              </div>
           </div>
        </div>
        
        <div>
          <h5 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Platform</h5>
          <ul className="flex flex-col gap-5 text-sm font-bold">
            <li><Link href="/investment/projects" className="hover:text-white transition-colors">Investment Projects</Link></li>
            <li><Link href="/investment/map" className="hover:text-white transition-colors">Interactive Map</Link></li>
            <li><Link href="/investment/economic-data" className="hover:text-white transition-colors">Economic Dashboard</Link></li>
            <li><Link href="/investment/presentation-book" className="hover:text-white transition-colors">Presentation Book</Link></li>
            <li><Link href="/investment/procedure" className="hover:text-white transition-colors">Regulations</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Contact</h5>
          <ul className="flex flex-col gap-8 text-sm">
            <li className="flex items-start gap-4">
               <div className="bg-blue-900/50 p-2.5 rounded-xl"><Mail className="w-5 h-5 text-blue-400" /></div>
               <div className="flex flex-col gap-1">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">Email</span>
                  <span className="font-bold text-slate-300">rirusulut@gmail.com</span>
               </div>
            </li>
            <li className="flex items-start gap-4">
               <div className="bg-blue-900/50 p-2.5 rounded-xl"><Phone className="w-5 h-5 text-blue-400" /></div>
               <div className="flex flex-col gap-1">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">Hubungi Kami</span>
                  <span className="font-bold text-slate-300 text-xs">+62811436060 (Syaloom)</span>
                  <span className="font-bold text-slate-300 text-xs">+6287800010190 (Sigit)</span>
               </div>
            </li>
            <li className="flex items-start gap-4">
               <div className="bg-blue-900/50 p-2.5 rounded-xl"><MapPin className="w-5 h-5 text-blue-400" /></div>
               <div className="flex flex-col gap-1">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">Office</span>
                  <span className="font-bold text-slate-300">Bank Indonesia North Sulawesi, Manado</span>
               </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-blue-900">
        <div className="flex gap-10">
           <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
           <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <div className="text-slate-500">
          © 2026 Forum Investasi SULUT. Powered by <a href="https://vortalabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-[#00529C] font-bold">vortalabs.com</a>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  )
}

function InstagramIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  )
}

function TwitterIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
}
