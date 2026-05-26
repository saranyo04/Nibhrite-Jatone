'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Footprints, Music, Utensils, Sunset, Wheat } from 'lucide-react';
import { experiences } from '@/data/site-data';

const iconMap: Record<string, React.ElementType> = {
  coffee: Coffee,
  footprints: Footprints,
  music: Music,
  utensils: Utensils,
  sunset: Sunset,
  wheat: Wheat,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      {/* Subtle forest background effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <pattern id="tree-pattern" x="0" y="0" width="80" height="120" patternUnits="userSpaceOnUse">
              <line x1="40" y1="20" x2="40" y2="100" stroke="#556B2F" strokeWidth="3" />
              <ellipse cx="40" cy="25" rx="25" ry="30" fill="#556B2F" />
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#tree-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            What Awaits You
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            The <span className="font-semibold text-terracotta">Experience</span>
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto mb-6" />
          <p
            className="text-base text-mud-brown/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Every moment at Nibhṛite Jatone is curated by nature herself — immersive, 
            soulful, and deeply personal.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] || Coffee;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative bg-offwhite rounded-2xl overflow-hidden warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/80 to-parchment/80 flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-offwhite/60 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-cream/90 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-terracotta/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold text-mud-brown mb-1 group-hover:text-terracotta transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-xs text-terracotta/40 mb-3"
                    style={{ fontFamily: 'var(--font-noto-bengali)' }}
                  >
                    {exp.bengaliTitle}
                  </p>
                  <p
                    className="text-sm text-mud-brown/60 leading-relaxed"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {exp.description}
                  </p>
                </div>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta/0 to-transparent group-hover:via-terracotta/40 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Bengali quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p
            className="text-lg text-terracotta/30 italic"
            style={{ fontFamily: 'var(--font-noto-bengali)' }}
          >
            প্রকৃতির ছায়ায় আত্মার আলো
          </p>
          <p
            className="text-xs text-mud-brown/20 mt-1"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Light of the soul in nature&apos;s shade
          </p>
        </motion.div>
      </div>
    </section>
  );
}
