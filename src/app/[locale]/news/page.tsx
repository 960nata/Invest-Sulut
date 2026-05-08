'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  Search, 
  ArrowRight,
  Filter,
  Megaphone,
  Tag
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const categories = ["All", "News", "Event", "Press Release", "Annual Event"];

const newsItems = [
  {
    id: 1,
    title: "North Sulawesi Summit 2025: Strategic Partnership Announcements",
    date: "May 20, 2025",
    category: "Event",
    image: "https://images.unsplash.com/photo-1540575861501-7ad060e39fe6?q=80&w=2070&auto=format&fit=crop",
    summary: "The annual summit brought together global investors and regional leaders to discuss sustainable maritime development."
  },
  {
    id: 2,
    title: "Export Value Surge: Blue Economy Commodities Lead the Way",
    date: "April 15, 2025",
    category: "News",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    summary: "North Sulawesi recorded a 63% YoY increase in export values, primarily driven by animal fats and oils."
  },
  {
    id: 3,
    title: "New Incentives for Renewable Energy Investors in Likupang",
    date: "March 28, 2025",
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    summary: "The Ministry of Investment has announced special tax holidays for solar and geothermal projects in the region."
  }
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                News & <span className="text-blue-600">Events</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Stay up to date with the latest economic updates, regional announcements, and flagship investment summits in North Sulawesi.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input placeholder="Search articles..." className="pl-12 h-14 rounded-2xl border-none shadow-xl bg-slate-50 dark:bg-slate-900" />
            </div>
          </div>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <Button 
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-8 h-12 font-bold transition-all ${activeCategory === cat ? 'bg-blue-600 shadow-lg shadow-blue-600/20' : 'border-slate-200'}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Featured Card */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer"
          >
            <Image src={newsItems[0].image} alt="Featured" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col gap-6">
               <div className="flex gap-2">
                 <Badge className="bg-blue-600 border-none px-4 py-1">Featured</Badge>
                 <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md px-4 py-1">{newsItems[0].category}</Badge>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">{newsItems[0].title}</h2>
               <div className="flex items-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" /> {newsItems[0].date}
               </div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-slate-50 dark:bg-slate-900 group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-600 border-none px-4">{item.category}</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
                    <Calendar className="w-4 h-4 text-blue-600" /> {item.date}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-2">{item.summary}</p>
                  <Link 
                    href={`/news/${item.id}`} 
                    className={cn(
                      buttonVariants({ variant: "ghost" }), 
                      "p-0 h-auto font-bold text-blue-600 hover:bg-transparent hover:text-blue-700 group/btn flex items-center gap-2"
                    )}
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Subscribe Card */}
          <Card className="bg-blue-600 text-white rounded-[2.5rem] p-10 flex flex-col justify-center gap-8 shadow-xl shadow-blue-600/20">
             <div className="bg-white/10 p-4 rounded-3xl w-fit"><Megaphone className="w-8 h-8" /></div>
             <div>
                <h4 className="text-2xl font-black mb-2">Weekly Briefing</h4>
                <p className="text-blue-100 text-sm leading-relaxed">Subscribe to receive the latest investment news and data snapshots directly in your inbox.</p>
             </div>
             <div className="flex flex-col gap-3">
                <Input placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 h-12 rounded-xl" />
                <Button className="w-full h-12 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-xl">Subscribe Now</Button>
             </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
