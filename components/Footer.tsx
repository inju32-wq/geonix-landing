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
          <div className="shrink-0 flex items-center h-full min-h-[80px]"> 
            <a href="/">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-20 md:h-[120px] w-auto object-contain brightness-110 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

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

      {/* 약관 팝업 모달: 파일 전문 반영 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            <button onClick={() => setModalType(null)} className="absolute top-8 right-8 text-zinc-300 hover:text-black transition-colors">
              <X size={28} />
            </button>
            <h3 className="text-2xl font-black mb-8 tracking-tighter">
              {modalType === 'privacy' ? t.privacy : t.terms}
            </h3>
            
            <div className="overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar flex-1">
              {language === 'ko' ? (
                /* --- [국문 전문] --- */
                modalType === 'privacy' ? (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">1. 개인정보의 처리 목적</h4>
                      <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                      <ul className="list-disc ml-5 mt-2">
                        <li>홈페이지 문의사항 접수 및 답변</li>
                        <li>고객 상담 및 요청사항 처리</li>
                        <li>회사 서비스 및 사업 관련 커뮤니케이션</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">2. 처리하는 개인정보의 항목</h4>
                      <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                      <ul className="list-disc ml-5 mt-2">
                        <li>필수항목: 성명, 이메일 주소, 문의 내용</li>
                        <li>선택항목: 회사명, 연락처</li>
                        <li>인터넷 서비스 이용 과정에서 IP주소, 쿠키, 서비스 이용 기록, 방문 기록 등이 생성되어 수집될 수 있습니다.</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">3. 개인정보의 처리 및 보유 기간</h4>
                      <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                      <p>• 홈페이지 문의 기록: 문의 처리 완료 후 1년</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">4. 개인정보의 제3자 제공 및 위탁</h4>
                      <p>회사는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 회사는 원활한 업무 처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">5. 정보주체와 법정대리인의 권리·의무 및 행사방법</h4>
                      <p>정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">6. 개인정보 보호책임자</h4>
                      <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                      <p>• 이메일: geonix_official@geonix.co.kr</p>
                      <p>• 시행 일자: 2026년 2월 13일</p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제1조 (목적)</h4>
                      <p>본 약관은 지오니스(이하 "회사")가 운영하는 웹사이트(이하 "사이트")에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제2조 (약관의 명시와 개정)</h4>
                      <p>회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트의 초기 서비스 화면에 게시합니다. 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제3조 (서비스의 제공 및 변경)</h4>
                      <p>회사는 사이트를 통하여 회사 사업 영역에 대한 정보 제공, 문의 접수 및 답변 등의 서비스를 제공합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제4조 (서비스의 중단)</h4>
                      <p>회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제5조 (지적재산권의 귀속 및 이용제한)</h4>
                      <p>회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속됩니다. 이용자는 사이트를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제6조 (이용자의 의무)</h4>
                      <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
                      <ul className="list-disc ml-5 mt-2">
                        <li>타인의 정보 도용</li>
                        <li>회사가 게시한 정보의 변경</li>
                        <li>회사 또는 제3자의 지적재산권에 대한 침해</li>
                        <li>기타 불법적이거나 부적절한 행위</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제7조 (면책조항)</h4>
                      <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
                    </section>
                  </div>
                )
              ) : (
                /* --- [영문 전문 반영] --- */
                <div className="space-y-6">
                  {modalType === 'privacy' ? (
                    <>
                      <p>GEONIX complies with relevant laws such as the Personal Information Protection Act and is committed to protecting user privacy.</p>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">1. Purpose of Processing</h4>
                        <p>Handling inquiries, customer consultation, and business communication.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">2. Items Collected</h4>
                        <ul className="list-disc ml-5 mt-2">
                          <li>Required: Name, Email address, Inquiry content</li>
                          <li>Optional: Company name, Contact information</li>
                        </ul>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">3. Retention Period</h4>
                        <p>Personal information is kept for 1 year after handling the inquiry.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">4. Protection Officer</h4>
                        <p>• Email: geonix_official@geonix.co.kr</p>
                      </section>
                    </>
                  ) : (
                    <>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 1 (Purpose)</h4>
                        <p>These terms define the rights and obligations between the Company and the User for the services provided through the GEONIX website.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 5 (Intellectual Property)</h4>
                        <p>All content created by the Company including logos, images, text, and 3D models are the intellectual property of GEONIX. Unauthorized use is strictly prohibited.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 7 (Limitation of Liability)</h4>
                        <p>The Company shall be released from liability for service interruptions caused by force majeure or natural disasters.</p>
                      </section>
                    </>
                  )}
                  {/* 국문 우선 원칙 문구 (영문 전용) */}
                  <div className="mt-12 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs text-zinc-400 italic leading-relaxed">
                      "In case of any discrepancy between the Korean and English versions, the Korean version shall prevail."
                    </p>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => setModalType(null)} className="w-full mt-10 py-4 bg-[#0A0F1A] text-white font-black rounded-xl">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};
