'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  FileText, 
  Timer, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Download,
  Info
} from 'lucide-react';

const steps = [
  {
    title: "Project Preparation",
    time: "2-4 Weeks",
    desc: "Identification of project potential, land availability, and preliminary feasibility study preparation.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Registration (OSS)",
    time: "1-3 Days",
    desc: "Registration through the Online Single Submission (OSS) system to obtain a Business Identification Number (NIB).",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Licensing & Permits",
    time: "Variable",
    desc: "Application for basic permits including location permits, environmental permits, and building permits (PBG).",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Implementation",
    time: "Ongoing",
    desc: "Construction and operational phase with quarterly reporting (LKPM) through the OSS portal.",
    icon: <ArrowRight className="w-6 h-6" />,
  }
];

export default function ProcedurePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" /> Investor Support
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Procedures & <span className="text-blue-600">Regulations</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            A clear, transparent, and streamlined roadmap for your investment journey in North Sulawesi. We utilize the national OSS RBA system for maximum efficiency.
          </p>
        </header>

        {/* Timeline Steps */}
        <div className="relative mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden lg:block" />
          
          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-0",
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-20 group">
                   <Card className={cn(
                     "border-none shadow-xl bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] w-full max-w-md group-hover:bg-blue-600 transition-all duration-500",
                     idx % 2 === 1 ? "lg:mr-auto lg:ml-0" : ""
                   )}>
                      <div className="flex justify-between items-start mb-6">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl text-blue-600 shadow-sm">
                           {step.icon}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs font-bold rounded-full">
                           <Timer className="w-3 h-3" /> {step.time}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{step.title}</h3>
                      <p className="text-slate-500 group-hover:text-blue-100 transition-colors leading-relaxed">
                        {step.desc}
                      </p>
                   </Card>
                </div>
                
                {/* Dot on line */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-600 flex items-center justify-center font-black text-blue-600 shadow-xl hidden lg:flex">
                   {idx + 1}
                </div>

                <div className="w-full lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg bg-white dark:bg-slate-900 p-8 flex flex-col gap-6 group">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl w-fit text-blue-600"><Download className="w-6 h-6" /></div>
            <h4 className="text-2xl font-black">Presentation Book</h4>
            <p className="text-sm text-slate-500 flex-1">Comprehensive guide covering economic potential, infrastructure, and detailed project profiles for 2025.</p>
            <Button className="rounded-xl font-bold bg-slate-950 hover:bg-slate-800 text-white">Download PDF (12MB)</Button>
          </Card>
          
          <Card className="border-none shadow-lg bg-white dark:bg-slate-900 p-8 flex flex-col gap-6 group">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl w-fit text-blue-600"><ExternalLink className="w-6 h-6" /></div>
            <div className="font-bold text-slate-400 uppercase tracking-widest text-xs">Licensing Portal</div>
            <h4 className="text-2xl font-black">OSS Indonesia</h4>
            <p className="text-sm text-slate-500 flex-1">The official portal for all business licensing in Indonesia. Managed by the Ministry of Investment (BKPM).</p>
            <Link 
              href="https://oss.go.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }), 
                "rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center"
              )}
            >
              Visit Website <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </Card>
          
          <Card className="border-none shadow-lg bg-white dark:bg-slate-900 p-8 flex flex-col gap-6 group">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl w-fit text-blue-600"><Info className="w-6 h-6" /></div>
            <div className="font-bold text-slate-400 uppercase tracking-widest text-xs">Support</div>
            <h4 className="text-2xl font-black">Inquiry Support</h4>
            <p className="text-sm text-slate-500 flex-1">Need help with the process? Our dedicated team at DPMPTSP is ready to assist you in every step.</p>
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }), 
                "rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center"
              )}
            >
              Contact Support <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Card>
        </div>
      </div>
    </main>
  );
}
