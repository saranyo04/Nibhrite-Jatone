'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site-data';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
        >
          {/* Decorative alpana circle */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="#A0522D" strokeOpacity="0.15" strokeWidth="1" />
              <circle cx="40" cy="40" r="30" stroke="#A0522D" strokeOpacity="0.1" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="22" stroke="#A0522D" strokeOpacity="0.08" strokeWidth="0.5" />
              <motion.circle
                cx="40"
                cy="40"
                r="5"
                fill="#A0522D"
                fillOpacity="0.3"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-light text-mud-brown mb-2"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {siteConfig.name}
          </motion.h1>

          {/* Bengali name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-terracotta/40 mb-8"
            style={{ fontFamily: 'var(--font-noto-bengali)' }}
          >
            {siteConfig.bengaliName}
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
            className="h-[2px] bg-gradient-to-r from-transparent via-terracotta/40 to-transparent rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
