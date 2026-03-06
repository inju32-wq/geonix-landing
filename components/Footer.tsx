import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  // 팝업 상태 관리: 'privacy'(개인정보), 'terms'(이용약관), null(닫힘)
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
          
          {/* 1. 로고 및 회사 설명 (흰색 가로형 로고 적용) */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-6">
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

          {/* 2. 바로가기 메뉴 */}
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
                  <a href="mailto:roman@geonix.co.kr" className="text-white/80 hover:text-[#FACC15] font-bold transition-colors tracking-tight">roman@geonix.co.kr</a>
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

        {/* 4. 저작권 및 약관 링크 영역 */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-medium tracking-tight order-2 md:order-1">
            {t.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-xs font-bold order-1 md:order-2">
            {/* 약관 버튼 클릭 시 모달 타입 설정 */}
            <button 
              onClick={() => setModalType('privacy')}
              className="text-white/40 hover:text-white transition-colors"
            >
              {t.privacy}
            </button>
            <button 
              onClick={() => setModalType('terms')}
              className="text-white/40 hover:text-white transition-colors"
            >
              {t.terms}
            </button>
            <div className="flex items-center gap-2 text-white/20">
              <Globe size={14} />
              <span className="uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 팝업(모달) UI - 실제 약관 내용을 이곳에 넣으시면 됩니다 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 배경 오버레이 */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setModalType(null)} 
          />
          
          {/* 팝업 본체 */}
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-2xl rounded-[2rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setModalType(null)} 
              className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-black mb-6">
              {modalType === 'privacy' ? t.privacy : t.terms}
            </h3>
            
            <div className="h-64 overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar">
              {modalType === 'privacy' ? (
                // 개인정보처리방침 내용 예시
                <div className="space-y-4">
                  <p>1. 개인정보의 수집 및 이용 목적: 지오니스는 고객 문의 응대 및 서비스 제공을 위해 최소한의 개인정보를 수집합니다.</p>
                  <p>2. 수집하는 항목: 성함, 이메일 주소, 연락처 등</p>
                  <p>3. 보유 및 이용 기간: 목적 달성 후 즉시 파기하거나 관계 법령에 따라 보관합니다.</p>
                </div>
              ) : (
                // 이용약관 내용 예시
                <div className="space-y-4">
                  <p>제 1조: 본 약관은 지오니스 웹사이트가 제공하는 서비스 이용 조건 및 절차를 규정합니다.</p>
                  <p>제 2조: 사용자는 본 웹사이트의 콘텐츠를 무단 복제하거나 상업적 용도로 사용할 수 없습니다.</p>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setModalType(null)} 
              className="w-full mt-8 py-4 bg-[#0A0F1A] text-white font-bold rounded-xl hover:bg-[#1a2333] transition-colors"
            >
              닫기 Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
