import React from 'react';
import { Anchor } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      items: [
        { label: '회사 소개', href: '#about' },
        { label: '핵심 서비스', href: '#services' },
        { label: '에너지 및 산업 자원', href: '#products' },
        { label: '물류 인프라', href: '#infrastructure' },
        { label: '지속 가능성', href: '#sustainability' },
        { label: '문의하기', href: '#contact' },
      ],
      privacy: '개인정보 처리방침',
      terms: '이용 약관',
      rights: '© 2026 GEONIX Energy & Industrial Resources. All rights reserved.'
    },
    en: {
      items: [
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Energy & Resources', href: '#products' },
        { label: 'Logistics', href: '#infrastructure' },
        { label: 'Sustainability', href: '#sustainability' },
        { label: 'Contact', href: '#contact' },
      ],
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: '© 2026 GEONIX Energy & Industrial Resources. All rights reserved.'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="bg-white text-zinc-950 p-1 rounded">
               <Anchor size={18} />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold tracking-tight text-white leading-none">GEONIX</span>
               <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Energy & Resources</span>
             </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-500 justify-center">
             {t.items.map((item, idx) => (
                <a key={idx} href={item.href} className="hover:text-white transition-colors">{item.label}</a>
             ))}
          </div>
          
          <div className="hidden md:block w-[100px]"></div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
           <div className="break-keep text-center md:text-left">{t.rights}</div>
           <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-400 transition-colors">{t.privacy}</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">{t.terms}</a>
           </div>
        </div>
      </div>
    </footer>
  );
};
