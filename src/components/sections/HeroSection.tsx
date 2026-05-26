'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/site-data';

function FloatingLeaf({ delay, left, duration }: { delay: number; left: string; duration: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left, top: '-5%' }}
      initial={{ opacity: 0, y: -20, rotate: 0 }}
      animate={{
        opacity: [0, 0.5, 0.4, 0],
        y: ['0%', '110%'],
        rotate: [0, 180, 360],
        x: [0, 30, -20, 10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C10 0 18 8 18 16C18 20.4 14.4 24 10 24C5.6 24 2 20.4 2 16C2 8 10 0 10 0Z"
          fill="#556B2F"
          fillOpacity="0.25"
        />
        <line x1="10" y1="4" x2="10" y2="28" stroke="#556B2F" strokeOpacity="0.2" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );
}

function BirdSilhouette({ delay, top }: { delay: number; top: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ top, left: '-10%' }}
      initial={{ x: '-10%', opacity: 0 }}
      animate={{ x: '110%', opacity: [0, 0.35, 0.35, 0] }}
      transition={{
        duration: 25 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 6C4 2 8 4 12 6C14 7 16 6 16 6C16 6 18 7 20 6C24 4 28 2 32 6"
          stroke="#6B4F3A"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

function FloatingBaulInstrument({
  className,
  size = 90,
  floatDuration = 10,
  rotateRange = 4,
  delay = 0,
}: {
  className?: string;
  size?: number;
  floatDuration?: number;
  rotateRange?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        y: [0, -14, 0],
        rotate: [0, rotateRange, -rotateRange, 0],
      }}
      transition={{
        duration: floatDuration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <img
        src="/images/baul-instrument.png"
        alt="Baul instrument"
        width={size}
        height={Math.round(size * 1.5)}
        className="opacity-[0.18]"
        style={{ mixBlendMode: 'multiply' }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

function AlpanaDecoration({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none opacity-[0.06] ${className}`}>
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20"
          stroke="#A0522D"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="20" r="4" fill="#A0522D" fillOpacity="0.3" />
        <circle cx="100" cy="20" r="4" fill="#A0522D" fillOpacity="0.3" />
        <circle cx="150" cy="20" r="4" fill="#A0522D" fillOpacity="0.3" />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm Santiniketan morning gradient — earthy, peaceful, authentic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8D5B7] via-[#F0E4CE] to-[#FAF7F2]" />
      
      {/* Simulated forest silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
          <path
            d="M0 200 L0 120 Q60 40 120 120 Q180 60 240 120 Q300 30 360 100 Q420 50 480 110 Q540 20 600 90 Q660 40 720 100 Q780 10 840 80 Q900 30 960 100 Q1020 20 1080 90 Q1140 40 1200 110 Q1260 30 1320 100 Q1380 50 1440 120 L1440 200 Z"
            fill="#556B2F"
            fillOpacity="0.08"
          />
          <path
            d="M0 200 L0 140 Q80 80 160 140 Q240 90 320 140 Q400 70 480 130 Q560 80 640 140 Q720 60 800 120 Q880 80 960 140 Q1040 70 1120 130 Q1200 80 1280 140 Q1360 90 1440 150 L1440 200 Z"
            fill="#556B2F"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <FloatingLeaf delay={0} left="10%" duration={18} />
      <FloatingLeaf delay={3} left="30%" duration={22} />
      <FloatingLeaf delay={7} left="55%" duration={16} />
      <FloatingLeaf delay={11} left="75%" duration={20} />
      <FloatingLeaf delay={5} left="90%" duration={24} />

      <BirdSilhouette delay={0} top="15%" />
      <BirdSilhouette delay={8} top="25%" />
      <BirdSilhouette delay={15} top="20%" />

      {/* Floating Baul instruments — authentic Santiniketan vibe */}
      <FloatingBaulInstrument className="top-[10%] left-[4%]" size={90} floatDuration={12} rotateRange={3} delay={0} />
      <FloatingBaulInstrument className="top-[22%] right-[5%]" size={75} floatDuration={14} rotateRange={-4} delay={3} />
      <FloatingBaulInstrument className="bottom-[28%] left-[8%]" size={60} floatDuration={16} rotateRange={5} delay={6} />
      <FloatingBaulInstrument className="top-[55%] right-[10%]" size={65} floatDuration={11} rotateRange={-3} delay={2} />

      <AlpanaDecoration className="top-[15%] left-[5%] hidden xl:block" />
      <AlpanaDecoration className="bottom-[25%] right-[3%] hidden xl:block" />

      {/* Soft ambient particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-dusty-gold/30"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-24 h-[1px] bg-terracotta/40 mx-auto mb-8"
        />

        {/* Bengali subtitle above heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-base text-mud-brown/60 tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-noto-bengali)' }}
        >
          নিভৃতে যতনে
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-mud-brown tracking-wide mb-6"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Nibhṛite{' '}
          <span className="font-semibold text-terracotta">Jatone</span>
        </motion.h1>

        {/* English tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-base sm:text-lg md:text-xl text-mud-brown/70 mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          A soulful homestay experience in the heart of Santiniketan
        </motion.p>

        {/* Bengali line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg sm:text-xl text-terracotta/70 mb-10"
          style={{ fontFamily: 'var(--font-noto-bengali)' }}
        >
          শান্তির আশ্রয়, প্রকৃতির কোলে
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(160, 82, 45, 0.25)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll('about')}
            className="px-8 py-3.5 bg-terracotta text-cream rounded-full text-sm font-medium tracking-wide hover:bg-terracotta-dark transition-colors duration-300 shadow-[0_4px_15px_rgba(160,82,45,0.2)]"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Explore Stay
          </motion.button>
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(107, 79, 58, 0.12)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll('gallery')}
            className="px-8 py-3.5 bg-transparent border-2 border-terracotta/40 text-terracotta rounded-full text-sm font-medium tracking-wide hover:border-terracotta hover:bg-terracotta/5 transition-all duration-300"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            View Gallery
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs text-mud-brown/40 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-mud-brown/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
