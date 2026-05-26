'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, Send } from 'lucide-react';
import { contactInfo } from '@/data/site-data';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-cream paper-texture">
      <div className="alpana-border-top mb-16" />

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
            Get in Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-mud-brown mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Plan Your <span className="font-semibold text-terracotta">Escape</span>
          </h2>
          <div className="w-16 h-[1px] bg-terracotta/30 mx-auto mb-6" />
          <p
            className="text-base text-mud-brown/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Plan your peaceful escape to Santiniketan. We&apos;d love to hear from you 
            and help create your perfect retreat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-2xl font-light text-mud-brown mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Visit <span className="font-semibold text-terracotta">Us</span>
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-offwhite warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm font-medium text-mud-brown mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Location
                  </p>
                  <p className="text-sm text-mud-brown/60 leading-relaxed" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-offwhite warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm font-medium text-mud-brown mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Phone
                  </p>
                  <p className="text-sm text-mud-brown/60" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {contactInfo.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-offwhite warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm font-medium text-mud-brown mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Email
                  </p>
                  <p className="text-sm text-mud-brown/60" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {contactInfo.email}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-offwhite warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm font-medium text-mud-brown mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Hours
                  </p>
                  <p className="text-sm text-mud-brown/60" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <motion.a
              href="https://maps.google.com/?q=Santiniketan+Bolpur"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: '0 6px 25px rgba(160, 82, 45, 0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-forest-green text-cream rounded-full text-sm font-medium hover:bg-forest-green-light transition-colors duration-300 shadow-[0_4px_15px_rgba(85,107,47,0.2)]"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </motion.a>

            {/* Map Placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden warm-shadow border border-warm-beige/40">
              <div className="aspect-[16/9] bg-gradient-to-br from-warm-beige to-parchment flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-terracotta/30 mx-auto mb-2" />
                  <p className="text-sm text-mud-brown/40" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    Santiniketan, Bolpur
                  </p>
                  <p className="text-xs text-mud-brown/25" style={{ fontFamily: 'var(--font-nunito)' }}>
                    West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-offwhite rounded-2xl p-6 sm:p-8 warm-shadow-lg border border-warm-beige/40">
              <h3
                className="text-2xl font-light text-mud-brown mb-2"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Send Us a <span className="font-semibold text-terracotta">Message</span>
              </h3>
              <p
                className="text-sm text-mud-brown/50 mb-6"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                We&apos;ll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-medium text-mud-brown/70 mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-warm-beige/60 text-mud-brown placeholder:text-mud-brown/30 focus:border-terracotta/40 focus:ring-1 focus:ring-terracotta/20 outline-none transition-all duration-300"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-mud-brown/70 mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-warm-beige/60 text-mud-brown placeholder:text-mud-brown/30 focus:border-terracotta/40 focus:ring-1 focus:ring-terracotta/20 outline-none transition-all duration-300"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-mud-brown/70 mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Tell us about your ideal stay..."
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-warm-beige/60 text-mud-brown placeholder:text-mud-brown/30 focus:border-terracotta/40 focus:ring-1 focus:ring-terracotta/20 outline-none transition-all duration-300 resize-none"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(160, 82, 45, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-terracotta text-cream rounded-full text-sm font-medium hover:bg-terracotta-dark transition-colors duration-300 shadow-[0_4px_15px_rgba(160,82,45,0.2)]"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  {submitted ? (
                    <span>Message Sent ✓</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-forest-green mt-4"
                  style={{ fontFamily: 'var(--font-nunito)' }}
                >
                  Thank you! We&apos;ll respond soon.
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="alpana-border-bottom mt-16" />
    </section>
  );
}
