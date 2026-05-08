'use client';

import React from 'react';
import { 
  Globe, 
  MapPin as MapIcon, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Play, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Total Area', value: '14,500 km²', icon: <MapIcon className="w-6 h-6" /> },
  { label: 'Export Share', value: '72.4%', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Strategic Ports', value: '3', icon: <Globe className="w-6 h-6" /> },
];

export default function WhyNorthSulawesiPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Award className="w-4 h-4" /> Economic Performance 2025
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
            The Gateway to <span className="text-blue-600">East Asia</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Positioned at the crossroads of international trade lanes, North Sulawesi offers a unique combination of strategic location, rich resources, and a robust investment climate.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border-none shadow-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden group">
              <div className="h-1.5 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <CardContent className="p-8 flex items-center gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                   {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Sections */}
        <div className="flex flex-col gap-32">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
               <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-tight">Strategic Hub for <span className="text-blue-600">International Trade</span></h2>
               <div className="flex flex-col gap-8">
                  <div className="flex gap-6">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl h-fit"><Zap className="w-6 h-6 text-blue-600" /></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Proximity to East Asia</h4>
                      <p className="text-slate-500 leading-relaxed">Direct access to major markets in Japan, China, South Korea, and Taiwan, reducing logistics costs by up to 30% compared to other regions.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl h-fit"><ShieldCheck className="w-6 h-6 text-blue-600" /></div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Stable Economic Growth</h4>
                      <p className="text-slate-500 leading-relaxed">North Sulawesi consistently performs above the national average with a 5.62% GRDP growth rate in Q1 2025.</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
               <NextImage src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=2070&auto=format&fit=crop" alt="Port of Bitung" fill className="object-cover" />
               <div className="absolute inset-0 bg-blue-900/20" />
            </div>
          </section>

          <section className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -rotate-12 translate-x-1/2" />
            <div className="max-w-3xl relative z-10">
               <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">Ready to explore <br /> strategic opportunities?</h2>
               <div className="flex flex-wrap gap-6 relative z-10">
                 <Link 
                   href="/investment/projects" 
                   className={cn(
                     buttonVariants({ size: "lg" }),
                     "rounded-full px-10 h-16 bg-blue-600 hover:bg-blue-700 text-lg font-bold flex items-center justify-center text-white"
                   )}
                 >
                   Browse Investment Projects
                 </Link>
                 <Link 
                   href="/investment/economic-data" 
                   className={cn(
                     buttonVariants({ size: "lg", variant: "outline" }),
                     "rounded-full px-10 h-16 border-white/20 text-white hover:bg-white/5 text-lg font-bold flex items-center justify-center"
                   )}
                 >
                   View Economic Data
                 </Link>
               </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
