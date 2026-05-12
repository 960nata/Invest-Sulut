'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

const investmentItems = [
  { title: 'Why Sulut', href: '/investment/why-north-sulawesi', description: 'Explore North Sulawesi strategic position and economic performance.' },
  { title: 'Projects', href: '/investment/projects', description: 'Browse our catalog of investment-ready projects.' },
  { title: 'Map', href: '/investment/map', description: 'Interactive visualization of investment opportunities.' },
  { title: 'Procedure', href: '/investment/procedure', description: 'Step-by-step guide to investing in North Sulawesi.' },
  { title: 'Incentives', href: '/investment/incentives', description: 'Tax holidays, allowances, and SEZ-specific incentives.' },
  { title: 'Infrastructure', href: '/investment/infrastructure', description: 'Connectivity, utilities, and logistics details.' },
  { title: 'Economic Data', href: '/investment/economic-data', description: 'Real-time charts and economic snapshots.' },
  { title: 'Presentation Book', href: '/investment/presentation-book', description: 'Download our latest investor guides.' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-screen z-50 transition-all duration-500 flex justify-center",
        isScrolled ? "pt-2" : "pt-4"
      )}
    >
      <div className={cn(
        "w-[calc(100vw-2rem)] max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full border box-border relative",
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-14 px-4 lg:px-6" 
          : "bg-black/20 backdrop-blur-2xl border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] h-16 px-4 lg:px-8"
      )}>
        {/* Logo - Riru */}
        <Link href="/" className="flex items-center group relative h-5 w-20 md:h-8 md:w-32 transition-all duration-300">
          <Image 
            src="/logo_riru.avif" 
            alt="Logo" 
            fill
            className={cn(
              "object-contain transition-all duration-500",
              !isScrolled && "brightness-0 invert" 
            )}
            priority
          />
        </Link>

        {/* Center Nav - Ultra Thin Apple Style */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent px-0 py-0 h-auto text-[14px] font-bold transition-colors tracking-wide",
                  isScrolled 
                    ? "text-[#00529C] hover:text-[#003B73]" 
                    : "text-white opacity-80 hover:opacity-100"
                )}>
                  Investasi
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-2 p-6 md:grid-cols-2 lg:w-[800px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
                    {investmentItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="hover:bg-slate-100/50 rounded-2xl p-4 transition-colors group"
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/trade" className={cn(
                  "text-[14px] font-bold transition-colors tracking-wide",
                  isScrolled 
                    ? "text-[#00529C] hover:text-[#003B73]" 
                    : "text-white opacity-80 hover:opacity-100"
                )}>
                  Perdagangan
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/tourism" className={cn(
                  "text-[14px] font-bold transition-colors tracking-wide",
                  isScrolled 
                    ? "text-[#00529C] hover:text-[#003B73]" 
                    : "text-white opacity-80 hover:opacity-100"
                )}>
                  Pariwisata
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" className={cn(
                  "text-[14px] font-bold transition-colors tracking-wide",
                  isScrolled 
                    ? "text-[#00529C] hover:text-[#003B73]" 
                    : "text-white opacity-80 hover:opacity-100"
                )}>
                  Berita
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Actions - Apple Style Tiny Action */}
        <div className="hidden lg:flex items-center gap-6">
          <div className={cn("transition-all text-[14px] font-bold", isScrolled ? "text-[#00529C]" : "text-white opacity-80 hover:opacity-100")}>
             <LanguageSwitcher />
          </div>
          <Link 
            href="/contact" 
            className={cn(
              "px-5 py-2 rounded-full text-[12px] font-bold tracking-wide transition-all duration-300",
              isScrolled 
                ? "bg-[#00529C] text-white hover:bg-[#003B73] shadow-md shadow-blue-900/10" 
                : "bg-[#00529C] text-white hover:bg-white hover:text-[#00529C] shadow-lg shadow-black/20"
            )}
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Nav & Persistent Actions */}
        <div className="lg:hidden flex items-center gap-2 md:gap-4">
          <div className={cn("transition-opacity", isScrolled ? "text-[#00529C]" : "text-white")}>
            <LanguageSwitcher />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "rounded-full transition-colors h-10 w-10",
              isScrolled ? "text-[#00529C] hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Click outside overlay */}
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                
                {/* Popup Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full mt-6 bg-white border border-slate-200 rounded-3xl shadow-xl p-6 z-50"
                >
                  <div className="flex flex-col gap-6">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 border-b pb-2" onClick={() => setIsOpen(false)}>Menu Utama</Link>
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investasi</span>
                      {investmentItems.slice(0, 5).map(item => (
                        <Link key={item.title} href={item.href} className="text-base font-semibold text-slate-800 hover:text-[#00529C] transition-colors" onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 pt-3 border-t border-slate-100">
                      <Link href="/trade" className="text-xl font-bold tracking-tight text-slate-900" onClick={() => setIsOpen(false)}>Perdagangan</Link>
                      <Link href="/tourism" className="text-xl font-bold tracking-tight text-slate-900" onClick={() => setIsOpen(false)}>Pariwisata</Link>
                      <Link href="/news" className="text-xl font-bold tracking-tight text-slate-900" onClick={() => setIsOpen(false)}>Berita</Link>
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className="mt-4 bg-[#00529C] text-white px-6 py-3 rounded-full text-center font-bold text-sm shadow-xl shadow-blue-900/20"
                      onClick={() => setIsOpen(false)}
                    >
                      Hubungi Kami
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink 
        href={props.href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700",

          className
        )}
        {...props}
      >
        <div className="text-sm font-bold leading-none">{title}</div>
        <p className="line-clamp-2 text-xs leading-snug text-slate-500">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
