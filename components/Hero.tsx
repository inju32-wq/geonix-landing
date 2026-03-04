import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      badge: 'Global Supply Chain Active',
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
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <iframe 
          src='https://my.spline.design/planetearth-lNfmVWGoOoZkMhSk1InKXY2C/' 
          frameBorder='0' width='100%' height='100%'
          title="Geonix Global Network 3D"
        ></iframe>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">{t.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2A2A2A] mb-8 leading-[1.15] break-keep tracking-tight">
            {t.title1}<br />
            <span className="text-[#FACC15] font-serif italic">{t.title2}</span>
          </h1>
          
          <p className="text-base md:text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed whitespace-pre-line break-keep font-medium">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#2A2A2A] text-white text-base font-bold rounded-xl hover:bg-black transition-all shadow-lg">
              {t.cta1}
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-zinc-200 text-[#2A2A2A] text-base font-bold rounded-xl hover:bg-zinc-50 transition-all">
              {t.cta2}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-300">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};
