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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* 로고 영역: Navbar 높이 연동 및 가시성 극대화 */}
          <div className="shrink-0 flex items-center h-full min-h-[80px]"> 
            <a href="/">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-20 md:h-[120px] w-auto object-contain brightness-110 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* 정보 영역: 메뉴 하단에 연락처 배치 */}
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

        {/* 하단 영역: 약관 링크 및 카피라이트 */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-medium tracking-widest uppercase order-2 md:order-1">
            {t.copyright}
          </p>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <div className="flex items-center gap-6 text-xs font-bold text-white/30">
              <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">{t.privacy}</button>
              <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">{t.terms}</button>
            </div>
            <div className="flex items-center gap-2 text-white/20">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 팝업 모달: PDF 모든 내용 반영 및 국/영문 대응 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-3xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
            <button onClick={() => setModalType(null)} className="absolute top-8 right-8 text-zinc-300 hover:text-black">
              <X size={28} />
            </button>
            <h3 className="text-2xl font-black mb-8 tracking-tighter">
              {modalType === 'privacy' ? t.privacy : t.terms}
            </h3>
            
            <div className="overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar flex-1 space-y-8">
              {language === 'ko' ? (
                /* --- [국문] 개인정보처리방침 / 이용약관 --- */
                modalType === 'privacy' ? (
                  <div className="space-y-6">
                    <p>지오니스는 「개인정보 보호법」 등 관련 법령을 준수하며 이용자의 개인정보 보호에 최선을 다합니다.</p>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">1. 개인정보의 처리 목적</h4>
                      <p>• 홈페이지 문의사항 접수 및 답변, 고객 상담 및 요청사항 처리, 서비스 관련 커뮤니케이션</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">2. 처리하는 개인정보의 항목</h4>
                      <p>• 필수항목: 성명, 이메일 주소, 문의 내용</p>
                      <p>• 선택항목: 회사명, 연락처</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">3. 개인정보의 처리 및 보유 기간</h4>
                      <p>• 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후 지체 없이 파기합니다. 단, 문의 기록은 처리 완료 후 1년간 보관합니다.</p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제1조 (목적)</h4>
                      <p>본 약관은 지오니스가 제공하는 홈페이지 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제5조 (지적재산권)</h4>
                      <p>홈페이지에 게시된 모든 콘텐츠(로고, 이미지, 텍스트, 3D 모델 등)에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다. 이용자는 회사의 사전 승인 없이 이를 복제하거나 상업적으로 이용할 수 없습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제7조 (책임의 제한)</h4>
                      <p>회사는 천재지변 또는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 서비스 제공에 관한 책임이 면제됩니다.</p>
                    </section>
                  </div>
                )
              ) : (
                /* --- [영문] Privacy Policy / Terms of Service --- */
                <div className="space-y-6">
                  {modalType === 'privacy' ? (
                    <>
                      <p>GEONIX complies with the Personal Information Protection Act and is committed to protecting user privacy.</p>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">1. Purpose of Processing</h4>
                        <p>Handling inquiries, customer consultation, and business communication.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">2. Items Collected</h4>
                        <p>• Required: Name, Email address, Inquiry content</p>
                        <p>• Optional: Company name, Contact information</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">3. Retention Period</h4>
                        <p>In principle, personal information is destroyed immediately after the purpose is achieved. Inquiry records are kept for 1 year.</p>
                      </section>
                    </>
                  ) : (
                    <>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 1 (Purpose)</h4>
                        <p>These terms govern the use of the GEONIX website and define the rights and obligations between the Company and the User.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 5 (Intellectual Property)</h4>
                        <p>All content including logos, images, text, and 3D models are the property of GEONIX. Unauthorized reproduction or commercial use is strictly prohibited.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 7 (Limitation of Liability)</h4>
                        <p>The Company shall be released from liability for service interruption caused by natural disasters or force majeure.</p>
                      </section>
                    </>
                  )}
                  {/* 최하단 국문 우선 원칙 문구 (영문 버전 전용) */}
                  <div className="mt-12 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs text-zinc-400 italic leading-relaxed">
                      "In case of any discrepancy between the Korean and English versions, the Korean version shall prevail."
                    </p>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => setModalType(null)} className="w-full mt-10 py-4 bg-[#0A0F1A] text-white font-black rounded-xl hover:bg-black transition-all">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};
