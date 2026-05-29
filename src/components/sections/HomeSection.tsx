'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Bed, TreePine, Palette } from 'lucide-react';
import { homeCards, siteConfig } from '@/data/site-data';

const iconMap: Record<string, React.ElementType> = {
  utensils: Utensils,
  bed: Bed,
  trees: TreePine,
  palette: Palette,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function HomeSection() {
  return (
    <section id="home-content" className="relative py-16 sm:py-20 lg:py-28 bg-cream paper-texture">
      {/* Top decorative border */}
      <div className="alpana-border-top mb-10 sm:mb-16" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {homeCards.map((card) => {
            const Icon = iconMap[card.icon] || TreePine;
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(107, 79, 58, 0.12)' }}
                className="group bg-offwhite rounded-2xl p-6 sm:p-8 warm-shadow transition-all duration-500 border border-warm-beige/50 hover:border-terracotta/20"
              >
                <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-terracotta/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-terracotta" />
                </div>
                <h3
                  className="text-lg font-semibold text-mud-brown mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs text-terracotta/50 mb-3"
                  style={{ fontFamily: 'var(--font-noto-bengali)' }}
                >
                  {card.bengaliTitle}
                </p>
                <p
                  className="text-sm text-mud-brown/60 leading-relaxed"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="alpana-border-bottom mt-10 sm:mt-16" />
    </section>
  );
}
