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
        title: 'Our Vision',
        [cite_start]desc: '지오니스는 단순히 자원을 거래하는 것을 넘어 산업을 형성하고 국가를 건설하며 진보를 견인하는 연료를 전달합니다. [cite: 147] [cite_start]광범위한 네트워크와 전문성을 통해 고객사의 엄격한 요구사항을 완벽히 충족합니다. [cite: 148]'
      },
      mission: {
        title: 'Our Mission',
        [cite_start]desc: '공급망 전 과정에서 정직과 효율성을 바탕으로 운영합니다. [cite: 143] [cite_start]에너지 생산지와 소비지를 연결하는 혁신적인 물류 체계를 구축하여 글로벌 산업의 지속 가능한 성장을 지원합니다. [cite: 150]'
      },
      stats: {
        network: { value: '15+', label: '글로벌 자원 거점 (Regions)' },
        quality: { value: '100%', label: 'SGS 품질 검증 준수 (Compliance)' }
      },
      features: [
        [cite_start]{ title: "전략적 소싱 네트워크", description: "러시아, 인도네시아 등 주요 자원 기지와의 강력한 파트너십을 통해 안정적인 공급을 보장합니다. [cite: 128, 142]" },
        [cite_start]{ title: "통합 공급망 관리", description: "광산에서 항구까지 이어지는 독자적인 물류 체계로 불확실성을 최소화하고 정시 배송을 실현합니다. [cite: 195, 198]" },
        [cite_start]{ title: "산업 인텔리전스", description: "LNG, 철강재, 정밀 화학 원료 등 각 산업 분야에 최적화된 고품질 제품만을 선별합니다. [cite: 148, 164]" },
        [cite_start]{ title: "책임 있는 공급 관행", description: "환경 영향을 고려한 투명한 운영 절차를 준수하여 장기적인 비즈니스 동맹을 구축합니다. [cite: 145, 151]" }
      ]
    },
    en: {
      section: 'About Us',
      title: 'Global Resources,',
      subtitle: 'Delivered with Integrity.',
      vision: {
        title: 'Our Vision',
        [cite_start]desc: 'Geonix goes beyond trading; we deliver the fuel that forges industries, builds nations, and drives progress. [cite: 147] [cite_start]Our extensive network meets the stringent requirements of global industrial consumers. [cite: 148]'
      },
      mission: {
        title: 'Our Mission',
        [cite_start]desc: 'We operate with integrity and efficiency across the entire supply chain. [cite: 143] [cite_start]By connecting producers and consumers with speed, we enhance value and ensure consistent delivery excellence. [cite: 150]'
      },
      stats: {
        network: { value: '15+', label: 'Global Sourcing Regions' },
        quality: { value: '100%', label: 'SGS Quality Compliance' }
      },
      features: [
        [cite_start]{ title: "Strategic Sourcing", description: "Strong associations with global resource hubs including Russia and Indonesia to ensure steady supply. [cite: 128, 142]" },
        [cite_start]{ title: "Integrated Logistics", description: "Seamless transportation from source to customer, minimizing bottlenecks through infrastructure control. [cite: 195, 198]" },
        [cite_start]{ title: "Industry Intelligence", description: "Supplying high-grade LNG, coal, and chemicals that meet exact international standards. [cite: 148, 164]" },
        [cite_start]{ title: "Sustainable Growth", description: "Guided by responsible practices and transparency to secure long-term reliable supply chains. [cite: 145, 151]" }
      ]
    }
  };

  const t = content[language];
  const icons = [Globe, ShieldCheck, TrendingUp, Users];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#F8FAFC] relative overflow-hidden border-y border-zinc-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#2A2A2A] mb-10 break-keep leading-[1.2]">
              {t.title} <br />
              <span className="text-zinc-400 font-serif italic">{t.subtitle}</span>
            </h3>
            
            <div className="space-y-10 text-zinc-600 text-base md:text-lg leading-relaxed break-keep font-medium">
              <div className="border-l-4 border-[#FACC15] pl-8">
                <strong className="text-[#2A2A2A] block text-xl mb-3 font-bold">{t.vision.title}</strong>
                <p className="opacity-90">{t.vision.desc}</p>
              </div>
              <div className="border-l-4 border-zinc-200 pl-8">
                <strong className="text-[#2A2A2A] block text-xl mb-3 font-bold">{t.mission.title}</strong>
                <p className="opacity-90">{t.mission.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 pt-12 mt-16">
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#2A2A2A] mb-2">{t.stats.network.value}</div>
                <div className="text-[11px] text-zinc-400 uppercase font-bold tracking-widest">{t.stats.network.label}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#2A2A2A] mb-2">{t.stats.quality.value}</div>
                <div className="text-[11px] text-zinc-400 uppercase font-bold tracking-widest">{t.stats.quality.label}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
            {t.features.map((feature, idx) => {
              const Icon = icons[idx];
              return (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-zinc-100 hover:border-[#FACC15]/40 transition-all duration-500 group shadow-sm hover:shadow-xl">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 mb-6 group-hover:bg-[#FACC15] group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#2A2A2A] mb-4 break-keep">{feature.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed break-keep font-medium">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
