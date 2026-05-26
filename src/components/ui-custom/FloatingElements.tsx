'use client';

import React from 'react';
import { motion } from 'framer-motion';

function TerracottaMotif({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#A0522D" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="20" cy="20" r="12" stroke="#A0522D" strokeOpacity="0.04" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="6" fill="#A0522D" fillOpacity="0.03" />
        <path d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20" stroke="#A0522D" strokeOpacity="0.04" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

function AlpanaPattern({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 15 Q15 5 30 15 Q45 25 60 15 Q75 5 90 15 Q105 25 120 15" stroke="#A0522D" strokeOpacity="0.05" strokeWidth="1" fill="none" />
        <circle cx="30" cy="15" r="2" fill="#A0522D" fillOpacity="0.04" />
        <circle cx="60" cy="15" r="2" fill="#A0522D" fillOpacity="0.04" />
        <circle cx="90" cy="15" r="2" fill="#A0522D" fillOpacity="0.04" />
      </svg>
    </div>
  );
}

function PaintStroke({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      <svg width="150" height="8" viewBox="0 0 150 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4 Q30 0 60 4 Q90 8 120 4 Q140 2 150 3" stroke="#A0522D" strokeOpacity="0.04" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function FloatingBaulSite({
  className,
  size = 50,
  floatDuration = 14,
  rotateRange = 3,
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
        y: [0, -10, 0],
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
        className="opacity-[0.1]"
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Floating Baul instruments — site-wide subtle presence */}
      <FloatingBaulSite className="top-[35%] left-[2%] hidden xl:block" size={50} floatDuration={16} rotateRange={3} delay={1} />
      <FloatingBaulSite className="top-[65%] right-[3%] hidden xl:block" size={45} floatDuration={18} rotateRange={-4} delay={5} />

      {/* Terracotta motifs */}
      <TerracottaMotif className="top-[20%] left-[3%] opacity-60 hidden lg:block" />
      <TerracottaMotif className="top-[45%] right-[4%] opacity-40 hidden lg:block" />
      <TerracottaMotif className="top-[70%] left-[6%] opacity-30 hidden xl:block" />
      <TerracottaMotif className="top-[85%] right-[5%] opacity-20 hidden xl:block" />

      {/* Alpana patterns */}
      <AlpanaPattern className="top-[30%] right-[2%] opacity-50 hidden xl:block" />
      <AlpanaPattern className="top-[60%] left-[2%] opacity-40 hidden xl:block" />

      {/* Paint strokes */}
      <PaintStroke className="top-[25%] left-[8%] opacity-50 hidden lg:block" />
      <PaintStroke className="top-[55%] right-[6%] opacity-30 hidden lg:block" />
      <PaintStroke className="top-[80%] left-[10%] opacity-25 hidden xl:block" />

      {/* Ambient floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-dusty-gold/15"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
