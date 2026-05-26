'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Utensils, Footprints, Heart, Home, Landmark, Quote, Star } from 'lucide-react';
import { aboutFeatures, reviews } from '@/data/site-data';

const featureIconMap: Record<string, React.ElementType> = {
  trees: Trees,
  utensils: Utensils,
  footprints: Footprints,
  heart: Heart,
  home: Home,
  landmark: Landmark,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-offwhite">
      {/* Subtle background texture */}
      <div className="absolute inset-0 paper-texture opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm text-terracotta/60 tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Our Story
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            About <span className="font-semibold text-terracotta">Nibhṛite Jatone</span>
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto" />
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden warm-shadow-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about-home.jpg"
                  alt="Nibhṛite Jatone - Traditional Bengali Homestay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Decorative corner frame */}
              <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-terracotta/20 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-terracotta/20 rounded-br-lg" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-4 bg-cream/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-warm-beige/50 max-w-[220px]"
            >
              <p
                className="text-xs text-terracotta/60 italic leading-relaxed"
                style={{ fontFamily: 'var(--font-noto-bengali)' }}
              >
                প্রকৃতির কোলে মনের শান্তি
              </p>
              <p
                className="text-[10px] text-mud-brown/40 mt-1"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Peace of mind in nature&apos;s embrace
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="text-base sm:text-lg text-mud-brown/70 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              At <span className="text-terracotta font-semibold" style={{ fontFamily: 'var(--font-cormorant)' }}>Nibhṛite Jatone</span>, 
              we don&apos;t just host guests — we welcome them into our home and our hearts. 
              Tucked away in the calm green surroundings of Santiniketan, our homestay is a 
              sanctuary where the noise of the world fades and the music of nature takes over.
            </p>
            <p
              className="text-base text-mud-brown/60 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Wake up to the songs of birds, sip morning tea under Sal trees, walk to the 
              Sonajhuri forest just minutes away, and return to home-cooked Bengali meals 
              prepared with the care and warmth of a mother&apos;s kitchen. This is not a hotel — 
              this is home, away from home.
            </p>

            {/* Bengali quote */}
            <div className="border-l-2 border-terracotta/30 pl-4 mb-8">
              <p
                className="text-sm text-terracotta/50 italic"
                style={{ fontFamily: 'var(--font-noto-bengali)' }}
              >
                যেখানে সময় থমকে যায়, শান্তি ফিরে আসে
              </p>
              <p
                className="text-xs text-mud-brown/30 mt-1"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Where time stands still, and peace returns
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutFeatures.map((feature, i) => {
                const Icon = featureIconMap[feature.icon] || Heart;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-cream/50 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-terracotta/8 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-terracotta/70" />
                    </div>
                    <p
                      className="text-sm text-mud-brown/70 leading-relaxed"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {feature.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-center mb-10">
            <p
              className="text-sm text-terracotta/60 tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Guest Stories
            </p>
            <h3
              className="text-2xl sm:text-3xl font-light text-mud-brown"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Words from Our <span className="font-semibold text-terracotta">Guests</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-cream/80 rounded-2xl p-6 sm:p-8 warm-shadow border border-warm-beige/40 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-terracotta/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-dusty-gold text-dusty-gold" />
                  ))}
                </div>
                <p
                  className="text-sm text-mud-brown/70 leading-relaxed mb-4 italic"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-terracotta" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium text-mud-brown"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs text-mud-brown/40"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
