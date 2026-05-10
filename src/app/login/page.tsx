"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Eye, EyeOff, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19] overflow-hidden">
      {/* Background Image - No Overlay */}
      <div className="absolute inset-0 bg-[url('/Images/Login/Login.avif')] bg-cover bg-center" />

      {/* Glassmorphic Card (The one you liked) */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white/5 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden m-4">
        
        {/* Left Side - Hero/Info */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-[#0B0F19]/60 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border-r border-white/5">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-space">SULUT</span>
              <span className="text-2xl font-bold text-white font-space">INVEST</span>
            </Link>
          </div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white font-space leading-tight"
            >
              Portal Investasi Terpadu <br />
              Sulawesi Utara
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white text-lg"
            >
              Akses dashboard investor, kelola proyek, dan pantau perkembangan ekonomi daerah secara real-time.
            </motion.p>
          </div>
          
          <div className="text-sm text-white">
            &copy; {new Date().getFullYear()} Forum Investasi SULUT. All rights reserved.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="md:hidden mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-space">SULUT</span>
              <span className="text-2xl font-bold text-white font-space">INVEST</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white font-space mb-2">Selamat Datang</h2>
            <p className="text-white">Silakan masuk untuk melanjutkan ke dashboard Anda.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="pl-10 h-12 bg-white/5 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="pl-10 pr-10 h-12 bg-white/5 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/20"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-white/40 data-[state=checked]:bg-blue-600" />
                <label htmlFor="remember" className="text-sm text-white cursor-pointer">Ingat saya</label>
              </div>
              <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">Lupa password?</Link>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-medium py-6">
              Masuk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>



          <div className="mt-8 text-center text-sm text-gray-500">
            Belum punya akun? <Link href="#" className="text-blue-400 hover:text-blue-300">Hubungi Admin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
