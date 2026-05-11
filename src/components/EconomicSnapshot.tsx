'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { CountUp } from 'countup.js';
import dynamic from 'next/dynamic';
import { TrendingUp, Activity, PieChart, Users, MapPin, Landmark, ArrowRight } from 'lucide-react';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const stats = [
  { label: 'Pertumbuhan Ekonomi', value: 5.62, prefix: '', suffix: '%', icon: <TrendingUp className="w-5 h-5" />, desc: 'YoY Q1 2025 · Sumber: BPS', decimals: 2 },
  { label: 'Realisasi Investasi', value: 3.08, prefix: 'Rp', suffix: 'T', icon: <Activity className="w-5 h-5" />, desc: 'PMA + PMDN Q1 2025', decimals: 2 },
  { label: 'Indeks Pembangunan', value: 74.36, prefix: '', suffix: '', icon: <PieChart className="w-5 h-5" />, desc: 'IPM Tahun 2024', decimals: 2 },
  { label: 'Wisatawan Asing', value: 47575, prefix: '', suffix: '', icon: <MapPin className="w-5 h-5" />, desc: 'Kunjungan 2024', decimals: 0 },
  { label: 'Jumlah Penduduk', value: 2.7, prefix: '', suffix: ' Jt', icon: <Users className="w-5 h-5" />, desc: 'Sumber BPS 2024', decimals: 1 },
  { label: 'Ekspor', value: 279, prefix: '$', suffix: ' Jt', icon: <Landmark className="w-5 h-5" />, desc: 'Tumbuh 63% YoY', decimals: 0 },
];

export default function EconomicSnapshot() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState<'pdrb' | 'inflasi'>('pdrb');

  useEffect(() => {
    setIsClient(true);
    if (inView) {
      stats.forEach((stat, idx) => {
        const countUp = new CountUp(`stat-${idx}`, stat.value, {
          decimalPlaces: stat.decimals,
          duration: 2.5,
          prefix: stat.prefix,
          suffix: stat.suffix,
          separator: '.',
          decimal: ','
        });
        if (!countUp.error) {
          countUp.start();
        }
      });
    }
  }, [inView]);

  const pdrbSeries = [
    { name: 'Sulawesi Utara', data: [3.5, 5.1, 5.3, 5.4, 5.62] },
    { name: 'Nasional', data: [3.7, 5.3, 5.0, 5.1, 4.87] }
  ];

  const inflasiSeries = [
    { name: 'Sulawesi Utara', data: [2.5, 4.1, 3.0, 2.2, 2.0] },
    { name: 'Nasional', data: [2.8, 5.0, 2.8, 2.5, 2.3] }
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      fontFamily: 'inherit',
    },
    colors: ['#2563eb', '#94a3b8'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 2,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '11px',
        colors: ["#1e293b"],
        fontWeight: 700,
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['2021', '2022', '2023', '2024', "Q1'25"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        offsetY: -5,
        style: { colors: '#64748b', fontSize: '11px' }
      }
    },
    yaxis: {
      show: true,
      labels: {
        style: { colors: '#64748b', fontSize: '10px', fontWeight: 600 },
        formatter: (val) => val.toFixed(1) + "%"
      },
      tickAmount: 5,
    },
    legend: { 
      position: 'top', 
      horizontalAlign: 'right',
      markers: { shape: 'circle', size: 6 },
      itemMargin: { horizontal: 15, vertical: 10 },
      fontFamily: 'inherit',
      fontSize: '12px',
      fontWeight: 500,
      labels: { colors: '#64748b' },
      offsetY: -10
    },
    grid: { 
      borderColor: '#f1f5f9', 
      strokeDashArray: 0,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
      padding: { 
        top: 40,
        right: 2,
        bottom: 0,
        left: 10
      }
    },
  };

  return (
    <section ref={ref} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Reverted to Original Centered Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Kondisi Ekonomi Sulawesi Utara
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Perkembangan makroekonomi daerah yang stabil dengan pertumbuhan di atas rata-rata nasional, mencerminkan iklim investasi yang kondusif dan berkelanjutan.
          </p>
        </div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group cursor-default">
              <div className="text-blue-600 mb-4">
                {stat.icon}
              </div>
              <div id={`stat-${idx}`} className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
                0
              </div>
              <div className="text-[11px] font-bold text-slate-800 mb-1 leading-snug">{stat.label}</div>
              <div className="text-[9px] text-slate-400">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-10 shadow-sm">
          {/* Tabs */}
          <div className="flex border-b border-slate-100 px-2 bg-slate-50/50">
            <button 
              onClick={() => setActiveTab('pdrb')}
              className={`px-10 pt-[16px] pb-[12px] text-xs font-semibold transition-all ${activeTab === 'pdrb' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Pertumbuhan PDRB
            </button>
            <button 
              onClick={() => setActiveTab('inflasi')}
              className={`px-10 pt-[16px] pb-[12px] text-xs font-semibold transition-all ${activeTab === 'inflasi' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Tingkat Inflasi
            </button>
          </div>
          
          <div className="px-6 pt-6 pb-1 md:px-8 md:pt-8 md:pb-1 min-h-[400px]">
            {isClient && (
              <ReactApexChart 
                options={chartOptions} 
                series={activeTab === 'pdrb' ? pdrbSeries : inflasiSeries} 
                type="bar" 
                height={350} 
                width="100%" 
              />
            )}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <button className="bg-[#00529C] text-white px-8 py-4 rounded-full text-[15px] font-bold flex items-center gap-3 hover:bg-[#003d73] hover:shadow-2xl transition-all duration-300 shadow-xl shadow-blue-900/20 group">
            <span>Data Lengkap</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
