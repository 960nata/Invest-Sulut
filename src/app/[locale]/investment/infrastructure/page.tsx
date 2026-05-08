'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Anchor, 
  Road, 
  Zap, 
  Droplets, 
  Globe,
  ArrowRight,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const infraItems = [
  {
    title: "Sam Ratulangi International Airport",
    category: "Airport",
    desc: "24/7 international airport with direct flights to East Asia and major Indonesian cities. Undergoing expansion to accommodate 6M passengers annually.",
    icon: <Plane className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Bitung International Hub Port",
    category: "Seaport",
    desc: "Strategic hub for international shipping lanes. Equipped with container terminals, liquid bulk facilities, and a logistics center.",
    icon: <Anchor className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1494412574743-0112f05c7842?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Manado-Bitung Toll Road",
    category: "Road",
    desc: "39 km of high-speed connectivity reducing travel time between the capital and the international port to 35 minutes.",
    icon: <Road className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2014&auto=format&fit=crop"
  }
];

const utilities = [
  { label: "Electricity Supply", value: "625 MW", desc: "Surplus power capacity from Geothermal & Hydro sources.", icon: <Zap /> },
  { label: "Water Supply", value: "3,500 L/s", desc: "State-owned PDAM network covering major industrial zones.", icon: <Droplets /> },
  { label: "Digital Fiber Optic", value: "4G/5G Ready", desc: "Palapa Ring connectivity covering 15 kab/kota.", icon: <Globe /> },
];

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Strategic <span className="text-blue-600">Infrastructure</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              North Sulawesi offers advanced multi-modal connectivity and reliable utilities, providing a solid foundation for industrial, maritime, and tourism developments.
            </p>
          </div>
        </header>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {infraItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-white dark:bg-slate-900 group">
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white border-none">{item.category}</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl w-fit text-blue-600 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Utilities Grid */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Utilities & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {utilities.map((u, i) => (
              <Card key={i} className="border-none shadow-lg bg-blue-600 text-white rounded-3xl p-8 flex flex-col gap-6 group hover:translate-y-[-8px] transition-all duration-300">
                <div className="bg-white/10 p-4 rounded-2xl w-fit">
                   {React.cloneElement(u.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">{u.value}</div>
                  <div className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">{u.label}</div>
                  <p className="text-sm text-blue-100 leading-relaxed">{u.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Logistics Table / Card */}
        <section className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Logistics <span className="text-blue-600">Connectivity</span></h2>
             <p className="text-lg text-slate-500 leading-relaxed">
               Efficiency is our priority. With integrated transport nodes, we ensure your commodities and goods reach global destinations with minimal friction.
             </p>
             <div className="flex flex-col gap-4">
                {[
                  { from: "Manado", to: "Sam Ratulangi Airport", dist: "13 km", time: "25 min" },
                  { from: "Bitung SEZ", to: "Bitung Hub Port", dist: "2 km", time: "5 min" },
                  { from: "Likupang SEZ", to: "Sam Ratulangi Airport", dist: "35 km", time: "50 min" },
                ].map((l, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                       <MapPin className="w-4 h-4 text-blue-600" />
                       <span className="font-bold text-sm">{l.from} → {l.to}</span>
                    </div>
                    <div className="flex gap-4 text-xs font-black uppercase text-slate-400 tracking-tighter">
                       <span>{l.dist}</span>
                       <span className="text-blue-600">{l.time}</span>
                    </div>
                  </div>
                ))}
             </div>
             <Button variant="link" className="text-blue-600 font-bold p-0 h-auto justify-start flex items-center gap-2">
               Download Full Logistics Map <ArrowRight className="w-4 h-4" />
             </Button>
          </div>
          <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop" alt="Logistics" fill className="object-cover" />
             <div className="absolute inset-0 bg-blue-600/10" />
          </div>
        </section>
      </div>
    </main>
  );
}
