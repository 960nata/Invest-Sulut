'use client';

import { motion } from 'framer-motion';

const partners = [
  "BANK INDONESIA",
  "PEMPROV SULUT",
  "DPMPTSP",
  "KEMENTERIAN INVESTASI",
  "BKPM",
  "BPS SULUT",
  "BI SULUT",
  "OJK",
];

export default function InfinitePartnerStrip() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-[#00529C]">Partners</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            We collaborate with leading institutions to facilitate investment and development in Sulawesi Utara, ensuring a robust and sustainable economic growth.
          </p>
        </div>

        <div className="relative w-full flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div 
            className="flex gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -1500] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
          >
            {[...partners, ...partners, ...partners].map((name, idx) => (
              <div 
                key={idx} 
                className="text-2xl md:text-3xl font-black text-slate-200 hover:text-[#00529C] transition-all duration-300 cursor-default select-none tracking-tighter uppercase italic"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
