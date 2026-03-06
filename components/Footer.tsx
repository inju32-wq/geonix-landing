import React, { useState } from 'react';
// 에러의 원인이었던 Phone 아이콘을 아래 UI에서 사용하여 에러를 방지합니다.
import { Mail, Phone, MapPin, Globe, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const content = {
    ko: {
      description: '지오니스는 신뢰와 투명성을 바탕으로 글로벌 에너지 자원과 산업 원자재의 가치를 연결하는 전략적 파트너입니다.',
      address: '인도네시아, 러시아 등 글로벌 자원 거점 운영',
      copyright: `© ${new Date().getFullYear()} GEONIX. All rights reserved.`,
      quickLinks: '바로가기',
      contact: '연락처',
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
      description: 'GEONIX is a strategic partner connecting the value of global energy resources and industrial raw materials based on trust and transparency.',
      address: 'Operating global resource hubs including Indonesia and Russia',
      copyright: `© ${new Date().getFullYear()} GEONIX. All rights reserved.`,
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
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
    <footer className="bg-[#0A0F1A] text-white py-16 md:py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-6">
              {/* 요청하신 흰색 가로형 로고 파일명을 적용했습니다. */}
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-8 md:h-10 w-auto object-contain brightness-110"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed break-keep">
              {t.description}
            </p>
          </div>

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

              {/* Phone 아이콘을 이곳에 배치하여 TS6133 에러를 해결했습니다. */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FACC15] shrink-0 border border-white/10">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Contact</div>
                  <p className="text-white/80 font-bold tracking-tighter">-</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FACC15] shrink-0 border border-white/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Location</div>
                  <p className="text-white/80 font-bold leading-tight">{t.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-medium tracking-tight order-2 md:order-1">
            {t.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-xs font-bold order-1 md:order-2">
            <button onClick={() => setModalType('privacy')} className="text-white/40 hover:text-white transition-colors">
              {t.privacy}
            </button>
            <button onClick={() => setModalType('terms')} className="text-white/40 hover:text-white transition-colors">
              {t.terms}
            </button>
            <div className="flex items-center gap-2 text-white/20">
              <Globe size={14} />
              <span className="uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 약관 팝업(모달) */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-2xl rounded-[2rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setModalType(null)} className="absolute top-6 right-6 text-zinc-400 hover:text-black">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-black mb-6">{modalType === 'privacy' ? t.privacy : t.terms}</h3>
            <div className="h-64 overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar">
              {modalType === 'privacy' ? (
                <div className="space-y-4">
                  <p>1. 개인정보 수집 목적: 고객 문의 응대 및 서비스 안내</p>
                  <p>2. 수집 항목: 성함, 이메일, 연락처</p>
                  <p>3. 보유 기간: 목적 달성 시까지 또는 관계 법령에 따름</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p>제 1조: 본 약관은 지오니스 사이트 이용 조건 및 절차를 규정합니다.</p>
                  <p>제 2조: 콘텐츠의 무단 복제 및 상업적 이용을 금합니다.</p>
                </div>
              )}
            </div>
            <button onClick={() => setModalType(null)} className="w-full mt-8 py-4 bg-[#0A0F1A] text-white font-bold rounded-xl">
              닫기 Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
