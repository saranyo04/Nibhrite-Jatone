'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/data/site-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only run section detection on homepage
      if (pathname !== '/') return;

      // Only check section anchors (items starting with '#')
      const sectionItems = navItems.filter(item => item.href.startsWith('#'));
      const sections = sectionItems.map(item => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      return pathname === href;
    }
    // Section anchors: only active on homepage
    if (!isHomePage) return false;
    return activeSection === href.replace('#', '');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-md shadow-[0_2px_20px_rgba(107,79,58,0.08)] border-b border-warm-beige/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex flex-col items-start"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-terracotta tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {siteConfig.name}
              </a>
              <span
                className="text-[10px] sm:text-xs text-mud-brown/70 tracking-wider -mt-1"
                style={{ fontFamily: 'var(--font-noto-bengali)' }}
              >
                {siteConfig.bengaliName}
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isPageRoute = item.href.startsWith('/');

                if (isPageRoute) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                        isActive(item.href)
                          ? 'text-terracotta'
                          : 'text-mud-brown/70 hover:text-terracotta'
                      }`}
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-terracotta rounded-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                      isActive(item.href)
                        ? 'text-terracotta'
                        : 'text-mud-brown/70 hover:text-terracotta'
                    }`}
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-terracotta rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
              <Link href="/#contact">
                <motion.span
                  whileHover={{ y: -2, boxShadow: '0 6px 25px rgba(160, 82, 45, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="ml-3 inline-block px-5 py-2 bg-terracotta text-cream text-sm font-medium rounded-full transition-all duration-300 hover:bg-terracotta-dark"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  Book Stay
                </motion.span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2 text-mud-brown hover:text-terracotta transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-mud-brown/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-64 sm:w-72 bg-cream/95 backdrop-blur-lg shadow-2xl"
            >
              <div className="flex flex-col h-full p-6 sm:p-8">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2
                      className="text-xl font-semibold text-terracotta"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {siteConfig.name}
                    </h2>
                    <p
                      className="text-xs text-mud-brown/60"
                      style={{ fontFamily: 'var(--font-noto-bengali)' }}
                    >
                      {siteConfig.bengaliName}
                    </p>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 sm:p-2 text-mud-brown hover:text-terracotta transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item, i) => {
                    const isPageRoute = item.href.startsWith('/');

                    if (isPageRoute) {
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors duration-300 ${
                              isActive(item.href)
                                ? 'bg-terracotta/10 text-terracotta'
                                : 'text-mud-brown/70 hover:bg-warm-beige/50 hover:text-terracotta'
                            }`}
                            style={{ fontFamily: 'var(--font-nunito)' }}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`px-4 py-3 text-base font-medium rounded-xl transition-colors duration-300 ${
                          isActive(item.href)
                            ? 'bg-terracotta/10 text-terracotta'
                            : 'text-mud-brown/70 hover:bg-warm-beige/50 hover:text-terracotta'
                        }`}
                        style={{ fontFamily: 'var(--font-nunito)' }}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-auto">
                  <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block text-center px-6 py-3 bg-terracotta text-cream font-medium rounded-full hover:bg-terracotta-dark transition-colors"
                      style={{ fontFamily: 'var(--font-nunito)' }}
                    >
                      Book Stay
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
