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
      contact: { email: '이메일', phone: '연락처', address: '주소' },
      form: { title: '상담 신청서 작성', name: '성함', company: '회사명', email: '이메일', details: '문의 내용', submit: 'Send Inquiry', ph_details: '관심 품목, 물량 등을 적어주세요.' }
    },
    en: {
      section: 'Get in Touch',
      title: 'Business Partnership Inquiry',
      desc: 'From raw material sourcing to logistics optimization,\nwe propose customized solutions for your business.\nContact us today.',
      contact: { email: 'Email', phone: 'Phone', address: 'Address' },
      form: { title: 'Inquiry Form', name: 'Name', company: 'Company', email: 'Email', details: 'Details', submit: 'Send Inquiry', ph_details: 'Please provide items, volume, etc.' }
    }
  };
  const t = content[language];

  return (
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-[45%]">
            <h2 className="text-sm font-bold text-[#FACC15] uppercase tracking-[0.3em] mb-6">{t.section}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#2A2A2A] mb-8 break-keep leading-tight">{t.title}</h3>
            <p className="text-zinc-500 text-lg mb-12 whitespace-pre-line break-keep font-medium opacity-90">{t.desc}</p>
            
            <div className="space-y-8 border-t border-zinc-100 pt-10">
              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#2A2A2A] border border-zinc-100 shadow-sm"><Mail size={22} /></div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.email}</div>
                  <div className="flex flex-col"><a href="mailto:roman@geonix.co.kr" className="text-[#2A2A2A] font-bold text-base hover:text-[#FACC15]">roman@geonix.co.kr</a></div>
                </div>
              </div>
              {/* Phone - 복구됨 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#2A2A2A] border border-zinc-100 shadow-sm"><Phone size={22} /></div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">{t.contact.phone}</div>
                  <div className="text-[#2A2A2A] font-bold text-base">-</div>
                </div>
              </div>
              {/* Address - 복구됨 */}
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
            <form ref={formRef} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.name}</label><input name="name" required className="bg-white border border-zinc-200 rounded-2xl p-4 text-[#2A2A2A] outline-none" /></div>
                <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.company}</label><input name="company" required className="bg-white border border-zinc-200 rounded-2xl p-4 text-[#2A2A2A] outline-none" /></div>
              </div>
              <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.email}</label><input name="email" type="email" required className="bg-white border border-zinc-200 rounded-2xl p-4 text-[#2A2A2A] outline-none" /></div>
              <div className="flex flex-col gap-3"><label className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">{t.form.details}</label><textarea name="details" required rows={5} className="bg-white border border-zinc-200 rounded-2xl p-4 text-[#2A2A2A] outline-none resize-none" placeholder={t.form.ph_details} /></div>
              <button className="w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 bg-[#2A2A2A] text-white hover:bg-black transition-all shadow-xl uppercase tracking-tighter text-lg">
                <span>{t.form.submit}</span> <ArrowRight size={22} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
