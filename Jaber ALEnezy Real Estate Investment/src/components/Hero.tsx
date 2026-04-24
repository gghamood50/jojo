/* ================================================================
   HERO SECTION — Cinematic Landing Block
   High-definition background video, sophisticated typography,
   Framer Motion reveal effect, fluid AR/EN transition
   ================================================================ */

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { t, language } = useLanguageStore();

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        paddingTop: '80px', // Offset for navbar
      }}
    >
      {/* ── Background Video Placeholder ────────────────── */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')",
            filter: 'brightness(0.4)',
          }}
        />
        {/* Placeholder for actual video tag */}
        {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video> */}
        
        {/* Overlay gradient for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0.3) 0%, rgba(10, 25, 47, 0.9) 100%)',
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="section-container relative z-10 w-full">
        {/* AnimatePresence for fluid AR/EN transition without layout shift */}
        <div className="relative" style={{ minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                textAlign: language === 'ar' ? 'right' : 'left',
              }}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 1.2rem',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    color: 'var(--color-parchment)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                  }}
                >
                  <span
                    className="animate-pulse-gold"
                    style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--color-gold)',
                      borderRadius: '50%',
                    }}
                  />
                  {t.hero.badge}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.1,
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  maxWidth: '900px',
                  fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                  textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                {t.hero.title}{' '}
                <span style={{ color: 'var(--color-gold)', display: 'block' }}>
                  {t.hero.titleHighlight}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '650px',
                  marginBottom: '2.5rem',
                  fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                  textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                }}
              >
                {t.hero.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--color-gold-dark)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.8rem 2rem',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {t.nav.bookConsultation}
                  <span style={{ fontSize: '1.2rem' }}>
                    {language === 'ar' ? '←' : '→'}
                  </span>
                </motion.a>
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.8rem 2rem',
                    fontSize: '1rem',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 'var(--radius-pill)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                    backdropFilter: 'blur(10px)',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)')}
                >
                  {t.hero.ctaSecondary}
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute hidden md:flex flex-col items-center gap-2"
        style={{
          bottom: '2.5rem',
          insetInlineStart: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '4px',
              height: '8px',
              background: 'var(--color-gold)',
              borderRadius: '2px',
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
