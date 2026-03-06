// src/components/Hero.tsx
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      badge: 'Global Supply Chain Active',
      title1: '산업의 동력을 공급하는',
      title2: '글로벌 자원 파트너',
      desc: '세계적 수준의 에너지 자원과 산업용 원자재를\n최고의 신뢰성으로 전 세계 공급망에 일관되게 전달합니다.',
      cta1: '솔루션 보기',
      cta2: '파트너십 문의'
    },
    en: {
      badge: 'Global Supply Chain Active',
      title1: 'Fueling Industry with',
      title2: 'Global Resource Solutions',
      desc: 'Consistently delivering world-class energy resources and industrial raw materials with maximum reliability to the global market.',
      cta1: 'View Solutions',
      cta2: 'Inquire Now'
    }
  };

  const t = content[language];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0F1A]">
      {/* 1. Spline 영역: 배경 최적화 */}
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <iframe 
          src='https://my.spline.design/planetearth-lNfmVWGoOoZkMhSk1InKXY2C/' 
          frameBorder='0' 
          title="Geonix Global Network 3D"
          style={{ width: '100%', height: 'calc(100% + 80px)', border: 'none' }}
          className="w-full"
        ></iframe>
      </div>

      {/* 2. 그라데이션: 가독성 및 깊이감 확보 */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0F1A] via-transparent to-[#0A0F1A]/20 pointer-events-none h-full" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/50 to-transparent pointer-events-none" />

      <div className="relative z-20 container mx-auto px-8 md:px-12 h-full flex flex-col justify-center">
        <div className="max-w-4xl pt-10">
          {/* Badge: 여백과 정갈함을 살린 스타일 */}
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-[0.3em]">{t.badge}</span>
          </div>
          
          {/* Title: font-black & tracking-tighter 적용 (사이즈 축소됨) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.15] break-keep tracking-tighter">
            {t.title1}<br />
            <span className="text-white">{t.title2}</span>
          </h1>
          
          {/* Description: text-sm ~ lg로 변경 및 색상 대비 완화(white/60) */}
          <p className="text-sm md:text-base lg:text-lg text-white/60 mb-12 max-w-xl leading-relaxed whitespace-pre-line break-keep font-medium tracking-tight">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* CTA 1: 정갈한 사각 버튼 (패딩 및 아이콘 사이즈 축소) */}
            <a href="#products" className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-[#0A0F1A] text-sm font-black rounded-sm hover:bg-[#FACC15] transition-all duration-300 shadow-xl">
              {t.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            {/* CTA 2: 투명 버튼 */}
            <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-3.5 bg-white/5 border border-white/20 text-white text-sm font-bold rounded-sm hover:bg-white/10 transition-all">
              {t.cta2}
            </a>
          </div>
        </div>

        {/* Scroll Indicator: 포스코풍의 정갈한 라인 지표 */}
        <div className="absolute bottom-12 left-8 md:left-12 flex flex-col items-center gap-4 text-white/20">
          <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
