'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, RefreshCcw, MapPin, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { id: '1', name: 'KEK Likupang', category: 'KEK', sector: 'Tourism', location: 'North Minahasa', value: 'IDR 2.1T', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop' },
  { id: '2', name: 'Bitung Port', category: 'Ready', sector: 'Infrastructure', location: 'Bitung', value: 'IDR 4.5T', image: 'https://images.unsplash.com/photo-1494412574743-0112f05c7842?q=80&w=2070&auto=format&fit=crop' },
  { id: '3', name: 'Tondano Solar', category: 'Potential', sector: 'Energy', location: 'Minahasa', value: 'IDR 850B', image: 'https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?q=80&w=2070&auto=format&fit=crop' },
];

const sectors = ['Tourism', 'Infrastructure', 'Energy', 'Agriculture', 'Fisheries'];
const locations = ['Manado', 'Bitung', 'Tomohon', 'North Minahasa', 'Minahasa', 'South Minahasa'];

function ProjectsList() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [sector, setSector] = useState(searchParams.get('sector') || 'All');
  const [location, setLocation] = useState(searchParams.get('location') || 'All');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category !== 'All') params.set('category', category);
    if (sector !== 'All') params.set('sector', sector);
    if (location !== 'All') params.set('location', location);
    
    router.replace(`${pathname}?${params.toString()}`);
  }, [search, category, sector, location, router, pathname]);

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
    setSector('All');
    setLocation('All');
  };

  const filteredProjects = projects.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    const matchSector = sector === 'All' || p.sector === sector;
    const matchLocation = location === 'All' || p.location === location;
    return matchSearch && matchCategory && matchSector && matchLocation;
  });

  return (
    <>
        {/* Search & Tabs */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <Input 
              placeholder="Search projects by name or description..." 
              className="pl-12 h-14 rounded-2xl border-none shadow-xl bg-white dark:bg-slate-900 text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <Tabs value={category} onValueChange={(val: any) => setCategory(val)} className="w-full lg:w-auto">
              <TabsList className="h-12 bg-white dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <TabsTrigger value="All" className="px-6 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">All Projects</TabsTrigger>
                <TabsTrigger value="KEK" className="px-6 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">KEK (Special Zones)</TabsTrigger>
                <TabsTrigger value="Ready" className="px-6 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">Ready to Offer</TabsTrigger>
                <TabsTrigger value="Potential" className="px-6 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all">Potential</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="hidden lg:flex items-center gap-4">
              <Select value={sector} onValueChange={(val: any) => setSector(val)}>
                <SelectTrigger className="w-[180px] h-12 bg-white dark:bg-slate-900 rounded-xl border-slate-200">
                  <SelectValue placeholder="All Sectors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Sectors</SelectItem>
                  {sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={(val: any) => setLocation(val)}>
                <SelectTrigger className="w-[180px] h-12 bg-white dark:bg-slate-900 rounded-xl border-slate-200">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Locations</SelectItem>
                  {locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>

              <Button variant="ghost" onClick={resetFilters} className="text-slate-500 hover:text-blue-600 h-12 rounded-xl">
                <RefreshCcw className="w-4 h-4 mr-2" /> Reset
              </Button>
            </div>

            {/* Mobile Filter */}
            <div className="lg:hidden w-full">
              <Sheet>
                <SheetTrigger render={
                  <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200">
                    <Filter className="w-4 h-4 mr-2" /> Filter Options
                  </Button>
                } />
                <SheetContent side="bottom" className="rounded-t-3xl h-[60vh]">
                  <SheetHeader>
                    <SheetTitle>Filter Projects</SheetTitle>
                    <SheetDescription>Refine your project discovery</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase text-slate-500">Sector</label>
                      <Select value={sector} onValueChange={(val: any) => setSector(val)}>
                        <SelectTrigger className="w-full h-12 bg-slate-50 rounded-xl border-none">
                          <SelectValue placeholder="All Sectors" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All Sectors</SelectItem>
                          {sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase text-slate-500">Location</label>
                      <Select value={location} onValueChange={(val: any) => setLocation(val)}>
                        <SelectTrigger className="w-full h-12 bg-slate-50 rounded-xl border-none">
                          <SelectValue placeholder="All Locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All Locations</SelectItem>
                          {locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={resetFilters} variant="outline" className="mt-4 h-12 rounded-xl">
                      Reset All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
           <div className="text-sm font-semibold text-slate-500">
             Showing <span className="text-blue-600 font-bold">{filteredProjects.length}</span> of {projects.length} projects
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <Card key={p.id} className="h-full border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-900">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600/90 backdrop-blur-md text-white border-none">{p.sector}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                   <Badge variant="outline" className="text-[10px] uppercase tracking-tighter border-slate-200">{p.category}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    {p.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Tag className="w-3.5 h-3.5 text-blue-600" />
                    {p.value}
                  </div>
                </div>
                <Link 
                  href={`/investment/projects/${p.id}`} 
                  className={cn(
                    buttonVariants({ variant: "default" }), 
                    "w-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 h-11 rounded-xl font-bold flex items-center justify-center text-white"
                  )}
                >
                  View Project Detail
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center flex flex-col items-center gap-4">
             <div className="bg-slate-100 p-6 rounded-full"><Search className="w-10 h-10 text-slate-300" /></div>
             <h3 className="text-xl font-bold text-slate-400">No projects found matching your filters.</h3>
             <Button onClick={resetFilters} variant="link" className="text-blue-600">Clear all filters</Button>
          </div>
        )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Investment <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Explore diverse investment-ready opportunities and strategic projects across North Sulawesi.
          </p>
        </header>

        <Suspense fallback={<div className="py-20 text-center">Loading Projects...</div>}>
          <ProjectsList />
        </Suspense>
      </div>
    </main>
  );
}
