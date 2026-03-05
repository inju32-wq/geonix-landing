// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react'; // Globe 아이콘 추가
import { useLanguage } from '../LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage(); // setLanguage 추가
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    ko: [
      { name: '회사소개', href: '#about' },
      { name: '핵심역량', href: '#products' },
      { name: '서비스', href: '#services' },
      { name: '운영시스템', href: '#infrastructure' },
      { name: 'ESG', href: '#sustainability' },
      { name: '문의하기', href: '#contact' },
    ],
    en: [
      { name: 'About', href: '#about' },
      { name: 'Products', href: '#products' },
      { name: 'Services', href: '#services' },
      { name: 'Operations', href: '#infrastructure' },
      { name: 'ESG', href: '#sustainability' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const currentMenu = menuItems[language];

  // 언어 변경 함수
  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F1A]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* 1. 로고 영역 */}
        <a href="/" className="flex items-center">
          <img 
            src="/images/geonix-logo.png" 
            alt="GEONIX Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        </a>

        {/* 2. 데스크탑 우측 영역 (메뉴 + 언어 버튼) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {currentMenu.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-white/70 hover:text-[#FACC15] transition-colors uppercase tracking-widest">
                {item.name}
              </a>
            ))}
          </div>

          {/* 언어 변환 버튼 (데스크탑) */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all text-xs font-bold"
          >
            <Globe size={14} />
            <span>{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
        </div>

        {/* 3. 모바일 우측 영역 (언어 버튼 + 토글) */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-white/70 hover:text-[#FACC15]"
          >
            <span className="text-xs font-black uppercase">{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0F1A] border-b border-white/10 flex flex-col p-6 gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {currentMenu.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-white hover:text-[#FACC15]">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
