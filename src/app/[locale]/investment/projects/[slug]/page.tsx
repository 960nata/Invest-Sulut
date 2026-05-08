import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Tag, 
  Maximize, 
  Briefcase, 
  Coins, 
  TrendingUp, 
  Clock, 
  Plane, 
  Anchor, 
  Road,
  Mail,
  Phone,
  ArrowLeft,
  Download,
  CheckCircle2
} from 'lucide-react';

// This would normally come from Strapi
const mockProject = {
  id: '1',
  name: 'KEK Likupang Tourism Hub',
  category: 'KEK',
  sector: 'Tourism',
  location: 'North Minahasa',
  image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop',
  description: `Likupang is designated as one of the 5 Super Priority Tourism Destinations in Indonesia. This project offers massive opportunities in premium resort development, maritime tourism, and sustainable infrastructure. 
  
  The special economic zone (SEZ) status provides fiscal and non-fiscal incentives for investors, including corporate income tax reductions and simplified licensing procedures.`,
  status: 'Ready to Offer',
  businessScheme: 'Joint Venture / Private Investment',
  totalArea: '197.4 Ha',
  investmentValueIDR: '2.1 Trillion',
  npv: 'IDR 540 Billion',
  irr: '14.6%',
  paybackPeriod: '8.2 Years',
  distToAirport: '35 km',
  distToPort: '25 km',
  distToToll: '20 km',
  picName: 'Syaloom Korompis',
  picEmail: 'rirusulut@gmail.com',
  picPhone: '+62811436060',
  gallery: [
    'https://images.unsplash.com/photo-1582972236019-ea4af1e1136c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=2070&auto=format&fit=crop'
  ]
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const p = mockProject; // In real app, fetch by slug

  return (
    <main className="min-h-screen pb-20 bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image src={p.image} alt={p.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <Link href="/investment/projects" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold w-fit mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <div className="flex gap-2">
              <Badge className="bg-blue-600 text-white border-none px-4 py-1">{p.category}</Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md px-4 py-1">{p.sector}</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{p.name}</h1>
            <div className="flex items-center gap-2 text-white/80 font-medium">
              <MapPin className="w-5 h-5 text-blue-400" />
              {p.location}, North Sulawesi
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          {/* Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
              {p.description}
            </p>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.status && (
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl text-blue-600 shadow-sm"><CheckCircle2 className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Project Status</div>
                  <div className="font-bold">{p.status}</div>
                </div>
              </div>
            )}
            {p.businessScheme && (
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl text-blue-600 shadow-sm"><Briefcase className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Business Scheme</div>
                  <div className="font-bold">{p.businessScheme}</div>
                </div>
              </div>
            )}
            {p.totalArea && (
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl text-blue-600 shadow-sm"><Maximize className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Area</div>
                  <div className="font-bold">{p.totalArea}</div>
                </div>
              </div>
            )}
            {p.investmentValueIDR && (
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl text-blue-600 shadow-sm"><Coins className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Investment Value</div>
                  <div className="font-bold">{p.investmentValueIDR}</div>
                </div>
              </div>
            )}
          </div>

          {/* Financials (Conditional) */}
          {(p.npv || p.irr || p.paybackPeriod) && (
            <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-600/20">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Financial Feasibility</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {p.npv && (
                  <div className="flex flex-col gap-1">
                    <span className="text-blue-200 text-xs font-bold uppercase">NPV</span>
                    <span className="text-2xl font-bold">{p.npv}</span>
                  </div>
                )}
                {p.irr && (
                  <div className="flex flex-col gap-1">
                    <span className="text-blue-200 text-xs font-bold uppercase">IRR</span>
                    <span className="text-4xl font-black">{p.irr}</span>
                  </div>
                )}
                {p.paybackPeriod && (
                  <div className="flex flex-col gap-1">
                    <span className="text-blue-200 text-xs font-bold uppercase">Payback Period</span>
                    <span className="text-2xl font-bold">{p.paybackPeriod}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Infrastructure (Conditional) */}
          {(p.distToAirport || p.distToPort || p.distToToll) && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Supporting Infrastructure</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {p.distToAirport && (
                   <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent">
                      <Plane className="w-5 h-5 text-blue-600" />
                      <div className="text-sm font-bold">Airport: {p.distToAirport}</div>
                   </div>
                 )}
                 {p.distToPort && (
                   <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent">
                      <Anchor className="w-5 h-5 text-blue-600" />
                      <div className="text-sm font-bold">Seaport: {p.distToPort}</div>
                   </div>
                 )}
                 {p.distToToll && (
                   <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent">
                      <Road className="w-5 h-5 text-blue-600" />
                      <div className="text-sm font-bold">Toll Road: {p.distToToll}</div>
                   </div>
                 )}
              </div>
            </div>
          )}

          {/* Gallery */}
          {p.gallery && p.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {p.gallery.map((img, i) => (
                  <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <div className="flex flex-col gap-8">
          {/* Action Card */}
          <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 sticky top-24">
            <CardHeader className="bg-blue-600 text-white rounded-t-xl py-8">
              <CardTitle className="text-xl">Interested in this project?</CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex flex-col gap-6">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 h-14 font-bold text-lg rounded-xl shadow-lg shadow-blue-600/20">
                Submit Expression of Interest
              </Button>
              
              <div className="flex flex-col gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                <Button variant="outline" className="w-full h-12 rounded-xl justify-start font-bold">
                  <Download className="w-4 h-4 mr-3 text-blue-600" /> Investment Memorandum
                </Button>
                <Button variant="outline" className="w-full h-12 rounded-xl justify-start font-bold">
                  <Download className="w-4 h-4 mr-3 text-blue-600" /> Feasibility Study (Full)
                </Button>
              </div>

              {p.picName && (
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project PIC</span>
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg"><Briefcase className="w-5 h-5" /></div>
                    <div className="font-bold text-slate-900 dark:text-white">{p.picName}</div>
                  </div>
                  {p.picEmail && (
                    <a href={`mailto:${p.picEmail}`} className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4 text-blue-600" /> {p.picEmail}
                    </a>
                  )}
                  {p.picPhone && (
                    <a href={`tel:${p.picPhone}`} className="flex items-center gap-3 text-sm hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4 text-blue-600" /> {p.picPhone}
                    </a>
                  )}
                </div>
              )}

              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 rounded-xl h-12 font-bold">
                WhatsApp Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
