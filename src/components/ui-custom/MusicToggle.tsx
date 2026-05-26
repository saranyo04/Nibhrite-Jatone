'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOn(!isOn)}
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-cream/80 backdrop-blur-sm border border-warm-beige/50 text-mud-brown/50 flex items-center justify-center hover:bg-cream hover:text-terracotta transition-all duration-300 shadow-sm"
      aria-label={isOn ? 'Mute ambient music' : 'Play ambient music'}
      title={isOn ? 'Ambient music on (aesthetic only)' : 'Ambient music off (aesthetic only)'}
    >
      {isOn ? (
        <Music className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </motion.button>
  );
}
