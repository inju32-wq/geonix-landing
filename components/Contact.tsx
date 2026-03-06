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
      desc: '원자재 수급 계획부터 물류 최적화까지,\n귀사의 비즈니스 성공을 위한 맞춤형 솔루션을 제안해 드립니다.\n지금 바로 문의해 보세요.',
      bullets: [
        { title: '철저한 비밀 유지', desc: '모든 상담 내용과 기업 정보는 엄격한 보안 하에 관리됩니다.' },
        { title: '전문가 1:1 매칭', desc: '문의 분야에 최적화된 전담 매니저가 배정되어 상세 상담을 지원합니다.' },
        { title: '신속한 응답 서비스', desc: '영업일 기준 24시간 이내에 담당자가 직접 연락드립니다.' },
      ],
      contact: { email: '이메일', phone: '연락처', address: '주소' },
      form: { title: '상담 신청서 작성', name: '성함', company: '회사명', email: '이메일', details: '문의 내용', submit: '문의하기', sending: '전송 중...', success: '문의가 성공적으로 접수되었습니다.', fail: '전송에 실패했습니다. 다시 시도해주세요.', ph_details: '관심 품목, 물량 등을 적어주세요.' }
    },
    en: {
      section: 'Get in Touch',
      title: 'Business Partnership Inquiry',
      desc: 'From raw material sourcing to logistics optimization,\nwe propose customized solutions for your business success.\nContact us today.',
      bullets: [
        { title: 'Strict Confidentiality', desc: 'All consultations are managed under strict security.' },
        { title: '1:1 Expert Matching', desc: 'Dedicated managers support detailed consultations.' },
        { title: 'Fast Response', desc: 'Representative will contact you within 24 business hours.' },
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

    setTimeout(() => {
      setStatus('success');
      setSending(false);
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
          {/* Left Side: Information */}
          <div className="lg:w-[40%] text-left">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-8 h-[1.5px] bg-[#FACC15]"></span>
              <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">{t.section}</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-10 tracking-tighter leading-tight break-keep">{t.title}</h3>
            <p className="text-zinc-500/60 text-sm md:text-base mb-16 whitespace-pre-line break-keep font-medium tracking-tight leading-relaxed">{t.desc}</p>
            
            <div className="space-y-10 mb-20">
              {t.bullets.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 text-[#FACC15] shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-black mb-2 text-lg tracking-tight break-keep">{item.title}</h4>
                    <p className="text-zinc-500/80 text-sm break-keep leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8 border-t border-zinc-100 pt-12">
              {[
                { icon: Mail, label: t.contact.email, value: 'roman@geonix.co.kr', href: 'mailto:roman@geonix.co.kr' },
                { icon: Phone, label: t.contact.phone, value: '-', href: null },
                { icon: MapPin, label: t.contact.address, value: '-', href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-sm bg-[#F8FAFC] flex items-center justify-center text-[#1A1A1A] border border-zinc-50 shadow-sm"><item.icon size={18} /></div>
                  <div>
                    <div className="text-[9px] text-zinc-400 uppercase font-black tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-[#1A1A1A] font-bold text-sm hover:text-[#FACC15] transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-[#1A1A1A] font-bold text-sm">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-[60%] w-full bg-[#F8FAFC] rounded-sm p-10 md:p-16 border border-zinc-100 shadow-sm">
            <h4 className="text-xl font-black text-[#1A1A1A] mb-12 tracking-tighter uppercase">{t.form.title}</h4>
            <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.name}</label>
                  <input name="name" required className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.company}</label>
                  <input name="company" required className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.email}</label>
                <input name="email" type="email" required className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.details}</label>
                <textarea name="details" required rows={4} className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors resize-none" placeholder={t.form.ph_details} />
              </div>
              
              <button disabled={sending} type="submit" className="group w-full font-black py-5 bg-[#1A1A1A] text-white hover:bg-black disabled:opacity-60 transition-all rounded-sm flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-xs">
                <span>{sending ? t.form.sending : t.form.submit}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status === 'success' && <div className="p-4 bg-zinc-900 text-white text-xs font-bold text-center animate-in fade-in slide-in-from-top-2 tracking-tight">{t.form.success}</div>}
              {status === 'fail' && <div className="p-4 bg-red-600 text-white text-xs font-bold text-center animate-in fade-in slide-in-from-top-2 tracking-tight">{t.form.fail}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
