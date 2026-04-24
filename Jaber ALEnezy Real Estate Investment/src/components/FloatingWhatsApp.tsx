/* ================================================================
   FLOATING WHATSAPP BUTTON
   Pulse animation, fixed bottom corner
   ================================================================ */

import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', bounce: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 end-6 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
      <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.656.845 5.143 2.388 7.213L.667 24l4.908-1.684A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm7.147 17.15c-.301.848-1.748 1.6-2.422 1.631-.628.029-1.428.182-4.57-1.121-3.79-1.57-6.233-5.46-6.425-5.717-.191-.256-1.536-2.046-1.536-3.905 0-1.859.967-2.766 1.306-3.13.339-.364.739-.456.985-.456.246 0 .493.003.708.012.226.01.528-.088.825.626.308.741 1.047 2.553 1.139 2.738.092.185.154.402.031.648-.123.246-.185.4-.369.617-.185.215-.386.475-.554.631-.185.17-.384.356-.169.725.215.369.957 1.58 2.062 2.565 1.427 1.272 2.61 1.666 2.979 1.836.369.17.585.154.8-.093.215-.246.924-1.079 1.17-1.448.246-.37.493-.308.831-.185.339.123 2.155 1.018 2.525 1.202.37.185.616.277.708.432.092.154.092.909-.209 1.758z"/>
      </svg>
    </motion.a>
  );
}
