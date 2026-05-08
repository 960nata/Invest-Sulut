'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, FileText, Table as TableIcon, Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

// Mock Data from Presentation Book Q2 2025
const gdpData = [
  { year: '2020', sulut: 0.23, national: -2.07 },
  { year: '2021', sulut: 4.16, national: 3.70 },
  { year: '2022', sulut: 5.42, national: 5.31 },
  { year: '2023', sulut: 5.48, national: 5.05 },
  { year: '2024', sulut: 5.55, national: 5.11 },
  { year: '2025 (Q1)', sulut: 5.62, national: 4.87 },
];

const investmentData = [
  { name: 'FDI (PMA)', value: 1.780, color: '#2563eb' },
  { name: 'DDI (PMDN)', value: 1.371, color: '#10b981' },
];

const topInvestors = [
  { country: 'China', value: 1000 },
  { country: 'Singapore', value: 417 },
  { country: 'Hong Kong', value: 258 },
  { country: 'USA', value: 6.9 },
  { country: 'Italy', value: 3.8 },
];

const sectorData = [
  { sector: 'Agriculture', share: 21.47 },
  { sector: 'Trade', share: 13.71 },
  { sector: 'Manufacturing', share: 11.57 },
  { sector: 'Transport', share: 11.07 },
  { sector: 'Others', share: 42.18 },
];

export default function EconomicDataPage() {
  const chartRefs = {
    gdp: useRef<HTMLDivElement>(null),
    investment: useRef<HTMLDivElement>(null),
    investors: useRef<HTMLDivElement>(null),
  };

  const exportToPNG = async (ref: React.RefObject<HTMLDivElement | null>, filename: string) => {
    if (ref.current) {
      const canvas = await html2canvas(ref.current);
      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const exportToExcel = (data: any[], filename: string) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">
              <Calendar className="w-4 h-4" /> Data as of Q2 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Live Economic <span className="text-blue-600">Dashboard</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl">
              Visualizing North Sulawesi's macro-economic performance and investment trends using verified institutional data.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-xl h-12 font-bold border-slate-200">
              <TableIcon className="w-4 h-4 mr-2" /> View UMK Table
            </Button>
            <Button className="rounded-xl h-12 font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 text-white">
              <Download className="w-4 h-4 mr-2" /> Download Report
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* GDP Growth Chart */}
          <Card className="border-none shadow-xl overflow-hidden bg-white dark:bg-slate-900" ref={chartRefs.gdp}>
            <CardHeader className="flex flex-row justify-between items-center border-b border-slate-50 dark:border-slate-800 pb-6">
              <div>
                <CardTitle>GRDP Growth Comparison</CardTitle>
                <CardDescription>North Sulawesi vs. National (%)</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => exportToPNG(chartRefs.gdp, 'gdp-growth')}><Download className="w-4 h-4" /></Button>
                <Button size="icon" variant="ghost" onClick={() => exportToExcel(gdpData, 'gdp-growth')}><FileText className="w-4 h-4" /></Button>
              </div>
            </CardHeader>
            <CardContent className="pt-10 h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={gdpData}>
                  <defs>
                    <linearGradient id="colorSulut" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  <Legend verticalAlign="top" align="right" height={36}/>
                  <Area type="monotone" dataKey="sulut" name="North Sulawesi" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorSulut)" />
                  <Area type="monotone" dataKey="national" name="National Avg" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Investment Composition */}
          <Card className="border-none shadow-xl overflow-hidden bg-white dark:bg-slate-900" ref={chartRefs.investment}>
            <CardHeader className="flex flex-row justify-between items-center border-b border-slate-50 dark:border-slate-800 pb-6">
              <div>
                <CardTitle>Investment Realization</CardTitle>
                <CardDescription>FDI vs. DDI Composition (IDR Trillion)</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" onClick={() => exportToPNG(chartRefs.investment, 'investment-comp')}><Download className="w-4 h-4" /></Button>
              </div>
            </CardHeader>
            <CardContent className="pt-10 h-[400px] flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={investmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {investmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="text-3xl font-black text-slate-900 dark:text-white">3.08T</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Q1 2025</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Investor Countries */}
          <Card className="lg:col-span-2 border-none shadow-xl overflow-hidden bg-white dark:bg-slate-900" ref={chartRefs.investors}>
            <CardHeader className="flex flex-row justify-between items-center border-b border-slate-50 dark:border-slate-800 pb-6">
              <div>
                <CardTitle>Top Investor Countries</CardTitle>
                <CardDescription>By Realized Investment Value (IDR Billion)</CardDescription>
              </div>
              <Button size="icon" variant="ghost" onClick={() => exportToPNG(chartRefs.investors, 'top-investors')}><Download className="w-4 h-4" /></Button>
            </CardHeader>
            <CardContent className="pt-10 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topInvestors} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis dataKey="country" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} width={100} />
                  <Tooltip />
                  <Bar dataKey="value" name="Value (Billion IDR)" fill="#2563eb" radius={[0, 8, 8, 0]} barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sector Shares */}
          <Card className="border-none shadow-xl overflow-hidden bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>GRDP by Sector</CardTitle>
              <CardDescription>Major Economic Contributors (%)</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-6">
              {sectorData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-700 dark:text-slate-300">{item.sector}</span>
                    <span className="font-black text-blue-600">{item.share}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.share}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                </div>
              ))}
              <Link href="/investment/economic-data" className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-blue-600 py-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 transition-colors">
                View Detailed Sectoral Analysis <ArrowUpRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
