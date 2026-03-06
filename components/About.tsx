import React from 'react';
import { Globe, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      section: 'About Us',
      title: '글로벌 산업 자원,',
      subtitle: '무결한 신뢰로 연결합니다.',
      vision: {
        title: '우리의 비전',
        desc: '지오니스는 단순히 자원을 거래하는 것을 넘어 산업을 형성하고 국가를 건설하며 진보를 견인하는 연료를 전달합니다. 광범위한 네트워크와 전문성을 통해 고객사의 엄격한 요구사항을 완벽히 충족합니다.'
      },
      mission: {
        title: '우리의 미션',
        desc: '공급망 전 과정에서 정직과 효율성을 바탕으로 운영합니다. 에너지 생산지와 소비지를 연결하는 혁신적인 물류 체계를 구축하여 글로벌 산업의 지속 가능한 성장을 지원합니다.'
      },
      stats: {
        network: { value: '15+', label: '글로벌 자원 거점' },
        quality: { value: '100%', label: '품질 검증 준수' }
      },
      features: [
        { title: "전략적 소싱 네트워크", description: "러시아, 인도네시아 등 주요 자원 기지와의 강력한 파트너십을 통해 안정적인 공급을 보장합니다." },
        { title: "통합 공급망 관리", description: "광산에서 항구까지 이어지는 독자적인 물류 체계로 불확실성을 최소화하고 정시 배송을 실현합니다." },
        { title: "산업 인텔리전스", description: "LNG, 철강재, 정밀 화학 원료 등 각 산업 분야에 최적화된 고품질 제품만을 선별합니다." },
        { title: "책임 있는 공급 관행", description: "환경 영향을 고려한 투명한 운영 절차를 준수하여 장기적인 비즈니스 동맹을 구축합니다." }
      ]
    },
    en: {
      section: 'About Us',
      title: 'Global Resources,',
      subtitle: 'Delivered with Integrity.',
      vision: {
        title: 'Our Vision',
        desc: 'Geonix goes beyond trading; we deliver the fuel that forges industries, builds nations, and drives progress. Our extensive network meets the stringent requirements of global industrial consumers.'
      },
      mission: {
        title: 'Our Mission',
        desc: 'We operate with integrity and efficiency across the entire supply chain. By connecting producers and consumers with speed, we enhance value and ensure consistent delivery excellence.'
      },
      stats: {
        network: { value: '15+', label: 'Global Sourcing Regions' },
        quality: { value: '100%', label: 'SGS Quality Compliance' }
      },
      features: [
        { title: "Strategic Sourcing", description: "Strong associations with global resource hubs including Russia and Indonesia to ensure steady supply." },
        { title: "Integrated Logistics", description: "Seamless transportation from source to customer, minimizing bottlenecks through infrastructure control." },
        { title: "Industry Intelligence", description: "Supplying high-grade LNG, coal, and chemicals that meet exact international standards." },
        { title: "Sustainable Growth", description: "Guided by responsible practices and transparency to secure long-term reliable supply chains." }
      ]
    }
  };

  const t = content[language];
  const icons = [Globe, ShieldCheck, TrendingUp, Users];

  return (
    <section id="about" className="py-24 md:py-40 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="max-w-2xl">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
              <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">{t.section}</span>
            </div>

            {/* Title: Downsized and font-black */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-12 break-keep leading-[1.15] tracking-tighter">
              {t.title} <br />
              <span className="text-zinc-400">{t.subtitle}</span>
            </h3>
            
            {/* Vision & Mission: Refined spacing and colors */}
            <div className="space-y-12 text-zinc-500 font-medium leading-relaxed break-keep">
              <div className="pl-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FACC15]"></div>
                <strong className="text-[#1A1A1A] block text-lg mb-3 font-black tracking-tight">{t.vision.title}</strong>
                <p className="text-sm md:text-base text-zinc-500/80">{t.vision.desc}</p>
              </div>
              <div className="pl-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-200"></div>
                <strong className="text-[#1A1A1A] block text-lg mb-3 font-black tracking-tight">{t.mission.title}</strong>
                <p className="text-sm md:text-base text-zinc-500/80">{t.mission.desc}</p>
              </div>
            </div>

            {/* Stats: Minimalist line divider */}
            <div className="grid grid-cols-2 gap-12 border-t border-zinc-100 pt-12 mt-16">
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-3 tracking-tighter">{t.stats.network.value}</div>
                <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">{t.stats.network.label}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-3 tracking-tighter">{t.stats.quality.value}</div>
                <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">{t.stats.quality.label}</div>
              </div>
            </div>
          </div>

          {/* Features Grid: Professional card style (rounded-sm) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {t.features.map((feature, idx) => {
              const Icon = icons[idx];
              return (
                <div key={idx} className="p-8 rounded-sm bg-[#F8FAFC] border border-transparent hover:border-zinc-200 transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center text-[#1A1A1A] mb-8 bg-white shadow-sm rounded-sm">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-black text-[#1A1A1A] mb-4 tracking-tight">{feature.title}</h4>
                  <p className="text-zinc-500/80 text-[13px] leading-relaxed break-keep font-medium">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
