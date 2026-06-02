'use client';

import React, { Suspense, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/data/site-data';
import { ROUTES } from '@/data/navigation-state';
import { getGalleryImagesForCategory } from '@/lib/gallery';

function getCategoryFromParam(param: string | null): GalleryCategory {
  if (!param) return 'All';
  const lower = param.toLowerCase();
  if (lower === 'all') return 'All';
  const match = galleryCategories.find(
    (cat) => cat.toLowerCase() === lower || cat.charAt(0).toLowerCase() === lower.charAt(0) && cat.length > 1 && lower.length > 1 && cat.toLowerCase() === lower
  );
  if (match) return match;
  // Case-insensitive first-letter match for single-letter or partial matches
  const firstLetterMatch = galleryCategories.find(
    (cat) => cat.charAt(0).toLowerCase() === lower.charAt(0)
  );
  return firstLetterMatch || 'All';
}

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const initialCategory = getCategoryFromParam(categoryParam);

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
            {filteredImages.map((img, i) => {
              const imageFailed = failedImageIds.includes(img.id);

              return (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer warm-shadow border border-warm-beige/30 hover:border-terracotta/20 transition-all duration-500"
                onClick={() => openLightbox(i)}
              >
                <div
                  className={`${
                    i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                  } bg-gradient-to-br from-warm-beige to-parchment relative${imageFailed ? ' flex items-center justify-center' : ''}`}
                >
                  {!imageFailed && (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      onError={() => {
                        markImageFailed(img.id);
                      }}
                    />
                  )}
                  {imageFailed && (
                    <div className="placeholder-content text-center p-4">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-terracotta/10 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0522D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <p style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(107,79,58,0.3)', fontSize: '12px' }}>{img.category}</p>
                    </div>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-mud-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 w-full">
                    <p
                      className="text-xs text-cream/80"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {img.alt}
                    </p>
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-cream/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-terracotta" />
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2 py-1 text-[10px] rounded-full bg-cream/80 backdrop-blur-sm text-terracotta/70 font-medium"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {img.category}
                  </span>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-mud-brown/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-mud-brown" />
            </button>

            {/* Image Container */}
            <motion.div
              key={filteredImages[lightboxIndex].id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden warm-shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="w-full h-full object-contain"
              />

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-mud-brown" />
              </button>

              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-mud-brown/80 to-transparent">
                <p
                  className="text-sm text-cream/90"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {filteredImages[lightboxIndex].alt}
                </p>
                <p
                  className="text-xs text-cream/50 mt-1"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {filteredImages[lightboxIndex].category}
                </p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-mud-brown" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1.5 rounded-full bg-cream/80 backdrop-blur-sm text-xs text-mud-brown/70 font-medium z-10"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <GalleryContent />
    </Suspense>
  );
}
