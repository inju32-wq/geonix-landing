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
        { title: '철저한 비밀 유지', desc: '모든 상담 내용과 기업 정보는 엄격한 보안 하에 관리됩니다.', color: 'text-green-600' },
        { title: '전문가 1:1 매칭', desc: '문의 분야에 최적화된 전담 매니저가 배정되어 상세 상담을 지원합니다.', color: 'text-blue-600' },
        { title: '신속한 응답 서비스', desc: '영업일 기준 24시간 이내에 담당자가 직접 연락드립니다.', color: 'text-purple-600' },
      ],
      contact: { email: '이메일', phone: '연락처', address: '주소' },
      form: {
        title: '상담 신청서 작성',
        name: '담당자 성명',
        company: '회사명',
        email: '이메일 주소',
        phone: '연락처',
        details: '문의 내용',
        submit: '문의하기 Send Inquiry',
        sending: '전송 중...',
        success: '문의가 성공적으로 접수되었습니다.',
        fail: '전송에 실패했습니다. 다시 시도해주세요.',
        disclaimer: '본 양식을 통해 수집된 정보는 상담 목적으로만 사용됩니다.',
        ph_name: '성함을 입력해주세요',
        ph_company: '회사명을 입력해주세요',
        ph_details: '관심 품목, 예상 물량, 도착항 등 구체적인 내용을 적어주시면 더 정확한 상담이 가능합니다.',
      },
    },
    en: {
      section: 'Get in Touch',
      title: 'Business Partnership Inquiry',
      desc: 'From raw material sourcing to logistics optimization,\nwe propose customized solutions for your business success.\nContact us today.',
      bullets: [
        { title: 'Strict Confidentiality', desc: 'All consultations and corporate information are managed under strict security.', color: 'text-green-600' },
        { title: '1:1 Expert Matching', desc: 'A dedicated manager optimized for your inquiry area is assigned to support detailed consultations.', color: 'text-blue-600' },
        { title: 'Fast Response', desc: 'Our representative will contact you directly within 24 business hours.', color: 'text-purple-600' },
      ],
      contact: { email: 'Email', phone: 'Phone', address: 'Address' },
      form: {
        title: 'Inquiry Form',
        name: 'Contact Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number',
        details: 'Inquiry Details',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Inquiry sent successfully!',
        fail: 'Failed to send. Please try again.',
        disclaimer: 'Information collected via this form is used for consultation purposes only.',
        ph_name: 'Full Name',
        ph_company: 'Company Name',
        ph_details: 'Please provide details like items, volume, and destination port for a more accurate consultation.',
      },
    },
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: details, company, phone, hp }),
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
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Info (White Background Area) */}
          <div className="lg:w-[45%]">
            <h2 className="text-sm font-bold text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#2A2A2A] mb-8 break-keep leading-tight">{t.title}</h3>
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed whitespace-pre-line break-keep font-medium opacity-90">{t.desc}</p>

            <div className="space-y-10 mb-16">
              {t.bullets.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className={`mt-1 bg-zinc-50 p-2 rounded-xl border border-zinc-100 ${item.color} shrink-0 h-fit group-hover:scale-110 transition-all shadow-sm`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#2A2A2A] font-bold mb-2 text-xl break-keep tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 text-base leading-relaxed break-keep font-medium opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8 border-t border-zinc-100 pt-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#2A2A2A] shrink-0 border border-zinc-100 shadow-sm">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.email}</div>
                  <div className="flex flex-col">
                    <a href="mailto:roman@geonix.co.kr" className="text-[#2A2A2A] hover:text-[#FACC15] transition-colors text-base font-bold underline underline-offset-4 decoration-zinc-200">
                      roman@geonix.co.kr
                    </a>
                    <a href="mailto:geonix_official@geonix.co.kr" className="text-[#2A2A2A] hover:text-[#FACC15] transition-colors text-base font-bold underline underline-offset-4 decoration-zinc-200">
                      geonix_official@geonix.co.kr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form (Light Gray Background Area) */}
          <div className="lg:w-[55%] bg-[#F8FAFC] rounded-[3rem] p-8 md:p-14 border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <h4 className="text-2xl font-black text-[#2A2A2A] mb-10 tracking-tight">{t.form.title}</h4>

            <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.name}</label>
                  <input
                    name="name" type="text" required
                    className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] focus:border-[#FACC15] focus:outline-none transition-all placeholder:text-zinc-300 text-base shadow-sm"
                    placeholder={t.form.ph_name}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.company}</label>
                  <input
                    name="company" type="text" required
                    className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] focus:border-[#FACC15] focus:outline-none transition-all placeholder:text-zinc-300 text-base shadow-sm"
                    placeholder={t.form.ph_company}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.email}</label>
                <input
                  name="email" type="email" required
                  className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] focus:border-[#FACC15] focus:outline-none transition-all placeholder:text-zinc-300 text-base shadow-sm"
                  placeholder="email@company.com"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.details}</label>
                <textarea
                  name="details" required rows={6}
                  className="bg-white border border-zinc-200 rounded-2xl p-4.5 text-[#2A2A2A] focus:border-[#FACC15] focus:outline-none transition-all placeholder:text-zinc-300 text-base resize-none shadow-sm"
                  placeholder={t.form.ph_details}
                />
              </div>

              <button
                type="submit" disabled={sending}
                className="w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 mt-10 transition-all bg-[#2A2A2A] text-white hover:bg-black disabled:opacity-60 shadow-2xl active:scale-[0.98] uppercase tracking-tighter text-lg"
              >
                <span>{sending ? t.form.sending : t.form.submit}</span>
                {!sending && <ArrowRight size={22} />}
              </button>

              {status === 'success' && <div className="p-5 bg-green-50 text-green-600 border border-green-100 rounded-2xl text-center font-bold animate-in fade-in slide-in-from-top-2">{t.form.success}</div>}
              {status === 'fail' && <div className="p-5 bg-red-50 text-red-600 border border-red-100 rounded-2xl text-center font-bold animate-in fade-in slide-in-from-top-2">{t.form.fail}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
