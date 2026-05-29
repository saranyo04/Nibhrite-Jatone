'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3, boxShadow: '0 6px 20px rgba(160, 82, 45, 0.25)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-[4.5rem] right-5 sm:bottom-20 sm:right-6 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-terracotta text-cream flex items-center justify-center shadow-[0_4px_15px_rgba(160,82,45,0.2)] hover:bg-terracotta-dark transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
