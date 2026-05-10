"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  BarChart3, Globe, Home, LogOut, Bell, Search, Settings, Users,
  FileText, ArrowUpRight, MoreVertical, Download, Filter, ChevronDown, Box, Star, Menu
} from 'lucide-react';
import Link from 'next/link';

// Dynamically import ApexCharts to avoid SSR issues in Next.js
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

/* ─── TypeScript Interfaces based on Schema ─── */
interface InvestmentProject {
  title: string;
  slug: string;
  cover_image: string;
  description: string;
  status?: 'Ready-to-Offer' | 'Pipeline' | 'Feasibility-Study';
  sector?: 'Agriculture' | 'Fisheries' | 'Tourism' | 'Industry' | 'Infrastructure' | 'Energy' | 'Other';
  location_kabupaten?: string;
  location_gps_lat?: number;
  location_gps_lng?: number;
  investment_value_idr?: number;
  total_area_ha?: number;
  business_scheme?: 'BOT' | 'KSP' | 'KPBU' | 'Joint Venture' | 'Joint Operation' | 'Private' | 'PPP' | 'Other';
  revenue_streams?: string;
  npv?: number;
  irr?: number;
  payback_period_years?: number;
  bc_ratio?: number;
  infra_distance_airport_km?: number;
  infra_distance_port_km?: number;
  infra_distance_toll_km?: number;
  pic_name?: string;
  pic_email?: string;
  pic_phone?: string;
  im_pdf?: string;
  fs_pdf?: string;
  gallery?: string[];
  featured?: boolean;
  publishedAt: string;
}

interface EconomicData {
  period_label: string;
  gdp_growth_sulut_pct?: number;
  gdp_growth_national_pct?: number;
  inflation_sulut_pct?: number;
  inflation_national_pct?: number;
  investment_realization_idr_t?: number;
  fdi_value_idr_t?: number;
  ddi_value_idr_t?: number;
  hdi?: number;
  tourist_arrivals?: number;
  population?: number;
  umk_wage_idr?: number;
  top_investor_countries?: any;
  top_sectors?: any;
  export_total_usd_b?: number;
  export_by_commodity?: any;
  export_top_countries?: any;
}

interface UMKMProduct {
  product_name: string;
  company_name?: string;
  category?: 'Plantation-Spice' | 'Plantation-Coffee' | 'Creation-Craft' | 'Creation-Fashion' | 'Creation-F&B';
  cover_image: string;
  description: string;
  address?: string;
  pic_name?: string;
  pic_phone?: string;
  pic_email?: string;
  social_instagram?: string;
  social_tiktok?: string;
  website?: string;
  certifications?: string;
  export_ready?: boolean;
}

interface PresentationBook {
  edition_label: string;
  cover_image: string;
  file_en: string;
  file_id?: string;
  published_date: string;
}

interface NewsEvent {
  title: string;
  slug: string;
  category: 'News' | 'Press Release' | 'Event' | 'Annual Event';
  thumbnail?: string;
  summary?: string;
  body: string;
  published_date: string;
  is_featured?: boolean;
  event_date?: string;
  event_is_live?: boolean;
  registration_url?: string;
}

interface District {
  name: string;
  capital?: string;
  area_km2?: number;
  population?: number;
  hdi?: number;
  key_sectors?: string;
  photo?: string;
  gps_lat?: number;
  gps_lng?: number;
}

interface EOISubmission {
  investor_name: string;
  company?: string;
  country?: string;
  email: string;
  phone?: string;
  project_interest?: string;
  estimated_value_idr?: number;
  message?: string;
  status: 'Received' | 'Under Review' | 'Responded' | 'Closed';
  submitted_at: string;
}

interface HomepageSlider {
  headline: string;
  description?: string;
  background_image: string;
  cta_primary_label?: string;
  cta_primary_url?: string;
  cta_secondary_label?: string;
  cta_secondary_url?: string;
  order?: number;
}

interface PartnerLogo {
  name: string;
  logo: string;
  website_url?: string;
  order?: number;
}


/* ─── Sidebar link ─── */
function SL({ href, icon, text, active = false }: { href: string; icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-150 ${active ? 'bg-[#2B66FF] text-white shadow-lg shadow-blue-500/25' : 'text-[#8F9BBA] hover:bg-[#F4F7FE] hover:text-[#1B2559]'
        }`}
    >
      <span className={active ? 'text-white' : 'text-[#8F9BBA]'}>{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

/* ─── Stat card (GA4 Style) ─── */
function StatCard({ label, value, change, isPositive, sub, icon }: {
  label: string; value: string; change: string; isPositive: boolean; sub: string; icon?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-1 shadow-sm border border-[#F0F3FF] hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-bold text-[#A3AED0]">{label}</p>
        <div className={`w-8 h-8 ${isPositive ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'} rounded-xl flex items-center justify-center`}>
          {icon || <Box className="w-4 h-4" />}
        </div>
      </div>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-[26px] font-extrabold text-[#1B2559] leading-none tracking-tight">{value}</span>
        <span className={`text-[12px] font-extrabold flex items-center gap-0.5 ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
      </div>
      <p className="text-[11px] font-semibold text-[#A3AED0] mt-1">{sub}</p>
    </div>
  );
}

/* ─── Chart Card Wrapper ─── */
function ChartCard({ title, children, filter, onFilterChange }: {
  title: string;
  children: React.ReactNode;
  filter: string;
  onFilterChange: (val: string) => void;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-extrabold text-[#1B2559]">{title}</h3>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="appearance-none bg-[#F4F7FE] text-[12px] font-bold text-[#1B2559] px-3 py-1.5 pr-8 rounded-lg hover:bg-[#e8ecf7] transition-colors outline-none cursor-pointer"
          >
            <option value="realtime">Real-time</option>
            <option value="daily">Harian</option>
            <option value="monthly">Bulanan</option>
            <option value="3months">3 Bulan</option>
            <option value="1year">1 Tahun</option>
            <option value="3years">3 Tahun</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#A3AED0]" />
        </div>
      </div>
      <div className="flex-1 min-h-[250px]">
        {children}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => { setTimeout(() => setLoading(false), 400); }, []);

  // Filters
  const [filterTrend, setFilterTrend] = useState('monthly');
  const [filterAcquisition, setFilterAcquisition] = useState('monthly');
  const [filterDevice, setFilterDevice] = useState('monthly');
  const [filterPages, setFilterPages] = useState('monthly');

  // Mock Data for Users Trend
  const getTrendData = () => {
    switch (filterTrend) {
      case 'realtime': return [45, 52, 38, 24, 33, 26, 21, 20, 15, 10];
      case 'daily': return [1200, 1500, 1800, 1400, 2000, 2500, 2200, 3000, 2800, 3500, 3200, 4000];
      case 'monthly': return [23000, 34000, 45000, 42000, 56000, 61000, 58000, 72000, 68000, 85000, 81000, 95000];
      case '3months': return [150000, 180000, 220000, 250000, 280000, 320000];
      case '1year': return [500000, 650000, 800000, 950000, 1100000, 1250000, 1400000, 1550000, 1700000, 1850000, 2000000, 2200000];
      case '3years': return [15000000, 25000000, 40000000, 60000000, 85000000, 120000000];
      default: return [];
    }
  };

  const getTrendLabels = () => {
    switch (filterTrend) {
      case 'realtime': return ['30m', '25m', '20m', '15m', '10m', '5m', '4m', '3m', '2m', '1m'];
      case 'daily': return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      case 'monthly': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      case '3months': return ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'];
      case '1year': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      case '3years': return ['2024', '2025', '2026', '2027', '2028', '2029'];
      default: return [];
    }
  };

  // ApexCharts Options
  const trendOptions = {
    chart: {
      id: 'users-trend',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit',
    },
    xaxis: {
      categories: getTrendLabels(),
      labels: { style: { colors: '#A3AED0', fontWeight: 600 } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#A3AED0', fontWeight: 600 } },
    },
    stroke: { curve: 'smooth' as const, width: 3, colors: ['#2B66FF'] },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#2B66FF", opacity: 0.45 },
          { offset: 100, color: "#2B66FF", opacity: 0.05 }
        ]
      }
    },
    dataLabels: { enabled: false },
    grid: { borderColor: '#F0F3FF', strokeDashArray: 4 },
    tooltip: { theme: 'light' },
  };

  const trendSeries = [{
    name: 'Pengguna',
    data: getTrendData()
  }];

  // Acquisition Chart Options
  const acquisitionOptions = {
    chart: { toolbar: { show: false }, fontFamily: 'inherit' },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '60%',
      }
    },
    colors: ['#2B66FF'],
    xaxis: {
      categories: ['Organic Search', 'Direct', 'Referral', 'Organic Social', 'Email'],
      labels: { style: { colors: '#A3AED0', fontWeight: 600 } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#1B2559', fontWeight: 700 } }
    },
    grid: { borderColor: '#F0F3FF', strokeDashArray: 4 },
    dataLabels: { enabled: false },
  };

  const acquisitionSeries = [{
    name: 'Sesi',
    data: [2500, 1800, 1200, 800, 300]
  }];

  // Device Chart Options (Donut)
  const deviceOptions = {
    chart: { fontFamily: 'inherit' },
    labels: ['Mobile', 'Desktop', 'Tablet'],
    colors: ['#2B66FF', '#10B981', '#F59E0B'],
    legend: {
      position: 'bottom' as const,
      labels: { colors: '#1B2559', useSeriesColors: false },
      fontFamily: 'inherit',
      fontWeight: 600,
    },
    stroke: { width: 0 },
    dataLabels: { enabled: false },
  };

  const deviceSeries = [65, 30, 5];

  // Top Pages Options
  const pagesOptions = {
    chart: { toolbar: { show: false }, fontFamily: 'inherit' },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '50%',
      }
    },
    colors: ['#10B981'],
    xaxis: {
      categories: ['/home', '/proyek', '/peta', '/about', '/kontak'],
      labels: { style: { colors: '#A3AED0', fontWeight: 600 } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: '#A3AED0', fontWeight: 600 } }
    },
    grid: { borderColor: '#F0F3FF', strokeDashArray: 4 },
    dataLabels: { enabled: false },
  };

  const pagesSeries = [{
    name: 'Tampilan Halaman',
    data: [12000, 8500, 6000, 3000, 1500]
  }];

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
      className="flex h-screen overflow-hidden bg-[#F4F7FE]"
    >
      {/* ──────────── Sidebar ──────────── */}
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <aside className={`w-60 shrink-0 bg-white border-r border-[#F0F3FF] flex flex-col justify-between py-6 px-4 h-full overflow-y-auto fixed md:relative z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 px-2 mb-8">
            <div className="w-9 h-9 bg-[#2B66FF] rounded-xl flex items-center justify-center">
              <span className="text-white text-xs font-extrabold">GA</span>
            </div>
            <span className="text-[16px] font-extrabold text-[#1B2559]">Analytics</span>
          </Link>

          <p className="text-[10px] font-extrabold text-[#A3AED0] uppercase tracking-widest px-3 mb-2">Main Menu</p>
          <nav className="space-y-1">
            <div onClick={() => { setCurrentView('dashboard'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Home className="w-4 h-4" />} text="Dashboard" active={currentView === 'dashboard'} />
            </div>
            <div onClick={() => { setCurrentView('notification'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Bell className="w-4 h-4" />} text="Notifikasi" active={currentView === 'notification'} />
            </div>

          </nav>

          <p className="text-[10px] font-extrabold text-[#A3AED0] uppercase tracking-widest px-3 mb-2 mt-6">CMS Konten</p>
          <nav className="space-y-1">
            <div onClick={() => { setCurrentView('hero'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<FileText className="w-4 h-4" />} text="Hero Section" active={currentView === 'hero'} />
            </div>
            <div onClick={() => { setCurrentView('partner'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Globe className="w-4 h-4" />} text="Our Partner" active={currentView === 'partner'} />
            </div>
            <div onClick={() => { setCurrentView('slider'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Box className="w-4 h-4" />} text="Slider Content" active={currentView === 'slider'} />
            </div>
            <div onClick={() => { setCurrentView('news'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<FileText className="w-4 h-4" />} text="News" active={currentView === 'news'} />
            </div>
          </nav>

          <p className="text-[10px] font-extrabold text-[#A3AED0] uppercase tracking-widest px-3 mb-2 mt-6">Manajemen</p>
          <nav className="space-y-1">
            <div onClick={() => { setCurrentView('project'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Box className="w-4 h-4" />} text="Proyek" active={currentView === 'project'} />
            </div>
            <div onClick={() => { setCurrentView('user'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Users className="w-4 h-4" />} text="User" active={currentView === 'user'} />
            </div>
            <div onClick={() => { setCurrentView('presentation'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<FileText className="w-4 h-4" />} text="Presentation Book" active={currentView === 'presentation'} />
            </div>
            <div onClick={() => { setCurrentView('macro'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<BarChart3 className="w-4 h-4" />} text="Macroeconomic" active={currentView === 'macro'} />
            </div>
            <div onClick={() => { setCurrentView('umkm'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Star className="w-4 h-4" />} text="UMKM" active={currentView === 'umkm'} />
            </div>
            <div onClick={() => { setCurrentView('district'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<Globe className="w-4 h-4" />} text="District" active={currentView === 'district'} />
            </div>
            <div onClick={() => { setCurrentView('eoi'); setIsSidebarOpen(false); }} className="cursor-pointer">
              <SL href="#" icon={<FileText className="w-4 h-4" />} text="EOI Submission" active={currentView === 'eoi'} />
            </div>
          </nav>
        </div>

        <nav className="space-y-1 mt-4">
          <div onClick={() => alert('Fitur Bantuan belum tersedia cuy!')} className="cursor-pointer">
            <SL href="#" icon={<Settings className="w-4 h-4" />} text="Bantuan" />
          </div>
          <SL href="/" icon={<LogOut className="w-4 h-4" />} text="Logout" />
        </nav>
      </aside>

      {/* ──────────── Main ──────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="shrink-0 flex items-center justify-between px-4 md:px-8 h-16 bg-white border-b border-[#F0F3FF]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#F0F3FF] text-[#A3AED0] hover:text-[#1B2559] transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3AED0]" />
              <input
                placeholder="Cari laporan..."
                className="pl-10 pr-5 bg-white h-10 rounded-full text-[13px] text-[#1B2559] placeholder-[#A3AED0] font-semibold outline-none shadow-sm border border-[#F0F3FF] w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowNotif(!showNotif)}
                className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#F0F3FF] text-[#A3AED0] hover:text-[#1B2559] transition-colors"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
              </button>
              {showNotif && (
                <div className="fixed inset-0 z-40" onClick={() => setShowNotif(false)} />
              )}
              <div className={`absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#F0F3FF] z-50 overflow-hidden transition-all duration-200 transform origin-top-right ${showNotif ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="p-4 border-b border-[#F0F3FF]">
                  <p className="text-[14px] font-extrabold text-[#1B2559]">Notifikasi</p>
                </div>
                <div className="divide-y divide-[#F0F3FF]">
                  <div className="p-4 hover:bg-[#F4F7FE] cursor-pointer">
                    <p className="text-[12px] font-bold text-[#1B2559]">Investor baru terdaftar</p>
                    <p className="text-[10px] text-[#A3AED0]">5 menit yang lalu</p>
                  </div>
                  <div className="p-4 hover:bg-[#F4F7FE] cursor-pointer">
                    <p className="text-[12px] font-bold text-[#1B2559]">Laporan bulanan siap</p>
                    <p className="text-[10px] text-[#A3AED0]">1 jam yang lalu</p>
                  </div>
                  <div className="p-4 hover:bg-[#F4F7FE] cursor-pointer">
                    <p className="text-[12px] font-bold text-[#1B2559]">Sesi melonjak 20%</p>
                    <p className="text-[10px] text-[#A3AED0]">2 jam yang lalu</p>
                  </div>
                </div>
                <div onClick={() => { setCurrentView('notification'); setShowNotif(false); }} className="block p-3 text-center text-[12px] font-bold text-[#2B66FF] hover:bg-[#F4F7FE] cursor-pointer">
                  Lihat semua notifikasi
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-sm border border-[#F0F3FF] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#2B66FF] flex items-center justify-center text-white text-[11px] font-extrabold">A</div>
                <div className="hidden sm:block">
                  <p className="text-[13px] font-extrabold text-[#1B2559] leading-tight">Admin</p>
                  <p className="text-[10px] font-bold text-[#A3AED0]">admin@analytic.id</p>
                </div>
                <ChevronDown className="w-4 h-4 text-[#A3AED0]" />
              </div>
              {showProfile && (
                <div className="fixed inset-0 z-40" onClick={() => setShowProfile(false)} />
              )}
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#F0F3FF] z-50 overflow-hidden transition-all duration-200 transform origin-top-right ${showProfile ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <Link href="#" className="flex items-center gap-2 p-3 text-[13px] font-bold text-[#1B2559] hover:bg-[#F4F7FE]" onClick={() => setShowProfile(false)}>
                  <Users className="w-4 h-4 text-[#A3AED0]" />
                  Profile
                </Link>
                <Link href="/" className="flex items-center gap-2 p-3 text-[13px] font-bold text-rose-500 hover:bg-rose-50" onClick={() => setShowProfile(false)}>
                  <LogOut className="w-4 h-4" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-8 pt-6 pb-10 space-y-6">

          {currentView === 'dashboard' && (
            <>
              {/* Page title row */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Ringkasan Laporan</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Ikhtisar data performa situs web (GA4 Style).</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-white border border-[#F0F3FF] text-[13px] font-bold text-[#1B2559] px-4 py-2 rounded-xl shadow-sm hover:bg-[#F4F7FE] transition-colors">
                    Export <Download className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 bg-white border border-[#F0F3FF] text-[13px] font-bold text-[#1B2559] px-4 py-2 rounded-xl shadow-sm hover:bg-[#F4F7FE] transition-colors">
                    Filter <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {loading ? (
                /* ── Skeleton ── */
                <div className="grid grid-cols-4 gap-5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl h-28 animate-pulse border border-[#F0F3FF]" />
                  ))}
                </div>
              ) : (
                <>
                  {/* ── Stats row ── */}
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                    <StatCard label="Pengguna" value="48K" change="1.9%" isPositive={true} sub="vs bulan lalu 45K" icon={<Users className="w-4 h-4" />} />
                    <StatCard label="Pengguna Baru" value="41K" change="4.2%" isPositive={true} sub="vs bulan lalu 39K" icon={<Globe className="w-4 h-4" />} />
                    <StatCard label="Sesi" value="82K" change="2.8%" isPositive={false} sub="vs bulan lalu 85K" icon={<BarChart3 className="w-4 h-4" />} />
                    <StatCard label="Waktu Keterlibatan Rata-rata" value="1m 24s" change="12.5%" isPositive={true} sub="vs bulan lalu 1m 15s" icon={<Box className="w-4 h-4" />} />
                  </div>

                  {/* ── Real-time & Big Chart Row ── */}
                  <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">

                    {/* Real-time Card (GA4 Style) */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-[14px] font-extrabold text-[#1B2559]">Real-time</h3>
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                          </span>
                        </div>
                        <p className="text-[32px] font-extrabold text-[#1B2559] leading-none">56</p>
                        <p className="text-[12px] font-bold text-[#A3AED0] mt-1">Pengguna aktif dalam 30 menit terakhir</p>
                      </div>

                      <div className="mt-4 border-t border-[#F0F3FF] pt-4">
                        <p className="text-[11px] font-extrabold text-[#A3AED0] uppercase mb-2">Halaman Teratas</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[12px]">
                            <span className="font-bold text-[#1B2559]">/home</span>
                            <span className="text-[#A3AED0] font-bold">24</span>
                          </div>
                          <div className="flex justify-between text-[12px]">
                            <span className="font-bold text-[#1B2559]">/proyek</span>
                            <span className="text-[#A3AED0] font-bold">15</span>
                          </div>
                          <div className="flex justify-between text-[12px]">
                            <span className="font-bold text-[#1B2559]">/peta</span>
                            <span className="text-[#A3AED0] font-bold">8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Users Trend (Big Chart) */}
                    <div className="xl:col-span-3">
                      <ChartCard title="Pengguna berdasarkan Waktu" filter={filterTrend} onFilterChange={setFilterTrend}>
                        <Chart options={trendOptions} series={trendSeries} type="area" height="100%" />
                      </ChartCard>
                    </div>
                  </div>

                  {/* ── Middle row ── */}
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                    {/* Acquisition Chart */}
                    <ChartCard title="Akuisisi Trafik" filter={filterAcquisition} onFilterChange={setFilterAcquisition}>
                      <Chart options={acquisitionOptions} series={acquisitionSeries} type="bar" height="100%" />
                    </ChartCard>

                    {/* Device Chart */}
                    <ChartCard title="Pengguna berdasarkan Perangkat" filter={filterDevice} onFilterChange={setFilterDevice}>
                      <Chart options={deviceOptions} series={deviceSeries} type="donut" height="100%" />
                    </ChartCard>

                    {/* Top Pages */}
                    <ChartCard title="Halaman Paling Banyak Dilihat" filter={filterPages} onFilterChange={setFilterPages}>
                      <Chart options={pagesOptions} series={pagesSeries} type="bar" height="100%" />
                    </ChartCard>
                  </div>

                  {/* ── New Row: Map & Activity ── */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                    {/* Map Placeholder */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF]">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[14px] font-extrabold text-[#1B2559]">Peta Potensi Investasi</h3>
                        <Link href="#" className="text-[12px] font-bold text-[#2B66FF] hover:underline">Lihat Detail</Link>
                      </div>
                      <div className="bg-[#F4F7FE] rounded-xl h-64 flex items-center justify-center border border-dashed border-[#A3AED0]">
                        <div className="text-center">
                          <Globe className="w-10 h-10 text-[#A3AED0] mx-auto mb-2" />
                          <p className="text-[13px] font-bold text-[#1B2559]">Peta Interaktif Sulawesi Utara</p>
                          <p className="text-[11px] text-[#A3AED0]">Fitur ini akan menampilkan peta dengan pin proyek.</p>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF]">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[14px] font-extrabold text-[#1B2559]">Aktivitas Terbaru</h3>
                        <Link href="#" className="text-[12px] font-bold text-[#2B66FF] hover:underline">Lihat Semua</Link>
                      </div>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5" />
                          <div>
                            <p className="text-[12px] font-bold text-[#1B2559]">PT. Maju Bersama mengajukan EOI</p>
                            <p className="text-[10px] text-[#A3AED0]">Untuk Proyek Kawasan Industri Bitung • 5 menit yang lalu</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 bg-[#2B66FF] rounded-full mt-1.5" />
                          <div>
                            <p className="text-[12px] font-bold text-[#1B2559]">Berita baru dipublikasikan</p>
                            <p className="text-[10px] text-[#A3AED0]">"Sulut Ekspor Ikan ke Jepang" • 1 jam yang lalu</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5" />
                          <div>
                            <p className="text-[12px] font-bold text-[#1B2559]">Data Ekonomi Q2 2025 diperbarui</p>
                            <p className="text-[10px] text-[#A3AED0]">Oleh Admin KPwBI • 2 jam yang lalu</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-1.5" />
                          <div>
                            <p className="text-[12px] font-bold text-[#1B2559]">Proyek baru ditambahkan</p>
                            <p className="text-[10px] text-[#A3AED0]">"PLN Geothermal Minahasa" • Hari ini</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {currentView === 'notification' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Semua Notifikasi</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Daftar semua notifikasi sistem.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tandai Semua Dibaca
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <div className="divide-y divide-[#F0F3FF]">
                  <div className="py-4 flex items-center justify-between hover:bg-[#F4F7FE] px-4 rounded-xl cursor-pointer">
                    <div>
                      <p className="text-[14px] font-bold text-[#1B2559]">Investor baru terdaftar</p>
                      <p className="text-[12px] text-[#A3AED0]">John Doe dari Invest Corp mengajukan minat pada Kawasan Industri Bitung.</p>
                      <p className="text-[10px] text-[#A3AED0] mt-1">5 menit yang lalu</p>
                    </div>
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <div className="py-4 flex items-center justify-between hover:bg-[#F4F7FE] px-4 rounded-xl cursor-pointer">
                    <div>
                      <p className="text-[14px] font-bold text-[#1B2559]">Laporan bulanan siap</p>
                      <p className="text-[12px] text-[#A3AED0]">Laporan bulanan untuk bulan April 2026 telah digenerate.</p>
                      <p className="text-[10px] text-[#A3AED0] mt-1">1 jam yang lalu</p>
                    </div>
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <div className="py-4 flex items-center justify-between hover:bg-[#F4F7FE] px-4 rounded-xl cursor-pointer">
                    <div>
                      <p className="text-[14px] font-bold text-[#1B2559]">Sesi melonjak 20%</p>
                      <p className="text-[12px] text-[#A3AED0]">Trafik website meningkat signifikan dalam 2 jam terakhir.</p>
                      <p className="text-[10px] text-[#A3AED0] mt-1">2 jam yang lalu</p>
                    </div>
                    <span className="w-2 h-2 bg-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'hero' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Homepage Slider</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola headline dan background slider utama.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Slider
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Headline</th>
                      <th className="pb-3">Urutan</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Selamat Datang di Portal Investasi</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">1</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'partner' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Partner Logos</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola logo partner di halaman utama.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Logo
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Nama Partner</th>
                      <th className="pb-3">Urutan</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Bank Indonesia</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">1</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'slider' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Slider Content</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola gambar slider di halaman utama.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Data
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Judul Slider</th>
                      <th className="pb-3">Urutan</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Peta Potensi Investasi</td>
                      <td className="py-4 font-bold text-[#1B2559]">1</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'news' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen News & Event</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola berita dan acara tahunan.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Berita
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Judul</th>
                      <th className="pb-3">Kategori</th>
                      <th className="pb-3">Tanggal</th>
                      <th className="pb-3">Featured</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Sulut Ekspor Ikan ke Jepang</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">News</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">09 Mei 2026</td>
                      <td className="py-4 font-bold text-emerald-500">Ya</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'project' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Proyek Investasi</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola data proyek investasi.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Proyek
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Nama Proyek</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Sektor</th>
                      <th className="pb-3">Nilai (IDR)</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Kawasan Industri Bitung</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Ready-to-Offer</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Industry</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">2.5 T</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Kawasan Wisata Likupang</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Pipeline</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Tourism</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">1.2 T</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Pembangkit Listrik Minahasa</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Feasibility-Study</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Energy</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">800 M</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'user' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen User</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola pengguna sistem.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah User
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Nama</th>
                      <th className="pb-3">Email</th>
                      <th className="pb-3">Role</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Admin</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">admin@analytic.id</td>
                      <td className="py-4 font-bold text-[#1B2559]">Admin</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'presentation' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Presentation Book</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola file buku presentasi.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Buku
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Edisi</th>
                      <th className="pb-3">File (EN)</th>
                      <th className="pb-3">Tanggal</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Q2 2025 Edition</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">presbook-q2-2025.pdf</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">01 Mei 2026</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'macro' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Data Ekonomi</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola data indikator ekonomi makro.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Data
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Periode</th>
                      <th className="pb-3">PDRB (%)</th>
                      <th className="pb-3">Inflasi (%)</th>
                      <th className="pb-3">Realisasi (T)</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Q2 2025</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">5.62</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">2.45</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">3.08</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'umkm' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Produk UMKM</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola data produk UMKM.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Produk
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Nama Produk</th>
                      <th className="pb-3">Perusahaan</th>
                      <th className="pb-3">Kategori</th>
                      <th className="pb-3">Export Ready</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Narasi Vanilla</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">PT. Narasi</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Plantation-Spice</td>
                      <td className="py-4 font-bold text-emerald-500">Ya</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'district' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen Kab/Kota</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola data kabupaten dan kota.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#2B66FF] text-[13px] font-bold text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-[#1a53ff] transition-colors">
                  Tambah Daerah
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Nama</th>
                      <th className="pb-3">Ibukota</th>
                      <th className="pb-3">Populasi</th>
                      <th className="pb-3">IPM</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">Manado</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Manado</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">2,701,780</td>
                      <td className="py-4 font-extrabold text-[#1B2559]">81.86</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Edit</button>
                        <button className="text-rose-500 font-bold hover:underline">Hapus</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentView === 'eoi' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1B2559]">Manajemen EOI Submission</h1>
                  <p className="text-[13px] font-semibold text-[#A3AED0]">Kelola pengajuan minat investasi (EOI).</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0F3FF] overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#F0F3FF] text-[#A3AED0] uppercase text-[11px] font-extrabold tracking-wider">
                      <th className="pb-3">Investor</th>
                      <th className="pb-3">Perusahaan</th>
                      <th className="pb-3">Proyek</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3FF]">
                    <tr className="hover:bg-[#F4F7FE]">
                      <td className="py-4 font-bold text-[#1B2559]">John Doe</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Invest Corp</td>
                      <td className="py-4 text-[#A3AED0] font-semibold">Kawasan Industri Bitung</td>
                      <td className="py-4 font-bold text-blue-500">Received</td>
                      <td className="py-4 text-right">
                        <button className="text-[#2B66FF] font-bold hover:underline mr-3">Detail</button>
                        <button className="text-[#2B66FF] font-bold hover:underline">Update Status</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
