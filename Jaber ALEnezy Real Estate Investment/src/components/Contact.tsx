/* ================================================================
   CONTACT & MAPS SECTION
   Form and stylized embedded Google Map
   ================================================================ */

import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

export default function Contact() {
  const { t, language } = useLanguageStore();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[var(--color-gold-dark)]" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
              {t.contact.sectionTag}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-midnight)] mb-4"
            style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-slate-500)] max-w-2xl mx-auto"
            style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-parchment-warm)] p-8 md:p-10 rounded-3xl border border-[rgba(0,0,0,0.03)] shadow-[0_20px_40px_rgba(0,0,0,0.02)]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-midnight)] mb-2" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.contact.form.name}</label>
                  <input type="text" className="w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-midnight)] mb-2" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.contact.form.phone}</label>
                  <input type="tel" className="w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-midnight)] mb-2" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.contact.form.email}</label>
                <input type="email" className="w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-midnight)] mb-2" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.contact.form.message}</label>
                <textarea rows={4} className="w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold)] transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="w-full btn-primary py-4 text-lg rounded-xl shadow-[0_8px_20px_rgba(10,25,47,0.15)] flex justify-center hover:-translate-y-1 transition-transform" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
                {t.contact.form.submit}
              </button>
            </form>
          </motion.div>

          {/* Map Side (Al Rashidiya 3, Ajman) */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.03)]"
          >
            {/* Grayscale filter applied via CSS */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d14421.312959800721!2d55.45262295!3d25.39384725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5835abefb1ed%3A0xc68297ea90c422be!2sAl%20Rashidiya%203%20-%20Ajman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Floating Info Card on Map */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[320px] bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[var(--color-gold)]/20">
              <h4 className="text-lg font-bold text-[var(--color-midnight)] mb-2" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.brand}</h4>
              <p className="text-sm text-[var(--color-slate-500)] flex items-start gap-2 mb-3" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
                <svg className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {t.footer.address}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
