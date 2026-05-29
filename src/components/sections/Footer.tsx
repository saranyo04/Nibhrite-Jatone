'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';
import Link from 'next/link';
import { navItems, siteConfig, footerQuote, contactInfo } from '@/data/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-cream/70">
      {/* Multi-layer curvy wave transition — from Contact section's offwhite into footer's mud-brown */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] block"
          preserveAspectRatio="none"
        >
          {/* Layer 1 (back) — deep curve with warm beige tint */}
          <path
            d="M0 150V80C120 40 240 20 360 30C480 40 600 80 720 85C840 90 960 55 1080 40C1200 25 1320 40 1380 48L1440 55V150Z"
            fill="#EADBC8"
          />
          {/* Layer 2 (mid) — medium curve, offwhite-parchment blend */}
          <path
            d="M0 150V95C96 70 192 55 288 60C384 65 480 90 576 88C672 86 768 60 864 52C960 44 1056 55 1152 68C1248 81 1344 92 1392 98L1440 104V150Z"
            fill="#F0E4CE"
          />
          {/* Layer 3 (front) — gentle curve, offwhite matching Contact section */}
          <path
            d="M0 150V110C96 95 192 82 288 86C384 90 480 108 576 105C672 102 768 84 864 78C960 72 1056 78 1152 88C1248 98 1344 108 1392 112L1440 116V150Z"
            fill="#FAF7F2"
          />
          {/* Layer 4 — mud-brown beginning at the very bottom, starting the footer color */}
          <path
            d="M0 150V130C240 118 480 112 720 118C960 124 1200 134 1440 128V150Z"
            fill="#6B4F3A"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* Footer content with gradient background */}
      <div className="bg-gradient-to-b from-mud-brown to-[#4A3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8">
          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {/* Column 1 - Brand */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-cream font-serif">
                {siteConfig.name}
              </h3>
              <p className="text-cream/50 text-sm mt-1 font-bengali">
                {siteConfig.bengaliName}
              </p>
              <p className="text-cream/60 text-sm mt-3 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Column 2 - Navigate */}
            <div>
              <h4 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">
                Navigate
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith('/') ? (
                      <Link
                        href={item.href}
                        className="text-xs sm:text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Connect */}
            <div>
              <h4 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">
                Connect
              </h4>

              {/* Social links */}
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="https://www.instagram.com/nibhritejatonehomestay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-cream/70" />
                </a>
                <a
                  href="https://www.facebook.com/nibhritejatonehomestay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-cream/70" />
                </a>
                <a
                  href="mailto:nibhritejotone@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-cream/70" />
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:nibhritejotone@gmail.com"
                className="block text-xs sm:text-sm text-cream/60 hover:text-cream transition-colors duration-200 mb-1"
              >
                {contactInfo.email}
              </a>

              {/* Phone */}
              <p className="text-xs sm:text-sm text-cream/60">
                {contactInfo.phone}
              </p>
            </div>
          </div>

          {/* Bengali Quote */}
          <div className="border-t border-cream/10 py-6 sm:py-8 text-center">
            <p className="text-cream/40 text-sm sm:text-base font-bengali italic leading-relaxed">
              {footerQuote}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-cream/40 text-xs sm:text-sm">
              &copy; {currentYear} {siteConfig.name}. Crafted with{' '}
              <Heart className="inline w-3 h-3 text-red-400 fill-red-400 mx-0.5" />{' '}
              in Santiniketan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
