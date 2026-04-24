/* ================================================================
   ABOUT SECTION — Brand Story & Feature Highlights
   Stagger animations, glass cards, gold accents
   ================================================================ */

import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  viewport: { once: true, margin: '-80px' },
});

// SVG icons as inline components for zero-dependency usage
const icons = {
  vision: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  expertise: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  service: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export default function About() {
  const { t, language } = useLanguageStore();

  const features = [
    { icon: icons.vision, title: t.about.feature1Title, desc: t.about.feature1Desc },
    { icon: icons.expertise, title: t.about.feature2Title, desc: t.about.feature2Desc },
    { icon: icons.service, title: t.about.feature3Title, desc: t.about.feature3Desc },
  ];

  return (
    <section
      id="about"
      style={{
        paddingBlock: 'var(--spacing-section)',
        background: 'var(--color-parchment)',
      }}
    >
      <div className="section-container">
        {/* ── Section Header ────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div {...fadeUp(0)} className="flex justify-center" style={{ marginBottom: '1rem' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 1rem',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(197, 160, 89, 0.1)',
                border: '1px solid rgba(197, 160, 89, 0.2)',
                color: 'var(--color-gold-dark)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              }}
            >
              {t.about.sectionTag}
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            style={{
              marginBottom: '1.2rem',
              fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
            }}
          >
            {t.about.title}
          </motion.h2>

          <motion.div {...fadeUp(0.15)} className="flex justify-center" style={{ marginBottom: '1.5rem' }}>
            <div className="gold-divider" />
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            style={{
              maxWidth: '700px',
              marginInline: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
            }}
          >
            {t.about.description}
          </motion.p>
        </div>

        {/* ── Feature Cards ─────────────────────────────── */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.12)}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{ padding: '2.5rem 2rem' }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(197,160,89,0.12), rgba(197,160,89,0.04))',
                  color: 'var(--color-gold)',
                  marginBottom: '1.5rem',
                }}
              >
                {feat.icon}
              </div>

              <h4
                style={{
                  marginBottom: '0.75rem',
                  fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                }}
              >
                {feat.title}
              </h4>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: 'var(--color-slate-200)',
                  fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
