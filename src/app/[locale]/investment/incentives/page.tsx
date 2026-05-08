'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShieldCheck, 
  Coins, 
  Building2, 
  Landmark, 
  ArrowRight,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const incentiveTypes = [
  {
    title: "Tax Holiday",
    desc: "Up to 100% reduction of Corporate Income Tax (CIT) for pioneer industries.",
    period: "5–20 Years",
    icon: <Coins className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Tax Allowance",
    desc: "30% reduction of net income for 6 years for specific sectors and regions.",
    period: "6 Years",
    icon: <Landmark className="w-8 h-8 text-blue-600" />
  },
  {
    title: "KEK Incentives",
    desc: "Special fiscal benefits for projects located within Special Economic Zones.",
    period: "Ongoing",
    icon: <Building2 className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Import Duties",
    desc: "Exemption of import duties on machinery, equipment, and raw materials.",
    period: "2 Years",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  }
];

export default function IncentivesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <Badge className="bg-blue-600 mb-6 px-4 py-1.5 text-xs font-bold uppercase tracking-widest border-none">Fiscal & Non-Fiscal</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Investment <span className="text-blue-600">Incentives</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Maximize your ROI with Indonesia's attractive incentive schemes. From long-term tax holidays to import duty exemptions, we support your growth at every stage.
              </p>
            </div>
            <div className="flex-shrink-0">
               <Card className="border-none shadow-2xl bg-slate-950 text-white p-8 rounded-[2.5rem] flex flex-col gap-4">
                  <div className="text-blue-400 font-black text-3xl italic">"Highly Competitive"</div>
                  <div className="text-sm text-slate-400">Regional Incentive Comparison 2025</div>
                  <Button variant="link" className="p-0 h-auto text-white font-bold hover:no-underline flex items-center gap-2">
                    View Comparison Report <ArrowRight className="w-4 h-4" />
                  </Button>
               </Card>
            </div>
          </div>
        </header>

        {/* Incentive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {incentiveTypes.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl bg-slate-50 dark:bg-slate-900 overflow-hidden group hover:bg-blue-600 transition-all duration-500">
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{type.title}</h3>
                    <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors leading-relaxed">{type.desc}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 group-hover:border-blue-500 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 group-hover:text-blue-200 uppercase tracking-widest">Period</span>
                    <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-white">{type.period}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section / Detailed Matrix */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
             <ShieldCheck className="text-blue-600 w-8 h-8" />
             Fiscal Incentives Overview
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: "Corporate Income Tax (CIT) Reduction", desc: "Available for pioneer industries with investments over IDR 500 Billion." },
                { title: "Net Income Deduction", desc: "30% reduction for 6 years (5% annually) on investment value." },
                { title: "Loss Carry-Forward", desc: "Extension of loss carry-forward up to 10 years for specific regions." },
                { title: "Dividend Tax Exemption", desc: "Tax-free dividends if reinvested within Indonesia for 3 years." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1554224155-169641357599?q=80&w=2070&auto=format&fit=crop" alt="Finance" fill className="object-cover" />
               <div className="absolute inset-0 bg-blue-600/20" />
               <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-2">Non-Fiscal Incentives</h4>
                  <p className="text-sm text-slate-600 mb-4">Dedicated support for land acquisition, labor supply assistance, and simplified immigration for foreign expertise.</p>
                  <Link 
                    href="/investment/procedure" 
                    className={cn(
                      buttonVariants({ variant: "default" }), 
                      "rounded-full bg-blue-600 hover:bg-blue-700 font-bold px-8 flex items-center justify-center text-white"
                    )}
                  >
                    Explore Non-Fiscal Benefits
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-16 md:p-24 flex flex-col items-center gap-8">
           <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Do you qualify for <br /> these incentives?</h2>
           <p className="text-slate-500 max-w-xl text-lg">Contact our Investment Promotion Board for a personalized assessment of your eligibility and estimated fiscal benefits.</p>
           <Link 
             href="/contact" 
             className={cn(
               buttonVariants({ size: "lg" }), 
               "rounded-full h-16 px-12 bg-blue-600 hover:bg-blue-700 font-bold text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center text-white"
             )}
           >
             Check Eligibility Now
           </Link>
        </div>
      </div>
    </main>
  );
}
