'use client';

import React from 'react';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';
import Link from 'next/link';
import { navItems, siteConfig, footerQuote, contactInfo } from '@/data/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-cream/70 bg-gradient-to-b from-mud-brown to-[#4A3728]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-8">
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
    </footer>
  );
}
