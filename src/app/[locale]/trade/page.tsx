'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Globe, 
  Package, 
  ShoppingBag, 
  ArrowRight,
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const commodities = [
  { name: "Animal/Veg Fats & Oils", share: "72.41%", value: "USD 202.02M", icon: <TrendingUp /> },
  { name: "Fish & Crustaceans", share: "7.40%", value: "USD 20.66M", icon: <Package /> },
  { name: "Seafood Preparation", share: "5.67%", value: "USD 15.82M", icon: <ShoppingBag /> },
  { name: "Chemical Products", share: "3.84%", value: "USD 10.70M", icon: <CheckCircle2 /> },
];

const smes = [
  { name: "Narasi Vanilla", category: "Plantation", image: "https://images.unsplash.com/photo-1596720426673-e4774457fd69?q=80&w=2070&auto=format&fit=crop" },
  { name: "Pieto Coffee", category: "Coffee", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Wale Gonofu Craft", category: "Craft", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop" },
  { name: "Zabay Batik", category: "Fashion", image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1974&auto=format&fit=crop" },
];

export default function TradePage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Global <span className="text-blue-600">Trade Hub</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              North Sulawesi stands as a vital trade engine for Indonesia, boasting a strong surplus and high-demand commodities that reach markets from East Asia to Europe.
            </p>
          </div>
        </header>

        {/* Stats Strip */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <Card className="border-none shadow-xl bg-blue-600 text-white p-8 rounded-3xl">
              <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Total Export (Q1 2025)</div>
              <div className="text-4xl font-black mb-1">USD 279M</div>
              <div className="text-xs font-bold text-blue-200">+63.04% YoY Growth</div>
           </Card>
           <Card className="border-none shadow-xl bg-slate-900 text-white p-8 rounded-3xl">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Trade Surplus</div>
              <div className="text-4xl font-black mb-1">USD 273M</div>
              <div className="text-xs font-bold text-green-400">Consistent Performance</div>
           </Card>
           <Card className="border-none shadow-xl bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Export Markets</div>
              <div className="text-4xl font-black mb-1">42+</div>
              <div className="text-xs font-bold text-blue-600">Countries Worldwide</div>
           </Card>
           <Card className="border-none shadow-xl bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Active UMKM</div>
              <div className="text-4xl font-black mb-1">1,200+</div>
              <div className="text-xs font-bold text-blue-600">Export-Ready SMEs</div>
           </Card>
        </section>

        {/* Top Commodities */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
             <Package className="text-blue-600 w-8 h-8" />
             Strategic Commodities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commodities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg bg-slate-50 dark:bg-slate-900/50 p-8 group hover:bg-blue-600 transition-all duration-500">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl w-fit mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{c.name}</h4>
                  <div className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-white mb-1">{c.share}</div>
                  <div className="text-xs font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest">Share of Export</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* UMKM Showcase */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div className="max-w-xl">
               <h2 className="text-4xl font-extrabold tracking-tight mb-4">Export-Ready <span className="text-blue-600">SMEs</span></h2>
               <p className="text-slate-500 text-lg">Supporting local businesses in scaling their operations for the global market. Explore our curated list of high-quality local products.</p>
            </div>
            <div className="relative w-full md:w-96">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
               <Input 
                placeholder="Search SMEs or products..." 
                className="pl-12 h-14 rounded-2xl border-none shadow-xl bg-slate-50 dark:bg-slate-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
               />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smes.map((sme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl overflow-hidden bg-white dark:bg-slate-900 group">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={sme.image} alt={sme.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 border-none">{sme.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">{sme.name}</h4>
                    <Button variant="outline" className="w-full rounded-xl font-bold border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* CTA for UMKM */}
            <Card className="border-2 border-dashed border-blue-200 bg-blue-50/30 p-8 flex flex-col items-center justify-center text-center gap-6 min-h-[300px] rounded-3xl">
               <div className="bg-blue-100 p-6 rounded-full"><Package className="w-10 h-10 text-blue-600" /></div>
               <h4 className="font-bold text-xl">Are you an SME?</h4>
               <p className="text-sm text-slate-500">Register your business to join the InvestSulut export-ready program.</p>
               <Button className="rounded-full bg-blue-600 hover:bg-blue-700 font-bold px-8 shadow-lg shadow-blue-600/20">
                 Apply for Curator
               </Button>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
