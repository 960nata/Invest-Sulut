'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Palmtree, 
  MapPin, 
  Clock, 
  Waves, 
  Compass,
  ArrowRight,
  Anchor
} from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    name: "Bunaken National Marine Park",
    location: "Manado",
    time: "45 min from port",
    desc: "A world-class diving destination famous for its spectacular coral walls and diverse marine life.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop",
    category: "Underwater"
  },
  {
    name: "Likupang Beach",
    location: "North Minahasa",
    time: "90 min from airport",
    desc: "Pristine white sands and crystal clear waters, designated as a National Super Priority Destination.",
    image: "https://images.unsplash.com/photo-1582972236019-ea4af1e1136c?q=80&w=2070&auto=format&fit=crop",
    category: "Beach"
  },
  {
    name: "Lake Linow",
    location: "Tomohon",
    time: "60 min from Manado",
    desc: "A unique volcanic lake that changes colors due to high sulfur content, surrounded by lush highlands.",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2070&auto=format&fit=crop",
    category: "Highlands"
  }
];

export default function TourismPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1582972236019-ea4af1e1136c?q=80&w=2070&auto=format&fit=crop" 
          alt="Tourism North Sulawesi" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 text-white font-bold tracking-widest text-sm uppercase">
              The North Gateway
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Explore <span className="text-blue-400">Paradise</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              From the world-renowned Bunaken reefs to the serene highlands of Tomohon, discover why North Sulawesi is the Pacific's hidden gem.
            </p>
            <Button size="lg" className="rounded-full h-16 px-12 bg-blue-600 hover:bg-blue-700 font-bold text-lg shadow-2xl shadow-blue-600/30">
              Discover Destinations
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-xl shadow-blue-600/20"><Waves className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black">287 Islands</h3>
              <p className="text-slate-500">Unending coastal beauty and hidden beaches waiting to be explored.</p>
           </div>
           <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-xl shadow-blue-600/20"><Palmtree className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black">Super Priority</h3>
              <p className="text-slate-500">Likupang is one of Indonesia's 5 Super Priority Tourism Destinations.</p>
           </div>
           <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-xl shadow-blue-600/20"><Compass className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black">World Class Diving</h3>
              <p className="text-slate-500">Highest biodiversity of marine life in the Coral Triangle.</p>
           </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div className="max-w-2xl">
               <h2 className="text-4xl font-extrabold tracking-tight mb-4">Top <span className="text-blue-600">Destinations</span></h2>
               <p className="text-slate-500 text-lg">A curated selection of must-visit locations across the province, each offering a unique experience of nature and culture.</p>
            </div>
            <Button variant="link" className="text-blue-600 font-bold text-lg group">
              View All Map <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-2xl overflow-hidden bg-white dark:bg-slate-900 group">
                  <div className="relative h-80 overflow-hidden">
                    <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <Badge className="absolute top-6 left-6 bg-blue-600 text-white border-none px-4 py-1">{dest.category}</Badge>
                    <div className="absolute bottom-6 left-6 right-6">
                       <h4 className="text-2xl font-bold text-white mb-2">{dest.name}</h4>
                       <div className="flex items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-blue-400" /> {dest.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-blue-400" /> {dest.time}</span>
                       </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-slate-500 leading-relaxed mb-6">{dest.desc}</p>
                    <Button variant="outline" className="w-full rounded-xl font-bold border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      Explore More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEK Likupang Highlight Banner */}
      <section className="px-6 mb-32">
         <div className="max-w-7xl mx-auto bg-blue-600 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[500px] shadow-2xl shadow-blue-600/30">
            <div className="w-full lg:w-1/2 relative h-80 lg:h-auto">
               <Image src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070&auto=format&fit=crop" alt="KEK Likupang" fill className="object-cover" />
               <div className="absolute inset-0 bg-blue-600/20" />
            </div>
            <div className="flex-1 p-10 md:p-20 text-white flex flex-col justify-center gap-8">
               <div className="flex flex-col gap-4">
                  <Badge variant="outline" className="w-fit text-white border-white/30 bg-white/10 backdrop-blur-md px-6 py-1 text-sm font-bold uppercase tracking-widest">Investment Opportunity</Badge>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">KEK Likupang <br /> Resort District</h2>
                  <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
                    Be part of Indonesia's next sustainable tourism hub. Exclusive incentives for resort development, marina facilities, and eco-tourism ventures.
                  </p>
               </div>
               <Link 
                  href="/investment/projects/kek-likupang"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-fit rounded-full h-16 px-12 bg-white text-blue-600 hover:bg-slate-100 font-bold text-lg flex items-center justify-center"
                  )}
               >
                  View Project Profile
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
