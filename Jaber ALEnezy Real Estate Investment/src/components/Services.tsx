/* ================================================================
   SERVICES SECTION — 3-Column Grid
   Features custom SVG line icons in gold.
   ================================================================ */

import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  viewport: { once: true }
};

export default function Services() {
  const { t, language } = useLanguageStore();

  const services = [
    {
      title: t.services.card1Title,
      desc: t.services.card1Desc,
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t.services.card2Title,
      desc: t.services.card2Desc,
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: t.services.card3Title,
      desc: t.services.card3Desc,
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[var(--color-gold-dark)]" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
              {t.services.sectionTag}
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
            {t.services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-slate-500)] max-w-2xl mx-auto text-lg"
            style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group p-10 rounded-2xl bg-white border border-[rgba(0,0,0,0.05)] shadow-[0_10px_40px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {svc.icon}
              </div>
              <h3
                className="text-2xl font-bold text-[var(--color-midnight)] mb-4"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              >
                {svc.title}
              </h3>
              <p
                className="text-[var(--color-slate-500)] leading-relaxed"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              >
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
