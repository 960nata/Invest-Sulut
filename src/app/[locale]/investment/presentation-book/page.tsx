'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Calendar, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const editions = [
  {
    edition: "Q2 2025 Edition",
    title: "Regional Investment Potential",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1544383335-c54996b2742d?q=80&w=2070&auto=format&fit=crop",
    isLatest: true,
    file_en: "#",
    file_id: "#"
  },
  {
    edition: "Q1 2025 Edition",
    title: "Economic Outlook & Recovery",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    isLatest: false,
    file_en: "#",
    file_id: "#"
  },
  {
    edition: "Annual 2024",
    title: "The Blue Economy Decade",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    isLatest: false,
    file_en: "#",
    file_id: "#"
  },
];

export default function PresentationBookPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Presentation <span className="text-blue-600">Books</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Comprehensive guides to North Sulawesi's investment landscape, economic indicators, and strategic project pipelines. Available in English and Indonesian.
            </p>
          </div>
          <div className="bg-blue-600 text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-xl shadow-blue-600/20">
             <div className="bg-white/10 p-3 rounded-xl"><FileText className="w-6 h-6" /></div>
             <div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200">Total Downloads</div>
                <div className="text-2xl font-black">12,400+</div>
             </div>
          </div>
        </header>

        {/* Featured Latest Edition */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[500px]"
          >
            <div className="w-full lg:w-2/5 relative h-80 lg:h-auto">
              <Image src={editions[0].image} alt="Featured" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-blue-600/20" />
              <Badge className="absolute top-8 left-8 bg-blue-600 px-6 py-2 text-sm font-bold uppercase tracking-widest border-none">Latest Edition</Badge>
            </div>
            <div className="flex-1 p-10 md:p-20 flex flex-col justify-center gap-8">
               <div className="flex flex-col gap-4">
                  <div className="text-blue-400 font-bold text-lg uppercase tracking-widest">{editions[0].edition}</div>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">{editions[0].title}</h2>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                    Discover detailed insights on GRDP growth, sectoral realization, and pre-feasibility studies for 42+ active projects in North Sulawesi.
                  </p>
               </div>
               
               <div className="flex flex-wrap gap-4">
                 <Button size="lg" className="rounded-full h-14 px-10 bg-white text-slate-950 hover:bg-slate-200 font-bold text-lg">
                   <Download className="w-5 h-5 mr-3" /> Download English (PDF)
                 </Button>
                 <Button size="lg" variant="outline" className="rounded-full h-14 px-10 border-white/20 text-white hover:bg-white/5 font-bold text-lg">
                   <Download className="w-5 h-5 mr-3" /> Bahasa Indonesia
                 </Button>
                 <Button size="lg" variant="ghost" className="rounded-full h-14 px-10 text-blue-400 hover:text-blue-300 font-bold">
                   <Eye className="w-5 h-5 mr-3" /> Online Preview
                 </Button>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Archive Grid */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-12 flex items-center gap-3">
             <Calendar className="text-blue-600 w-6 h-6" />
             Previous Editions & Archive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editions.slice(1).map((ed, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl overflow-hidden bg-slate-50 dark:bg-slate-900 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={ed.image} alt={ed.edition} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">{ed.edition}</div>
                    <CardTitle className="text-2xl font-black">{ed.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 flex flex-col gap-6">
                    <p className="text-sm text-slate-500 line-clamp-2">The complete dataset for {ed.edition}, including export commodity shifts and infrastructure development reports.</p>
                    <div className="flex gap-2">
                       <Button size="sm" variant="outline" className="flex-1 rounded-xl font-bold border-slate-200">
                         EN
                       </Button>
                       <Button size="sm" variant="outline" className="flex-1 rounded-xl font-bold border-slate-200">
                         ID
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* Request more editions placeholder */}
            <Card className="border-2 border-dashed border-slate-200 dark:border-slate-800 bg-transparent p-8 flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
               <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-full"><FileText className="w-10 h-10 text-slate-300" /></div>
               <h4 className="font-bold text-xl text-slate-400">Looking for older data?</h4>
               <p className="text-sm text-slate-400 max-w-xs">Our archives date back to 2018. Contact us for specific historical economic reports.</p>
               <Button variant="link" className="text-blue-600 font-bold">Request Archives →</Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
