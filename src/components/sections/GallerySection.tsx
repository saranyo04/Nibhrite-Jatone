'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { galleryImages, galleryCategories, galleryPreviewLimits, type GalleryCategory, type GalleryImage } from '@/data/site-data';
import { HOME_SCROLL_RESTORE_PENDING_KEY, SECTION_IDS } from '@/data/navigation-state';
import { buildGalleryHref, getGalleryImagesForCategory } from '@/lib/gallery';
import { GalleryImageCard, GalleryLightbox } from '@/components/sections/GalleryShared';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [failedImageIds, setFailedImageIds] = useState<number[]>([]);

  const filteredImages = getGalleryImagesForCategory(activeCategory, galleryImages);

  const previewLimit = galleryPreviewLimits[activeCategory];
  const previewImages = filteredImages.slice(0, previewLimit);

  const openLightbox = useCallback((img: GalleryImage) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxImage(null);
  }, []);

  const markImageFailed = useCallback((id: number) => {
    setFailedImageIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const markHomeScrollRestorePending = useCallback(() => {
    try {
      sessionStorage.setItem(HOME_SCROLL_RESTORE_PENDING_KEY, 'true');
    } catch {
    }
  }, []);

  return (
    <section id={SECTION_IDS.gallery} className="relative py-16 sm:py-20 lg:py-28 bg-cream">
      <div className="absolute inset-0 paper-texture opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="text-sm text-terracotta/60 tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Visual Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            The <span className="font-semibold text-terracotta">Gallery</span>
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto mb-6" />
          <p
            className="text-base text-mud-brown/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            A glimpse into the warmth, beauty, and soul of Nibhṛite Jatone — 
            where every corner tells a story of Bengal&apos;s timeless charm.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              suppressHydrationWarning
              className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-terracotta text-cream shadow'
                  : 'bg-cream text-mud-brown/60 border border-warm-beige/60'
              }`}
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {previewImages.map((img, i) => (
              <GalleryImageCard
                key={img.id}
                item={img}
                index={i}
                imageFailed={failedImageIds.includes(img.id)}
                cardClassName="group relative rounded-xl overflow-hidden cursor-pointer warm-shadow"
                zoomClassName="absolute top-3 right-3 w-8 h-8 rounded-lg bg-cream/80 backdrop-blur-sm hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                transitionDelay={i * 0.05}
                showCategoryBadge={activeCategory === 'All'}
                onClick={() => openLightbox(img)}
                onImageError={() => {
                  markImageFailed(img.id);
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / View Full Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-8 sm:mt-10"
        >
          <Link
            href={buildGalleryHref(activeCategory)}
            onClick={markHomeScrollRestorePending}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-terracotta text-cream text-xs sm:text-sm font-medium shadow hover:bg-terracotta/90 transition-colors duration-300"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            View Full Gallery
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && lightboxImage && (
          <GalleryLightbox
            item={lightboxImage}
            overlayClassName="fixed inset-0 z-[60] bg-mud-brown/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
            containerClassName="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden warm-shadow-lg"
            closeButtonClassName="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg"
            closeIconClassName="w-4 h-4 sm:w-5 sm:h-5 text-mud-brown"
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
