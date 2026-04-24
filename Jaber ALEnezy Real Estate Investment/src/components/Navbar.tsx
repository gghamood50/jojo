/* ================================================================
   NAVBAR — Luxury Navigation with Language Switcher
   Features: Glassmorphism, scroll-triggered backdrop, Framer Motion
   ================================================================ */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguageStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 inset-x-0 transition-all duration-500"
      style={{
        zIndex: 'var(--z-navbar)',
        background: scrolled
          ? 'rgba(10, 25, 47, 0.7)'
          : 'rgba(10, 25, 47, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(197, 160, 89, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="section-container flex items-center justify-between" style={{ height: scrolled ? '72px' : '88px', transition: 'height 0.4s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
        {/* ── Brand Logo ─────────────────────────────────── */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 no-underline"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Diamond Icon */}
          <div
            className="flex items-center justify-center"
            style={{
              width: '42px',
              height: '42px',
              background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
              borderRadius: '8px',
              transform: 'rotate(45deg)',
            }}
          >
            <span
              style={{
                transform: 'rotate(-45deg)',
                color: 'var(--color-midnight-dark)',
                fontWeight: 800,
                fontSize: '1.1rem',
                fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              }}
            >
              JA
            </span>
          </div>
          <div className="hidden sm:block">
            <div
              style={{
                color: 'var(--color-parchment)',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '-0.01em',
                transition: 'color 0.4s',
                fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              }}
            >
              {t.footer.brand}
            </div>
            <div
              style={{
                color: 'var(--color-gold)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              }}
            >
              Real Estate
            </div>
          </div>
        </motion.a>

        {/* ── Desktop Nav Links ──────────────────────────── */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              style={{
                color: 'var(--color-slate-100)',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.3s',
                textDecoration: 'none',
                fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-slate-100)')}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* ── Right Actions ──────────────────────────────── */}
        <div className="flex items-center gap-4">
          {/* Property Search Shortcut */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 cursor-pointer text-white transition-colors"
            style={{
              fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              background: 'none',
              border: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            aria-label="Property Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="hidden xl:inline">{t.nav.propertySearch}</span>
          </motion.button>

          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} className="hidden md:block" />

          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden cursor-pointer"
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--color-parchment)',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: language === 'ar' ? "'Montserrat', sans-serif" : "'Cairo', sans-serif",
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '34px',
            }}
            aria-label="Toggle Language"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={language}
                initial={{ y: 20, opacity: 0, position: 'absolute' }}
                animate={{ y: 0, opacity: 1, position: 'relative' }}
                exit={{ y: -20, opacity: 0, position: 'absolute' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: 'block', lineHeight: 1 }}
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* CTA Button (Desktop) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -1, backgroundColor: 'rgba(197, 160, 89, 0.1)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex"
            style={{
              padding: '0.65rem 1.2rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--color-gold)',
              border: '1.5px solid var(--color-gold)',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
              transition: 'background-color 0.3s',
            }}
          >
            {t.nav.bookConsultation}
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
            style={{ background: 'none', border: 'none', padding: '8px' }}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
              style={{ width: '24px', height: '2px', background: 'var(--color-parchment)', display: 'block', borderRadius: '2px' }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              style={{ width: '18px', height: '2px', background: 'var(--color-gold)', display: 'block', borderRadius: '2px' }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
              style={{ width: '24px', height: '2px', background: 'var(--color-parchment)', display: 'block', borderRadius: '2px' }}
            />
          </motion.button>
        </div>
      </div>

      {/* ── Mobile Menu ─────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(10, 25, 47, 0.97)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(197, 160, 89, 0.15)',
            }}
          >
            <div className="section-container flex flex-col gap-1" style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: language === 'ar' ? 30 : -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    color: 'var(--color-slate-100)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '0.85rem 0',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.08)',
                    fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  marginTop: '1rem',
                  padding: '0.85rem 0',
                  textAlign: 'center',
                  color: 'var(--color-gold)',
                  border: '1.5px solid var(--color-gold)',
                  borderRadius: 'var(--radius-pill)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                }}
              >
                {t.nav.bookConsultation}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
