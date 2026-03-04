// src/components/Products.tsx
import React, { useState } from 'react';
import { Factory, Droplets, Ship, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Products: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const content = {
    ko: {
      section: '핵심 역량',
      title: '취급 품목 포트폴리오',
      desc: 'GEONIX는 글로벌 에너지 및 산업 자원 공급망의 핵심 파트너로서,\n엄격한 품질 기준을 통과한 최적의 자원을 안정적으로 공급합니다.',
      items: [
        {
          title: "광물 및 석탄 (Minerals & Coal)",
          description: "제철용 점결탄, 발전용 연료탄 및 코크스를 취급합니다.",
          details: {
            headline: "글로벌 산업의 기반을 닦는 고품질 자원 공급",
            features: [
              "Coking Coal, Thermal Coal, PCI, Met Coke 공급",
              "러시아, 모잠비크, 인도네시아 등 글로벌 소싱 네트워크",
              "SGS 및 국제 표준(ISO)에 따른 엄격한 품질 관리",
              "철강사 및 대형 발전소 맞춤형 물류 솔루션"
            ],
            fullDesc: "철강 및 에너지 산업의 필수 원료인 점결탄과 유연탄을 최적의 물류 시스템을 통해 전 세계 고객사에게 정교하고 안정적으로 전달합니다."
          }
        },
        {
          title: "천연가스 (LNG)",
          description: "북극의 한계를 극복한 친환경 에너지의 미래를 제안합니다.",
          details: {
            headline: "북극권을 개척하는 에너지 혁신과 독보적 물류",
            features: [
              "사할린-2, 야말 LNG 등 주요 에너지 허브 기반 공급",
              "북극항로(NSR) 및 쇄빙 LNG 운반선을 활용한 독자적 물류망",
              "부동항 무르만스크를 거점으로 한 연중 무휴 수출 역량",
              "저탄소 배출 기반의 친환경 저비용 에너지 공급 모델"
            ],
            fullDesc: "글로벌 에너지 파트너들과의 협력 및 혁신적인 액화 기술력을 바탕으로, 혹독한 환경에서도 중단 없는 에너지 공급을 실현하며 글로벌 탄소 중립 시대를 선도합니다."
          }
        },
        {
          title: "팜오일 글리세린 (Refined Glycerin)",
          description: "100% 식물 유래 고순도 프리미엄 원료를 공급합니다.",
          details: {
            headline: "99.7% 이상의 초고순도 정제 글리세린",
            features: [
              "말레이시아산 최상급 팜유(Palm Kernel) 기반 100% 식물성",
              "USP(미국), BP(영국), EP(유럽) 등 글로벌 약전 기준 충족",
              "Halal, Kosher, RSPO, MSPO 등 지속가능성 인증 완료",
              "제약, 식품(HACCP), 퍼스널 케어 분야 필수 고순도 원료"
            ],
            fullDesc: "최상급 원료로 생산된 99.7% 이상의 초고순도 글리세린은 투명한 성상과 높은 안정성을 지니고 있으며, 전 세계 제약 및 식품 시장에서 신뢰받는 프리미엄 원료입니다."
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
          description: "Handling Coking Coal, Thermal Coal, and Met Coke.",
          details: {
            headline: "Global Sourcing & Integrity in Resource Delivery",
            features: [
              "Supplying high-grade Coking Coal, PCI, and Met Coke",
              "Strong associations with mines in Russia, Mozambique, and Indonesia",
              "Stringent quality control meeting international standards",
              "Seamless transportation from mine to international customers"
            ],
            fullDesc: "We deliver the fuel that forges industries and drives progress, ensuring every shipment upholds our commitment to excellence through strategic logistics."
          }
        },
        {
          title: "Natural Gas (LNG)",
          description: "Leading the era of global carbon neutrality through innovation.",
          details: {
            headline: "Strategic Energy Hubs & Arctic Route Innovation",
            features: [
              "Key projects: Sakhalin-2, Yamal LNG, and Arctic LNG 2",
              "Utilizing Northern Sea Route (NSR) for efficient Asian delivery",
              "Year-round export accessibility via Murmansk ice-free port",
              "Environmentally conscious and low-cost production models"
            ],
            fullDesc: "Based on cooperation with global energy partners and innovative technology, we realize uninterrupted energy supply even in harsh environments."
          }
        },
        {
          title: "Refined Glycerin",
          description: "Supplying 100% vegetable-based high-purity solutions.",
          details: {
            headline: "Premium 99.7% Purity Vegetable Glycerin",
            features: [
              "100% Vegetable Source (Pure Malaysian Palm Kernel)",
              "Full compliance with USP, BP, and EP pharmacopeia grades",
              "Certified by RSPO, MSPO, Halal (JAKIM), and Kosher",
              "Safety & non-GMO guaranteed for Pharma and Food industries"
            ],
            fullDesc: "Our Refined Glycerin is produced through advanced distillation, ensuring maximum stability and purity for the most demanding global industries."
          }
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Factory, Ship, Droplets];

  return (
    <section id="products" className="py-20 md:py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-4">{t.section}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 break-keep leading-tight">{t.title}</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg whitespace-pre-line break-keep leading-relaxed opacity-90">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedProduct(idx)}
                className="bg-zinc-900/40 p-8 md:p-10 rounded-[2rem] border border-zinc-800/50 hover:border-zinc-500 transition-all duration-300 group cursor-pointer flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300 shadow-xl">
                  <Icon size={26} />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 break-keep leading-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 break-keep opacity-80">{item.description}</p>
                <div className="mt-auto flex items-center gap-2 text-[10px] md:text-xs font-black text-zinc-600 uppercase tracking-widest group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- 팝업 모달 --- */}
      {selectedProduct !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md transition-opacity" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[92vh] animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-white border border-zinc-700 shadow-lg">
                {React.createElement(icons[selectedProduct], { size: 32 })}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight break-keep">{t.items[selectedProduct].title}</h2>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-lg md:text-xl font-bold text-white mb-4 break-keep leading-snug">{t.items[selectedProduct].details.headline}</p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed break-keep opacity-90">{t.items[selectedProduct].details.fullDesc}</p>
              </div>

              <div className="space-y-4 bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                {t.items[selectedProduct].details.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-zinc-400 mt-1 shrink-0" size={18} />
                    <span className="text-zinc-300 text-sm md:text-base break-keep leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setSelectedProduct(null)}
              className="w-full mt-12 py-4.5 bg-white text-zinc-950 font-black rounded-2xl hover:bg-zinc-200 transition-all shadow-xl active:scale-[0.98] uppercase tracking-tighter"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
