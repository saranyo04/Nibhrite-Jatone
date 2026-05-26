'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';
import { navItems, siteConfig, footerQuote } from '@/data/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-mud-brown to-[#4A3728] text-cream/70">
      {/* Top decorative wave */}
      <div className="absolute -top-6 left-0 right-0">
        <svg viewBox="0 0 1440 30" preserveAspectRatio="none" className="w-full h-6">
          <path
            d="M0 30 L0 15 Q180 0 360 15 Q540 30 720 15 Q900 0 1080 15 Q1260 30 1440 15 L1440 30 Z"
            fill="#6B4F3A"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-semibold text-cream/90 mb-2"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {siteConfig.name}
            </h3>
            <p
              className="text-sm text-terracotta-light/60 mb-4"
              style={{ fontFamily: 'var(--font-noto-bengali)' }}
            >
              {siteConfig.bengaliName}
            </p>
            <p
              className="text-sm text-cream/50 leading-relaxed max-w-xs"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-semibold text-cream/70 tracking-wider uppercase mb-4"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Navigate
            </h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-cream/40 hover:text-terracotta-light transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4
              className="text-sm font-semibold text-cream/70 tracking-wider uppercase mb-4"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: 'mailto:stay@nibhritejatone.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta/30 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-cream/60" />
                </motion.a>
              ))}
            </div>
            <p
              className="text-sm text-cream/40"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              stay@nibhritejatone.com
            </p>
            <p
              className="text-sm text-cream/40 mt-1"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Bengali Quote */}
        <div className="text-center py-8 border-t border-cream/10">
          <p
            className="text-base text-terracotta-light/40 italic mb-2"
            style={{ fontFamily: 'var(--font-noto-bengali)' }}
          >
            {footerQuote}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-cream/5">
          <p
            className="text-xs text-cream/25 flex items-center justify-center gap-1"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            © {currentYear} {siteConfig.name}. Crafted with{' '}
            <Heart className="w-3 h-3 text-terracotta/40 fill-terracotta/40" /> in Santiniketan
          </p>
        </div>
      </div>
    </footer>
  );
}
