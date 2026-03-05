import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'fail'>(null);

  const content = {
    ko: {
      section: 'Get in Touch',
      title: '비즈니스 파트너십 문의',
      // 요청하신 3단 줄바꿈 적용
      desc: '원자재 수급 계획부터 물류 최적화까지,\n귀사의 비즈니스 성공을 위한 맞춤형 솔루션을 제안해 드립니다.\n지금 바로 문의해 보세요.',
      bullets: [
        { title: '철저한 비밀 유지', desc: '모든 상담 내용과 기업 정보는 엄격한 보안 하에 관리됩니다.', color: 'text-green-600' },
        { title: '전문가 1:1 매칭', desc: '문의 분야에 최적화된 전담 매니저가 배정되어 상세 상담을 지원합니다.', color: 'text-blue-600' },
        { title: '신속한 응답 서비스', desc: '영업일 기준 24시간 이내에 담당자가 직접 연락드립니다.', color: 'text-purple-600' },
      ],
      contact: { email: '이메일', phone: '연락처', address: '주소' },
      form: { title: '상담 신청서 작성', name: '성함', company: '회사명', email: '이메일', details: '문의 내용', submit: '문의하기', sending: '전송 중...', success: '문의가 성공적으로 접수되었습니다.', fail: '전송에 실패했습니다. 다시 시도해주세요.', ph_details: '관심 품목, 물량 등을 적어주세요.' }
    },
    en: {
      section: 'Get in Touch',
      title: 'Business Partnership Inquiry',
      // 영어 버전 3단 줄바꿈
      desc: 'From raw material sourcing to logistics optimization,\nwe propose customized solutions for your business success.\nContact us today.',
      bullets: [
        { title: 'Strict Confidentiality', desc: 'All consultations are managed under strict security.', color: 'text-green-600' },
        { title: '1:1 Expert Matching', desc: 'Dedicated managers support detailed consultations.', color: 'text-blue-600' },
        { title: 'Fast Response', desc: 'Representative will contact you within 24 business hours.', color: 'text-purple-600' },
      ],
      contact: { email: 'Email', phone: 'Phone', address: 'Address' },
      form: { title: 'Inquiry Form', name: 'Name', company: 'Company', email: 'Email', details: 'Details', submit: 'Send Inquiry', sending: 'Sending...', success: 'Inquiry sent successfully!', fail: 'Failed to send. Please try again.', ph_details: 'Please provide items, volume, etc.' }
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus(null);

    // 시뮬레이션 (상태 변수 사용을 통해 에러 해결)
    setTimeout(() => {
      setStatus('success');
      setSending(false);
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-[45%] text-left">
            <h2 className="text-sm font-bold text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#2A2A2A] mb-8 break-keep leading-tight">{t.title}</h3>
            {/* whitespace-pre-line이 \n을 인식합니다 */}
            <p className="text-zinc-500 text-lg mb-12 whitespace-pre-line break-keep font-medium opacity-90">{t.desc}</p>
            
            <div className="space-y-8 mb-16">
              {t.bullets.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className={`mt-1 bg-zinc-50 p-2 rounded-xl border border-zinc-100 ${item.color} shrink-0`}>
                    {/* CheckCircle2를 사용하여 에러를 해결합니다 */}
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#2A2A2A] font-bold mb-2 text-xl break-keep">{item.title}</h4>
                    <p className="text-zinc-500 text-base break-keep opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 연락처 및 주소 섹션 복구 */}
            <div className="space-y-8 border-t border-zinc-100 pt-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#2A2A2A] border border-zinc-100 shadow-sm"><Mail size={22} /></div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.email}</div>
                  <a href="mailto:roman@geonix.co.kr" className="text-[#2A2A2A] font-bold text-base hover:text-[#FACC15]">roman@geonix.co.kr</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#2A2A2A] border border-zinc-100 shadow-sm"><Phone size={22} /></div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.phone}</div>
                  <div className="text-[#2A2A2A] font-bold text-base">-</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#2A2A2A] border border-zinc-100 shadow-sm"><MapPin size={22} /></div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.address}</div>
                  <div className="text-[#2A2A2A] font-bold text-base">-</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[55%] bg-[#F8FAFC] rounded-[3rem] p-8 md:p-14 border border-zinc-100 shadow-xl">
            <h4 className="text-2xl font-black text-[#2A2A2A] mb-10 tracking-tight">{t.form.title}</h4>
            <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.name}</label><input name="name" required className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] outline-none" /></div>
                <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.company}</label><input name="company" required className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] outline-none" /></div>
              </div>
              <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.email}</label><input name="email" type="email" required className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] outline-none" /></div>
              <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.details}</label><textarea name="details" required rows={6} className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] outline-none resize-none" placeholder={t.form.ph_details} /></div>
              
              {/* sending 변수를 사용하여 에러 해결 */}
              <button disabled={sending} type="submit" className="w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 bg-[#2A2A2A] text-white hover:bg-black disabled:opacity-60 transition-all shadow-xl uppercase tracking-tighter text-lg">
                <span>{sending ? t.form.sending : t.form.submit}</span> <ArrowRight size={22} />
              </button>

              {/* status 변수를 사용하여 에러 해결 */}
              {status === 'success' && <div className="p-5 bg-green-50 text-green-600 border border-green-100 rounded-2xl text-center font-bold animate-in fade-in slide-in-from-top-2">{t.form.success}</div>}
              {status === 'fail' && <div className="p-5 bg-red-50 text-red-600 border border-red-100 rounded-2xl text-center font-bold animate-in fade-in slide-in-from-top-2">{t.form.fail}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
