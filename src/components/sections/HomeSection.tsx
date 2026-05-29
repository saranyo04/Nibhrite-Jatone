'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site-data';

export default function HomeSection() {
  return (
    <section id="home-content" className="relative py-16 sm:py-20 lg:py-28 bg-cream paper-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p
            className="text-sm text-terracotta/60 tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Welcome to
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            A <span className="font-semibold text-terracotta">Soulful</span> Retreat
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto mb-6" />
          <p
            className="text-sm sm:text-base lg:text-lg text-mud-brown/60 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Nestled in the serene embrace of Santiniketan&apos;s red soil and golden forests, 
            our homestay offers more than a room — it offers a feeling. A place where time 
            slows down, where the breeze carries Tagore&apos;s poetry, and every moment feels 
            like coming home.
          </p>
          <p
            className="text-sm sm:text-base text-terracotta/50 mt-4 italic"
            style={{ fontFamily: 'var(--font-noto-bengali)' }}
          >
            নিভৃতে যতনে, প্রকৃতির কোলে শান্তির আশ্রয়
          </p>
        </motion.div>
      </div>
    </section>
  );
}
