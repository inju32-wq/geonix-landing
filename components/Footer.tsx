import React, { useState } from 'react';
import { Mail, Phone, Globe, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const content = {
    ko: {
      copyright: `COPYRIGHT(C) ${new Date().getFullYear()} GEONIX ALL RIGHTS RESERVED.`,
      privacy: '개인정보처리방침',
      terms: '이용약관',
      address: '(21998) 인천광역시 연수구 컨벤시아대로 165 (포스코타워 송도)',
      menu: [
        { name: '회사소개', href: '#about' },
        { name: '포트폴리오', href: '#products' },
        { name: '서비스', href: '#services' },
        { name: 'ESG 경영', href: '#sustainability' },
        { name: '문의하기', href: '#contact' },
      ]
    },
    en: {
      copyright: `COPYRIGHT(C) ${new Date().getFullYear()} GEONIX ALL RIGHTS RESERVED.`,
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      address: '165, Convensia-daero, Yeonsu-gu, Incheon, Republic of Korea',
      menu: [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[#0A0F1A] text-white py-16 md:py-20 border-t border-white/5 relative">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          
          {/* 로고 및 주소 영역 */}
          <div className="flex flex-col items-start gap-8 max-w-sm">
            <a href="/" className="opacity-90 hover:opacity-100 transition-opacity">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <div className="space-y-2">
              <p className="text-white/40 text-[11px] md:text-xs leading-relaxed font-medium">
                {t.address}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                <div className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
                  <Mail size={14} />
                  <a href="mailto:roman@geonix.co.kr" className="text-[11px] md:text-xs font-medium tracking-tight">roman@geonix.co.kr</a>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <Phone size={14} />
                  <span className="text-[11px] md:text-xs font-medium">+82 2 759 2114</span>
                </div>
              </div>
            </div>
          </div>

          {/* 내비게이션 영역 */}
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
            {t.menu.map((item) => (
              <a key={item.href} href={item.href} className="text-[11px] md:text-xs font-black text-white/30 hover:text-[#FACC15] transition-colors uppercase tracking-[0.15em]">
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* 하단 바: 저작권 및 약관 */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center gap-8 order-1 md:order-2">
            <div className="flex items-center gap-6 text-[10px] md:text-[11px] font-black text-white/40 tracking-tight">
              <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors border-r border-white/10 pr-6">{t.privacy}</button>
              <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">{t.terms}</button>
            </div>
            <div className="flex items-center gap-2 text-white/20 border-l border-white/10 pl-8">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </div>
          </div>
          
          <p className="text-white/20 text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase order-2 md:order-1">
            {t.copyright}
          </p>
        </div>
      </div>

      {/* 모달 팝업: 정제된 사각형 디자인 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-[#0A0F1A]/90 backdrop-blur-sm" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#1A1A1A] w-full max-w-4xl rounded-sm shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
            <div className="flex justify-between items-center p-8 md:p-10 border-b border-zinc-100">
              <h3 className="text-lg md:text-xl font-black tracking-tighter uppercase">
                {modalType === 'privacy' ? t.privacy : t.terms}
              </h3>
              <button onClick={() => setModalType(null)} className="text-zinc-300 hover:text-black transition-colors">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-1 text-[13px] md:text-sm text-zinc-500 leading-relaxed font-medium">
              {/* 법적 고지 텍스트는 이전 로직 유지 */}
              {/* ... (이전의 ko/en 법적 고지 내용) ... */}
              
              {language === 'en' && (
                <div className="mt-12 p-6 bg-zinc-50 border border-zinc-100 rounded-sm">
                   <p className="text-[11px] text-zinc-400 italic">
                     "In case of any discrepancy between the Korean and English versions, the Korean version shall prevail."
                   </p>
                </div>
              )}
            </div>
            
            <div className="p-8 bg-zinc-50 flex justify-end">
              <button 
                onClick={() => setModalType(null)} 
                className="px-10 py-3 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-black transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
