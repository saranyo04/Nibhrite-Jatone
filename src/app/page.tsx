'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/ui-custom/LoadingScreen';
import CustomCursor from '@/components/ui-custom/CustomCursor';
import FloatingElements from '@/components/ui-custom/FloatingElements';
import ScrollToTop from '@/components/ui-custom/ScrollToTop';
import WhatsAppButton from '@/components/ui-custom/WhatsAppButton';
import SectionDivider from '@/components/ui-custom/SectionDivider';

const HOME_SCROLL_RESTORE_KEY = 'nibhrite-home-scroll-y';
const HOME_SCROLL_RESTORE_PENDING_KEY = 'nibhrite-home-scroll-restore-pending';
const HOME_SCROLL_SAVE_INTERVAL_MS = 200;

export default function Home() {
  useEffect(() => {
    let frameId: number | null = null;
    let lastSavedAt = 0;

    const saveScrollPosition = () => {
      const now = Date.now();
      if (now - lastSavedAt < HOME_SCROLL_SAVE_INTERVAL_MS) return;
      lastSavedAt = now;

      try {
        sessionStorage.setItem(HOME_SCROLL_RESTORE_KEY, String(window.scrollY));
      } catch {
      }
    };

    try {
      const restorePending = sessionStorage.getItem(HOME_SCROLL_RESTORE_PENDING_KEY);
      const savedScrollY = sessionStorage.getItem(HOME_SCROLL_RESTORE_KEY);
      if (restorePending !== null) {
        sessionStorage.removeItem(HOME_SCROLL_RESTORE_PENDING_KEY);
        sessionStorage.removeItem(HOME_SCROLL_RESTORE_KEY);
        const scrollY = Number(savedScrollY);
        if (Number.isFinite(scrollY)) {
          frameId = window.requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
          });
        }
      }
    } catch {
    }

    window.addEventListener('scroll', saveScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <FloatingElements />
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <SectionDivider variant="terracotta" />
        <HomeSection />
        <AboutSection />
        <SectionDivider variant="forest" />
        <GallerySection />
        <ExperienceSection />
        <SectionDivider variant="terracotta" />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
