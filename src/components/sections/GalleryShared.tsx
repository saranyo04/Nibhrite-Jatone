'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryMediaItem } from '@/data/site-data';
import { getGalleryMediaSrc } from '@/lib/gallery';

type GalleryImageCardProps = {
  item: GalleryMediaItem;
  index: number;
  imageFailed: boolean;
  cardClassName: string;
  zoomClassName: string;
  transitionDelay: number;
  showCategoryBadge: boolean;
  onClick: () => void;
  onImageError: () => void;
};

export function GalleryImageCard({
  item,
  index,
  imageFailed,
  cardClassName,
  zoomClassName,
  transitionDelay,
  showCategoryBadge,
  onClick,
  onImageError,
}: GalleryImageCardProps) {
  const mediaSrc = getGalleryMediaSrc(item);

  return (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: transitionDelay }}
      className={cardClassName}
      onClick={onClick}
    >
      <div
        className={`${
          index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
        } bg-gradient-to-br from-warm-beige to-parchment relative${imageFailed ? ' flex items-center justify-center' : ''}`}
      >
        {!imageFailed && (
          <Image
            src={mediaSrc}
            alt={item.alt}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={onImageError}
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
            <p style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(107,79,58,0.3)', fontSize: '12px' }}>{item.category}</p>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-mud-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
        <div className="p-4 w-full">
          <p
            className="text-xs text-cream/80"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            {item.alt}
          </p>
        </div>
      </div>

      <div className={zoomClassName}>
        <ZoomIn className="w-4 h-4 text-terracotta" />
      </div>

      {showCategoryBadge && (
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-1 text-[10px] rounded-full bg-cream/80 backdrop-blur-sm text-terracotta/70 font-medium"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            {item.category}
          </span>
        </div>
      )}
    </motion.div>
  );
}

type GalleryLightboxProps = {
  item: GalleryMediaItem;
  overlayClassName: string;
  containerClassName: string;
  closeButtonClassName: string;
  closeIconClassName: string;
  onClose: () => void;
  navigation?: {
    onPrevious: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
    current: number;
    total: number;
  };
};

export function GalleryLightbox({
  item,
  overlayClassName,
  containerClassName,
  closeButtonClassName,
  closeIconClassName,
  onClose,
  navigation,
}: GalleryLightboxProps) {
  const mediaSrc = getGalleryMediaSrc(item);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={overlayClassName}
      onClick={onClose}
    >
      {navigation && (
        <button
          onClick={navigation.onPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-mud-brown" />
        </button>
      )}
      <motion.div
        key={item.id}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`${containerClassName} !w-auto !h-auto shadow-2xl ring-1 ring-white/10`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={mediaSrc}
          alt={item.alt}
          className="block max-h-[85vh] max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)] w-auto h-auto object-contain"
        />
        <button
          onClick={onClose}
          className={`${closeButtonClassName} z-10`}
          aria-label="Close lightbox"
        >
          <X className={closeIconClassName} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none">
          <p
            className="text-sm font-medium text-white drop-shadow"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            {item.alt}
          </p>
          <p
            className="text-xs text-white/60 mt-0.5"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            {item.category}
          </p>
        </div>
      </motion.div>
      {navigation && (
        <>
          <button
            onClick={navigation.onNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors shadow-lg z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-mud-brown" />
          </button>
          <div
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1.5 rounded-full bg-cream/80 backdrop-blur-sm text-xs text-mud-brown/70 font-medium z-10"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            {navigation.current} / {navigation.total}
          </div>
        </>
      )}
    </motion.div>
  );
}
