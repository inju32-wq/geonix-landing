import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const content = {
    ko: {
      address: '인도네시아, 러시아 등 글로벌 자원 거점 운영',
      copyright: `© ${new Date().getFullYear()} GEONIX. All rights reserved.`,
      privacy: '개인정보처리방침',
      terms: '이용약관',
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
      address: 'Operating global resource hubs including Indonesia and Russia',
      copyright: `© ${new Date().getFullYear()} GEONIX. All rights reserved.`,
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
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
    <footer className="bg-[#0A0F1A] text-white py-12 md:py-20 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        {/* 상단 영역: 로고와 메뉴/연락처를 가로로 길게 배치 */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-12 border-b border-white/5">
          
          {/* 1. 로고 영역: 사이즈를 더 크게 키웠습니다. */}
          <div className="shrink-0">
            <a href="/">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-12 md:h-16 w-auto object-contain brightness-110"
              />
            </a>
          </div>

          {/* 2. 가로형 메뉴: '바로가기' 타이틀을 삭제하고 메뉴를 한 줄로 나열했습니다. */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {t.menu.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-white/50 hover:text-[#FACC15] transition-colors uppercase tracking-tight">
                {item.name}
              </a>
            ))}
          </nav>

          {/* 3. 가로형 연락처: '연락처' 타이틀을 삭제하고 아이콘 기반으로 가로 배치했습니다. */}
          <div className="flex flex-wrap items-center gap-8 text-sm">
            <div className="flex items-center gap-3 group">
              <Mail size={18} className="text-[#FACC15]" />
              <a href="mailto:roman@geonix.co.kr" className="text-white/60 group-hover:text-white transition-colors font-medium">roman@geonix.co.kr</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#FACC15]" />
              <span className="text-white/60 font-medium">-</span>
            </div>
          </div>
        </div>

        {/* 하단 영역: 주소, 약관, 저작권 */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <MapPin size={14} className="shrink-0" />
            <p>{t.address}</p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-xs font-bold text-white/30">
              <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">{t.privacy}</button>
              <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">{t.terms}</button>
            </div>
            <p className="text-white/20 text-[10px] font-medium tracking-widest uppercase">
              {t.copyright}
            </p>
            <div className="flex items-center gap-2 text-white/20">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 약관 팝업 UI */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setModalType(null)} className="absolute top-8 right-8 text-zinc-300 hover:text-black transition-colors"><X size={28} /></button>
            <h3 className="text-2xl font-black mb-8 tracking-tighter">{modalType === 'privacy' ? t.privacy : t.terms}</h3>
            <div className="h-60 overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar">
              {modalType === 'privacy' ? (
                <div className="space-y-4">
                  <p className="font-bold">지오니스는 개인정보를 소중히 다룹니다.</p>
                  <p>1. 수집 항목: 이름, 이메일, 연락처 등</p>
                  <p>2. 이용 목적: 비즈니스 문의 응대 및 서비스 제공</p>
                  <p>3. 보유 기간: 법정 기간 준수 및 목적 달성 후 즉시 파기</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p>지오니스 서비스 이용에 대한 약관입니다.</p>
                  <p>제 1조: 본 약관은 서비스 이용 조건 및 절차를 규정합니다.</p>
                  <p>제 2조: 사이트 내 모든 자산의 저작권은 지오니스에 있습니다.</p>
                </div>
              )}
            </div>
            <button onClick={() => setModalType(null)} className="w-full mt-10 py-4 bg-[#2A2A2A] text-white font-black rounded-xl hover:bg-black transition-all">닫기 Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};
