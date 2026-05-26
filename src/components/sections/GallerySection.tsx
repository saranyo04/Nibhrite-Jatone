'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/data/site-data';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = useCallback((img: typeof galleryImages[0]) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxImage(null);
  }, []);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-cream">
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
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer warm-shadow border border-warm-beige/30 hover:border-terracotta/20 transition-all duration-500"
                onClick={() => openLightbox(img)}
              >
                <div
                  className={`${
                    i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                  } bg-gradient-to-br from-warm-beige to-parchment relative`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.placeholder-content')) {
                        parent.classList.add('flex', 'items-center', 'justify-center');
                        const placeholder = document.createElement('div');
                        placeholder.className = 'placeholder-content text-center p-4';
                        placeholder.innerHTML = `
                          <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-terracotta/10 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0522D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.4">
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                              <circle cx="9" cy="9" r="2"/>
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                            </svg>
                          </div>
                          <p style="font-family: var(--font-cormorant); color: rgba(107,79,58,0.3); font-size: 12px">${img.category}</p>
                        `;
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
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
                  <span className="px-2 py-1 text-[10px] rounded-full bg-cream/80 backdrop-blur-sm text-terracotta/70 font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-mud-brown/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden warm-shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 text-mud-brown" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-mud-brown/80 to-transparent">
                <p className="text-sm text-cream/90" style={{ fontFamily: 'var(--font-nunito)' }}>
                  {lightboxImage.alt}
                </p>
                <p className="text-xs text-cream/50 mt-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                  {lightboxImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
