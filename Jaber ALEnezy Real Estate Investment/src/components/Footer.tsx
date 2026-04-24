/* ================================================================
   FOOTER SECTION — 4-Column Minimal
   Quick links, social icons, newsletter signup
   ================================================================ */

import { useLanguageStore } from '../store/useLanguageStore';

export default function Footer() {
  const { t, language } = useLanguageStore();

  return (
    <footer className="bg-[var(--color-midnight-dark)] pt-20 pb-10 text-white border-t border-[rgba(255,255,255,0.05)]">
      <div className="section-container">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand & Tagline */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
                  transform: 'rotate(45deg)',
                }}
              >
                <span
                  style={{
                    transform: 'rotate(-45deg)',
                    color: 'var(--color-midnight-dark)',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif",
                  }}
                >
                  JA
                </span>
              </div>
              <div>
                <div className="font-bold text-lg text-[var(--color-parchment)]" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.brand}</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] font-medium" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>Real Estate</div>
              </div>
            </div>
            <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed mb-6" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
              {t.footer.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['instagram', 'linkedin', 'twitter'].map((social) => (
                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-midnight)] hover:border-transparent transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'portfolio'].map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-[rgba(255,255,255,0.6)] hover:text-[var(--color-gold)] transition-colors text-sm" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
                    {t.nav[key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[rgba(255,255,255,0.6)] text-sm">
                <svg className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[rgba(255,255,255,0.6)] text-sm">
                <svg className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span style={{ direction: 'ltr' }}>{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-[rgba(255,255,255,0.6)] text-sm">
                <svg className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.newsletter.title}</h4>
            <p className="text-[rgba(255,255,255,0.6)] text-sm mb-4" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
              {t.footer.newsletter.desc}
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder={t.footer.newsletter.placeholder} 
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold)] text-white text-sm placeholder-[rgba(255,255,255,0.3)] transition-colors"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              />
              <button 
                type="button" 
                className="w-full bg-[var(--color-gold)] text-[var(--color-midnight-dark)] font-bold rounded-xl px-4 py-3 hover:bg-[var(--color-gold-dark)] transition-colors"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              >
                {t.footer.newsletter.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[rgba(255,255,255,0.4)] text-xs" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
            {t.footer.rights}
          </div>
          <div className="flex items-center gap-6 text-[rgba(255,255,255,0.4)] text-xs">
            <a href="#privacy" className="hover:text-[var(--color-gold)] transition-colors" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.privacy}</a>
            <a href="#terms" className="hover:text-[var(--color-gold)] transition-colors" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.footer.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
