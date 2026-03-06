import React, { useState } from 'react';
import { Mail, Phone, Globe, X } from 'lucide-react'; // MapPin 제거
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const content = {
    ko: {
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
    <footer className="bg-[#0A0F1A] text-white py-12 md:py-16 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        {/* 상단 섹션: 로고와 (메뉴 + 연락처)를 양 옆으로 배치 */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* 1. 로고 영역: Navbar와 동일하게 h-20 수준으로 크게 확대 */}
          <div className="shrink-0 flex items-center h-20">
            <a href="/">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-14 md:h-18 w-auto object-contain brightness-110 transition-transform hover:scale-105"
              />
            </a>
          </div>

          {/* 2. 정보 영역: 메뉴(상단)와 연락처(하단)를 수직으로 정렬 */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            {/* 메뉴 한 줄 나열 */}
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {t.menu.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-bold text-white/70 hover:text-[#FACC15] transition-colors uppercase tracking-tight">
                  {item.name}
                </a>
              ))}
            </nav>

            {/* 연락처 한 줄 나열 (ABOUT US 메뉴 아래 위치하도록 설정) */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
              <div className="flex items-center gap-3 group">
                <Mail size={18} className="text-[#FACC15]" />
                <a href="mailto:roman@geonix.co.kr" className="text-sm text-white/50 group-hover:text-white transition-colors font-medium">
                  roman@geonix.co.kr
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={18} className="text-[#FACC15]" />
                <span className="text-sm text-white/50 font-medium">-</span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 섹션: 약관 및 저작권 (위치 정보 MapPin 삭제) */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 order-2 md:order-1">
            <p className="text-white/20 text-[10px] font-medium tracking-widest uppercase">
              {t.copyright}
            </p>
          </div>
          
          <div className="flex items-center gap-8 order-1 md:order-2">
            <div className="flex items-center gap-6 text-xs font-bold text-white/30">
              <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">
                {t.privacy}
              </button>
              <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">
                {t.terms}
              </button>
            </div>
            <div className="flex items-center gap-2 text-white/20">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 약관 팝업 모달 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setModalType(null)} className="absolute top-8 right-8 text-zinc-300 hover:text-black">
              <X size={28} />
            </button>
            <h3 className="text-2xl font-black mb-8">{modalType === 'privacy' ? t.privacy : t.terms}</h3>
            <div className="h-60 overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar">
              {modalType === 'privacy' ? (
                <div className="space-y-4">
                  <p>지오니스는 글로벌 자원 트레이딩 기업으로서 귀하의 개인정보를 안전하게 보호합니다.</p>
                  <p>1. 수집 항목: 성함, 이메일, 연락처</p>
                  <p>2. 이용 목적: 비즈니스 파트너십 문의 대응</p>
                  <p>3. 보유 기간: 관련 법령 및 회사 내부 규정에 따름</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p>본 약관은 지오니스 웹사이트 이용에 관한 제반 사항을 규정합니다.</p>
                  <p>사이트 내 모든 기업 로고 및 콘텐츠의 지식재산권은 지오니스에 귀속됩니다.</p>
                </div>
              )}
            </div>
            <button onClick={() => setModalType(null)} className="w-full mt-10 py-4 bg-[#0A0F1A] text-white font-black rounded-xl hover:scale-[1.02] transition-transform">
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
