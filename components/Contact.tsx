// src/components/Contact.tsx
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
      desc: '원자재 수급 계획부터 물류 최적화까지, 귀사의 비즈니스 성공을 위한\n맞춤형 솔루션을 제안해 드립니다. 지금 바로 문의해 보세요.',
      bullets: [
        { title: '철저한 비밀 유지', desc: '모든 상담 내용과 기업 정보는 엄격한 보안 하에 관리됩니다.', color: 'text-green-500' },
        { title: '전문가 1:1 매칭', desc: '문의 분야에 최적화된 전담 매니저가 배정되어 상세 상담을 지원합니다.', color: 'text-blue-500' },
        { title: '신속한 응답 서비스', desc: '영업일 기준 24시간 이내에 담당자가 직접 연락드립니다.', color: 'text-purple-500' },
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
      desc: 'From raw material sourcing to logistics optimization, we propose customized solutions for your business success.\nContact us today.',
      bullets: [
        { title: 'Strict Confidentiality', desc: 'All consultations and corporate information are managed under strict security.', color: 'text-green-500' },
        { title: '1:1 Expert Matching', desc: 'A dedicated manager optimized for your inquiry area is assigned to support detailed consultations.', color: 'text-blue-500' },
        { title: 'Fast Response', desc: 'Our representative will contact you directly within 24 business hours.', color: 'text-purple-500' },
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
    <section id="contact" className="py-20 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900/50 rounded-[2rem] p-8 md:p-16 border border-zinc-800/50 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: Info */}
          <div className="lg:w-[45%]">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-4">{t.section}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 break-keep leading-tight">{t.title}</h3>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed whitespace-pre-line break-keep">{t.desc}</p>

            <div className="space-y-8 mb-16">
              {t.bullets.map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className={`mt-1 bg-zinc-800/50 p-1.5 rounded-lg ${item.color} shrink-0 h-fit border border-zinc-700/50 group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1.5 text-lg break-keep">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed break-keep">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-zinc-800/50 pt-10">
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">{t.contact.email}</div>
                  <div className="flex flex-col gap-0.5">
                    <a href="mailto:roman@geonix.co.kr" className="text-zinc-300 hover:text-white hover:underline transition-colors text-sm md:text-base">
                      roman@geonix.co.kr
                    </a>
                    <a href="mailto:geonix_official@geonix.co.kr" className="text-zinc-300 hover:text-white hover:underline transition-colors text-sm md:text-base">
                      geonix_official@geonix.co.kr
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">{t.contact.phone}</div>
                  <div className="text-zinc-300 text-sm md:text-base">-</div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">{t.contact.address}</div>
                  <div className="text-zinc-300 text-sm md:text-base">-</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:w-[55%] bg-zinc-950/50 rounded-3xl p-6 md:p-10 border border-zinc-800/50 shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">{t.form.title}</h4>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">
                    {t.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3.5 text-white focus:border-zinc-500 focus:outline-none transition-all placeholder:text-zinc-700 text-sm"
                    placeholder={t.form.ph_name}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contact-company" className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">
                    {t.form.company}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    required
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3.5 text-white focus:border-zinc-500 focus:outline-none transition-all placeholder:text-zinc-700 text-sm"
                    placeholder={t.form.ph_company}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="contact-email" className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">
                  {t.form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3.5 text-white focus:border-zinc-500 focus:outline-none transition-all placeholder:text-zinc-700 text-sm"
                  placeholder="email@company.com"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="contact-phone" className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">
                  {t.form.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3.5 text-white focus:border-zinc-500 focus:outline-none transition-all placeholder:text-zinc-700 text-sm"
                  placeholder="010-1234-5678"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="contact-details" className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">
                  {t.form.details}
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  required
                  rows={5}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3.5 text-white focus:border-zinc-500 focus:outline-none transition-all placeholder:text-zinc-700 text-sm resize-none"
                  placeholder={t.form.ph_details}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full font-bold py-4.5 rounded-xl flex items-center justify-center gap-3 mt-6 transition-all bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl active:scale-[0.98]"
              >
                <span className="text-base uppercase tracking-tight">{sending ? t.form.sending : t.form.submit}</span>
                {!sending && <ArrowRight size={20} />}
              </button>

              {status === 'success' && <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-400 text-center animate-in fade-in slide-in-from-top-2">{t.form.success}</div>}
              {status === 'fail' && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400 text-center animate-in fade-in slide-in-from-top-2">{t.form.fail}</div>}

              <p className="text-[11px] text-zinc-600 text-center mt-6 leading-relaxed break-keep">{t.form.disclaimer}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
