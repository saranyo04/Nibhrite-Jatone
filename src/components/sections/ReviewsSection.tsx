'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { reviews } from '@/data/site-data';

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
    });
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      cancelled = true;
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-cream overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 paper-texture opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p
            className="text-sm text-terracotta/60 tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Guest Stories
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Words from Our <span className="font-semibold text-terracotta">Guests</span>
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            suppressHydrationWarning
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cream/90 border border-warm-beige/50 flex items-center justify-center shadow-sm hover:bg-terracotta/10 hover:border-terracotta/30 transition-all duration-300 -translate-x-1 sm:-translate-x-4"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta/70" />
          </button>
          <button
            onClick={scrollNext}
            suppressHydrationWarning
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cream/90 border border-warm-beige/50 flex items-center justify-center shadow-sm hover:bg-terracotta/10 hover:border-terracotta/30 transition-all duration-300 translate-x-1 sm:translate-x-4"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta/70" />
          </button>

          {/* Embla viewport */}
          <div className="mx-2 sm:mx-8 md:mx-12" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, i) => (
                <div key={i} className="flex-none w-[90%] sm:w-[80%] md:w-[60%] pl-4">
                  <div className="bg-cream/80 rounded-2xl p-4 sm:p-6 md:p-8 warm-shadow border border-warm-beige/40 relative h-full">
                    <Quote className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 text-terracotta/10" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 sm:w-4 sm:h-4 fill-dusty-gold text-dusty-gold" />
                      ))}
                    </div>
                    <p
                      className="text-xs sm:text-sm md:text-base text-mud-brown/70 leading-relaxed mb-6 italic"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                        <span
                          className="text-xs sm:text-sm font-semibold text-terracotta"
                          style={{ fontFamily: 'var(--font-cormorant)' }}
                        >
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <p
                        className="text-xs sm:text-sm font-medium text-mud-brown"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                      >
                        {review.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-8">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? 'bg-terracotta w-4 sm:w-6'
                    : 'bg-terracotta/25 hover:bg-terracotta/40'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
