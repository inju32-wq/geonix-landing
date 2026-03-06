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
    // 1. 배경색 변경: 투명/딥네이비에서 흰색(bg-white)으로 변경하고 하단 그림자(shadow-sm)를 추가했습니다.
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* 로고 영역 */}
        <a href="/" className="flex items-center">
          <img 
            src="/images/geonix-logo_widthwise.png" 
            alt="GEONIX Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        </a>

        {/* 2. 데스크탑 메뉴: 글자색을 흰색에서 진한 회색(text-[#2A2A2A])으로 변경했습니다. */}
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

          {/* 3. 언어 변환 버튼: 보더 컬러(border-zinc-200)와 텍스트 컬러를 밝은 배경에 맞게 조정했습니다. */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 text-[#2A2A2A]/80 hover:bg-zinc-50 hover:text-[#2A2A2A] transition-all text-xs font-bold"
          >
            <Globe size={14} />
            <span>{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
        </div>

        {/* 4. 모바일 우측 영역: 아이콘 컬러를 진한 회색(text-[#2A2A2A])으로 변경했습니다. */}
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

      {/* 5. 모바일 메뉴 오버레이: 배경을 흰색(bg-white)으로, 글자색을 어둡게 변경했습니다. */}
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
