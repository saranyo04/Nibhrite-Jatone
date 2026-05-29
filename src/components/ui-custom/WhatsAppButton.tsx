'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/919748318934"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20BD5A] transition-colors duration-200"
        style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 2,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
      </motion.a>
    </AnimatePresence>
  );
}
