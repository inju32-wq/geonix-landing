// src/components/Sustainability.tsx
import React from 'react';
import { Leaf, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Sustainability: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      section: 'ESG 경영',
      title: '지속 가능한 가치와 신뢰',
      desc: '지오니스는 에너지 및 산업 자원의 유통 과정에서 환경과 안전을 최우선으로 고려합니다.\n우리는 엄격한 글로벌 기준을 준수하는 파트너사들과 함께 지속 가능한 공급망을 구축해 나갑니다.',
      items: [
        {
          title: "환경 정책 및 기준 준수",
          description: "환경 영향을 최소화하기 위한 국제 표준을 준수하며, 지속 가능한 자원 관리 정책을 보유한 파트너들과 협력하여 공급망의 친환경성을 관리합니다."
        },
        {
          title: "공급망 안전 관리",
          description: "자원의 소싱부터 인도에 이르기까지 전 과정에서 작업자 안전과 운영 무결성을 최우선시하며, 검증된 안전 프로토콜을 통해 안정적인 서비스를 제공합니다."
        },
        {
          title: "투명한 윤리 경영",
          description: "모든 비즈니스 단계에서 투명성과 정직을 바탕으로 책임 있는 서비스를 제공하며, 지역사회와 산업 생태계 전반에 긍정적인 가치를 전달합니다."
        }
      ]
    },
    en: {
      section: 'ESG Management',
      title: 'Sustainability & Trust',
      desc: 'GEONIX prioritizes environmental stewardship and safety in the distribution of resources.\nWe build sustainable supply chains by collaborating with partners who adhere to rigorous global standards.',
      items: [
        {
          title: "Environmental Standards",
          description: "We work with partners committed to international environmental standards, ensuring that our supply chain supports sustainable resource management."
        },
        {
          title: "Supply Chain Safety",
          description: "We prioritize operational integrity and safety throughout the delivery process, utilizing infrastructure with proven safety protocols to ensure reliable service."
        },
        {
          title: "Integrity & Responsibility",
          description: "We provide responsible services based on transparency and honesty at every stage, delivering positive value to the industrial ecosystem."
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Leaf, ShieldCheck, Heart];
  // 에너지 테마인 골드와 환경의 그린을 믹스한 색상 포인트
  const iconColors = ["text-[#22C55E]", "text-[#FACC15]", "text-[#F87171]"];

  return (
    <section id="sustainability" className="py-24 md:py-36 bg-[#0D1A1A] border-t border-white/5">
       <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-black text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-10 break-keep leading-tight">{t.title}</h3>
          
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto mb-20 whitespace-pre-line break-keep leading-relaxed font-medium">
            {t.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
             {t.items.map((item, idx) => {
               const Icon = icons[idx];
               return (
                 <div key={idx} className="p-10 rounded-[2.5rem] bg-[#142626] border border-white/5 flex flex-col items-center group hover:border-[#FACC15]/30 transition-all duration-500 shadow-2xl">
                    <div className={`w-20 h-20 bg-[#0D1A1A] rounded-3xl flex items-center justify-center mb-10 border border-white/5 group-hover:bg-[#142626] group-hover:scale-110 transition-all duration-300 shadow-inner ${iconColors[idx]}`}>
                       <Icon size={36} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 break-keep tracking-tight">{item.title}</h4>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed break-keep font-medium opacity-80">
                       {item.description}
                    </p>
                 </div>
               );
             })}
          </div>
       </div>
    </section>
  );
};
