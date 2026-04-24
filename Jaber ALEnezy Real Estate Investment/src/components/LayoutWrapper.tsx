/* ================================================================
   LAYOUT WRAPPER — Core RTL/LTR Responsive Shell
   Wraps the entire application with direction-aware layout,
   Framer Motion page transitions, and global font orchestration
   ================================================================ */

import { type ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '../store/useLanguageStore';

interface LayoutWrapperProps {
  children: ReactNode;
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { language, direction } = useLanguageStore();

  // Sync HTML attributes on mount and language change
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;

    // Set the appropriate font-family on the body
    document.body.style.fontFamily =
      language === 'ar'
        ? "'Cairo', sans-serif"
        : "'Montserrat', sans-serif";
  }, [language, direction]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        direction: direction,
        fontFamily:
          language === 'ar'
            ? "'Cairo', sans-serif"
            : "'Montserrat', sans-serif",
      }}
    >
      {/* Ambient Background Decorations */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Top-right gold radial */}
        <div
          className="absolute"
          style={{
            top: '-15%',
            insetInlineEnd: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(197,160,89,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Bottom-left midnight radial */}
        <div
          className="absolute"
          style={{
            bottom: '-10%',
            insetInlineStart: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(10,25,47,0.04) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Page Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key={language}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative"
          style={{ zIndex: 1 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
