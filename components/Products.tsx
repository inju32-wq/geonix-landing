import React, { useState } from 'react';
import { Factory, Droplets, Ship, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Products: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const content = {
    ko: {
      section: 'Capabilities',
      title: '취급 품목 포트폴리오',
      desc: 'GEONIX는 글로벌 에너지 및 산업 자원 공급망의 핵심 파트너로서,\n엄격한 품질 기준을 통과한 최적의 자원을 안정적으로 공급합니다.',
      items: [
        {
          title: "광물 및 석탄",
          [cite_start]description: "제철용 점결탄, 발전용 연료탄 및 코크스를 취급합니다. [cite: 123, 140]",
          details: {
            headline: "글로벌 산업의 기반을 닦는 고품질 자원 공급",
            features: [
              [cite_start]"Coking Coal, Thermal Coal, PCI, Met Coke 공급 [cite: 138, 158]",
              [cite_start]"러시아, 모잠비크, 인도네시아 등 글로벌 소싱 네트워크 [cite: 128, 156]",
              [cite_start]"SGS 및 국제 표준(ISO)에 따른 엄격한 품질 관리 [cite: 235, 625, 804]",
              [cite_start]"철강사 및 대형 발전소 맞춤형 물류 솔루션 [cite: 148, 195]"
            ],
            [cite_start]fullDesc: "철강 및 에너지 산업의 필수 원료인 점결탄과 유연탄을 최적의 물류 시스템을 통해 전 세계 고객사에게 정교하고 안정적으로 전달합니다. [cite: 127, 140, 149]"
          }
        },
        {
          title: "천연가스 (LNG)",
          [cite_start]description: "북극의 한계를 극복한 친환경 에너지의 미래를 제안합니다. [cite: 27, 41]",
          details: {
            headline: "북극권을 개척하는 에너지 혁신과 독보적 물류",
            features: [
              [cite_start]"사할린-2, 야말 LNG 등 주요 에너지 허브 기반 공급 [cite: 3, 29]",
              [cite_start]"북극항로(NSR) 및 쇄빙 LNG 운반선을 활용한 독자적 물류망 [cite: 32, 37]",
              [cite_start]"부동항 무르만스크를 거점으로 한 연중 무휴 수출 역량 [cite: 24, 40]",
              [cite_start]"저탄소 배출 기반의 친환경 저비용 에너지 공급 모델 [cite: 41]"
            ],
            [cite_start]fullDesc: "글로벌 에너지 파트너들과의 협력 및 혁신적인 액화 기술력을 바탕으로, 혹독한 환경에서도 중단 없는 에너지 공급을 실현하며 글로벌 탄소 중립 시대를 선도합니다. [cite: 27, 31, 36]"
          }
        },
        {
          title: "팜오일 글리세린",
          [cite_start]description: "100% 식물 유래 고순도 프리미엄 원료를 공급합니다. [cite: 45, 84]",
          details: {
            headline: "99.7% 이상의 초고순도 정제 글리세린",
            features: [
              [cite_start]"말레이시아산 최상급 팜유(Palm Kernel) 기반 100% 식물성 [cite: 48, 81]",
              [cite_start]"USP, BP, EP 등 글로벌 약전 기준 충족 [cite: 45, 82]",
              [cite_start]"Halal, Kosher, RSPO, MSPO 등 지속가능성 인증 완료 [cite: 65, 66, 110]",
              [cite_start]"제약, 식품(HACCP), 퍼스널 케어 분야 필수 원료 [cite: 54, 111]"
            ],
            [cite_start]fullDesc: "최상급 원료로 생산된 99.7% 이상의 초고순도 글리세린은 투명한 성상과 높은 안정성을 지니고 있으며, 전 세계 제약 및 식품 시장에서 신뢰받는 원료입니다. [cite: 81, 82, 85]"
          }
        }
      ]
    },
    en: {
      section: 'Capabilities',
      title: 'Our Product Portfolio',
      desc: 'As a key partner in the global energy and industrial resource supply chain,\nGEONIX stably supplies optimal resources meeting strict quality standards.',
      items: [
        {
          title: "Minerals & Coal",
          [cite_start]description: "Handling Coking Coal, Thermal Coal, and Met Coke. [cite: 123, 140]",
          details: {
            headline: "Global Sourcing & Integrity in Resource Delivery",
            features: [
              [cite_start]"Supplying high-grade Coking Coal, PCI, and Met Coke [cite: 138, 158]",
              [cite_start]"Strong associations with mines in Russia and Indonesia [cite: 128, 156]",
              [cite_start]"Stringent quality control meeting international standards [cite: 235, 625, 804]",
              [cite_start]"Seamless transportation from mine to customers [cite: 162, 192]"
            ],
            [cite_start]fullDesc: "We deliver the fuel that forges industries and drives progress, ensuring every shipment upholds our commitment to excellence. [cite: 147, 149]"
          }
        },
        {
          title: "Natural Gas (LNG)",
          [cite_start]description: "Leading the era of global carbon neutrality through innovation. [cite: 27, 41]",
          details: {
            headline: "Strategic Energy Hubs & Arctic Route Innovation",
            features: [
              [cite_start]"Key projects: Sakhalin-2, Yamal LNG, and Arctic LNG 2 [cite: 3, 29, 34]",
              [cite_start]"Utilizing Northern Sea Route (NSR) for efficient delivery [cite: 32, 37]",
              [cite_start]"Year-round export accessibility via Murmansk port [cite: 24, 40]",
              [cite_start]"Environmentally conscious and low-cost production models [cite: 41]"
            ],
            [cite_start]fullDesc: "Based on cooperation with global energy partners and innovative technology, we realize uninterrupted energy supply even in harsh environments. [cite: 27, 31, 36]"
          }
        },
        {
          title: "Refined Glycerin",
          [cite_start]description: "Supplying 100% vegetable-based high-purity solutions. [cite: 45, 84]",
          details: {
            headline: "Premium 99.7% Purity Vegetable Glycerin",
            features: [
              [cite_start]"100% Vegetable Source (Pure Malaysian Palm Kernel) [cite: 48, 81]",
              [cite_start]"Full compliance with USP, BP, and EP grades [cite: 45, 82]",
              [cite_start]"Certified by RSPO, MSPO, Halal, and Kosher [cite: 65, 66, 110]",
              [cite_start]"Safety & non-GMO guaranteed for Pharma and Food [cite: 54, 87, 111]"
            ],
            [cite_start]fullDesc: "Our Refined Glycerin is produced through advanced distillation, ensuring maximum stability and purity for global industries. [cite: 81, 82, 85]"
          }
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Factory, Ship, Droplets];

  return (
    <section id="products" className="py-24 md:py-36 bg-[#F1F5F9] relative border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#2A2A2A] mb-8 break-keep leading-tight">{t.title}</h3>
          <p className="text-zinc-600 max-w-2xl mx-auto text-base md:text-lg whitespace-pre-line break-keep leading-relaxed font-medium">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedProduct(idx)}
                className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 hover:border-[#FACC15] transition-all duration-500 group cursor-pointer flex flex-col items-start shadow-sm hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 mb-10 group-hover:bg-[#2A2A2A] group-hover:text-white transition-all shadow-inner">
                  <Icon size={30} />
                </div>
                <h4 className="text-xl md:text-2xl font-black text-[#2A2A2A] mb-6 break-keep tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10 break-keep font-medium">{item.description}</p>
                <div className="mt-auto flex items-center gap-3 text-[11px] font-black text-[#FACC15] uppercase tracking-widest group-hover:text-[#2A2A2A] transition-colors">
                  <span>View Details</span>
                  <div className="w-8 h-[1px] bg-zinc-200 group-hover:bg-[#2A2A2A] transition-all"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- LIGHT THEMED MODAL --- */}
      {selectedProduct !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-[#2A2A2A]/40 backdrop-blur-md transition-opacity" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white border border-zinc-200 w-full max-w-3xl rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-10 right-10 text-zinc-300 hover:text-[#2A2A2A] transition-colors p-3 hover:bg-zinc-50 rounded-full"
            >
              <X size={28} />
            </button>

            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 bg-zinc-50 rounded-[1.5rem] flex items-center justify-center text-[#2A2A2A] border border-zinc-100 shadow-sm">
                {React.createElement(icons[selectedProduct], { size: 40 })}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#2A2A2A] tracking-tighter break-keep">{t.items[selectedProduct].title}</h2>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-xl md:text-2xl font-black text-[#2A2A2A] mb-6 break-keep leading-snug">{t.items[selectedProduct].details.headline}</p>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed break-keep font-medium">{t.items[selectedProduct].details.fullDesc}</p>
              </div>

              <div className="grid gap-4 bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100">
                {t.items[selectedProduct].details.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-5">
                    <CheckCircle2 className="text-[#FACC15] mt-1 shrink-0" size={20} />
                    <span className="text-zinc-600 text-sm md:text-base break-keep leading-relaxed font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setSelectedProduct(null)}
              className="w-full mt-14 py-5 bg-[#2A2A2A] text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl active:scale-[0.98] uppercase tracking-tighter text-lg"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
