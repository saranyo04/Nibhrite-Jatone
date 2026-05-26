'use client';

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/ui-custom/LoadingScreen';
import CustomCursor from '@/components/ui-custom/CustomCursor';
import FloatingElements from '@/components/ui-custom/FloatingElements';
import ScrollToTop from '@/components/ui-custom/ScrollToTop';
import MusicToggle from '@/components/ui-custom/MusicToggle';
import SectionDivider from '@/components/ui-custom/SectionDivider';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <LoadingScreen />
      <CustomCursor />
      <FloatingElements />
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SectionDivider variant="forest" />
        <ExperienceSection />
        <SectionDivider variant="terracotta" />
        <HomeSection />
        <GallerySection />
        <SectionDivider variant="terracotta" />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
      <MusicToggle />
    </div>
  );
}
