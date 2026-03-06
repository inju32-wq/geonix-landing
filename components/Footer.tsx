import React, { useState } from 'react';
import { Mail, Phone, Globe, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const content = {
    ko: {
      copyright: `© ${new Date().getFullYear()} GEONIX. ALL RIGHTS RESERVED.`,
      privacy: '개인정보처리방침',
      terms: '이용약관',
      menu: [
        { name: '회사소개', href: '#about' },
        { name: '에너지 및 산업자원', href: '#products' },
        { name: '서비스', href: '#services' },
        { name: '운영시스템', href: '#infrastructure' },
        { name: 'ESG 경영', href: '#sustainability' },
        { name: '문의하기', href: '#contact' },
      ]
    },
    en: {
      copyright: `© ${new Date().getFullYear()} GEONIX. ALL RIGHTS RESERVED.`,
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      menu: [
        { name: 'About Us', href: '#about' },
        { name: 'Portfolio', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'Operations', href: '#infrastructure' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[#0A0F1A] text-white py-12 md:py-16 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        {/* 상단 섹션: 로고와 (메뉴 + 연락처) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* 로고 영역: h-full과 min-h를 통해 로고 크기 확보 */}
          <div className="shrink-0 flex items-center h-full min-h-[80px]"> 
            <a href="/">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-20 md:h-[120px] w-auto object-contain brightness-110 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* 정보 영역: 메뉴 아래에 연락처 배치 */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {t.menu.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-bold text-white/70 hover:text-[#FACC15] transition-colors uppercase tracking-tight">
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
              <div className="flex items-center gap-3 group">
                <Mail size={18} className="text-[#FACC15]" />
                <a href="mailto:roman@geonix.co.kr" className="text-sm text-white/50 group-hover:text-white transition-colors font-medium">
                  roman@geonix.co.kr
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={18} className="text-[#FACC15]" />
                <span className="text-sm text-white/50 font-medium">-</span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 섹션: 약관 및 저작권 */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 order-2 md:order-1">
            <p className="text-white/20 text-[10px] font-medium tracking-widest uppercase">
              {t.copyright}
            </p>
          </div>
          
          <div className="flex items-center gap-8 order-1 md:order-2">
            <div className="flex items-center gap-6 text-xs font-bold text-white/30">
              <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">
                {t.privacy}
              </button>
              <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">
                {t.terms}
              </button>
            </div>
            <div className="flex items-center gap-2 text-white/20">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 약관 팝업 모달: PDF 내용을 실제 상세히 반영했습니다 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
            <button onClick={() => setModalType(null)} className="absolute top-8 right-8 text-zinc-300 hover:text-black transition-colors">
              <X size={28} />
            </button>
            <h3 className="text-2xl font-black mb-8 tracking-tighter">{modalType === 'privacy' ? t.privacy : t.terms}</h3>
            
            <div className="overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar flex-1">
              {modalType === 'privacy' ? (
                <div className="space-y-6 text-justify">
                  <p>지오니스(이하 "회사")는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보 보호 및 고충 처리를 위해 다음과 같은 방침을 수립·공개합니다.</p>
                  
                  <div>
                    <p className="font-bold text-zinc-900 mb-2">1. 개인정보의 처리 목적</p>
                    <p>회사는 다음 목적을 위해 개인정보를 처리하며, 목적 외 용도로는 사용하지 않습니다.</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>홈페이지 문의사항 접수 및 답변</li>
                      <li>고객 상담 및 요청사항 처리</li>
                      <li>회사 서비스 및 사업 관련 커뮤니케이션</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-900 mb-2">2. 처리하는 개인정보의 항목</p>
                    <p><span className="font-semibold">• 필수항목:</span> 성명, 이메일 주소, 문의 내용</p>
                    <p><span className="font-semibold">• 선택항목:</span> 회사명, 연락처</p>
                    <p>※ 서비스 이용 과정에서 IP 주소, 접속 로그, 쿠키 등이 자동 생성·수집될 수 있습니다.</p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-900 mb-2">3. 처리 및 보유 기간</p>
                    <p>회사는 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
                    <p><span className="font-semibold">• 문의 기록:</span> 문의 처리 완료 후 1년</p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-900 mb-2">4. 개인정보의 제3자 제공 및 위탁</p>
                    <p>회사는 원칙적으로 개인정보를 외부에 제공하지 않으나, 이용자의 동의가 있거나 법령에 따른 경우에만 예외적으로 제공합니다. 현재 원활한 업무 처리를 위해 전문 업체에 위탁 운영 중입니다.</p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-900 mb-2">5. 정보주체의 권리·의무 및 행사방법</p>
                    <p>이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-900 mb-2">6. 개인정보 보호책임자 및 상담</p>
                    <p>• 이메일: geonix_official@geonix.co.kr</p>
                    <p>• 개인정보 관련 고충 사항은 위 연락처로 문의해 주시기 바랍니다.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="font-bold text-zinc-900 underline underline-offset-4">제 1조 (목적)</p>
                  <p>본 약관은 지오니스가 운영하는 웹사이트에서 제공하는 서비스의 이용 조건 및 절차를 규정함을 목적으로 합니다.</p>
                  <p className="font-bold text-zinc-900 underline underline-offset-4">제 2조 (지식재산권)</p>
                  <p>사이트 내 게시된 모든 로고, 이미지, 텍스트 및 3D 모델의 저작권은 지오니스에 귀속됩니다. 무단 복제 및 상업적 활용을 금지합니다.</p>
                  <p className="font-bold text-zinc-900 underline underline-offset-4">제 3조 (이용자의 의무)</p>
                  <p>이용자는 본 사이트를 이용함에 있어 관계 법령 및 본 약관을 준수하여야 하며, 기타 타인의 권리를 침해하는 행위를 해서는 안 됩니다.</p>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setModalType(null)} 
              className="w-full mt-10 py-4 bg-[#0A0F1A] text-white font-black rounded-xl hover:bg-black transition-all"
            >
              닫기 Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
