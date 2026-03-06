// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'; // Phone, MapPin 제거
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
        { title: '철저한 비밀 유지 (Confidentiality)', desc: '모든 상담 내용과 기업 정보는 엄격한 보안 하에 관리됩니다.' },
        { title: '전문가 1:1 매칭 (Expert Consultation)', desc: '문의 분야에 최적화된 전담 매니저가 배정되어 상세 상담을 지원합니다.' },
        { title: '24시간 내 신속 응답 (Fast Response)', desc: '영업일 기준 24시간 이내에 담당자가 직접 연락드립니다.' },
      ],
      contact: { email: '이메일' },
      form: { 
        title: '상담 신청서 작성', 
        name: '담당자 성명', 
        company: '회사명', 
        email: '이메일 주소', 
        phone: '연락처',
        details: '문의 내용', 
        submit: '문의하기 (Send Inquiry)', 
        sending: '전송 중...', 
        success: '문의가 성공적으로 접수되었습니다.', 
        fail: '전송에 실패했습니다. 다시 시도해주세요.', 
        ph_details: '관심 품목, 예상 물량, 도착항 등 구체적인 내용을 적어주시면 더 정확한 상담이 가능합니다.',
        ph_name: '홍길동',
        ph_company: '지오니스',
        disclaimer: '본 양식을 통해 수집된 정보는 상담 목적으로만 사용됩니다.'
      }
    },
    en: {
      section: 'Get in Touch',
      title: 'Business Partnership Inquiry',
      desc: 'From raw material sourcing to logistics optimization,\nwe propose customized solutions for your business success.\nContact us today.',
      bullets: [
        { title: 'Strict Confidentiality', desc: 'All consultations and corporate information are managed under strict security.' },
        { title: '1:1 Expert Matching', desc: 'A dedicated manager optimized for your inquiry area is assigned to support detailed consultations.' },
        { title: 'Fast Response Within 24 Hours', desc: 'Our representative will contact you directly within 24 business hours.' },
      ],
      contact: { email: 'Email' },
      form: { 
        title: 'Fill out Inquiry Form', 
        name: 'Contact Name', 
        company: 'Company Name', 
        email: 'Email Address', 
        phone: 'Phone Number',
        details: 'Inquiry Details', 
        submit: 'Send Inquiry', 
        sending: 'Sending...', 
        success: 'Inquiry sent successfully!', 
        fail: 'Failed to send. Please try again.', 
        ph_details: 'Please provide details like interested items, expected volume, and destination port for a more accurate consultation.',
        ph_name: 'HONG GILDONG',
        ph_company: 'Geonix Co.',
        disclaimer: 'Information collected via this form is used for consultation purposes only.'
      }
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = String(formData.get('name') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const details = String(formData.get('details') || '').trim();
    const hp = String(formData.get('hp') || '');

    if (!name || !company || !email || !details) {
      setStatus('fail');
      return;
    }

    setSending(true);
    try {
      // ✅ 이전 코드의 작동하던 API 구조 그대로 복구
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: details,
          company,
          website: '',
          phone,
          hp,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('fail');
      }
    } catch {
      setStatus('fail');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
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
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-sm bg-[#F8FAFC] flex items-center justify-center text-[#1A1A1A] border border-zinc-50 shadow-sm"><Mail size={18} /></div>
                <div>
                  <div className="text-[9px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.email}</div>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:roman@geonix.co.kr" className="text-[#1A1A1A] font-bold text-sm hover:text-[#FACC15] transition-colors">roman@geonix.co.kr</a>
                    <a href="mailto:geonix_official@geonix.co.kr" className="text-[#1A1A1A] font-bold text-sm hover:text-[#FACC15] transition-colors">geonix_official@geonix.co.kr</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] w-full bg-[#F8FAFC] rounded-sm p-10 md:p-16 border border-zinc-100 shadow-sm">
            <h4 className="text-xl font-black text-[#1A1A1A] mb-12 tracking-tighter uppercase">{t.form.title}</h4>
            <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.name}</label>
                  <input name="name" required placeholder={t.form.ph_name} className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.company}</label>
                  <input name="company" required placeholder={t.form.ph_company} className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.email}</label>
                  <input name="email" type="email" required placeholder="email@company.com" className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.phone}</label>
                  <input name="phone" placeholder="010-0000-0000" className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.details}</label>
                <textarea name="details" required rows={4} placeholder={t.form.ph_details} className="bg-transparent border-b border-zinc-200 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#FACC15] transition-colors resize-none" />
              </div>
              
              <button disabled={sending} type="submit" className="group w-full font-black py-5 bg-[#1A1A1A] text-white hover:bg-black disabled:opacity-60 transition-all rounded-sm flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-xs">
                <span>{sending ? t.form.sending : t.form.submit}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status === 'success' && <div className="p-4 bg-zinc-900 text-white text-xs font-bold text-center animate-in fade-in slide-in-from-top-2 tracking-tight">{t.form.success}</div>}
              {status === 'fail' && <div className="p-4 bg-red-600 text-white text-xs font-bold text-center animate-in fade-in slide-in-from-top-2 tracking-tight">{t.form.fail}</div>}
              
              <p className="text-[10px] text-zinc-400 text-center tracking-tight">{t.form.disclaimer}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
