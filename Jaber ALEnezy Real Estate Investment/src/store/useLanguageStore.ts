/* ================================================================
   LANGUAGE STORE — Zustand Global State for i18n
   Manages language, direction, and translation access
   ================================================================ */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, type Language, type Direction, type TranslationSchema } from '../i18n/translations';

interface LanguageState {
  /** Current active language */
  language: Language;
  /** Current text direction */
  direction: Direction;
  /** Active translations object */
  t: TranslationSchema;
  /** Toggle between AR and EN */
  toggleLanguage: () => void;
  /** Set a specific language */
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      direction: 'ltr',
      t: translations.en,

      toggleLanguage: () =>
        set((state) => {
          const newLang: Language = state.language === 'en' ? 'ar' : 'en';
          const newDir: Direction = newLang === 'ar' ? 'rtl' : 'ltr';

          document.documentElement.lang = newLang;
          document.documentElement.dir = newDir;

          return {
            language: newLang,
            direction: newDir,
            t: translations[newLang],
          };
        }),

      setLanguage: (lang: Language) =>
        set(() => {
          const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.lang = lang;
          document.documentElement.dir = dir;

          return {
            language: lang,
            direction: dir,
            t: translations[lang],
          };
        }),
    }),
    {
      name: 'jaber-language-preference',
      // Only persist the language choice, rehydrate translations on load
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (rehydratedState) => {
        if (rehydratedState) {
          const lang = rehydratedState.language;
          const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';
          rehydratedState.direction = dir;
          rehydratedState.t = translations[lang];
          document.documentElement.lang = lang;
          document.documentElement.dir = dir;
        }
      },
    }
  )
);
