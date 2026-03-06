import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react'; 
import { useLanguage } from '../LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage(); 
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
      { name: '에너지 및 산업자원', href: '#products' },
      { name: '서비스', href: '#services' },
      { name: '운영시스템', href: '#infrastructure' },
      { name: 'ESG', href: '#sustainability' },
      { name: '문의하기', href: '#contact' },
    ],
    en: [
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#products' },
      { name: 'Services', href: '#services' },
      { name: 'Operations', href: '#infrastructure' },
      { name: 'ESG', href: '#sustainability' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const currentMenu = menuItems[language];

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
// src/components/Navbar.tsx 내부 로고 영역 수정

{/* 로고 영역 */}
<a href="/" className="flex items-center gap-2">
  <img 
    src="/images/geonix-logo_widthwise.png" 
    alt="GEONIX Logo" 
    /* 문제를 해결하기 위한 수정 포인트:
       1. h- 를 직접 키우는 대신, 모바일/데스크탑별 최적 높이를 설정했습니다.
       2. h-8(모바일) / md:h-12(데스크탑) 정도로 키워 가독성을 높였습니다. 
       3. w-auto 와 object-contain 으로 비율 뒤틀림을 방지했습니다.
    */
    className="h-8 md:h-12 w-auto object-contain transition-transform hover:scale-105"
  />
</a>

        {/* 2. 데스크탑 메뉴 (Dark Text) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {currentMenu.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-sm font-bold text-[#2A2A2A]/70 hover:text-[#FACC15] transition-colors uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 text-[#2A2A2A]/80 hover:bg-zinc-50 hover:text-[#2A2A2A] transition-all text-xs font-bold"
          >
            <Globe size={14} />
            <span>{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
        </div>

        {/* 3. 모바일 우측 영역 */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-[#2A2A2A]/70 hover:text-[#FACC15]"
          >
            <span className="text-xs font-black uppercase">{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2A2A2A]">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 (White) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 flex flex-col p-6 gap-4 md:hidden animate-in slide-in-from-top duration-300 shadow-xl">
          {currentMenu.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg font-bold text-[#2A2A2A] hover:text-[#FACC15]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
