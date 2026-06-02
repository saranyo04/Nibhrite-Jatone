'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const outerSpring = {
  stiffness: 150,
  damping: 15,
  mass: 0.5,
};

const innerSpring = {
  stiffness: 500,
  damping: 28,
  mass: 0.3,
};

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const outerXTarget = useMotionValue(-16);
  const outerYTarget = useMotionValue(-16);
  const innerXTarget = useMotionValue(-3);
  const innerYTarget = useMotionValue(-3);
  const outerScaleTarget = useMotionValue(1);
  const outerOpacityTarget = useMotionValue(0);
  const innerOpacityTarget = useMotionValue(0);

  const outerX = useSpring(outerXTarget, outerSpring);
  const outerY = useSpring(outerYTarget, outerSpring);
  const outerScale = useSpring(outerScaleTarget, outerSpring);
  const outerOpacity = useSpring(outerOpacityTarget, outerSpring);
  const innerX = useSpring(innerXTarget, innerSpring);
  const innerY = useSpring(innerYTarget, innerSpring);
  const innerOpacity = useSpring(innerOpacityTarget, innerSpring);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      outerXTarget.set(e.clientX - 16);
      outerYTarget.set(e.clientY - 16);
      innerXTarget.set(e.clientX - 3);
      innerYTarget.set(e.clientY - 3);
      outerOpacityTarget.set(1);
      innerOpacityTarget.set(1);

      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
      outerScaleTarget.set(isClickable ? 1.5 : 1);
    };

    const handleMouseLeave = () => {
      outerOpacityTarget.set(0);
      innerOpacityTarget.set(0);
    };
    const handleMouseEnter = () => {
      outerOpacityTarget.set(1);
      innerOpacityTarget.set(1);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
    };
  }, [
    innerOpacityTarget,
    innerXTarget,
    innerYTarget,
    outerOpacityTarget,
    outerScaleTarget,
    outerXTarget,
    outerYTarget,
  ]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-terracotta/20 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: outerX,
          y: outerY,
          scale: outerScale,
          opacity: outerOpacity,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-terracotta/40 pointer-events-none z-[9999]"
        style={{
          x: innerX,
          y: innerY,
          opacity: innerOpacity,
        }}
      />
    </>
  );
}
