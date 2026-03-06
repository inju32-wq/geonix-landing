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
        { name: '서비스', href: '#services' },
        { name: '에너지 및 산업자원', href: '#products' },
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
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#products' },
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
          {/* 로고 영역 */}
          <div className="shrink-0 flex items-center h-full min-h-[80px]"> 
            <a href="/">
              <img 
                src="/images/geonix-logo_widthwise_White.png" 
                alt="GEONIX Logo" 
                className="h-20 md:h-[120px] w-auto object-contain brightness-110 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* 메뉴 및 연락처 */}
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

        {/* 하단 링크 영역 */}
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

      {/* 모달 팝업 */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setModalType(null)} />
          <div className="relative bg-white text-[#2A2A2A] w-full max-w-3xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            <button onClick={() => setModalType(null)} className="absolute top-8 right-8 text-zinc-300 hover:text-black">
              <X size={28} />
            </button>
            <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase">
              {modalType === 'privacy' ? t.privacy : t.terms}
            </h3>
            
            <div className="overflow-y-auto text-sm text-zinc-500 leading-relaxed pr-4 custom-scrollbar flex-1 space-y-8">
              {language === 'ko' ? (
                /* ---------------- 국문 전문 (생략 없이 모두 포함) ---------------- */
                modalType === 'privacy' ? (
                  <div className="space-y-6">
                    <p>지오니스(이하 "회사")는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.</p>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">1. 개인정보의 처리 목적</h4>
                      <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 아래 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 경우 사전 동의를 받습니다.</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>홈페이지 문의사항 접수 및 답변</li>
                        <li>고객 상담 및 요청사항 처리</li>
                        <li>회사 서비스 및 사업 관련 커뮤니케이션</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">2. 처리하는 개인정보의 항목</h4>
                      <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>필수항목: 성명, 이메일 주소, 문의 내용</li>
                        <li>선택항목: 회사명, 연락처</li>
                        <li>※ 서비스 이용 과정에서 IP 주소, 접속 로그, 쿠키 등이 자동으로 생성·수집될 수 있습니다.</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">3. 개인정보의 처리 및 보유 기간</h4>
                      <p>회사는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관합니다.</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>문의 기록: 문의 처리 완료 후 1년</li>
                        <li>관련 법령에 따른 보존이 필요한 경우: 해당 법령에서 정한 기간</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">4. 개인정보의 제3자 제공</h4>
                      <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자가 사전에 동의한 경우나 법령에 따라 제공이 요구되는 경우에는 예외로 합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">5. 개인정보 처리의 위탁</h4>
                      <p>회사는 원활한 개인정보 업무 처리를 위하여 개인정보 처리 업무를 위탁할 수 있으며, 위탁 시 관계 법령에 따라 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 관리·감독합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">6. 개인정보 보호책임자</h4>
                      <p>• 이메일: geonix_official@geonix.co.kr</p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p>본 약관은 지오니스(이하 "회사")가 제공하는 홈페이지 서비스 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제1조 (정의)</h4>
                      <p>① "서비스"란 회사가 홈페이지를 통해 제공하는 모든 정보 및 콘텐츠를 의미합니다.</p>
                      <p>② "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제2조 (약관의 효력 및 변경)</h4>
                      <p>본 약관은 홈페이지에 게시함으로써 효력이 발생합니다. 회사는 필요한 경우 관련 법령을 위반하지 않는 범위 내에서 본 약관을 변경할 수 있으며, 변경 사항은 홈페이지를 통해 공지합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제3조 (서비스의 제공)</h4>
                      <p>회사는 회사 및 사업 관련 정보 제공, 제품 및 서비스 소개, 문의 및 상담 응대 등의 서비스를 제공합니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제4조 (이용자의 의무)</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>허위 정보의 제공 금지</li>
                        <li>회사 또는 제3자의 지적재산권 침해 금지</li>
                        <li>서비스 운영을 방해하는 행위 금지</li>
                        <li>관련 법령을 위반하는 행위 금지</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제5조 (지적재산권)</h4>
                      <p>홈페이지에 게시된 모든 콘텐츠에 대한 저작권은 회사에 귀속됩니다. 이용자는 회사의 사전 동의 없이 이를 복제, 배포, 전송할 수 없습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제6조 (서비스 이용 제한)</h4>
                      <p>회사는 이용자가 본 약관을 위반한 경우 사전 통지 없이 서비스 이용을 제한할 수 있습니다.</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-zinc-900 mb-2">제7조 (책임의 제한)</h4>
                      <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                    </section>
                  </div>
                )
              ) : (
                /* ---------------- 영문 전문 (국문과 1:1 대응 번역) ---------------- */
                <div className="space-y-6">
                  {modalType === 'privacy' ? (
                    <div className="space-y-6">
                      <p>GEONIX (hereinafter referred to as the "Company") complies with the Personal Information Protection Act and other relevant laws, and establishes this Privacy Policy to protect users' personal information and efficiently handle related grievances.</p>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">1. Purpose of Processing Personal Information</h4>
                        <p>The Company processes personal information for the following purposes. Information will not be used for any other purpose than those listed below, and prior consent will be obtained if the purpose changes.</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Receiving and responding to website inquiries</li>
                          <li>Handling customer consultation and requests</li>
                          <li>Communication regarding company services and business</li>
                        </ul>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">2. Items of Personal Information Processed</h4>
                        <p>The Company processes the following items:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Required: Name, Email address, Inquiry details</li>
                          <li>Optional: Company name, Contact information</li>
                          <li>※ IP addresses, access logs, and cookies may be automatically generated and collected during service use.</li>
                        </ul>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">3. Processing and Retention Period</h4>
                        <p>The Company destroys personal information without delay once the purpose is achieved. However, information required by law will be stored for the period specified by the relevant legislation.</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Inquiry records: 1 year after completion of the inquiry</li>
                          <li>Retention required by law: Period specified by the relevant law</li>
                        </ul>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">4. Provision of Information to Third Parties</h4>
                        <p>In principle, the Company does not provide personal information to external parties except when prior consent is obtained or required by law.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">5. Outsourcing of Processing</h4>
                        <p>The Company may outsource personal information processing for efficient business handling, ensuring the safety of management and supervision according to relevant laws.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">6. Privacy Officer</h4>
                        <p>• Email: geonix_official@geonix.co.kr</p>
                      </section>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <p>These Terms of Service govern the use of the website services provided by GEONIX (hereinafter the "Company") and define the rights, obligations, and responsibilities between the Company and the User.</p>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 1 (Definitions)</h4>
                        <p>1. "Service" refers to all information and content provided by the Company through the website.</p>
                        <p>2. "User" refers to a person who uses the services provided by the Company in accordance with these terms.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 2 (Effect and Modification of Terms)</h4>
                        <p>These terms become effective upon posting. The Company may modify these terms within the scope of relevant laws, and changes will be announced on the website.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 3 (Provision of Services)</h4>
                        <p>The Company provides services such as information about the company and business, introduction of products/services, and responses to inquiries.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 4 (User Obligations)</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          <li>Prohibition of providing false information</li>
                          <li>Prohibition of infringing intellectual property of the Company or third parties</li>
                          <li>Prohibition of interfering with service operations</li>
                          <li>Prohibition of violating relevant laws</li>
                        </ul>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 5 (Intellectual Property)</h4>
                        <p>Copyright for all content on the website belongs to the Company. Users may not copy, distribute, or transmit content without prior consent.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 6 (Restriction of Use)</h4>
                        <p>The Company may restrict service use without prior notice if a user violates these terms.</p>
                      </section>
                      <section>
                        <h4 className="font-bold text-zinc-900 mb-2">Article 7 (Limitation of Liability)</h4>
                        <p>The Company is exempt from liability for service interruption caused by natural disasters or force majeure.</p>
                      </section>
                    </div>
                  )}
                  {/* 국문 우선 원칙 회색 박스 */}
                  <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
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
