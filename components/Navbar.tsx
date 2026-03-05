// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Navbar: React.FC = () => {
  const { language } = useLanguage();
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F1A]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* 로고 영역: public 폴더를 기준으로 경로 설정 */}
        <a href="/" className="flex items-center">
          <img 
            src="/images/geonix-logo.png" 
            alt="GEONIX Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {currentMenu.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-white/70 hover:text-[#FACC15] transition-colors uppercase tracking-widest">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
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
