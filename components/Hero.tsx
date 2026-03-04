// src/components/Hero.tsx 수정 부분
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      badge: '글로벌 에너지 공급망 가동 중',
      title1: '산업의 동력을 공급하는',
      title2: '글로벌 자원 파트너.',
      desc: '세계적 수준의 에너지 자원과 산업용 원자재를\n최고의 신뢰성으로 전 세계 공급망에 일관되게 전달합니다.',
      cta1: '솔루션 보기',
      cta2: '파트너십 문의'
    },
    en: {
      badge: 'Global Supply Chain Active',
      title1: 'Fueling Industry with',
      title2: 'Global Resource Solutions.',
      desc: 'Consistently delivering world-class energy resources and industrial raw materials with maximum reliability to the global market.',
      cta1: 'View Solutions',
      cta2: 'Inquire Now'
    }
  };

  const t = content[language];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-900 font-sans">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <iframe 
          src='https://my.spline.design/planetearth-lNfmVWGoOoZkMhSk1InKXY2C/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="Geonix Global Network 3D"
          className="w-full h-full pointer-events-auto"
        ></iframe>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-zinc-300 uppercase tracking-wider">{t.badge}</span>
          </div>
          
          {/* 제목: 글씨 크기를 조절하고 break-keep을 추가하여 단어 단위 줄바꿈 방지 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.2] break-keep">
            {t.title1}<br />
            <span className="font-serif italic text-zinc-400 block mt-2">{t.title2}</span>
          </h1>
          
          {/* 설명글: 한글 줄맞춤 최적화 (whitespace-pre-line 적용) */}
          <p className="text-base md:text-lg text-zinc-300 mb-8 max-w-xl leading-relaxed whitespace-pre-line break-keep opacity-90">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-zinc-950 text-sm md:text-base font-semibold rounded hover:bg-zinc-200 transition-all transform hover:-translate-y-1"
            >
              {t.cta1}
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-zinc-600 text-white text-sm md:text-base font-semibold rounded hover:bg-zinc-800 transition-all"
            >
              {t.cta2}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};
