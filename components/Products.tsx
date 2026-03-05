import React, { useState } from 'react';
import { Factory, Droplets, Ship, X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Products: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // 각 제품에 어울리는 대표 이미지 URL 설정
  const productImages = [
    "https://images.unsplash.com/photo-1517089152318-42ec560349c0?q=80&w=1200", // 광물 및 석탄
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200", // 천연가스 (LNG)
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200"  // 팜오일 글리세린
  ];

  const content = {
    ko: {
      section: 'Capabilities',
      title: '취급 품목 포트폴리오',
      desc: 'GEONIX는 글로벌 에너지 및 산업 자원 공급망의 핵심 파트너로서,\n엄격한 품질 기준을 통과한 최적의 자원을 안정적으로 공급합니다.',
      items: [
        { title: "광물 및 석탄", description: "제철용 점결탄, 발전용 연료탄 및 코크스를 취급합니다.", details: { headline: "글로벌 산업의 기반을 닦는 고품질 자원 공급", features: ["Coking Coal, PCI, Met Coke 공급", "러시아, 인도네시아 등 글로벌 소싱 네트워크", "SGS 및 국제 표준(ISO) 품질 관리"], fullDesc: "철강 및 에너지 산업의 필수 원료인 점결탄과 유연탄을 전 세계 고객사에게 안정적으로 전달합니다." } },
        { title: "천연가스 (LNG)", description: "북극의 한계를 극복한 친환경 에너지의 미래를 제안합니다.", details: { headline: "북극권을 개척하는 에너지 혁신과 독보적 물류", features: ["주요 에너지 허브 기반 공급", "북극항로(NSR) 및 쇄빙 운반선 활용", "저탄소 기반 친환경 에너지 모델"], fullDesc: "글로벌 파트너들과의 협력을 바탕으로 혹독한 환경에서도 중단 없는 에너지 공급을 실현합니다." } },
        { title: "팜오일 글리세린", description: "100% 식물 유래 고순도 프리미엄 원료를 공급합니다.", details: { headline: "99.7% 이상의 초고순도 정제 글리세린", features: ["말레이시아산 최상급 팜유 기반", "USP, BP, EP 글로벌 약전 기준 충족", "Halal, Kosher, RSPO 인증 완료"], fullDesc: "투명한 성상과 높은 안정성을 지닌 99.7% 이상의 초고순도 글리세린을 공급합니다." } }
      ]
    },
    en: {
      section: 'Capabilities',
      title: 'Our Product Portfolio',
      desc: 'As a key partner in the global energy supply chain,\nGEONIX supplies optimal resources meeting strict quality standards.',
      items: [
        { title: "Minerals & Coal", description: "Handling Coking Coal, Thermal Coal, and Met Coke.", details: { headline: "Global Sourcing & Integrity in Resource Delivery", features: ["High-grade Coking Coal & PCI", "Strong associations with global mines", "Stringent ISO quality control"], fullDesc: "We deliver the fuel that forges industries and drives progress globally." } },
        { title: "Natural Gas (LNG)", description: "Leading the era of carbon neutrality through innovation.", details: { headline: "Arctic Route Innovation & Strategic Hubs", features: ["Key energy hub projects", "Utilizing Northern Sea Route (NSR)", "Low-cost production models"], fullDesc: "We realize uninterrupted energy supply even in harsh environments." } },
        { title: "Refined Glycerin", description: "Supplying 100% vegetable-based high-purity solutions.", details: { headline: "Premium 99.7% Purity Vegetable Glycerin", features: ["Pure Malaysian Palm Kernel Source", "Compliance with USP, BP, EP grades", "Halal and Kosher certified"], fullDesc: "Our Refined Glycerin ensures maximum stability and purity for global industries." } }
      ]
    }
  };

  const t = content[language];
  const icons = [Factory, Ship, Droplets];

  return (
    <section id="products" className="py-24 md:py-36 bg-[#F1F5F9] border-y border-zinc-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-black text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#2A2A2A] mb-8 break-keep">{t.title}</h3>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-20 whitespace-pre-line break-keep">{t.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} onClick={() => setSelectedProduct(idx)} className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 hover:border-[#FACC15] transition-all cursor-pointer shadow-sm hover:shadow-2xl flex flex-col items-start text-left group">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 mb-8 group-hover:bg-[#2A2A2A] group-hover:text-white transition-all">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-black text-[#2A2A2A] mb-4 break-keep">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 break-keep">{item.description}</p>
                <span className="mt-auto text-[11px] font-black text-[#FACC15] uppercase tracking-widest">Details →</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- 개선된 2컬럼 팝업 모달 --- */}
      {selectedProduct !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2A2A2A]/40 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          
          <div className="relative bg-white border border-zinc-200 w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300 max-h-[90vh]">
            
            {/* LEFT: Text Content Area */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="md:hidden absolute top-6 right-6 text-zinc-400 hover:text-[#2A2A2A]"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-[#2A2A2A]">
                  {React.createElement(icons[selectedProduct], { size: 28 })}
                </div>
                <h2 className="text-2xl font-black text-[#2A2A2A] tracking-tighter">{t.items[selectedProduct].title}</h2>
              </div>

              {/* 가독성을 위해 폰트 크기 및 간격 미세 조정 */}
              <div className="flex-1">
                <p className="text-lg md:text-xl font-black text-[#2A2A2A] mb-4 leading-snug break-keep">
                  {t.items[selectedProduct].details.headline}
                </p>
                <p className="text-zinc-500 text-sm md:text-base mb-8 leading-relaxed break-keep font-medium">
                  {t.items[selectedProduct].details.fullDesc}
                </p>
                
                <div className="grid gap-3 bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-8">
                  {t.items[selectedProduct].details.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FACC15] mt-1 shrink-0" size={18} />
                      <span className="text-zinc-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setSelectedProduct(null)} 
                className="w-full py-4 bg-[#2A2A2A] text-white font-black rounded-xl hover:bg-black transition-all shadow-xl uppercase tracking-tighter text-sm"
              >
                Close
              </button>
            </div>

            {/* RIGHT: Image Content Area (Desktop only) */}
            <div className="hidden md:block w-1/2 relative min-h-[500px]">
              <img 
                src={productImages[selectedProduct]} 
                alt={t.items[selectedProduct].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/5" />
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-8 right-8 text-white bg-black/20 backdrop-blur-md p-2 rounded-full hover:bg-black/50 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Image (Optional: 상단에 배치하고 싶을 경우) */}
            <div className="md:hidden w-full h-48 relative shrink-0">
               <img 
                src={productImages[selectedProduct]} 
                alt={t.items[selectedProduct].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
