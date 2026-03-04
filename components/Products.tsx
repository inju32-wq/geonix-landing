import React from 'react';
import { Flame, Factory, Droplets, Ship } from 'lucide-react'; // 아이콘 변경
import { useLanguage } from '../LanguageContext';

export const Products: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      section: '핵심 역량',
      title: '취급 품목 포트폴리오',
      desc: 'GEONIX는 글로벌 에너지 및 산업 자원 공급망의 핵심 파트너로서,\n엄격한 품질 기준을 통과한 최적의 자원을 안정적으로 공급합니다.',
      items: [
        {
          title: "광물 및 석탄 (Minerals & Coal)",
          description: "제철용 점결탄(Coking Coal), 발전용 연료탄(Thermal Coal) 및 코크스를 취급합니다. 러시아, 인도네시아 등 글로벌 소싱 네트워크와 SGS 품질 인증을 통해 산업의 근간이 되는 에너지를 공급합니다."
        },
        {
          title: "천연가스 (LNG)",
          description: "글로벌 에너지 파트너들과의 협력 및 혁신적인 액화 기술력을 바탕으로, 혹독한 환경에서도 중단 없는 에너지 공급을 실현하며 글로벌 탄소 중립 시대를 선도합니다."
        },
        {
          title: "팜오일 글리세린 (Refined Glycerin)",
          description: "말레이시아산 최상급 팜유를 원료로 한 99.7% 이상의 초고순도 식물성 글리세린을 공급합니다. USP/BP/EP 기준을 충족하며 제약, 식품, 화장품 산업에 필수적인 친환경 솔루션을 제공합니다."
        }
      ],
      disclaimer: {
        label: '면책 조항 (Disclaimer)',
        text: '지오니스는 전문 무역 중개 법인으로 제조사가 아닙니다. 상기 품목은 대표적인 취급 카테고리이며, 실제 공급 물량 및 세부 성분은 구체적인 주문 내역과 글로벌 시장 상황에 따라 맞춤 제안됩니다.'
      }
    },
    en: {
      section: 'Capabilities',
      title: 'Our Product Portfolio',
      desc: 'As a key partner in the global energy and industrial resource supply chain,\nGEONIX stably supplies optimal resources meeting strict quality standards.',
      items: [
        {
          title: "Minerals & Coal",
          description: "Handling Coking Coal, Thermal Coal, and Met Coke. We supply core industrial energy through a global sourcing network and SGS quality certification across Russia and Indonesia."
        },
        {
          title: "Natural Gas (LNG)",
          description: "Based on cooperation with global energy partners and innovative liquefaction technology, we realize uninterrupted energy supply even in harsh environments, leading the era of global carbon neutrality."
        },
        {
          title: "Refined Glycerin",
          description: "Supplying 99.7% high-purity vegetable glycerin derived from premium Malaysian palm oil. Meeting USP/BP/EP standards, we provide essential eco-friendly solutions for pharmaceutical, food, and cosmetic industries."
        }
      ],
      disclaimer: {
        label: 'Disclaimer',
        text: 'Geonix is a specialized trading brokerage, not a manufacturer. The above items are representative categories; actual supply volumes and specifications are proposed based on specific orders and global market conditions.'
      }
    }
  };

  const t = content[language];
  // 아이콘 배열을 3개로 조정 (Factory: 석탄, Ship: LNG, Droplets: 글리세린)
  const icons = [Factory, Ship, Droplets];

  return (
    <section id="products" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-2">{t.section}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.title}</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg whitespace-pre-line">
            {t.desc}
          </p>
        </div>

        {/* 3개 항목이므로 grid-cols-3으로 유지 또는 조정 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all group">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-zinc-500 text-sm leading-relaxed">
            <span className="text-zinc-300 font-semibold block mb-1">{t.disclaimer.label}</span> 
            {t.disclaimer.text}
          </p>
        </div>
      </div>
    </section>
  );
};
