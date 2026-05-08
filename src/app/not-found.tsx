import Link from 'next/link';
import { MoveLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-blue-50 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
          <Search className="w-16 h-16 text-blue-600" />
        </div>
      </div>
      
      <h1 className="text-8xl font-black text-slate-200 mb-2">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-slate-600 max-w-md mb-10 leading-relaxed">
        Maaf, halaman yang Anda cari mungkin telah dipindahkan atau sudah tidak tersedia. 
        Mari kembali ke jalur investasi yang tepat.
      </p>
      
      <Link 
        href="/" 
        className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all hover:gap-4 shadow-lg shadow-blue-600/20"
      >
        <MoveLeft className="w-5 h-5" />
        Kembali ke Beranda
      </Link>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale pointer-events-none">
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Infrastructure</div>
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Tourism</div>
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Agriculture</div>
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Energy</div>
      </div>
    </div>
  );
}
