'use client';

import React, { Suspense, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/data/site-data';
import { ROUTES } from '@/data/navigation-state';
import { getGalleryCategoryFromParam, getGalleryImagesForCategory } from '@/lib/gallery';
import { GalleryImageCard, GalleryLightbox } from '@/components/sections/GalleryShared';

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const initialCategory = getGalleryCategoryFromParam(categoryParam);

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [failedImageIds, setFailedImageIds] = useState<number[]>([]);

  const filteredImages = getGalleryImagesForCategory(activeCategory, galleryImages);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [filteredImages.length]);

  const markImageFailed = useCallback((id: number) => {
    setFailedImageIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') goToPrev();
      else if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen, closeLightbox, goToPrev, goToNext]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-warm-beige/50 py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href={ROUTES.home}
            className="flex items-center gap-2 text-mud-brown/70 hover:text-terracotta transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span
              className="text-sm font-medium"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Back
            </span>
          </Link>
          <span
            className="text-sm sm:text-base font-medium text-mud-brown/60"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            নিভৃতে যতনে
          </span>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="text-center py-10 sm:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-sm text-terracotta/60 tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Visual Stories
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            The <span className="font-semibold text-terracotta">Gallery</span>
          </h1>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto mb-6" />
          <p
            className="text-base text-mud-brown/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            A glimpse into the warmth, beauty, and soul of Nibhṛite Jatone —
            where every corner tells a story of Bengal&apos;s timeless charm.
          </p>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              suppressHydrationWarning
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-terracotta text-cream shadow-[0_4px_15px_rgba(160,82,45,0.25)]'
                  : 'bg-cream text-mud-brown/60 hover:bg-warm-beige/60 hover:text-terracotta border border-warm-beige/60'
              }`}
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Count Indicator */}
        <p
          className="text-xs text-mud-brown/40 text-center mb-8"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Full Masonry Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <GalleryImageCard
                key={img.id}
                item={img}
                index={i}
                imageFailed={failedImageIds.includes(img.id)}
                cardClassName="group relative rounded-xl overflow-hidden cursor-pointer warm-shadow border border-warm-beige/30 hover:border-terracotta/20 transition-all duration-500"
                zoomClassName="absolute top-3 right-3 w-8 h-8 rounded-lg bg-cream/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                transitionDelay={i * 0.03}
                showCategoryBadge
                onClick={() => openLightbox(i)}
                onImageError={() => {
                  markImageFailed(img.id);
                }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredImages[lightboxIndex] && (
          <GalleryLightbox
            item={filteredImages[lightboxIndex]}
            overlayClassName="fixed inset-0 z-[60] bg-mud-brown/90 backdrop-blur-sm flex items-center justify-center p-4"
            containerClassName="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden warm-shadow-lg"
            closeButtonClassName="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg"
            closeIconClassName="w-4 h-4 sm:w-5 sm:h-5 text-mud-brown"
            onClose={closeLightbox}
            navigation={{
              onPrevious: (e) => {
                e.stopPropagation();
                goToPrev();
              },
              onNext: (e) => {
                e.stopPropagation();
                goToNext();
              },
              current: lightboxIndex + 1,
              total: filteredImages.length,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GalleryPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <GalleryContent />
    </Suspense>
  );
}
