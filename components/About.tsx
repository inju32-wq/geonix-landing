// src/components/About.tsx
import React from 'react';
import { Globe, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      section: '회사 소개',
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
        shipment: { value: '6-7k', label: '시간당 선적량 (Tons)' },
        vessel: { value: '400k', label: '최대 선박 규모 (DWT)' }
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
        shipment: { value: '6-7k', label: 'Loading Rate (Tons/Hr)' },
        vessel: { value: '400k', label: 'Max Vessel Size (DWT)' }
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
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-2">{t.section}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t.title} <br />
              <span className="font-serif italic text-zinc-500">{t.subtitle}</span>
            </h3>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                <strong className="text-white block mb-2">{t.vision.title}</strong>
                {t.vision.desc}
              </p>
              
              <p>
                <strong className="text-white block mb-2">{t.mission.title}</strong>
                {t.mission.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-1">{t.stats.shipment.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide">{t.stats.shipment.label}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">{t.stats.vessel.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide">{t.stats.vessel.label}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.features.map((feature, idx) => {
              const Icon = icons[idx];
              return (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors group">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
