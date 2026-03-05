import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      address: '주소 정보가 여기에 표시됩니다 (추후 업데이트 예정)',
      copyright: `© ${new Date().getFullYear()} GEONIX. All rights reserved.`,
      quickLinks: '바로가기',
      contact: '연락처',
      menu: [
        { name: '회사소개', href: '#about' },
        { name: '에너지 및 산업자원', href: '#products' },
        { name: '서비스', href: '#services' },
        { name: '운영시스템', href: '#infrastructure' },
        { name: 'ESG 경영', href: '#sustainability' },
        { name: '문의하기', href: '#contact' },
      ]
    },
    en: {
      address: 'Address information will be displayed here',
      copyright: `© ${new Date().getFullYear()} GEONIX. All rights reserved.`,
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      menu: [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'Operations', href: '#infrastructure' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[#0A0F1A] text-white py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* 1. 로고 및 회사 설명 */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img 
                src="/images/geonix-logo.png" 
                alt="GEONIX Logo" 
                className="h-10 w-auto object-contain brightness-110"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed break-keep">
              {language === 'ko' 
                ? '지오니스는 신뢰와 투명성을 바탕으로 글로벌 에너지 자원과 산업 원자재의 가치를 연결하는 전략적 파트너입니다.' 
                : 'GEONIX is a strategic partner connecting the value of global energy resources and industrial raw materials based on trust and transparency.'}
            </p>
          </div>

          {/* 2. 바로가기 메뉴 (Navbar와 동기화) */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#FACC15] mb-6">{t.quickLinks}</h4>
            <ul className="space-y-4">
              {t.menu.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 연락처 정보 */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#FACC15] mb-6">{t.contact}</h4>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FACC15] shrink-0 border border-white/10">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Email</div>
                  <a href="mailto:roman@geonix.co.kr" className="text-white/80 hover:text-[#FACC15] font-bold transition-colors">roman@geonix.co.kr</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FACC15] shrink-0 border border-white/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Office</div>
                  <p className="text-white/80 font-bold">{t.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. 저작권 및 하단 바 */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-medium tracking-tight">
            {t.copyright}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/30 hover:text-white transition-colors cursor-default">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
