'use client';

import React from 'react';
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
import SectionDivider from '@/components/ui-custom/SectionDivider';

export default function Home() {
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
    </div>
  );
}
