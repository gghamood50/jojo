/* ================================================================
   PORTFOLIO SECTION — Premium Property Discovery Engine
   Minimalist filter UI, luxury magazine property cards
   ================================================================ */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

const MOCK_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    title: { en: "The Royal Penthouse", ar: "البنتهاوس الملكي" },
    location: { en: "Rashidiya 3, Ajman", ar: "الراشدية ٣، عجمان" },
    price: 3500000,
    beds: 4,
    baths: 5,
    sqft: 4200,
    type: { en: "Penthouse", ar: "بنتهاوس" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    title: { en: "Oasis Luxury Villa", ar: "فيلا الواحة الفاخرة" },
    location: { en: "Al Zorah, Ajman", ar: "الزوراء، عجمان" },
    price: 5200000,
    beds: 5,
    baths: 6,
    sqft: 5800,
    type: { en: "Villa", ar: "فيلا" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687931-cebf5518b5b5?auto=format&fit=crop&q=80",
    title: { en: "Skyline Studio", ar: "استوديو الأفق" },
    location: { en: "City Tower, Ajman", ar: "سيتي تاور، عجمان" },
    price: 450000,
    beds: 1,
    baths: 1,
    sqft: 850,
    type: { en: "Studio", ar: "استوديو" }
  }
];

export default function Portfolio() {
  const { t, language } = useLanguageStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-AE' : 'en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="portfolio" className="py-24 bg-[var(--color-parchment-warm)]">
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
              {t.portfolio.sectionTag}
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
            {t.portfolio.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-slate-500)] max-w-2xl mx-auto"
            style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
          >
            {t.portfolio.subtitle}
          </motion.p>
        </div>

        {/* Minimalist Floating Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-4xl mx-auto mb-16 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[var(--color-gold)]/10 p-2 md:p-3"
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
            {/* Location */}
            <div className="flex-1 flex items-center w-full md:w-auto px-4 py-3 border-b md:border-b-0 md:border-r md:border-[rgba(0,0,0,0.05)]">
              <svg className="w-5 h-5 text-[var(--color-gold)] me-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input 
                type="text" 
                placeholder={t.portfolio.filters.location}
                className="w-full bg-transparent border-none outline-none text-sm text-[var(--color-midnight)] placeholder-[var(--color-slate-400)]"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              />
            </div>
            
            {/* Property Type */}
            <div className="flex-1 flex items-center w-full md:w-auto px-4 py-3 border-b md:border-b-0 md:border-r md:border-[rgba(0,0,0,0.05)]">
              <svg className="w-5 h-5 text-[var(--color-gold)] me-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <select 
                className="w-full bg-transparent border-none outline-none text-sm text-[var(--color-slate-500)] appearance-none cursor-pointer"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              >
                <option value="">{t.portfolio.filters.propertyType}</option>
                <option value="studio">Studio</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>

            {/* Budget */}
            <div className="flex-1 flex items-center w-full md:w-auto px-4 py-3 mb-2 md:mb-0">
              <svg className="w-5 h-5 text-[var(--color-gold)] me-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <select 
                className="w-full bg-transparent border-none outline-none text-sm text-[var(--color-slate-500)] appearance-none cursor-pointer"
                style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
              >
                <option value="">{t.portfolio.filters.budget}</option>
                <option value="1">Under 1M AED</option>
                <option value="2">1M - 3M AED</option>
                <option value="3">Over 3M AED</option>
              </select>
            </div>

            {/* Search Button */}
            <button 
              className="w-full md:w-auto px-8 py-3 bg-[var(--color-midnight)] text-white rounded-full hover:bg-[var(--color-midnight-light)] transition-colors flex items-center justify-center font-medium shadow-[0_4px_15px_rgba(10,25,47,0.2)]"
              style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
            >
              {t.portfolio.filters.search}
            </button>
          </div>
        </motion.div>

        {/* Property Cards Grid - Responsive from 3 columns to 1 column 'Story' format on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {MOCK_PROPERTIES.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Image Container with Hover-to-Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
                  <div className="absolute top-4 start-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-midnight)] text-xs font-bold rounded-full uppercase tracking-wider" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
                      {property.type[language]}
                    </span>
                  </div>
                  <motion.div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                    style={{ backgroundImage: `url(${property.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,47,0.5)] to-transparent opacity-60" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 
                      className="text-xl font-bold text-[var(--color-midnight)] line-clamp-1"
                      style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
                    >
                      {property.title[language]}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-[var(--color-slate-500)] text-sm mb-4">
                    <svg className="w-4 h-4 me-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>
                      {property.location[language]}
                    </span>
                  </div>

                  {/* Price */}
                  <div 
                    className="text-2xl font-bold text-[var(--color-gold-dark)] mb-5"
                    style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
                  >
                    {formatPrice(property.price)}
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.05)] text-[var(--color-slate-600)] text-sm">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      <span className="font-semibold">{property.beds}</span> 
                      <span className="text-xs" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.portfolio.properties.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                      <span className="font-semibold">{property.baths}</span> 
                      <span className="text-xs" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.portfolio.properties.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                      <span className="font-semibold">{property.sqft}</span> 
                      <span className="text-xs" style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}>{t.portfolio.properties.sqft}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#all-properties"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 text-[var(--color-midnight)] border-2 border-[var(--color-midnight)] rounded-full hover:bg-[var(--color-midnight)] hover:text-white transition-colors font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
            style={{ fontFamily: language === 'ar' ? "'Cairo', sans-serif" : "'Montserrat', sans-serif" }}
          >
            {t.common.viewAll}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
