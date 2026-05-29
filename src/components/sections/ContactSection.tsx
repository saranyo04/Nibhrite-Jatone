'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, Send, AlertCircle } from 'lucide-react';
import { contactInfo } from '@/data/site-data';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleWhatsApp = useCallback(() => {
    const message = formData.email
      ? `Hi, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`
      : `Hi, I'm ${formData.name}.\n\n${formData.message}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919748318934?text=${encoded}`, '_blank');
  }, [formData]);

  const handleSendEmail = useCallback(() => {
    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError(null);

    const subject = encodeURIComponent(`Message from ${formData.name} — Nibhṛite Jatone Inquiry`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

    try {
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    } catch {
      setEmailError('Email not found on this device. Please use WhatsApp instead.');
    }
  }, [formData]);

  const emailIsValid = formData.email.length > 0 && isValidEmail(formData.email);
  const emailIsInvalid = formData.email.length > 0 && !isValidEmail(formData.email);

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 bg-offwhite paper-texture">
      <div className="alpana-border-top mb-10 sm:mb-14 lg:mb-16" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-xl sm:text-2xl font-light text-mud-brown mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Visit <span className="font-semibold text-terracotta">Us</span>
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-cream warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm font-medium text-mud-brown mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Address
                  </p>
                  <p className="text-sm text-mud-brown/60 leading-relaxed" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-cream warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm font-medium text-mud-brown mb-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm text-mud-brown/60" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {contactInfo.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-cream warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta" />
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
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-cream warm-shadow border border-warm-beige/40 hover:border-terracotta/20 transition-all duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta" />
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

            {/* Directions & WhatsApp Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <motion.a
                href="https://maps.app.goo.gl/es4hNxSJEQhJpXfw9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 6px 25px rgba(85, 107, 47, 0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-forest-green text-cream rounded-full text-xs sm:text-sm font-medium hover:bg-forest-green-light transition-colors duration-300 shadow-[0_4px_15px_rgba(85,107,47,0.2)]"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </motion.a>

              <motion.a
                href="https://wa.me/919748318934"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: '0 6px 25px rgba(37, 211, 102, 0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] text-white rounded-full text-xs sm:text-sm font-medium hover:brightness-110 transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.2)]"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </motion.a>
            </div>

            {/* Google Map */}
            <div className="mt-6 rounded-xl overflow-hidden warm-shadow border border-warm-beige/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d87.6465327!3d23.6785441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9dd00342cd225%3A0xd422acc6dcc8d26b!2sNibh%E1%B9%9Bite%20Jatone!5e0!3m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nibhṛite Jatone Location"
                className="w-full sm:h-[300px]"
              />
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-cream rounded-2xl p-5 sm:p-6 lg:p-8 warm-shadow-lg border border-warm-beige/40">
              <h3
                className="text-xl sm:text-2xl font-light text-mud-brown mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Send Us a <span className="font-semibold text-terracotta">Message</span>
              </h3>
              <p
                className="text-sm text-mud-brown/50 mb-6"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Fill in your details and reach out via WhatsApp or Email
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleWhatsApp();
                }}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    className="block text-sm font-medium text-mud-brown/70 mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    suppressHydrationWarning
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl bg-offwhite border border-warm-beige/60 text-mud-brown placeholder:text-mud-brown/30 focus:border-terracotta/40 focus:ring-1 focus:ring-terracotta/20 outline-none transition-all duration-300"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  />
                </div>

                {/* Email (optional) */}
                <div>
                  <label
                    className="block text-sm font-medium text-mud-brown/70 mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    Email{' '}
                    <span className="text-mud-brown/40 font-normal">(optional — required for email)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData({ ...formData, email: val });
                      if (val.length > 0 && !isValidEmail(val)) {
                        setEmailError('Please enter a valid email address');
                      } else {
                        setEmailError(null);
                      }
                    }}
                    suppressHydrationWarning
                    placeholder="your@email.com"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl bg-offwhite text-mud-brown placeholder:text-mud-brown/30 outline-none transition-all duration-300 ${
                      emailIsInvalid
                        ? 'border-2 border-red-400 focus:ring-1 focus:ring-red-300'
                        : emailIsValid
                          ? 'border-2 border-green-500 focus:ring-1 focus:ring-green-300'
                          : 'border border-warm-beige/60 focus:border-terracotta/40 focus:ring-1 focus:ring-terracotta/20'
                    }`}
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  />
                  {emailIsInvalid && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                      <AlertCircle className="w-3 h-3" />
                      Please enter a valid email address
                    </p>
                  )}
                  {emailIsValid && (
                    <p className="mt-1.5 text-xs text-green-600 flex items-center gap-1" style={{ fontFamily: 'var(--font-nunito)' }}>
                      Email valid — you can send via email
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-sm font-medium text-mud-brown/70 mb-2"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Tell us about your ideal stay..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl bg-offwhite border border-warm-beige/60 text-mud-brown placeholder:text-mud-brown/30 focus:border-terracotta/40 focus:ring-1 focus:ring-terracotta/20 outline-none transition-all duration-300 resize-none"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Send via WhatsApp */}
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2, boxShadow: '0 6px 25px rgba(37, 211, 102, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    suppressHydrationWarning
                    className="flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] text-white rounded-full text-xs sm:text-sm font-medium hover:brightness-110 transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.2)]"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </motion.button>

                  {/* Send via Email */}
                  <motion.button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={!emailIsValid}
                    whileHover={!emailIsValid ? {} : { y: -2, boxShadow: '0 6px 25px rgba(160, 82, 45, 0.3)' }}
                    whileTap={!emailIsValid ? {} : { scale: 0.97 }}
                    suppressHydrationWarning
                    className={`flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      emailIsValid
                        ? 'bg-terracotta text-cream hover:bg-terracotta-dark shadow-[0_4px_15px_rgba(160,82,45,0.2)]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    style={{ fontFamily: 'var(--font-nunito)' }}
                  >
                    <Send className="w-4 h-4" />
                    {emailIsValid ? 'Send via Email' : 'Enter valid email to enable'}
                  </motion.button>
                </div>
              </form>

              {/* Email Error Banner */}
              {emailError && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200"
                >
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-sm text-red-600" style={{ fontFamily: 'var(--font-nunito)' }}>
                    {emailError}
                  </p>
                </motion.div>
              )}

              {/* Footer Note */}
              <p
                className="mt-5 text-xs text-mud-brown/40 text-center leading-relaxed"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                WhatsApp: pre-filled message — just hit send! · Email: opens your email app with the message
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy transition into footer — mud-brown wave on offwhite background */}
      <div className="w-full mt-10 sm:mt-14 lg:mt-16">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[35px] md:h-[40px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V12C1320 28 1200 4 1080 18C960 32 840 4 720 18C600 32 480 4 360 18C240 32 120 4 0 18V0Z"
            fill="#6B4F3A"
          />
        </svg>
      </div>
    </section>
  );
}
