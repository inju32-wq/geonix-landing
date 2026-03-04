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
        {
          title: "글로벌 소싱 네트워크",
          description: "러시아, 인도네시아, 아프리카 등 자원 부국에 구축된 광범위한 네트워크를 활용하여 귀사의 요구 사항에 부합하는 최적의 자원을 매칭해 드립니다."
        },
        {
          title: "품질 검증 및 리스크 관리",
          description: "현장 실사와 SGS 등 제3자 검정 기관을 통한 엄격한 품질 관리를 수행하여, 품질 불량 및 거래 리스크를 사전에 원천 차단합니다."
        },
        {
          title: "통합 물류 및 운송 솔루션",
          description: "광산에서 도착항까지 복잡한 내륙 및 해상 운송 프로세스를 최적화하여 정시 납기를 준수하고 물류비 절감을 실현합니다."
        },
        {
          title: "투명한 중개 파트너십",
          description: "합리적인 수수료를 기반으로 한 투명한 계약 구조를 지향하며, 공급자와 구매자 모두가 만족하는 지속 가능한 비즈니스 관계를 구축합니다."
        }
      ]
    },
    en: {
      section: 'Our Services',
      title: 'Global Raw Material Brokerage',
      desc: 'Beyond simple brokerage, Geonix provides strategic partnerships for\nbuilding reliable supply chains and ensuring risk-free, secure transactions.',
      items: [
        {
          title: "Global Sourcing Network",
          description: "Leveraging our vast network in Russia, Indonesia, and Africa to match you with optimal resources meeting your exact specifications."
        },
        {
          title: "Quality Verification",
          description: "Strict quality control via on-site inspections and third-party agencies like SGS to preemptively eliminate quality and transaction risks."
        },
        {
          title: "Integrated Logistics",
          description: "Optimizing complex inland and sea freight processes from mine to destination port, ensuring on-time delivery and cost efficiency."
        },
        {
          title: "Transparent Partnership",
          description: "Aiming for transparent contract structures based on integrity, building sustainable relationships that satisfy both suppliers and buyers."
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Globe, ShieldCheck, Ship, Handshake];

  return (
    <section id="services" className="py-24 md:py-36 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-sm font-bold text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#2A2A2A] mb-10 break-keep leading-tight">{t.title}</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base md:text-lg whitespace-pre-line break-keep leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-[#F8FAFC] p-10 md:p-12 rounded-[2.5rem] border border-zinc-100 hover:border-[#FACC15]/50 transition-all duration-500 group flex flex-col items-start text-left shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-[#2A2A2A] mb-8 group-hover:bg-[#FACC15] group-hover:text-white transition-all duration-300 shadow-md border border-zinc-50">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#2A2A2A] mb-4 break-keep tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed break-keep font-medium">
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
