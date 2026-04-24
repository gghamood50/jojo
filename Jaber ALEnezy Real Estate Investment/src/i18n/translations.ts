/* ================================================================
   i18n TRANSLATIONS — JABER ALENEZY REAL ESTATE
   Bilingual EN/AR content with full type safety
   ================================================================ */

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    cta: string;
    propertySearch: string;
    bookConsultation: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  about: {
    sectionTag: string;
    title: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  portfolio: {
    sectionTag: string;
    title: string;
    subtitle: string;
    filters: {
      location: string;
      propertyType: string;
      budget: string;
      search: string;
    };
    properties: {
      beds: string;
      baths: string;
      sqft: string;
      viewDetails: string;
    };
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    brand: string;
    tagline: string;
    quickLinks: string;
    contactUs: string;
    address: string;
    phone: string;
    email: string;
    rights: string;
    privacy: string;
    terms: string;
    newsletter: {
      title: string;
      desc: string;
      placeholder: string;
      subscribe: string;
    };
  };
  common: {
    learnMore: string;
    getStarted: string;
    viewAll: string;
    scrollDown: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    meta: {
      title: 'Jaber ALEnezy Real Estate Investment',
      description: 'Premium real estate investment solutions in the UAE — luxury properties, strategic consulting, and world-class portfolio management.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Get In Touch',
      propertySearch: 'Property Search',
      bookConsultation: 'Book a Consultation',
    },
    hero: {
      badge: 'Trusted Since 2010',
      title: 'Redefining Real Estate Excellence',
      titleHighlight: 'in Ajman',
      subtitle: 'We transform visionary capital into landmark properties. From luxury residences to strategic commercial assets — we build wealth that endures.',
      ctaPrimary: 'Explore Opportunities',
      ctaSecondary: 'Our Portfolio',
      stat1Label: 'Projects Delivered',
      stat1Value: '150+',
      stat2Label: 'Total Investment Value',
      stat2Value: '2B+ AED',
      stat3Label: 'Years of Excellence',
      stat3Value: '14+',
    },
    about: {
      sectionTag: 'Who We Are',
      title: 'Building Legacies, Not Just Properties',
      description: 'Jaber ALEnezy Real Estate Investment stands at the intersection of ambition and expertise. With over a decade of experience across the UAE property market, we deliver investments that redefine skylines and set new benchmarks for luxury living.',
      feature1Title: 'Strategic Vision',
      feature1Desc: 'Identifying high-growth opportunities before the market moves, ensuring maximum ROI for our partners.',
      feature2Title: 'Unmatched Expertise',
      feature2Desc: 'A team of seasoned professionals with deep knowledge of UAE regulations, market dynamics, and luxury trends.',
      feature3Title: 'End-to-End Service',
      feature3Desc: 'From land acquisition to final handover, we manage every detail with precision and care.',
    },
    services: {
      sectionTag: 'Our Expertise',
      title: 'Premium Real Estate Services',
      subtitle: 'Comprehensive solutions tailored to elevate your real estate portfolio.',
      card1Title: 'Property Management',
      card1Desc: 'End-to-end management ensuring your luxury assets perform at their highest value while minimizing your daily involvement.',
      card2Title: 'Sales & Acquisition',
      card2Desc: 'Exclusive access to off-market luxury properties and strategic sales representation in Ajman and across the UAE.',
      card3Title: 'Strategic Consultation',
      card3Desc: 'Data-driven insights and personalized advisory for high-net-worth investors navigating the dynamic UAE property market.',
    },
    portfolio: {
      sectionTag: 'Discovery Engine',
      title: 'Premium Properties',
      subtitle: 'Explore our curated selection of luxury real estate opportunities.',
      filters: {
        location: 'Location (e.g. Rashidiya 3)',
        propertyType: 'Property Type',
        budget: 'Budget Range',
        search: 'Search Properties',
      },
      properties: {
        beds: 'Beds',
        baths: 'Baths',
        sqft: 'Sq.Ft.',
        viewDetails: 'View Details',
      },
    },
    contact: {
      sectionTag: 'Get in Touch',
      title: 'Start Your Journey With Us',
      subtitle: 'Our advisors are ready to discuss your next real estate move in the UAE.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message',
      },
    },
    footer: {
      brand: 'Jaber ALEnezy',
      tagline: 'Defining the future of UAE real estate investment with integrity, vision, and excellence.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      address: 'Al Rashidiya 3, Ajman, UAE',
      phone: '+971 XX XXX XXXX',
      email: 'info@jaberalenezy.ae',
      rights: '© 2026 Jaber ALEnezy Real Estate Investment. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      newsletter: {
        title: 'Stay Informed',
        desc: 'Join our exclusive newsletter for market insights and off-market opportunities.',
        placeholder: 'Your Email Address',
        subscribe: 'Subscribe',
      },
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewAll: 'View All',
      scrollDown: 'Scroll to explore',
    },
  },
  ar: {
    meta: {
      title: 'جابر العنزي للاستثمار العقاري',
      description: 'حلول استثمار عقاري متميزة في الإمارات — عقارات فاخرة، استشارات استراتيجية، وإدارة محافظ عالمية المستوى.',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'مشاريعنا',
      contact: 'اتصل بنا',
      cta: 'تواصل معنا',
      propertySearch: 'البحث عن عقار',
      bookConsultation: 'احجز استشارة',
    },
    hero: {
      badge: 'ثقة منذ ٢٠١٠',
      title: 'نخبة الاستثمار العقاري',
      titleHighlight: 'في عجمان',
      subtitle: 'نحوّل رؤوس الأموال الطموحة إلى عقارات بارزة. من المساكن الفاخرة إلى الأصول التجارية الاستراتيجية — نبني ثروات تدوم.',
      ctaPrimary: 'استكشف الفرص',
      ctaSecondary: 'مشاريعنا',
      stat1Label: 'مشاريع منجزة',
      stat1Value: '+١٥٠',
      stat2Label: 'إجمالي قيمة الاستثمار',
      stat2Value: '+٢ مليار درهم',
      stat3Label: 'سنوات من التميز',
      stat3Value: '+١٤',
    },
    about: {
      sectionTag: 'من نحن',
      title: 'نبني إرثاً، لا مجرد عقارات',
      description: 'تقف شركة جابر العنزي للاستثمار العقاري عند تقاطع الطموح والخبرة. مع أكثر من عقد من الخبرة في سوق العقارات الإماراتي، نقدم استثمارات تعيد تشكيل الأفق وتضع معايير جديدة للحياة الفاخرة.',
      feature1Title: 'رؤية استراتيجية',
      feature1Desc: 'تحديد فرص النمو العالية قبل تحرك السوق، لضمان أقصى عائد على الاستثمار لشركائنا.',
      feature2Title: 'خبرة لا مثيل لها',
      feature2Desc: 'فريق من المحترفين ذوي الخبرة العميقة في أنظمة الإمارات وديناميكيات السوق واتجاهات الفخامة.',
      feature3Title: 'خدمة شاملة',
      feature3Desc: 'من استحواذ الأراضي إلى التسليم النهائي، ندير كل التفاصيل بدقة وعناية.',
    },
    services: {
      sectionTag: 'خبراتنا',
      title: 'خدمات عقارية متميزة',
      subtitle: 'حلول شاملة مصممة للارتقاء بمحفظتك العقارية.',
      card1Title: 'إدارة العقارات',
      card1Desc: 'إدارة شاملة تضمن أعلى أداء وعائد لأصولك الفاخرة مع تقليل تدخلاتك اليومية.',
      card2Title: 'المبيعات والاستحواذ',
      card2Desc: 'وصول حصري للعقارات الفاخرة غير المعروضة في السوق وتمثيل استراتيجي للمبيعات في عجمان والإمارات.',
      card3Title: 'الاستشارات الاستراتيجية',
      card3Desc: 'رؤى مبنية على البيانات واستشارات مخصصة للمستثمرين في سوق العقارات الإماراتي الحيوي.',
    },
    portfolio: {
      sectionTag: 'محرك البحث',
      title: 'عقارات متميزة',
      subtitle: 'استكشف تشكيلتنا المنتقاة من فرص العقارات الفاخرة.',
      filters: {
        location: 'الموقع (مثال: الراشدية ٣)',
        propertyType: 'نوع العقار',
        budget: 'نطاق الميزانية',
        search: 'البحث عن عقارات',
      },
      properties: {
        beds: 'غرف',
        baths: 'حمامات',
        sqft: 'قدم مربع',
        viewDetails: 'عرض التفاصيل',
      },
    },
    contact: {
      sectionTag: 'تواصل معنا',
      title: 'ابدأ رحلتك معنا',
      subtitle: 'مستشارونا جاهزون لمناقشة خطوتك العقارية التالية في الإمارات.',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
      },
    },
    footer: {
      brand: 'جابر العنزي',
      tagline: 'نحدد مستقبل الاستثمار العقاري في الإمارات بالنزاهة والرؤية والتميز.',
      quickLinks: 'روابط سريعة',
      contactUs: 'اتصل بنا',
      address: 'الراشدية ٣، عجمان، الإمارات العربية المتحدة',
      phone: '+971 XX XXX XXXX',
      email: 'info@jaberalenezy.ae',
      rights: '© ٢٠٢٦ جابر العنزي للاستثمار العقاري. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      newsletter: {
        title: 'ابقَ على اطلاع',
        desc: 'اشترك في نشرتنا الإخبارية للحصول على رؤى السوق والفرص الحصرية.',
        placeholder: 'بريدك الإلكتروني',
        subscribe: 'اشتراك',
      },
    },
    common: {
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      viewAll: 'عرض الكل',
      scrollDown: 'مرر للاستكشاف',
    },
  },
};
