import React, { useState } from 'react';
import { Factory, Droplets, Ship, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Products: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const productImages = [
    "https://images.unsplash.com/photo-1517089152318-42ec560349c0?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562615821-68d590f1c4d5?q=80&w=1200&auto=format&fit=crop"
  ];

  const content = {
    ko: {
      section: 'Capabilities',
      title: '에너지 및 산업자원 포트폴리오',
      desc: 'GEONIX는 글로벌 에너지 및 산업 자원 공급망의 핵심 파트너로서,\n엄격한 품질 기준을 통과한 최적의 자원을 안정적으로 공급합니다.',
      items: [
        { 
          title: "광물 및 석탄", 
          description: "제철용 점결탄과 발전용 연료탄 및 코크스를\n안정적인 프로세스로 공급합니다.", 
          details: { 
            headline: "글로벌 산업의 기반을 닦는 고품질 자원 공급", 
            features: ["Coking Coal, PCI, Met Coke 공급", "러시아, 인도네시아 등 글로벌 소싱 네트워크", "SGS 및 국제 표준(ISO) 품질 관리"], 
            fullDesc: "철강 및 에너지 산업의 필수 원료인 점결탄과 유연탄을 전 세계 고객사에게 안정적으로 전달합니다." 
          } 
        },
        { 
          title: "액화천연가스 (LNG)", 
          description: "북극권의 한계를 극복한 물류 시스템을 통해\n친환경 에너지의 미래를 제안합니다.", 
          details: { 
            headline: "북극권을 개척하는 에너지 혁신과 독보적 물류", 
            features: ["주요 에너지 허브 기반 공급", "북극항로(NSR) 및 쇄빙 운반선 활용", "저탄소 기반 친환경 에너지 모델"], 
            fullDesc: "글로벌 파트너들과의 협력을 바탕으로 혹독한 환경에서도 중단 없는 에너지 공급을 실현합니다." 
          } 
        },
        { 
          title: "CPO(팜원유) / 글리세린", 
          description: "인도네시아와 말레이시아의 우수한 팜 자원을 기반으로\n산업용 원유와 고순도 정제 원료를 공급합니다.", 
          details: { 
            headline: "지속 가능한 팜 자원 및 99.7% 초고순도 정제 글리세린", 
            features: ["인도네시아 및 말레이시아산 최상급 원료", "CPO(Crude Palm Oil) 및 고순도 Refined Glycerin", "USP, BP, EP 및 Halal, Kosher, RSPO 인증", "식품, 제약, 화장품 및 바이오 에너지용"], 
            fullDesc: "동남아시아 최대 생산지인 인도네시아와 말레이시아의 네트워크를 통해 지속 가능한 CPO와 글로벌 약전 기준을 충족하는 99.7% 이상의 고순도 글리세린을 안정적으로 공급합니다." 
          } 
        }
      ]
    },
    en: {
      section: 'Capabilities',
      title: 'Our Product Portfolio',
      desc: 'As a key partner in the global energy supply chain,\nGEONIX supplies optimal resources meeting strict quality standards.',
      items: [
        { title: "Minerals & Coal", description: "Handling Coking Coal, Thermal Coal, and Met Coke with consistent reliability.", details: { headline: "Global Sourcing & Integrity in Resource Delivery", features: ["High-grade Coking Coal & PCI", "Strong associations with global mines", "Stringent ISO quality control"], fullDesc: "We deliver the fuel that forges industries and drives progress globally." } },
        { title: "Liquefied Natural Gas (LNG)", description: "Leading the era of carbon neutrality through Arctic route innovation.", details: { headline: "Arctic Route Innovation & Strategic Hubs", features: ["Key energy hub projects", "Utilizing Northern Sea Route (NSR)", "Low-cost production models"], fullDesc: "We realize uninterrupted energy supply even in harsh environments." } },
        { title: "CPO / Refined Glycerin", description: "Supplying premium crude palm oil and high-purity glycerin from Indonesia and Malaysia.", details: { headline: "Sustainable Palm Resources & 99.7% Purity Solutions", features: ["Premium sourcing from Indonesia & Malaysia", "Crude Palm Oil (CPO) & Refined Glycerin", "Compliance with USP, BP, EP grades", "Halal, Kosher, and RSPO certified"], fullDesc: "Leveraging strong networks in Indonesia and Malaysia, we provide sustainable CPO and 99.7% high-purity refined glycerin that meets the highest international standards for various industrial applications." } }
      ]
    }
  };

  const t = content[language];
  const icons = [Factory, Ship, Droplets];

  return (
    <section id="products" className="py-24 md:py-40 bg-[#F8FAFC] border-y border-zinc-100">
      <div className="container mx-auto px-8 md:px-12 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-10">
          <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
          <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">{t.section}</span>
          <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
        </div>

        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8 tracking-tighter leading-tight">{t.title}</h3>
        <p className="text-zinc-500/60 text-sm md:text-base max-w-2xl mx-auto mb-20 whitespace-pre-line font-medium tracking-tight">
          {t.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedProduct(idx)} 
                className="group bg-white p-10 rounded-sm border border-zinc-100 hover:border-zinc-200 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col items-start text-left"
              >
                <div className="w-10 h-10 bg-[#F8FAFC] flex items-center justify-center text-[#1A1A1A] mb-10 rounded-sm group-hover:bg-[#FACC15] transition-colors shadow-sm">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-black text-[#1A1A1A] mb-4 tracking-tighter">{item.title}</h4>
                <p className="text-zinc-500/80 text-[13px] md:text-sm leading-relaxed mb-8 font-medium break-keep">{item.description}</p>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">
                  Learn More <ArrowRight size={14} className="text-[#FACC15]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0A0F1A]/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-6xl rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 max-h-[90vh]">
            <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto">
              <div className="flex justify-between items-start mb-12">
                <div>
                   <h2 className="text-[10px] font-bold text-[#FACC15] uppercase tracking-[0.2em] mb-4">Product Detail</h2>
                   <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter leading-none">{t.items[selectedProduct].title}</h2>
                </div>
                <button onClick={() => setSelectedProduct(null)} className="text-zinc-300 hover:text-[#1A1A1A] transition-colors">
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>
              <div className="space-y-8">
                <p className="text-base font-black text-[#1A1A1A] mb-4 leading-tight tracking-tight">{t.items[selectedProduct].details.headline}</p>
                <p className="text-zinc-500/80 text-[13px] md:text-sm leading-relaxed font-medium">{t.items[selectedProduct].details.fullDesc}</p>
                <div className="space-y-4 py-8 border-y border-zinc-100">
                  {t.items[selectedProduct].details.features.map((feature, fIdx) => (
                    <div key={`feature-${fIdx}`} className="flex items-center gap-4">
                      <CheckCircle2 size={16} className="text-[#FACC15] shrink-0" />
                      <span className="text-zinc-600 text-[13px] md:text-sm font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setSelectedProduct(null)} className="w-full py-4 bg-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all rounded-sm text-white">Close Specification</button>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 relative bg-zinc-100">
              <img src={productImages[selectedProduct]} alt={t.items[selectedProduct].title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-10" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
