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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-16 md:h-20">
        
        {/* 1. 로고 영역: 부모 컨테이너의 높이를 고정하여 Navbar가 늘어나는 것을 방지했습니다. */}
        <a href="/" className="flex items-center h-full">
          <img 
            src="/images/geonix-logo_widthwise.png" 
            alt="GEONIX Logo" 
            /* h-12(모바일), md:h-16(데스크탑)으로 로고를 크게 키우되, 
               max-h-full을 통해 Navbar 높이를 넘지 않도록 제한했습니다. */
            className="h-12 md:h-30 w-auto object-contain transition-transform hover:scale-105 block"
          />
        </a>

        {/* 2. 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-10 h-full">
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

      {/* 모바일 메뉴 오버레이 */}
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
