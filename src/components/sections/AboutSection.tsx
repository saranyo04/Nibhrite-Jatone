'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TreePine, Sun, Home, Music, Heart, Leaf } from 'lucide-react';

const highlights = [
  { icon: TreePine, label: 'Sal & Sonajhuri Groves', bengali: 'শাল ও সোনাঝুড়ি' },
  { icon: Sun, label: 'Morning Chai in Nature', bengali: 'প্রকৃতির কোলে চা' },
  { icon: Home, label: 'Cozy Hygienic Rooms', bengali: 'আরামদায়ক ঘর' },
  { icon: Music, label: 'Baul Music Heritage', bengali: 'বাউল সংগীত' },
  { icon: Heart, label: 'Warm Homely Care', bengali: 'উষ্ণ যত্ন' },
  { icon: Leaf, label: 'Red Soil & Open Skies', bengali: 'লাল মাটি ও আকাশ' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-offwhite">
      {/* Subtle background texture */}
      <div className="absolute inset-0 paper-texture opacity-50" />

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
            Our Story
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            About <span className="font-semibold text-terracotta">Nibhṛite Jatone</span>
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto" />
        </motion.div>

        {/* Split Layout — Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Left — Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden warm-shadow-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about-home.jpg"
                  alt="Nibhṛite Jatone - Traditional Bengali Homestay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Decorative corner frame */}
              <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-terracotta/20 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-terracotta/20 rounded-br-lg" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-4 bg-cream/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-warm-beige/50 max-w-[220px]"
            >
              <p
                className="text-xs text-terracotta/60 italic leading-relaxed"
                style={{ fontFamily: 'var(--font-noto-bengali)' }}
              >
                প্রকৃতির কোলে মনের শান্তি
              </p>
              <p
                className="text-[10px] text-mud-brown/40 mt-1"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Peace of mind in nature&apos;s embrace
              </p>
            </motion.div>

            {/* Second small image — stacked collage effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 relative rounded-2xl overflow-hidden warm-shadow group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/images/gallery/exterior/exterior-2.jpg"
                  alt="Garden path through Sal trees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Overlay tag */}
              <div className="absolute bottom-3 left-3 bg-cream/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                <p
                  className="text-[10px] text-terracotta/70 tracking-wider uppercase"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  শান্তির আশ্রয়
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Text Content + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="text-base sm:text-lg text-mud-brown/70 leading-relaxed mb-5"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              At <span className="text-terracotta font-semibold" style={{ fontFamily: 'var(--font-cormorant)' }}>Nibhṛite Jatone</span>, 
              we don&apos;t just host guests — we welcome them into our home and our hearts. 
              Tucked away in the calm green surroundings of Santiniketan, our homestay is a 
              sanctuary where the noise of the world fades and the music of nature takes over.
            </p>
            <p
              className="text-base text-mud-brown/60 leading-relaxed mb-5"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Wake up to the songs of birds, sip morning tea under Sal trees, walk to the 
              Sonajhuri forest just minutes away, and return to home-cooked Bengali meals 
              prepared with the care and warmth of a mother&apos;s kitchen. This is not a hotel — 
              this is home, away from home.
            </p>

            {/* Bengali quote */}
            <div className="border-l-2 border-terracotta/30 pl-4 mb-8">
              <p
                className="text-sm text-terracotta/50 italic"
                style={{ fontFamily: 'var(--font-noto-bengali)' }}
              >
                যেখানে সময় থমকে যায়, শান্তি ফিরে আসে
              </p>
              <p
                className="text-xs text-mud-brown/30 mt-1"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Where time stands still, and peace returns
              </p>
            </div>

            {/* Highlight pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-2.5 bg-cream/80 rounded-xl px-3 py-2.5 border border-warm-beige/40 hover:border-terracotta/20 hover:bg-terracotta/5 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-terracotta/8 flex items-center justify-center shrink-0 group-hover:bg-terracotta/12 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-terracotta/60" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-xs font-medium text-mud-brown/80 leading-tight truncate"
                        style={{ fontFamily: 'var(--font-nunito)' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-[9px] text-terracotta/40 truncate"
                        style={{ fontFamily: 'var(--font-noto-bengali)' }}
                      >
                        {item.bengali}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tagore quote block */}
            <div className="relative bg-cream/60 rounded-2xl p-5 border border-warm-beige/30">
              <Quote className="absolute top-3 right-3 w-6 h-6 text-terracotta/10" />
              <p
                className="text-sm text-terracotta/50 italic leading-relaxed mb-2"
                style={{ fontFamily: 'var(--font-noto-bengali)' }}
              >
                যদি তোর ডাক শুনে কেউ না আসে, তবে একলা চলো রে
              </p>
              <p
                className="text-xs text-mud-brown/40"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                &ldquo;If no one responds to your call, then walk alone&rdquo; — Rabindranath Tagore
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
