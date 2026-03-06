import React from 'react';
import { Globe, ShieldCheck, Ship, Handshake } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Services: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      section: 'Our Services',
      title: '글로벌 원자재 중개 솔루션',
      desc: '지오니스는 단순 중개를 넘어, 신뢰할 수 있는 공급망 구축과\n리스크 없는 안전한 거래를 위한 전략적 파트너십을 제공합니다.',
      items: [
        { title: "글로벌 소싱 네트워크", description: "러시아, 인도네시아, 아프리카 등 자원 부국에 구축된 광범위한 네트워크를 활용하여 최적의 광산을 매칭해 드립니다." },
        { title: "품질 검증 및 리스크 관리", description: "현장 실사와 SGS 등 제3자 검정 기관을 통한 품질 관리를 수행하여, 불량 및 거래 리스크를 사전에 차단합니다." },
        { title: "통합 물류 및 운송 솔루션", description: "광산에서 도착항까지 복잡한 내륙 및 해상 운송 프로세스를 최적화하여 정시 납기와 물류비 절감을 실현합니다." },
        { title: "투명한 중개 파트너십", description: "합리적인 수수료와 투명한 계약 구조를 지향하며, 공급자와 구매자 모두가 만족하는 비즈니스 관계를 구축합니다." }
      ]
    },
    en: {
      section: 'Our Services',
      title: 'Global Raw Material Brokerage',
      desc: 'Beyond simple brokerage, Geonix provides strategic partnerships for\nbuilding reliable supply chains and ensuring secure transactions.',
      items: [
        { title: "Global Sourcing Network", description: "Leveraging our vast network in Russia, Indonesia, and Africa to match you with optimal resources." },
        { title: "Quality Verification", description: "Strict quality control via on-site inspections and SGS to preemptively eliminate transaction risks." },
        { title: "Integrated Logistics", description: "Optimizing complex inland and sea freight processes from mine to port, ensuring on-time delivery." },
        { title: "Transparent Partnership", description: "Aiming for transparent contract structures based on integrity, building sustainable relationships." }
      ]
    }
  };

  const t = content[language];
  const icons = [Globe, ShieldCheck, Ship, Handshake];

  return (
    <section id="services" className="py-24 md:py-40 bg-[#F8FAFC]">
      <div className="container mx-auto px-8 md:px-12 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center justify-center gap-3 mb-10">
          <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
          <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">{t.section}</span>
          <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
        </div>

        {/* Title: Downsized and font-black */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-8 break-keep leading-tight tracking-tighter">
          {t.title}
        </h3>
        
        {/* Description: text-sm ~ lg로 변경 및 대비 완화 */}
        <p className="text-zinc-500/60 max-w-2xl mx-auto text-sm md:text-base lg:text-lg mb-20 whitespace-pre-line break-keep font-medium tracking-tight">
          {t.desc}
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="group bg-white p-10 md:p-12 rounded-sm border border-zinc-100 hover:border-zinc-200 transition-all duration-300 flex flex-col items-start text-left shadow-sm hover:shadow-md">
                {/* Icon Container: Refined size */}
                <div className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center text-[#1A1A1A] mb-10 rounded-sm group-hover:bg-[#FACC15] group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                
                <h4 className="text-lg md:text-xl font-black text-[#1A1A1A] mb-5 break-keep tracking-tight">
                  {item.title}
                </h4>
                
                <p className="text-zinc-500/80 text-sm md:text-base leading-relaxed break-keep font-medium">
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
