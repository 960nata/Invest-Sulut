'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

import "flag-icons/css/flag-icons.min.css";

const languages = [
  { code: 'id', name: 'Bahasa Indonesia', short: 'ID', country: 'id' },
  { code: 'en', name: 'English (US)', short: 'EN', country: 'us' },
  { code: 'zh-CN', name: 'Mandarin (China)', short: 'ZH', country: 'cn' },
  { code: 'ja', name: 'Japanese', short: 'JA', country: 'jp' },
  { code: 'ko', name: 'Korean', short: 'KO', country: 'kr' },
  { code: 'ms', name: 'Malay (MY)', short: 'MY', country: 'my' },
  { code: 'sg', name: 'English (SG)', short: 'SG', country: 'sg' },
  { code: 'au', name: 'Australia', short: 'AU', country: 'au' },
];

function FlagIcon({ country }: { country: string }) {
  return <span className={`fi fi-${country} w-5 h-3.5 rounded-sm border border-slate-100`} />;
}

export default function LanguageSwitcher() {
  const [currentLangCode, setCurrentLangCode] = useState('id');

  const translatePage = (langCode: string) => {
    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event('change'));
      setCurrentLangCode(langCode);
    }
  };

  const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 outline-none cursor-pointer">
        <Globe className="w-3.5 h-3.5 opacity-80" />
        <span className="text-[11px] font-medium tracking-widest">{currentLang.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 rounded-xl shadow-xl border border-slate-100 p-1 bg-white/95 backdrop-blur-md">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between rounded-lg cursor-pointer text-xs font-medium p-2.5 px-3 hover:bg-slate-100 focus:bg-slate-100"
            onClick={() => translatePage(lang.code)}
          >
            <span className="text-slate-700">{lang.name}</span>
            <FlagIcon country={lang.country} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
