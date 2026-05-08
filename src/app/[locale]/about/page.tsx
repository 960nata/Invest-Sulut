'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  History, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const team = [
  { name: "Syaloom Korompis", title: "Head of Investment Promotion, DPMPTSP", email: "rirusulut@gmail.com", phone: "+62 811 436 060" },
  { name: "Sigit Setiawan", title: "Assistant Director, Bank Indonesia", email: "rirusulut@gmail.com", phone: "+62 878 000 101 90" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            <Globe className="w-4 h-4" /> Regional Investor Relations Unit
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            About <span className="text-blue-600">InvestSulut</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            The Forum Investasi SULUT (InvestSulut) is the official platform managed by the Regional Investor Relations Unit (RIRU) to promote North Sulawesi's economic potential.
          </p>
        </header>

        {/* Mission & Background Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          <Card className="lg:col-span-2 border-none shadow-2xl bg-slate-950 text-white rounded-[3rem] p-10 md:p-20 overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 -rotate-12 translate-x-1/2" />
             <div className="relative z-10 flex flex-col gap-8">
                <div className="bg-blue-600 p-4 rounded-3xl w-fit"><Target className="w-8 h-8" /></div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Our Mission</h2>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  To serve as a single point of truth for investors, providing high-quality economic data, strategic project pipelines, and a seamless regulatory experience in North Sulawesi.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                      <CheckCircle2 className="w-4 h-4" /> Data Transparency
                   </div>
                   <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                      <CheckCircle2 className="w-4 h-4" /> Investor Support
                   </div>
                   <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                      <CheckCircle2 className="w-4 h-4" /> Regional Synergy
                   </div>
                </div>
             </div>
          </Card>

          <Card className="border-none shadow-xl bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col gap-6">
             <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl w-fit text-blue-600 shadow-sm"><History className="w-8 h-8" /></div>
             <h3 className="text-2xl font-bold">The Synergy</h3>
             <p className="text-slate-500 leading-relaxed">
               InvestSulut represents the strategic synergy between **Bank Indonesia**, the **Provincial Government of North Sulawesi**, and **DPMPTSP**.
             </p>
             <p className="text-slate-500 leading-relaxed">
               Together, we work to ensure monetary stability and a robust climate for sustainable investment.
             </p>
          </Card>
        </section>

        {/* Partners Logo strip reused or similar */}
        
        {/* Contact / Team Section */}
        <section>
          <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold tracking-tight mb-4">Key <span className="text-blue-600">Institutional Contacts</span></h2>
             <p className="text-slate-500 text-lg">Our dedicated team is ready to guide you through your investment journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl bg-white dark:bg-slate-900 p-8 rounded-3xl group hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800">
                   <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                         <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-blue-600"><Users className="w-6 h-6" /></div>
                         <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">{member.title}</div>
                         </div>
                      </div>
                      <div className="flex flex-col gap-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                         <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors text-sm">
                            <Mail className="w-4 h-4 text-blue-600" /> {member.email}
                         </a>
                         <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors text-sm">
                            <Phone className="w-4 h-4 text-blue-600" /> {member.phone}
                         </a>
                      </div>
                      <Button className="rounded-xl h-12 font-bold bg-slate-950 hover:bg-slate-800 text-white">
                         Book a Consultation
                      </Button>
                   </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Footer Teaser */}
        <div className="mt-32 text-center py-20 bg-slate-50 dark:bg-slate-900/30 rounded-[4rem]">
           <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Official Partners</p>
           <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
              <div className="font-black text-2xl">BANK INDONESIA</div>
              <div className="font-black text-2xl">PEMPROV SULUT</div>
              <div className="font-black text-2xl">DPMPTSP</div>
           </div>
        </div>
      </div>
    </main>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
