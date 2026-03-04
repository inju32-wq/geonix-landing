// src/components/About.tsx 수정 부분

const content = {
  ko: {
    // ... 기존 코드 동일
    stats: {
      network: { value: '15+', label: '글로벌 자원 거점 (Regions)' },
      quality: { value: '100%', label: 'SGS 품질 검증 준수 (Compliance)' }
    },
    // ... 하단 features와 중복되지 않음
  },
  en: {
    // ... 기존 코드 동일
    stats: {
      network: { value: '15+', label: 'Global Sourcing Regions' },
      quality: { value: '100%', label: 'SGS Quality Compliance' }
    }
  }
};

// ... 하단 렌더링 부분 (Stats 영역)
<div className="grid grid-cols-2 gap-6 md:gap-12 border-t border-zinc-900 pt-10 mt-12">
  <div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{t.stats.network.value}</div>
    <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest leading-tight break-keep">
      {t.stats.network.label}
    </div>
  </div>
  <div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{t.stats.quality.value}</div>
    <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest leading-tight break-keep">
      {t.stats.quality.label}
    </div>
  </div>
</div>
